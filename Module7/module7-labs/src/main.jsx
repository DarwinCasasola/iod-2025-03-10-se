import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

// Arsenal FC Theme: Red, White, Gold, and Navy
const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#DB0007" // Arsenal red
        },
        secondary: {
            main: "#023474" // Navy blue accent
        },
        background: {
            default: "#ffffff", // White background
            paper: "#f5f5f5" // Light grey for cards
        },
        text: {
            primary: "#000000",
            secondary: "#555555"
        }
    },
    typography: {
        fontFamily: "'Roboto', 'Arial', sans-serif",
        h1: {
            fontWeight: 700,
            fontSize: "2.2rem"
        },
        h2: {
            fontWeight: 600,
            fontSize: "1.8rem"
        },
        body1: {
            fontSize: "1rem"
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                    textTransform: "none"
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#DB0007" // Arsenal red
                }
            }
        }
    }
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
