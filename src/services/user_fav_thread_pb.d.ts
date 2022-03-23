import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';
import * as thread_pb from './thread_pb';
import * as user_pb from './user_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class UserFavThread extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): UserFavThread;
  hasModel(): boolean;
  clearModel(): UserFavThread;

  getThreadId(): number;
  setThreadId(value: number): UserFavThread;

  getUserId(): number;
  setUserId(value: number): UserFavThread;

  getThread(): thread_pb.Thread | undefined;
  setThread(value?: thread_pb.Thread): UserFavThread;
  hasThread(): boolean;
  clearThread(): UserFavThread;

  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): UserFavThread;
  hasUser(): boolean;
  clearUser(): UserFavThread;

  getIsFav(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsFav(value?: google_protobuf_wrappers_pb.BoolValue): UserFavThread;
  hasIsFav(): boolean;
  clearIsFav(): UserFavThread;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFavThread.AsObject;
  static toObject(includeInstance: boolean, msg: UserFavThread): UserFavThread.AsObject;
  static serializeBinaryToWriter(message: UserFavThread, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFavThread;
  static deserializeBinaryFromReader(message: UserFavThread, reader: jspb.BinaryReader): UserFavThread;
}

export namespace UserFavThread {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    threadId: number,
    userId: number,
    thread?: thread_pb.Thread.AsObject,
    user?: user_pb.User.AsObject,
    isFav?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

