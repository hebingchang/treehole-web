import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';
import * as user_pb from './user_pb';


export class UserThreadLastRead extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): UserThreadLastRead;
  hasModel(): boolean;
  clearModel(): UserThreadLastRead;

  getThreadId(): number;
  setThreadId(value: number): UserThreadLastRead;

  getUserId(): number;
  setUserId(value: number): UserThreadLastRead;

  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): UserThreadLastRead;
  hasUser(): boolean;
  clearUser(): UserThreadLastRead;

  getFloor(): number;
  setFloor(value: number): UserThreadLastRead;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserThreadLastRead.AsObject;
  static toObject(includeInstance: boolean, msg: UserThreadLastRead): UserThreadLastRead.AsObject;
  static serializeBinaryToWriter(message: UserThreadLastRead, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserThreadLastRead;
  static deserializeBinaryFromReader(message: UserThreadLastRead, reader: jspb.BinaryReader): UserThreadLastRead;
}

export namespace UserThreadLastRead {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    threadId: number,
    userId: number,
    user?: user_pb.User.AsObject,
    floor: number,
  }
}

