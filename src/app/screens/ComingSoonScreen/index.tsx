import React from 'react';
import { Navigation } from '@interfaces/navigation';

import GenericText from './GenericText';

interface LabelText {
  text: string;
}

function ComingSoonScreen({ route }: Navigation<LabelText>) {
  return <GenericText text={route.params.text} />;
}

export default ComingSoonScreen;
