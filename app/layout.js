import Link from "next/link";
import "./globals.css";
export default function IndexLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav-container">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <Link href="/user/login" className="nav-link">Login</Link>
        </nav>
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}