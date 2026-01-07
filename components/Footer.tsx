'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-400 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* ロゴ・説明 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-xl">
                🤲
              </div>
              <h3 className="text-xl font-bold">
                てのひら整骨院
              </h3>
            </div>
            <p className="text-natural-300 text-sm leading-relaxed">
              独自の「てのひら式整体」で全身を調整。<br />
              コープ若江店の目の前！
            </p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="text-primary-400 font-medium mb-4">メニュー</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#about" className="text-natural-300 hover:text-primary-400 transition-colors">
                当院について
              </a>
              <a href="#treatment" className="text-natural-300 hover:text-primary-400 transition-colors">
                施術内容
              </a>
              <a href="#price" className="text-natural-300 hover:text-primary-400 transition-colors">
                料金
              </a>
              <a href="#access" className="text-natural-300 hover:text-primary-400 transition-colors">
                アクセス
              </a>
            </nav>
          </div>

          {/* 連絡先 */}
          <div>
            <h4 className="text-primary-400 font-medium mb-4">お問い合わせ</h4>
            <div className="space-y-2 text-sm text-natural-300">
              <p>
                〒578-0942<br />
                大阪府東大阪市若江東町4-2-8
              </p>
              <p>
                <a href="tel:06-7172-4941" className="text-primary-400 hover:text-primary-300 transition-colors font-bold text-lg">
                  06-7172-4941
                </a>
              </p>
              <p>9:00〜12:30 / 15:30〜19:30</p>
              <p className="text-natural-400 text-xs">※木・土は午前のみ／日祝休診</p>
            </div>
          </div>
        </div>

        {/* 区切り線 */}
        <div className="border-t border-dark-300 pt-8">
          <p className="text-center text-dark-100 text-sm">
            © {currentYear} てのひら整骨院 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
