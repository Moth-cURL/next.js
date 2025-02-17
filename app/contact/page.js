import { Box, Typography } from "@mui/material";

export default async function ContactPage() {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h1">Hello Contact</Typography>
      </Box>
    );
}