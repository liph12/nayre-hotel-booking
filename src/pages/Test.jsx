import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";

// Mock function to simulate fetching room data
const fetchRooms = (date) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Standard Room",
          price: 100,
          available: Math.random() > 0.5,
        },
        {
          id: 2,
          name: "Deluxe Room",
          price: 150,
          available: Math.random() > 0.5,
        },
        { id: 3, name: "Suite", price: 200, available: Math.random() > 0.5 },
      ]);
    }, 1000);
  });
};

const Test = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedDate) {
      setLoading(true);
      fetchRooms(selectedDate)
        .then((data) => {
          setRooms(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching rooms:", error);
          setLoading(false);
        });
    }
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Hotel Room Booking
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Check-in Date"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </LocalizationProvider>
      {loading && <Typography>Loading rooms...</Typography>}
      {!loading && rooms.length > 0 && (
        <Grid container spacing={2} style={{ marginTop: "20px" }}>
          {rooms.map((room) => (
            <Grid item xs={12} sm={6} md={4} key={room.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{room.name}</Typography>
                  <Typography>Price: ${room.price}</Typography>
                  <Typography>
                    Status: {room.available ? "Available" : "Not Available"}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!room.available}
                    style={{ marginTop: "10px" }}
                  >
                    {room.available ? "Book Now" : "Not Available"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Test;
