import Opaque from 'ts-opaque';
import { PluginCode } from './plugins';
export declare type Hostname = Opaque<string, 'Hostname'>;
export declare type Url = Opaque<string, 'Url'>;
export declare function isUrl(s: unknown): s is Url;
export declare type LocalUrl = Opaque<string, 'LocalUrl'>;
export declare function isLocalUrl(s: unknown): s is LocalUrl;
export declare const TOKEN_EXPIRY_TIME: number;
export declare const REFRESH_TOKEN_EXPIRY_TIME: number;
export declare const TOKEN_ISSUER = "Tasenor";
/**
 * Intented audience of the security token.
 * * `refresh` - Can only be used for refreshing another token.
 * * `sites` - Can be used when a boookkeeper site comminicates to ERP.
 *
 * * `erp` - Communication from Bookkeeper to the ERP system by registered site backend.
 * * `ui` - Communication from Bookkeeper to the ERP system by UI server.
 * * `bookkeeping` - Communication from Bookkeeper UI to backend by logged in user.
 * * `plugins` - A token used by plugin publishers.
 */
export declare type TokenAudience = 'refresh' | 'erp' | 'ui' | 'sites' | 'bookkeeping' | 'plugins' | 'internal';
/**
 * An encoded token string.
 */
export declare type Token = Opaque<string, 'Token'>;
/**
 * A secret used for signing.
 */
export declare type Secret = Opaque<string, 'Secret'>;
/**
 * Feature flags for tokens.
 */
export declare type TokenFeats = {
    ADMIN?: boolean;
    SUPERUSER?: boolean;
};
/**
 * Names of the token features.
 */
export declare type TokenFeatName = keyof TokenFeats;
/**
 * Payload for the token.
 */
export interface NormalTokenPayload {
    owner: string;
    feats: TokenFeats;
    plugins?: PluginCode[];
}
/**
 * Payload for the refresh token.
 */
export interface RefreshTokenPayload {
    owner: string;
    feats: TokenFeats;
    plugins: PluginCode[];
    audience: TokenAudience;
}
/**
 * Any token payload.
 */
export declare type TokenPayload = RefreshTokenPayload | NormalTokenPayload;
/**
 * A pair containig both token and refresh token for it.
 */
export declare type TokenPair = {
    refresh: Token;
    token: Token;
};
