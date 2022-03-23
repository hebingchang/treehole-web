import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';
import * as identity_pb from './identity_pb';
import * as setting_pb from './setting_pb';
import * as user_fish_pb from './user_fish_pb';


export class User extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): User;
  hasModel(): boolean;
  clearModel(): User;

  getAccount(): string;
  setAccount(value: string): User;

  getIdentitiesList(): Array<identity_pb.Identity>;
  setIdentitiesList(value: Array<identity_pb.Identity>): User;
  clearIdentitiesList(): User;
  addIdentities(value?: identity_pb.Identity, index?: number): identity_pb.Identity;

  getStatus(): UserStatus;
  setStatus(value: UserStatus): User;

  getRole(): UserRole;
  setRole(value: UserRole): User;

  getSetting(): setting_pb.Setting | undefined;
  setSetting(value?: setting_pb.Setting): User;
  hasSetting(): boolean;
  clearSetting(): User;

  getFish(): user_fish_pb.UserFish | undefined;
  setFish(value?: user_fish_pb.UserFish): User;
  hasFish(): boolean;
  clearFish(): User;

  getStat(): UserStat | undefined;
  setStat(value?: UserStat): User;
  hasStat(): boolean;
  clearStat(): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    account: string,
    identitiesList: Array<identity_pb.Identity.AsObject>,
    status: UserStatus,
    role: UserRole,
    setting?: setting_pb.Setting.AsObject,
    fish?: user_fish_pb.UserFish.AsObject,
    stat?: UserStat.AsObject,
  }
}

export class UserStat extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): UserStat;

  getLikedCount(): number;
  setLikedCount(value: number): UserStat;

  getThreadCount(): number;
  setThreadCount(value: number): UserStat;

  getAppreciationCount(): number;
  setAppreciationCount(value: number): UserStat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserStat.AsObject;
  static toObject(includeInstance: boolean, msg: UserStat): UserStat.AsObject;
  static serializeBinaryToWriter(message: UserStat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserStat;
  static deserializeBinaryFromReader(message: UserStat, reader: jspb.BinaryReader): UserStat;
}

export namespace UserStat {
  export type AsObject = {
    userId: number,
    likedCount: number,
    threadCount: number,
    appreciationCount: number,
  }
}

export enum UserStatus { 
  USERSTATUSNORMAL = 0,
  USERSTATUSREADONLY = 1,
  USERSTATUSBANNED = 2,
}
export enum UserRole { 
  USERROLENORMAL = 0,
  USERROLEADMIN = 1,
  USERROLESUPERADMIN = 2,
}
