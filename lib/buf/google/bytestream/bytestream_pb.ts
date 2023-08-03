// Copyright 2016 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file google/bytestream/bytestream.proto (package google.bytestream, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Request object for ByteStream.Read.
 *
 * @generated from message google.bytestream.ReadRequest
 */
export class ReadRequest extends Message<ReadRequest> {
  /**
   * The name of the resource to read.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName = "";

  /**
   * The offset for the first byte to return in the read, relative to the start
   * of the resource.
   *
   * A `read_offset` that is negative or greater than the size of the resource
   * will cause an `OUT_OF_RANGE` error.
   *
   * @generated from field: int64 read_offset = 2;
   */
  readOffset = protoInt64.zero;

  /**
   * The maximum number of `data` bytes the server is allowed to return in the
   * sum of all `ReadResponse` messages. A `read_limit` of zero indicates that
   * there is no limit, and a negative `read_limit` will cause an error.
   *
   * If the stream returns fewer bytes than allowed by the `read_limit` and no
   * error occurred, the stream includes all data from the `read_offset` to the
   * end of the resource.
   *
   * @generated from field: int64 read_limit = 3;
   */
  readLimit = protoInt64.zero;

  constructor(data?: PartialMessage<ReadRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.bytestream.ReadRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "resource_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "read_offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "read_limit", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReadRequest {
    return new ReadRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReadRequest {
    return new ReadRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReadRequest {
    return new ReadRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ReadRequest | PlainMessage<ReadRequest> | undefined, b: ReadRequest | PlainMessage<ReadRequest> | undefined): boolean {
    return proto3.util.equals(ReadRequest, a, b);
  }
}

/**
 * Response object for ByteStream.Read.
 *
 * @generated from message google.bytestream.ReadResponse
 */
export class ReadResponse extends Message<ReadResponse> {
  /**
   * A portion of the data for the resource. The service **may** leave `data`
   * empty for any given `ReadResponse`. This enables the service to inform the
   * client that the request is still live while it is running an operation to
   * generate more data.
   *
   * @generated from field: bytes data = 10;
   */
  data = new Uint8Array(0);

  constructor(data?: PartialMessage<ReadResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.bytestream.ReadResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 10, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReadResponse {
    return new ReadResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReadResponse {
    return new ReadResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReadResponse {
    return new ReadResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ReadResponse | PlainMessage<ReadResponse> | undefined, b: ReadResponse | PlainMessage<ReadResponse> | undefined): boolean {
    return proto3.util.equals(ReadResponse, a, b);
  }
}

/**
 * Request object for ByteStream.Write.
 *
 * @generated from message google.bytestream.WriteRequest
 */
export class WriteRequest extends Message<WriteRequest> {
  /**
   * The name of the resource to write. This **must** be set on the first
   * `WriteRequest` of each `Write()` action. If it is set on subsequent calls,
   * it **must** match the value of the first request.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName = "";

  /**
   * The offset from the beginning of the resource at which the data should be
   * written. It is required on all `WriteRequest`s.
   *
   * In the first `WriteRequest` of a `Write()` action, it indicates
   * the initial offset for the `Write()` call. The value **must** be equal to
   * the `committed_size` that a call to `QueryWriteStatus()` would return.
   *
   * On subsequent calls, this value **must** be set and **must** be equal to
   * the sum of the first `write_offset` and the sizes of all `data` bundles
   * sent previously on this stream.
   *
   * An incorrect value will cause an error.
   *
   * @generated from field: int64 write_offset = 2;
   */
  writeOffset = protoInt64.zero;

  /**
   * If `true`, this indicates that the write is complete. Sending any
   * `WriteRequest`s subsequent to one in which `finish_write` is `true` will
   * cause an error.
   *
   * @generated from field: bool finish_write = 3;
   */
  finishWrite = false;

  /**
   * A portion of the data for the resource. The client **may** leave `data`
   * empty for any given `WriteRequest`. This enables the client to inform the
   * service that the request is still live while it is running an operation to
   * generate more data.
   *
   * @generated from field: bytes data = 10;
   */
  data = new Uint8Array(0);

  constructor(data?: PartialMessage<WriteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.bytestream.WriteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "resource_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "write_offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "finish_write", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WriteRequest {
    return new WriteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WriteRequest {
    return new WriteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WriteRequest {
    return new WriteRequest().fromJsonString(jsonString, options);
  }

  static equals(a: WriteRequest | PlainMessage<WriteRequest> | undefined, b: WriteRequest | PlainMessage<WriteRequest> | undefined): boolean {
    return proto3.util.equals(WriteRequest, a, b);
  }
}

/**
 * Response object for ByteStream.Write.
 *
 * @generated from message google.bytestream.WriteResponse
 */
export class WriteResponse extends Message<WriteResponse> {
  /**
   * The number of bytes that have been processed for the given resource.
   *
   * @generated from field: int64 committed_size = 1;
   */
  committedSize = protoInt64.zero;

  constructor(data?: PartialMessage<WriteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.bytestream.WriteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "committed_size", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WriteResponse {
    return new WriteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WriteResponse {
    return new WriteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WriteResponse {
    return new WriteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: WriteResponse | PlainMessage<WriteResponse> | undefined, b: WriteResponse | PlainMessage<WriteResponse> | undefined): boolean {
    return proto3.util.equals(WriteResponse, a, b);
  }
}

/**
 * Request object for ByteStream.QueryWriteStatus.
 *
 * @generated from message google.bytestream.QueryWriteStatusRequest
 */
export class QueryWriteStatusRequest extends Message<QueryWriteStatusRequest> {
  /**
   * The name of the resource whose write status is being requested.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName = "";

  constructor(data?: PartialMessage<QueryWriteStatusRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.bytestream.QueryWriteStatusRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "resource_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryWriteStatusRequest {
    return new QueryWriteStatusRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryWriteStatusRequest {
    return new QueryWriteStatusRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryWriteStatusRequest {
    return new QueryWriteStatusRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryWriteStatusRequest | PlainMessage<QueryWriteStatusRequest> | undefined, b: QueryWriteStatusRequest | PlainMessage<QueryWriteStatusRequest> | undefined): boolean {
    return proto3.util.equals(QueryWriteStatusRequest, a, b);
  }
}

/**
 * Response object for ByteStream.QueryWriteStatus.
 *
 * @generated from message google.bytestream.QueryWriteStatusResponse
 */
export class QueryWriteStatusResponse extends Message<QueryWriteStatusResponse> {
  /**
   * The number of bytes that have been processed for the given resource.
   *
   * @generated from field: int64 committed_size = 1;
   */
  committedSize = protoInt64.zero;

  /**
   * `complete` is `true` only if the client has sent a `WriteRequest` with
   * `finish_write` set to true, and the server has processed that request.
   *
   * @generated from field: bool complete = 2;
   */
  complete = false;

  constructor(data?: PartialMessage<QueryWriteStatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.bytestream.QueryWriteStatusResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "committed_size", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "complete", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryWriteStatusResponse {
    return new QueryWriteStatusResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryWriteStatusResponse {
    return new QueryWriteStatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryWriteStatusResponse {
    return new QueryWriteStatusResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryWriteStatusResponse | PlainMessage<QueryWriteStatusResponse> | undefined, b: QueryWriteStatusResponse | PlainMessage<QueryWriteStatusResponse> | undefined): boolean {
    return proto3.util.equals(QueryWriteStatusResponse, a, b);
  }
}

