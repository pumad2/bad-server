import { doubleCsrf } from 'csrf-csrf'

const { doubleCsrfProtection, generateCsrfToken } = doubleCsrf({
    getSecret: () => 'csrf-secret',
    getSessionIdentifier: (req) => req.ip || 'anonymous',
    cookieName: 'csrf-token',
    cookieOptions: {
        httpOnly: true,
        sameSite: 'lax',
        secure: false,
    },
})

export const csrfProtection = doubleCsrfProtection
export { generateCsrfToken }