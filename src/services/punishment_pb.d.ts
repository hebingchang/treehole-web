import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as thread_pb from './thread_pb';
import * as post_pb from './post_pb';
import * as category_pb from './category_pb';
import * as user_pb from './user_pb';
import * as identity_pb from './identity_pb';


export class Punishment extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): Punishment;
  hasModel(): boolean;
  clearModel(): Punishment;

  getEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndAt(value?: google_protobuf_timestamp_pb.Timestamp): Punishment;
  hasEndAt(): boolean;
  clearEndAt(): Punishment;

  getUserId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setUserId(value?: google_protobuf_wrappers_pb.UInt64Value): Punishment;
  hasUserId(): boolean;
  clearUserId(): Punishment;

  getIdentityId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setIdentityId(value?: google_protobuf_wrappers_pb.UInt64Value): Punishment;
  hasIdentityId(): boolean;
  clearIdentityId(): Punishment;

  getType(): PunishType;
  setType(value: PunishType): Punishment;

  getReason(): string;
  setReason(value: string): Punishment;

  getCategoryId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setCategoryId(value?: google_protobuf_wrappers_pb.UInt64Value): Punishment;
  hasCategoryId(): boolean;
  clearCategoryId(): Punishment;

  getFromThreadId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setFromThreadId(value?: google_protobuf_wrappers_pb.UInt64Value): Punishment;
  hasFromThreadId(): boolean;
  clearFromThreadId(): Punishment;

  getFromPostId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setFromPostId(value?: google_protobuf_wrappers_pb.UInt64Value): Punishment;
  hasFromPostId(): boolean;
  clearFromPostId(): Punishment;

  getFromThread(): thread_pb.Thread | undefined;
  setFromThread(value?: thread_pb.Thread): Punishment;
  hasFromThread(): boolean;
  clearFromThread(): Punishment;

  getFromPost(): post_pb.Post | undefined;
  setFromPost(value?: post_pb.Post): Punishment;
  hasFromPost(): boolean;
  clearFromPost(): Punishment;

  getBanUser(): boolean;
  setBanUser(value: boolean): Punishment;

  getDays(): number;
  setDays(value: number): Punishment;

  getCategory(): category_pb.Category | undefined;
  setCategory(value?: category_pb.Category): Punishment;
  hasCategory(): boolean;
  clearCategory(): Punishment;

  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): Punishment;
  hasUser(): boolean;
  clearUser(): Punishment;

  getIdentity(): identity_pb.Identity | undefined;
  setIdentity(value?: identity_pb.Identity): Punishment;
  hasIdentity(): boolean;
  clearIdentity(): Punishment;

  getAnnouncementThreadId(): number;
  setAnnouncementThreadId(value: number): Punishment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Punishment.AsObject;
  static toObject(includeInstance: boolean, msg: Punishment): Punishment.AsObject;
  static serializeBinaryToWriter(message: Punishment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Punishment;
  static deserializeBinaryFromReader(message: Punishment, reader: jspb.BinaryReader): Punishment;
}

export namespace Punishment {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    endAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    userId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    identityId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    type: PunishType,
    reason: string,
    categoryId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    fromThreadId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    fromPostId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    fromThread?: thread_pb.Thread.AsObject,
    fromPost?: post_pb.Post.AsObject,
    banUser: boolean,
    days: number,
    category?: category_pb.Category.AsObject,
    user?: user_pb.User.AsObject,
    identity?: identity_pb.Identity.AsObject,
    announcementThreadId: number,
  }
}

export enum PunishType { 
  PUNISHTYPEMUTE = 0,
  PUNISHTYPENOCREATETHREAD = 1,
  PUNISHTYPEBANCATEGORY = 2,
}
