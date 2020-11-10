import React from 'react';
import { Text } from 'react-native';

interface Props {
  error: boolean;
  children: JSX.Element;
}

function WithLoader(props: Props) {
  return props.error ? <Text>Error</Text> : props.children;
}

export default WithLoader;
