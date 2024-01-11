"use client";
import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { theme } from "../theme";
import { ReactQueryProvider } from "../lib/ReactQueryProvider";
import { Toaster } from "sonner";

export default function RootLayout({ children }: { children: any }) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <head>
          <ColorSchemeScript />
          <link rel="shortcut icon" href="/favicon.svg" />
        </head>
        <body>
          <MantineProvider theme={theme}>
            <ModalsProvider>
              <div>{children}</div>
              <Toaster position="top-center" />
            </ModalsProvider>
          </MantineProvider>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
