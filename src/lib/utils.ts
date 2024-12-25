import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFormattedDate(isoTimestamp: string) {
  const date = new Date(isoTimestamp);
  // Check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date format');
  }

  return {
    date: date.toLocaleDateString('en-US', { 
      //year: 'numeric', 
      //month: 'long', 
      day: 'numeric' 
    }),
    year: date.getFullYear(),
    month: date.toLocaleString('en-US', { month: 'long' })
  };
}

