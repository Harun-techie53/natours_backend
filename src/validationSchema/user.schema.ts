import z from "zod";

export const UserSchema = z.object({
  body: z.object({
    username: z.string().min(1),
    email: z.string().min(1).email(),
    password: z.string().min(1),
  }),
});

export const UserRoleSchema = z.object({
  body: z.object({
    user_id: z
      .string()
      .regex(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i, 'Invalid User Id!'),
    role_id: z
      .string()
      .regex(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i, 'Invalid Role Id!'),
  }),
});

export type UserSchemaType = z.infer<typeof UserSchema>;
