import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';
import * as user_pb from './user_pb';


export class UserDevice extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): UserDevice;
  hasModel(): boolean;
  clearModel(): UserDevice;

  getUserId(): number;
  setUserId(value: number): UserDevice;

  getDeviceToken(): string;
  setDeviceToken(value: string): UserDevice;

  getDeviceType(): DeviceType;
  setDeviceType(value: DeviceType): UserDevice;

  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): UserDevice;
  hasUser(): boolean;
  clearUser(): UserDevice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDevice.AsObject;
  static toObject(includeInstance: boolean, msg: UserDevice): UserDevice.AsObject;
  static serializeBinaryToWriter(message: UserDevice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDevice;
  static deserializeBinaryFromReader(message: UserDevice, reader: jspb.BinaryReader): UserDevice;
}

export namespace UserDevice {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    userId: number,
    deviceToken: string,
    deviceType: DeviceType,
    user?: user_pb.User.AsObject,
  }
}

export enum DeviceType { 
  DEVICETYPEIOS = 0,
  DEVICETYPEANDROID = 1,
  DEVICETYPEWEB = 2,
}
