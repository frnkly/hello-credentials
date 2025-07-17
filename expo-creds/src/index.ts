// Reexport the native module. On web, it will be resolved to ExpoCredsModule.web.ts
// and on native platforms to ExpoCredsModule.ts
export { default } from './ExpoCredsModule';
export { default as ExpoCredsView } from './ExpoCredsView';
export * from  './ExpoCreds.types';
