'use server'

import { cookies } from "next/headers"

function getSession() {
    const session = cookies().get('session')?.value
    return session;
}

export default getSession