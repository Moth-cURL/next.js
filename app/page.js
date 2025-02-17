'use client'

import { Box, Typography } from "@mui/material";

export default function IndexPage() {
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
      <Typography variant="h1">Hello World</Typography>
    </Box>
  );
}
