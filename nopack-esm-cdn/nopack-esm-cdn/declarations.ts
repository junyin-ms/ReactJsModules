// TypeScript compiler open issue: cannot import modules from URI
// https://github.com/microsoft/TypeScript/issues/35749
// Workarounds:
// 1. Declare module with option typings (see below)
// 2. Use @ts-ignore compiler directive

declare module 'https://esm.sh/react?dev';
declare module 'https://esm.sh/react-dom/client?dev';