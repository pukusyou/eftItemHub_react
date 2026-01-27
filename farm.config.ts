import { defineConfig } from "@farmfe/core";
import react from "@farmfe/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  compilation: {
    output: {
      publicPath: "/",
    },
    define: {
      "process.env.PUBLIC_URL": '""',
    },
  },
});
