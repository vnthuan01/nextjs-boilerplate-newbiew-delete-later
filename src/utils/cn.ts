import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Gộp className lại với tailwind-merge (giải quyết conflict tailwind)
 * @example cn("px-2", isActive && "bg-red-500", "px-4") → "bg-red-500 px-4"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
