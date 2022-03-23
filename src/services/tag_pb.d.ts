import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class Tag extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): Tag;
  hasModel(): boolean;
  clearModel(): Tag;

  getName(): string;
  setName(value: string): Tag;

  getColor(): number;
  setColor(value: number): Tag;

  getHide(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHide(value?: google_protobuf_wrappers_pb.BoolValue): Tag;
  hasHide(): boolean;
  clearHide(): Tag;

  getBrowsable(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setBrowsable(value?: google_protobuf_wrappers_pb.BoolValue): Tag;
  hasBrowsable(): boolean;
  clearBrowsable(): Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tag.AsObject;
  static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
  static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tag;
  static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
}

export namespace Tag {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    name: string,
    color: number,
    hide?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    browsable?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

