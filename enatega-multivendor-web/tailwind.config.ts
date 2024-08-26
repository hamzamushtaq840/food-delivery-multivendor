import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/primereact/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        green: '#5AC12F',
        cardBg: '#90EA93',
        textGreen: '#6FCF97',
        buttonBg: '#3C8F7C',
      },
      screens: {
        sm: { min: '0px', max: '540px' },
        md: { min: '540px', max: '860px' },
        lg: { min: '860px', max: '1200px' },
      },
    },
  },
  plugins: [],
};
export default config;
