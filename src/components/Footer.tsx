import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm transform rotate-12"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">FutureBound</span>
          </div>
          
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} FutureBound Inc. Designing the legacy of tomorrow.
          </p>

          {/* Footer Links */}
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Global Offices</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
