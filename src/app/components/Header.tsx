"use client";

import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lang } from "../components/LanguageProvider";
import { useLanguage } from "./LanguageProvider";

interface Flag {
  code: Lang;
  alt: string;
  src: string;
}

export default function Header() {
  const { setLang, lang } = useLanguage();
  const pathname = usePathname();

  // verifica rota /menu/<category>
  const showBack = /^\/menu\/[^/]+\/?$/.test(pathname || "");
  console.log("setLang => ", setLang);
  console.log("lang => ", lang);

  const flags: Flag[] = [
    { code: "en", alt: "English", src: "/flags/estados-unidos.png" },
    { code: "fr", alt: "Français", src: "/flags/franca.png" },
    { code: "pt", alt: "Português", src: "/flags/brasil.png" },
    { code: "es", alt: "Esapañol", src: "/flags/espanha.png" },
    { code: "ch", alt: "Chines", src: "/flags/china.png" },
    { code: "jp", alt: "Japanese", src: "/flags/japao.png" },
  ];

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
            justifyContent: "space-around",
            gap: 0.5,
            width: "100%",
            px: 2,
          }}
        >
          {flags.map((flag) => (
            <IconButton
              key={flag.code}
              onClick={() => setLang(flag.code as Lang)}
              sx={{
                transform: lang === flag.code ? "scale(1.3)" : "scale(1)",
              }}
            >
              <Image src={flag.src} alt={flag.alt} width={42} height={42} />
            </IconButton>
          ))}
        </Toolbar>

        {showBack && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              height: "100%",
              width: "100%",
              paddingLeft: 6,
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
                style={{
                  filter: "invert(100%) brightness(200%)",
                  WebkitFilter: "invert(100%) brightness(200%)",
                }}
              />
            </Link>
          </Box>
        )}
      </AppBar>
    </Box>
  );
  // return (
  //   <Box>
  //     <AppBar
  //       position="fixed"
  //       color="transparent"
  //       elevation={0}
  //       sx={{
  //         backgroundColor: "#000000f8",
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         height: 100,
  //         border: "2px solid #ffffffff",
  //       }}
  //     >
  //       <Toolbar
  //         sx={{
  //           justifyContent: "space-around",
  //           gap: 0.5,
  //           width: "100%",
  //           px: 2,
  //         }}
  //       >
  //         <IconButton onClick={() => setLang("en")}>
  //           <Image
  //             src="/flags/estados-unidos.png"
  //             alt="English"
  //             width={42}
  //             height={42}
  //           />
  //         </IconButton>
  //         <IconButton onClick={() => setLang("fr")}>
  //           <Image
  //             src="/flags/franca.png"
  //             alt="Français"
  //             width={42}
  //             height={42}
  //           />
  //         </IconButton>
  //         <IconButton onClick={() => setLang("pt")}>
  //           <Image
  //             src="/flags/brasil.png"
  //             alt="Português"
  //             width={42}
  //             height={42}
  //           />
  //         </IconButton>
  //         <IconButton onClick={() => setLang("es")}>
  //           <Image
  //             src="/flags/espanha.png"
  //             alt="Esapañol"
  //             width={42}
  //             height={42}
  //           />
  //         </IconButton>
  //         <IconButton onClick={() => setLang("ch")}>
  //           <Image src="/flags/china.png" alt="Chines" width={42} height={42} />
  //         </IconButton>
  //         <IconButton onClick={() => setLang("jp")}>
  //           <Image
  //             src="/flags/japao.png"
  //             alt="Japanese"
  //             width={42}
  //             height={42}
  //           />
  //         </IconButton>
  //       </Toolbar>
  //       {showBack && (
  //         <Box
  //           sx={{
  //             display: "flex",
  //             justifyContent: "start",
  //             alignItems: "center",
  //             height: "100%",
  //             width: "100%",
  //             paddingLeft: 2,
  //           }}
  //         >
  //           <Link
  //             href="/menu"
  //             style={{ color: "inherit", textDecoration: "none" }}
  //           >
  //             <Image
  //               src="/icons/back.png"
  //               alt="Back"
  //               width={34}
  //               height={34}
  //               style={{ filter: "brightness(0) invert(1)" }}
  //             />
  //           </Link>
  //         </Box>
  //       )}
  //     </AppBar>
  //   </Box>
  // );
}
