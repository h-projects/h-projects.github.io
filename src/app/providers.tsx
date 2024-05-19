import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
