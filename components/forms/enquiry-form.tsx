"use client";

import { useState, type FormEvent } from "react";
import { enquirySchema, serviceOptions, type EnquiryFormData } from "@/lib/validation";
import { Button, LinkButton } from "@/components/ui/button";
import { analytics } from "@/lib/analytics";
import { buildEnquiryWhatsappMessage, buildWhatsappLink } from "@/lib/whatsapp";

type Status = "idle" | "submitting" | "success" | "error";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  preferredLocation: "",
  service: "",
  approxRequirement: "",
  message: "",
  consent: false,
  companyWebsite: "", // honeypot
};

export function EnquiryForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string>("");
  const [whatsappFallbackLink, setWhatsappFallbackLink] = useState<string>("");

  function updateField<K extends keyof typeof values>(key: K, value: (typeof values)[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerMessage("");

    const result = enquirySchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof EnquiryFormData, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof EnquiryFormData;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    // Open the WhatsApp deep link IMMEDIATELY and synchronously inside this
    // click handler. Most mobile browsers block window.open() once it
    // happens after an `await`, so this has to fire before any network
    // call. WhatsApp is the channel we can actually guarantee reaches the
    // business, since we have no database or paid messaging API wired up.
    const whatsappLink = buildWhatsappLink(buildEnquiryWhatsappMessage(result.data));
    setWhatsappFallbackLink(whatsappLink);
    window.open(whatsappLink, "_blank", "noopener,noreferrer");

    // Best-effort: also post to /api/enquiry for a server-side record. This
    // runs in the background and doesn't block the success state below,
    // since WhatsApp is the reliable delivery path here.
    void submitInBackground(result.data);

    analytics.enquirySubmit(result.data.service);
    setStatus("success");
    setValues(initialValues);
  }

  async function submitInBackground(data: EnquiryFormData) {
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        console.warn("Background enquiry logging failed with status", response.status);
      }
    } catch {
      console.warn("Background enquiry logging failed — network error.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-gold/40 bg-surface-grey p-6 text-navy"
      >
        <p className="font-display text-lg">Thank you — we&rsquo;ve opened WhatsApp for you.</p>
        <p className="mt-2 text-sm text-ink/75">
          A message with your enquiry details is ready in WhatsApp — please tap Send there to reach our team in
          Perambra. If it didn&rsquo;t open automatically, use the button below.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <LinkButton href={whatsappFallbackLink} target="_blank" rel="noopener noreferrer">
            Open WhatsApp
          </LinkButton>
          <Button onClick={() => setStatus("idle")} variant="ghost">
            Send another enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot field — hidden from sighted users and screen readers, left blank by humans */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="companyWebsite">Leave this field blank</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.companyWebsite}
          onChange={(e) => updateField("companyWebsite", e.target.value)}
        />
      </div>

      <Field label="Full name" htmlFor="name" error={errors.name} required>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={values.name}
          onChange={(e) => updateField("name", e.target.value)}
          aria-invalid={Boolean(errors.name)}
          className={inputClass}
        />
      </Field>

      <Field label="Phone number" htmlFor="phone" error={errors.phone} required>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          value={values.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          aria-invalid={Boolean(errors.phone)}
          className={inputClass}
        />
      </Field>

      <Field label="Email (optional)" htmlFor="email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => updateField("email", e.target.value)}
          aria-invalid={Boolean(errors.email)}
          className={inputClass}
        />
      </Field>

      <Field label="Preferred branch / area" htmlFor="preferredLocation" error={errors.preferredLocation} required>
        <input
          id="preferredLocation"
          name="preferredLocation"
          type="text"
          required
          placeholder="e.g. Perambra"
          value={values.preferredLocation}
          onChange={(e) => updateField("preferredLocation", e.target.value)}
          aria-invalid={Boolean(errors.preferredLocation)}
          className={inputClass}
        />
      </Field>

      <Field label="Service you're enquiring about" htmlFor="service" error={errors.service} required>
        <select
          id="service"
          name="service"
          required
          value={values.service}
          onChange={(e) => updateField("service", e.target.value)}
          aria-invalid={Boolean(errors.service)}
          className={inputClass}
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Approximate requirement (optional)"
        htmlFor="approxRequirement"
        error={errors.approxRequirement}
      >
        <input
          id="approxRequirement"
          name="approxRequirement"
          type="text"
          placeholder="e.g. general range, no documents needed here"
          value={values.approxRequirement}
          onChange={(e) => updateField("approxRequirement", e.target.value)}
          className={inputClass}
        />
      </Field>

      <Field label="Message (optional)" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={inputClass}
        />
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm text-ink/80">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(e) => updateField("consent", e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            className="mt-1 h-4 w-4 rounded border-navy/30 text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          />
          <span>
            I agree to be contacted by Kurubranad Nidhi Limited about this enquiry. I understand no sensitive
            documents or codes (Aadhaar, PAN, OTP, bank details) will be requested online.
          </span>
        </label>
        {errors.consent ? (
          <p className="mt-1 text-sm text-red-700">{errors.consent}</p>
        ) : null}
      </div>

      {status === "error" && serverMessage ? (
        <p role="alert" className="text-sm text-red-700">
          {serverMessage}
        </p>
      ) : null}

      <Button type="submit">Send via WhatsApp</Button>
      <p className="text-xs text-ink/50">
        This opens WhatsApp with your enquiry details ready to send to our team.
      </p>
    </form>
  );
}

const inputClass =
  "block w-full rounded border border-navy/20 bg-white px-4 py-2.5 text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ label, htmlFor, error, required, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-navy mb-1.5">
        {label} {required ? <span aria-hidden="true" className="text-gold-dark">*</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
