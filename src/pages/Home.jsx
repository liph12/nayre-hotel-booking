import {
  Typography,
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Grid2 as Grid,
  Stack,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import NavBar from "../components/NavBar";
import imageBg from "../assets/images/bg-image.jpg";
import HomeBackgroundImage from "../components/HomeBackgroundImage";
import BookingDateRangePicker from "../components/BookingDateRangePicker";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [bookingDate, setBookingDate] = useState(null);

  const handleBooking = () => {
    navigate(`/rooms?dateRange=${bookingDate ?? ""}`);
  };

  return (
    <>
      <NavBar>
        <Box sx={{ position: "relative" }}>
          <HomeBackgroundImage imageUrl={imageBg} />
          <Container
            maxWidth="lg"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to Our Luxury Hotel
            </Typography>
            <Typography variant="body1" component="div" sx={{ fontSize: 18 }}>
              Experience unparalleled comfort and luxury. Whether you're
              planning a relaxing vacation, a romantic escape, or a business
              trip, our user-friendly platform makes it easier than ever to book
              your perfect stay.
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={1}>
              <Grid size={{ lg: 8, md: 8, xs: 12 }}>
                <Paper
                  sx={{
                    p: 1,
                    borderRadius: 10,
                    width: "auto",
                  }}
                >
                  <BookingDateRangePicker setBookingDate={setBookingDate} />
                </Paper>
              </Grid>
              <Grid size={{ lg: 4, md: 4, xs: 12 }} sx={{ textAlign: "left" }}>
                <Button
                  variant="contained"
                  color="warning"
                  size="large"
                  startIcon={<OpenInNewIcon />}
                  sx={{ borderRadius: 10, fontSize: 25, color: "#fff", m: 0.5 }}
                  onClick={handleBooking}
                >
                  Book now!
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </NavBar>
    </>
  );
}
