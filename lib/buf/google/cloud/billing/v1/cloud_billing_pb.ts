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
// @generated from file google/cloud/billing/v1/cloud_billing.proto (package google.cloud.billing.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * A billing account in [Google Cloud
 * Console](https://console.cloud.google.com/). You can assign a billing account
 * to one or more projects.
 *
 * @generated from message google.cloud.billing.v1.BillingAccount
 */
export class BillingAccount extends Message<BillingAccount> {
  /**
   * The resource name of the billing account. The resource name has the form
   * `billingAccounts/{billing_account_id}`. For example,
   * `billingAccounts/012345-567890-ABCDEF` would be the resource name for
   * billing account `012345-567890-ABCDEF`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * True if the billing account is open, and will therefore be charged for any
   * usage on associated projects. False if the billing account is closed, and
   * therefore projects associated with it will be unable to use paid services.
   *
   * @generated from field: bool open = 2;
   */
  open = false;

  /**
   * The display name given to the billing account, such as `My Billing
   * Account`. This name is displayed in the Google Cloud Console.
   *
   * @generated from field: string display_name = 3;
   */
  displayName = "";

  constructor(data?: PartialMessage<BillingAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.billing.v1.BillingAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "open", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BillingAccount {
    return new BillingAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BillingAccount {
    return new BillingAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BillingAccount {
    return new BillingAccount().fromJsonString(jsonString, options);
  }

  static equals(a: BillingAccount | PlainMessage<BillingAccount> | undefined, b: BillingAccount | PlainMessage<BillingAccount> | undefined): boolean {
    return proto3.util.equals(BillingAccount, a, b);
  }
}

/**
 * Encapsulation of billing information for a Cloud Console project. A project
 * has at most one associated billing account at a time (but a billing account
 * can be assigned to multiple projects).
 *
 * @generated from message google.cloud.billing.v1.ProjectBillingInfo
 */
export class ProjectBillingInfo extends Message<ProjectBillingInfo> {
  /**
   * The resource name for the `ProjectBillingInfo`; has the form
   * `projects/{project_id}/billingInfo`. For example, the resource name for the
   * billing information for project `tokyo-rain-123` would be
   * `projects/tokyo-rain-123/billingInfo`. This field is read-only.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The ID of the project that this `ProjectBillingInfo` represents, such as
   * `tokyo-rain-123`. This is a convenience field so that you don't need to
   * parse the `name` field to obtain a project ID. This field is read-only.
   *
   * @generated from field: string project_id = 2;
   */
  projectId = "";

  /**
   * The resource name of the billing account associated with the project, if
   * any. For example, `billingAccounts/012345-567890-ABCDEF`.
   *
   * @generated from field: string billing_account_name = 3;
   */
  billingAccountName = "";

  /**
   * True if the project is associated with an open billing account, to which
   * usage on the project is charged. False if the project is associated with a
   * closed billing account, or no billing account at all, and therefore cannot
   * use paid services. This field is read-only.
   *
   * @generated from field: bool billing_enabled = 4;
   */
  billingEnabled = false;

  constructor(data?: PartialMessage<ProjectBillingInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.billing.v1.ProjectBillingInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "billing_account_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "billing_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectBillingInfo {
    return new ProjectBillingInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectBillingInfo {
    return new ProjectBillingInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectBillingInfo {
    return new ProjectBillingInfo().fromJsonString(jsonString, options);
  }

  static equals(a: ProjectBillingInfo | PlainMessage<ProjectBillingInfo> | undefined, b: ProjectBillingInfo | PlainMessage<ProjectBillingInfo> | undefined): boolean {
    return proto3.util.equals(ProjectBillingInfo, a, b);
  }
}

/**
 * Request message for `GetBillingAccount`.
 *
 * @generated from message google.cloud.billing.v1.GetBillingAccountRequest
 */
export class GetBillingAccountRequest extends Message<GetBillingAccountRequest> {
  /**
   * The resource name of the billing account to retrieve. For example,
   * `billingAccounts/012345-567890-ABCDEF`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetBillingAccountRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.billing.v1.GetBillingAccountRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBillingAccountRequest {
    return new GetBillingAccountRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBillingAccountRequest {
    return new GetBillingAccountRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBillingAccountRequest {
    return new GetBillingAccountRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetBillingAccountRequest | PlainMessage<GetBillingAccountRequest> | undefined, b: GetBillingAccountRequest | PlainMessage<GetBillingAccountRequest> | undefined): boolean {
    return proto3.util.equals(GetBillingAccountRequest, a, b);
  }
}

/**
 * Request message for `ListBillingAccounts`.
 *
 * @generated from message google.cloud.billing.v1.ListBillingAccountsRequest
 */
export class ListBillingAccountsRequest extends Message<ListBillingAccountsRequest> {
  /**
   * Requested page size. The maximum page size is 100; this is also the
   * default.
   *
   * @generated from field: int32 page_size = 1;
   */
  pageSize = 0;

  /**
   * A token identifying a page of results to return. This should be a
   * `next_page_token` value returned from a previous `ListBillingAccounts`
   * call. If unspecified, the first page of results is returned.
   *
   * @generated from field: string page_token = 2;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListBillingAccountsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.billing.v1.ListBillingAccountsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListBillingAccountsRequest {
    return new ListBillingAccountsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListBillingAccountsRequest {
    return new ListBillingAccountsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListBillingAccountsRequest {
    return new ListBillingAccountsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListBillingAccountsRequest | PlainMessage<ListBillingAccountsRequest> | undefined, b: ListBillingAccountsRequest | PlainMessage<ListBillingAccountsRequest> | undefined): boolean {
    return proto3.util.equals(ListBillingAccountsRequest, a, b);
  }
}

/**
 * Response message for `ListBillingAccounts`.
 *
 * @generated from message google.cloud.billing.v1.ListBillingAccountsResponse
 */
export class ListBillingAccountsResponse extends Message<ListBillingAccountsResponse> {
  /**
   * A list of billing accounts.
   *
   * @generated from field: repeated google.cloud.billing.v1.BillingAccount billing_accounts = 1;
   */
  billingAccounts: BillingAccount[] = [];

  /**
   * A token to retrieve the next page of results. To retrieve the next page,
   * call `ListBillingAccounts` again with the `page_token` field set to this
   * value. This field is empty if there are no more results to retrieve.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListBillingAccountsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.billing.v1.ListBillingAccountsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "billing_accounts", kind: "message", T: BillingAccount, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListBillingAccountsResponse {
    return new ListBillingAccountsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListBillingAccountsResponse {
    return new ListBillingAccountsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListBillingAccountsResponse {
    return new ListBillingAccountsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListBillingAccountsResponse | PlainMessage<ListBillingAccountsResponse> | undefined, b: ListBillingAccountsResponse | PlainMessage<ListBillingAccountsResponse> | undefined): boolean {
    return proto3.util.equals(ListBillingAccountsResponse, a, b);
  }
}

/**
 * Request message for `ListProjectBillingInfo`.
 *
 * @generated from message google.cloud.billing.v1.ListProjectBillingInfoRequest
 */
export class ListProjectBillingInfoRequest extends Message<ListProjectBillingInfoRequest> {
  /**
   * The resource name of the billing account associated with the projects that
   * you want to list. For example, `billingAccounts/012345-567890-ABCDEF`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * Requested page size. The maximum page size is 100; this is also the
   * default.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize = 0;

  /**
   * A token identifying a page of results to be returned. This should be a
   * `next_page_token` value returned from a previous `ListProjectBillingInfo`
   * call. If unspecified, the first page of results is returned.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListProjectBillingInfoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.billing.v1.ListProjectBillingInfoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListProjectBillingInfoRequest {
    return new ListProjectBillingInfoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListProjectBillingInfoRequest {
    return new ListProjectBillingInfoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListProjectBillingInfoRequest {
    return new ListProjectBillingInfoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListProjectBillingInfoRequest | PlainMessage<ListProjectBillingInfoRequest> | undefined, b: ListProjectBillingInfoRequest | PlainMessage<ListProjectBillingInfoRequest> | undefined): boolean {
    return proto3.util.equals(ListProjectBillingInfoRequest, a, b);
  }
}

/**
 * Request message for `ListProjectBillingInfoResponse`.
 *
 * @generated from message google.cloud.billing.v1.ListProjectBillingInfoResponse
 */
export class ListProjectBillingInfoResponse extends Message<ListProjectBillingInfoResponse> {
  /**
   * A list of `ProjectBillingInfo` resources representing the projects
   * associated with the billing account.
   *
   * @generated from field: repeated google.cloud.billing.v1.ProjectBillingInfo project_billing_info = 1;
   */
  projectBillingInfo: ProjectBillingInfo[] = [];

  /**
   * A token to retrieve the next page of results. To retrieve the next page,
   * call `ListProjectBillingInfo` again with the `page_token` field set to this
   * value. This field is empty if there are no more results to retrieve.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListProjectBillingInfoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.billing.v1.ListProjectBillingInfoResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project_billing_info", kind: "message", T: ProjectBillingInfo, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListProjectBillingInfoResponse {
    return new ListProjectBillingInfoResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListProjectBillingInfoResponse {
    return new ListProjectBillingInfoResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListProjectBillingInfoResponse {
    return new ListProjectBillingInfoResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListProjectBillingInfoResponse | PlainMessage<ListProjectBillingInfoResponse> | undefined, b: ListProjectBillingInfoResponse | PlainMessage<ListProjectBillingInfoResponse> | undefined): boolean {
    return proto3.util.equals(ListProjectBillingInfoResponse, a, b);
  }
}

/**
 * Request message for `GetProjectBillingInfo`.
 *
 * @generated from message google.cloud.billing.v1.GetProjectBillingInfoRequest
 */
export class GetProjectBillingInfoRequest extends Message<GetProjectBillingInfoRequest> {
  /**
   * The resource name of the project for which billing information is
   * retrieved. For example, `projects/tokyo-rain-123`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetProjectBillingInfoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.billing.v1.GetProjectBillingInfoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetProjectBillingInfoRequest {
    return new GetProjectBillingInfoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetProjectBillingInfoRequest {
    return new GetProjectBillingInfoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetProjectBillingInfoRequest {
    return new GetProjectBillingInfoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetProjectBillingInfoRequest | PlainMessage<GetProjectBillingInfoRequest> | undefined, b: GetProjectBillingInfoRequest | PlainMessage<GetProjectBillingInfoRequest> | undefined): boolean {
    return proto3.util.equals(GetProjectBillingInfoRequest, a, b);
  }
}

/**
 * Request message for `UpdateProjectBillingInfo`.
 *
 * @generated from message google.cloud.billing.v1.UpdateProjectBillingInfoRequest
 */
export class UpdateProjectBillingInfoRequest extends Message<UpdateProjectBillingInfoRequest> {
  /**
   * The resource name of the project associated with the billing information
   * that you want to update. For example, `projects/tokyo-rain-123`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The new billing information for the project. Read-only fields are ignored;
   * thus, you may leave empty all fields except `billing_account_name`.
   *
   * @generated from field: google.cloud.billing.v1.ProjectBillingInfo project_billing_info = 2;
   */
  projectBillingInfo?: ProjectBillingInfo;

  constructor(data?: PartialMessage<UpdateProjectBillingInfoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.billing.v1.UpdateProjectBillingInfoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project_billing_info", kind: "message", T: ProjectBillingInfo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateProjectBillingInfoRequest {
    return new UpdateProjectBillingInfoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateProjectBillingInfoRequest {
    return new UpdateProjectBillingInfoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateProjectBillingInfoRequest {
    return new UpdateProjectBillingInfoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateProjectBillingInfoRequest | PlainMessage<UpdateProjectBillingInfoRequest> | undefined, b: UpdateProjectBillingInfoRequest | PlainMessage<UpdateProjectBillingInfoRequest> | undefined): boolean {
    return proto3.util.equals(UpdateProjectBillingInfoRequest, a, b);
  }
}

