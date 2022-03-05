import shortWords from '../assets/words/shortWords.json'
import { writable } from 'svelte/store';

export const isText = writable(true);
export const letter = writable("");
export const randomIndex = writable(0);
export const time = writable(1300);
export const wordType = writable(shortWords);
export const isRunning = writable(false);
