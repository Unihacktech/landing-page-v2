import { ThemeProvider } from "@emotion/react";
import React from "react";
import { themeSettings } from "./theme";
import { createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./partials/Header";

const App = () => {
  const theme = createTheme(themeSettings());

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <main className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
