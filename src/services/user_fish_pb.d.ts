import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';


export class UserFish extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): UserFish;
  hasModel(): boolean;
  clearModel(): UserFish;

  getUserId(): number;
  setUserId(value: number): UserFish;

  getFishCount(): number;
  setFishCount(value: number): UserFish;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFish.AsObject;
  static toObject(includeInstance: boolean, msg: UserFish): UserFish.AsObject;
  static serializeBinaryToWriter(message: UserFish, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFish;
  static deserializeBinaryFromReader(message: UserFish, reader: jspb.BinaryReader): UserFish;
}

export namespace UserFish {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    userId: number,
    fishCount: number,
  }
}

