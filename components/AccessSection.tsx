'use client';

import { useEffect, useRef, useState } from 'react';

const businessHours = [
  { day: '月', am: '○', pm: '○' },
  { day: '火', am: '○', pm: '○' },
  { day: '水', am: '○', pm: '○' },
  { day: '木', am: '○', pm: '−' },
  { day: '金', am: '○', pm: '○' },
  { day: '土', am: '○', pm: '−' },
  { day: '日', am: '休', pm: '休' },
  { day: '祝', am: '休', pm: '休' },
];

export default function AccessSection() {
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
    <section id="access" ref={sectionRef} className="section bg-natural-50">
      <div className="container">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <p className="text-primary-500 text-sm font-medium tracking-wider mb-2">ACCESS</p>
          <h2 className="section-title">アクセス・診療時間</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左側：情報 */}
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* 基本情報 */}
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <h3 className="text-lg font-bold text-natural-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-lg">📍</span>
                基本情報
              </h3>
              <dl className="space-y-3 text-sm">
                <div className="flex gap-4">
                  <dt className="text-natural-500 w-20 shrink-0">院名</dt>
                  <dd className="text-natural-800 font-medium">てのひら整骨院</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-natural-500 w-20 shrink-0">住所</dt>
                  <dd className="text-natural-800">
                    〒578-0942<br />
                    大阪府東大阪市若江東町4-2-8
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-natural-500 w-20 shrink-0">電話番号</dt>
                  <dd>
                    <a href="tel:06-7172-4941" className="text-primary-600 font-bold text-lg hover:text-primary-700">
                      06-7172-4941
                    </a>
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-natural-500 w-20 shrink-0">アクセス</dt>
                  <dd className="text-natural-800">
                    近鉄奈良線 若江岩田駅 徒歩12分<br />
                    <span className="text-primary-600 font-medium">コープ若江店の目の前！</span>
                  </dd>
                </div>
              </dl>
            </div>

            {/* 診療時間 */}
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
              <div className="bg-primary-500 text-white py-3 px-6">
                <h3 className="font-bold flex items-center gap-2">
                  <span>⏰</span>
                  診療時間
                </h3>
              </div>
              <div className="p-4">
                <table className="schedule-table text-sm">
                  <thead>
                    <tr>
                      <th></th>
                      {businessHours.map((item) => (
                        <th key={item.day}>{item.day}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-natural-600 font-medium text-xs">9:00〜12:30</td>
                      {businessHours.map((item) => (
                        <td key={`am-${item.day}`} className={item.am === '休' ? 'text-natural-300' : 'text-accent-400 font-bold'}>
                          {item.am}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="text-natural-600 font-medium text-xs">15:30〜19:30</td>
                      {businessHours.map((item) => (
                        <td key={`pm-${item.day}`} className={item.pm === '休' || item.pm === '−' ? 'text-natural-300' : 'text-accent-400 font-bold'}>
                          {item.pm}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-natural-400 mt-3 text-center">
                  ○ 診療 / − 午前のみ / 休 休診
                </p>
              </div>
            </div>
          </div>

          {/* 右側：地図 */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-2xl shadow-soft p-4 h-full">
              <h3 className="text-lg font-bold text-natural-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-lg">🗺️</span>
                地図
              </h3>
              <div className="rounded-xl overflow-hidden h-80 lg:h-[calc(100%-60px)]">
                <iframe
                  src="https://www.google.com/maps?q=てのひら整骨院+大阪府東大阪市若江東町4-2-8&output=embed&z=16"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="てのひら整骨院 地図"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a href="tel:06-7172-4941" className="btn-primary btn-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            ご予約・お問い合わせはこちら
          </a>
        </div>
      </div>
    </section>
  );
}
