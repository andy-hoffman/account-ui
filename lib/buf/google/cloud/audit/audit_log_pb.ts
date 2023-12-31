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
// @generated from file google/cloud/audit/audit_log.proto (package google.cloud.audit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, protoInt64, Struct } from "@bufbuild/protobuf";
import { Status } from "../../rpc/status_pb.js";

/**
 * Common audit log format for Google Cloud Platform API operations.
 *
 * @generated from message google.cloud.audit.AuditLog
 */
export class AuditLog extends Message<AuditLog> {
  /**
   * The name of the API service performing the operation. For example,
   * `"datastore.googleapis.com"`.
   *
   * @generated from field: string service_name = 7;
   */
  serviceName = "";

  /**
   * The name of the service method or operation.
   * For API calls, this should be the name of the API method.
   * For example,
   *
   *     "google.datastore.v1.Datastore.RunQuery"
   *     "google.logging.v1.LoggingService.DeleteLog"
   *
   * @generated from field: string method_name = 8;
   */
  methodName = "";

  /**
   * The resource or collection that is the target of the operation.
   * The name is a scheme-less URI, not including the API service name.
   * For example:
   *
   *     "shelves/SHELF_ID/books"
   *     "shelves/SHELF_ID/books/BOOK_ID"
   *
   * @generated from field: string resource_name = 11;
   */
  resourceName = "";

  /**
   * The number of items returned from a List or Query API method,
   * if applicable.
   *
   * @generated from field: int64 num_response_items = 12;
   */
  numResponseItems = protoInt64.zero;

  /**
   * The status of the overall operation.
   *
   * @generated from field: google.rpc.Status status = 2;
   */
  status?: Status;

  /**
   * Authentication information.
   *
   * @generated from field: google.cloud.audit.AuthenticationInfo authentication_info = 3;
   */
  authenticationInfo?: AuthenticationInfo;

  /**
   * Authorization information. If there are multiple
   * resources or permissions involved, then there is
   * one AuthorizationInfo element for each {resource, permission} tuple.
   *
   * @generated from field: repeated google.cloud.audit.AuthorizationInfo authorization_info = 9;
   */
  authorizationInfo: AuthorizationInfo[] = [];

  /**
   * Metadata about the operation.
   *
   * @generated from field: google.cloud.audit.RequestMetadata request_metadata = 4;
   */
  requestMetadata?: RequestMetadata;

  /**
   * The operation request. This may not include all request parameters,
   * such as those that are too large, privacy-sensitive, or duplicated
   * elsewhere in the log record.
   * It should never include user-generated data, such as file contents.
   * When the JSON object represented here has a proto equivalent, the proto
   * name will be indicated in the `@type` property.
   *
   * @generated from field: google.protobuf.Struct request = 16;
   */
  request?: Struct;

  /**
   * The operation response. This may not include all response elements,
   * such as those that are too large, privacy-sensitive, or duplicated
   * elsewhere in the log record.
   * It should never include user-generated data, such as file contents.
   * When the JSON object represented here has a proto equivalent, the proto
   * name will be indicated in the `@type` property.
   *
   * @generated from field: google.protobuf.Struct response = 17;
   */
  response?: Struct;

  /**
   * Other service-specific data about the request, response, and other
   * activities.
   *
   * @generated from field: google.protobuf.Any service_data = 15;
   */
  serviceData?: Any;

  constructor(data?: PartialMessage<AuditLog>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.audit.AuditLog";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 7, name: "service_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "method_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "resource_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "num_response_items", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "status", kind: "message", T: Status },
    { no: 3, name: "authentication_info", kind: "message", T: AuthenticationInfo },
    { no: 9, name: "authorization_info", kind: "message", T: AuthorizationInfo, repeated: true },
    { no: 4, name: "request_metadata", kind: "message", T: RequestMetadata },
    { no: 16, name: "request", kind: "message", T: Struct },
    { no: 17, name: "response", kind: "message", T: Struct },
    { no: 15, name: "service_data", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditLog {
    return new AuditLog().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditLog {
    return new AuditLog().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditLog {
    return new AuditLog().fromJsonString(jsonString, options);
  }

  static equals(a: AuditLog | PlainMessage<AuditLog> | undefined, b: AuditLog | PlainMessage<AuditLog> | undefined): boolean {
    return proto3.util.equals(AuditLog, a, b);
  }
}

/**
 * Authentication information for the operation.
 *
 * @generated from message google.cloud.audit.AuthenticationInfo
 */
export class AuthenticationInfo extends Message<AuthenticationInfo> {
  /**
   * The email address of the authenticated user making the request.
   *
   * @generated from field: string principal_email = 1;
   */
  principalEmail = "";

  constructor(data?: PartialMessage<AuthenticationInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.audit.AuthenticationInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "principal_email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthenticationInfo {
    return new AuthenticationInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthenticationInfo {
    return new AuthenticationInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthenticationInfo {
    return new AuthenticationInfo().fromJsonString(jsonString, options);
  }

  static equals(a: AuthenticationInfo | PlainMessage<AuthenticationInfo> | undefined, b: AuthenticationInfo | PlainMessage<AuthenticationInfo> | undefined): boolean {
    return proto3.util.equals(AuthenticationInfo, a, b);
  }
}

/**
 * Authorization information for the operation.
 *
 * @generated from message google.cloud.audit.AuthorizationInfo
 */
export class AuthorizationInfo extends Message<AuthorizationInfo> {
  /**
   * The resource being accessed, as a REST-style string. For example:
   *
   *     bigquery.googlapis.com/projects/PROJECTID/datasets/DATASETID
   *
   * @generated from field: string resource = 1;
   */
  resource = "";

  /**
   * The required IAM permission.
   *
   * @generated from field: string permission = 2;
   */
  permission = "";

  /**
   * Whether or not authorization for `resource` and `permission`
   * was granted.
   *
   * @generated from field: bool granted = 3;
   */
  granted = false;

  constructor(data?: PartialMessage<AuthorizationInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.audit.AuthorizationInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "resource", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "permission", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "granted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthorizationInfo {
    return new AuthorizationInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthorizationInfo {
    return new AuthorizationInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthorizationInfo {
    return new AuthorizationInfo().fromJsonString(jsonString, options);
  }

  static equals(a: AuthorizationInfo | PlainMessage<AuthorizationInfo> | undefined, b: AuthorizationInfo | PlainMessage<AuthorizationInfo> | undefined): boolean {
    return proto3.util.equals(AuthorizationInfo, a, b);
  }
}

/**
 * Metadata about the request.
 *
 * @generated from message google.cloud.audit.RequestMetadata
 */
export class RequestMetadata extends Message<RequestMetadata> {
  /**
   * The IP address of the caller.
   *
   * @generated from field: string caller_ip = 1;
   */
  callerIp = "";

  /**
   * The user agent of the caller.
   * This information is not authenticated and should be treated accordingly.
   * For example:
   *
   * +   `google-api-python-client/1.4.0`:
   *     The request was made by the Google API client for Python.
   * +   `Cloud SDK Command Line Tool apitools-client/1.0 gcloud/0.9.62`:
   *     The request was made by the Google Cloud SDK CLI (gcloud).
   * +   `AppEngine-Google; (+http://code.google.com/appengine; appid: s~my-project`:
   *     The request was made from the `my-project` App Engine app.
   *
   * @generated from field: string caller_supplied_user_agent = 2;
   */
  callerSuppliedUserAgent = "";

  constructor(data?: PartialMessage<RequestMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.audit.RequestMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "caller_ip", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "caller_supplied_user_agent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestMetadata {
    return new RequestMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestMetadata {
    return new RequestMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestMetadata {
    return new RequestMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: RequestMetadata | PlainMessage<RequestMetadata> | undefined, b: RequestMetadata | PlainMessage<RequestMetadata> | undefined): boolean {
    return proto3.util.equals(RequestMetadata, a, b);
  }
}

