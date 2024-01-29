
'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"
import { useEffect } from "react";
import Main from "./components/main";

export default function Dashboard() {
    const session = useSession()

    const router = useRouter();

    // Redirect to home if already authenticated
    useEffect(() => {
        if (session.status !== 'authenticated') {
            router.push('/');
        }
    }, [session])

    return (
        <section style={{
            minHeight: '60vh'
        }} className="flex flex-col items-center gap-4">
            <Main />
        </section>
    )
}
