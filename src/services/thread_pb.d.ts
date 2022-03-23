import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';
import * as category_pb from './category_pb';
import * as tag_pb from './tag_pb';
import * as identity_pb from './identity_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class Thread extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): Thread;
  hasModel(): boolean;
  clearModel(): Thread;

  getTitle(): string;
  setTitle(value: string): Thread;

  getCategoryId(): number;
  setCategoryId(value: number): Thread;

  getCategory(): category_pb.Category | undefined;
  setCategory(value?: category_pb.Category): Thread;
  hasCategory(): boolean;
  clearCategory(): Thread;

  getTagsList(): Array<tag_pb.Tag>;
  setTagsList(value: Array<tag_pb.Tag>): Thread;
  clearTagsList(): Thread;
  addTags(value?: tag_pb.Tag, index?: number): tag_pb.Tag;

  getIdentityCode(): string;
  setIdentityCode(value: string): Thread;

  getContent(): string;
  setContent(value: string): Thread;

  getViewCount(): number;
  setViewCount(value: number): Thread;

  getLikeCount(): number;
  setLikeCount(value: number): Thread;

  getHateCount(): number;
  setHateCount(value: number): Thread;

  getReplyCount(): number;
  setReplyCount(value: number): Thread;

  getIsTop(): boolean;
  setIsTop(value: boolean): Thread;

  getIsFav(): boolean;
  setIsFav(value: boolean): Thread;

  getIsLike(): boolean;
  setIsLike(value: boolean): Thread;

  getIsHate(): boolean;
  setIsHate(value: boolean): Thread;

  getStatus(): ThreadStatus;
  setStatus(value: ThreadStatus): Thread;

  getLastReplyAt(): string;
  setLastReplyAt(value: string): Thread;

  getIdentity(): identity_pb.Identity | undefined;
  setIdentity(value?: identity_pb.Identity): Thread;
  hasIdentity(): boolean;
  clearIdentity(): Thread;

  getIsSage(): boolean;
  setIsSage(value: boolean): Thread;

  getIsReadOnly(): boolean;
  setIsReadOnly(value: boolean): Thread;

  getHideInTimeline(): boolean;
  setHideInTimeline(value: boolean): Thread;

  getIsAlice(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsAlice(value?: google_protobuf_wrappers_pb.BoolValue): Thread;
  hasIsAlice(): boolean;
  clearIsAlice(): Thread;

  getLastRead(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setLastRead(value?: google_protobuf_wrappers_pb.UInt64Value): Thread;
  hasLastRead(): boolean;
  clearLastRead(): Thread;

  getHasRead(): boolean;
  setHasRead(value: boolean): Thread;

  getAppreciationCount(): number;
  setAppreciationCount(value: number): Thread;

  getIsAppreciated(): boolean;
  setIsAppreciated(value: boolean): Thread;

  getCanDelete(): boolean;
  setCanDelete(value: boolean): Thread;

  getHasPopular(): boolean;
  setHasPopular(value: boolean): Thread;

  getRemark(): string;
  setRemark(value: string): Thread;

  getPreview(): string;
  setPreview(value: string): Thread;

  getDisableHate(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setDisableHate(value?: google_protobuf_wrappers_pb.BoolValue): Thread;
  hasDisableHate(): boolean;
  clearDisableHate(): Thread;

  getHideReason(): string;
  setHideReason(value: string): Thread;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Thread.AsObject;
  static toObject(includeInstance: boolean, msg: Thread): Thread.AsObject;
  static serializeBinaryToWriter(message: Thread, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Thread;
  static deserializeBinaryFromReader(message: Thread, reader: jspb.BinaryReader): Thread;
}

export namespace Thread {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    title: string,
    categoryId: number,
    category?: category_pb.Category.AsObject,
    tagsList: Array<tag_pb.Tag.AsObject>,
    identityCode: string,
    content: string,
    viewCount: number,
    likeCount: number,
    hateCount: number,
    replyCount: number,
    isTop: boolean,
    isFav: boolean,
    isLike: boolean,
    isHate: boolean,
    status: ThreadStatus,
    lastReplyAt: string,
    identity?: identity_pb.Identity.AsObject,
    isSage: boolean,
    isReadOnly: boolean,
    hideInTimeline: boolean,
    isAlice?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    lastRead?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    hasRead: boolean,
    appreciationCount: number,
    isAppreciated: boolean,
    canDelete: boolean,
    hasPopular: boolean,
    remark: string,
    preview: string,
    disableHate?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    hideReason: string,
  }
}

export enum ThreadStatus { 
  THREADSTATUSNORMAL = 0,
  THREADSTATUSHIDE = 1,
  THREADSTATUSCOLLAPSED = 2,
}
