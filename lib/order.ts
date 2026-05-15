export type OrderPayload = {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  productName: string;
  quantity: number;
  pricePerPiece: number;
  totalPrice: number;
  notes?: string;
};

export type OrderRecord = OrderPayload & {
  orderId: string;
  dateTime: string;
  paymentMethod: "Cash On Delivery";
  orderStatus: "New Order";
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateOrderPayload(input: Partial<OrderPayload>) {
  const errors: Record<string, string> = {};

  if (!input.fullName?.trim()) errors.fullName = "Full name is required.";
  if (!input.phone?.trim()) errors.phone = "Phone number is required.";
  if (!input.email?.trim() || !emailRegex.test(input.email)) {
    errors.email = "A valid email address is required.";
  }
  if (!input.location?.trim()) errors.location = "Exact location is required.";
  if (!input.productName?.trim()) errors.productName = "Product name is required.";
  if (!Number.isFinite(input.quantity) || Number(input.quantity) < 1) {
    errors.quantity = "Quantity must be at least 1.";
  }
  if (!Number.isFinite(input.pricePerPiece) || Number(input.pricePerPiece) <= 0) {
    errors.pricePerPiece = "Price per piece must be valid.";
  }
  if (!Number.isFinite(input.totalPrice) || Number(input.totalPrice) <= 0) {
    errors.totalPrice = "Total price must be valid.";
  }

  return errors;
}

export function createOrderRecord(payload: OrderPayload): OrderRecord {
  return {
    ...payload,
    orderId: `SN-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`,
    dateTime: new Date().toLocaleString("en-NP", {
      timeZone: "Asia/Kathmandu",
      dateStyle: "medium",
      timeStyle: "short"
    }),
    paymentMethod: "Cash On Delivery",
    orderStatus: "New Order",
    notes: payload.notes ?? ""
  };
}
