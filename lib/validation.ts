import { z } from "zod";

/**
 * Enquiry form schema — used identically on the client (for inline validation)
 * and on the server (app/api/enquiry/route.ts) so validation cannot be bypassed.
 *
 * Intentionally excludes: Aadhaar, PAN, OTP, bank account/credentials, and any
 * file/document upload fields, per business policy.
 */
export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long."),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[0-9\s-]{10,15}$/, "Please enter a valid phone number."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")),
  preferredLocation: z
    .string()
    .trim()
    .min(2, "Please tell us your preferred branch or area.")
    .max(100),
  service: z.enum(
    ["gold-loan", "savings", "recurring-deposit", "fixed-deposit", "mortgage-loan", "general"],
    { errorMap: () => ({ message: "Please select a service." }) }
  ),
  approxRequirement: z.string().trim().max(100).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .max(1000, "Message is too long.")
    .optional()
    .or(z.literal("")),
  consent: z
    .boolean()
    .refine((val) => val === true, "Please confirm you agree to be contacted."),
  // Honeypot: must always arrive empty. Bots that autofill every field will
  // populate this hidden field and get silently rejected server-side.
  companyWebsite: z.string().max(0, "Spam detected.").optional().or(z.literal("")),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;

export const serviceOptions: { value: EnquiryFormData["service"]; label: string }[] = [
  { value: "gold-loan", label: "Gold Loan" },
  { value: "savings", label: "Savings" },
  { value: "recurring-deposit", label: "Recurring Deposit" },
  { value: "fixed-deposit", label: "Fixed Deposit" },
  { value: "mortgage-loan", label: "Mortgage Loan" },
  { value: "general", label: "General Enquiry" },
];
