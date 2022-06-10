/// <reference types="node" />
import { Secret } from '../types';
/**
 * Utility to encrypt and decrypt passwords.
 */
export declare class Crypto {
    algorithm: string;
    key: Buffer;
    /**
     * Create new encrypt/decrypt helper with the given secret.
     * @param encryptionKey The secret.
     */
    constructor(encryptionKey: Secret);
    /**
     * Encrypt a text.
     * @param clearText Original text.
     * @returns Encrypted text.
     */
    encrypt(clearText: string): string;
    /**
     * Decrypt a text.
     * @param encryptedText Encrypted text.
     * @returns Original text or null on failure.
     */
    decrypt(encryptedText: string): string | null;
    /**
     * Construct a random hash as a hex encoded string.
     * @param len
     * @returns
     */
    static hash(len: number): string;
}
