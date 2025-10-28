import * as z from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const forgotPasswordSchema = z.object({
  email: z.email("Invalid email format"),
});

export const signUpSchema = z.object({
  email: z.email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const updatePasswordSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
