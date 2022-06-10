/**
 * Various independently on/off togglable debugging message channels.
 *
 * * `STOCK` - Debug changes in assets.
 * * `BALANCE` - Debug changes in account balances.
 * * `RULES` - Debug how rule filters and results are evaluated.
 * * `SEGMENTATION` - Debug results of the segmentation.
 * * `CLASSIFICATION` - Debug results of the classification.
 * * `ANALYSIS` - Debug transfer results of the analysis.
 * * `EXECUTION` - Debug process of execution.
 *
 * These can be set with by setting environment `DEBUG_<name>` to `yes`.
 */
export declare type DebugChannel = 'STOCK' | 'BALANCE' | 'RULES' | 'SEGMENTATION' | 'CLASSIFICATION' | 'ANALYSIS' | 'EXECUTION';
/**
 * Construct UTC timestamp to display for logs.
 * @param stamp
 * @returns
 */
export declare function timestamp(stamp?: Date): string;
/**
 * Log informative line to the console.
 * @param args
 */
export declare function log(...args: any[]): void;
/**
 * Log informative line with notification color to the console.
 * @param args
 */
export declare function note(...args: any[]): void;
/**
 * Log warning line to the console.
 * @param args
 */
export declare function warning(...args: any[]): void;
/**
 * Log error line to the console.
 * @param args
 */
export declare function error(...args: any[]): void;
/**
 * Silence all logging (for testi runs mainly).
 */
export declare function mute(): void;
/**
 * Restore normal logging after silencing.
 */
export declare function unmute(): void;
/**
 * Dump values if debug channel is enabled.
 * @param channel
 * @param args
 */
export declare function debug(channel: DebugChannel, ...args: any[]): void;
