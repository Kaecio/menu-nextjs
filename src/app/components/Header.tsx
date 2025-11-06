"use client";

import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const { setLang } = useLanguage();
  const pathname = usePathname();

  // verifica rota /menu/<category>
  const showBack = /^\/menu\/[^/]+\/?$/.test(pathname || "");

  return (
    <Box>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          backgroundColor: "#000000f8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 100,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            gap: 0.5,
            width: "100%",
            px: 2,
          }}
        >
          <IconButton onClick={() => setLang("en")}>
            <Image
              src="/flags/estados-unidos.png"
              alt="English"
              width={42}
              height={42}
            />
          </IconButton>
          <IconButton onClick={() => setLang("fr")}>
            <Image
              src="/flags/franca.png"
              alt="Français"
              width={42}
              height={42}
            />
          </IconButton>
          <IconButton onClick={() => setLang("pt")}>
            <Image
              src="/flags/brasil.png"
              alt="Português"
              width={42}
              height={42}
            />
          </IconButton>
          <IconButton onClick={() => setLang("es")}>
            <Image
              src="/flags/espanha.png"
              alt="Esapañol"
              width={42}
              height={42}
            />
          </IconButton>
          <IconButton onClick={() => setLang("ch")}>
            <Image src="/flags/china.png" alt="Chines" width={42} height={42} />
          </IconButton>
          <IconButton onClick={() => setLang("jp")}>
            <Image
              src="/flags/japao.png"
              alt="Japanese"
              width={42}
              height={42}
            />
          </IconButton>
        </Toolbar>
        {showBack && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              height: "100%",
              width: "100%",
              paddingLeft: 2,
            }}
          >
            <Link
              href="/menu"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Image
                src="/icons/back.png"
                alt="Back"
                width={34}
                height={34}
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
          </Box>
        )}
      </AppBar>
    </Box>
  );
}
