import { z } from "zod";

export const SendEmailSchema = z.object({
  user_username: z.string().trim().min(3, "O nome é obrigatório"),
  user_email: z.string().trim().email("Insira um email válido"),
  user_message: z
    .string()
    .trim()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});
