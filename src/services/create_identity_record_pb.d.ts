import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';
import * as user_pb from './user_pb';


export class CreateIdentityRecord extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): CreateIdentityRecord;
  hasModel(): boolean;
  clearModel(): CreateIdentityRecord;

  getUserId(): number;
  setUserId(value: number): CreateIdentityRecord;

  getYear(): number;
  setYear(value: number): CreateIdentityRecord;

  getMonth(): number;
  setMonth(value: number): CreateIdentityRecord;

  getCount(): number;
  setCount(value: number): CreateIdentityRecord;

  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): CreateIdentityRecord;
  hasUser(): boolean;
  clearUser(): CreateIdentityRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateIdentityRecord.AsObject;
  static toObject(includeInstance: boolean, msg: CreateIdentityRecord): CreateIdentityRecord.AsObject;
  static serializeBinaryToWriter(message: CreateIdentityRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateIdentityRecord;
  static deserializeBinaryFromReader(message: CreateIdentityRecord, reader: jspb.BinaryReader): CreateIdentityRecord;
}

export namespace CreateIdentityRecord {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    userId: number,
    year: number,
    month: number,
    count: number,
    user?: user_pb.User.AsObject,
  }
}

