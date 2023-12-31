// Copyright 2017 Google Inc.
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
// @generated from file google/api/servicecontrol/v1/check_error.proto (package google.api.servicecontrol.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Defines the errors to be returned in
 * [google.api.servicecontrol.v1.CheckResponse.check_errors][google.api.servicecontrol.v1.CheckResponse.check_errors].
 *
 * @generated from message google.api.servicecontrol.v1.CheckError
 */
export class CheckError extends Message<CheckError> {
  /**
   * The error code.
   *
   * @generated from field: google.api.servicecontrol.v1.CheckError.Code code = 1;
   */
  code = CheckError_Code.ERROR_CODE_UNSPECIFIED;

  /**
   * Free-form text providing details on the error cause of the error.
   *
   * @generated from field: string detail = 2;
   */
  detail = "";

  constructor(data?: PartialMessage<CheckError>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.servicecontrol.v1.CheckError";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "code", kind: "enum", T: proto3.getEnumType(CheckError_Code) },
    { no: 2, name: "detail", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckError {
    return new CheckError().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckError {
    return new CheckError().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckError {
    return new CheckError().fromJsonString(jsonString, options);
  }

  static equals(a: CheckError | PlainMessage<CheckError> | undefined, b: CheckError | PlainMessage<CheckError> | undefined): boolean {
    return proto3.util.equals(CheckError, a, b);
  }
}

/**
 * Error codes for Check responses.
 *
 * @generated from enum google.api.servicecontrol.v1.CheckError.Code
 */
export enum CheckError_Code {
  /**
   * This is never used in `CheckResponse`.
   *
   * @generated from enum value: ERROR_CODE_UNSPECIFIED = 0;
   */
  ERROR_CODE_UNSPECIFIED = 0,

  /**
   * The consumer's project id was not found.
   * Same as [google.rpc.Code.NOT_FOUND][].
   *
   * @generated from enum value: NOT_FOUND = 5;
   */
  NOT_FOUND = 5,

  /**
   * The consumer doesn't have access to the specified resource.
   * Same as [google.rpc.Code.PERMISSION_DENIED][].
   *
   * @generated from enum value: PERMISSION_DENIED = 7;
   */
  PERMISSION_DENIED = 7,

  /**
   * Quota check failed. Same as [google.rpc.Code.RESOURCE_EXHAUSTED][].
   *
   * @generated from enum value: RESOURCE_EXHAUSTED = 8;
   */
  RESOURCE_EXHAUSTED = 8,

  /**
   * The consumer hasn't activated the service.
   *
   * @generated from enum value: SERVICE_NOT_ACTIVATED = 104;
   */
  SERVICE_NOT_ACTIVATED = 104,

  /**
   * The consumer cannot access the service because billing is disabled.
   *
   * @generated from enum value: BILLING_DISABLED = 107;
   */
  BILLING_DISABLED = 107,

  /**
   * The consumer's project has been marked as deleted (soft deletion).
   *
   * @generated from enum value: PROJECT_DELETED = 108;
   */
  PROJECT_DELETED = 108,

  /**
   * The consumer's project number or id does not represent a valid project.
   *
   * @generated from enum value: PROJECT_INVALID = 114;
   */
  PROJECT_INVALID = 114,

  /**
   * The IP address of the consumer is invalid for the specific consumer
   * project.
   *
   * @generated from enum value: IP_ADDRESS_BLOCKED = 109;
   */
  IP_ADDRESS_BLOCKED = 109,

  /**
   * The referer address of the consumer request is invalid for the specific
   * consumer project.
   *
   * @generated from enum value: REFERER_BLOCKED = 110;
   */
  REFERER_BLOCKED = 110,

  /**
   * The client application of the consumer request is invalid for the
   * specific consumer project.
   *
   * @generated from enum value: CLIENT_APP_BLOCKED = 111;
   */
  CLIENT_APP_BLOCKED = 111,

  /**
   * The consumer's API key is invalid.
   *
   * @generated from enum value: API_KEY_INVALID = 105;
   */
  API_KEY_INVALID = 105,

  /**
   * The consumer's API Key has expired.
   *
   * @generated from enum value: API_KEY_EXPIRED = 112;
   */
  API_KEY_EXPIRED = 112,

  /**
   * The consumer's API Key was not found in config record.
   *
   * @generated from enum value: API_KEY_NOT_FOUND = 113;
   */
  API_KEY_NOT_FOUND = 113,

  /**
   * The backend server for looking up project id/number is unavailable.
   *
   * @generated from enum value: NAMESPACE_LOOKUP_UNAVAILABLE = 300;
   */
  NAMESPACE_LOOKUP_UNAVAILABLE = 300,

  /**
   * The backend server for checking service status is unavailable.
   *
   * @generated from enum value: SERVICE_STATUS_UNAVAILABLE = 301;
   */
  SERVICE_STATUS_UNAVAILABLE = 301,

  /**
   * The backend server for checking billing status is unavailable.
   *
   * @generated from enum value: BILLING_STATUS_UNAVAILABLE = 302;
   */
  BILLING_STATUS_UNAVAILABLE = 302,
}
// Retrieve enum metadata with: proto3.getEnumType(CheckError_Code)
proto3.util.setEnumType(CheckError_Code, "google.api.servicecontrol.v1.CheckError.Code", [
  { no: 0, name: "ERROR_CODE_UNSPECIFIED" },
  { no: 5, name: "NOT_FOUND" },
  { no: 7, name: "PERMISSION_DENIED" },
  { no: 8, name: "RESOURCE_EXHAUSTED" },
  { no: 104, name: "SERVICE_NOT_ACTIVATED" },
  { no: 107, name: "BILLING_DISABLED" },
  { no: 108, name: "PROJECT_DELETED" },
  { no: 114, name: "PROJECT_INVALID" },
  { no: 109, name: "IP_ADDRESS_BLOCKED" },
  { no: 110, name: "REFERER_BLOCKED" },
  { no: 111, name: "CLIENT_APP_BLOCKED" },
  { no: 105, name: "API_KEY_INVALID" },
  { no: 112, name: "API_KEY_EXPIRED" },
  { no: 113, name: "API_KEY_NOT_FOUND" },
  { no: 300, name: "NAMESPACE_LOOKUP_UNAVAILABLE" },
  { no: 301, name: "SERVICE_STATUS_UNAVAILABLE" },
  { no: 302, name: "BILLING_STATUS_UNAVAILABLE" },
]);

