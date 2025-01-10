import {
  Typography,
  Box,
  Container,
  Divider,
  Grid2 as Grid,
} from "@mui/material";
import RoomCard from "../components/RoomCard";
import Room1 from "../assets/images/r1.jpg";
import Room2 from "../assets/images/r2.jpg";
import Room3 from "../assets/images/r3.jpg";
import NavBar from "../components/NavBar";
import imageBg from "../assets/images/bg-image.jpg";
import HomeBackgroundImage from "../components/HomeBackgroundImage";
import SelectRoomModal from "../components/SelectRoomModal";
import { useState } from "react";

const rooms = [
  {
    title: "Grand Deluxe",
    description:
      "Experience ultimate luxury and comfort in our Grand Deluxe Room, thoughtfully designed to provide a relaxing and memorable stay. Perfect for travelers seeking an elevated experience, this room blends modern amenities with elegant design.",
    image: Room1,
    price: "6,000",
  },
  {
    title: "King Deluxe",
    description:
      "The King Deluxe Room offers a luxurious escape with a plush king-sized bed, elegant décor, a modern en-suite bathroom, high-speed Wi-Fi, and scenic views, perfect for a relaxing and memorable stay.",
    image: Room2,
    price: "5,500",
  },
  {
    title: "Classic Room",
    description:
      "Experience comfort and elegance in our Classic Room, featuring a plush bed, tasteful decor, and modern amenities. Ideal for relaxation or work, this spacious room offers a perfect blend of style and functionality for a memorable stay.",
    image: Room3,
    price: "4,000",
  },
];

export default function Home() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isSelectRoom, setIsSelectRoom] = useState(false);
  const handleSelectRoom = (s) => setIsSelectRoom(!isSelectRoom);

  return (
    <>
      <SelectRoomModal
        handleClose={handleSelectRoom}
        open={isSelectRoom}
        selected={selectedRoom}
      />
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
              color: "white",
              paddingTop: 70,
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h2" component="h1" gutterBottom>
                Welcome to Our Luxury Hotel
              </Typography>
              <Typography variant="body1" component="div" sx={{ fontSize: 18 }}>
                Experience unparalleled comfort and luxury. Whether you're
                planning a relaxing vacation, a romantic escape, or a business
                trip, our user-friendly platform makes it easier than ever to
                book your perfect stay.
              </Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            {/* <Grid container spacing={1}>
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
                  startIcon={<ChevronRight />}
                  sx={{ borderRadius: 10, fontSize: 25, color: "#fff", m: 0.5 }}
                  onClick={handleBooking}
                >
                  Search
                </Button>
              </Grid>
            </Grid> */}
            <Box sx={{ marginTop: 10 }}>
              <Grid container spacing={3}>
                {rooms.map((room) => (
                  <Grid size={{ lg: 4, md: 4, xs: 12 }}>
                    <RoomCard
                      bgImage={room.image}
                      title={room.title}
                      desc={room.description}
                      price={room.price}
                      handleSelectRoom={handleSelectRoom}
                      setSelectedRoom={setSelectedRoom}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>
        <Box sx={{ height: "80vh", backgroundColor: "#111" }} />
      </NavBar>
    </>
  );
}
