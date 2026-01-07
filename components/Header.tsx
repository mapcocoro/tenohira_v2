'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#about', label: '当院について' },
    { href: '#treatment', label: '施術内容' },
    { href: '#price', label: '料金' },
    { href: '#access', label: 'アクセス' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-soft' : 'bg-white/80 backdrop-blur-sm'}`}>
      {/* トップバー */}
      <div className="bg-primary-500 text-white text-sm py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <p>コープ若江店の目の前 / 若江岩田駅 徒歩12分</p>
          <p>診療時間 9:00〜12:30 / 15:30〜19:30（木土は午前のみ）</p>
        </div>
      </div>

      {/* メインヘッダー */}
      <div className="container py-4">
        <div className="flex justify-between items-center">
          {/* ロゴ */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white text-xl">
              🤲
            </div>
            <div>
              <span className="text-xl md:text-2xl font-bold text-natural-800">
                てのひら整骨院
              </span>
              <p className="text-xs text-natural-500 hidden sm:block">東大阪市若江岩田</p>
            </div>
          </a>

          {/* デスクトップ：電話番号 + メニュー */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-natural-700 hover:text-primary-600 transition-colors font-medium text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a href="tel:06-7172-4941" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-xl font-bold">06-7172-4941</span>
            </a>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden text-natural-700 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-natural-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-natural-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-natural-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div className={`md:hidden bg-white border-t border-natural-100 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="container py-4 flex flex-col gap-2">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-natural-700 hover:text-primary-600 transition-colors py-3 border-b border-natural-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:06-7172-4941"
            className="btn-primary justify-center mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            06-7172-4941
          </a>
        </nav>
      </div>
    </header>
  );
}
