// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

declare global {
  interface Window {
    bootstrap: any;
  }
  type Variant =
    | 'primary'
    | 'secondary'
    | 'light'
    | 'dark'
    | 'gray'
    | 'base-1'
    | 'base-2'
    | 'base-3'
    | 'base-4'
    | 'base-i1'
    | 'base-i2'
    | 'base-i3'
    | 'base-i4';

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
