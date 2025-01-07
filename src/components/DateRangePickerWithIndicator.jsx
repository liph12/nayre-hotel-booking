import React, { useState } from "react";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { TextField, Box } from "@mui/material";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";

// Function to check if a date should be highlighted
const isHighlightedDate = (date) => {
  if (!(date instanceof Date) || isNaN(date)) return false;
  // Example: Highlight every 5th day of the month
  return date.getDate() % 5 === 0;
};

// Custom day component with indicator
const CustomDay = (props) => {
  const { day, highlightedDates, ...other } = props;
  const isHighlighted = highlightedDates ? highlightedDates(day) : false;

  return (
    <Box sx={{ position: "relative" }}>
      <PickersDay {...other} day={day} />
      {isHighlighted && (
        <Box
          sx={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            backgroundColor: "warning.main",
            position: "absolute",
            bottom: 2,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      )}
    </Box>
  );
};

export default function DateRangePickerWithIndicator() {
  const [dateRange, setDateRange] = useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        value={dateRange}
        onChange={(newValue) => setDateRange(newValue)}
        slots={{
          day: (props) => (
            <CustomDay {...props} highlightedDates={isHighlightedDate} />
          ),
        }}
      />
    </LocalizationProvider>
  );
}
