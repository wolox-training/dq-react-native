/**
 * @otplib/plugin-crypto
 *
 * @author Gerald Yeo <contact@fusedthought.com>
 * @version: 12.0.1
 * @license: MIT
 **/

 'use strict';
 global.Buffer = global.Buffer || require('buffer').Buffer;
 
 Object.defineProperty(exports, '__esModule', { value: true });
 
 function interopDefault(ex) {
   return ex && typeof ex === 'object' && 'default' in ex ? ex.default : ex;
 }
 
 const crypto = interopDefault(require('./crypto'));
 
 const createDigest = (algorithm, hmacKey, counter) => {
   const hmac = crypto.createHmac(algorithm, Buffer.from(hmacKey, 'hex'));
   const digest = hmac.update(Buffer.from(counter, 'hex')).digest();
   return digest.toString('hex');
 };
 const createRandomBytes = (size, encoding) => {
   return crypto.randomBytes(size).toString(encoding);
 };
 
 exports.createDigest = createDigest;
 exports.createRandomBytes = createRandomBytes;
