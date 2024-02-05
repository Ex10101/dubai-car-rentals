'use server'

import { cookies } from 'next/headers'

async function signIn() {
    const isLoggedIn = true;
    cookies().set('session', isLoggedIn, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/'
    })
}
 
export async function authenticate(formData) {
    if(formData.get("login") === process.env.ADMIN_USER && formData.get("password") === process.env.ADMIN_PASSWORD) {
        try {
            signIn();
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("incorrect data")
    }
}