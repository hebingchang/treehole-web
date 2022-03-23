import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class Category extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): Category;
  hasModel(): boolean;
  clearModel(): Category;

  getName(): string;
  setName(value: string): Category;

  getRank(): number;
  setRank(value: number): Category;

  getOpenTime(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setOpenTime(value?: google_protobuf_wrappers_pb.Int32Value): Category;
  hasOpenTime(): boolean;
  clearOpenTime(): Category;

  getCloseTime(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setCloseTime(value?: google_protobuf_wrappers_pb.Int32Value): Category;
  hasCloseTime(): boolean;
  clearCloseTime(): Category;

  getIsAlice(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsAlice(value?: google_protobuf_wrappers_pb.BoolValue): Category;
  hasIsAlice(): boolean;
  clearIsAlice(): Category;

  getHideInTimeline(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHideInTimeline(value?: google_protobuf_wrappers_pb.BoolValue): Category;
  hasHideInTimeline(): boolean;
  clearHideInTimeline(): Category;

  getDisableHate(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setDisableHate(value?: google_protobuf_wrappers_pb.BoolValue): Category;
  hasDisableHate(): boolean;
  clearDisableHate(): Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Category.AsObject;
  static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
  static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Category;
  static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    name: string,
    rank: number,
    openTime?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    closeTime?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    isAlice?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    hideInTimeline?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    disableHate?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

