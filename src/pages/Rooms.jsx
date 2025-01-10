import {
  Typography,
  Box,
  Paper,
  Grid2 as Grid,
  Chip,
  Stack,
} from "@mui/material";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [bookingDate, setBookingDate] = useState("");

  const getRooms = async () => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const dateRange = params.get("dateRange");
    const response = await fetch(
      `http://127.0.0.1:8000/api/rooms?dateRange=${dateRange}`
    );
    const roomsData = await response.json();

    setRooms(roomsData);
    setBookingDate(dateRange);
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <NavBar>
      <Box sx={{ margin: 10 }}>
        {/* <Grid container>
          {rooms.map((room, key) => {
            const { room_type, availability_status, bed_type }
            return (
              <Grid size={{ lg: 4, md: 4, xs: 12 }}>
              <Paper key={key} sx={{ paddingX: 2, paddingY: 3 }}>

              </Paper>
            </Grid>
            )
          })}
        </Grid> */}
      </Box>
    </NavBar>
  );
}
