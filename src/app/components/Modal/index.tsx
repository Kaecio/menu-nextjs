import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";

export default function ModalComponent({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Box>
      <Modal open={open} onClose={() => setOpen(false)} closeAfterTransition>
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            outline: "none",
          }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              color: "white",
              zIndex: 10,
            }}
          ></IconButton>
          <img
            src="/img/dinner.jpg"
            alt="teste"
            width={800}
            height={600}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
      </Modal>
    </Box>
  );
}
