import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href={"/"} className={router.pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link
        href="/about"
        className={router.pathname === "/about" ? "active" : ""}
      >
        About
      </Link>
      <style jsx>{`
        a {
          padding: 20px;
        }
        .active {
          margin: 20px;
        }
        nav {
          padding: 10px;
        }
      `}</style>
    </nav>
  );
}
