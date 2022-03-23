import * as jspb from 'google-protobuf'

import * as auth_pb from './auth_pb';
import * as user_pb from './user_pb';
import * as category_pb from './category_pb';
import * as tag_pb from './tag_pb';
import * as thread_pb from './thread_pb';
import * as post_pb from './post_pb';
import * as rate_pb from './rate_pb';
import * as identity_pb from './identity_pb';
import * as setting_pb from './setting_pb';
import * as report_pb from './report_pb';
import * as notification_pb from './notification_pb';
import * as subscribe_pb from './subscribe_pb';
import * as user_device_pb from './user_device_pb';
import * as site_config_pb from './site_config_pb';
import * as punishment_pb from './punishment_pb';


export class OAuthConfigRequest extends jspb.Message {
  getChannel(): auth_pb.OAuthLoginChannel;
  setChannel(value: auth_pb.OAuthLoginChannel): OAuthConfigRequest;

  getSource(): auth_pb.LoginSource;
  setSource(value: auth_pb.LoginSource): OAuthConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthConfigRequest): OAuthConfigRequest.AsObject;
  static serializeBinaryToWriter(message: OAuthConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthConfigRequest;
  static deserializeBinaryFromReader(message: OAuthConfigRequest, reader: jspb.BinaryReader): OAuthConfigRequest;
}

export namespace OAuthConfigRequest {
  export type AsObject = {
    channel: auth_pb.OAuthLoginChannel,
    source: auth_pb.LoginSource,
  }
}

export class OAuthConfigResponse extends jspb.Message {
  getAuthorizeUrl(): string;
  setAuthorizeUrl(value: string): OAuthConfigResponse;

  getClientId(): string;
  setClientId(value: string): OAuthConfigResponse;

  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): OAuthConfigResponse;
  clearScopesList(): OAuthConfigResponse;
  addScopes(value: string, index?: number): OAuthConfigResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthConfigResponse): OAuthConfigResponse.AsObject;
  static serializeBinaryToWriter(message: OAuthConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthConfigResponse;
  static deserializeBinaryFromReader(message: OAuthConfigResponse, reader: jspb.BinaryReader): OAuthConfigResponse;
}

export namespace OAuthConfigResponse {
  export type AsObject = {
    authorizeUrl: string,
    clientId: string,
    scopesList: Array<string>,
  }
}

export class OAuthLoginRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): OAuthLoginRequest;

  getChannel(): auth_pb.OAuthLoginChannel;
  setChannel(value: auth_pb.OAuthLoginChannel): OAuthLoginRequest;

  getSource(): auth_pb.LoginSource;
  setSource(value: auth_pb.LoginSource): OAuthLoginRequest;

  getWebSource(): auth_pb.WebSource;
  setWebSource(value: auth_pb.WebSource): OAuthLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthLoginRequest): OAuthLoginRequest.AsObject;
  static serializeBinaryToWriter(message: OAuthLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthLoginRequest;
  static deserializeBinaryFromReader(message: OAuthLoginRequest, reader: jspb.BinaryReader): OAuthLoginRequest;
}

export namespace OAuthLoginRequest {
  export type AsObject = {
    code: string,
    channel: auth_pb.OAuthLoginChannel,
    source: auth_pb.LoginSource,
    webSource: auth_pb.WebSource,
  }
}

export class OAuthLoginResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): OAuthLoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthLoginResponse): OAuthLoginResponse.AsObject;
  static serializeBinaryToWriter(message: OAuthLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthLoginResponse;
  static deserializeBinaryFromReader(message: OAuthLoginResponse, reader: jspb.BinaryReader): OAuthLoginResponse;
}

export namespace OAuthLoginResponse {
  export type AsObject = {
    token: string,
  }
}

export class EmptyRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyRequest): EmptyRequest.AsObject;
  static serializeBinaryToWriter(message: EmptyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyRequest;
  static deserializeBinaryFromReader(message: EmptyRequest, reader: jspb.BinaryReader): EmptyRequest;
}

export namespace EmptyRequest {
  export type AsObject = {
  }
}

export class CategoriesResponse extends jspb.Message {
  getCategoriesList(): Array<category_pb.Category>;
  setCategoriesList(value: Array<category_pb.Category>): CategoriesResponse;
  clearCategoriesList(): CategoriesResponse;
  addCategories(value?: category_pb.Category, index?: number): category_pb.Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CategoriesResponse): CategoriesResponse.AsObject;
  static serializeBinaryToWriter(message: CategoriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoriesResponse;
  static deserializeBinaryFromReader(message: CategoriesResponse, reader: jspb.BinaryReader): CategoriesResponse;
}

export namespace CategoriesResponse {
  export type AsObject = {
    categoriesList: Array<category_pb.Category.AsObject>,
  }
}

export class TagsRequest extends jspb.Message {
  getAll(): boolean;
  setAll(value: boolean): TagsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TagsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TagsRequest): TagsRequest.AsObject;
  static serializeBinaryToWriter(message: TagsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TagsRequest;
  static deserializeBinaryFromReader(message: TagsRequest, reader: jspb.BinaryReader): TagsRequest;
}

export namespace TagsRequest {
  export type AsObject = {
    all: boolean,
  }
}

export class TagsResponse extends jspb.Message {
  getTagsList(): Array<tag_pb.Tag>;
  setTagsList(value: Array<tag_pb.Tag>): TagsResponse;
  clearTagsList(): TagsResponse;
  addTags(value?: tag_pb.Tag, index?: number): tag_pb.Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TagsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TagsResponse): TagsResponse.AsObject;
  static serializeBinaryToWriter(message: TagsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TagsResponse;
  static deserializeBinaryFromReader(message: TagsResponse, reader: jspb.BinaryReader): TagsResponse;
}

export namespace TagsResponse {
  export type AsObject = {
    tagsList: Array<tag_pb.Tag.AsObject>,
  }
}

export class ThreadsQueryRequest extends jspb.Message {
  getLast(): string;
  setLast(value: string): ThreadsQueryRequest;

  getSize(): number;
  setSize(value: number): ThreadsQueryRequest;

  getSort(): Sort;
  setSort(value: Sort): ThreadsQueryRequest;

  getCategoryId(): number;
  setCategoryId(value: number): ThreadsQueryRequest;

  getTagIdsList(): Array<number>;
  setTagIdsList(value: Array<number>): ThreadsQueryRequest;
  clearTagIdsList(): ThreadsQueryRequest;
  addTagIds(value: number, index?: number): ThreadsQueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreadsQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ThreadsQueryRequest): ThreadsQueryRequest.AsObject;
  static serializeBinaryToWriter(message: ThreadsQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreadsQueryRequest;
  static deserializeBinaryFromReader(message: ThreadsQueryRequest, reader: jspb.BinaryReader): ThreadsQueryRequest;
}

export namespace ThreadsQueryRequest {
  export type AsObject = {
    last: string,
    size: number,
    sort: Sort,
    categoryId: number,
    tagIdsList: Array<number>,
  }
}

export class PostsQueryRequest extends jspb.Message {
  getThreadId(): number;
  setThreadId(value: number): PostsQueryRequest;

  getLast(): number;
  setLast(value: number): PostsQueryRequest;

  getTop(): number;
  setTop(value: number): PostsQueryRequest;

  getSize(): number;
  setSize(value: number): PostsQueryRequest;

  getSort(): Sort;
  setSort(value: Sort): PostsQueryRequest;

  getOnlyAuthor(): boolean;
  setOnlyAuthor(value: boolean): PostsQueryRequest;

  getShouldStatistic(): boolean;
  setShouldStatistic(value: boolean): PostsQueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostsQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostsQueryRequest): PostsQueryRequest.AsObject;
  static serializeBinaryToWriter(message: PostsQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostsQueryRequest;
  static deserializeBinaryFromReader(message: PostsQueryRequest, reader: jspb.BinaryReader): PostsQueryRequest;
}

export namespace PostsQueryRequest {
  export type AsObject = {
    threadId: number,
    last: number,
    top: number,
    size: number,
    sort: Sort,
    onlyAuthor: boolean,
    shouldStatistic: boolean,
  }
}

export class PostsQueryRequestEx extends jspb.Message {
  getThreadId(): number;
  setThreadId(value: number): PostsQueryRequestEx;

  getLast(): number;
  setLast(value: number): PostsQueryRequestEx;

  getTop(): number;
  setTop(value: number): PostsQueryRequestEx;

  getSize(): number;
  setSize(value: number): PostsQueryRequestEx;

  getSort(): Sort;
  setSort(value: Sort): PostsQueryRequestEx;

  getOnlyAuthor(): boolean;
  setOnlyAuthor(value: boolean): PostsQueryRequestEx;

  getDirection(): LoadDirection;
  setDirection(value: LoadDirection): PostsQueryRequestEx;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostsQueryRequestEx.AsObject;
  static toObject(includeInstance: boolean, msg: PostsQueryRequestEx): PostsQueryRequestEx.AsObject;
  static serializeBinaryToWriter(message: PostsQueryRequestEx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostsQueryRequestEx;
  static deserializeBinaryFromReader(message: PostsQueryRequestEx, reader: jspb.BinaryReader): PostsQueryRequestEx;
}

export namespace PostsQueryRequestEx {
  export type AsObject = {
    threadId: number,
    last: number,
    top: number,
    size: number,
    sort: Sort,
    onlyAuthor: boolean,
    direction: LoadDirection,
  }
}

export class ThreadsResponse extends jspb.Message {
  getThreadsList(): Array<thread_pb.Thread>;
  setThreadsList(value: Array<thread_pb.Thread>): ThreadsResponse;
  clearThreadsList(): ThreadsResponse;
  addThreads(value?: thread_pb.Thread, index?: number): thread_pb.Thread;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreadsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ThreadsResponse): ThreadsResponse.AsObject;
  static serializeBinaryToWriter(message: ThreadsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreadsResponse;
  static deserializeBinaryFromReader(message: ThreadsResponse, reader: jspb.BinaryReader): ThreadsResponse;
}

export namespace ThreadsResponse {
  export type AsObject = {
    threadsList: Array<thread_pb.Thread.AsObject>,
  }
}

export class PostsResponse extends jspb.Message {
  getPostsList(): Array<post_pb.Post>;
  setPostsList(value: Array<post_pb.Post>): PostsResponse;
  clearPostsList(): PostsResponse;
  addPosts(value?: post_pb.Post, index?: number): post_pb.Post;

  getTotal(): number;
  setTotal(value: number): PostsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostsResponse): PostsResponse.AsObject;
  static serializeBinaryToWriter(message: PostsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostsResponse;
  static deserializeBinaryFromReader(message: PostsResponse, reader: jspb.BinaryReader): PostsResponse;
}

export namespace PostsResponse {
  export type AsObject = {
    postsList: Array<post_pb.Post.AsObject>,
    total: number,
  }
}

export class RateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): RateRequest;

  getType(): rate_pb.RateType;
  setType(value: rate_pb.RateType): RateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RateRequest): RateRequest.AsObject;
  static serializeBinaryToWriter(message: RateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RateRequest;
  static deserializeBinaryFromReader(message: RateRequest, reader: jspb.BinaryReader): RateRequest;
}

export namespace RateRequest {
  export type AsObject = {
    id: number,
    type: rate_pb.RateType,
  }
}

export class AppreciateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): AppreciateRequest;

  getAmount(): number;
  setAmount(value: number): AppreciateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppreciateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AppreciateRequest): AppreciateRequest.AsObject;
  static serializeBinaryToWriter(message: AppreciateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppreciateRequest;
  static deserializeBinaryFromReader(message: AppreciateRequest, reader: jspb.BinaryReader): AppreciateRequest;
}

export namespace AppreciateRequest {
  export type AsObject = {
    id: number,
    amount: number,
  }
}

export class FavRequest extends jspb.Message {
  getId(): number;
  setId(value: number): FavRequest;

  getIsFav(): boolean;
  setIsFav(value: boolean): FavRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FavRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FavRequest): FavRequest.AsObject;
  static serializeBinaryToWriter(message: FavRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FavRequest;
  static deserializeBinaryFromReader(message: FavRequest, reader: jspb.BinaryReader): FavRequest;
}

export namespace FavRequest {
  export type AsObject = {
    id: number,
    isFav: boolean,
  }
}

export class IDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): IDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IDRequest): IDRequest.AsObject;
  static serializeBinaryToWriter(message: IDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IDRequest;
  static deserializeBinaryFromReader(message: IDRequest, reader: jspb.BinaryReader): IDRequest;
}

export namespace IDRequest {
  export type AsObject = {
    id: number,
  }
}

export class QuotaResponse extends jspb.Message {
  getMonthlyRemain(): number;
  setMonthlyRemain(value: number): QuotaResponse;

  getRemain(): number;
  setRemain(value: number): QuotaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuotaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuotaResponse): QuotaResponse.AsObject;
  static serializeBinaryToWriter(message: QuotaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuotaResponse;
  static deserializeBinaryFromReader(message: QuotaResponse, reader: jspb.BinaryReader): QuotaResponse;
}

export namespace QuotaResponse {
  export type AsObject = {
    monthlyRemain: number,
    remain: number,
  }
}

export class SearchRequest extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): SearchRequest;

  getPageSize(): number;
  setPageSize(value: number): SearchRequest;

  getOffset(): number;
  setOffset(value: number): SearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
  static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequest;
  static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
  export type AsObject = {
    keyword: string,
    pageSize: number,
    offset: number,
  }
}

export class CountReply extends jspb.Message {
  getCount(): number;
  setCount(value: number): CountReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountReply.AsObject;
  static toObject(includeInstance: boolean, msg: CountReply): CountReply.AsObject;
  static serializeBinaryToWriter(message: CountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountReply;
  static deserializeBinaryFromReader(message: CountReply, reader: jspb.BinaryReader): CountReply;
}

export namespace CountReply {
  export type AsObject = {
    count: number,
  }
}

export class NotificationQueryRequest extends jspb.Message {
  getLast(): string;
  setLast(value: string): NotificationQueryRequest;

  getPageSize(): number;
  setPageSize(value: number): NotificationQueryRequest;

  getOnlyUnread(): boolean;
  setOnlyUnread(value: boolean): NotificationQueryRequest;

  getType(): notification_pb.NotificationType;
  setType(value: notification_pb.NotificationType): NotificationQueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationQueryRequest): NotificationQueryRequest.AsObject;
  static serializeBinaryToWriter(message: NotificationQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationQueryRequest;
  static deserializeBinaryFromReader(message: NotificationQueryRequest, reader: jspb.BinaryReader): NotificationQueryRequest;
}

export namespace NotificationQueryRequest {
  export type AsObject = {
    last: string,
    pageSize: number,
    onlyUnread: boolean,
    type: notification_pb.NotificationType,
  }
}

export class NotificationResponse extends jspb.Message {
  getNotificationsList(): Array<notification_pb.Notification>;
  setNotificationsList(value: Array<notification_pb.Notification>): NotificationResponse;
  clearNotificationsList(): NotificationResponse;
  addNotifications(value?: notification_pb.Notification, index?: number): notification_pb.Notification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationResponse): NotificationResponse.AsObject;
  static serializeBinaryToWriter(message: NotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationResponse;
  static deserializeBinaryFromReader(message: NotificationResponse, reader: jspb.BinaryReader): NotificationResponse;
}

export namespace NotificationResponse {
  export type AsObject = {
    notificationsList: Array<notification_pb.Notification.AsObject>,
  }
}

export class IdentitiesResponse extends jspb.Message {
  getIdentitiesList(): Array<identity_pb.Identity>;
  setIdentitiesList(value: Array<identity_pb.Identity>): IdentitiesResponse;
  clearIdentitiesList(): IdentitiesResponse;
  addIdentities(value?: identity_pb.Identity, index?: number): identity_pb.Identity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentitiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IdentitiesResponse): IdentitiesResponse.AsObject;
  static serializeBinaryToWriter(message: IdentitiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentitiesResponse;
  static deserializeBinaryFromReader(message: IdentitiesResponse, reader: jspb.BinaryReader): IdentitiesResponse;
}

export namespace IdentitiesResponse {
  export type AsObject = {
    identitiesList: Array<identity_pb.Identity.AsObject>,
  }
}

export class FishResponse extends jspb.Message {
  getFishCount(): number;
  setFishCount(value: number): FishResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FishResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FishResponse): FishResponse.AsObject;
  static serializeBinaryToWriter(message: FishResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FishResponse;
  static deserializeBinaryFromReader(message: FishResponse, reader: jspb.BinaryReader): FishResponse;
}

export namespace FishResponse {
  export type AsObject = {
    fishCount: number,
  }
}

export class UploadRequest extends jspb.Message {
  getFileName(): string;
  setFileName(value: string): UploadRequest;

  getSize(): number;
  setSize(value: number): UploadRequest;

  getMd5(): string;
  setMd5(value: string): UploadRequest;

  getContentType(): string;
  setContentType(value: string): UploadRequest;

  getWidth(): number;
  setWidth(value: number): UploadRequest;

  getHeight(): number;
  setHeight(value: number): UploadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadRequest): UploadRequest.AsObject;
  static serializeBinaryToWriter(message: UploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadRequest;
  static deserializeBinaryFromReader(message: UploadRequest, reader: jspb.BinaryReader): UploadRequest;
}

export namespace UploadRequest {
  export type AsObject = {
    fileName: string,
    size: number,
    md5: string,
    contentType: string,
    width: number,
    height: number,
  }
}

export class UploadResponse extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): UploadResponse;

  getUrl(): string;
  setUrl(value: string): UploadResponse;

  getName(): string;
  setName(value: string): UploadResponse;

  getWidth(): number;
  setWidth(value: number): UploadResponse;

  getHeight(): number;
  setHeight(value: number): UploadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadResponse): UploadResponse.AsObject;
  static serializeBinaryToWriter(message: UploadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadResponse;
  static deserializeBinaryFromReader(message: UploadResponse, reader: jspb.BinaryReader): UploadResponse;
}

export namespace UploadResponse {
  export type AsObject = {
    uuid: string,
    url: string,
    name: string,
    width: number,
    height: number,
  }
}

export class UserStatsResponse extends jspb.Message {
  getThreadCount(): number;
  setThreadCount(value: number): UserStatsResponse;

  getPostCount(): number;
  setPostCount(value: number): UserStatsResponse;

  getGotLikeCount(): number;
  setGotLikeCount(value: number): UserStatsResponse;

  getGotHateCount(): number;
  setGotHateCount(value: number): UserStatsResponse;

  getSentLikeCount(): number;
  setSentLikeCount(value: number): UserStatsResponse;

  getSentHateCount(): number;
  setSentHateCount(value: number): UserStatsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserStatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserStatsResponse): UserStatsResponse.AsObject;
  static serializeBinaryToWriter(message: UserStatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserStatsResponse;
  static deserializeBinaryFromReader(message: UserStatsResponse, reader: jspb.BinaryReader): UserStatsResponse;
}

export namespace UserStatsResponse {
  export type AsObject = {
    threadCount: number,
    postCount: number,
    gotLikeCount: number,
    gotHateCount: number,
    sentLikeCount: number,
    sentHateCount: number,
  }
}

export class PunishmentsResponse extends jspb.Message {
  getPunishmentsList(): Array<punishment_pb.Punishment>;
  setPunishmentsList(value: Array<punishment_pb.Punishment>): PunishmentsResponse;
  clearPunishmentsList(): PunishmentsResponse;
  addPunishments(value?: punishment_pb.Punishment, index?: number): punishment_pb.Punishment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PunishmentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PunishmentsResponse): PunishmentsResponse.AsObject;
  static serializeBinaryToWriter(message: PunishmentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PunishmentsResponse;
  static deserializeBinaryFromReader(message: PunishmentsResponse, reader: jspb.BinaryReader): PunishmentsResponse;
}

export namespace PunishmentsResponse {
  export type AsObject = {
    punishmentsList: Array<punishment_pb.Punishment.AsObject>,
  }
}

export enum Sort { 
  SORTASC = 0,
  SORTDESC = 1,
  SORTPOPULAR = 2,
}
export enum LoadDirection { 
  LOADDIRECTIONDOWN = 0,
  LOADDIRECTIONUP = 1,
}
