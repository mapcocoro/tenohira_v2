'use client';

import { useEffect, useRef, useState } from 'react';

const prices = [
  { name: '保険施術', price: '要問合せ', note: '※保険割合・施術部位により異なります', category: '保険' },
  { name: '肩こりスッキリコース', price: '3,300円', note: '30分｜肩甲骨をほぐし頭の位置を整えます', category: '自費' },
  { name: 'てのひら式背骨矯正', price: '要問合せ', note: '骨盤・背骨・股関節・足首を調整', category: '自費' },
  { name: '超音波コンビネーション', price: '550円', note: '五十肩・捻挫など深部の筋肉をゆるめます', category: 'オプション' },
];

export default function PriceSection() {
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
    <section id="price" ref={sectionRef} className="section">
      <div className="container">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <p className="text-primary-500 text-sm font-medium tracking-wider mb-2">PRICE</p>
          <h2 className="section-title">料金案内</h2>
        </div>

        {/* 料金表 */}
        <div className={`max-w-2xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="bg-primary-500 text-white py-4 px-6">
              <h3 className="font-bold text-center text-lg">施術料金</h3>
            </div>
            <div className="p-6">
              {prices.map((item, index) => (
                <div
                  key={item.name}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between py-5 ${
                    index !== prices.length - 1 ? 'border-b border-natural-100' : ''
                  }`}
                >
                  <div className="mb-2 sm:mb-0">
                    <span className="text-natural-800 font-medium">{item.name}</span>
                    {item.note && (
                      <span className="text-natural-400 text-sm ml-2">{item.note}</span>
                    )}
                  </div>
                  <span className="text-2xl font-bold text-primary-500">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 注意書き */}
          <div className="mt-8 text-center text-natural-500 text-sm space-y-1">
            <p>※料金は税込表示です</p>
            <p>※各種健康保険・労災対応</p>
            <p>※詳しい料金はお電話でお問い合わせください</p>
          </div>
        </div>
      </div>
    </section>
  );
}
