'use client';

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

// Button Component
const Button = ({ children, variant = 'default', size = 'default', className = '', ...props }) => {
  const variantClasses = {
    default: 'bg-primary-500 hover:bg-primary-600 text-white',
    outline: 'bg-transparent border border-light-500/30 hover:bg-light-500/10 text-light-100',
  };

  const sizeClasses = {
    default: 'py-2 px-4 text-sm',
    lg: 'py-3 px-6 text-base',
  };

  return (
    <button
      className={`rounded-lg font-medium transition-all ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-dark-100 text-light-100">
      {/* Header/Navigation */}
      <header className="py-4 border-b border-light-500/10">
        <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-500">
            Cryptoasis
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/features" className="text-light-100 hover:text-primary-500">
              Features
            </Link>
            <Link href="/about" className="text-light-100 hover:text-primary-500">
              About
            </Link>
            <Link href="/contact" className="text-light-100 hover:text-primary-500">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="default">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="default" size="default">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 flex-1">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
                Manage Your Crypto Portfolio Like Never Before
              </h1>
              <p className="text-xl text-light-300 max-w-2xl">
                Cryptoasis provides you with advanced tools to track, analyze, and optimize your cryptocurrency 
                investments in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started <FiArrowRight className="ml-2 inline" />
                  </Button>
                </Link>
                <Link href="/dashboard/demo">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Try Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center border border-light-500/10">
                <div className="text-center text-light-300">
                  Dashboard Preview Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-300">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-light-300 max-w-2xl mx-auto">
              Discover the powerful tools that make Cryptoasis the ultimate platform for crypto asset management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-dark-200 p-6 rounded-xl border border-light-500/10">
              <div className="h-12 w-12 rounded-lg bg-primary-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl text-primary-500">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Real-time Analytics</h3>
              <p className="text-light-300">
                Monitor your portfolio performance with live data and comprehensive analytics.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-dark-200 p-6 rounded-xl border border-light-500/10">
              <div className="h-12 w-12 rounded-lg bg-primary-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl text-primary-500">📱</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Multi-platform Support</h3>
              <p className="text-light-300">
                Access your portfolio from any device with our responsive web and mobile applications.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-dark-200 p-6 rounded-xl border border-light-500/10">
              <div className="h-12 w-12 rounded-lg bg-primary-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl text-primary-500">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Security</h3>
              <p className="text-light-300">
                Rest easy with our enterprise-grade security protocols protecting your data.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-dark-200 p-6 rounded-xl border border-light-500/10">
              <div className="h-12 w-12 rounded-lg bg-primary-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl text-primary-500">💱</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Trading</h3>
              <p className="text-light-300">
                Execute trades efficiently with AI-powered recommendations based on market trends.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-dark-200 p-6 rounded-xl border border-light-500/10">
              <div className="h-12 w-12 rounded-lg bg-primary-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl text-primary-500">📈</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Performance Tracking</h3>
              <p className="text-light-300">
                Track your investment performance over time with detailed reports and insights.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-dark-200 p-6 rounded-xl border border-light-500/10">
              <div className="h-12 w-12 rounded-lg bg-primary-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl text-primary-500">🔔</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Alerts</h3>
              <p className="text-light-300">
                Set up personalized notifications for price movements and market events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-light-300 max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their crypto investment strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-dark-200 p-6 rounded-xl border border-light-500/10">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-600"></div>
                <div className="ml-4">
                  <h4 className="font-bold">Alex Johnson</h4>
                  <p className="text-light-300 text-sm">Crypto Investor</p>
                </div>
              </div>
              <p className="text-light-300">
                "Cryptoasis has completely changed how I manage my portfolio. The analytics tools are incredible and the interface is so intuitive."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-dark-200 p-6 rounded-xl border border-light-500/10">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-600"></div>
                <div className="ml-4">
                  <h4 className="font-bold">Sarah Kim</h4>
                  <p className="text-light-300 text-sm">Day Trader</p>
                </div>
              </div>
              <p className="text-light-300">
                "The real-time alerts have saved me thousands. I can react to market changes instantly and make better decisions."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-dark-200 p-6 rounded-xl border border-light-500/10">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-600"></div>
                <div className="ml-4">
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-light-300 text-sm">Long-term Investor</p>
                </div>
              </div>
              <p className="text-light-300">
                "As someone who holds for the long term, the portfolio analysis tools help me stay on track with my investment goals."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500/20 to-secondary-500/20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Crypto Experience?</h2>
          <p className="text-xl text-light-300 max-w-2xl mx-auto mb-8">
            Join Cryptoasis today and take control of your digital asset portfolio with our powerful tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg">
                Get Started Now <FiArrowRight className="ml-2 inline" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-dark-200 border-t border-light-500/10">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="text-2xl font-bold text-primary-500">
                Cryptoasis
              </Link>
              <p className="mt-4 text-light-300">
                The ultimate platform for cryptocurrency portfolio management and analysis.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-light-300 hover:text-primary-500">Features</Link></li>
                <li><Link href="/pricing" className="text-light-300 hover:text-primary-500">Pricing</Link></li>
                <li><Link href="/roadmap" className="text-light-300 hover:text-primary-500">Roadmap</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-light-300 hover:text-primary-500">About</Link></li>
                <li><Link href="/blog" className="text-light-300 hover:text-primary-500">Blog</Link></li>
                <li><Link href="/careers" className="text-light-300 hover:text-primary-500">Careers</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-light-300 hover:text-primary-500">Terms</Link></li>
                <li><Link href="/privacy" className="text-light-300 hover:text-primary-500">Privacy</Link></li>
                <li><Link href="/cookies" className="text-light-300 hover:text-primary-500">Cookies</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-light-500/10 text-center text-light-300">
            <p>© {new Date().getFullYear()} Cryptoasis. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}