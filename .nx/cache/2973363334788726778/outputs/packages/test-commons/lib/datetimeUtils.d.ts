/**
 * Converts a `Date` to a "D/M/YYYY" string.
 * Do not use `YYYY-MM-DD` format in tests as JS Dates interpret that as UTC and the parsed Date can be a day before intended.
 */
export declare function toDateString(date: Date): string;
export declare function toDateHourMinuteString(date: Date): string;
/**
 * Creates a date object with time only.
 */
export declare function createTimeObject(hour: number, minute?: number, second?: number, millisecond?: number): Date;
export declare function assertTimeIs(time: Date | undefined, hours: number, minutes: number, seconds?: number, milliseconds?: number): void;
export declare function assertDatesEqual(a: Date, b: Date): void;
