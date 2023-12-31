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
// @generated from file google/appengine/v1/appengine.proto (package google.appengine.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { FieldMask, Message, proto3 } from "@bufbuild/protobuf";
import { Service } from "./service_pb.js";
import { Version } from "./version_pb.js";
import { Instance } from "./instance_pb.js";

/**
 * Fields that should be returned when [Version][google.appengine.v1.Version] resources
 * are retreived.
 *
 * @generated from enum google.appengine.v1.VersionView
 */
export enum VersionView {
  /**
   * Basic version information including scaling and inbound services,
   * but not detailed deployment information.
   *
   * @generated from enum value: BASIC = 0;
   */
  BASIC = 0,

  /**
   * The information from `BASIC`, plus detailed information about the
   * deployment. This format is required when creating resources, but
   * is not returned in `Get` or `List` by default.
   *
   * @generated from enum value: FULL = 1;
   */
  FULL = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(VersionView)
proto3.util.setEnumType(VersionView, "google.appengine.v1.VersionView", [
  { no: 0, name: "BASIC" },
  { no: 1, name: "FULL" },
]);

/**
 * Request message for `Applications.GetApplication`.
 *
 * @generated from message google.appengine.v1.GetApplicationRequest
 */
export class GetApplicationRequest extends Message<GetApplicationRequest> {
  /**
   * Name of the Application resource to get. Example: `apps/myapp`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetApplicationRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.GetApplicationRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetApplicationRequest {
    return new GetApplicationRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetApplicationRequest {
    return new GetApplicationRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetApplicationRequest {
    return new GetApplicationRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetApplicationRequest | PlainMessage<GetApplicationRequest> | undefined, b: GetApplicationRequest | PlainMessage<GetApplicationRequest> | undefined): boolean {
    return proto3.util.equals(GetApplicationRequest, a, b);
  }
}

/**
 * Request message for 'Applications.RepairApplication'.
 *
 * @generated from message google.appengine.v1.RepairApplicationRequest
 */
export class RepairApplicationRequest extends Message<RepairApplicationRequest> {
  /**
   * Name of the application to repair. Example: `apps/myapp`
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<RepairApplicationRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.RepairApplicationRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RepairApplicationRequest {
    return new RepairApplicationRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RepairApplicationRequest {
    return new RepairApplicationRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RepairApplicationRequest {
    return new RepairApplicationRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RepairApplicationRequest | PlainMessage<RepairApplicationRequest> | undefined, b: RepairApplicationRequest | PlainMessage<RepairApplicationRequest> | undefined): boolean {
    return proto3.util.equals(RepairApplicationRequest, a, b);
  }
}

/**
 * Request message for `Services.ListServices`.
 *
 * @generated from message google.appengine.v1.ListServicesRequest
 */
export class ListServicesRequest extends Message<ListServicesRequest> {
  /**
   * Name of the parent Application resource. Example: `apps/myapp`.
   *
   * @generated from field: string parent = 1;
   */
  parent = "";

  /**
   * Maximum results to return per page.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize = 0;

  /**
   * Continuation token for fetching the next page of results.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListServicesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.ListServicesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "parent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListServicesRequest {
    return new ListServicesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListServicesRequest {
    return new ListServicesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListServicesRequest {
    return new ListServicesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListServicesRequest | PlainMessage<ListServicesRequest> | undefined, b: ListServicesRequest | PlainMessage<ListServicesRequest> | undefined): boolean {
    return proto3.util.equals(ListServicesRequest, a, b);
  }
}

/**
 * Response message for `Services.ListServices`.
 *
 * @generated from message google.appengine.v1.ListServicesResponse
 */
export class ListServicesResponse extends Message<ListServicesResponse> {
  /**
   * The services belonging to the requested application.
   *
   * @generated from field: repeated google.appengine.v1.Service services = 1;
   */
  services: Service[] = [];

  /**
   * Continuation token for fetching the next page of results.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListServicesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.ListServicesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "services", kind: "message", T: Service, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListServicesResponse {
    return new ListServicesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListServicesResponse {
    return new ListServicesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListServicesResponse {
    return new ListServicesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListServicesResponse | PlainMessage<ListServicesResponse> | undefined, b: ListServicesResponse | PlainMessage<ListServicesResponse> | undefined): boolean {
    return proto3.util.equals(ListServicesResponse, a, b);
  }
}

/**
 * Request message for `Services.GetService`.
 *
 * @generated from message google.appengine.v1.GetServiceRequest
 */
export class GetServiceRequest extends Message<GetServiceRequest> {
  /**
   * Name of the resource requested. Example: `apps/myapp/services/default`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetServiceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.GetServiceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetServiceRequest {
    return new GetServiceRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetServiceRequest {
    return new GetServiceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetServiceRequest {
    return new GetServiceRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetServiceRequest | PlainMessage<GetServiceRequest> | undefined, b: GetServiceRequest | PlainMessage<GetServiceRequest> | undefined): boolean {
    return proto3.util.equals(GetServiceRequest, a, b);
  }
}

/**
 * Request message for `Services.UpdateService`.
 *
 * @generated from message google.appengine.v1.UpdateServiceRequest
 */
export class UpdateServiceRequest extends Message<UpdateServiceRequest> {
  /**
   * Name of the resource to update. Example: `apps/myapp/services/default`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * A Service resource containing the updated service. Only fields set in the
   * field mask will be updated.
   *
   * @generated from field: google.appengine.v1.Service service = 2;
   */
  service?: Service;

  /**
   * Standard field mask for the set of fields to be updated.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 3;
   */
  updateMask?: FieldMask;

  /**
   * Set to `true` to gradually shift traffic from one version to another
   * single version. By default, traffic is shifted immediately.
   * For gradual traffic migration, the target version
   * must be located within instances that are configured for both
   * [warmup requests](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#inboundservicetype)
   * and
   * [automatic scaling](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#automaticscaling).
   * You must specify the
   * [`shardBy`](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services#shardby)
   * field in the Service resource. Gradual traffic migration is not
   * supported in the App Engine flexible environment. For examples, see
   * [Migrating and Splitting Traffic](https://cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic).
   *
   * @generated from field: bool migrate_traffic = 4;
   */
  migrateTraffic = false;

  constructor(data?: PartialMessage<UpdateServiceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.UpdateServiceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "service", kind: "message", T: Service },
    { no: 3, name: "update_mask", kind: "message", T: FieldMask },
    { no: 4, name: "migrate_traffic", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateServiceRequest {
    return new UpdateServiceRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateServiceRequest {
    return new UpdateServiceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateServiceRequest {
    return new UpdateServiceRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateServiceRequest | PlainMessage<UpdateServiceRequest> | undefined, b: UpdateServiceRequest | PlainMessage<UpdateServiceRequest> | undefined): boolean {
    return proto3.util.equals(UpdateServiceRequest, a, b);
  }
}

/**
 * Request message for `Services.DeleteService`.
 *
 * @generated from message google.appengine.v1.DeleteServiceRequest
 */
export class DeleteServiceRequest extends Message<DeleteServiceRequest> {
  /**
   * Name of the resource requested. Example: `apps/myapp/services/default`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<DeleteServiceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.DeleteServiceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteServiceRequest {
    return new DeleteServiceRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteServiceRequest {
    return new DeleteServiceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteServiceRequest {
    return new DeleteServiceRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteServiceRequest | PlainMessage<DeleteServiceRequest> | undefined, b: DeleteServiceRequest | PlainMessage<DeleteServiceRequest> | undefined): boolean {
    return proto3.util.equals(DeleteServiceRequest, a, b);
  }
}

/**
 * Request message for `Versions.ListVersions`.
 *
 * @generated from message google.appengine.v1.ListVersionsRequest
 */
export class ListVersionsRequest extends Message<ListVersionsRequest> {
  /**
   * Name of the parent Service resource. Example:
   * `apps/myapp/services/default`.
   *
   * @generated from field: string parent = 1;
   */
  parent = "";

  /**
   * Controls the set of fields returned in the `List` response.
   *
   * @generated from field: google.appengine.v1.VersionView view = 2;
   */
  view = VersionView.BASIC;

  /**
   * Maximum results to return per page.
   *
   * @generated from field: int32 page_size = 3;
   */
  pageSize = 0;

  /**
   * Continuation token for fetching the next page of results.
   *
   * @generated from field: string page_token = 4;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListVersionsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.ListVersionsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "parent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "view", kind: "enum", T: proto3.getEnumType(VersionView) },
    { no: 3, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListVersionsRequest {
    return new ListVersionsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListVersionsRequest {
    return new ListVersionsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListVersionsRequest {
    return new ListVersionsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListVersionsRequest | PlainMessage<ListVersionsRequest> | undefined, b: ListVersionsRequest | PlainMessage<ListVersionsRequest> | undefined): boolean {
    return proto3.util.equals(ListVersionsRequest, a, b);
  }
}

/**
 * Response message for `Versions.ListVersions`.
 *
 * @generated from message google.appengine.v1.ListVersionsResponse
 */
export class ListVersionsResponse extends Message<ListVersionsResponse> {
  /**
   * The versions belonging to the requested service.
   *
   * @generated from field: repeated google.appengine.v1.Version versions = 1;
   */
  versions: Version[] = [];

  /**
   * Continuation token for fetching the next page of results.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListVersionsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.ListVersionsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "versions", kind: "message", T: Version, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListVersionsResponse {
    return new ListVersionsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListVersionsResponse {
    return new ListVersionsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListVersionsResponse {
    return new ListVersionsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListVersionsResponse | PlainMessage<ListVersionsResponse> | undefined, b: ListVersionsResponse | PlainMessage<ListVersionsResponse> | undefined): boolean {
    return proto3.util.equals(ListVersionsResponse, a, b);
  }
}

/**
 * Request message for `Versions.GetVersion`.
 *
 * @generated from message google.appengine.v1.GetVersionRequest
 */
export class GetVersionRequest extends Message<GetVersionRequest> {
  /**
   * Name of the resource requested. Example:
   * `apps/myapp/services/default/versions/v1`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * Controls the set of fields returned in the `Get` response.
   *
   * @generated from field: google.appengine.v1.VersionView view = 2;
   */
  view = VersionView.BASIC;

  constructor(data?: PartialMessage<GetVersionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.GetVersionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "view", kind: "enum", T: proto3.getEnumType(VersionView) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetVersionRequest {
    return new GetVersionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetVersionRequest {
    return new GetVersionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetVersionRequest {
    return new GetVersionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetVersionRequest | PlainMessage<GetVersionRequest> | undefined, b: GetVersionRequest | PlainMessage<GetVersionRequest> | undefined): boolean {
    return proto3.util.equals(GetVersionRequest, a, b);
  }
}

/**
 * Request message for `Versions.CreateVersion`.
 *
 * @generated from message google.appengine.v1.CreateVersionRequest
 */
export class CreateVersionRequest extends Message<CreateVersionRequest> {
  /**
   * Name of the parent resource to create this version under. Example:
   * `apps/myapp/services/default`.
   *
   * @generated from field: string parent = 1;
   */
  parent = "";

  /**
   * Application deployment configuration.
   *
   * @generated from field: google.appengine.v1.Version version = 2;
   */
  version?: Version;

  constructor(data?: PartialMessage<CreateVersionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.CreateVersionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "parent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "version", kind: "message", T: Version },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateVersionRequest {
    return new CreateVersionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateVersionRequest {
    return new CreateVersionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateVersionRequest {
    return new CreateVersionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateVersionRequest | PlainMessage<CreateVersionRequest> | undefined, b: CreateVersionRequest | PlainMessage<CreateVersionRequest> | undefined): boolean {
    return proto3.util.equals(CreateVersionRequest, a, b);
  }
}

/**
 * Request message for `Versions.UpdateVersion`.
 *
 * @generated from message google.appengine.v1.UpdateVersionRequest
 */
export class UpdateVersionRequest extends Message<UpdateVersionRequest> {
  /**
   * Name of the resource to update. Example:
   * `apps/myapp/services/default/versions/1`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * A Version containing the updated resource. Only fields set in the field
   * mask will be updated.
   *
   * @generated from field: google.appengine.v1.Version version = 2;
   */
  version?: Version;

  /**
   * Standard field mask for the set of fields to be updated.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 3;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateVersionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.UpdateVersionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "version", kind: "message", T: Version },
    { no: 3, name: "update_mask", kind: "message", T: FieldMask },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateVersionRequest {
    return new UpdateVersionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateVersionRequest {
    return new UpdateVersionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateVersionRequest {
    return new UpdateVersionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateVersionRequest | PlainMessage<UpdateVersionRequest> | undefined, b: UpdateVersionRequest | PlainMessage<UpdateVersionRequest> | undefined): boolean {
    return proto3.util.equals(UpdateVersionRequest, a, b);
  }
}

/**
 * Request message for `Versions.DeleteVersion`.
 *
 * @generated from message google.appengine.v1.DeleteVersionRequest
 */
export class DeleteVersionRequest extends Message<DeleteVersionRequest> {
  /**
   * Name of the resource requested. Example:
   * `apps/myapp/services/default/versions/v1`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<DeleteVersionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.DeleteVersionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteVersionRequest {
    return new DeleteVersionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteVersionRequest {
    return new DeleteVersionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteVersionRequest {
    return new DeleteVersionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteVersionRequest | PlainMessage<DeleteVersionRequest> | undefined, b: DeleteVersionRequest | PlainMessage<DeleteVersionRequest> | undefined): boolean {
    return proto3.util.equals(DeleteVersionRequest, a, b);
  }
}

/**
 * Request message for `Instances.ListInstances`.
 *
 * @generated from message google.appengine.v1.ListInstancesRequest
 */
export class ListInstancesRequest extends Message<ListInstancesRequest> {
  /**
   * Name of the parent Version resource. Example:
   * `apps/myapp/services/default/versions/v1`.
   *
   * @generated from field: string parent = 1;
   */
  parent = "";

  /**
   * Maximum results to return per page.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize = 0;

  /**
   * Continuation token for fetching the next page of results.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListInstancesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.ListInstancesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "parent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListInstancesRequest {
    return new ListInstancesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListInstancesRequest {
    return new ListInstancesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListInstancesRequest {
    return new ListInstancesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListInstancesRequest | PlainMessage<ListInstancesRequest> | undefined, b: ListInstancesRequest | PlainMessage<ListInstancesRequest> | undefined): boolean {
    return proto3.util.equals(ListInstancesRequest, a, b);
  }
}

/**
 * Response message for `Instances.ListInstances`.
 *
 * @generated from message google.appengine.v1.ListInstancesResponse
 */
export class ListInstancesResponse extends Message<ListInstancesResponse> {
  /**
   * The instances belonging to the requested version.
   *
   * @generated from field: repeated google.appengine.v1.Instance instances = 1;
   */
  instances: Instance[] = [];

  /**
   * Continuation token for fetching the next page of results.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListInstancesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.ListInstancesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "instances", kind: "message", T: Instance, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListInstancesResponse {
    return new ListInstancesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListInstancesResponse {
    return new ListInstancesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListInstancesResponse {
    return new ListInstancesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListInstancesResponse | PlainMessage<ListInstancesResponse> | undefined, b: ListInstancesResponse | PlainMessage<ListInstancesResponse> | undefined): boolean {
    return proto3.util.equals(ListInstancesResponse, a, b);
  }
}

/**
 * Request message for `Instances.GetInstance`.
 *
 * @generated from message google.appengine.v1.GetInstanceRequest
 */
export class GetInstanceRequest extends Message<GetInstanceRequest> {
  /**
   * Name of the resource requested. Example:
   * `apps/myapp/services/default/versions/v1/instances/instance-1`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetInstanceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.GetInstanceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetInstanceRequest {
    return new GetInstanceRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetInstanceRequest {
    return new GetInstanceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetInstanceRequest {
    return new GetInstanceRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetInstanceRequest | PlainMessage<GetInstanceRequest> | undefined, b: GetInstanceRequest | PlainMessage<GetInstanceRequest> | undefined): boolean {
    return proto3.util.equals(GetInstanceRequest, a, b);
  }
}

/**
 * Request message for `Instances.DeleteInstance`.
 *
 * @generated from message google.appengine.v1.DeleteInstanceRequest
 */
export class DeleteInstanceRequest extends Message<DeleteInstanceRequest> {
  /**
   * Name of the resource requested. Example:
   * `apps/myapp/services/default/versions/v1/instances/instance-1`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<DeleteInstanceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.DeleteInstanceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteInstanceRequest {
    return new DeleteInstanceRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteInstanceRequest {
    return new DeleteInstanceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteInstanceRequest {
    return new DeleteInstanceRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteInstanceRequest | PlainMessage<DeleteInstanceRequest> | undefined, b: DeleteInstanceRequest | PlainMessage<DeleteInstanceRequest> | undefined): boolean {
    return proto3.util.equals(DeleteInstanceRequest, a, b);
  }
}

/**
 * Request message for `Instances.DebugInstance`.
 *
 * @generated from message google.appengine.v1.DebugInstanceRequest
 */
export class DebugInstanceRequest extends Message<DebugInstanceRequest> {
  /**
   * Name of the resource requested. Example:
   * `apps/myapp/services/default/versions/v1/instances/instance-1`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<DebugInstanceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.DebugInstanceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebugInstanceRequest {
    return new DebugInstanceRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebugInstanceRequest {
    return new DebugInstanceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebugInstanceRequest {
    return new DebugInstanceRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DebugInstanceRequest | PlainMessage<DebugInstanceRequest> | undefined, b: DebugInstanceRequest | PlainMessage<DebugInstanceRequest> | undefined): boolean {
    return proto3.util.equals(DebugInstanceRequest, a, b);
  }
}

