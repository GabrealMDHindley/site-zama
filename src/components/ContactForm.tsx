"use client";

import { useState, type FormEvent } from "react";
import { business } from "@/lib/business";

type FormState = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  party_size: string;
  preferred_date: string;
  message: string;
};

const initialState: FormState = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  party_size: "",
  preferred_date: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.first_name.trim()) errors.first_name = "First name is required.";
  if (!values.last_name.trim()) errors.last_name = "Last name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) errors.phone = "Phone number is required.";
  if (
    values.party_size &&
    (!/^\d+$/.test(values.party_size) || Number(values.party_size) < 1)
  ) {
    errors.party_size = "Enter a whole number of guests.";
  }
  if (!values.message.trim()) errors.message = "Tell us a bit about your visit.";
  return errors;
}

const fieldClass =
  "w-full rounded-sm border border-gold/30 bg-ground px-4 py-3 text-sm text-ivory placeholder:text-ivory/35 focus:border-gold";

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // --- No backend configured yet: falls back to a mailto: draft. ---
    // To wire this to GoHighLevel later, replace this block with a
    // `fetch(GHL_WEBHOOK_URL, { method: "POST", body: JSON.stringify(values) })`
    // call — the field names above already match typical GHL custom-field
    // keys (first_name, last_name, email, phone, message), so no form
    // changes are needed, only this submit handler.
    const subject = encodeURIComponent(
      `Reservation inquiry from ${values.first_name} ${values.last_name}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${values.first_name} ${values.last_name}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone}`,
        values.party_size ? `Party size: ${values.party_size}` : "",
        values.preferred_date ? `Preferred date: ${values.preferred_date}` : "",
        "",
        values.message,
      ]
        .filter(Boolean)
        .join("\n")
    );
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
      aria-describedby={submitted ? "contact-success" : undefined}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="first_name" className="eyebrow text-ivory/60">
            First name
          </label>
          <input
            id="first_name"
            name="first_name"
            autoComplete="given-name"
            value={values.first_name}
            onChange={update("first_name")}
            aria-invalid={!!errors.first_name}
            aria-describedby={errors.first_name ? "err-first_name" : undefined}
            className={`mt-2 ${fieldClass}`}
          />
          {errors.first_name && (
            <p id="err-first_name" className="mt-1 text-xs text-red-300">
              {errors.first_name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="last_name" className="eyebrow text-ivory/60">
            Last name
          </label>
          <input
            id="last_name"
            name="last_name"
            autoComplete="family-name"
            value={values.last_name}
            onChange={update("last_name")}
            aria-invalid={!!errors.last_name}
            aria-describedby={errors.last_name ? "err-last_name" : undefined}
            className={`mt-2 ${fieldClass}`}
          />
          {errors.last_name && (
            <p id="err-last_name" className="mt-1 text-xs text-red-300">
              {errors.last_name}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="eyebrow text-ivory/60">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
            className={`mt-2 ${fieldClass}`}
          />
          {errors.email && (
            <p id="err-email" className="mt-1 text-xs text-red-300">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="eyebrow text-ivory/60">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "err-phone" : undefined}
            className={`mt-2 ${fieldClass}`}
          />
          {errors.phone && (
            <p id="err-phone" className="mt-1 text-xs text-red-300">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="party_size" className="eyebrow text-ivory/60">
            Party size
          </label>
          <input
            id="party_size"
            name="party_size"
            inputMode="numeric"
            placeholder="e.g. 4"
            value={values.party_size}
            onChange={update("party_size")}
            aria-invalid={!!errors.party_size}
            aria-describedby={
              errors.party_size ? "err-party_size" : undefined
            }
            className={`mt-2 ${fieldClass}`}
          />
          {errors.party_size && (
            <p id="err-party_size" className="mt-1 text-xs text-red-300">
              {errors.party_size}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="preferred_date" className="eyebrow text-ivory/60">
            Preferred date
          </label>
          <input
            id="preferred_date"
            name="preferred_date"
            type="date"
            value={values.preferred_date}
            onChange={update("preferred_date")}
            className={`mt-2 ${fieldClass}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow text-ivory/60">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Occasion, seating preference, dietary notes…"
          value={values.message}
          onChange={update("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "err-message" : undefined}
          className={`mt-2 ${fieldClass}`}
        />
        {errors.message && (
          <p id="err-message" className="mt-1 text-xs text-red-300">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex items-center rounded-full border border-gold bg-gold px-7 py-3 eyebrow tracking-widest2 text-ground transition-colors hover:bg-transparent hover:text-gold"
      >
        Send Inquiry
      </button>

      <p className="text-xs text-ivory/40">
        For an immediate table, please book directly through{" "}
        <a
          href={business.openTableUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline underline-offset-2"
        >
          OpenTable
        </a>{" "}
        — this form opens an email draft and is not a live reservation.
      </p>

      {submitted && (
        <p id="contact-success" role="status" className="text-sm text-gold">
          Your email app should now have a message drafted to {business.name}
          — send it and we’ll follow up shortly.
        </p>
      )}
    </form>
  );
}
