// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

declare global {
  interface Window {
    bootstrap: any;
  }
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
  const __APP_VERSION__: string; // Version of the app, set in vite.config.ts
}

export {};
