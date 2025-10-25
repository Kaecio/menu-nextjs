"use client";

import { Box, Grid } from "@mui/material";
import MenuCard from "../components/CardMenu";
import { useLanguage } from "./LanguageProvider";

export default function MenuList() {
  const { language } = useLanguage();

  const items = [
    {
      key: "dinner",
      name: language.dinner.title,
      image: "/img/dinner.jpg",
    },
    {
      key: "drink",
      name: language.drink.title,
      image: "/img/drinks.jpg",
    },
    {
      key: "dessert",
      name: language.dessert.title,
      image: "/img/dessert.jpg",
    },
    {
      key: "japonese",
      name: language.japonese.title,
      image: "/img/japonese.jpg",
    },
  ];

  return (
    <Grid
      container
      p={3}
      spacing={2}
      justifyContent="center"
      sx={{ backgroundColor: "#000000" }}
    >
      {items.map((item, index) => (
        <Box key={index}>
          <MenuCard title={item.name} image={item.image} />
        </Box>
      ))}
    </Grid>
  );
}
