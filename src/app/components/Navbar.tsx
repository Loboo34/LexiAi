"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <div className="navbar-brand" style={{ fontSize: '1.5rem' }}>
        <Link href="/home">
          <p style={{ margin: 0 }}>LEXI</p>
        </Link>
      </div>
      <ul className="navbar-menu" style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li className="navbar-item" style={{ margin: '0 1rem' }}>
          <Link href="/about">
            <p style={{ margin: 0 }}>About</p>
          </Link>
        </li>
        
        <li className="navbar-item" style={{ margin: '0 1rem' }}>
          <Link href="/login">
            <p style={{ margin: 0 }}>Login</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
