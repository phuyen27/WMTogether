import { z } from 'zod';

export const registerSchema = z.object({
    name: z.string().min(1, 'Họ tên không được để trống'),
    email: z.string().email('Email không hợp lệ'),
    password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
    confirm_password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
    avatar: z.string().optional().refine((val) => {
        try {
            new URL(val);
            return true;
        } catch {
            return false;
        }
    }, 'URL ảnh đại diện không hợp lệ'),
}).refine((data) => data.password === data.confirm_password, {
    message: 'Mật khẩu xác nhận không trùng khớp',
    path: ['confirm_password'],
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
