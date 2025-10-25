// "use client";

// import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
// import { useLanguage } from "../LanguageProvider";

// export default function CardMenu() {
//   const { language } = useLanguage();
//   console.log("linguas => ", language);

//   const items = [
//     {
//       name: language.dinner.title,
//       desc: "🍝 Pastas, risottos, meats, fish...",
//     },
//     { name: language.drink.title, desc: "🥤" },
//     { name: language.dessert.title, desc: "🍨 Ice creams, cakes, fruits..." },
//     { name: language.japonese.title, desc: "🍣 Sushi, sashimi, tempura..." },
//   ];

//   return (
//     <Box
//       sx={{
//         p: 3,
//         backgroundColor: "#000000",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         height: "100%",
//         width: "100%",
//       }}
//     >
//       <Typography
//         variant="h4"
//         align="center"
//         gutterBottom
//         sx={{ color: "#fbfff2ff" }}
//       >
//         {language.title}
//       </Typography>
//       <Grid container spacing={4} justifyContent="center">
//         {items.map((item, i) => (
//           <Grid key={`Card-main-${i}`}>
//             <Card
//               sx={{
//                 borderRadius: 3,
//                 border: "4px solid #517009aa",
//                 width: 280,
//                 height: "100%",
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h6" align="center">
//                   {item.name}
//                 </Typography>
//                 <Typography align="center">{item.desc}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }
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
          boxShadow: "0 6px 18px rgba(187, 187, 187, 0.4)",
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
