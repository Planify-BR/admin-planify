/// <reference types="vite/client" />

declare module 'virtual:generated-pages' {
  const routes: import('react-router-dom').RouteObject[];
  export default routes;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_TITLE: string;
}
