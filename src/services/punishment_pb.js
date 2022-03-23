// source: punishment.proto
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
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var thread_pb = require('./thread_pb.js');
goog.object.extend(proto, thread_pb);
var post_pb = require('./post_pb.js');
goog.object.extend(proto, post_pb);
var category_pb = require('./category_pb.js');
goog.object.extend(proto, category_pb);
var user_pb = require('./user_pb.js');
goog.object.extend(proto, user_pb);
var identity_pb = require('./identity_pb.js');
goog.object.extend(proto, identity_pb);
goog.exportSymbol('proto.model.PunishType', null, global);
goog.exportSymbol('proto.model.Punishment', null, global);
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
proto.model.Punishment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.Punishment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.Punishment.displayName = 'proto.model.Punishment';
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
proto.model.Punishment.prototype.toObject = function(opt_includeInstance) {
  return proto.model.Punishment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.Punishment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.Punishment.toObject = function(includeInstance, msg) {
  var f, obj = {
    model: (f = msg.getModel()) && model_pb.Model.toObject(includeInstance, f),
    endAt: (f = msg.getEndAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    userId: (f = msg.getUserId()) && google_protobuf_wrappers_pb.UInt64Value.toObject(includeInstance, f),
    identityId: (f = msg.getIdentityId()) && google_protobuf_wrappers_pb.UInt64Value.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 6, ""),
    categoryId: (f = msg.getCategoryId()) && google_protobuf_wrappers_pb.UInt64Value.toObject(includeInstance, f),
    fromThreadId: (f = msg.getFromThreadId()) && google_protobuf_wrappers_pb.UInt64Value.toObject(includeInstance, f),
    fromPostId: (f = msg.getFromPostId()) && google_protobuf_wrappers_pb.UInt64Value.toObject(includeInstance, f),
    fromThread: (f = msg.getFromThread()) && thread_pb.Thread.toObject(includeInstance, f),
    fromPost: (f = msg.getFromPost()) && post_pb.Post.toObject(includeInstance, f),
    banUser: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    days: jspb.Message.getFieldWithDefault(msg, 13, 0),
    category: (f = msg.getCategory()) && category_pb.Category.toObject(includeInstance, f),
    user: (f = msg.getUser()) && user_pb.User.toObject(includeInstance, f),
    identity: (f = msg.getIdentity()) && identity_pb.Identity.toObject(includeInstance, f),
    announcementThreadId: jspb.Message.getFieldWithDefault(msg, 17, 0)
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
 * @return {!proto.model.Punishment}
 */
proto.model.Punishment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.Punishment;
  return proto.model.Punishment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.Punishment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.Punishment}
 */
proto.model.Punishment.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndAt(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.UInt64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt64Value.deserializeBinaryFromReader);
      msg.setUserId(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.UInt64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt64Value.deserializeBinaryFromReader);
      msg.setIdentityId(value);
      break;
    case 5:
      var value = /** @type {!proto.model.PunishType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.UInt64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt64Value.deserializeBinaryFromReader);
      msg.setCategoryId(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.UInt64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt64Value.deserializeBinaryFromReader);
      msg.setFromThreadId(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.UInt64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt64Value.deserializeBinaryFromReader);
      msg.setFromPostId(value);
      break;
    case 10:
      var value = new thread_pb.Thread;
      reader.readMessage(value,thread_pb.Thread.deserializeBinaryFromReader);
      msg.setFromThread(value);
      break;
    case 11:
      var value = new post_pb.Post;
      reader.readMessage(value,post_pb.Post.deserializeBinaryFromReader);
      msg.setFromPost(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBanUser(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDays(value);
      break;
    case 14:
      var value = new category_pb.Category;
      reader.readMessage(value,category_pb.Category.deserializeBinaryFromReader);
      msg.setCategory(value);
      break;
    case 15:
      var value = new user_pb.User;
      reader.readMessage(value,user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 16:
      var value = new identity_pb.Identity;
      reader.readMessage(value,identity_pb.Identity.deserializeBinaryFromReader);
      msg.setIdentity(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAnnouncementThreadId(value);
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
proto.model.Punishment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.Punishment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.Punishment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.Punishment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      model_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getEndAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUserId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.UInt64Value.serializeBinaryToWriter
    );
  }
  f = message.getIdentityId();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.UInt64Value.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCategoryId();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.UInt64Value.serializeBinaryToWriter
    );
  }
  f = message.getFromThreadId();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.UInt64Value.serializeBinaryToWriter
    );
  }
  f = message.getFromPostId();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.UInt64Value.serializeBinaryToWriter
    );
  }
  f = message.getFromThread();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      thread_pb.Thread.serializeBinaryToWriter
    );
  }
  f = message.getFromPost();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      post_pb.Post.serializeBinaryToWriter
    );
  }
  f = message.getBanUser();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getDays();
  if (f !== 0) {
    writer.writeUint64(
      13,
      f
    );
  }
  f = message.getCategory();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      category_pb.Category.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      identity_pb.Identity.serializeBinaryToWriter
    );
  }
  f = message.getAnnouncementThreadId();
  if (f !== 0) {
    writer.writeUint64(
      17,
      f
    );
  }
};


/**
 * optional Model model = 1;
 * @return {?proto.model.Model}
 */
proto.model.Punishment.prototype.getModel = function() {
  return /** @type{?proto.model.Model} */ (
    jspb.Message.getWrapperField(this, model_pb.Model, 1));
};


/**
 * @param {?proto.model.Model|undefined} value
 * @return {!proto.model.Punishment} returns this
*/
proto.model.Punishment.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Punishment} returns this
 */
proto.model.Punishment.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Punishment.prototype.hasModel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp end_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.model.Punishment.prototype.getEndAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.model.Punishment} returns this
*/
proto.model.Punishment.prototype.setEndAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Punishment} returns this
 */
proto.model.Punishment.prototype.clearEndAt = function() {
  return this.setEndAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Punishment.prototype.hasEndAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.UInt64Value user_id = 3;
 * @return {?proto.google.protobuf.UInt64Value}
 */
proto.model.Punishment.prototype.getUserId = function() {
  return /** @type{?proto.google.protobuf.UInt64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt64Value, 3));
};


/**
 * @param {?proto.google.protobuf.UInt64Value|undefined} value
 * @return {!proto.model.Punishment} returns this
*/
proto.model.Punishment.prototype.setUserId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Punishment} returns this
 */
proto.model.Punishment.prototype.clearUserId = function() {
  return this.setUserId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Punishment.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.UInt64Value identity_id = 4;
 * @return {?proto.google.protobuf.UInt64Value}
 */
proto.model.Punishment.prototype.getIdentityId = function() {
  return /** @type{?proto.google.protobuf.UInt64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt64Value, 4));
};


/**
 * @param {?proto.google.protobuf.UInt64Value|undefined} value
 * @return {!proto.model.Punishment} returns this
*/
proto.model.Punishment.prototype.setIdentityId = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Punishment} returns this
 */
proto.model.Punishment.prototype.clearIdentityId = function() {
  return this.setIdentityId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Punishment.prototype.hasIdentityId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PunishType type = 5;
 * @return {!proto.model.PunishType}
 */
proto.model.Punishment.prototype.getType = function() {
  return /** @type {!proto.model.PunishType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.model.PunishType} value
 * @return {!proto.model.Punishment} returns this
 */
proto.model.Punishment.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string reason = 6;
 * @return {string}
 */
proto.model.Punishment.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.Punishment} returns this
 */
proto.model.Punishment.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.UInt64Value category_id = 7;
 * @return {?proto.google.protobuf.UInt64Value}
 */
proto.model.Punishment.prototype.getCategoryId = function() {
  return /** @type{?proto.google.protobuf.UInt64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt64Value, 7));
};


/**
 * @param {?proto.google.protobuf.UInt64Value|undefined} value
 * @return {!proto.model.Punishment} returns this
*/
proto.model.Punishment.prototype.setCategoryId = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Punishment} returns this
 */
proto.model.Punishment.prototype.clearCategoryId = function() {
  return this.setCategoryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Punishment.prototype.hasCategoryId = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.UInt64Value from_thread_id = 8;
 * @return {?proto.google.protobuf.UInt64Value}
 */
proto.model.Punishment.prototype.getFromThreadId = function() {
  return /** @type{?proto.google.protobuf.UInt64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt64Value, 8));
};


/**
 * @param {?proto.google.protobuf.UInt64Value|undefined} value
 * @return {!proto.model.Punishment} returns this
*/
proto.model.Punishment.prototype.setFromThreadId = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Punishment} returns this
 */
proto.model.Punishment.prototype.clearFromThreadId = function() {
  return this.setFromThreadId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Punishment.prototype.hasFromThreadId = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.UInt64Value from_post_id = 9;
 * @return {?proto.google.protobuf.UInt64Value}
 */
proto.model.Punishment.prototype.getFromPostId = function() {
  return /** @type{?proto.google.protobuf.UInt64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt64Value, 9));
};


/**
 * @param {?proto.google.protobuf.UInt64Value|undefined} value
 * @return {!proto.model.Punishment} returns this
*/
proto.model.Punishment.prototype.setFromPostId = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Punishment} returns this
 */
proto.model.Punishment.prototype.clearFromPostId = function() {
  return this.setFromPostId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Punishment.prototype.hasFromPostId = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Thread from_thread = 10;
 * @return {?proto.model.Thread}
 */
proto.model.Punishment.prototype.getFromThread = function() {
  return /** @type{?proto.model.Thread} */ (
    jspb.Message.getWrapperField(this, thread_pb.Thread, 10));
};


/**
 * @param {?proto.model.Thread|undefined} value
 * @return {!proto.model.Punishment} returns this
*/
proto.model.Punishment.prototype.setFromThread = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Punishment} returns this
 */
proto.model.Punishment.prototype.clearFromThread = function() {
  return this.setFromThread(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Punishment.prototype.hasFromThread = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Post from_post = 11;
 * @return {?proto.model.Post}
 */
proto.model.Punishment.prototype.getFromPost = function() {
  return /** @type{?proto.model.Post} */ (
    jspb.Message.getWrapperField(this, post_pb.Post, 11));
};


/**
 * @param {?proto.model.Post|undefined} value
 * @return {!proto.model.Punishment} returns this
*/
proto.model.Punishment.prototype.setFromPost = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Punishment} returns this
 */
proto.model.Punishment.prototype.clearFromPost = function() {
  return this.setFromPost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Punishment.prototype.hasFromPost = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool ban_user = 12;
 * @return {boolean}
 */
proto.model.Punishment.prototype.getBanUser = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.model.Punishment} returns this
 */
proto.model.Punishment.prototype.setBanUser = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional uint64 days = 13;
 * @return {number}
 */
proto.model.Punishment.prototype.getDays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.Punishment} returns this
 */
proto.model.Punishment.prototype.setDays = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional Category category = 14;
 * @return {?proto.model.Category}
 */
proto.model.Punishment.prototype.getCategory = function() {
  return /** @type{?proto.model.Category} */ (
    jspb.Message.getWrapperField(this, category_pb.Category, 14));
};


/**
 * @param {?proto.model.Category|undefined} value
 * @return {!proto.model.Punishment} returns this
*/
proto.model.Punishment.prototype.setCategory = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Punishment} returns this
 */
proto.model.Punishment.prototype.clearCategory = function() {
  return this.setCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Punishment.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional User user = 15;
 * @return {?proto.model.User}
 */
proto.model.Punishment.prototype.getUser = function() {
  return /** @type{?proto.model.User} */ (
    jspb.Message.getWrapperField(this, user_pb.User, 15));
};


/**
 * @param {?proto.model.User|undefined} value
 * @return {!proto.model.Punishment} returns this
*/
proto.model.Punishment.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Punishment} returns this
 */
proto.model.Punishment.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Punishment.prototype.hasUser = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional Identity identity = 16;
 * @return {?proto.model.Identity}
 */
proto.model.Punishment.prototype.getIdentity = function() {
  return /** @type{?proto.model.Identity} */ (
    jspb.Message.getWrapperField(this, identity_pb.Identity, 16));
};


/**
 * @param {?proto.model.Identity|undefined} value
 * @return {!proto.model.Punishment} returns this
*/
proto.model.Punishment.prototype.setIdentity = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Punishment} returns this
 */
proto.model.Punishment.prototype.clearIdentity = function() {
  return this.setIdentity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Punishment.prototype.hasIdentity = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional uint64 announcement_thread_id = 17;
 * @return {number}
 */
proto.model.Punishment.prototype.getAnnouncementThreadId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.Punishment} returns this
 */
proto.model.Punishment.prototype.setAnnouncementThreadId = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * @enum {number}
 */
proto.model.PunishType = {
  PUNISHTYPEMUTE: 0,
  PUNISHTYPENOCREATETHREAD: 1,
  PUNISHTYPEBANCATEGORY: 2
};

goog.object.extend(exports, proto.model);
