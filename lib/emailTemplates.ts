import type { OrderRecord } from "./order";

function money(amount: number) {
  return `NPR ${new Intl.NumberFormat("en-NP").format(amount)}`;
}

const shell = (brand: string, inner: string) => `
  <div style="margin:0;padding:0;background:#f5f1e8;font-family:Arial,Helvetica,sans-serif;color:#151515;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f1e8;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #ead9b9;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background:#070707;color:#f8e6bd;padding:28px 30px;text-align:center;">
                <div style="font-size:28px;font-weight:700;letter-spacing:1px;">${brand}</div>
                <div style="font-size:13px;color:#d8a84f;margin-top:6px;">Premium Fashion & Jewelry Accessories</div>
              </td>
            </tr>
            <tr>
              <td style="padding:30px;">
                ${inner}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
`;

const row = (label: string, value: string | number) => `
  <tr>
    <td style="padding:10px 0;color:#6b6254;font-size:14px;border-bottom:1px solid #f0e7d7;">${label}</td>
    <td align="right" style="padding:10px 0;color:#151515;font-size:14px;font-weight:700;border-bottom:1px solid #f0e7d7;">${value}</td>
  </tr>
`;

export function businessOrderEmail(order: OrderRecord, brand: string) {
  return shell(
    brand,
    `
      <h1 style="margin:0 0 10px;font-size:26px;line-height:1.25;color:#151515;">New order received</h1>
      <p style="margin:0 0 22px;color:#5b554b;line-height:1.6;">A customer has placed a new Cash On Delivery order. Please call the customer soon to confirm this order.</p>
      <div style="display:inline-block;background:#fff5df;color:#8a6114;border:1px solid #e7c676;border-radius:999px;padding:7px 12px;font-size:13px;font-weight:700;margin-bottom:20px;">New Order</div>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
        ${row("Order ID", order.orderId)}
        ${row("Date & Time", order.dateTime)}
      </table>
      <h2 style="font-size:18px;margin:28px 0 8px;color:#151515;">Customer Details</h2>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
        ${row("Customer Name", order.fullName)}
        ${row("Phone Number", order.phone)}
        ${row("Email Address", order.email)}
        ${row("Exact Location", order.location)}
      </table>
      <h2 style="font-size:18px;margin:28px 0 8px;color:#151515;">Product Details</h2>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
        ${row("Product Name", order.productName)}
        ${row("Quantity", order.quantity)}
        ${row("Price Per Piece", money(order.pricePerPiece))}
        ${row("Total Price", money(order.totalPrice))}
      </table>
      <h2 style="font-size:18px;margin:28px 0 8px;color:#151515;">Payment Details</h2>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
        ${row("Payment Method", order.paymentMethod)}
        ${row("Order Status", order.orderStatus)}
      </table>
      <div style="margin-top:26px;background:#070707;color:#f8e6bd;border-radius:10px;padding:18px;font-weight:700;text-align:center;">
        Please call the customer soon to confirm this order.
      </div>
    `
  );
}

export function customerOrderEmail(order: OrderRecord, brand: string, supportEmail: string) {
  return shell(
    brand,
    `
      <h1 style="margin:0 0 10px;font-size:26px;line-height:1.25;color:#151515;">Thank you for your order</h1>
      <p style="margin:0 0 20px;color:#5b554b;line-height:1.7;">Hi ${order.fullName},<br/>We have received your order successfully. Our sales representative will call you soon to confirm your order.</p>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
        ${row("Order ID", order.orderId)}
        ${row("Product", order.productName)}
        ${row("Quantity", order.quantity)}
        ${row("Total Price", money(order.totalPrice))}
        ${row("Payment Method", order.paymentMethod)}
      </table>
      <div style="margin-top:26px;background:#fff7e5;border:1px solid #ead39e;border-radius:10px;padding:18px;color:#5a4213;line-height:1.6;">
        Your order is reserved for Cash On Delivery. Please keep your phone available for confirmation.
      </div>
      <p style="margin:24px 0 0;color:#5b554b;line-height:1.7;">Need help? Reply to this email or contact us at <strong>${supportEmail}</strong>.</p>
      <p style="margin:18px 0 0;color:#151515;font-weight:700;">Thank you,<br/>${brand}</p>
    `
  );
}
