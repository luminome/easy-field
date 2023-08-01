import { defineConfig } from 'vite'

export default defineConfig({
  "build":{
    outDir: "build",
    emptyOutDir: true,
    rollupOptions: {
        output: {
            entryFileNames: `assets/[name].js`,
            chunkFileNames: `assets/[name].js`,
            assetFileNames: `assets/[name].[ext]`
        },
    }
  }
})