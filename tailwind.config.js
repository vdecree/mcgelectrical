const tailwindCSSVariables = require('@bly-th/tailwind-css-variables');
const tailwindCustomUtilities = require('@bly-th/tailwind-custom-utilities');

module.exports = {
  content: ["./src/**/*.njk"],
  corePlugins: {
    preflight: false,
  },
  experimental: {
    optimizeUniversalDefaults: true
  },
  theme: {
    colors: {
      primary: 'hsl(43, 66%, 58%)',
      secondary: '#081A2F',
      light: '#f3f3f3',
      dark: '#141414',
      darkGrey: '#616161',
      buttonHover: 'hsl(33, 66%, 48%)',
    },
    fontFamily: {
      'sans': ['"Inter", Helvetica, Arial, sans-serif' ],
      'serif': ['"Lora", ui-serif, Georgia']
    },
    wrapperMaxWidth: {
      midshort: '82rem',
      short: '58rem',
      dwarf: '47rem',
    },
    borderRadius: {
      small: '2px',
      med: '3px',
    },
    fontSize: {
      // https://utopia.fyi/type/calculator?c=320,21,1.2,1140,24,1.25,5,2,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l&g=s,l,xl,12
      200: 'clamp(0.72rem, calc(0.81rem + -0.09vw), 0.79rem)',
      300: 'clamp(0.89rem, calc(0.89rem + 0.01vw), 0.90rem)',
      400: 'clamp(1.00rem, calc(0.97rem + 0.16vw), 1.13rem)',
      500: 'clamp(1.13rem, calc(1.05rem + 0.35vw), 1.41rem)',
      600: 'clamp(1.27rem, calc(1.14rem + 0.62vw), 1.76rem)',
      700: 'clamp(1.42rem, calc(1.23rem + 0.97vw), 2.20rem)',
      800: 'clamp(1.60rem, calc(1.32rem + 1.43vw), 2.75rem)',
      900: 'clamp(1.80rem, calc(1.39rem + 2.04vw), 3.43rem)',
      1000: 'clamp(2.03rem, calc(1.46rem + 2.83vw), 4.29rem)',
      1100: 'clamp(2.28rem, calc(1.51rem + 3.85vw), 5.36rem)',
      1200: 'clamp(2.57rem, calc(1.53rem + 5.18vw), 6.71rem)',
      1300: 'clamp(2.89rem, calc(1.51rem + 6.87vw), 8.38rem)'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    spacing: {
      // https://utopia.fyi/space/calculator/?c=320,21,1.2,1140,24,1.25,5,2,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l
      200: 'clamp(0.31rem, calc(0.14rem + 0.85vw), 0.75rem)',
      300: 'clamp(0.69rem, calc(0.52rem + 0.85vw), 1.13rem)',
      400: 'clamp(1.00rem, calc(0.80rem + 0.98vw), 1.50rem)',
      500: 'clamp(1.31rem, calc(0.95rem + 1.83vw), 2.25rem)',
      600: 'clamp(2.00rem, calc(1.61rem + 1.95vw), 3.00rem)',
      700: 'clamp(2.63rem, calc(1.89rem + 3.66vw), 4.50rem)',
      800: 'clamp(3.94rem, calc(3.13rem + 4.02vw), 6.00rem)',
      900: 'clamp(5.25rem, calc(3.79rem + 7.32vw), 9.00rem)'
    }
  },
  plugins: [
    // Generates custom property values from tailwind config
    tailwindCSSVariables({
      colors: 'color',
      spacing: 'size',
      fontSize: 'text',
      fontFamily: 'font',
      fontWeight: 'font',
      lineHeight: 'leading',
      wrapperMaxWidth: 'wrapper-max-width',
      borderRadius: 'border-radius',
    }),
    tailwindCustomUtilities({
      spacing: {
        name: 'flow-space',
        property: '--flow-space',
      },
      wrapperMaxWidth: {
        name: 'wrapper-max-width',
        property: 'max-width',
      },
      colors: {
        name: 'color',
        property: 'color',
      },
      background: {
        name: 'color',
        property: 'background-color',
      }
    })
  ]
};