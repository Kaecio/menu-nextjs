import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

type ReturnMenuProps = {
  showBack?: boolean;
};

export default function ReturnMenu({ showBack = true }: ReturnMenuProps) {
  if (!showBack) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
        width: "100%",
        borderTop: "1px solid #3128daed",
      }}
    >
      <Typography variant="h6" color="white">
        <Link href="/menu" underline="none" color="inherit">
          Back
        </Link>
      </Typography>
    </Box>
  );
}
