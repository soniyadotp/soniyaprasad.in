import { NextApiRequest, NextApiResponse } from 'next';
import { stringifySetCookie } from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { password } = req.body;
        const correctPassword = 'password';

        if (password === correctPassword) {
            res.setHeader(
                'Set-Cookie',
                stringifySetCookie({
                    name: 'authToken',
                    value: 'authenticated',
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    maxAge: 60 * 60,
                    sameSite: 'strict',
                    path: '/',
                })
            );

            return res.status(200).json({ success: true });
        } else {
            return res.status(401).json({ message: 'Incorrect password' });
        }
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
}