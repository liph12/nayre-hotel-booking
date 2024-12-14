import { Typography, Box, Button, Container, Divider } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import NavBar from "../components/NavBar";
import imageBg from "../assets/images/bg-image.jpg";
import HomeBackgroundImage from "../components/HomeBackgroundImage";

export default function Home() {
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
            <Button
              variant="contained"
              color="warning"
              size="large"
              startIcon={<OpenInNewIcon />}
              sx={{ borderRadius: 10, fontSize: 20, color: "#fff" }}
            >
              Book Now!
            </Button>
          </Container>
        </Box>
      </NavBar>
    </>
  );
}
