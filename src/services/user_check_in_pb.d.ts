import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';
import * as user_pb from './user_pb';


export class UserCheckIn extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): UserCheckIn;
  hasModel(): boolean;
  clearModel(): UserCheckIn;

  getUserId(): number;
  setUserId(value: number): UserCheckIn;

  getDate(): string;
  setDate(value: string): UserCheckIn;

  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): UserCheckIn;
  hasUser(): boolean;
  clearUser(): UserCheckIn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserCheckIn.AsObject;
  static toObject(includeInstance: boolean, msg: UserCheckIn): UserCheckIn.AsObject;
  static serializeBinaryToWriter(message: UserCheckIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserCheckIn;
  static deserializeBinaryFromReader(message: UserCheckIn, reader: jspb.BinaryReader): UserCheckIn;
}

export namespace UserCheckIn {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    userId: number,
    date: string,
    user?: user_pb.User.AsObject,
  }
}

