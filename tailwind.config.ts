import { Kanit } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["var(--font-roboto)"],
      oswald: ["var(--font-oswald)"],
      Kanit: ["var(--font-kanit)"],
      anton: ["var(--font-anton)"],
      babel: ["var(--font-bebas)"],
      teko: ["var(--font-teko)"]

    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'move-left-right': 'move-left-right 6s ease-in-out infinite',
      },
      keyframes: {
        'move-left-right': {
          '0%': { transform: 'translateX(0)' },           // Começa na posição original
          '25%': { transform: 'translateX(-20px)' },      // Move para a esquerda
          '50%': { transform: 'translateX(20px)' },       // Move para a direita
          '75%': { transform: 'translateX(-20px)' },      // Move para a esquerda novamente
          '100%': { transform: 'translateX(0)' },         // Retorna à posição original
        },
      },
    },
  },
  plugins: [],
};

