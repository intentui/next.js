"use client";

import { ThemeProvider } from "next-themes";
import { I18nProvider } from "react-aria-components/I18nProvider";

interface ProviderProps {
  lang: string;
  children: React.ReactNode;
}

export function Providers({ lang, children }: ProviderProps) {
  return (
    <ThemeProvider
      storageKey="primitive-theme"
      enableSystem
      disableTransitionOnChange
      attribute="class"
    >
      <I18nProvider locale={lang}>{children}</I18nProvider>
    </ThemeProvider>
  );
}
