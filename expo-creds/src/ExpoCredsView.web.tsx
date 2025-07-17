import * as React from 'react';

import { ExpoCredsViewProps } from './ExpoCreds.types';

export default function ExpoCredsView(props: ExpoCredsViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
