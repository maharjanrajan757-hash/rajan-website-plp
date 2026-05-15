import { google } from "googleapis";
import type { OrderRecord } from "./order";

const sheetHeaders = [
  "Order ID",
  "Date & Time",
  "Customer Name",
  "Phone Number",
  "Email Address",
  "Exact Location",
  "Product Name",
  "Quantity",
  "Price Per Piece",
  "Total Price",
  "Payment Method",
  "Order Status",
  "Notes"
];

const orderStatuses = ["New Order", "Order Confirmed", "Order Ongoing", "Delivered", "Cancelled"];

const requiredGoogleEnv = [
  "GOOGLE_SHEET_ID",
  "GOOGLE_SERVICE_ACCOUNT_EMAIL",
  "GOOGLE_PRIVATE_KEY",
  "GOOGLE_SHEET_TAB_NAME"
];

export function assertGoogleConfig() {
  const missing = requiredGoogleEnv.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error(`Missing Google Sheets environment variables: ${missing.join(", ")}`);
  }
}

function quoteSheetName(name: string) {
  return `'${name.replace(/'/g, "''")}'`;
}

async function ensureSheetReady(sheets: ReturnType<typeof google.sheets>) {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID!;
  const tabName = process.env.GOOGLE_SHEET_TAB_NAME!;

  const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
  let targetSheet = spreadsheet.data.sheets?.find((sheet) => sheet.properties?.title === tabName);

  if (!targetSheet) {
    const response = await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: tabName
              }
            }
          }
        ]
      }
    });

    targetSheet = response.data.replies?.[0]?.addSheet;
  }

  const sheetId = targetSheet?.properties?.sheetId;

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `${quoteSheetName(tabName)}!A1:M1`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [sheetHeaders]
    }
  });

  if (typeof sheetId === "number") {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            setDataValidation: {
              range: {
                sheetId,
                startRowIndex: 1,
                endRowIndex: 1000,
                startColumnIndex: 11,
                endColumnIndex: 12
              },
              rule: {
                condition: {
                  type: "ONE_OF_LIST",
                  values: orderStatuses.map((status) => ({ userEnteredValue: status }))
                },
                inputMessage: "Select order status",
                strict: true,
                showCustomUi: true
              }
            }
          }
        ]
      }
    });
  }
}

export async function appendOrderToSheet(order: OrderRecord) {
  assertGoogleConfig();

  const privateKey = process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n");
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });

  const sheets = google.sheets({ version: "v4", auth });
  await ensureSheetReady(sheets);

  const range = `${quoteSheetName(process.env.GOOGLE_SHEET_TAB_NAME!)}!A:M`;

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [
        [
          order.orderId,
          order.dateTime,
          order.fullName,
          order.phone,
          order.email,
          order.location,
          order.productName,
          order.quantity,
          order.pricePerPiece,
          order.totalPrice,
          order.paymentMethod,
          order.orderStatus,
          order.notes ?? ""
        ]
      ]
    }
  });
}
