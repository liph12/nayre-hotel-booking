import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { useState } from "react";

export default function RoomCard({
  bgImage,
  title,
  desc,
  price,
  handleSelectRoom,
  setSelectedRoom,
}) {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);

  const handleOpenDetails = () => {
    setOpenDetailsModal(true);
  };

  const handleCloseDetails = () => {
    setOpenDetailsModal(false);
  };

  const room = { title, desc, price, bgImage };

  return (
    <>
      <Card sx={{ borderRadius: 5 }}>
        <CardMedia
          image={bgImage}
          sx={{ paddingTop: "70%", position: "relative" }}
        ></CardMedia>
        <CardContent>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography>₱ {price}</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography sx={{ color: "gray" }}>{desc}</Typography>
          <Button
            size="small"
            variant="outlined"
            endIcon={<ChevronRight />}
            sx={{ borderRadius: 5, mt: 3 }}
            color="warning"
            onClick={handleOpenDetails} // Open details modal
          >
            View Details
          </Button>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            color="warning"
            variant="contained"
            sx={{ borderRadius: 5 }}
            disableElevation
            onClick={() => {
              handleSelectRoom();
              setSelectedRoom(room);
            }}
          >
            Select Room
          </Button>
        </CardActions>
      </Card>

      {/* Modal for Room Details */}
      <Dialog open={openDetailsModal} onClose={handleCloseDetails}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <CardMedia
            component="img"
            image={bgImage}
            alt={title}
            sx={{ width: "100%", height: "auto", mb: 2 }}
          />
          <Typography variant="h6" gutterBottom>
            Price: ₱ {price}
          </Typography>
          <Typography variant="body1" paragraph>
            {desc}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            More details about the room can be placed here. You can add images,
            amenities, and more information.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDetails} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
