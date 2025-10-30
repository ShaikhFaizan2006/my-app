'use client'
import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LipiBookLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    router.push('/commitee-home');
  };

  const handleForgetpassword = () => {
    router.push('/commitee-forgotpass');
  };

  return (
    // Root container: Fixed height, no overflow
    <div className="h-screen bg-[#e8d7c3] flex flex-col overflow-hidden">
        {/* Header (Stays at top) */}
      <header className="w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between bg-[#F5E6D3] border-b border-[#d4c4b0] flex-shrink-0">
        <div className="flex items-center gap-2 sm:gap-4">
          <Image
            src="/images/rgstc.png"
            alt="RGSTC Logo"
            width={50}
            height={50}
            className="w-12 h-12 sm:w-14 sm:h-14"
          />
        </div>
        <h1 className="flex-1 text-center text-black text-lg sm:text-xl lg:text-2xl font-bold px-2 sm:px-4">
          RGSTC MUMBAI IN COLLABORATION WITH VIT, PUNE
        </h1>
        <Image
          src="/images/VIT.png"
          alt="VIT Logo"
          width={50}
          height={50}
          className="w-12 h-12 sm:w-14 sm:h-14"
        />
      </header>

      {/* Main Content (MODIFIED: Back to items-center, no overflow) */}
      <main className="flex-1 flex items-center justify-center px-4 py-6 sm:py-8 md:py-12 max-h-[700px]:py-2">
        <div className="w-full max-w-md">
          {/* Logo */}
        <div className="text-center mb-4 sm:mb-6">
          <Image
            src="/images/lipibook.png"
            alt="LipiBook Logo"
            width={120}
            height={100}
            className="mx-auto w-auto h-auto"
          />
        </div>

          {/* Login Section */}
          <div className="bg-[#e8d7c3]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-[#2c1810] tracking-wide max-h-[700px]:mb-3 max-h-[700px]:text-xl">
              COMMITTEE LOGIN
            </h2>

            {/* Form (MODIFIED: Reduced spacing) */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 max-h-[700px]:space-y-2">
              <div>
                <input
                  type="email"
                  placeholder="COMMITTEE MAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  suppressHydrationWarning
                  required
                  className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 max-h-[700px]:py-2.5 bg-white border border-[#b8a898] rounded text-sm sm:text-base focus:outline-none focus:border-[#8b4513] focus:ring-1 focus:ring-[#8b4513] placeholder-[#6b5d52] transition-all"
                />
              </div>
               <div>
                <input
                  type="password"
                  placeholder="PASSWORD"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  suppressHydrationWarning
                  required
                  className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 max-h-[700px]:py-2.5 bg-white border border-[#b8a898] rounded text-sm sm:text-base focus:outline-none focus:border-[#8b4513] focus:ring-1 focus:ring-[#8b4513] placeholder-[#6b5d52] transition-all"
                />
              </div>

              <div className="pt-2 max-h-[700px]:pt-1">
                <button
                  type="submit"
                  suppressHydrationWarning
                  className="w-full bg-black text-white py-3 sm:py-3.5 md:py-4 max-h-[700px]:py-2.5 rounded text-sm sm:text-base md:text-lg font-medium hover:bg-[#1a1a1a] active:bg-[#000000] transition-colors duration-200 tracking-wide"
                >
                  SIGN IN
                </button>
              </div>

              <div className="text-center pt-2 max-h-[700px]:pt-1">
                <button 
                  type="button" 
                  onClick={handleForgetpassword}
                  suppressHydrationWarning
                  className="text-[#2c1810] text-sm sm:text-base md:text-lg hover:text-[#8b4513] hover:underline transition-colors duration-200"
                >
                  FORGOT PASSWORD?
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer (Stays at bottom) */}
     <footer className="bg-[#e8d7c3] px-3 py-3 border-t border-[#d4c4b0] flex-shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="w-6 h-6"></div>
          <p className="text-[#2c1810] text-xs sm:text-sm md:text-base text-center flex-1">
            भारत इतिहास संशोधक मंडळ, पुणे | LipiBook
          </p>
          <button 
            suppressHydrationWarning
            className="text-[#5c3d2e] hover:text-[#8b4513] transition-colors duration-200"
          >
            <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </footer>
    </div>
  );
}