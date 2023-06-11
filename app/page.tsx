import Sbutton from "@/commponent/sButton";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      hello world
      <Sbutton></Sbutton>
      <Link href="/login">
        <button>login</button>
      </Link>
    </div>
  );
}
