import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import { theme } from "../theme";
import { ReactQueryProvider } from "../lib/ReactQueryProvider";

export const metadata = {
  title: "EduHat - Học Tiếng Séc",
  description: "Học Tiếng Séc Cùng EduHat",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <head>
          <ColorSchemeScript />
          <link rel="shortcut icon" href="/favicon.svg" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
        </head>
        <body>
          <MantineProvider theme={theme}>
            <ModalsProvider>
              <Notifications />
              {children}
            </ModalsProvider>
          </MantineProvider>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
