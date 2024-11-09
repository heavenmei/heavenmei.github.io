import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  date: string | number | Date | dayjs.Dayjs | null | undefined,
  format = "YYYY-MM-DD"
) {
  return dayjs(date).format(format);
}
