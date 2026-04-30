/// <reference types="vite/client" />

declare module "*.tsx" {
  import type { ComponentType } from "react";
  const component: ComponentType<any>;
  export default component;
}
