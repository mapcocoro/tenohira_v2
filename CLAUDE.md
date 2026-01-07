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
│   ├── InstagramSection.tsx  # 最新情報（Instagram埋め込み）
│   ├── AboutSection.tsx # てのひら整体とは
│   ├── TreatmentSection.tsx  # 施術の流れ
│   ├── StaffSection.tsx # 院長紹介
│   ├── PriceSection.tsx # 料金表
│   ├── AccessSection.tsx # アクセス・診療時間
│   └── Footer.tsx       # フッター
├── public/images/       # 画像素材
└── tailwind.config.ts   # Tailwind設定（カラーパレット等）
```

## ページ構成

1. Hero（ファーストビュー）
2. 最新情報（Instagram埋め込み - LightWidget使用）
3. 当院について
4. 施術内容
5. 院長紹介
6. 料金表
7. アクセス・診療時間

## デザインコンセプト

- ティール/水色系カラーパレット（#2a9d8f, #a3d5e0）
- アクセントに黄色/オレンジ（#f9e79f, #f3b96e）
- 丸ゴシック系フォントで柔らかい印象
- 診療時間表を目立たせたレイアウト
- 院長紹介セクション
- 店舗外観写真配置

## カラーパレット

- primary: ティール系 (#2a9d8f, #a3d5e0)
- accent: 黄色/オレンジ (#f9e79f, #f3b96e)
- dark: 濃紺 (#1d3557, #0c3e4b)
- red: アクセント用 (#d62828)

## Instagram埋め込み

LightWidgetを使用して最新投稿を表示:
- 設定: Photos to show: 3, Columns: 3
- InstagramSection.tsx内のコメントを参照

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
