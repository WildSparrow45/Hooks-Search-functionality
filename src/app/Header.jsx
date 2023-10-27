import Link from "next/link";
import React from "react";
import "@/Scss/Header.scss";

function Header() {
  return (
    <div className="custom-nav">
      <Link href="/">Home</Link>
      <Link href="/usestate">useState</Link>
      <Link href="/useeffect">useEffect</Link>
      <Link href="/useref">useref</Link>
      <Link href="/usecontext">useContext</Link>
      <Link href="/usememo">useMemo</Link>
    </div>
  );
}

export default Header;
