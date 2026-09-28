import { defineRouting } from "next-intl/routing";

/**
 * 唯一语言真相源：routing.locales
 * 必须与 src/i18n/request.ts 的 messagesMap、src/components/language-switcher.tsx
 * 的 localeLabels，以及 src/locales/*.json 文件名集合保持完全一致。
 */
export const locales = ["en", "es", "pt", "de"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
