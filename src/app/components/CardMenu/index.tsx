"use client";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";

interface MenuCardProps {
  title: string;
  description?: string;
  image: string;
  children?: ReactNode; // caso queira adicionar algo extra (ex: botão, preço etc)
}

export default function MenuCard({
  title,
  description,
  image,
  children,
}: MenuCardProps) {
  return (
    <Card
      sx={{
        width: 280,
        maxWidth: 320,
        borderRadius: 3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        overflow: "hidden",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          boxShadow: "0 6px 18px rgba(255, 255, 255, 0.4)",
          cursor: "pointer",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={title}
          sx={{
            objectFit: "cover",
          }}
        />
        <CardContent sx={{ textAlign: "center", backgroundColor: "#fff" }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            {title}
          </Typography>
          {description && (
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          )}
          {children && <div style={{ marginTop: 8 }}>{children}</div>}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
