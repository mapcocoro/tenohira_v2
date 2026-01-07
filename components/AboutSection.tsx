'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
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
    <section id="about" ref={sectionRef} className="section">
      <div className="container">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <p className="text-primary-500 text-sm font-medium tracking-wider mb-2">ABOUT</p>
          <h2 className="section-title">当院について</h2>
          <p className="section-subtitle">
            てのひら整骨院は独自の「てのひら式整体」による全身調整を行っております
          </p>
        </div>

        {/* コンテンツ */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-primary-50 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-natural-700 leading-relaxed mb-8">
              マッサージでは取れない痛み、
              <br className="hidden md:block" />
              病院で年齢のせいと言われた痛み、
              <br className="hidden md:block" />
              <span className="text-primary-600 font-bold">もう一度原因を探してみませんか？</span>
            </p>
            <p className="text-natural-600 leading-relaxed">
              意外なところに原因が見つかったりしますよ。
            </p>
          </div>
        </div>

        {/* 3つの特徴 */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="card text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="text-lg font-bold text-natural-800 mb-2">丁寧な検査</h3>
            <p className="text-natural-600 text-sm">
              体のどの部分が痛いのか、日常の動作で確認しながら原因を探ります
            </p>
          </div>
          <div className="card text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🤲</span>
            </div>
            <h3 className="text-lg font-bold text-natural-800 mb-2">てのひら式整体</h3>
            <p className="text-natural-600 text-sm">
              骨盤・背骨の歪み、肩や足首の位置など全身を調整します
            </p>
          </div>
          <div className="card text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✨</span>
            </div>
            <h3 className="text-lg font-bold text-natural-800 mb-2">最新設備</h3>
            <p className="text-natural-600 text-sm">
              ウォーターベッド・電気治療器を完備しています
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
