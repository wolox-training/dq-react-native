import { includesDigits, getInitials, keepNumbers } from "./stringUtils";

describe('includesDigit', () => {
   test('string with digits', () => {
      expect(includesDigits('abc123')).toBe(true);
   });
   test('string without digits', () => {
      expect(includesDigits('abc')).toBe(false);
   });
   test('empty string', () => {
      expect(includesDigits('')).toBe(false);
   });
   test('only one number', () => {
      expect(includesDigits('1')).toBe(true);
   });
})

describe('getInitials', () => {
   test('string with multiple words', () => {
      expect(getInitials('Diego Andres Quiros')).toEqual('DAQ');
   });
   test('string with one word', () => {
      expect(getInitials('Diego')).toEqual('D');
   });
   test('string with multiple spaces', () => {
      expect(getInitials('Diego     Andres     Quiros')).toEqual('DAQ');
   });
   test('empty string', () => {
      expect(getInitials('')).toEqual('');
   });
   test('string with numbers and special characters', () => {
      expect(getInitials('!Diego 4ndres Quiros')).toEqual('!4Q');
   });
})

describe('keepNumbers', () => {
   test('string with digits', () => {
      expect(keepNumbers('abc123')).toEqual('123');
   });
   test('string with mixed letters and numbers', () => {
      expect(keepNumbers('hh33hj2j4j5')).toEqual('33245');
   });
   test('empty string', () => {
      expect(keepNumbers('')).toEqual('');
   });
   test('no numbers', () => {
      expect(keepNumbers('Diego Andres Quiros')).toEqual('');
   });
})
