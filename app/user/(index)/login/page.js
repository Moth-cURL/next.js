"use client"
import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (username === "admin" && password === "admin") {
            localStorage.setItem('user', JSON.stringify({ username: 'admin' }));
            router.push("/user/");
        } else {
            alert("Invalid username or password");
        }
    }
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
                Welcome to the Admin Login Page
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                <TextField 
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField 
                    label="Password" 
                    value={password} 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" onClick={handleLogin}>Login</Button>
            </Box>
        </Box>
    );
}
