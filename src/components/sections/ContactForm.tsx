"use client";

import { useRef, useState, useTransition } from "react";
import { submitContactForm } from "@/app/actions/contact";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  return (
    <form
      ref={formRef}
      className="border border-ink/10 bg-paper p-6 md:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setStatus("idle");
        startTransition(async () => {
          const result = await submitContactForm(formData);
          if (result.ok) {
            setStatus("success");
            setMessage(result.message);
            formRef.current?.reset();
          } else {
            setStatus("error");
            setMessage(result.message);
          }
        });
      }}
      noValidate
    >
      <p className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">
        İletişim Formu
      </p>

      <div className="mt-8 space-y-5">
        <label className="block">
          <span className="text-[0.7rem] tracking-[0.14em] text-muted uppercase">
            Ad Soyad
          </span>
          <input
            name="name"
            required
            autoComplete="name"
            className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-ink"
          />
        </label>

        <label className="block">
          <span className="text-[0.7rem] tracking-[0.14em] text-muted uppercase">
            E-posta
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-ink"
          />
        </label>

        <label className="block">
          <span className="text-[0.7rem] tracking-[0.14em] text-muted uppercase">
            Telefon
          </span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-ink"
          />
        </label>

        <label className="block">
          <span className="text-[0.7rem] tracking-[0.14em] text-muted uppercase">
            Mesaj
          </span>
          <textarea
            name="message"
            required
            rows={5}
            className="mt-2 w-full resize-y border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-ink"
          />
        </label>

        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-8 inline-flex items-center border border-ink bg-ink px-6 py-3 text-[0.72rem] tracking-[0.18em] text-paper uppercase transition-opacity disabled:opacity-60"
      >
        {pending ? "Gönderiliyor…" : "Gönder"}
      </button>

      {status !== "idle" ? (
        <p
          className={
            status === "success"
              ? "mt-4 text-sm text-ink"
              : "mt-4 text-sm text-red-700"
          }
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
