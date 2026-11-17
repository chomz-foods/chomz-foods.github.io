export const PHONE_DISPLAY = "+254 737 321 365";
export const PHONE_TEL = "+254737321365";
export const WHATSAPP_NUMBER = "254737321365";
export const WHATSAPP_MESSAGE = "Hi Chomz, I'd like to place an order.";
export const CATERING_WHATSAPP_MESSAGE =
  "Hi Chomz, I'd like to talk about catering/bulk orders for an event.";

export function getWhatsAppLink(message: string = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_LINK = getWhatsAppLink();
export const CATERING_WHATSAPP_LINK = getWhatsAppLink(CATERING_WHATSAPP_MESSAGE);
export const CALL_LINK = `tel:${PHONE_TEL}`;

export const ADDRESS = "Nyakinyua Road, Kawangware, Nairobi";
export const DELIVERY_AREA = "Naivasha Road & Kikuyu Road, and surrounding Kawangware area";
export const HOURS = "Mon – Sun, 9:00 AM – 8:00 PM";

export const MAP_QUERY = encodeURIComponent(
  "Nyakinyua Road, Kawangware, Nairobi"
);

export const FACEBOOK_URL = "https://www.facebook.com/GetChomz";
export const INSTAGRAM_URL = "https://www.instagram.com/getchomz/?hl=en";
export const X_URL = "https://x.com/GetChomz";
export const TIKTOK_URL = "https://www.tiktok.com/@getchomz";

export const SITE_URL = "https://www.chomz.co.ke";
