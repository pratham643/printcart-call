"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/join");
    }, [router]);

    return null; // No need to render anything since it's redirecting
}
