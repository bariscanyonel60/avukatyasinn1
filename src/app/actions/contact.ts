"use server";

import { contactFormSchema } from "@/lib/validations";

export type ContactActionResult = {
  ok: boolean;
  message: string;
};

export async function submitContactForm(
  formData: FormData,
): Promise<ContactActionResult> {
  const parsed = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") ?? "",
    message: formData.get("message"),
    website: formData.get("website") ?? "",
  });

  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Form doğrulanamadı.";
    return { ok: false, message: first };
  }

  if (parsed.data.website) {
    return { ok: true, message: "Mesajınız alındı." };
  }

  // E-posta / CRM entegrasyonu sonraki adımda bağlanabilir.
  return {
    ok: true,
    message:
      "Mesajınız alındı. En kısa sürede dönüş yapılacaktır. Teşekkür ederiz.",
  };
}
