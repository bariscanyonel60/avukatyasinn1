import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ad soyad en az 2 karakter olmalıdır.")
    .max(100, "Ad soyad çok uzun."),
  email: z
    .string()
    .trim()
    .email("Geçerli bir e-posta adresi girin.")
    .max(120),
  phone: z
    .string()
    .trim()
    .max(30)
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Mesaj en az 10 karakter olmalıdır.")
    .max(2000, "Mesaj çok uzun."),
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
