import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#2d50d3",
      },
      secondary: {
        main: "#secondary",
      },
      success: {
        main: "#0F5818",
      },
      danger: {
        main: "#db2a2a",
      },
      dark: {
        main: "#0E0E0E",
      },
      warning: {
        main: "#cb9f00",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
