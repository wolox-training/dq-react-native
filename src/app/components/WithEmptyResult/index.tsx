import React from 'react';
import GenericText from '@components/GenericText';

interface Props {
  isEmpty: boolean;
  children: JSX.Element;
}

function WithEmptyResult(props: Props) {
  return props.isEmpty ? <GenericText text="No Books Found" /> : props.children;
}

export default WithEmptyResult;
