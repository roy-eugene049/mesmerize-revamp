import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Check if a value is empty (null, undefined, empty string, empty array, empty object)
 */
export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) {
    return true;
  }
  
  if (typeof value === "string") {
    return (value as string).trim().length === 0;
  }
  
  if (Array.isArray(value)) {
    return (value as unknown[]).length === 0;
  }
  
  if (typeof value === "object") {
    return Object.keys(value as object).length === 0;
  }
  
  return false;
}
