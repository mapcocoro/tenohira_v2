'use client';

import { useEffect, useRef, useState } from 'react';

export default function TreatmentSection() {
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
    <section id="treatment" ref={sectionRef} className="section bg-natural-50">
      <div className="container">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <p className="text-primary-500 text-sm font-medium tracking-wider mb-2">TREATMENT</p>
          <h2 className="section-title">施術内容</h2>
        </div>

        {/* てのひら式整体 */}
        <div className={`mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="bg-primary-500 text-white py-4 px-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <span>🤲</span>
                「てのひら式整体」とは？
              </h3>
            </div>
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Step 1 */}
                <div className="bg-primary-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <h4 className="text-lg font-bold text-natural-800">まずは検査から</h4>
                  </div>
                  <p className="text-natural-600 text-sm leading-relaxed">
                    初診時に体のどの部分が痛いのかをしっかり検査します。体をねじったり、腰を持ち上げるなど、日常の動作でどの部分に痛みがでるのか調べます。
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-accent-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 bg-accent-400 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <h4 className="text-lg font-bold text-natural-800">治療</h4>
                  </div>
                  <p className="text-natural-600 text-sm leading-relaxed">
                    骨盤や背骨の歪み、肩や足首の位置など全身を調整します。患者様自身に体の変化を聞きながら進めていきますので、効果がわかりやすく安心です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 交通事故治療 */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="bg-accent-400 text-white py-4 px-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <span>🚗</span>
                交通事故治療について
              </h3>
            </div>
            <div className="p-6 md:p-8">
              <div className="space-y-4 text-natural-600 leading-relaxed">
                <p>
                  当院では、交通事故治療を行っております。基本的には、<span className="text-primary-600 font-bold">病院との併用をおすすめ</span>しています。
                </p>
                <p>
                  病院でレントゲンやMRIなどの画像診断を行い、当院では痛みを取る手技療法やリハビリを行っていきます。
                </p>
                <div className="bg-accent-50 rounded-xl p-4">
                  <p className="text-natural-700">
                    <strong>ムチウチで首をさわって治療することができない患者様でも</strong>、首の痛みを楽にする独自の治療法がありますので、ご安心ください。
                  </p>
                </div>
                <p className="text-accent-500 font-medium">
                  保険会社とのやりとりも行いますので、お気軽にお問合せください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
