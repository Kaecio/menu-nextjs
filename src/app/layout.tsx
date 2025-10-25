import { Box, CssBaseline } from "@mui/material";
import { Metadata } from "next";
import Header from "./components/Header";
import { LanguageProvider } from "./components/LanguageProvider";
import "./global.css";

export const metadata: Metadata = {
  title: "Cardápio Multilíngue",
  description: "Menu digital com suporte a vários idiomas",
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <LanguageProvider>
          <Header />
          <Box>{children}</Box>
        </LanguageProvider>
      </body>
    </html>
  );
}
