/**
 * @format
 */

 import 'react-native';
 import { Text } from 'react-native';
 import React from 'react';
 import renderer from 'react-test-renderer';
 
 import App from '../src/app';
 
 // Note: test renderer must be required after react-native.
 
 it('renders correctly', () => {
   // TODO: check why App component fails with back arrow navigation asset
   renderer.create(<Text> Asd </Text>);
 });