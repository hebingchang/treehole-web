import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';
import * as user_pb from './user_pb';


export class UploadFile extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): UploadFile;
  hasModel(): boolean;
  clearModel(): UploadFile;

  getUserId(): number;
  setUserId(value: number): UploadFile;

  getThreadId(): number;
  setThreadId(value: number): UploadFile;

  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): UploadFile;
  hasUser(): boolean;
  clearUser(): UploadFile;

  getFileName(): string;
  setFileName(value: string): UploadFile;

  getSize(): number;
  setSize(value: number): UploadFile;

  getUuid(): string;
  setUuid(value: string): UploadFile;

  getContentType(): string;
  setContentType(value: string): UploadFile;

  getWidth(): number;
  setWidth(value: number): UploadFile;

  getHeight(): number;
  setHeight(value: number): UploadFile;

  getAudited(): boolean;
  setAudited(value: boolean): UploadFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadFile.AsObject;
  static toObject(includeInstance: boolean, msg: UploadFile): UploadFile.AsObject;
  static serializeBinaryToWriter(message: UploadFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadFile;
  static deserializeBinaryFromReader(message: UploadFile, reader: jspb.BinaryReader): UploadFile;
}

export namespace UploadFile {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    userId: number,
    threadId: number,
    user?: user_pb.User.AsObject,
    fileName: string,
    size: number,
    uuid: string,
    contentType: string,
    width: number,
    height: number,
    audited: boolean,
  }
}

