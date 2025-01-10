import {
  Modal,
  TextField,
  Button,
  Typography,
  Fade,
  Box,
  Backdrop,
  Grid2 as Grid,
  Divider,
  Stack,
} from "@mui/material";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  padding: 3,
};

export default function SelectRoomModal({ open, handleClose, selected }) {
  const [fields, setFields] = useState({
    checkIn: null,
    checkOut: null,
    adults: 0,
    children: 0,
  });
  const [isSaved, setIsSaved] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const price = selected?.price?.replace(",", "");

  const handleChangeField = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const getNumberOfDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const differenceInMs = end - start;
    return differenceInMs / (1000 * 60 * 60 * 24) + 1;
  };

  const handleSaveBooking = () => {
    const bookings = localStorage.getItem("bookings") ?? "[]";
    const bookingsArray = JSON.parse(bookings);
    const bookingLen = bookingsArray.length;
    const bookingIdx = bookingLen > 0 ? bookingLen + 1 : 0;

    selected.id = bookingIdx;
    selected.details = fields;

    bookingsArray.push(selected);

    const bookingsJson = JSON.stringify(bookingsArray);
    localStorage.setItem("bookings", bookingsJson);

    setIsSaved(true);
  };

  const handleReserBooking = () => {
    setIsSaved(false);
    setIsBooked(false);
    handleClose();
  };

  const handleCancelBooking = () => {
    alert("Are you sure you want to cancel this booking?");

    handleReserBooking();
  };

  const numberOfdays = getNumberOfDays(
    selected?.details?.checkIn,
    selected?.details?.checkOut
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          {!isSaved && !isBooked && (
            <Box>
              <Grid container spacing={3}>
                <Grid size={{ lg: 3, md: 4, xs: 12 }}>
                  <Typography>Check in</Typography>
                  <TextField
                    variant="outlined"
                    type="date"
                    size="small"
                    fullWidth
                    name="checkIn"
                    onChange={handleChangeField}
                  />
                </Grid>
                <Grid size={{ lg: 3, md: 4, xs: 12 }}>
                  <Typography>Check out</Typography>
                  <TextField
                    variant="outlined"
                    type="date"
                    size="small"
                    fullWidth
                    name="checkOut"
                    onChange={handleChangeField}
                  />
                </Grid>
                <Grid size={{ lg: 3, md: 4, xs: 12 }}>
                  <Typography>Adults</Typography>
                  <TextField
                    variant="outlined"
                    type="number"
                    size="small"
                    fullWidth
                    name="adults"
                    onChange={handleChangeField}
                  />
                </Grid>
                <Grid size={{ lg: 3, md: 4, xs: 12 }}>
                  <Typography>Children</Typography>
                  <TextField
                    variant="outlined"
                    type="number"
                    size="small"
                    fullWidth
                    name="children"
                    onChange={handleChangeField}
                  />
                </Grid>
              </Grid>
              <Button
                size="medium"
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: 5,
                  mt: 5,
                }}
                disableElevation
                color="warning"
                onClick={handleSaveBooking}
              >
                Save and Continue
              </Button>
            </Box>
          )}
          {isSaved && !isBooked && (
            <Box>
              <Typography variant="h4">{selected.title}</Typography>
              <Divider />
              <Grid container spacing={5}>
                <Grid size={{ lg: 6, md: 6, xs: 12 }}>
                  <Stack spacing={1} sx={{ my: 2 }}>
                    <Typography>
                      <b>Check-in date</b> {selected.details.checkIn}
                    </Typography>
                    <Typography>
                      <b>Check-out date</b> {selected.details.checkOut}
                    </Typography>
                    <Typography>
                      <b>Adults</b> {selected.details.adults}
                    </Typography>
                    <Typography>
                      <b>Children</b> {selected.details.children}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid size={{ lg: 6, md: 6, xs: 12 }}>
                  <Stack spacing={1} sx={{ my: 2 }}>
                    <Typography>
                      <b>Room Price</b> ₱{selected.price}
                    </Typography>
                    <Typography>
                      <b>Accomodation</b> {numberOfdays} days
                    </Typography>
                    <Divider />
                    <Typography variant="h6">
                      <b>Total Amount</b> ₱
                      {(numberOfdays * price).toLocaleString()}
                    </Typography>
                  </Stack>
                  <Button
                    variant="contained"
                    sx={{ borderRadius: 5 }}
                    disableElevation
                    color="warning"
                    onClick={() => setIsBooked(true)}
                  >
                    Book now!
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}
          {isBooked && (
            <Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box>
                  <Stack sx={{ textAlign: "center" }} spacing={1}>
                    <Box>
                      <CheckCircleIcon sx={{ fontSize: 80 }} color="warning" />
                    </Box>
                    <Typography variant="h5">
                      Your reservation record has been received.
                    </Typography>
                    <Typography>
                      Your reservation summary is shown below. You can use the
                      links below to cancel or make a new reservation.
                    </Typography>
                  </Stack>
                </Box>
              </Box>
              <Box sx={{ textAlign: "center", my: 2, mt: 5 }}>
                <Button
                  sx={{ textTransform: "none", borderRadius: 5, mx: 2 }}
                  size="medium"
                  color="warning"
                  variant="contained"
                  disableElevation
                  onClick={handleReserBooking}
                >
                  Make a new reservation
                </Button>
                <Button
                  sx={{ textTransform: "none", borderRadius: 5, mx: 2 }}
                  size="medium"
                  color="error"
                  variant="contained"
                  disableElevation
                  onClick={handleCancelBooking}
                >
                  Cancel reservation
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Fade>
    </Modal>
  );
}
