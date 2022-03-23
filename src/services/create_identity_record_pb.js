// source: create_identity_record.proto
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
var user_pb = require('./user_pb.js');
goog.object.extend(proto, user_pb);
goog.exportSymbol('proto.model.CreateIdentityRecord', null, global);
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
proto.model.CreateIdentityRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.CreateIdentityRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.CreateIdentityRecord.displayName = 'proto.model.CreateIdentityRecord';
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
proto.model.CreateIdentityRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.model.CreateIdentityRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.CreateIdentityRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.CreateIdentityRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    model: (f = msg.getModel()) && model_pb.Model.toObject(includeInstance, f),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    year: jspb.Message.getFieldWithDefault(msg, 3, 0),
    month: jspb.Message.getFieldWithDefault(msg, 4, 0),
    count: jspb.Message.getFieldWithDefault(msg, 5, 0),
    user: (f = msg.getUser()) && user_pb.User.toObject(includeInstance, f)
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
 * @return {!proto.model.CreateIdentityRecord}
 */
proto.model.CreateIdentityRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.CreateIdentityRecord;
  return proto.model.CreateIdentityRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.CreateIdentityRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.CreateIdentityRecord}
 */
proto.model.CreateIdentityRecord.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setYear(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMonth(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCount(value);
      break;
    case 6:
      var value = new user_pb.User;
      reader.readMessage(value,user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
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
proto.model.CreateIdentityRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.CreateIdentityRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.CreateIdentityRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.CreateIdentityRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      model_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getYear();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getMonth();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional Model model = 1;
 * @return {?proto.model.Model}
 */
proto.model.CreateIdentityRecord.prototype.getModel = function() {
  return /** @type{?proto.model.Model} */ (
    jspb.Message.getWrapperField(this, model_pb.Model, 1));
};


/**
 * @param {?proto.model.Model|undefined} value
 * @return {!proto.model.CreateIdentityRecord} returns this
*/
proto.model.CreateIdentityRecord.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.CreateIdentityRecord} returns this
 */
proto.model.CreateIdentityRecord.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.CreateIdentityRecord.prototype.hasModel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 user_id = 2;
 * @return {number}
 */
proto.model.CreateIdentityRecord.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.CreateIdentityRecord} returns this
 */
proto.model.CreateIdentityRecord.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 year = 3;
 * @return {number}
 */
proto.model.CreateIdentityRecord.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.CreateIdentityRecord} returns this
 */
proto.model.CreateIdentityRecord.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 month = 4;
 * @return {number}
 */
proto.model.CreateIdentityRecord.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.CreateIdentityRecord} returns this
 */
proto.model.CreateIdentityRecord.prototype.setMonth = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 count = 5;
 * @return {number}
 */
proto.model.CreateIdentityRecord.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.CreateIdentityRecord} returns this
 */
proto.model.CreateIdentityRecord.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional User user = 6;
 * @return {?proto.model.User}
 */
proto.model.CreateIdentityRecord.prototype.getUser = function() {
  return /** @type{?proto.model.User} */ (
    jspb.Message.getWrapperField(this, user_pb.User, 6));
};


/**
 * @param {?proto.model.User|undefined} value
 * @return {!proto.model.CreateIdentityRecord} returns this
*/
proto.model.CreateIdentityRecord.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.CreateIdentityRecord} returns this
 */
proto.model.CreateIdentityRecord.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.CreateIdentityRecord.prototype.hasUser = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.model);
