// source: report.proto
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
goog.exportSymbol('proto.model.Report', null, global);
goog.exportSymbol('proto.model.ReportTarget', null, global);
goog.exportSymbol('proto.model.ReportType', null, global);
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
proto.model.Report = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.Report, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.Report.displayName = 'proto.model.Report';
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
proto.model.Report.prototype.toObject = function(opt_includeInstance) {
  return proto.model.Report.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.Report} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.Report.toObject = function(includeInstance, msg) {
  var f, obj = {
    model: (f = msg.getModel()) && model_pb.Model.toObject(includeInstance, f),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    target: jspb.Message.getFieldWithDefault(msg, 3, 0),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    targetId: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.model.Report}
 */
proto.model.Report.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.Report;
  return proto.model.Report.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.Report} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.Report}
 */
proto.model.Report.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.model.ReportTarget} */ (reader.readEnum());
      msg.setTarget(value);
      break;
    case 4:
      var value = /** @type {!proto.model.ReportType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTargetId(value);
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
proto.model.Report.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.Report.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.Report} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.Report.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getTarget();
  if (f !== 0.0) {
    writer.writeEnum(
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
  f = message.getTargetId();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional Model model = 1;
 * @return {?proto.model.Model}
 */
proto.model.Report.prototype.getModel = function() {
  return /** @type{?proto.model.Model} */ (
    jspb.Message.getWrapperField(this, model_pb.Model, 1));
};


/**
 * @param {?proto.model.Model|undefined} value
 * @return {!proto.model.Report} returns this
*/
proto.model.Report.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.Report} returns this
 */
proto.model.Report.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.Report.prototype.hasModel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 user_id = 2;
 * @return {number}
 */
proto.model.Report.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.Report} returns this
 */
proto.model.Report.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional ReportTarget target = 3;
 * @return {!proto.model.ReportTarget}
 */
proto.model.Report.prototype.getTarget = function() {
  return /** @type {!proto.model.ReportTarget} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.model.ReportTarget} value
 * @return {!proto.model.Report} returns this
 */
proto.model.Report.prototype.setTarget = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional ReportType type = 4;
 * @return {!proto.model.ReportType}
 */
proto.model.Report.prototype.getType = function() {
  return /** @type {!proto.model.ReportType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.model.ReportType} value
 * @return {!proto.model.Report} returns this
 */
proto.model.Report.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional uint64 target_id = 5;
 * @return {number}
 */
proto.model.Report.prototype.getTargetId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.Report} returns this
 */
proto.model.Report.prototype.setTargetId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * @enum {number}
 */
proto.model.ReportTarget = {
  REPORTTARGETTHREAD: 0,
  REPORTTARGETPOST: 1
};

/**
 * @enum {number}
 */
proto.model.ReportType = {
  REPORTTYPENORMAL: 0,
  REPORTTYPEPOLITICS: 1,
  REPORTTYPEPORN: 2,
  REPORTTYPECONTACT: 3,
  REPORTTYPEABUSE: 4,
  REPORTTYPEKY: 5
};

goog.object.extend(exports, proto.model);
