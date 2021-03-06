// source: post_rate.proto
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

var model_pb = require('./model_pb.js');
goog.object.extend(proto, model_pb);
var rate_pb = require('./rate_pb.js');
goog.object.extend(proto, rate_pb);
goog.exportSymbol('proto.model.PostRate', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.model.PostRate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.PostRate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.PostRate.displayName = 'proto.model.PostRate';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.model.PostRate.prototype.toObject = function(opt_includeInstance) {
  return proto.model.PostRate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.PostRate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.PostRate.toObject = function(includeInstance, msg) {
  var f, obj = {
    model: (f = msg.getModel()) && model_pb.Model.toObject(includeInstance, f),
    postId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.model.PostRate}
 */
proto.model.PostRate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.PostRate;
  return proto.model.PostRate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.PostRate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.PostRate}
 */
proto.model.PostRate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new model_pb.Model;
      reader.readMessage(value,model_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPostId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {!proto.model.RateType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.model.PostRate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.PostRate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.PostRate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.PostRate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      model_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getPostId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional Model model = 1;
 * @return {?proto.model.Model}
 */
proto.model.PostRate.prototype.getModel = function() {
  return /** @type{?proto.model.Model} */ (
    jspb.Message.getWrapperField(this, model_pb.Model, 1));
};


/**
 * @param {?proto.model.Model|undefined} value
 * @return {!proto.model.PostRate} returns this
*/
proto.model.PostRate.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.PostRate} returns this
 */
proto.model.PostRate.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.PostRate.prototype.hasModel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 post_id = 2;
 * @return {number}
 */
proto.model.PostRate.prototype.getPostId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.PostRate} returns this
 */
proto.model.PostRate.prototype.setPostId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 user_id = 3;
 * @return {number}
 */
proto.model.PostRate.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.PostRate} returns this
 */
proto.model.PostRate.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional RateType type = 4;
 * @return {!proto.model.RateType}
 */
proto.model.PostRate.prototype.getType = function() {
  return /** @type {!proto.model.RateType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.model.RateType} value
 * @return {!proto.model.PostRate} returns this
 */
proto.model.PostRate.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


goog.object.extend(exports, proto.model);
