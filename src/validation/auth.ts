import { z } from 'zod';

const emailRegExp =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

export const authSchema = z.object({
    email: z.string().regex(emailRegExp).max(254),
    password: z.string().min(6).max(20),
});

export const nameSchema = z.string().min(2).max(30);
