"use client";

import { AppBar, IconButton, Toolbar } from "@mui/material";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const { setLang } = useLanguage();

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ backgroundColor: "#000000f8" }}
    >
      <Toolbar
        sx={{
          justifyContent: "center",
          gap: 2,
          border: "1px solid green",
        }}
      >
        <IconButton onClick={() => setLang("en")}>
          <Image
            src="/flags/estados-unidos.png"
            alt="English"
            width={32}
            height={32}
          />
        </IconButton>
        <IconButton onClick={() => setLang("fr")}>
          <Image
            src="/flags/franca.png"
            alt="Français"
            width={32}
            height={32}
          />
        </IconButton>
        <IconButton onClick={() => setLang("pt")}>
          <Image
            src="/flags/brasil.png"
            alt="Português"
            width={32}
            height={32}
          />
        </IconButton>
        <IconButton onClick={() => setLang("es")}>
          <Image
            src="/flags/espanha.png"
            alt="Esapañol"
            width={32}
            height={32}
          />
        </IconButton>
        <IconButton onClick={() => setLang("ch")}>
          <Image src="/flags/china.png" alt="Chines" width={32} height={32} />
        </IconButton>
        <IconButton onClick={() => setLang("jp")}>
          <Image src="/flags/japao.png" alt="Japanese" width={32} height={32} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
