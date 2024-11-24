import { ThemeProvider } from "@/components/theme-provider";
import React, { PropsWithChildren } from "react";

export const Provider = (pros: PropsWithChildren) => {
  return (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
      {pros.children}
      </ThemeProvider>
  );
};
