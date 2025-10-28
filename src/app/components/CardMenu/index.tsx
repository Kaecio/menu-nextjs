"use client";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import Image from "next/image";
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
        width: "100%",
        maxWidth: { xs: 280, sm: 300, md: 320 }, // Responsivo
        borderRadius: 3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        overflow: "hidden",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 25px rgba(187, 187, 187, 0.4)",
          cursor: "pointer",
        },
      }}
    >
      <CardActionArea>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 160, sm: 180, md: 200 }, // Altura responsiva
            overflow: "hidden",
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            priority
          />
        </Box>
        <CardContent
          sx={{
            textAlign: "center",
            backgroundColor: "#fff",
            p: { xs: 2, sm: 2.5, md: 3 }, // Padding responsivo
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" }, // Fonte responsiva
            }}
          >
            {title}
          </Typography>
          {description && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem" }, // Fonte responsiva para descrição
              }}
            >
              {description}
            </Typography>
          )}
          {children && <div style={{ marginTop: 8 }}>{children}</div>}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
