import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';
import * as thread_pb from './thread_pb';
import * as user_pb from './user_pb';


export class UserThreadIdentity extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): UserThreadIdentity;
  hasModel(): boolean;
  clearModel(): UserThreadIdentity;

  getThreadId(): number;
  setThreadId(value: number): UserThreadIdentity;

  getUserId(): number;
  setUserId(value: number): UserThreadIdentity;

  getIndex(): number;
  setIndex(value: number): UserThreadIdentity;

  getThread(): thread_pb.Thread | undefined;
  setThread(value?: thread_pb.Thread): UserThreadIdentity;
  hasThread(): boolean;
  clearThread(): UserThreadIdentity;

  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): UserThreadIdentity;
  hasUser(): boolean;
  clearUser(): UserThreadIdentity;

  getAliceCode(): string;
  setAliceCode(value: string): UserThreadIdentity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserThreadIdentity.AsObject;
  static toObject(includeInstance: boolean, msg: UserThreadIdentity): UserThreadIdentity.AsObject;
  static serializeBinaryToWriter(message: UserThreadIdentity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserThreadIdentity;
  static deserializeBinaryFromReader(message: UserThreadIdentity, reader: jspb.BinaryReader): UserThreadIdentity;
}

export namespace UserThreadIdentity {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    threadId: number,
    userId: number,
    index: number,
    thread?: thread_pb.Thread.AsObject,
    user?: user_pb.User.AsObject,
    aliceCode: string,
  }
}

