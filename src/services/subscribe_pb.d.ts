import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as model_pb from './model_pb';
import * as user_pb from './user_pb';
import * as thread_pb from './thread_pb';


export class Subscribe extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): Subscribe;
  hasModel(): boolean;
  clearModel(): Subscribe;

  getUserId(): number;
  setUserId(value: number): Subscribe;

  getSubscribeMention(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setSubscribeMention(value?: google_protobuf_wrappers_pb.BoolValue): Subscribe;
  hasSubscribeMention(): boolean;
  clearSubscribeMention(): Subscribe;

  getSubscribePost(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setSubscribePost(value?: google_protobuf_wrappers_pb.BoolValue): Subscribe;
  hasSubscribePost(): boolean;
  clearSubscribePost(): Subscribe;

  getThreadId(): number;
  setThreadId(value: number): Subscribe;

  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): Subscribe;
  hasUser(): boolean;
  clearUser(): Subscribe;

  getThread(): thread_pb.Thread | undefined;
  setThread(value?: thread_pb.Thread): Subscribe;
  hasThread(): boolean;
  clearThread(): Subscribe;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subscribe.AsObject;
  static toObject(includeInstance: boolean, msg: Subscribe): Subscribe.AsObject;
  static serializeBinaryToWriter(message: Subscribe, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subscribe;
  static deserializeBinaryFromReader(message: Subscribe, reader: jspb.BinaryReader): Subscribe;
}

export namespace Subscribe {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    userId: number,
    subscribeMention?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    subscribePost?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    threadId: number,
    user?: user_pb.User.AsObject,
    thread?: thread_pb.Thread.AsObject,
  }
}

