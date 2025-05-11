import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names with Tailwind CSS support
 * @param  {string[]} inputs - Class names to be combined
 * @returns {string} - Combined class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number to currency format
 * @param {number} value - Value to format
 * @param {string} currency - Currency code
 * @param {string} locale - Locale for formatting
 * @returns {string} - Formatted currency
 */
export function formatCurrency(value, currency = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
}

/**
 * Formats a percentage value
 * @param {number} value - Value to format as percentage
 * @param {number} decimalPlaces - Number of decimal places
 * @returns {string} - Formatted percentage
 */
export function formatPercentage(value, decimalPlaces = 2) {
  return `${value.toFixed(decimalPlaces)}%`;
}

/**
 * Truncates text with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} length - Max length before truncation
 * @returns {string} - Truncated text
 */
export function truncateText(text, length = 20) {
  if (!text) return '';
  return text.length > length ? `${text.substring(0, length)}...` : text;
}

/**
 * Shortens an address (wallet, contract, etc)
 * @param {string} address - Address to shorten
 * @param {number} chars - Number of characters to show at start and end
 * @returns {string} - Shortened address
 */
export function shortenAddress(address, chars = 4) {
  if (!address) return '';
  return `${address.substring(0, chars)}...${address.substring(address.length - chars)}`;
}