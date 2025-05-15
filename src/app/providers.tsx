"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes";
import { atom, RecoilRoot } from "recoil";
export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

const CurrentTheme = atom({
  key: "CurrentTheme",
  default: "dark",
});

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <RecoilRoot>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </RecoilRoot>
  );
}
