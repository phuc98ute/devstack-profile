import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    // Expose environment variables to your application
    define: {
      // Make env variables available globally as process.env.X
      'process.env.EMAILJS_API_KEY': new String(env.EMAILJS_API_KEY),
      'process.env.EMAILJS_TEMPLATE_ID': new String(env.EMAILJS_TEMPLATE_ID),
      'process.env.EMAILJS_SERVICE_ID': new String(env.EMAILJS_SERVICE_ID),
      'process.env.EMAIL': new String(env.EMAIL),
      'process.env.NAME': new String(env.NAME),
    }
  }
})
