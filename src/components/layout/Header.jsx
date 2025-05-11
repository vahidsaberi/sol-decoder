import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { FiBell, FiSettings, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Portfolio', href: '/dashboard/portfolio' },
    { name: 'Markets', href: '/dashboard/markets' },
    { name: 'Transactions', href: '/dashboard/transactions' },
    { name: 'News', href: '/dashboard/news' },
  ];

  return (
    <header className="bg-dark-300 border-b border-light-500/10">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </Button>
            </div>
            <Link href="/dashboard" className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary-500">Cryptoasis</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary-500',
                  pathname === item.href
                    ? 'text-primary-500'
                    : 'text-light-300'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <FiBell size={20} />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Settings">
              <FiSettings size={20} />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Profile">
              <FiUser size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block py-2 px-3 text-base font-medium rounded-md',
                  pathname === item.href
                    ? 'bg-primary-500/10 text-primary-500'
                    : 'text-light-300 hover:bg-dark-200 hover:text-primary-500'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}