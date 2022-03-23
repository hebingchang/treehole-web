import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';


export class SiteConfig extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): SiteConfig;
  hasModel(): boolean;
  clearModel(): SiteConfig;

  getUserBgUrl(): string;
  setUserBgUrl(value: string): SiteConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SiteConfig): SiteConfig.AsObject;
  static serializeBinaryToWriter(message: SiteConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteConfig;
  static deserializeBinaryFromReader(message: SiteConfig, reader: jspb.BinaryReader): SiteConfig;
}

export namespace SiteConfig {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    userBgUrl: string,
  }
}

