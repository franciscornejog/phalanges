import { writable } from 'svelte/store';

export const isText = writable(true);
export const letter = writable('');
export const randomIndex = writable(0);
export const time = writable(0);
export const wordType = writable(null);
export const isRunning = writable(false);
