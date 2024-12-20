import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function CloseDialog({ handleCloseDialog }: any) {
  return (
    <IconButton
      aria-label="close"
      onClick={handleCloseDialog}
      sx={{
        position: "absolute",
        right: 8,
        top: 8,
        color: (theme) => theme.palette.grey[500],
      }}
    >
      <CloseIcon />
    </IconButton>
  );
}

export default CloseDialog;
