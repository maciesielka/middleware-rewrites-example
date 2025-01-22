import Link from "next/link";

export default function Home() {
  return (
    <ul className="flex flex-col items-center justify-center h-screen">
      <li>
        <strong>Go to:</strong>{" "}
        <Link href="/route?slug=hello-world">/route?slug=hello-world</Link>
      </li>
      <li>
        <strong>Go to:</strong>{" "}
        <Link href="/rewritten/hello-world">/rewritten/hello-world</Link>
      </li>
    </ul>
  );
}
