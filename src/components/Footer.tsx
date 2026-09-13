import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white pt-10 lg:pt-16 pb-8 border-t border-gray-100 mt-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
        
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left gap-5">

            <img src={Logo} alt="" className="h-8 w-auto object-contain" />
            
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            
            <ul className="flex items-center justify-center lg:justify-start gap-3 mt-2 text-sm font-semibold text-gray-700">
              <li><a href="https://github.com" className="hover:text-pink-600 transition-colors">GitHub</a></li>
              <li className="text-slate-300 text-xs">•</li>
              <li><a href="https://twitter.com" className="hover:text-pink-600 transition-colors">Twitter</a></li>
              <li className="text-slate-300 text-xs">•</li>
              <li><a href="https://linkedin.com" className="hover:text-pink-600 transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h1 className="text-xs font-bold text-gray-400 mb-5">Product</h1> 
            <ul className="flex flex-col gap-3 text-sm text-gray-600">
              <li><a href="" className="hover:text-pink-600 transition-colors">Home</a></li>
              <li><a href="" className="hover:text-pink-600 transition-colors">Technologies</a></li>
              <li><a href="" className="hover:text-pink-600 transition-colors">Projects</a></li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h1 className="text-xs font-bold text-gray-400 mb-5">Company</h1> 
            <ul className="flex flex-col gap-3 text-sm text-gray-600">
              <li><a href="" className="hover:text-pink-600 transition-colors">About</a></li>
              <li><a href="" className="hover:text-pink-600 transition-colors">Contact</a></li>
              <li><a href="" className="hover:text-pink-600 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h1 className="text-xs font-bold text-gray-400 mb-5">Legal</h1> 
            <ul className="flex flex-col gap-3 text-sm text-gray-600">
              <li><a href="" className="hover:text-pink-600 transition-colors">Privacy Policy</a></li>
              <li><a href="" className="hover:text-pink-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-row items-center justify-between border-t border-gray-100 pt-6 text-[11px] sm:text-sm lg:mt-12 text-gray-400">
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center gap-3 sm:gap-6">
            <a href="#home" className="transition-colors hover:text-pink-600">Privacy</a>
            <a href="#home" className="transition-colors hover:text-pink-600">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;