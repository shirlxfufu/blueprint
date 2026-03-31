/**
 * Test utilities for Vitest + jsdom/happy-dom environments.
 *
 * These utilities are similar to those in utils.ts but are compatible with
 * jsdom's stricter event validation (no `view: window` property needed).
 *
 * For Karma/Chrome tests, use the utilities from utils.ts instead.
 */
export declare function createMouseEvent(eventType?: string, clientX?: number, clientY?: number): MouseEvent;
export declare function dispatchMouseEvent(target: EventTarget, eventType?: string, clientX?: number, clientY?: number): void;
export declare function createTouchEvent(eventType?: string, clientX?: number, clientY?: number): MouseEvent;
export declare function dispatchTouchEvent(target: EventTarget, eventType?: string, clientX?: number, clientY?: number): void;
