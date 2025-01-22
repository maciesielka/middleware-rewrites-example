"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
export default function Home() {
  const searchParams = useSearchParams();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Route implementation</h1>
      <p>Slug is: {searchParams.get("slug")}</p>
      <Link href="/" className="mt-4 font-semibold">
        Go back
      </Link>
    </div>
  );
}
