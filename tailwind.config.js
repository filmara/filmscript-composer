const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/routes/**/*.tsx", "./app/components/**/*.tsx", "./app/design-system/**/*.tsx", "./app/design-system/shared/components/**/*.tsx"],
  safelist: [
    'text-paragraph-medium-underlined',
    'bg-background',
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'grid-cols-5',
    'grid-cols-6',
    'grid-cols-7',
    'grid-cols-8',
    'grid-cols-9',
    'grid-cols-10',
    'grid-cols-11',
    'grid-cols-12',
    'grid-rows-1',
    'grid-rows-2',
    'grid-rows-3',
    'grid-rows-4',
    'grid-rows-5',
    'grid-rows-6',
    'grid-rows-7',
    'grid-rows-8',
    'grid-rows-9',
    'grid-rows-10',
    'grid-rows-11',
    'grid-rows-12',
    'col-span-1',
    'col-span-2',
    'col-span-3',
    'col-span-4',
    'col-span-5',
    'col-span-6',
    'col-span-7',
    'col-span-8',
    'col-span-9',
    'col-span-10',
    'col-span-11',
    'col-span-12',
    'h-v56',
    'mt-[20px]',
    'text-display-bold',
    'text-display-semi-bold',
    'text-display-extra-bold',
    'text-h1-normal-bold',
    'text-h1-normal-semi-bold',
    'text-h1-normal-extra-bold',
    'text-h1-small-bold',
    'text-h1-small-semi-bold',
    'text-h1-small-extra-bold',
    'text-h2-normal-bold',
    'text-h2-normal-semi-bold',
    'text-h2-normal-extra-bold',
    'text-h2-small-bold',
    'text-h2-small-semi-bold',
    'text-h2-small-extra-bold',
    'text-h3-normal-bold',
    'text-h3-normal-semi-bold',
    'text-h3-normal-extra-bold',
    'text-h3-small-bold',
    'text-h3-small-semi-bold',
    'text-h3-small-extra-bold',
    'text-h4-normal-bold',
    'text-h4-normal-semi-bold',
    'text-h4-normal-extra-bold',
    'text-h4-small-bold',
    'text-h4-small-semi-bold',
    'text-h4-small-extra-bold',
    'text-subheading-medium',
    'text-subheading-bold',
    'text-subheading-underlined',
    'text-subheading-light',
    'text-paragraph-large-medium',
    'text-paragraph-large-bold',
    'text-paragraph-large-underlined',
    'text-paragraph-large-light',
    'text-paragraph-medium-medium',
    'text-paragraph-medium-bold',
    'text-paragraph-medium-underlined',
    'text-paragraph-medium-light',
    'text-paragraph-small-medium',
    'text-paragraph-small-bold',
    'text-paragraph-small-underlined',
    'text-paragraph-small-light',
    'text-caption-medium',
    'text-caption-bold',
    'text-caption-underlined',
    'text-caption-light',
    'text-caption-bold-underlined',
    'text-footer-medium',
    'text-footer-bold',
    'text-footer-underlined',
    'text-footer-light',
    'text-footer-bold-underlined',
  ],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.green,
      blue: colors.sky,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber
    },
    extend: {
      flex: {
        'card': '0 0'
      },
      dropShadow: {
        'short': '0 1px 1px rgba(0, 0, 0, 0.75)',
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
        'marquee-mirror': 'marquee-mirror 60s linear infinite',
        showHide: 'showHide 2s ease infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-mirror': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        showHide: {
          '0%': { opacity: '0' },
          '5%': { opacity: '1' },
          '95%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      borderWidth: {
        '05': '0.5px'
      },
      fontSize: {
        'button-tiny': ['11.7px', '11.7px'],
        'button-small': ['14px', '14px'],
        'button-medium': ['16.8px', '16.8px'],
        'button-large': ['20.2px', '20.2px']
      },
      height: {
        v2: '2vh',
        v4: '4vh',
        v6: '6vh',
        v8: '8vh',
        v16: '16vh',
        v24: '24vh',
        v32: '32vh',
        v40: '40vh',
        v48: '48vh',
        v56: '56vh',
        v68: '68vh',
        v76: '76vh',
        v84: '84vh',
        v88: '88vh',
        v92: '92vh',
        safe: 'calc(100vh - env(safe-area-inset-bottom))'
      },
      colors: {
        'primary-100': 'var(--color-primary-100)',
        'primary-200': 'var(--color-primary-200)',
        'primary-300': 'var(--color-primary-300)',
        'primary-400': 'var(--color-primary-400)',
        'primary-500': 'var(--color-primary-500)',
        'primary-600': 'var(--color-primary-600)',
        'primary-700': 'var(--color-primary-700)',
        'primary-800': 'var(--color-primary-800)',
        'primary-900': 'var(--color-primary-900)',
        'primary-1000': 'var(--color-primary-1000)',
        'primary-1100': 'var(--color-primary-1100)',
        'primary-1200': 'var(--color-primary-1200)',
        'primary-1300': 'var(--color-primary-1300)',
        'primary-1400': 'var(--color-primary-1400)',
        'primary-1500': 'var(--color-primary-1500)',
        'primary-1600': 'var(--color-primary-1600)',
        'primary-1700': 'var(--color-primary-1700)',
        'primary-1800': 'var(--color-primary-1800)',
        'primary-1900': 'var(--color-primary-1900)',
        'primary-2000': 'var(--color-primary-2000)',
        'primary-2100': 'var(--color-primary-2100)',
        'primary-2200': 'var(--color-primary-2200)',
        'primary-2300': 'var(--color-primary-2300)',
        'primary-2400': 'var(--color-primary-2400)',
        'primary-2500': 'var(--color-primary-2500)',
        'primary-2600': 'var(--color-primary-2600)',
        'primary-2700': 'var(--color-primary-2700)',
        'secondary-100': 'var(--color-secondary-100)',
        'secondary-200': 'var(--color-secondary-200)',
        'secondary-300': 'var(--color-secondary-300)',
        'secondary-400': 'var(--color-secondary-400)',
        'secondary-500': 'var(--color-secondary-500)',
        'secondary-600': 'var(--color-secondary-600)',
        'secondary-700': 'var(--color-secondary-700)',
        'secondary-800': 'var(--color-secondary-800)',
        'secondary-900': 'var(--color-secondary-900)',
        'secondary-1000': 'var(--color-secondary-1000)',
        'secondary-1100': 'var(--color-secondary-1100)',
        'secondary-1200': 'var(--color-secondary-1200)',
        'secondary-1300': 'var(--color-secondary-1300)',
        'secondary-1400': 'var(--color-secondary-1400)',
        'secondary-1500': 'var(--color-secondary-1500)',
        'secondary-1600': 'var(--color-secondary-1600)',
        'secondary-1700': 'var(--color-secondary-1700)',
        'secondary-1800': 'var(--color-secondary-1800)',
        'secondary-1900': 'var(--color-secondary-1900)',
        'secondary-2000': 'var(--color-secondary-2000)',
        'secondary-2100': 'var(--color-secondary-2100)',
        'secondary-2200': 'var(--color-secondary-2200)',
        'secondary-2300': 'var(--color-secondary-2300)',
        'secondary-2400': 'var(--color-secondary-2400)',
        'secondary-2500': 'var(--color-secondary-2500)',
        'secondary-2600': 'var(--color-secondary-2600)',
        'secondary-2700': 'var(--color-secondary-2700)',
        'tertiary-100': 'var(--color-tertiary-100)',
        'tertiary-200': 'var(--color-tertiary-200)',
        'tertiary-300': 'var(--color-tertiary-300)',
        'tertiary-400': 'var(--color-tertiary-400)',
        'tertiary-500': 'var(--color-tertiary-500)',
        'tertiary-600': 'var(--color-tertiary-600)',
        'tertiary-700': 'var(--color-tertiary-700)',
        'neutral-100': 'var(--color-neutral-100)',
        'neutral-200': 'var(--color-neutral-200)',
        'neutral-300': 'var(--color-neutral-300)',
        'neutral-400': 'var(--color-neutral-400)',
        'neutral-500': 'var(--color-neutral-500)',
        'neutral-600': 'var(--color-neutral-600)',
        'neutral-700': 'var(--color-neutral-700)',
        'neutral-800': 'var(--color-neutral-800)',
        'neutral-900': 'var(--color-neutral-900)',
        'neutral-1000': 'var(--color-neutral-1000)',
        'neutral-1100': 'var(--color-neutral-1100)',
        'neutral-1200': 'var(--color-neutral-1200)',
        'neutral-1300': 'var(--color-neutral-1300)',
        'neutral-1400': 'var(--color-neutral-1400)',
        'neutral-1500': 'var(--color-neutral-1500)',
        'neutral-1600': 'var(--color-neutral-1600)',
        'neutral-1700': 'var(--color-neutral-1700)',
        'neutral-1800': 'var(--color-neutral-1800)',
        'neutral-1900': 'var(--color-neutral-1900)',
        'neutral-2000': 'var(--color-neutral-2000)',
        'neutral-2100': 'var(--color-neutral-2100)',
        'neutral-2200': 'var(--color-neutral-2200)',
        'neutral-2300': 'var(--color-neutral-2300)',
        'neutral-2400': 'var(--color-neutral-2400)',
        'neutral-2500': 'var(--color-neutral-2500)',
        'neutral-2600': 'var(--color-neutral-2600)',
        'neutral-2700': 'var(--color-neutral-2700)',
        'green-100': 'var(--color-green-100)',
        'green-200': 'var(--color-green-200)',
        'green-300': 'var(--color-green-300)',
        'green-400': 'var(--color-green-400)',
        'green-500': 'var(--color-green-500)',
        'green-600': 'var(--color-green-600)',
        'green-700': 'var(--color-green-700)',
        'red-100': 'var(--color-red-100)',
        'red-200': 'var(--color-red-200)',
        'red-300': 'var(--color-red-300)',
        'red-400': 'var(--color-red-400)',
        'red-500': 'var(--color-red-500)',
        'red-600': 'var(--color-red-600)',
        'red-700': 'var(--color-red-700)',
        white: 'var(--color-white)',
        black: 'var(--color-black)',
        silver: 'var(--color-silver)',
        background: 'var(--color-background)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}