import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';
import * as thread_pb from './thread_pb';
import * as user_pb from './user_pb';


export class ThreadAppreciation extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): ThreadAppreciation;
  hasModel(): boolean;
  clearModel(): ThreadAppreciation;

  getThreadId(): number;
  setThreadId(value: number): ThreadAppreciation;

  getUserId(): number;
  setUserId(value: number): ThreadAppreciation;

  getAmount(): number;
  setAmount(value: number): ThreadAppreciation;

  getThread(): thread_pb.Thread | undefined;
  setThread(value?: thread_pb.Thread): ThreadAppreciation;
  hasThread(): boolean;
  clearThread(): ThreadAppreciation;

  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): ThreadAppreciation;
  hasUser(): boolean;
  clearUser(): ThreadAppreciation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreadAppreciation.AsObject;
  static toObject(includeInstance: boolean, msg: ThreadAppreciation): ThreadAppreciation.AsObject;
  static serializeBinaryToWriter(message: ThreadAppreciation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreadAppreciation;
  static deserializeBinaryFromReader(message: ThreadAppreciation, reader: jspb.BinaryReader): ThreadAppreciation;
}

export namespace ThreadAppreciation {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    threadId: number,
    userId: number,
    amount: number,
    thread?: thread_pb.Thread.AsObject,
    user?: user_pb.User.AsObject,
  }
}

