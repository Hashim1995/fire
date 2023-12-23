'use client';
import React from 'react'

import { SessionProvider as AuthSessionProvider } from 'next-auth/react';


const Providers = ({ children, session }) => {
    return (
        <AuthSessionProvider session={session}>{children}</AuthSessionProvider>
    )
}

export default Providers