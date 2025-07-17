import { registerWebModule, NativeModule } from 'expo';

import { ExpoCredsModuleEvents } from './ExpoCreds.types';

class ExpoCredsModule extends NativeModule<ExpoCredsModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoCredsModule, 'ExpoCredsModule');
