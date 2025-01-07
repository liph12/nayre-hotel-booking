import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { useState, useEffect } from "react";
import dayjs from "dayjs";

const dateRangeDefValue = () => {
  const today = new Date();
  const startDate = today.toISOString().split("T")[0];
  const endDate = new Date();
  endDate.setDate(today.getDate() + 7);
  const formattedEndDate = endDate.toISOString().split("T")[0];

  return { startDate, formattedEndDate };
};

export default function BookingDateRangePicker({ setBookingDate }) {
  const { startDate, formattedEndDate } = dateRangeDefValue();
  const [dateRange, setDateRange] = useState([
    dayjs(startDate),
    dayjs(formattedEndDate),
  ]);

  const handleChangeDateRange = (range) => {
    setDateRange(range);

    if (range[0] && range[1]) {
      const startDate = range[0].format("YYYY-MM-DD");
      const endDate = range[1].format("YYYY-MM-DD");

      setBookingDate(`${startDate}|${endDate}`);
    }
  };

  useEffect(() => {
    handleChangeDateRange(dateRange);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        value={dateRange}
        onChange={(dateValue) => handleChangeDateRange(dateValue)}
        localeText={{ start: "Check-in", end: "Check-out" }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 10,
          },
        }}
      />
    </LocalizationProvider>
  );
}
