import { siteConfig } from "@/config/site";
import type { EnquiryFormData } from "./validation";
import { serviceOptions } from "./validation";

/**
 * WHATSAPP DEEP-LINK NOTIFICATIONS
 * ---------------------------------------------------------------------------
 * We have no database and no paid messaging API wired up, so this uses the
 * free `wa.me` deep link: it opens WhatsApp on the VISITOR's device with a
 * pre-filled message addressed to the business number. The visitor still
 * has to tap "Send" themselves — WhatsApp does not allow a website to send
 * a message on someone's behalf without their own action.
 *
 * This means delivery is not 100% guaranteed (a visitor could close the
 * WhatsApp tab without sending), which is why the enquiry form ALSO posts
 * to /api/enquiry as a second, independent channel.
 *
 * To make this fully automatic (message arrives on your WhatsApp the
 * instant the form is submitted, no tap required from the visitor), you
 * need the WhatsApp Business Platform (Cloud API) via Meta — see
 * OPERATIONS.md "WhatsApp notification setup" for what that involves.
 */

function serviceLabel(value: string): string {
  return serviceOptions.find((option) => option.value === value)?.label ?? value;
}

/** Builds a clean, readable message from a submitted enquiry form. */
export function buildEnquiryWhatsappMessage(data: EnquiryFormData): string {
  const lines = [
    `New enquiry — ${siteConfig.brandName}`,
    ``,
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    data.email ? `Email: ${data.email}` : null,
    `Preferred branch/area: ${data.preferredLocation}`,
    `Service: ${serviceLabel(data.service)}`,
    data.approxRequirement ? `Approx. requirement: ${data.approxRequirement}` : null,
    data.message ? `Message: ${data.message}` : null,
  ].filter(Boolean);

  return lines.join("\n");
}

/** Builds a short, generic pre-filled message for a "quick enquiry" CTA. */
export function buildQuickEnquiryMessage(serviceName?: string): string {
  return serviceName
    ? `Hi, I'd like to enquire about ${serviceName} at ${siteConfig.brandName}.`
    : `Hi, I'd like to enquire about your services at ${siteConfig.brandName}.`;
}

/** Turns any message into a wa.me link pointed at the business number. */
export function buildWhatsappLink(message: string): string {
  const digitsOnly = siteConfig.contact.whatsappHref.replace(/[^0-9]/g, "");
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}
