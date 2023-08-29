import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#85005b',
        primaryDark: '#520647',
        primaryDarker: '#0e002f',
        secondary: '#c4b282',
        secondaryDark: '#865a19',
      },
    },
  },
  plugins: [],
}
export default config
