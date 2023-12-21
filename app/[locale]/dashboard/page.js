
'use client'

import { useSession } from "next-auth/react";

export default function Dashboard() {
    const session = useSession()

    if (!session?.data?.user?.token) {
        return <p>Access Denied</p>
    }

    return (
        <section className="flex flex-col items-center gap-4">
            <h1 className="text-2xl text-danger">Secret page</h1>
        </section>
    )
}
