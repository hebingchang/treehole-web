import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';
import * as post_pb from './post_pb';
import * as user_pb from './user_pb';


export class PostAppreciation extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): PostAppreciation;
  hasModel(): boolean;
  clearModel(): PostAppreciation;

  getPostId(): number;
  setPostId(value: number): PostAppreciation;

  getUserId(): number;
  setUserId(value: number): PostAppreciation;

  getAmount(): number;
  setAmount(value: number): PostAppreciation;

  getPost(): post_pb.Post | undefined;
  setPost(value?: post_pb.Post): PostAppreciation;
  hasPost(): boolean;
  clearPost(): PostAppreciation;

  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): PostAppreciation;
  hasUser(): boolean;
  clearUser(): PostAppreciation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAppreciation.AsObject;
  static toObject(includeInstance: boolean, msg: PostAppreciation): PostAppreciation.AsObject;
  static serializeBinaryToWriter(message: PostAppreciation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAppreciation;
  static deserializeBinaryFromReader(message: PostAppreciation, reader: jspb.BinaryReader): PostAppreciation;
}

export namespace PostAppreciation {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    postId: number,
    userId: number,
    amount: number,
    post?: post_pb.Post.AsObject,
    user?: user_pb.User.AsObject,
  }
}

