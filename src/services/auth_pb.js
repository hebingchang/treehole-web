// source: auth.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.model.LoginSource', null, global);
goog.exportSymbol('proto.model.OAuthLoginChannel', null, global);
goog.exportSymbol('proto.model.WebSource', null, global);
/**
 * @enum {number}
 */
proto.model.OAuthLoginChannel = {
  LOGINWITHJACCOUNT: 0
};

/**
 * @enum {number}
 */
proto.model.LoginSource = {
  LOGINSOURCEIOS: 0,
  LOGINSOURCEANDROID: 1,
  LOGINSOURCEWEB: 2
};

/**
 * @enum {number}
 */
proto.model.WebSource = {
  WEBSOURCELOCALHOST: 0,
  WEBSOURCEDEVSERVER: 1,
  WEBSOURCEPRODSERVER: 2
};

goog.object.extend(exports, proto.model);
