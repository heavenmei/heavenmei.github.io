import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, parseISO } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  dateString: string,
  formatString: string = 'yyyy-MM-dd'
): string {
  try {
    return format(parseISO(dateString), formatString);
  } catch (error) {
    console.error('日期格式化错误:', error);
    return dateString; // 如果格式化失败,返回原始字符串
  }
}
