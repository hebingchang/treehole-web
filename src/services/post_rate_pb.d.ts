import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';
import * as rate_pb from './rate_pb';


export class PostRate extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): PostRate;
  hasModel(): boolean;
  clearModel(): PostRate;

  getPostId(): number;
  setPostId(value: number): PostRate;

  getUserId(): number;
  setUserId(value: number): PostRate;

  getType(): rate_pb.RateType;
  setType(value: rate_pb.RateType): PostRate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostRate.AsObject;
  static toObject(includeInstance: boolean, msg: PostRate): PostRate.AsObject;
  static serializeBinaryToWriter(message: PostRate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostRate;
  static deserializeBinaryFromReader(message: PostRate, reader: jspb.BinaryReader): PostRate;
}

export namespace PostRate {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    postId: number,
    userId: number,
    type: rate_pb.RateType,
  }
}

