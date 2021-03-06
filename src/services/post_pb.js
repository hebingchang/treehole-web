// source: post.proto
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
var identity_pb = require('./identity_pb.js');
goog.object.extend(proto, identity_pb);
var thread_pb = require('./thread_pb.js');
goog.object.extend(proto, thread_pb);
var user_thread_identity_pb = require('./user_thread_identity_pb.js');
goog.object.extend(proto, user_thread_identity_pb);
goog.exportSymbol('proto.model.Post', null, global);
goog.exportSymbol('proto.model.PostStatus', null, global);
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
proto.model.Post = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.Post, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.Post.displayName = 'proto.model.Post';
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
proto.model.Post.prototype.toObject = function(opt_includeInstance) {
  return proto.model.Post.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.Post} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.Post.toObject = function(includeInstance, msg) {
  var f, obj = {
    model: (f = msg.getModel()) && model_pb.Model.toObject(includeInstance, f),
    threadId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    floor: jspb.Message.getFieldWithDefault(msg, 3, 0),
    identityCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    content: jspb.Message.getFieldWithDefault(msg, 5, ""),
    likeCount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    hateCount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    status: jspb.Message.getFieldWithDefault(msg, 8, 0),
    replyToPostId: (f = msg.getReplyToPostId()) && google_protobuf_wrappers_pb.UInt64Value.toObject(includeInstance, f),
    replyToIdentityCode: (f = msg.getReplyToIdentityCode()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    replyToFloor: (f = msg.getReplyToFloor()) && google_protobuf_wrappers_pb.UInt64Value.toObject(includeInstance, f),
    isLike: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    isHate: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    identity: (f = msg.getIdentity()) && identity_pb.Identity.toObject(includeInstance, f),
    replyToPost: (f = msg.getReplyToPost()) && proto.model.Post.toObject(includeInstance, f),
    thread: (f = msg.getThread()) && thread_pb.Thread.toObject(includeInstance, f),
    hideIdentity: (f = msg.getHideIdentity()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    userThreadIdentityId: (f = msg.getUserThreadIdentityId()) && google_protobuf_wrappers_pb.UInt64Value.toObject(includeInstance, f),
    userThreadIdentity: (f = msg.getUserThreadIdentity()) && user_thread_identity_pb.UserThreadIdentity.toObject(includeInstance, f),
    appreciationCount: jspb.Message.getFieldWithDefault(msg, 20, 0),
    isAppreciated: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
    canDelete: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    remark: jspb.Message.getFieldWithDefault(msg, 23, ""),
    hideReason: jspb.Message.getFieldWithDefault(msg, 24, ""),
    preview: jspb.Message.getFieldWithDefault(msg, 25, ""),
    disableHate: (f = msg.getDisableHate()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.model.Post}
 */
proto.model.Post.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.Post;
  return proto.model.Post.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.Post} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.Post}
 */
proto.model.Post.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setThreadId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFloor(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLikeCount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHateCount(value);
      break;
    case 8:
      var value = /** @type {!proto.model.PostStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.UInt64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt64Value.deserializeBinaryFromReader);
      msg.setReplyToPostId(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setReplyToIdentityCode(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.UInt64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt64Value.deserializeBinaryFromReader);
      msg.setReplyToFloor(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLike(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsHate(value);
      break;
    case 14:
      var value = new identity_pb.Identity;
      reader.readMessage(value,identity_pb.Identity.deserializeBinaryFromReader);
      msg.setIdentity(value);
      break;
    case 15:
      var value = new proto.model.Post;
      reader.readMessage(value,proto.model.Post.deserializeBinaryFromReader);
      msg.setReplyToPost(value);
      break;
    case 16:
      var value = new thread_pb.Thread;
      reader.readMessage(value,thread_pb.Thread.deserializeBinaryFromReader);
      msg.setThread(value);
      break;
    case 17:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setHideIdentity(value);
      break;
    case 18:
      var value = new google_protobuf_wrappers_pb.UInt64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt64Value.deserializeBinaryFromReader);
      msg.setUserThreadIdentityId(value);
      break;
    case 19:
      var value = new user_thread_identity_pb.UserThreadIdentity;
      reader.readMessage(value,user_thread_identity_pb.UserThreadIdentity.deserializeBinaryFromReader);
      msg.setUserThreadIdentity(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAppreciationCount(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAppreciated(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanDelete(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemark(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setHideReason(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreview(value);
      break;
    case 26:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setDisableHate(value);
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
proto.model.Post.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.Post.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.Post} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.Post.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      model_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getThreadId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getFloor();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getIdentityCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLikeCount();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getHateCount();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getReplyToPostId();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.UInt64Value.serializeBinaryToWriter
    );
  }
  f = message.getReplyToIdentityCode();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getReplyToFloor();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_wrappers_pb.UInt64Value.serializeBinaryToWriter
    );
  }
  f = message.getIsLike();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getIsHate();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getIdentity();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      identity_pb.Identity.serializeBinaryToWriter
    );
  }
  f = message.getReplyToPost();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.model.Post.serializeBinaryToWriter
    );
  }
  f = message.getThread();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      thread_pb.Thread.serializeBinaryToWriter
    );
  }
  f = message.getHideIdentity();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getUserThreadIdentityId();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_wrappers_pb.UInt64Value.serializeBinaryToWriter
    );
  }
  f = message.getUserThreadIdentity();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      user_thread_identity_pb.UserThreadIdentity.serializeBinaryToWriter
    );
  }
  f = message.getAppreciationCount();
  if (f !== 0) {
    writer.writeUint64(
      20,
      f
    );
  }
  f = message.getIsAppreciated();
  if (f) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getCanDelete();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getRemark();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getHideReason();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getPreview();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getDisableHate();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional Model model = 1;
 * @return {?proto.model.Model}
 */
proto.model.Post.prototype.getModel = function() {
  return /** @type{?proto.model.Model} */ (
    jspb.Message.getWrapperField(this, model_pb.Model, 1));
};


/**
 * @param {?proto.model.Model|undefined} value
 * @return {!proto.model.Post} returns this
*/
proto.model.Post.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Post.prototype.hasModel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 thread_id = 2;
 * @return {number}
 */
proto.model.Post.prototype.getThreadId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.setThreadId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 floor = 3;
 * @return {number}
 */
proto.model.Post.prototype.getFloor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.setFloor = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string identity_code = 4;
 * @return {string}
 */
proto.model.Post.prototype.getIdentityCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.setIdentityCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string content = 5;
 * @return {string}
 */
proto.model.Post.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 like_count = 6;
 * @return {number}
 */
proto.model.Post.prototype.getLikeCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.setLikeCount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 hate_count = 7;
 * @return {number}
 */
proto.model.Post.prototype.getHateCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.setHateCount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional PostStatus status = 8;
 * @return {!proto.model.PostStatus}
 */
proto.model.Post.prototype.getStatus = function() {
  return /** @type {!proto.model.PostStatus} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.model.PostStatus} value
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional google.protobuf.UInt64Value reply_to_post_id = 9;
 * @return {?proto.google.protobuf.UInt64Value}
 */
proto.model.Post.prototype.getReplyToPostId = function() {
  return /** @type{?proto.google.protobuf.UInt64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt64Value, 9));
};


/**
 * @param {?proto.google.protobuf.UInt64Value|undefined} value
 * @return {!proto.model.Post} returns this
*/
proto.model.Post.prototype.setReplyToPostId = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.clearReplyToPostId = function() {
  return this.setReplyToPostId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Post.prototype.hasReplyToPostId = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.StringValue reply_to_identity_code = 10;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.model.Post.prototype.getReplyToIdentityCode = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 10));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.model.Post} returns this
*/
proto.model.Post.prototype.setReplyToIdentityCode = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.clearReplyToIdentityCode = function() {
  return this.setReplyToIdentityCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Post.prototype.hasReplyToIdentityCode = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.UInt64Value reply_to_floor = 11;
 * @return {?proto.google.protobuf.UInt64Value}
 */
proto.model.Post.prototype.getReplyToFloor = function() {
  return /** @type{?proto.google.protobuf.UInt64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt64Value, 11));
};


/**
 * @param {?proto.google.protobuf.UInt64Value|undefined} value
 * @return {!proto.model.Post} returns this
*/
proto.model.Post.prototype.setReplyToFloor = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.clearReplyToFloor = function() {
  return this.setReplyToFloor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Post.prototype.hasReplyToFloor = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool is_like = 12;
 * @return {boolean}
 */
proto.model.Post.prototype.getIsLike = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.setIsLike = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool is_hate = 13;
 * @return {boolean}
 */
proto.model.Post.prototype.getIsHate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.setIsHate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional Identity identity = 14;
 * @return {?proto.model.Identity}
 */
proto.model.Post.prototype.getIdentity = function() {
  return /** @type{?proto.model.Identity} */ (
    jspb.Message.getWrapperField(this, identity_pb.Identity, 14));
};


/**
 * @param {?proto.model.Identity|undefined} value
 * @return {!proto.model.Post} returns this
*/
proto.model.Post.prototype.setIdentity = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.clearIdentity = function() {
  return this.setIdentity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Post.prototype.hasIdentity = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional Post reply_to_post = 15;
 * @return {?proto.model.Post}
 */
proto.model.Post.prototype.getReplyToPost = function() {
  return /** @type{?proto.model.Post} */ (
    jspb.Message.getWrapperField(this, proto.model.Post, 15));
};


/**
 * @param {?proto.model.Post|undefined} value
 * @return {!proto.model.Post} returns this
*/
proto.model.Post.prototype.setReplyToPost = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.clearReplyToPost = function() {
  return this.setReplyToPost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Post.prototype.hasReplyToPost = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional Thread thread = 16;
 * @return {?proto.model.Thread}
 */
proto.model.Post.prototype.getThread = function() {
  return /** @type{?proto.model.Thread} */ (
    jspb.Message.getWrapperField(this, thread_pb.Thread, 16));
};


/**
 * @param {?proto.model.Thread|undefined} value
 * @return {!proto.model.Post} returns this
*/
proto.model.Post.prototype.setThread = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.clearThread = function() {
  return this.setThread(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Post.prototype.hasThread = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.BoolValue hide_identity = 17;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.model.Post.prototype.getHideIdentity = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 17));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.model.Post} returns this
*/
proto.model.Post.prototype.setHideIdentity = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.clearHideIdentity = function() {
  return this.setHideIdentity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Post.prototype.hasHideIdentity = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.UInt64Value user_thread_identity_id = 18;
 * @return {?proto.google.protobuf.UInt64Value}
 */
proto.model.Post.prototype.getUserThreadIdentityId = function() {
  return /** @type{?proto.google.protobuf.UInt64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt64Value, 18));
};


/**
 * @param {?proto.google.protobuf.UInt64Value|undefined} value
 * @return {!proto.model.Post} returns this
*/
proto.model.Post.prototype.setUserThreadIdentityId = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.clearUserThreadIdentityId = function() {
  return this.setUserThreadIdentityId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Post.prototype.hasUserThreadIdentityId = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional UserThreadIdentity user_thread_identity = 19;
 * @return {?proto.model.UserThreadIdentity}
 */
proto.model.Post.prototype.getUserThreadIdentity = function() {
  return /** @type{?proto.model.UserThreadIdentity} */ (
    jspb.Message.getWrapperField(this, user_thread_identity_pb.UserThreadIdentity, 19));
};


/**
 * @param {?proto.model.UserThreadIdentity|undefined} value
 * @return {!proto.model.Post} returns this
*/
proto.model.Post.prototype.setUserThreadIdentity = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.clearUserThreadIdentity = function() {
  return this.setUserThreadIdentity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Post.prototype.hasUserThreadIdentity = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional uint64 appreciation_count = 20;
 * @return {number}
 */
proto.model.Post.prototype.getAppreciationCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.setAppreciationCount = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional bool is_appreciated = 21;
 * @return {boolean}
 */
proto.model.Post.prototype.getIsAppreciated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.setIsAppreciated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 21, value);
};


/**
 * optional bool can_delete = 22;
 * @return {boolean}
 */
proto.model.Post.prototype.getCanDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.setCanDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * optional string remark = 23;
 * @return {string}
 */
proto.model.Post.prototype.getRemark = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.setRemark = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional string hide_reason = 24;
 * @return {string}
 */
proto.model.Post.prototype.getHideReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.setHideReason = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional string preview = 25;
 * @return {string}
 */
proto.model.Post.prototype.getPreview = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.setPreview = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional google.protobuf.BoolValue disable_hate = 26;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.model.Post.prototype.getDisableHate = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 26));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.model.Post} returns this
*/
proto.model.Post.prototype.setDisableHate = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Post} returns this
 */
proto.model.Post.prototype.clearDisableHate = function() {
  return this.setDisableHate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Post.prototype.hasDisableHate = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * @enum {number}
 */
proto.model.PostStatus = {
  POSTSTATUSNORMAL: 0,
  POSTSTATUSCOLLAPSED: 1,
  POSTSTATUSKILLED: 2,
  POSTSTATUSHIDE: 3
};

goog.object.extend(exports, proto.model);
