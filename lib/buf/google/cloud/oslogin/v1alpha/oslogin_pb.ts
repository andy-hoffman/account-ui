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
// @generated from file google/cloud/oslogin/v1alpha/oslogin.proto (package google.cloud.oslogin.v1alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { FieldMask, Message, proto3 } from "@bufbuild/protobuf";
import { PosixAccount, SshPublicKey } from "../common_pb.js";

/**
 * The user profile information used for logging in to a virtual machine on
 * Google Compute Engine.
 *
 * @generated from message google.cloud.oslogin.v1alpha.LoginProfile
 */
export class LoginProfile extends Message<LoginProfile> {
  /**
   * A unique user ID for identifying the user.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The list of POSIX accounts associated with the Directory API user.
   *
   * @generated from field: repeated google.cloud.oslogin.common.PosixAccount posix_accounts = 2;
   */
  posixAccounts: PosixAccount[] = [];

  /**
   * A map from SSH public key fingerprint to the associated key object.
   *
   * @generated from field: map<string, google.cloud.oslogin.common.SshPublicKey> ssh_public_keys = 3;
   */
  sshPublicKeys: { [key: string]: SshPublicKey } = {};

  /**
   * Indicates if the user is suspended.
   *
   * @generated from field: bool suspended = 4;
   */
  suspended = false;

  constructor(data?: PartialMessage<LoginProfile>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.oslogin.v1alpha.LoginProfile";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "posix_accounts", kind: "message", T: PosixAccount, repeated: true },
    { no: 3, name: "ssh_public_keys", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: SshPublicKey} },
    { no: 4, name: "suspended", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoginProfile {
    return new LoginProfile().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoginProfile {
    return new LoginProfile().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoginProfile {
    return new LoginProfile().fromJsonString(jsonString, options);
  }

  static equals(a: LoginProfile | PlainMessage<LoginProfile> | undefined, b: LoginProfile | PlainMessage<LoginProfile> | undefined): boolean {
    return proto3.util.equals(LoginProfile, a, b);
  }
}

/**
 * A request message for deleting a POSIX account entry.
 *
 * @generated from message google.cloud.oslogin.v1alpha.DeletePosixAccountRequest
 */
export class DeletePosixAccountRequest extends Message<DeletePosixAccountRequest> {
  /**
   * A reference to the POSIX account to update. POSIX accounts are identified
   * by the project ID they are associated with. A reference to the POSIX
   * account is in format `users/{user}/projects/{project}`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<DeletePosixAccountRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.oslogin.v1alpha.DeletePosixAccountRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeletePosixAccountRequest {
    return new DeletePosixAccountRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeletePosixAccountRequest {
    return new DeletePosixAccountRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeletePosixAccountRequest {
    return new DeletePosixAccountRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeletePosixAccountRequest | PlainMessage<DeletePosixAccountRequest> | undefined, b: DeletePosixAccountRequest | PlainMessage<DeletePosixAccountRequest> | undefined): boolean {
    return proto3.util.equals(DeletePosixAccountRequest, a, b);
  }
}

/**
 * A request message for deleting an SSH public key.
 *
 * @generated from message google.cloud.oslogin.v1alpha.DeleteSshPublicKeyRequest
 */
export class DeleteSshPublicKeyRequest extends Message<DeleteSshPublicKeyRequest> {
  /**
   * The fingerprint of the public key to update. Public keys are identified by
   * their SHA-256 fingerprint. The fingerprint of the public key is in format
   * `users/{user}/sshPublicKeys/{fingerprint}`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<DeleteSshPublicKeyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.oslogin.v1alpha.DeleteSshPublicKeyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSshPublicKeyRequest {
    return new DeleteSshPublicKeyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSshPublicKeyRequest {
    return new DeleteSshPublicKeyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSshPublicKeyRequest {
    return new DeleteSshPublicKeyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteSshPublicKeyRequest | PlainMessage<DeleteSshPublicKeyRequest> | undefined, b: DeleteSshPublicKeyRequest | PlainMessage<DeleteSshPublicKeyRequest> | undefined): boolean {
    return proto3.util.equals(DeleteSshPublicKeyRequest, a, b);
  }
}

/**
 * A request message for retrieving the login profile information for a user.
 *
 * @generated from message google.cloud.oslogin.v1alpha.GetLoginProfileRequest
 */
export class GetLoginProfileRequest extends Message<GetLoginProfileRequest> {
  /**
   * The unique ID for the user in format `users/{user}`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetLoginProfileRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.oslogin.v1alpha.GetLoginProfileRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLoginProfileRequest {
    return new GetLoginProfileRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLoginProfileRequest {
    return new GetLoginProfileRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLoginProfileRequest {
    return new GetLoginProfileRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetLoginProfileRequest | PlainMessage<GetLoginProfileRequest> | undefined, b: GetLoginProfileRequest | PlainMessage<GetLoginProfileRequest> | undefined): boolean {
    return proto3.util.equals(GetLoginProfileRequest, a, b);
  }
}

/**
 * A request message for retrieving an SSH public key.
 *
 * @generated from message google.cloud.oslogin.v1alpha.GetSshPublicKeyRequest
 */
export class GetSshPublicKeyRequest extends Message<GetSshPublicKeyRequest> {
  /**
   * The fingerprint of the public key to retrieve. Public keys are identified
   * by their SHA-256 fingerprint. The fingerprint of the public key is in
   * format `users/{user}/sshPublicKeys/{fingerprint}`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetSshPublicKeyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.oslogin.v1alpha.GetSshPublicKeyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSshPublicKeyRequest {
    return new GetSshPublicKeyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSshPublicKeyRequest {
    return new GetSshPublicKeyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSshPublicKeyRequest {
    return new GetSshPublicKeyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetSshPublicKeyRequest | PlainMessage<GetSshPublicKeyRequest> | undefined, b: GetSshPublicKeyRequest | PlainMessage<GetSshPublicKeyRequest> | undefined): boolean {
    return proto3.util.equals(GetSshPublicKeyRequest, a, b);
  }
}

/**
 * A request message for importing an SSH public key.
 *
 * @generated from message google.cloud.oslogin.v1alpha.ImportSshPublicKeyRequest
 */
export class ImportSshPublicKeyRequest extends Message<ImportSshPublicKeyRequest> {
  /**
   * The unique ID for the user in format `users/{user}`.
   *
   * @generated from field: string parent = 1;
   */
  parent = "";

  /**
   * The SSH public key and expiration time.
   *
   * @generated from field: google.cloud.oslogin.common.SshPublicKey ssh_public_key = 2;
   */
  sshPublicKey?: SshPublicKey;

  /**
   * The project ID of the Google Cloud Platform project.
   *
   * @generated from field: string project_id = 3;
   */
  projectId = "";

  constructor(data?: PartialMessage<ImportSshPublicKeyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.oslogin.v1alpha.ImportSshPublicKeyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "parent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ssh_public_key", kind: "message", T: SshPublicKey },
    { no: 3, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImportSshPublicKeyRequest {
    return new ImportSshPublicKeyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImportSshPublicKeyRequest {
    return new ImportSshPublicKeyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImportSshPublicKeyRequest {
    return new ImportSshPublicKeyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ImportSshPublicKeyRequest | PlainMessage<ImportSshPublicKeyRequest> | undefined, b: ImportSshPublicKeyRequest | PlainMessage<ImportSshPublicKeyRequest> | undefined): boolean {
    return proto3.util.equals(ImportSshPublicKeyRequest, a, b);
  }
}

/**
 * A response message for importing an SSH public key.
 *
 * @generated from message google.cloud.oslogin.v1alpha.ImportSshPublicKeyResponse
 */
export class ImportSshPublicKeyResponse extends Message<ImportSshPublicKeyResponse> {
  /**
   * The login profile information for the user.
   *
   * @generated from field: google.cloud.oslogin.v1alpha.LoginProfile login_profile = 1;
   */
  loginProfile?: LoginProfile;

  constructor(data?: PartialMessage<ImportSshPublicKeyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.oslogin.v1alpha.ImportSshPublicKeyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "login_profile", kind: "message", T: LoginProfile },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImportSshPublicKeyResponse {
    return new ImportSshPublicKeyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImportSshPublicKeyResponse {
    return new ImportSshPublicKeyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImportSshPublicKeyResponse {
    return new ImportSshPublicKeyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ImportSshPublicKeyResponse | PlainMessage<ImportSshPublicKeyResponse> | undefined, b: ImportSshPublicKeyResponse | PlainMessage<ImportSshPublicKeyResponse> | undefined): boolean {
    return proto3.util.equals(ImportSshPublicKeyResponse, a, b);
  }
}

/**
 * A request message for updating an SSH public key.
 *
 * @generated from message google.cloud.oslogin.v1alpha.UpdateSshPublicKeyRequest
 */
export class UpdateSshPublicKeyRequest extends Message<UpdateSshPublicKeyRequest> {
  /**
   * The fingerprint of the public key to update. Public keys are identified by
   * their SHA-256 fingerprint. The fingerprint of the public key is in format
   * `users/{user}/sshPublicKeys/{fingerprint}`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The SSH public key and expiration time.
   *
   * @generated from field: google.cloud.oslogin.common.SshPublicKey ssh_public_key = 2;
   */
  sshPublicKey?: SshPublicKey;

  /**
   * Mask to control which fields get updated. Updates all if not present.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 3;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateSshPublicKeyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.oslogin.v1alpha.UpdateSshPublicKeyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ssh_public_key", kind: "message", T: SshPublicKey },
    { no: 3, name: "update_mask", kind: "message", T: FieldMask },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSshPublicKeyRequest {
    return new UpdateSshPublicKeyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSshPublicKeyRequest {
    return new UpdateSshPublicKeyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSshPublicKeyRequest {
    return new UpdateSshPublicKeyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateSshPublicKeyRequest | PlainMessage<UpdateSshPublicKeyRequest> | undefined, b: UpdateSshPublicKeyRequest | PlainMessage<UpdateSshPublicKeyRequest> | undefined): boolean {
    return proto3.util.equals(UpdateSshPublicKeyRequest, a, b);
  }
}

