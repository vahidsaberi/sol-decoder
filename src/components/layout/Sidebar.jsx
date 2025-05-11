import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  FiHome, 
  FiPieChart, 
  FiTrendingUp, 
  FiBarChart2, 
  FiFileText,
  FiSettings,
  FiUsers,
  FiHelpCircle,
  FiLogOut
} from 'react-icons/fi';

export default function Sidebar() {
  const pathname = usePathname();
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: FiHome },
    { name: 'Portfolio', href: '/dashboard/portfolio', icon: FiPieChart },
    { name: 'Markets', href: '/dashboard/markets', icon: FiTrendingUp },
    { name: 'Transactions', href: '/dashboard/transactions', icon: FiBarChart2 },
    { name: 'News', href: '/dashboard/news', icon: FiFileText },
  ];

  const secondaryNavigation = [
    { name: 'Settings', href: '/dashboard/settings', icon: FiSettings },
    { name: 'Help & Support', href: '/dashboard/support', icon: FiHelpCircle },
    { name: 'Refer Friends', href: '/dashboard/referrals', icon: FiUsers },
  ];

  return (
    <div className="hidden md:flex h-full w-64 flex-col bg-dark-300 border-r border-light-500/10">
      <div className="flex h-16 items-center justify-center border-b border-light-500/10">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary-500">Cryptoasis</span>
        </Link>
      </div>
      
      <div className="flex flex-1 flex-col justify-between overflow-y-auto p-4">
        <nav className="space-y-6">
          <div>
            <h3 className="px-3 text-xs font-semibold text-light-500 uppercase tracking-wider">
              Main
            </h3>
            <div className="mt-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'group flex items-center px-3 py-2 text-sm font-medium rounded-md',
                    pathname === item.href
                      ? 'bg-primary-500/10 text-primary-500'
                      : 'text-light-300 hover:bg-dark-200 hover:text-primary-500'
                  )}
                >
                  <item.icon
                    className={cn(
                      'mr-3 h-5 w-5 flex-shrink-0',
                      pathname === item.href
                        ? 'text-primary-500'
                        : 'text-light-500 group-hover:text-primary-500'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="px-3 text-xs font-semibold text-light-500 uppercase tracking-wider">
              Account
            </h3>
            <div className="mt-2 space-y-1">
              {secondaryNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'group flex items-center px-3 py-2 text-sm font-medium rounded-md',
                    pathname === item.href
                      ? 'bg-primary-500/10 text-primary-500'
                      : 'text-light-300 hover:bg-dark-200 hover:text-primary-500'
                  )}
                >
                  <item.icon
                    className={cn(
                      'mr-3 h-5 w-5 flex-shrink-0',
                      pathname === item.href
                        ? 'text-primary-500'
                        : 'text-light-500 group-hover:text-primary-500'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="mt-6">
          <Link
            href="/logout"
            className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-light-300 hover:bg-dark-200 hover:text-primary-500"
          >
            <FiLogOut
              className="mr-3 h-5 w-5 flex-shrink-0 text-light-500 group-hover:text-primary-500"
              aria-hidden="true"
            />
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
}