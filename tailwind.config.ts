import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // メインカラー（ティール・水色系）
        primary: {
          50: '#e8f6f8',
          100: '#c5e8ed',
          200: '#a3d5e0',  // 淡い水色
          300: '#5cc4c4',
          400: '#3db5a6',
          500: '#2a9d8f',  // ティール（メイン）
          600: '#238b7e',
          700: '#1c706a',
        },
        // アクセントカラー（黄色・オレンジ系）
        accent: {
          50: '#fefcf3',
          100: '#fdf8e1',
          200: '#f9e79f',  // 淡い黄色
          300: '#f5d67a',
          400: '#f3b96e',  // オレンジベージュ
          500: '#f29c11',  // オレンジ
          600: '#d68910',
        },
        // ダーク系（濃紺・暗い青緑）
        dark: {
          50: '#e6edf1',
          100: '#b3c7d3',
          200: '#80a1b5',
          300: '#4d7b97',
          400: '#1d3557',  // 濃紺
          500: '#153045',
          600: '#0c3e4b',  // 暗い青緑
          700: '#0a3340',
          800: '#082835',
        },
        // ナチュラル系
        natural: {
          50: '#fefefe',
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
        },
        // レッド（アクセント）
        red: {
          400: '#e63946',
          500: '#d62828',  // 赤
          600: '#b82222',
        },
      },
      fontFamily: {
        sans: ['M PLUS Rounded 1c', 'Zen Maru Gothic', 'sans-serif'],
        rounded: ['Zen Maru Gothic', 'M PLUS Rounded 1c', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'hover': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;
