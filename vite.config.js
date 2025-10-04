import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Auto-configure base path for GitHub Pages on CI builds.
// If building in GitHub Actions, set base to "/<repo>/"; otherwise default to "/" for local dev.
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : ''

export default defineConfig({
  base: repoName ? `/${repoName}/` : '/',
  plugins: [react()],
})
