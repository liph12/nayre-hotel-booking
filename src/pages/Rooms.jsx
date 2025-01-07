import { Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [bookingDate, setBookingDate] = useState("");

  const getRooms = async () => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const dateRange = params.get("dateRange");

    setBookingDate(dateRange);
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <NavBar>
      <Typography>Rooms Page {bookingDate}</Typography>
    </NavBar>
  );
}
