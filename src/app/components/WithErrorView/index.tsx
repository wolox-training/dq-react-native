import React from 'react';
import GenericText from '@components/GenericText';

interface Props {
  error: string | null;
  children: JSX.Element;
}

function WithErrorView(props: Props) {
  return props.error ? <GenericText text="Error" /> : props.children;
}

export default WithErrorView;
