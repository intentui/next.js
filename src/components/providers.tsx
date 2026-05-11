"use client"

import { useRouter } from "next/navigation"

import { ThemeProvider } from "next-themes"
import { RouterProvider } from "react-aria-components"
import { I18nProvider } from "react-aria-components/I18nProvider"

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>
  }
}

interface ProvidersProps {
  children: React.ReactNode
  lang?: string
}

const Providers = ({ children, lang }: ProvidersProps) => {
  const router = useRouter()
  return (
    <RouterProvider navigate={router.push}>
      <I18nProvider locale={lang}>
        <ThemeProvider
          storageKey="primitive-theme"
          enableSystem
          disableTransitionOnChange
          attribute="class"
        >
          {children}
        </ThemeProvider>
      </I18nProvider>
    </RouterProvider>
  )
}

export { Providers }
