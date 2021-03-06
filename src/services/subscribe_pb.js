// source: subscribe.proto
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

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var model_pb = require('./model_pb.js');
goog.object.extend(proto, model_pb);
var user_pb = require('./user_pb.js');
goog.object.extend(proto, user_pb);
var thread_pb = require('./thread_pb.js');
goog.object.extend(proto, thread_pb);
goog.exportSymbol('proto.model.Subscribe', null, global);
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
proto.model.Subscribe = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.Subscribe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.Subscribe.displayName = 'proto.model.Subscribe';
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
proto.model.Subscribe.prototype.toObject = function(opt_includeInstance) {
  return proto.model.Subscribe.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.Subscribe} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.Subscribe.toObject = function(includeInstance, msg) {
  var f, obj = {
    model: (f = msg.getModel()) && model_pb.Model.toObject(includeInstance, f),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    subscribeMention: (f = msg.getSubscribeMention()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    subscribePost: (f = msg.getSubscribePost()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    threadId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    user: (f = msg.getUser()) && user_pb.User.toObject(includeInstance, f),
    thread: (f = msg.getThread()) && thread_pb.Thread.toObject(includeInstance, f)
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
 * @return {!proto.model.Subscribe}
 */
proto.model.Subscribe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.Subscribe;
  return proto.model.Subscribe.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.Subscribe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.Subscribe}
 */
proto.model.Subscribe.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setSubscribeMention(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setSubscribePost(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setThreadId(value);
      break;
    case 6:
      var value = new user_pb.User;
      reader.readMessage(value,user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 7:
      var value = new thread_pb.Thread;
      reader.readMessage(value,thread_pb.Thread.deserializeBinaryFromReader);
      msg.setThread(value);
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
proto.model.Subscribe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.Subscribe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.Subscribe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.Subscribe.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSubscribeMention();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getSubscribePost();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getThreadId();
  if (f !== 0) {
    writer.writeUint64(
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
  f = message.getThread();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      thread_pb.Thread.serializeBinaryToWriter
    );
  }
};


/**
 * optional Model model = 1;
 * @return {?proto.model.Model}
 */
proto.model.Subscribe.prototype.getModel = function() {
  return /** @type{?proto.model.Model} */ (
    jspb.Message.getWrapperField(this, model_pb.Model, 1));
};


/**
 * @param {?proto.model.Model|undefined} value
 * @return {!proto.model.Subscribe} returns this
*/
proto.model.Subscribe.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Subscribe} returns this
 */
proto.model.Subscribe.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Subscribe.prototype.hasModel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 user_id = 2;
 * @return {number}
 */
proto.model.Subscribe.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.Subscribe} returns this
 */
proto.model.Subscribe.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.BoolValue subscribe_mention = 3;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.model.Subscribe.prototype.getSubscribeMention = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 3));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.model.Subscribe} returns this
*/
proto.model.Subscribe.prototype.setSubscribeMention = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Subscribe} returns this
 */
proto.model.Subscribe.prototype.clearSubscribeMention = function() {
  return this.setSubscribeMention(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Subscribe.prototype.hasSubscribeMention = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.BoolValue subscribe_post = 4;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.model.Subscribe.prototype.getSubscribePost = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 4));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.model.Subscribe} returns this
*/
proto.model.Subscribe.prototype.setSubscribePost = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Subscribe} returns this
 */
proto.model.Subscribe.prototype.clearSubscribePost = function() {
  return this.setSubscribePost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Subscribe.prototype.hasSubscribePost = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 thread_id = 5;
 * @return {number}
 */
proto.model.Subscribe.prototype.getThreadId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.Subscribe} returns this
 */
proto.model.Subscribe.prototype.setThreadId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional User user = 6;
 * @return {?proto.model.User}
 */
proto.model.Subscribe.prototype.getUser = function() {
  return /** @type{?proto.model.User} */ (
    jspb.Message.getWrapperField(this, user_pb.User, 6));
};


/**
 * @param {?proto.model.User|undefined} value
 * @return {!proto.model.Subscribe} returns this
*/
proto.model.Subscribe.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Subscribe} returns this
 */
proto.model.Subscribe.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Subscribe.prototype.hasUser = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Thread thread = 7;
 * @return {?proto.model.Thread}
 */
proto.model.Subscribe.prototype.getThread = function() {
  return /** @type{?proto.model.Thread} */ (
    jspb.Message.getWrapperField(this, thread_pb.Thread, 7));
};


/**
 * @param {?proto.model.Thread|undefined} value
 * @return {!proto.model.Subscribe} returns this
*/
proto.model.Subscribe.prototype.setThread = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Subscribe} returns this
 */
proto.model.Subscribe.prototype.clearThread = function() {
  return this.setThread(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Subscribe.prototype.hasThread = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.model);
