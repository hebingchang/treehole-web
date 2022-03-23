import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as model_pb from './model_pb';
import * as identity_pb from './identity_pb';
import * as thread_pb from './thread_pb';
import * as user_thread_identity_pb from './user_thread_identity_pb';


export class Post extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): Post;
  hasModel(): boolean;
  clearModel(): Post;

  getThreadId(): number;
  setThreadId(value: number): Post;

  getFloor(): number;
  setFloor(value: number): Post;

  getIdentityCode(): string;
  setIdentityCode(value: string): Post;

  getContent(): string;
  setContent(value: string): Post;

  getLikeCount(): number;
  setLikeCount(value: number): Post;

  getHateCount(): number;
  setHateCount(value: number): Post;

  getStatus(): PostStatus;
  setStatus(value: PostStatus): Post;

  getReplyToPostId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setReplyToPostId(value?: google_protobuf_wrappers_pb.UInt64Value): Post;
  hasReplyToPostId(): boolean;
  clearReplyToPostId(): Post;

  getReplyToIdentityCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setReplyToIdentityCode(value?: google_protobuf_wrappers_pb.StringValue): Post;
  hasReplyToIdentityCode(): boolean;
  clearReplyToIdentityCode(): Post;

  getReplyToFloor(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setReplyToFloor(value?: google_protobuf_wrappers_pb.UInt64Value): Post;
  hasReplyToFloor(): boolean;
  clearReplyToFloor(): Post;

  getIsLike(): boolean;
  setIsLike(value: boolean): Post;

  getIsHate(): boolean;
  setIsHate(value: boolean): Post;

  getIdentity(): identity_pb.Identity | undefined;
  setIdentity(value?: identity_pb.Identity): Post;
  hasIdentity(): boolean;
  clearIdentity(): Post;

  getReplyToPost(): Post | undefined;
  setReplyToPost(value?: Post): Post;
  hasReplyToPost(): boolean;
  clearReplyToPost(): Post;

  getThread(): thread_pb.Thread | undefined;
  setThread(value?: thread_pb.Thread): Post;
  hasThread(): boolean;
  clearThread(): Post;

  getHideIdentity(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHideIdentity(value?: google_protobuf_wrappers_pb.BoolValue): Post;
  hasHideIdentity(): boolean;
  clearHideIdentity(): Post;

  getUserThreadIdentityId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setUserThreadIdentityId(value?: google_protobuf_wrappers_pb.UInt64Value): Post;
  hasUserThreadIdentityId(): boolean;
  clearUserThreadIdentityId(): Post;

  getUserThreadIdentity(): user_thread_identity_pb.UserThreadIdentity | undefined;
  setUserThreadIdentity(value?: user_thread_identity_pb.UserThreadIdentity): Post;
  hasUserThreadIdentity(): boolean;
  clearUserThreadIdentity(): Post;

  getAppreciationCount(): number;
  setAppreciationCount(value: number): Post;

  getIsAppreciated(): boolean;
  setIsAppreciated(value: boolean): Post;

  getCanDelete(): boolean;
  setCanDelete(value: boolean): Post;

  getRemark(): string;
  setRemark(value: string): Post;

  getHideReason(): string;
  setHideReason(value: string): Post;

  getPreview(): string;
  setPreview(value: string): Post;

  getDisableHate(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setDisableHate(value?: google_protobuf_wrappers_pb.BoolValue): Post;
  hasDisableHate(): boolean;
  clearDisableHate(): Post;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Post.AsObject;
  static toObject(includeInstance: boolean, msg: Post): Post.AsObject;
  static serializeBinaryToWriter(message: Post, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Post;
  static deserializeBinaryFromReader(message: Post, reader: jspb.BinaryReader): Post;
}

export namespace Post {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    threadId: number,
    floor: number,
    identityCode: string,
    content: string,
    likeCount: number,
    hateCount: number,
    status: PostStatus,
    replyToPostId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    replyToIdentityCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    replyToFloor?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    isLike: boolean,
    isHate: boolean,
    identity?: identity_pb.Identity.AsObject,
    replyToPost?: Post.AsObject,
    thread?: thread_pb.Thread.AsObject,
    hideIdentity?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    userThreadIdentityId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    userThreadIdentity?: user_thread_identity_pb.UserThreadIdentity.AsObject,
    appreciationCount: number,
    isAppreciated: boolean,
    canDelete: boolean,
    remark: string,
    hideReason: string,
    preview: string,
    disableHate?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export enum PostStatus { 
  POSTSTATUSNORMAL = 0,
  POSTSTATUSCOLLAPSED = 1,
  POSTSTATUSKILLED = 2,
  POSTSTATUSHIDE = 3,
}
