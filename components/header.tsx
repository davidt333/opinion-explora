'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold">
            Opinion Explora
          </Link>
        </div>

        <nav className="flex items-center gap-6">
          <ul className="flex gap-6">
            <li>
              <Link
                href="/"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === '/' ? 'text-primary' : 'text-muted-foreground'
                }`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/audios"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === '/audios'
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}>
                Audios
              </Link>
            </li>
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
