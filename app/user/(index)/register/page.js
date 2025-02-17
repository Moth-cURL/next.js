import { Box, Typography, TextField, Button } from "@mui/material";

export default function RegPage() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Typography sx={{ fontSize: "2rem", fontWeight: "bold", mb: 10 }}>
                Welcome to the User Registration Page
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                <TextField label="Username" />
                <TextField label="Password" />
                <Button variant="contained">Register</Button>
            </Box>
        </Box>
    );
}
