# StyleNest Cash On Delivery Funnel

This is a complete Next.js + Tailwind CSS Cash On Delivery sales funnel for StyleNest fashion and jewelry accessories.

## Routes

- `/` - Product landing page
- `/checkout` - Cash On Delivery checkout form
- `/thank-you` - Order confirmation page
- `/api/order` - Secure order submission API

## Order Flow

1. A customer selects quantity on the landing page.
2. CTA buttons pass product name, quantity, price per piece, and total price to `/checkout`.
3. Checkout validates customer details and posts the order to `/api/order`.
4. The API generates a unique order ID, date/time, payment method, and status.
5. The order is appended to Google Sheets.
6. A professional order notification email is sent to the business Gmail.
7. A customer order received email is sent to the customer.
8. The customer is redirected to `/thank-you`.

The API returns success only after the Google Sheet submission and both emails complete successfully.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your real values:

```env
NEXT_PUBLIC_SITE_URL=
BUSINESS_EMAIL=maharjanrajan757@gmail.com
EMAIL_FROM=maharjanrajan757@gmail.com
BRAND_NAME=StyleNest

GOOGLE_SHEET_ID=
GOOGLE_SHEET_TAB_NAME=F&J Orders
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=

SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=
SMTP_PASS=

EMAIL_SERVICE_API_KEY=

FRONTEND_URL=
```

For Gmail SMTP, use an app password instead of your normal Gmail password.

## Google Spreadsheet Setup

1. Create a Google Spreadsheet.
2. Rename the sheet/tab to `F&J Orders` or set your preferred tab name in `GOOGLE_SHEET_TAB_NAME`.
3. Add these column names in row 1:

```text
Order ID
Date & Time
Customer Name
Phone Number
Email Address
Exact Location
Product Name
Quantity
Price Per Piece
Total Price
Payment Method
Order Status
Notes
```

4. Select the header row and enable filters from `Data > Create a filter`.
5. Add an order status dropdown:
   - Select the `Order Status` column cells.
   - Go to `Data > Data validation`.
   - Choose dropdown and add:
     - New Order
     - Order Confirmed
     - Order Ongoing
     - Delivered
     - Cancelled
6. Get the Sheet ID from the spreadsheet URL:

```text
https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
```

7. Create a Google Cloud service account and enable the Google Sheets API.
8. Create a JSON key for the service account.
9. Add the service account email to `GOOGLE_SERVICE_ACCOUNT_EMAIL`.
10. Add the private key to `GOOGLE_PRIVATE_KEY`. If adding it in Vercel, keep the newline escapes as `\n`.
11. Share your Google Sheet with the service account email and give it editor access.

## Email Setup

Set these variables:

- `BUSINESS_EMAIL`: Gmail address that receives order notifications.
- `EMAIL_FROM`: sender/reply-to email customers see.
- `SMTP_HOST`: for Gmail, `smtp.gmail.com`.
- `SMTP_PORT`: for Gmail SSL, `465`.
- `SMTP_USER`: your Gmail address.
- `SMTP_PASS`: your Gmail app password.
- `BRAND_NAME`: brand shown in website and emails.

No email credentials are exposed to the frontend.

## Local Development

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Testing Order Submission

1. Add real values to `.env.local`.
2. Confirm the Google Sheet is shared with the service account email.
3. Start the dev server.
4. Click an order CTA on the landing page.
5. Fill out checkout details and submit.
6. Confirm:
   - A new row appears in the Google Sheet.
   - The business email receives the order notification.
   - The customer email receives the confirmation email.
   - The page redirects to `/thank-you`.

If credentials are missing or wrong, the checkout page will show a clear error and will not redirect.

## Deploying on Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add all environment variables from `.env.example` in Vercel Project Settings.
4. Make sure `FRONTEND_URL` matches your production domain, such as `https://your-domain.com`.
5. Redeploy after adding environment variables.
6. Submit a test order on the live site and confirm the Google Sheet row plus both emails.

## Editing Product Content

Most product content lives in:

```text
lib/product.ts
```

Update product name, price, offer, images, benefits, testimonials, FAQs, and reel links there.
