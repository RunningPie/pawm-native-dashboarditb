import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatISODate(isoDate) {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function formatISOToDDMMYYYY(isoDate) {
  const date = new Date(isoDate);

  const day = String(date.getDate()).padStart(2, '0'); // Get day with leading zero
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, add 1
  const year = date.getFullYear(); // Get full year

  return `${day}/${month}/${year}`;
}
