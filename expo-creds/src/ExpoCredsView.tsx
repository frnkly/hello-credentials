import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoCredsViewProps } from './ExpoCreds.types';

const NativeView: React.ComponentType<ExpoCredsViewProps> =
  requireNativeView('ExpoCreds');

export default function ExpoCredsView(props: ExpoCredsViewProps) {
  return <NativeView {...props} />;
}
