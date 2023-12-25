
'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"
import { useEffect } from "react";

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
        <section className="flex flex-col items-center gap-4">
            <h1 className="text-2xl text-danger">Secret page</h1>
        </section>
    )
}
