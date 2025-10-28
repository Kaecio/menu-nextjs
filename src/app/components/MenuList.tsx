"use client";

import { Box, Grid } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuCard from "./CardMenu";
import { useLanguage } from "./LanguageProvider";

export default function MenuList() {
  const [allowed, setAllowed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Coordenadas do restaurante
        const restaurantLatitude = -23.617081;
        const restaurantLongitude = -46.615501;

        // Função Haversine para calcular distância em metros
        function getDistanceFromLatLonInM(lat1, lon1, lat2, lon2) {
          const R = 6371e3; // Raio da Terra em metros
          const toRad = (deg) => (deg * Math.PI) / 180;
          const dLat = toRad(lat2 - lat1);
          const dLon = toRad(lon2 - lon1);
          const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) *
              Math.cos(toRad(lat2)) *
              Math.sin(dLon / 2) *
              Math.sin(dLon / 2);
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          return R * c; // distância em metros
        }

        const distance = getDistanceFromLatLonInM(
          latitude,
          longitude,
          restaurantLatitude,
          restaurantLongitude
        );

        // Aqui você define o raio permitido (por exemplo, 100 metros)
        if (distance < 100) {
          setAllowed(true);
        } else {
          setError(
            `Você está fora da área (distância: ${distance.toFixed(1)} m).`
          );
        }
      },
      () => {
        setError("Permissão de localização negada.");
      }
    );
  }, []);

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
    <Box
      sx={{
        backgroundColor: "#000000ff",
        minHeight: "100vh",
        pt: 14.5,
        px: { xs: 2, sm: 3, md: 4 }, // Padding responsivo
      }}
    >
      {!allowed && (
        <Box
          sx={{
            color: "red",
            textAlign: "center",
            width: "100%",
            mb: 2,
            px: 2,
          }}
        >
          {error || "Aguardando permissão de localização..."}
        </Box>
      )}
      {allowed && (
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }} // Spacing responsivo
          justifyContent="center"
          alignItems="stretch"
        >
          {items.map((item, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link
                href={`/menu/${item.key}`}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <MenuCard title={item.name} image={item.image} />
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
