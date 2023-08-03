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
// @generated from file google/iam/v1/iam_policy.proto (package google.iam.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Policy } from "./policy_pb.js";

/**
 * Request message for `SetIamPolicy` method.
 *
 * @generated from message google.iam.v1.SetIamPolicyRequest
 */
export class SetIamPolicyRequest extends Message<SetIamPolicyRequest> {
  /**
   * REQUIRED: The resource for which the policy is being specified.
   * `resource` is usually specified as a path. For example, a Project
   * resource is specified as `projects/{project}`.
   *
   * @generated from field: string resource = 1;
   */
  resource = "";

  /**
   * REQUIRED: The complete policy to be applied to the `resource`. The size of
   * the policy is limited to a few 10s of KB. An empty policy is a
   * valid policy but certain Cloud Platform services (such as Projects)
   * might reject them.
   *
   * @generated from field: google.iam.v1.Policy policy = 2;
   */
  policy?: Policy;

  constructor(data?: PartialMessage<SetIamPolicyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.iam.v1.SetIamPolicyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "resource", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "policy", kind: "message", T: Policy },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetIamPolicyRequest {
    return new SetIamPolicyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetIamPolicyRequest {
    return new SetIamPolicyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetIamPolicyRequest {
    return new SetIamPolicyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SetIamPolicyRequest | PlainMessage<SetIamPolicyRequest> | undefined, b: SetIamPolicyRequest | PlainMessage<SetIamPolicyRequest> | undefined): boolean {
    return proto3.util.equals(SetIamPolicyRequest, a, b);
  }
}

/**
 * Request message for `GetIamPolicy` method.
 *
 * @generated from message google.iam.v1.GetIamPolicyRequest
 */
export class GetIamPolicyRequest extends Message<GetIamPolicyRequest> {
  /**
   * REQUIRED: The resource for which the policy is being requested.
   * `resource` is usually specified as a path. For example, a Project
   * resource is specified as `projects/{project}`.
   *
   * @generated from field: string resource = 1;
   */
  resource = "";

  constructor(data?: PartialMessage<GetIamPolicyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.iam.v1.GetIamPolicyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "resource", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetIamPolicyRequest {
    return new GetIamPolicyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetIamPolicyRequest {
    return new GetIamPolicyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetIamPolicyRequest {
    return new GetIamPolicyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetIamPolicyRequest | PlainMessage<GetIamPolicyRequest> | undefined, b: GetIamPolicyRequest | PlainMessage<GetIamPolicyRequest> | undefined): boolean {
    return proto3.util.equals(GetIamPolicyRequest, a, b);
  }
}

/**
 * Request message for `TestIamPermissions` method.
 *
 * @generated from message google.iam.v1.TestIamPermissionsRequest
 */
export class TestIamPermissionsRequest extends Message<TestIamPermissionsRequest> {
  /**
   * REQUIRED: The resource for which the policy detail is being requested.
   * `resource` is usually specified as a path. For example, a Project
   * resource is specified as `projects/{project}`.
   *
   * @generated from field: string resource = 1;
   */
  resource = "";

  /**
   * The set of permissions to check for the `resource`. Permissions with
   * wildcards (such as '*' or 'storage.*') are not allowed. For more
   * information see
   * [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
   *
   * @generated from field: repeated string permissions = 2;
   */
  permissions: string[] = [];

  constructor(data?: PartialMessage<TestIamPermissionsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.iam.v1.TestIamPermissionsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "resource", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "permissions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestIamPermissionsRequest {
    return new TestIamPermissionsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestIamPermissionsRequest {
    return new TestIamPermissionsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestIamPermissionsRequest {
    return new TestIamPermissionsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TestIamPermissionsRequest | PlainMessage<TestIamPermissionsRequest> | undefined, b: TestIamPermissionsRequest | PlainMessage<TestIamPermissionsRequest> | undefined): boolean {
    return proto3.util.equals(TestIamPermissionsRequest, a, b);
  }
}

/**
 * Response message for `TestIamPermissions` method.
 *
 * @generated from message google.iam.v1.TestIamPermissionsResponse
 */
export class TestIamPermissionsResponse extends Message<TestIamPermissionsResponse> {
  /**
   * A subset of `TestPermissionsRequest.permissions` that the caller is
   * allowed.
   *
   * @generated from field: repeated string permissions = 1;
   */
  permissions: string[] = [];

  constructor(data?: PartialMessage<TestIamPermissionsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.iam.v1.TestIamPermissionsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "permissions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestIamPermissionsResponse {
    return new TestIamPermissionsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestIamPermissionsResponse {
    return new TestIamPermissionsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestIamPermissionsResponse {
    return new TestIamPermissionsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TestIamPermissionsResponse | PlainMessage<TestIamPermissionsResponse> | undefined, b: TestIamPermissionsResponse | PlainMessage<TestIamPermissionsResponse> | undefined): boolean {
    return proto3.util.equals(TestIamPermissionsResponse, a, b);
  }
}
