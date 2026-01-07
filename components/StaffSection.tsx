'use client';

import { useEffect, useRef, useState } from 'react';

export default function StaffSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="staff" ref={sectionRef} className="section">
      <div className="container">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <p className="text-primary-500 text-sm font-medium tracking-wider mb-2">STAFF</p>
          <h2 className="section-title">院長紹介</h2>
        </div>

        {/* 院長カード */}
        <div className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* 写真 */}
              <div className="relative aspect-square md:aspect-auto bg-natural-100">
                {/* 実際の写真がある場合 */}
                {/* <Image
                  src="/images/director.jpg"
                  alt="院長"
                  fill
                  className="object-cover"
                /> */}

                {/* プレースホルダー */}
                <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-50">
                  <div className="text-center text-natural-400">
                    <div className="w-24 h-24 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-sm">院長写真</p>
                  </div>
                </div>
              </div>

              {/* プロフィール */}
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <p className="text-primary-500 text-sm font-medium mb-1">院長</p>
                  <h3 className="text-2xl font-bold text-natural-800">
                    {/* 名前を入れてください */}
                    〇〇 〇〇
                  </h3>
                </div>

                {/* 一言メッセージ */}
                <div className="bg-primary-50 rounded-2xl p-6 mb-6">
                  <p className="text-natural-700 leading-relaxed">
                    「患者様一人ひとりの痛みに向き合い、<br className="hidden sm:block" />
                    根本から改善できるよう<br className="hidden sm:block" />
                    丁寧に施術いたします。」
                  </p>
                </div>

                {/* 資格・経歴など */}
                <div className="space-y-2 text-sm text-natural-600">
                  <p className="flex items-center gap-2">
                    <span className="text-primary-500">●</span>
                    柔道整復師
                  </p>
                  {/* 必要に応じて追加 */}
                  {/* <p className="flex items-center gap-2">
                    <span className="text-primary-500">●</span>
                    〇〇資格
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
