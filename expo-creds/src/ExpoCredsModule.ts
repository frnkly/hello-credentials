import { NativeModule, requireNativeModule } from 'expo';

import { ExpoCredsModuleEvents } from './ExpoCreds.types';

declare class ExpoCredsModule extends NativeModule<ExpoCredsModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoCredsModule>('ExpoCreds');
