'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

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

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative pt-32 md:pt-40 pb-20 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* 左側：テキストと診療時間 */}
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* メインコピー */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-natural-800 leading-tight mb-6">
              あなたの痛みに
              <br />
              <span className="text-primary-500">やさしく</span>寄り添います
            </h1>

            <p className="text-natural-600 text-lg mb-8 leading-relaxed">
              独自の「てのひら式整体」で全身を調整。
              <br />
              マッサージでは取れない痛みも、もう一度原因を探してみませんか？
            </p>

            {/* 特徴バッジ */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-white border border-primary-200 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                各種保険取扱
              </span>
              <span className="bg-white border border-primary-200 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                交通事故対応
              </span>
              <span className="bg-white border border-primary-200 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                労災対応
              </span>
            </div>

            {/* 電話CTA */}
            <div className="bg-white rounded-2xl shadow-soft p-6 mb-6">
              <p className="text-sm text-natural-500 mb-2">ご予約・お問い合わせ</p>
              <a href="tel:06-7172-4941" className="tel-link flex items-center gap-3">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06-7172-4941
              </a>
            </div>

            {/* 診療時間テーブル */}
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
              <div className="bg-primary-500 text-white py-3 px-4">
                <h3 className="font-bold text-center">診療時間</h3>
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
                      <td className="text-natural-600 font-medium text-xs">
                        9:00〜12:30
                      </td>
                      {businessHours.map((item) => (
                        <td
                          key={`am-${item.day}`}
                          className={item.am === '休' ? 'text-natural-300' : item.am === '○' ? 'text-accent-400 font-bold' : 'text-natural-400'}
                        >
                          {item.am}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="text-natural-600 font-medium text-xs">
                        15:30〜19:30
                      </td>
                      {businessHours.map((item) => (
                        <td
                          key={`pm-${item.day}`}
                          className={item.pm === '休' || item.pm === '−' ? 'text-natural-300' : 'text-accent-400 font-bold'}
                        >
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

          {/* 右側：画像 */}
          <div className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* メイン画像 */}
              <div className="rounded-2xl overflow-hidden shadow-soft bg-natural-100 aspect-[4/3] relative">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/storefront.jpg`}
                  alt="てのひら整骨院 外観 - 黄色い看板が目印"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* フローティングカード */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-soft p-4 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-natural-800">コープ若江店の目の前</p>
                    <p className="text-xs text-natural-500">若江岩田駅 徒歩12分</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 波装飾 */}
      <div className="hero-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
