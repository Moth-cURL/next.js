'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export default function AuthCheck({ children }) {
    const router = useRouter()
    const pathname = usePathname()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const user = localStorage.getItem('user')
        
        // 如果在登录页且已登录，重定向到主页
        if (pathname === '/user/login' && user) {
            router.push('/user/')
            return
        }
        
        // 如果不在登录页且未登录，重定向到登录页
        if (pathname !== '/user/login' && !user) {
            router.push('/user/login')
            return
        }

        setIsAuthenticated(true)
        setLoading(false)
    }, [router, pathname])

    // 在加载状态或未认证时显示空白或加载动画
    if (loading || !isAuthenticated) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <CircularProgress size={50} />
            </Box>
        )
    }

    return children
}