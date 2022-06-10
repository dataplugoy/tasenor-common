"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crypto = void 0;
const crypto_1 = __importDefault(require("crypto"));
const buffer_1 = __importDefault(require("buffer"));
const logging_1 = require("../logging");
global.Buffer = global.Buffer || buffer_1.default.Buffer;
/**
 * Utility to encrypt and decrypt passwords.
 */
class Crypto {
    /**
     * Create new encrypt/decrypt helper with the given secret.
     * @param encryptionKey The secret.
     */
    constructor(encryptionKey) {
        if (!encryptionKey || encryptionKey.length < 32) {
            throw new Error('Encryption key is too short or does not exist.');
        }
        this.algorithm = 'aes-128-cbc';
        const salt = encryptionKey;
        const hash = crypto_1.default.createHash('sha1');
        hash.update(salt);
        this.key = hash.digest().slice(0, 16);
    }
    /**
     * Encrypt a text.
     * @param clearText Original text.
     * @returns Encrypted text.
     */
    encrypt(clearText) {
        const iv = crypto_1.default.randomBytes(16);
        const cipher = crypto_1.default.createCipheriv(this.algorithm, this.key, iv);
        const encrypted = cipher.update(clearText, 'utf8', 'hex');
        return [
            encrypted + cipher.final('hex'),
            Buffer.from(iv).toString('hex')
        ].join('|');
    }
    /**
     * Decrypt a text.
     * @param encryptedText Encrypted text.
     * @returns Original text or null on failure.
     */
    decrypt(encryptedText) {
        const [encrypted, iv] = encryptedText.split('|');
        if (!iv)
            throw new Error('IV not found when decrypting.');
        let decipher;
        try {
            decipher = crypto_1.default.createDecipheriv(this.algorithm, this.key, Buffer.from(iv, 'hex'));
            return decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
        }
        catch (err) {
            (0, logging_1.error)(`Decrypting ${encryptedText} failed.`);
            return null;
        }
    }
    /**
     * Construct a random hash as a hex encoded string.
     * @param len
     * @returns
     */
    static hash(len) {
        return crypto_1.default.randomBytes(len).toString('hex');
    }
}
exports.Crypto = Crypto;
//# sourceMappingURL=crypto.js.map