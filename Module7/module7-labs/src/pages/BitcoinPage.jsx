// src/pages/BitcoinPage.jsx
import React from "react";
import BitcoinRates from "../components/BitcoinRates";
import { Container, Typography, Paper } from "@mui/material";

export default function BitcoinPage() {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Paper sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Bitcoin Exchange Rate
                </Typography>
                <BitcoinRates />
            </Paper>
        </Container>
    );
}
