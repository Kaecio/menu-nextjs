import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Image from "next/image";

export default function ModalComponent({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Box>
      <Modal open={open} onClose={onClose} closeAfterTransition>
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            outline: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "transparent",
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              color: "white",
              zIndex: 10,
            }}
          ></IconButton>
          <Image
            src="/img/dinner.jpg"
            alt="teste"
            width={1200}
            height={800}
            style={{ maxWidth: "100vw", height: "auto" }}
          />
          <Typography variant="body1" color="white" mt={2}>
            Ingredientes: Arroz, bife, salada, purê.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
