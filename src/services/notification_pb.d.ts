import * as jspb from 'google-protobuf'

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as model_pb from './model_pb';
import * as user_pb from './user_pb';


export class Notification extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): Notification;
  hasModel(): boolean;
  clearModel(): Notification;

  getUserId(): number;
  setUserId(value: number): Notification;

  getType(): NotificationType;
  setType(value: NotificationType): Notification;

  getSourceId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setSourceId(value?: google_protobuf_wrappers_pb.UInt64Value): Notification;
  hasSourceId(): boolean;
  clearSourceId(): Notification;

  getSource(): google_protobuf_any_pb.Any | undefined;
  setSource(value?: google_protobuf_any_pb.Any): Notification;
  hasSource(): boolean;
  clearSource(): Notification;

  getMessage(): string;
  setMessage(value: string): Notification;

  getCount(): number;
  setCount(value: number): Notification;

  getHasRead(): boolean;
  setHasRead(value: boolean): Notification;

  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): Notification;
  hasUser(): boolean;
  clearUser(): Notification;

  getTargetId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setTargetId(value?: google_protobuf_wrappers_pb.UInt64Value): Notification;
  hasTargetId(): boolean;
  clearTargetId(): Notification;

  getLastUpdateAt(): string;
  setLastUpdateAt(value: string): Notification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notification.AsObject;
  static toObject(includeInstance: boolean, msg: Notification): Notification.AsObject;
  static serializeBinaryToWriter(message: Notification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notification;
  static deserializeBinaryFromReader(message: Notification, reader: jspb.BinaryReader): Notification;
}

export namespace Notification {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    userId: number,
    type: NotificationType,
    sourceId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    source?: google_protobuf_any_pb.Any.AsObject,
    message: string,
    count: number,
    hasRead: boolean,
    user?: user_pb.User.AsObject,
    targetId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    lastUpdateAt: string,
  }
}

export enum NotificationType { 
  NOTIFICATIONTYPETHREADREPLIED = 0,
  NOTIFICATIONTYPEPOSTREPLIED = 1,
  NOTIFICATIONTYPESYSTEM = 2,
}
