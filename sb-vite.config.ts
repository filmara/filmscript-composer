import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  process.env = { ...process.env, ...env }
  return {
    plugins: [tsconfigPaths()],
    resolve: {
      alias: {
        '~/styles': path.resolve(__dirname, './app/assets'),
        '~/src': path.resolve(__dirname, './app/design-system')
      },
    },
  }
})