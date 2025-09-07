import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm text-gray-600">
          {/* About */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800 text-base">About Magicbricks</h3>
            <p className="leading-relaxed">
              Magicbricks is India's leading platform connecting property buyers
              and sellers with trusted listings across cities in real estate.
            </p>
          </div>

          {/* Top Cities */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800 text-base">Top Cities</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/city/delhi" 
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Delhi
                </Link>
              </li>
              <li>
                <Link 
                  href="/city/mumbai" 
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Mumbai
                </Link>
              </li>
              <li>
                <Link 
                  href="/city/chennai" 
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Chennai
                </Link>
              </li>
              <li>
                <Link 
                  href="/city/bangalore" 
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Bangalore
                </Link>
              </li>
            </ul>
          </div>

          {/* New Projects */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800 text-base">New Projects</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/city/noida" 
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Noida
                </Link>
              </li>
              <li>
                <Link 
                  href="/city/pune" 
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Pune
                </Link>
              </li>
              <li>
                <Link 
                  href="/city/gurgaon" 
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Gurgaon
                </Link>
              </li>
              <li>
                <Link 
                  href="/city/ahmedabad" 
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Ahmedabad
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800 text-base">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/home-loans" 
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Home Loan
                </Link>
              </li>
              <li>
                <Link 
                  href="/home-interiors" 
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Home Interior
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 text-center text-xs sm:text-sm text-gray-600 py-4 px-4">
        {/* Links Row */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-2">
          <Link 
            href="/sitemap" 
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Sitemap
          </Link>
          <span className="text-gray-400">|</span>
          <Link 
            href="/terms" 
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Terms & Conditions
          </Link>
          <span className="text-gray-400 hidden sm:inline">|</span>
          <Link 
            href="/privacy" 
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-400">|</span>
          <Link 
            href="/careers" 
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Careers
          </Link>
          <span className="text-gray-400">|</span>
          <Link 
            href="/help" 
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Help
          </Link>
        </div>
        
        {/* Copyright */}
        <p className="text-gray-500">
          © {new Date().getFullYear()} Magicbricks. All rights reserved.
        </p>
      </div>
    </footer>
  )
}