type ClassValue = string | number | boolean | undefined | null;
import * as Yup from "yup";

export { Yup };

export function clsx(...args: ClassValue[]): string {
    return args
        .filter(Boolean)
        .map(arg => String(arg))
        .join(' ');
}