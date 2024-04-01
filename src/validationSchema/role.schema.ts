import { z } from "zod";

export const RoleSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    description: z.string(),
  }),
});
