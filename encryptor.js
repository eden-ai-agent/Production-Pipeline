// encryptor.js
// Encrypts session data using AES (and RSA if needed for key wrapping)

import crypto from 'crypto';

const algorithm = 'aes-256-cbc';

export function encryptData(data, key) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(key, 'hex'), iv);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return {
    iv: iv.toString('hex'),
    data: encrypted,
  };
}

export function decryptData(encrypted, key) {
  const iv = Buffer.from(encrypted.iv, 'hex');
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key, 'hex'), iv);
  let decrypted = decipher.update(encrypted.data, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Generates a random 256-bit (32-byte) AES key
export function generateKey() {
  return crypto.randomBytes(32).toString('hex');
}
