import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';


export class Identity extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): Identity;
  hasModel(): boolean;
  clearModel(): Identity;

  getUserId(): number;
  setUserId(value: number): Identity;

  getCode(): string;
  setCode(value: string): Identity;

  getStatus(): IdentityStatus;
  setStatus(value: IdentityStatus): Identity;

  getType(): IdentityType;
  setType(value: IdentityType): Identity;

  getIsActive(): boolean;
  setIsActive(value: boolean): Identity;

  getRemark(): string;
  setRemark(value: string): Identity;

  getIsSpecial(): boolean;
  setIsSpecial(value: boolean): Identity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Identity.AsObject;
  static toObject(includeInstance: boolean, msg: Identity): Identity.AsObject;
  static serializeBinaryToWriter(message: Identity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Identity;
  static deserializeBinaryFromReader(message: Identity, reader: jspb.BinaryReader): Identity;
}

export namespace Identity {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    userId: number,
    code: string,
    status: IdentityStatus,
    type: IdentityType,
    isActive: boolean,
    remark: string,
    isSpecial: boolean,
  }
}

export enum IdentityStatus { 
  IDENTITYSTATUSNORMAL = 0,
  IDENTITYSTATUSDELETED = 1,
  IDENTITYSTATUSBANNED = 2,
}
export enum IdentityType { 
  IDENTITYTYPENORMAL = 0,
  IDENTITYTYPEADMIN = 1,
}
