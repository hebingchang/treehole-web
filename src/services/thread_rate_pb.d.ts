import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';
import * as rate_pb from './rate_pb';
import * as thread_pb from './thread_pb';
import * as user_pb from './user_pb';


export class ThreadRate extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): ThreadRate;
  hasModel(): boolean;
  clearModel(): ThreadRate;

  getThreadId(): number;
  setThreadId(value: number): ThreadRate;

  getUserId(): number;
  setUserId(value: number): ThreadRate;

  getType(): rate_pb.RateType;
  setType(value: rate_pb.RateType): ThreadRate;

  getThread(): thread_pb.Thread | undefined;
  setThread(value?: thread_pb.Thread): ThreadRate;
  hasThread(): boolean;
  clearThread(): ThreadRate;

  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): ThreadRate;
  hasUser(): boolean;
  clearUser(): ThreadRate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreadRate.AsObject;
  static toObject(includeInstance: boolean, msg: ThreadRate): ThreadRate.AsObject;
  static serializeBinaryToWriter(message: ThreadRate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreadRate;
  static deserializeBinaryFromReader(message: ThreadRate, reader: jspb.BinaryReader): ThreadRate;
}

export namespace ThreadRate {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    threadId: number,
    userId: number,
    type: rate_pb.RateType,
    thread?: thread_pb.Thread.AsObject,
    user?: user_pb.User.AsObject,
  }
}

