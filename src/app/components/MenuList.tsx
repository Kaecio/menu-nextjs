"use client";

import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useLanguage } from "./LanguageProvider";

export default function MenuList() {
  const { language } = useLanguage();
  console.log("linguas => ", language);

  const items = [
    {
      name: language.dinner.title,
      desc: "🍝 Pastas, risottos, meats, fish...",
    },
    { name: language.drink.title, desc: "🥤" },
    { name: language.dessert.title, desc: "🍨 Ice creams, cakes, fruits..." },
    { name: language.japonese.title, desc: "🍣 Sushi, sashimi, tempura..." },
  ];

  return (
    <Box
      sx={{
        p: 3,
        border: "6px solid blue",
        borderRadius: 3,
        backgroundColor: "#000000a0",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        {language.title}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {items.map((item, i) => (
          <Grid key={i}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" align="center">
                  {item.name}
                </Typography>
                <Typography align="center">{item.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
