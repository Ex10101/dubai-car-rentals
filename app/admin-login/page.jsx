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
        <div className='w-full h-[88vh] flex flex-col items-center justify-center'>
            <h1 className='font-russo font-bold text-4xl mb-10'>Welcome back!</h1>
            <form className='flex flex-col items-center' action={handleLogin}>
                <label className='text-[20px] mb-2 font-bold'>Enter admin login</label>
                <input className='bg-white mb-6 border-[3px] border-black border w-[300px] h-[50px] text-xl pl-4' type="text" name="login" placeholder="Login" required />
                <label className='text-[20px] mb-2 font-bold'>Enter admin password</label>
                <input className='bg-white border-[3px] border-black border w-[300px] h-[50px] text-xl pl-4' type="password" name="password" placeholder="Password" required />
                <button className='text-black button-animate-white mt-5 w-[150px] h-[50px] text-2xl' type="submit">Login</button>
            </form>
        </div>
    )
}

export default AdminLogin