import * as jspb from 'google-protobuf'

import * as model_pb from './model_pb';


export class Report extends jspb.Message {
  getModel(): model_pb.Model | undefined;
  setModel(value?: model_pb.Model): Report;
  hasModel(): boolean;
  clearModel(): Report;

  getUserId(): number;
  setUserId(value: number): Report;

  getTarget(): ReportTarget;
  setTarget(value: ReportTarget): Report;

  getType(): ReportType;
  setType(value: ReportType): Report;

  getTargetId(): number;
  setTargetId(value: number): Report;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Report.AsObject;
  static toObject(includeInstance: boolean, msg: Report): Report.AsObject;
  static serializeBinaryToWriter(message: Report, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Report;
  static deserializeBinaryFromReader(message: Report, reader: jspb.BinaryReader): Report;
}

export namespace Report {
  export type AsObject = {
    model?: model_pb.Model.AsObject,
    userId: number,
    target: ReportTarget,
    type: ReportType,
    targetId: number,
  }
}

export enum ReportTarget { 
  REPORTTARGETTHREAD = 0,
  REPORTTARGETPOST = 1,
}
export enum ReportType { 
  REPORTTYPENORMAL = 0,
  REPORTTYPEPOLITICS = 1,
  REPORTTYPEPORN = 2,
  REPORTTYPECONTACT = 3,
  REPORTTYPEABUSE = 4,
  REPORTTYPEKY = 5,
}
