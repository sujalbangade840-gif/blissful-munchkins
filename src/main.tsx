// Ensure fetch has both getter and setter across all iframe environments
(function ensureFetchSetter() {
  if (typeof window === 'undefined') return;
  try {
    const rawFetch = window.fetch;
    let currentFetch = rawFetch ? rawFetch.bind(window) : undefined;
    const desc = Object.getOwnPropertyDescriptor(window, 'fetch');
    if (!desc || (desc.get && !desc.set) || desc.writable !== false) {
      Object.defineProperty(window, 'fetch', {
        get() {
          return currentFetch;
        },
        set(fn) {
          currentFetch = fn;
        },
        configurable: true,
        enumerable: true,
      });
    }
  } catch {
    // If restricted, ignore
  }
})();

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
