import crypto from 'crypto'

export function hashString(sourceString) {
    const hash = crypto.createHash('sha256').update(sourceString).digest('base64');
    return hash
}