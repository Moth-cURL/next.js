'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';
export default function Sidebar() {
    const router = useRouter();

    function handleLogout() {
        localStorage.removeItem('user');
        router.push('/user/login');
    }
    return (
        <nav>
            <ul>
                <li><Link href="/user/profile">Profile</Link></li>
                <li><Link href="/user/settings">Settings</Link></li>
            </ul>
            <Button onClick={handleLogout}>Logout</Button>
        </nav>
  );
}