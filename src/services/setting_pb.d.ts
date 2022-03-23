import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class Setting extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): Setting;
  hasModel(): boolean;
  clearModel(): Setting;

  getUserId(): number;
  setUserId(value: number): Setting;

  getFilteredWords(): string;
  setFilteredWords(value: string): Setting;

  getFilteredTagIds(): string;
  setFilteredTagIds(value: string): Setting;

  getInactiveRead(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setInactiveRead(value?: google_protobuf_wrappers_pb.BoolValue): Setting;
  hasInactiveRead(): boolean;
  clearInactiveRead(): Setting;

  getHideBadPosts(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHideBadPosts(value?: google_protobuf_wrappers_pb.BoolValue): Setting;
  hasHideBadPosts(): boolean;
  clearHideBadPosts(): Setting;

  getHideBadThreads(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHideBadThreads(value?: google_protobuf_wrappers_pb.BoolValue): Setting;
  hasHideBadThreads(): boolean;
  clearHideBadThreads(): Setting;

  getEnablePushNotifications(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setEnablePushNotifications(value?: google_protobuf_wrappers_pb.BoolValue): Setting;
  hasEnablePushNotifications(): boolean;
  clearEnablePushNotifications(): Setting;

  getEnableUtilities(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setEnableUtilities(value?: google_protobuf_wrappers_pb.BoolValue): Setting;
  hasEnableUtilities(): boolean;
  clearEnableUtilities(): Setting;

  getFilteredCategoryIds(): string;
  setFilteredCategoryIds(value: string): Setting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Setting.AsObject;
  static toObject(includeInstance: boolean, msg: Setting): Setting.AsObject;
  static serializeBinaryToWriter(message: Setting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Setting;
  static deserializeBinaryFromReader(message: Setting, reader: jspb.BinaryReader): Setting;
}

export namespace Setting {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    userId: number,
    filteredWords: string,
    filteredTagIds: string,
    inactiveRead?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    hideBadPosts?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    hideBadThreads?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    enablePushNotifications?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    enableUtilities?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    filteredCategoryIds: string,
  }
}

