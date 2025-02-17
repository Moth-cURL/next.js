'use client'

import Link from "next/link";
import { Box, Button } from "@mui/material";

export default function UserLayout({ children }) {
    return (
        <>
            {children}
            <Box
                component="footer"
                sx={{
                    mt: 'auto',
                    p: 2,
                    backgroundColor: 'background.paper',
                    borderTop: 1,
                    borderColor: 'divider',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    mt: 20
                }}
            >
                <Button
                    component={Link}
                    href="/user/login"
                    variant="outlined"
                    size="small"
                    sx={{ borderRadius: 2 }}
                >
                    login
                </Button>
                <Button
                    component={Link}
                    href="/user/register"
                    variant="contained"
                    size="small"
                    sx={{ borderRadius: 2 }}
                >
                    reg
                </Button>
            </Box>
        </>
    );
}