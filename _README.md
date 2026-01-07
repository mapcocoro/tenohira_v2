# てのひら整骨院 HP - Pattern 2

優しいクリニック風デザインの整骨院ホームページ（パターン2）

## GitHub

https://github.com/mapcocoro/pattern2_tenohira.git

## 技術スタック

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- フォント: M PLUS Rounded 1c / Zen Maru Gothic（Google Fonts）

## ディレクトリ構成

```
pattern2_tenohira/
├── app/
│   ├── globals.css      # グローバルスタイル
│   ├── layout.tsx       # レイアウト
│   └── page.tsx         # メインページ
├── components/
│   ├── Header.tsx       # ヘッダー・ナビゲーション
│   ├── HeroSection.tsx  # ファーストビュー
│   ├── AboutSection.tsx # てのひら整体とは
│   ├── TreatmentSection.tsx  # 施術の流れ
│   ├── StaffSection.tsx # スタッフ紹介
│   ├── PriceSection.tsx # 料金表
│   ├── AccessSection.tsx # アクセス・診療時間
│   └── Footer.tsx       # フッター
├── public/images/       # 画像素材
└── tailwind.config.ts   # Tailwind設定（カラーパレット等）
```

## デザインコンセプト

- 優しい黄色系カラーパレット
- 丸ゴシック系フォントで柔らかい印象
- 診療時間表を目立たせたレイアウト
- 院長紹介セクション
- 店舗外観写真配置

## 開発コマンド

```bash
npm install      # 依存関係インストール
npm run dev      # 開発サーバー起動 (localhost:3000)
npm run build    # ビルド
```

## セキュリティ注意事項

クライアントワークのため、以下に注意：

- 機密情報（APIキー、認証情報）は絶対にコミットしない
- 秘密情報は`.env.local`に格納（`.gitignore`対象）
- 外部埋め込み（Google Maps等）は公式の方法のみ使用
- フォーム等を追加する場合は入力値のサニタイズを徹底
- `npm audit`で定期的に脆弱性チェック
