import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'

// Map each figma asset hash to a suitable placeholder image URL
const figmaAssetMap: Record<string, string> = {
  // Logo (JD Institute)
  '5a60e6ca6cfcc21465cf0ec92b50985fae08016a': 'https://placehold.co/200x66/ffcc29/333333?text=JD+Institute',
  // Hero image – fashion students in studio
  'f4bcf96738bcaf6744975e32d93a9e43de715a7f': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  // Feature cards / campus image
  '17994c8e34efbea5ffd7690fecf3f81285fb225b': 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80',
  // Testimonial / alumni portrait
  '62b4bd39a49b2210e48ac38e5ea96a937bd459ed': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  // H&M logo placeholder
  'ed18907224e05206be10eae66ca174432e9afdcc': 'https://placehold.co/120x60/ffffff/333333?text=H%26M',
  // Student work 1
  '6165dd25ede957ec84dfce5a2e1e64c21f9781e7': 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
  // Student work 2
  'eeb2270c669aba7f03918b2f857fe18535d3ab1f': 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
  // Student work 3
  'e4ff389b33306ea8d88a1af4552232e700d2ce10': 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
  // Brand logo – generic brand
  'ded068e5aab159787425e1873a2cd9629acd4536': 'https://placehold.co/120x60/ffffff/333333?text=Brand',
  // Biba logo
  '30fb3783b91c73891dfab552418ca62e1b9bf92d': 'https://placehold.co/120x60/ffffff/333333?text=Biba',
  // Dulux logo
  '00322eabb7a9393cc5c981a481e21a7910a77672': 'https://placehold.co/120x60/ffffff/333333?text=Dulux',
  // Logo 4
  '146aad87ef15d6ae92bc6a8b7dd8e399bc9d6818': 'https://placehold.co/120x60/ffffff/333333?text=Logo',
  // Marks & Spencer logo
  '48da2dfabaa38d319d35593b35c8aa3e9c08f86e': 'https://placehold.co/120x60/ffffff/333333?text=M%26S',
  // MM Black logo
  '8a38bea790489a751e245dd8bcff985ecac5ce05': 'https://placehold.co/120x60/ffffff/333333?text=MM',
  // Satya Paul
  '56027b641fe67f88c4b058d868b5556c89a4be73': 'https://placehold.co/120x60/ffffff/333333?text=Satya+Paul',
  // Calvin Klein
  'b69f94df1599c041b8fa0c7db2e1c2491e3089c6': 'https://placehold.co/120x60/ffffff/333333?text=Calvin+Klein',
  // Courses section thumbnail
  'd4b8d67c363602a55c017ed42f2b77bbdd087a51': 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
  // Alumni portraits
  '7c56d631dbd54d64642f368dc20d90a65133e0ae': 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
  'd31525d4f348cb99c72b5e70b9e6833dd7dd551e': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  'd3d3dcfa10acbe5419f362174284a607954a29f6': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  '76dd62369118b7c88b315f7c7323e696ddbeeb3b': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  // Testimonial rectangle / extra
  '02b5d332bea61444872d281e86dd1894428fe4d6': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
}

function figmaAssetsPlugin(): Plugin {
  return {
    name: 'figma-assets-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        return '\0' + id // virtual module marker
      }
    },
    load(id: string) {
      if (id.startsWith('\0figma:asset/')) {
        const hash = id.replace('\0figma:asset/', '').replace('.png', '')
        const url = figmaAssetMap[hash] ?? `https://placehold.co/400x300/cccccc/666666?text=Image`
        return `export default ${JSON.stringify(url)};`
      }
    },
  }
}

export default defineConfig({
  // For GitHub Pages: set to './' for root deployment,
  // or '/<repo-name>/' if deploying to github.io/<repo-name>
  base: '/jd-institute-2026/',
  plugins: [
    figmaAssetsPlugin(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})