import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';
import * as user_pb from './user_pb';


export class UserFishHistory extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): UserFishHistory;
  hasModel(): boolean;
  clearModel(): UserFishHistory;

  getUserId(): number;
  setUserId(value: number): UserFishHistory;

  getDelta(): number;
  setDelta(value: number): UserFishHistory;

  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): UserFishHistory;
  hasUser(): boolean;
  clearUser(): UserFishHistory;

  getMessage(): string;
  setMessage(value: string): UserFishHistory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFishHistory.AsObject;
  static toObject(includeInstance: boolean, msg: UserFishHistory): UserFishHistory.AsObject;
  static serializeBinaryToWriter(message: UserFishHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFishHistory;
  static deserializeBinaryFromReader(message: UserFishHistory, reader: jspb.BinaryReader): UserFishHistory;
}

export namespace UserFishHistory {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    userId: number,
    delta: number,
    user?: user_pb.User.AsObject,
    message: string,
  }
}

