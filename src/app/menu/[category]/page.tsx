"use client";
import ModalComponent from "@/app/components/Modal";
import { Box, Typography } from "@mui/material";
import { use, useState } from "react";
import { useLanguage } from "../../components/LanguageProvider";

interface MenuItem {
  name: string;
  price: number;
}

interface MenuSubCategory {
  title?: string;
  items?: MenuItem[];
}

interface MenuSection {
  title: string;
  items?: MenuItem[];
  [key: string]: string | MenuItem[] | MenuSubCategory | undefined;
}

export default function MenuDetails({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { language } = useLanguage();
  const { category } = use(params);
  const [open, setOpen] = useState(false);

  let section: MenuSection;

  switch (category) {
    case "dinner":
      section = language.dinner as MenuSection;
      break;
    case "dessert":
      section = language.dessert as MenuSection;
      break;
    case "drink":
      section = language.drink as MenuSection;
      break;
    case "japonese":
      section = language.japonese as MenuSection;
      break;
    case "appetizers":
      section = language.appetizers as MenuSection;
      break;
    case "cigars":
      section = language.cigars as MenuSection;
      break;
    default:
      return <Typography color="white">Categoria não encontrada.</Typography>;
  }

  // const handleOpenModal = () => {
  //   setOpen(true);
  // };

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        minHeight: "100vh",
        pt: 5,
        px: 4,
      }}
    >
      <Typography variant="h4" color="white" mt={8}>
        {section.title}
      </Typography>

      {/* Renderiza items diretos da seção (para dessert, drink, japonese) */}
      {section.items && (
        <Box mb={4}>
          {section.items.map((item: MenuItem, i: number) => (
            <Typography key={i} color="white" mb={1}>
              {item.name} — R$ {item.price.toFixed(2)}
            </Typography>
          ))}
        </Box>
      )}

      {/* Renderiza subcategorias (como massas, risotto etc. para dinner) */}
      {Object.entries(section)
        .filter(([key]) => key !== "title" && key !== "items")
        .map(([key, value]) => {
          // Type guard para verificar se value é um MenuSubCategory
          if (typeof value === "object" && value !== null && "title" in value) {
            const subCategory = value as MenuSubCategory;
            return (
              <Box
                key={key}
                mt={4}
                sx={{
                  border: "1px solid #d32121ff",
                  padding: 2,
                  borderRadius: 2,
                }}
              >
                {subCategory.title && (
                  <Typography variant="h6" color="#ffd700" mb={1}>
                    {subCategory.title}
                  </Typography>
                )}
                {subCategory.items && (
                  <>
                    {subCategory.items.map((item: MenuItem, i: number) => (
                      <Box
                        key={i}
                        mb={1}
                        sx={{
                          border: "1px solid #444",
                          padding: 1,
                          borderRadius: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography key={i} color="white" mb={1}>
                          {item.name} — R$ {item.price.toFixed(2)}
                        </Typography>
                        {/* <Image
                          src="/img/dinner.jpg"
                          alt={item.name}
                          width={40}
                          height={40}
                          style={{ borderRadius: "8px" }}
                          onClick={() => handleOpenModal()}
                        /> */}
                      </Box>
                    ))}
                  </>
                )}
                <ModalComponent open={open} onClose={() => setOpen(false)} />
              </Box>
            );
          }
          return null;
        })}
    </Box>
  );
}
