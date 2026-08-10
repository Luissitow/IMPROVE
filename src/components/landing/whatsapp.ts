export const WHATSAPP_NUMBER = "527225518621";
export const PHONE_DISPLAY = "+52 722 551 8621";

export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100083191605817";
export const INSTAGRAM_URL = "https://www.instagram.com/improvewrap/";

/** Estudio que diseña y desarrolla el proyecto; se enlaza desde el footer. */
export const ZYBER_URL = "https://zyber.com.mx";
export const ZYBER_DOMAIN = "zyber.com.mx";
export const ZYBER_WHATSAPP_NUMBER = "527226448900";
export const ZYBER_WHATSAPP_URL = `https://wa.me/${ZYBER_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola Luis, vengo del sitio de IMPROVE y me gustaría cotizar un sitio web para mi negocio.",
)}`;

export const ADDRESS =
  "Av. Sebastián Lerdo de Tejada Pte. 906, Electricistas Locales, 50080 Toluca de Lerdo, Méx.";
export const ADDRESS_SHORT = "Av. Lerdo Pte. 906, Toluca, Edo. de México";
export const MAPS_QUERY = encodeURIComponent(
  "Improve Wrap, Av. Sebastián Lerdo de Tejada Pte. 906, Electricistas Locales, 50080 Toluca de Lerdo",
);
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

/**
 * Link de WhatsApp con mensaje prellenado. Si se pasa un servicio, el mensaje
 * lo menciona explícitamente para que la cotización llegue ya contextualizada.
 */
export function whatsappUrl(service?: string) {
  const text = service
    ? `Hola IMPROVE, vengo de la página web y me gustaría cotizar el servicio de ${service} para mi vehículo.`
    : "Hola IMPROVE, vengo de la página web y me gustaría cotizar un servicio para mi vehículo.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const WHATSAPP_URL = whatsappUrl();
