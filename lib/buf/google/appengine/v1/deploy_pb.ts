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
// @generated from file google/appengine/v1/deploy.proto (package google.appengine.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Code and application artifacts used to deploy a version to App Engine.
 *
 * @generated from message google.appengine.v1.Deployment
 */
export class Deployment extends Message<Deployment> {
  /**
   * Manifest of the files stored in Google Cloud Storage that are included
   * as part of this version. All files must be readable using the
   * credentials supplied with this call.
   *
   * @generated from field: map<string, google.appengine.v1.FileInfo> files = 1;
   */
  files: { [key: string]: FileInfo } = {};

  /**
   * A Docker image that App Engine uses to run the version.
   * Only applicable for instances in App Engine flexible environment.
   *
   * @generated from field: google.appengine.v1.ContainerInfo container = 2;
   */
  container?: ContainerInfo;

  /**
   * The zip file for this deployment, if this is a zip deployment.
   *
   * @generated from field: google.appengine.v1.ZipInfo zip = 3;
   */
  zip?: ZipInfo;

  constructor(data?: PartialMessage<Deployment>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.Deployment";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "files", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: FileInfo} },
    { no: 2, name: "container", kind: "message", T: ContainerInfo },
    { no: 3, name: "zip", kind: "message", T: ZipInfo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Deployment {
    return new Deployment().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Deployment {
    return new Deployment().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Deployment {
    return new Deployment().fromJsonString(jsonString, options);
  }

  static equals(a: Deployment | PlainMessage<Deployment> | undefined, b: Deployment | PlainMessage<Deployment> | undefined): boolean {
    return proto3.util.equals(Deployment, a, b);
  }
}

/**
 * Single source file that is part of the version to be deployed. Each source
 * file that is deployed must be specified separately.
 *
 * @generated from message google.appengine.v1.FileInfo
 */
export class FileInfo extends Message<FileInfo> {
  /**
   * URL source to use to fetch this file. Must be a URL to a resource in
   * Google Cloud Storage in the form
   * 'http(s)://storage.googleapis.com/\<bucket\>/\<object\>'.
   *
   * @generated from field: string source_url = 1;
   */
  sourceUrl = "";

  /**
   * The SHA1 hash of the file, in hex.
   *
   * @generated from field: string sha1_sum = 2;
   */
  sha1Sum = "";

  /**
   * The MIME type of the file.
   *
   * Defaults to the value from Google Cloud Storage.
   *
   * @generated from field: string mime_type = 3;
   */
  mimeType = "";

  constructor(data?: PartialMessage<FileInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.FileInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "source_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "sha1_sum", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "mime_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FileInfo {
    return new FileInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FileInfo {
    return new FileInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FileInfo {
    return new FileInfo().fromJsonString(jsonString, options);
  }

  static equals(a: FileInfo | PlainMessage<FileInfo> | undefined, b: FileInfo | PlainMessage<FileInfo> | undefined): boolean {
    return proto3.util.equals(FileInfo, a, b);
  }
}

/**
 * Docker image that is used to start a VM container for the version you
 * deploy.
 *
 * @generated from message google.appengine.v1.ContainerInfo
 */
export class ContainerInfo extends Message<ContainerInfo> {
  /**
   * URI to the hosted container image in a Docker repository. The URI must be
   * fully qualified and include a tag or digest.
   * Examples: "gcr.io/my-project/image:tag" or "gcr.io/my-project/image@digest"
   *
   * @generated from field: string image = 1;
   */
  image = "";

  constructor(data?: PartialMessage<ContainerInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.ContainerInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "image", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContainerInfo {
    return new ContainerInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContainerInfo {
    return new ContainerInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContainerInfo {
    return new ContainerInfo().fromJsonString(jsonString, options);
  }

  static equals(a: ContainerInfo | PlainMessage<ContainerInfo> | undefined, b: ContainerInfo | PlainMessage<ContainerInfo> | undefined): boolean {
    return proto3.util.equals(ContainerInfo, a, b);
  }
}

/**
 * @generated from message google.appengine.v1.ZipInfo
 */
export class ZipInfo extends Message<ZipInfo> {
  /**
   * URL of the zip file to deploy from. Must be a URL to a resource in
   * Google Cloud Storage in the form
   * 'http(s)://storage.googleapis.com/\<bucket\>/\<object\>'.
   *
   * @generated from field: string source_url = 3;
   */
  sourceUrl = "";

  /**
   * An estimate of the number of files in a zip for a zip deployment.
   * If set, must be greater than or equal to the actual number of files.
   * Used for optimizing performance; if not provided, deployment may be slow.
   *
   * @generated from field: int32 files_count = 4;
   */
  filesCount = 0;

  constructor(data?: PartialMessage<ZipInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.ZipInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 3, name: "source_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "files_count", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ZipInfo {
    return new ZipInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ZipInfo {
    return new ZipInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ZipInfo {
    return new ZipInfo().fromJsonString(jsonString, options);
  }

  static equals(a: ZipInfo | PlainMessage<ZipInfo> | undefined, b: ZipInfo | PlainMessage<ZipInfo> | undefined): boolean {
    return proto3.util.equals(ZipInfo, a, b);
  }
}

