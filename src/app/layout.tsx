import { Container, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import { LanguageProvider } from "./components/LanguageProvider";
import "./global.css";

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
          <Container  maxWidth="lg">
            {children}
          </Container>
        </LanguageProvider>
      </body>
    </html>
  );
}
