import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import * as child from "child_process";

const commitHash = child.execSync("git rev-parse --short HEAD").toString();

export default defineConfig({
  define: {
    __COMMIT_HASH__: JSON.stringify(commitHash),
  },
  plugins: [
    sveltekit()
  ],
  test: {
    globals: true,
    environment: 'jsdom'
  }
});
