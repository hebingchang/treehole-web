import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as model_pb from './model_pb';
import * as thread_pb from './thread_pb';
import * as post_pb from './post_pb';


export class SystemMessage extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): SystemMessage;
  hasModel(): boolean;
  clearModel(): SystemMessage;

  getTitle(): string;
  setTitle(value: string): SystemMessage;

  getBody(): string;
  setBody(value: string): SystemMessage;

  getCanRebuttal(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setCanRebuttal(value?: google_protobuf_wrappers_pb.BoolValue): SystemMessage;
  hasCanRebuttal(): boolean;
  clearCanRebuttal(): SystemMessage;

  getHasRebuttal(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHasRebuttal(value?: google_protobuf_wrappers_pb.BoolValue): SystemMessage;
  hasHasRebuttal(): boolean;
  clearHasRebuttal(): SystemMessage;

  getRebuttalRejected(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setRebuttalRejected(value?: google_protobuf_wrappers_pb.BoolValue): SystemMessage;
  hasRebuttalRejected(): boolean;
  clearRebuttalRejected(): SystemMessage;

  getFromThreadId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setFromThreadId(value?: google_protobuf_wrappers_pb.UInt64Value): SystemMessage;
  hasFromThreadId(): boolean;
  clearFromThreadId(): SystemMessage;

  getFromPostId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setFromPostId(value?: google_protobuf_wrappers_pb.UInt64Value): SystemMessage;
  hasFromPostId(): boolean;
  clearFromPostId(): SystemMessage;

  getFromThread(): thread_pb.Thread | undefined;
  setFromThread(value?: thread_pb.Thread): SystemMessage;
  hasFromThread(): boolean;
  clearFromThread(): SystemMessage;

  getFromPost(): post_pb.Post | undefined;
  setFromPost(value?: post_pb.Post): SystemMessage;
  hasFromPost(): boolean;
  clearFromPost(): SystemMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemMessage.AsObject;
  static toObject(includeInstance: boolean, msg: SystemMessage): SystemMessage.AsObject;
  static serializeBinaryToWriter(message: SystemMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemMessage;
  static deserializeBinaryFromReader(message: SystemMessage, reader: jspb.BinaryReader): SystemMessage;
}

export namespace SystemMessage {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    title: string,
    body: string,
    canRebuttal?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    hasRebuttal?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    rebuttalRejected?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    fromThreadId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    fromPostId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    fromThread?: thread_pb.Thread.AsObject,
    fromPost?: post_pb.Post.AsObject,
  }
}

