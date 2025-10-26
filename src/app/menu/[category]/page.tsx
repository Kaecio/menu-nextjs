"use client";

import { Box, Typography } from "@mui/material";
import { use } from "react";
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
  console.log("Category param:", category);

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
    default:
      return <Typography color="white">Categoria não encontrada.</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: "#000", minHeight: "100vh", p: 4 }}>
      <Typography variant="h4" color="white" mb={3}>
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
              <Box key={key} mb={4}>
                {subCategory.title && (
                  <Typography variant="h6" color="#ffd700" mb={1}>
                    {subCategory.title}
                  </Typography>
                )}
                {subCategory.items && (
                  <>
                    {subCategory.items.map((item: MenuItem, i: number) => (
                      <Typography key={i} color="white" mb={1}>
                        {item.name} — R$ {item.price.toFixed(2)}
                      </Typography>
                    ))}
                  </>
                )}
              </Box>
            );
          }
          return null;
        })}
    </Box>
  );
}
