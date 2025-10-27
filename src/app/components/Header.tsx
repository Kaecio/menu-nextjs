"use client";

import { AppBar, IconButton, Toolbar } from "@mui/material";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const { setLang } = useLanguage();

  return (
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
          justifyContent: "center",
          gap: 1,
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
          <Image src="/flags/japao.png" alt="Japanese" width={42} height={42} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
