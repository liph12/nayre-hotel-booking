import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Box,
  Divider,
} from "@mui/material";

export default function AdminPanel() {
  const [bookings, setBookings] = useState(() => {
    const savedBookings = localStorage.getItem("bookings");
    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  useEffect(() => {
    // Store bookings in localStorage whenever they change
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  const handleEditBooking = (index) => {
    const updatedBookings = [...bookings];
    updatedBookings[index] = {
      ...updatedBookings[index],
      price: updatedBookings[index].price + 500,
    }; // Example: Price increase
    setBookings(updatedBookings);
  };

  const handleCancelBooking = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
  };

  return (
    <Container sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Panel - Manage Bookings
      </Typography>
      <Grid container spacing={3}>
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {booking.roomTitle}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    <strong>Price:</strong> ₱ {booking.price}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Check-in:</strong> {booking.checkIn}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Check-out:</strong> {booking.checkOut}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button
                      variant="outlined"
                      color="success"
                      size="small"
                      onClick={() => handleEditBooking(index)}
                    >
                      Edit Booking
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleCancelBooking(index)}
                    >
                      Cancel Booking
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" color="textSecondary">
            No bookings available.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}
