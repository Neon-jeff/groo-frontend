import { defineConfig } from 'vite'
import dns from "dns";
import react from '@vitejs/plugin-react'


dns.setDefaultResultOrder("verbatim");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: "http://127.0.0.1",
  //   port: 3000,
  // },
});
