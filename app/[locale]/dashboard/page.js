"use client";
import dynamic from "next/dynamic";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const Main = dynamic(() => import("./components/main"), {
  ssr: false,
});
export default function Dashboard() {
  const session = useSession();

  const router = useRouter();

  // Redirect to home if already authenticated
  useEffect(() => {
    if (session.status !== "authenticated") {
      router.push("/");
    }
  }, [session]);

  return (
    <section
      style={{
        minHeight: "60vh",
      }}
      className="flex flex-col items-center gap-4"
    >
      <Main />
    </section>
  );
}
