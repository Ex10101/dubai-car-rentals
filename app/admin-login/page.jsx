'use client'
import React, { useState } from 'react'
import { authenticate } from '@/utils/actions'
import { useRouter } from 'next/navigation'

function AdminLogin() {
    const router = useRouter()
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (formData) => {
        authenticate(formData);
        router.push("/")
    }

    return (
        <div>
            <form action={handleLogin}>
                <input type="text" name="login" placeholder="Login" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default AdminLogin