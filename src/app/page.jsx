import Image from "next/image";
import Link from "next/link";
import "../Scss/Main.scss";

export default function Home() {
  return (
    <main className="custom-main text-center mt-5 border border-5 border-danger w-75 mx-auto p-5">
      <h1 className="text-primary">Hooks</h1>

      <Link href="/usestate">useState</Link>
      <Link href="/useeffect">useEffect</Link>
      <Link href="/useref">useref</Link>
      <Link href="/usecontext">useContext</Link>
      <Link href="/usememo">useMemo</Link>
    </main>
  );
}
