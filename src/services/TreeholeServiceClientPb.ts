/**
 * @fileoverview gRPC-Web generated client stub for model
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as treehole_pb from './treehole_pb';
import * as identity_pb from './identity_pb';
import * as notification_pb from './notification_pb';
import * as post_pb from './post_pb';
import * as punishment_pb from './punishment_pb';
import * as report_pb from './report_pb';
import * as setting_pb from './setting_pb';
import * as site_config_pb from './site_config_pb';
import * as subscribe_pb from './subscribe_pb';
import * as thread_pb from './thread_pb';
import * as user_pb from './user_pb';
import * as user_device_pb from './user_device_pb';


export class TreeHoleClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoPing = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/Ping',
    grpcWeb.MethodType.UNARY,
    treehole_pb.EmptyRequest,
    treehole_pb.EmptyRequest,
    (request: treehole_pb.EmptyRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.EmptyRequest.deserializeBinary
  );

  ping(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.EmptyRequest>;

  ping(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.EmptyRequest) => void): grpcWeb.ClientReadableStream<treehole_pb.EmptyRequest>;

  ping(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.EmptyRequest) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/Ping',
        request,
        metadata || {},
        this.methodInfoPing,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/Ping',
    request,
    metadata || {},
    this.methodInfoPing);
  }

  methodInfoGetOAuthConfig = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetOAuthConfig',
    grpcWeb.MethodType.UNARY,
    treehole_pb.OAuthConfigRequest,
    treehole_pb.OAuthConfigResponse,
    (request: treehole_pb.OAuthConfigRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.OAuthConfigResponse.deserializeBinary
  );

  getOAuthConfig(
    request: treehole_pb.OAuthConfigRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.OAuthConfigResponse>;

  getOAuthConfig(
    request: treehole_pb.OAuthConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.OAuthConfigResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.OAuthConfigResponse>;

  getOAuthConfig(
    request: treehole_pb.OAuthConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.OAuthConfigResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetOAuthConfig',
        request,
        metadata || {},
        this.methodInfoGetOAuthConfig,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetOAuthConfig',
    request,
    metadata || {},
    this.methodInfoGetOAuthConfig);
  }

  methodInfoGetSiteConfig = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetSiteConfig',
    grpcWeb.MethodType.UNARY,
    treehole_pb.EmptyRequest,
    site_config_pb.SiteConfig,
    (request: treehole_pb.EmptyRequest) => {
      return request.serializeBinary();
    },
    site_config_pb.SiteConfig.deserializeBinary
  );

  getSiteConfig(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null): Promise<site_config_pb.SiteConfig>;

  getSiteConfig(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: site_config_pb.SiteConfig) => void): grpcWeb.ClientReadableStream<site_config_pb.SiteConfig>;

  getSiteConfig(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: site_config_pb.SiteConfig) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetSiteConfig',
        request,
        metadata || {},
        this.methodInfoGetSiteConfig,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetSiteConfig',
    request,
    metadata || {},
    this.methodInfoGetSiteConfig);
  }

  methodInfoOAuthLogin = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/OAuthLogin',
    grpcWeb.MethodType.UNARY,
    treehole_pb.OAuthLoginRequest,
    treehole_pb.OAuthLoginResponse,
    (request: treehole_pb.OAuthLoginRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.OAuthLoginResponse.deserializeBinary
  );

  oAuthLogin(
    request: treehole_pb.OAuthLoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.OAuthLoginResponse>;

  oAuthLogin(
    request: treehole_pb.OAuthLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.OAuthLoginResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.OAuthLoginResponse>;

  oAuthLogin(
    request: treehole_pb.OAuthLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.OAuthLoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/OAuthLogin',
        request,
        metadata || {},
        this.methodInfoOAuthLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/OAuthLogin',
    request,
    metadata || {},
    this.methodInfoOAuthLogin);
  }

  methodInfoRegisterDevice = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/RegisterDevice',
    grpcWeb.MethodType.UNARY,
    user_device_pb.UserDevice,
    treehole_pb.EmptyRequest,
    (request: user_device_pb.UserDevice) => {
      return request.serializeBinary();
    },
    treehole_pb.EmptyRequest.deserializeBinary
  );

  registerDevice(
    request: user_device_pb.UserDevice,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.EmptyRequest>;

  registerDevice(
    request: user_device_pb.UserDevice,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.EmptyRequest) => void): grpcWeb.ClientReadableStream<treehole_pb.EmptyRequest>;

  registerDevice(
    request: user_device_pb.UserDevice,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.EmptyRequest) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/RegisterDevice',
        request,
        metadata || {},
        this.methodInfoRegisterDevice,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/RegisterDevice',
    request,
    metadata || {},
    this.methodInfoRegisterDevice);
  }

  methodInfoGetProfile = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetProfile',
    grpcWeb.MethodType.UNARY,
    treehole_pb.EmptyRequest,
    user_pb.User,
    (request: treehole_pb.EmptyRequest) => {
      return request.serializeBinary();
    },
    user_pb.User.deserializeBinary
  );

  getProfile(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.User>;

  getProfile(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.User) => void): grpcWeb.ClientReadableStream<user_pb.User>;

  getProfile(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.User) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetProfile',
        request,
        metadata || {},
        this.methodInfoGetProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetProfile',
    request,
    metadata || {},
    this.methodInfoGetProfile);
  }

  methodInfoSetActiveIdentity = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/SetActiveIdentity',
    grpcWeb.MethodType.UNARY,
    treehole_pb.IDRequest,
    user_pb.User,
    (request: treehole_pb.IDRequest) => {
      return request.serializeBinary();
    },
    user_pb.User.deserializeBinary
  );

  setActiveIdentity(
    request: treehole_pb.IDRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.User>;

  setActiveIdentity(
    request: treehole_pb.IDRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.User) => void): grpcWeb.ClientReadableStream<user_pb.User>;

  setActiveIdentity(
    request: treehole_pb.IDRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.User) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/SetActiveIdentity',
        request,
        metadata || {},
        this.methodInfoSetActiveIdentity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/SetActiveIdentity',
    request,
    metadata || {},
    this.methodInfoSetActiveIdentity);
  }

  methodInfoGetAllCategories = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetAllCategories',
    grpcWeb.MethodType.UNARY,
    treehole_pb.EmptyRequest,
    treehole_pb.CategoriesResponse,
    (request: treehole_pb.EmptyRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.CategoriesResponse.deserializeBinary
  );

  getAllCategories(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.CategoriesResponse>;

  getAllCategories(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.CategoriesResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.CategoriesResponse>;

  getAllCategories(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.CategoriesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetAllCategories',
        request,
        metadata || {},
        this.methodInfoGetAllCategories,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetAllCategories',
    request,
    metadata || {},
    this.methodInfoGetAllCategories);
  }

  methodInfoGetAllTags = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetAllTags',
    grpcWeb.MethodType.UNARY,
    treehole_pb.TagsRequest,
    treehole_pb.TagsResponse,
    (request: treehole_pb.TagsRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.TagsResponse.deserializeBinary
  );

  getAllTags(
    request: treehole_pb.TagsRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.TagsResponse>;

  getAllTags(
    request: treehole_pb.TagsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.TagsResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.TagsResponse>;

  getAllTags(
    request: treehole_pb.TagsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.TagsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetAllTags',
        request,
        metadata || {},
        this.methodInfoGetAllTags,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetAllTags',
    request,
    metadata || {},
    this.methodInfoGetAllTags);
  }

  methodInfoGetHottestThreads = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetHottestThreads',
    grpcWeb.MethodType.UNARY,
    treehole_pb.ThreadsQueryRequest,
    treehole_pb.ThreadsResponse,
    (request: treehole_pb.ThreadsQueryRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.ThreadsResponse.deserializeBinary
  );

  getHottestThreads(
    request: treehole_pb.ThreadsQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.ThreadsResponse>;

  getHottestThreads(
    request: treehole_pb.ThreadsQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.ThreadsResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.ThreadsResponse>;

  getHottestThreads(
    request: treehole_pb.ThreadsQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.ThreadsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetHottestThreads',
        request,
        metadata || {},
        this.methodInfoGetHottestThreads,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetHottestThreads',
    request,
    metadata || {},
    this.methodInfoGetHottestThreads);
  }

  methodInfoGetLatestThreads = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetLatestThreads',
    grpcWeb.MethodType.UNARY,
    treehole_pb.ThreadsQueryRequest,
    treehole_pb.ThreadsResponse,
    (request: treehole_pb.ThreadsQueryRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.ThreadsResponse.deserializeBinary
  );

  getLatestThreads(
    request: treehole_pb.ThreadsQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.ThreadsResponse>;

  getLatestThreads(
    request: treehole_pb.ThreadsQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.ThreadsResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.ThreadsResponse>;

  getLatestThreads(
    request: treehole_pb.ThreadsQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.ThreadsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetLatestThreads',
        request,
        metadata || {},
        this.methodInfoGetLatestThreads,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetLatestThreads',
    request,
    metadata || {},
    this.methodInfoGetLatestThreads);
  }

  methodInfoGetUserThreads = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetUserThreads',
    grpcWeb.MethodType.UNARY,
    treehole_pb.ThreadsQueryRequest,
    treehole_pb.ThreadsResponse,
    (request: treehole_pb.ThreadsQueryRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.ThreadsResponse.deserializeBinary
  );

  getUserThreads(
    request: treehole_pb.ThreadsQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.ThreadsResponse>;

  getUserThreads(
    request: treehole_pb.ThreadsQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.ThreadsResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.ThreadsResponse>;

  getUserThreads(
    request: treehole_pb.ThreadsQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.ThreadsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetUserThreads',
        request,
        metadata || {},
        this.methodInfoGetUserThreads,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetUserThreads',
    request,
    metadata || {},
    this.methodInfoGetUserThreads);
  }

  methodInfoGetUserPosts = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetUserPosts',
    grpcWeb.MethodType.UNARY,
    treehole_pb.PostsQueryRequest,
    treehole_pb.PostsResponse,
    (request: treehole_pb.PostsQueryRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.PostsResponse.deserializeBinary
  );

  getUserPosts(
    request: treehole_pb.PostsQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.PostsResponse>;

  getUserPosts(
    request: treehole_pb.PostsQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.PostsResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.PostsResponse>;

  getUserPosts(
    request: treehole_pb.PostsQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.PostsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetUserPosts',
        request,
        metadata || {},
        this.methodInfoGetUserPosts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetUserPosts',
    request,
    metadata || {},
    this.methodInfoGetUserPosts);
  }

  methodInfoGetUserFavThreads = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetUserFavThreads',
    grpcWeb.MethodType.UNARY,
    treehole_pb.ThreadsQueryRequest,
    treehole_pb.ThreadsResponse,
    (request: treehole_pb.ThreadsQueryRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.ThreadsResponse.deserializeBinary
  );

  getUserFavThreads(
    request: treehole_pb.ThreadsQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.ThreadsResponse>;

  getUserFavThreads(
    request: treehole_pb.ThreadsQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.ThreadsResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.ThreadsResponse>;

  getUserFavThreads(
    request: treehole_pb.ThreadsQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.ThreadsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetUserFavThreads',
        request,
        metadata || {},
        this.methodInfoGetUserFavThreads,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetUserFavThreads',
    request,
    metadata || {},
    this.methodInfoGetUserFavThreads);
  }

  methodInfoGetUserParticipateThreads = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetUserParticipateThreads',
    grpcWeb.MethodType.UNARY,
    treehole_pb.ThreadsQueryRequest,
    treehole_pb.ThreadsResponse,
    (request: treehole_pb.ThreadsQueryRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.ThreadsResponse.deserializeBinary
  );

  getUserParticipateThreads(
    request: treehole_pb.ThreadsQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.ThreadsResponse>;

  getUserParticipateThreads(
    request: treehole_pb.ThreadsQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.ThreadsResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.ThreadsResponse>;

  getUserParticipateThreads(
    request: treehole_pb.ThreadsQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.ThreadsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetUserParticipateThreads',
        request,
        metadata || {},
        this.methodInfoGetUserParticipateThreads,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetUserParticipateThreads',
    request,
    metadata || {},
    this.methodInfoGetUserParticipateThreads);
  }

  methodInfoGetThreadUserIdentities = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetThreadUserIdentities',
    grpcWeb.MethodType.UNARY,
    thread_pb.Thread,
    treehole_pb.IdentitiesResponse,
    (request: thread_pb.Thread) => {
      return request.serializeBinary();
    },
    treehole_pb.IdentitiesResponse.deserializeBinary
  );

  getThreadUserIdentities(
    request: thread_pb.Thread,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.IdentitiesResponse>;

  getThreadUserIdentities(
    request: thread_pb.Thread,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.IdentitiesResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.IdentitiesResponse>;

  getThreadUserIdentities(
    request: thread_pb.Thread,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.IdentitiesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetThreadUserIdentities',
        request,
        metadata || {},
        this.methodInfoGetThreadUserIdentities,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetThreadUserIdentities',
    request,
    metadata || {},
    this.methodInfoGetThreadUserIdentities);
  }

  methodInfoGetThread = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetThread',
    grpcWeb.MethodType.UNARY,
    treehole_pb.PostsQueryRequest,
    thread_pb.Thread,
    (request: treehole_pb.PostsQueryRequest) => {
      return request.serializeBinary();
    },
    thread_pb.Thread.deserializeBinary
  );

  getThread(
    request: treehole_pb.PostsQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<thread_pb.Thread>;

  getThread(
    request: treehole_pb.PostsQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: thread_pb.Thread) => void): grpcWeb.ClientReadableStream<thread_pb.Thread>;

  getThread(
    request: treehole_pb.PostsQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: thread_pb.Thread) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetThread',
        request,
        metadata || {},
        this.methodInfoGetThread,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetThread',
    request,
    metadata || {},
    this.methodInfoGetThread);
  }

  methodInfoGetThreadPosts = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetThreadPosts',
    grpcWeb.MethodType.UNARY,
    treehole_pb.PostsQueryRequest,
    treehole_pb.PostsResponse,
    (request: treehole_pb.PostsQueryRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.PostsResponse.deserializeBinary
  );

  getThreadPosts(
    request: treehole_pb.PostsQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.PostsResponse>;

  getThreadPosts(
    request: treehole_pb.PostsQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.PostsResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.PostsResponse>;

  getThreadPosts(
    request: treehole_pb.PostsQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.PostsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetThreadPosts',
        request,
        metadata || {},
        this.methodInfoGetThreadPosts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetThreadPosts',
    request,
    metadata || {},
    this.methodInfoGetThreadPosts);
  }

  methodInfoGetThreadPostsEx = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetThreadPostsEx',
    grpcWeb.MethodType.UNARY,
    treehole_pb.PostsQueryRequestEx,
    treehole_pb.PostsResponse,
    (request: treehole_pb.PostsQueryRequestEx) => {
      return request.serializeBinary();
    },
    treehole_pb.PostsResponse.deserializeBinary
  );

  getThreadPostsEx(
    request: treehole_pb.PostsQueryRequestEx,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.PostsResponse>;

  getThreadPostsEx(
    request: treehole_pb.PostsQueryRequestEx,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.PostsResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.PostsResponse>;

  getThreadPostsEx(
    request: treehole_pb.PostsQueryRequestEx,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.PostsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetThreadPostsEx',
        request,
        metadata || {},
        this.methodInfoGetThreadPostsEx,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetThreadPostsEx',
    request,
    metadata || {},
    this.methodInfoGetThreadPostsEx);
  }

  methodInfoGetPost = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetPost',
    grpcWeb.MethodType.UNARY,
    post_pb.Post,
    post_pb.Post,
    (request: post_pb.Post) => {
      return request.serializeBinary();
    },
    post_pb.Post.deserializeBinary
  );

  getPost(
    request: post_pb.Post,
    metadata: grpcWeb.Metadata | null): Promise<post_pb.Post>;

  getPost(
    request: post_pb.Post,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: post_pb.Post) => void): grpcWeb.ClientReadableStream<post_pb.Post>;

  getPost(
    request: post_pb.Post,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: post_pb.Post) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetPost',
        request,
        metadata || {},
        this.methodInfoGetPost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetPost',
    request,
    metadata || {},
    this.methodInfoGetPost);
  }

  methodInfoRateThread = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/RateThread',
    grpcWeb.MethodType.UNARY,
    treehole_pb.RateRequest,
    thread_pb.Thread,
    (request: treehole_pb.RateRequest) => {
      return request.serializeBinary();
    },
    thread_pb.Thread.deserializeBinary
  );

  rateThread(
    request: treehole_pb.RateRequest,
    metadata: grpcWeb.Metadata | null): Promise<thread_pb.Thread>;

  rateThread(
    request: treehole_pb.RateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: thread_pb.Thread) => void): grpcWeb.ClientReadableStream<thread_pb.Thread>;

  rateThread(
    request: treehole_pb.RateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: thread_pb.Thread) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/RateThread',
        request,
        metadata || {},
        this.methodInfoRateThread,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/RateThread',
    request,
    metadata || {},
    this.methodInfoRateThread);
  }

  methodInfoFavThread = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/FavThread',
    grpcWeb.MethodType.UNARY,
    treehole_pb.FavRequest,
    thread_pb.Thread,
    (request: treehole_pb.FavRequest) => {
      return request.serializeBinary();
    },
    thread_pb.Thread.deserializeBinary
  );

  favThread(
    request: treehole_pb.FavRequest,
    metadata: grpcWeb.Metadata | null): Promise<thread_pb.Thread>;

  favThread(
    request: treehole_pb.FavRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: thread_pb.Thread) => void): grpcWeb.ClientReadableStream<thread_pb.Thread>;

  favThread(
    request: treehole_pb.FavRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: thread_pb.Thread) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/FavThread',
        request,
        metadata || {},
        this.methodInfoFavThread,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/FavThread',
    request,
    metadata || {},
    this.methodInfoFavThread);
  }

  methodInfoRatePost = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/RatePost',
    grpcWeb.MethodType.UNARY,
    treehole_pb.RateRequest,
    post_pb.Post,
    (request: treehole_pb.RateRequest) => {
      return request.serializeBinary();
    },
    post_pb.Post.deserializeBinary
  );

  ratePost(
    request: treehole_pb.RateRequest,
    metadata: grpcWeb.Metadata | null): Promise<post_pb.Post>;

  ratePost(
    request: treehole_pb.RateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: post_pb.Post) => void): grpcWeb.ClientReadableStream<post_pb.Post>;

  ratePost(
    request: treehole_pb.RateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: post_pb.Post) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/RatePost',
        request,
        metadata || {},
        this.methodInfoRatePost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/RatePost',
    request,
    metadata || {},
    this.methodInfoRatePost);
  }

  methodInfoAppreciateThread = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/AppreciateThread',
    grpcWeb.MethodType.UNARY,
    treehole_pb.AppreciateRequest,
    thread_pb.Thread,
    (request: treehole_pb.AppreciateRequest) => {
      return request.serializeBinary();
    },
    thread_pb.Thread.deserializeBinary
  );

  appreciateThread(
    request: treehole_pb.AppreciateRequest,
    metadata: grpcWeb.Metadata | null): Promise<thread_pb.Thread>;

  appreciateThread(
    request: treehole_pb.AppreciateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: thread_pb.Thread) => void): grpcWeb.ClientReadableStream<thread_pb.Thread>;

  appreciateThread(
    request: treehole_pb.AppreciateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: thread_pb.Thread) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/AppreciateThread',
        request,
        metadata || {},
        this.methodInfoAppreciateThread,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/AppreciateThread',
    request,
    metadata || {},
    this.methodInfoAppreciateThread);
  }

  methodInfoAppreciatePost = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/AppreciatePost',
    grpcWeb.MethodType.UNARY,
    treehole_pb.AppreciateRequest,
    post_pb.Post,
    (request: treehole_pb.AppreciateRequest) => {
      return request.serializeBinary();
    },
    post_pb.Post.deserializeBinary
  );

  appreciatePost(
    request: treehole_pb.AppreciateRequest,
    metadata: grpcWeb.Metadata | null): Promise<post_pb.Post>;

  appreciatePost(
    request: treehole_pb.AppreciateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: post_pb.Post) => void): grpcWeb.ClientReadableStream<post_pb.Post>;

  appreciatePost(
    request: treehole_pb.AppreciateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: post_pb.Post) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/AppreciatePost',
        request,
        metadata || {},
        this.methodInfoAppreciatePost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/AppreciatePost',
    request,
    metadata || {},
    this.methodInfoAppreciatePost);
  }

  methodInfoPutPost = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/PutPost',
    grpcWeb.MethodType.UNARY,
    post_pb.Post,
    post_pb.Post,
    (request: post_pb.Post) => {
      return request.serializeBinary();
    },
    post_pb.Post.deserializeBinary
  );

  putPost(
    request: post_pb.Post,
    metadata: grpcWeb.Metadata | null): Promise<post_pb.Post>;

  putPost(
    request: post_pb.Post,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: post_pb.Post) => void): grpcWeb.ClientReadableStream<post_pb.Post>;

  putPost(
    request: post_pb.Post,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: post_pb.Post) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/PutPost',
        request,
        metadata || {},
        this.methodInfoPutPost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/PutPost',
    request,
    metadata || {},
    this.methodInfoPutPost);
  }

  methodInfoDeletePost = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/DeletePost',
    grpcWeb.MethodType.UNARY,
    post_pb.Post,
    treehole_pb.EmptyRequest,
    (request: post_pb.Post) => {
      return request.serializeBinary();
    },
    treehole_pb.EmptyRequest.deserializeBinary
  );

  deletePost(
    request: post_pb.Post,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.EmptyRequest>;

  deletePost(
    request: post_pb.Post,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.EmptyRequest) => void): grpcWeb.ClientReadableStream<treehole_pb.EmptyRequest>;

  deletePost(
    request: post_pb.Post,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.EmptyRequest) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/DeletePost',
        request,
        metadata || {},
        this.methodInfoDeletePost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/DeletePost',
    request,
    metadata || {},
    this.methodInfoDeletePost);
  }

  methodInfoPutThread = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/PutThread',
    grpcWeb.MethodType.UNARY,
    thread_pb.Thread,
    thread_pb.Thread,
    (request: thread_pb.Thread) => {
      return request.serializeBinary();
    },
    thread_pb.Thread.deserializeBinary
  );

  putThread(
    request: thread_pb.Thread,
    metadata: grpcWeb.Metadata | null): Promise<thread_pb.Thread>;

  putThread(
    request: thread_pb.Thread,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: thread_pb.Thread) => void): grpcWeb.ClientReadableStream<thread_pb.Thread>;

  putThread(
    request: thread_pb.Thread,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: thread_pb.Thread) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/PutThread',
        request,
        metadata || {},
        this.methodInfoPutThread,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/PutThread',
    request,
    metadata || {},
    this.methodInfoPutThread);
  }

  methodInfoDeleteThread = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/DeleteThread',
    grpcWeb.MethodType.UNARY,
    thread_pb.Thread,
    treehole_pb.EmptyRequest,
    (request: thread_pb.Thread) => {
      return request.serializeBinary();
    },
    treehole_pb.EmptyRequest.deserializeBinary
  );

  deleteThread(
    request: thread_pb.Thread,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.EmptyRequest>;

  deleteThread(
    request: thread_pb.Thread,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.EmptyRequest) => void): grpcWeb.ClientReadableStream<treehole_pb.EmptyRequest>;

  deleteThread(
    request: thread_pb.Thread,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.EmptyRequest) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/DeleteThread',
        request,
        metadata || {},
        this.methodInfoDeleteThread,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/DeleteThread',
    request,
    metadata || {},
    this.methodInfoDeleteThread);
  }

  methodInfoCreateIdentity = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/CreateIdentity',
    grpcWeb.MethodType.UNARY,
    treehole_pb.EmptyRequest,
    user_pb.User,
    (request: treehole_pb.EmptyRequest) => {
      return request.serializeBinary();
    },
    user_pb.User.deserializeBinary
  );

  createIdentity(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.User>;

  createIdentity(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.User) => void): grpcWeb.ClientReadableStream<user_pb.User>;

  createIdentity(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.User) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/CreateIdentity',
        request,
        metadata || {},
        this.methodInfoCreateIdentity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/CreateIdentity',
    request,
    metadata || {},
    this.methodInfoCreateIdentity);
  }

  methodInfoDisableIdentity = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/DisableIdentity',
    grpcWeb.MethodType.UNARY,
    identity_pb.Identity,
    user_pb.User,
    (request: identity_pb.Identity) => {
      return request.serializeBinary();
    },
    user_pb.User.deserializeBinary
  );

  disableIdentity(
    request: identity_pb.Identity,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.User>;

  disableIdentity(
    request: identity_pb.Identity,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.User) => void): grpcWeb.ClientReadableStream<user_pb.User>;

  disableIdentity(
    request: identity_pb.Identity,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.User) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/DisableIdentity',
        request,
        metadata || {},
        this.methodInfoDisableIdentity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/DisableIdentity',
    request,
    metadata || {},
    this.methodInfoDisableIdentity);
  }

  methodInfoGetCreateIdentityQuota = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetCreateIdentityQuota',
    grpcWeb.MethodType.UNARY,
    treehole_pb.EmptyRequest,
    treehole_pb.QuotaResponse,
    (request: treehole_pb.EmptyRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.QuotaResponse.deserializeBinary
  );

  getCreateIdentityQuota(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.QuotaResponse>;

  getCreateIdentityQuota(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.QuotaResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.QuotaResponse>;

  getCreateIdentityQuota(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.QuotaResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetCreateIdentityQuota',
        request,
        metadata || {},
        this.methodInfoGetCreateIdentityQuota,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetCreateIdentityQuota',
    request,
    metadata || {},
    this.methodInfoGetCreateIdentityQuota);
  }

  methodInfoUpdateSetting = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/UpdateSetting',
    grpcWeb.MethodType.UNARY,
    setting_pb.Setting,
    setting_pb.Setting,
    (request: setting_pb.Setting) => {
      return request.serializeBinary();
    },
    setting_pb.Setting.deserializeBinary
  );

  updateSetting(
    request: setting_pb.Setting,
    metadata: grpcWeb.Metadata | null): Promise<setting_pb.Setting>;

  updateSetting(
    request: setting_pb.Setting,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: setting_pb.Setting) => void): grpcWeb.ClientReadableStream<setting_pb.Setting>;

  updateSetting(
    request: setting_pb.Setting,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: setting_pb.Setting) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/UpdateSetting',
        request,
        metadata || {},
        this.methodInfoUpdateSetting,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/UpdateSetting',
    request,
    metadata || {},
    this.methodInfoUpdateSetting);
  }

  methodInfoPutReport = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/PutReport',
    grpcWeb.MethodType.UNARY,
    report_pb.Report,
    report_pb.Report,
    (request: report_pb.Report) => {
      return request.serializeBinary();
    },
    report_pb.Report.deserializeBinary
  );

  putReport(
    request: report_pb.Report,
    metadata: grpcWeb.Metadata | null): Promise<report_pb.Report>;

  putReport(
    request: report_pb.Report,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: report_pb.Report) => void): grpcWeb.ClientReadableStream<report_pb.Report>;

  putReport(
    request: report_pb.Report,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: report_pb.Report) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/PutReport',
        request,
        metadata || {},
        this.methodInfoPutReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/PutReport',
    request,
    metadata || {},
    this.methodInfoPutReport);
  }

  methodInfoSearchThreads = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/SearchThreads',
    grpcWeb.MethodType.UNARY,
    treehole_pb.SearchRequest,
    treehole_pb.ThreadsResponse,
    (request: treehole_pb.SearchRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.ThreadsResponse.deserializeBinary
  );

  searchThreads(
    request: treehole_pb.SearchRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.ThreadsResponse>;

  searchThreads(
    request: treehole_pb.SearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.ThreadsResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.ThreadsResponse>;

  searchThreads(
    request: treehole_pb.SearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.ThreadsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/SearchThreads',
        request,
        metadata || {},
        this.methodInfoSearchThreads,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/SearchThreads',
    request,
    metadata || {},
    this.methodInfoSearchThreads);
  }

  methodInfoGetUnreadNotificationCount = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetUnreadNotificationCount',
    grpcWeb.MethodType.UNARY,
    treehole_pb.EmptyRequest,
    treehole_pb.CountReply,
    (request: treehole_pb.EmptyRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.CountReply.deserializeBinary
  );

  getUnreadNotificationCount(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.CountReply>;

  getUnreadNotificationCount(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.CountReply) => void): grpcWeb.ClientReadableStream<treehole_pb.CountReply>;

  getUnreadNotificationCount(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.CountReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetUnreadNotificationCount',
        request,
        metadata || {},
        this.methodInfoGetUnreadNotificationCount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetUnreadNotificationCount',
    request,
    metadata || {},
    this.methodInfoGetUnreadNotificationCount);
  }

  methodInfoPutNotificationRead = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/PutNotificationRead',
    grpcWeb.MethodType.UNARY,
    notification_pb.Notification,
    treehole_pb.EmptyRequest,
    (request: notification_pb.Notification) => {
      return request.serializeBinary();
    },
    treehole_pb.EmptyRequest.deserializeBinary
  );

  putNotificationRead(
    request: notification_pb.Notification,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.EmptyRequest>;

  putNotificationRead(
    request: notification_pb.Notification,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.EmptyRequest) => void): grpcWeb.ClientReadableStream<treehole_pb.EmptyRequest>;

  putNotificationRead(
    request: notification_pb.Notification,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.EmptyRequest) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/PutNotificationRead',
        request,
        metadata || {},
        this.methodInfoPutNotificationRead,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/PutNotificationRead',
    request,
    metadata || {},
    this.methodInfoPutNotificationRead);
  }

  methodInfoPutAllNotificationRead = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/PutAllNotificationRead',
    grpcWeb.MethodType.UNARY,
    treehole_pb.EmptyRequest,
    treehole_pb.EmptyRequest,
    (request: treehole_pb.EmptyRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.EmptyRequest.deserializeBinary
  );

  putAllNotificationRead(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.EmptyRequest>;

  putAllNotificationRead(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.EmptyRequest) => void): grpcWeb.ClientReadableStream<treehole_pb.EmptyRequest>;

  putAllNotificationRead(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.EmptyRequest) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/PutAllNotificationRead',
        request,
        metadata || {},
        this.methodInfoPutAllNotificationRead,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/PutAllNotificationRead',
    request,
    metadata || {},
    this.methodInfoPutAllNotificationRead);
  }

  methodInfoGetAllNotifications = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetAllNotifications',
    grpcWeb.MethodType.UNARY,
    treehole_pb.NotificationQueryRequest,
    treehole_pb.NotificationResponse,
    (request: treehole_pb.NotificationQueryRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.NotificationResponse.deserializeBinary
  );

  getAllNotifications(
    request: treehole_pb.NotificationQueryRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.NotificationResponse>;

  getAllNotifications(
    request: treehole_pb.NotificationQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.NotificationResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.NotificationResponse>;

  getAllNotifications(
    request: treehole_pb.NotificationQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.NotificationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetAllNotifications',
        request,
        metadata || {},
        this.methodInfoGetAllNotifications,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetAllNotifications',
    request,
    metadata || {},
    this.methodInfoGetAllNotifications);
  }

  methodInfoPutSubscribe = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/PutSubscribe',
    grpcWeb.MethodType.UNARY,
    subscribe_pb.Subscribe,
    subscribe_pb.Subscribe,
    (request: subscribe_pb.Subscribe) => {
      return request.serializeBinary();
    },
    subscribe_pb.Subscribe.deserializeBinary
  );

  putSubscribe(
    request: subscribe_pb.Subscribe,
    metadata: grpcWeb.Metadata | null): Promise<subscribe_pb.Subscribe>;

  putSubscribe(
    request: subscribe_pb.Subscribe,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: subscribe_pb.Subscribe) => void): grpcWeb.ClientReadableStream<subscribe_pb.Subscribe>;

  putSubscribe(
    request: subscribe_pb.Subscribe,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: subscribe_pb.Subscribe) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/PutSubscribe',
        request,
        metadata || {},
        this.methodInfoPutSubscribe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/PutSubscribe',
    request,
    metadata || {},
    this.methodInfoPutSubscribe);
  }

  methodInfoGetSubscribe = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetSubscribe',
    grpcWeb.MethodType.UNARY,
    subscribe_pb.Subscribe,
    subscribe_pb.Subscribe,
    (request: subscribe_pb.Subscribe) => {
      return request.serializeBinary();
    },
    subscribe_pb.Subscribe.deserializeBinary
  );

  getSubscribe(
    request: subscribe_pb.Subscribe,
    metadata: grpcWeb.Metadata | null): Promise<subscribe_pb.Subscribe>;

  getSubscribe(
    request: subscribe_pb.Subscribe,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: subscribe_pb.Subscribe) => void): grpcWeb.ClientReadableStream<subscribe_pb.Subscribe>;

  getSubscribe(
    request: subscribe_pb.Subscribe,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: subscribe_pb.Subscribe) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetSubscribe',
        request,
        metadata || {},
        this.methodInfoGetSubscribe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetSubscribe',
    request,
    metadata || {},
    this.methodInfoGetSubscribe);
  }

  methodInfoGetBrowsableTags = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetBrowsableTags',
    grpcWeb.MethodType.UNARY,
    treehole_pb.EmptyRequest,
    treehole_pb.TagsResponse,
    (request: treehole_pb.EmptyRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.TagsResponse.deserializeBinary
  );

  getBrowsableTags(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.TagsResponse>;

  getBrowsableTags(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.TagsResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.TagsResponse>;

  getBrowsableTags(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.TagsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetBrowsableTags',
        request,
        metadata || {},
        this.methodInfoGetBrowsableTags,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetBrowsableTags',
    request,
    metadata || {},
    this.methodInfoGetBrowsableTags);
  }

  methodInfoCheckIn = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/CheckIn',
    grpcWeb.MethodType.UNARY,
    treehole_pb.EmptyRequest,
    treehole_pb.FishResponse,
    (request: treehole_pb.EmptyRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.FishResponse.deserializeBinary
  );

  checkIn(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.FishResponse>;

  checkIn(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.FishResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.FishResponse>;

  checkIn(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.FishResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/CheckIn',
        request,
        metadata || {},
        this.methodInfoCheckIn,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/CheckIn',
    request,
    metadata || {},
    this.methodInfoCheckIn);
  }

  methodInfoGetUploadUrl = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetUploadUrl',
    grpcWeb.MethodType.UNARY,
    treehole_pb.UploadRequest,
    treehole_pb.UploadResponse,
    (request: treehole_pb.UploadRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.UploadResponse.deserializeBinary
  );

  getUploadUrl(
    request: treehole_pb.UploadRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.UploadResponse>;

  getUploadUrl(
    request: treehole_pb.UploadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.UploadResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.UploadResponse>;

  getUploadUrl(
    request: treehole_pb.UploadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.UploadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetUploadUrl',
        request,
        metadata || {},
        this.methodInfoGetUploadUrl,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetUploadUrl',
    request,
    metadata || {},
    this.methodInfoGetUploadUrl);
  }

  methodInfoGetUserStats = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetUserStats',
    grpcWeb.MethodType.UNARY,
    treehole_pb.EmptyRequest,
    treehole_pb.UserStatsResponse,
    (request: treehole_pb.EmptyRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.UserStatsResponse.deserializeBinary
  );

  getUserStats(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.UserStatsResponse>;

  getUserStats(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.UserStatsResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.UserStatsResponse>;

  getUserStats(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.UserStatsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetUserStats',
        request,
        metadata || {},
        this.methodInfoGetUserStats,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetUserStats',
    request,
    metadata || {},
    this.methodInfoGetUserStats);
  }

  methodInfoGetDownloadUrl = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetDownloadUrl',
    grpcWeb.MethodType.UNARY,
    treehole_pb.UploadResponse,
    treehole_pb.UploadResponse,
    (request: treehole_pb.UploadResponse) => {
      return request.serializeBinary();
    },
    treehole_pb.UploadResponse.deserializeBinary
  );

  getDownloadUrl(
    request: treehole_pb.UploadResponse,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.UploadResponse>;

  getDownloadUrl(
    request: treehole_pb.UploadResponse,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.UploadResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.UploadResponse>;

  getDownloadUrl(
    request: treehole_pb.UploadResponse,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.UploadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetDownloadUrl',
        request,
        metadata || {},
        this.methodInfoGetDownloadUrl,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetDownloadUrl',
    request,
    metadata || {},
    this.methodInfoGetDownloadUrl);
  }

  methodInfoGetPunishments = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/GetPunishments',
    grpcWeb.MethodType.UNARY,
    treehole_pb.EmptyRequest,
    treehole_pb.PunishmentsResponse,
    (request: treehole_pb.EmptyRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.PunishmentsResponse.deserializeBinary
  );

  getPunishments(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.PunishmentsResponse>;

  getPunishments(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.PunishmentsResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.PunishmentsResponse>;

  getPunishments(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.PunishmentsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/GetPunishments',
        request,
        metadata || {},
        this.methodInfoGetPunishments,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/GetPunishments',
    request,
    metadata || {},
    this.methodInfoGetPunishments);
  }

  methodInfoAdminBanUser = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/AdminBanUser',
    grpcWeb.MethodType.UNARY,
    punishment_pb.Punishment,
    punishment_pb.Punishment,
    (request: punishment_pb.Punishment) => {
      return request.serializeBinary();
    },
    punishment_pb.Punishment.deserializeBinary
  );

  adminBanUser(
    request: punishment_pb.Punishment,
    metadata: grpcWeb.Metadata | null): Promise<punishment_pb.Punishment>;

  adminBanUser(
    request: punishment_pb.Punishment,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: punishment_pb.Punishment) => void): grpcWeb.ClientReadableStream<punishment_pb.Punishment>;

  adminBanUser(
    request: punishment_pb.Punishment,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: punishment_pb.Punishment) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/AdminBanUser',
        request,
        metadata || {},
        this.methodInfoAdminBanUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/AdminBanUser',
    request,
    metadata || {},
    this.methodInfoAdminBanUser);
  }

  methodInfoAdminSetPostStatus = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/AdminSetPostStatus',
    grpcWeb.MethodType.UNARY,
    post_pb.Post,
    post_pb.Post,
    (request: post_pb.Post) => {
      return request.serializeBinary();
    },
    post_pb.Post.deserializeBinary
  );

  adminSetPostStatus(
    request: post_pb.Post,
    metadata: grpcWeb.Metadata | null): Promise<post_pb.Post>;

  adminSetPostStatus(
    request: post_pb.Post,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: post_pb.Post) => void): grpcWeb.ClientReadableStream<post_pb.Post>;

  adminSetPostStatus(
    request: post_pb.Post,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: post_pb.Post) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/AdminSetPostStatus',
        request,
        metadata || {},
        this.methodInfoAdminSetPostStatus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/AdminSetPostStatus',
    request,
    metadata || {},
    this.methodInfoAdminSetPostStatus);
  }

  methodInfoAdminSetThread = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/AdminSetThread',
    grpcWeb.MethodType.UNARY,
    thread_pb.Thread,
    thread_pb.Thread,
    (request: thread_pb.Thread) => {
      return request.serializeBinary();
    },
    thread_pb.Thread.deserializeBinary
  );

  adminSetThread(
    request: thread_pb.Thread,
    metadata: grpcWeb.Metadata | null): Promise<thread_pb.Thread>;

  adminSetThread(
    request: thread_pb.Thread,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: thread_pb.Thread) => void): grpcWeb.ClientReadableStream<thread_pb.Thread>;

  adminSetThread(
    request: thread_pb.Thread,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: thread_pb.Thread) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/AdminSetThread',
        request,
        metadata || {},
        this.methodInfoAdminSetThread,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/AdminSetThread',
    request,
    metadata || {},
    this.methodInfoAdminSetThread);
  }

  methodInfoAdminGetAllTags = new grpcWeb.MethodDescriptor(
    '/model.TreeHole/AdminGetAllTags',
    grpcWeb.MethodType.UNARY,
    treehole_pb.EmptyRequest,
    treehole_pb.TagsResponse,
    (request: treehole_pb.EmptyRequest) => {
      return request.serializeBinary();
    },
    treehole_pb.TagsResponse.deserializeBinary
  );

  adminGetAllTags(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null): Promise<treehole_pb.TagsResponse>;

  adminGetAllTags(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: treehole_pb.TagsResponse) => void): grpcWeb.ClientReadableStream<treehole_pb.TagsResponse>;

  adminGetAllTags(
    request: treehole_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: treehole_pb.TagsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/model.TreeHole/AdminGetAllTags',
        request,
        metadata || {},
        this.methodInfoAdminGetAllTags,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/model.TreeHole/AdminGetAllTags',
    request,
    metadata || {},
    this.methodInfoAdminGetAllTags);
  }

}

