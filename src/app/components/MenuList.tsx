"use client";

import { Box, Grid } from "@mui/material";
import Link from "next/link";
import MenuCard from "./CardMenu";
import { useLanguage } from "./LanguageProvider";

export default function MenuList() {
  const { language } = useLanguage();

  const items = [
    {
      key: "drink",
      name: language.drink.title,
      image: "/img/drinks.jpg",
    },
    {
      key: "dinner",
      name: language.dinner.title,
      image: "/img/dinner.jpg",
    },
    {
      key: "appetizers",
      name: language.appetizers.title,
      image: "/img/appetizers.jpg",
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
    {
      key: "cigars",
      name: language.cigars.title,
      image: "/img/cigars.jpg",
    },
  ];

  return (
    <Grid
      container
      pt={14.5}
      spacing={2}
      justifyContent="center"
      sx={{
        backgroundColor: "#000000ff",
      }}
    >
      {items.map((item, index) => (
        <Box key={index}>
          <Link href={`/menu/${item.key}`} style={{ textDecoration: "none" }}>
            <MenuCard title={item.name} image={item.image} />
          </Link>
        </Box>
      ))}
    </Grid>
  );
}
