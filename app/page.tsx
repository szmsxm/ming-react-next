import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/login">
        <button>login</button>
      </Link>
      <Link href="/chat">
        <button>chat</button>
      </Link>
    </div>
  );
}
