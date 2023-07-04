import { appTools, defineConfig } from '@modern-js/app-tools';
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
    state: true,
  },
  server: {
    ssr: true,
  },
  plugins: [appTools(), tailwindcssPlugin()],
});
