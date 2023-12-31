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
// @generated from file google/cloud/support/v1alpha1/cloud_support.proto (package google.cloud.support.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { FieldMask, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Case, Comment, SupportAccount } from "../common_pb.js";

/**
 * The request message for `GetSupportAccount`.
 *
 * @generated from message google.cloud.support.v1alpha1.GetSupportAccountRequest
 */
export class GetSupportAccountRequest extends Message<GetSupportAccountRequest> {
  /**
   * The resource name of the support accounts. For example:
   * `supportAccounts/accountA`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetSupportAccountRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.support.v1alpha1.GetSupportAccountRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSupportAccountRequest {
    return new GetSupportAccountRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSupportAccountRequest {
    return new GetSupportAccountRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSupportAccountRequest {
    return new GetSupportAccountRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetSupportAccountRequest | PlainMessage<GetSupportAccountRequest> | undefined, b: GetSupportAccountRequest | PlainMessage<GetSupportAccountRequest> | undefined): boolean {
    return proto3.util.equals(GetSupportAccountRequest, a, b);
  }
}

/**
 * The request message for `ListSupportAccount`.
 *
 * @generated from message google.cloud.support.v1alpha1.ListSupportAccountsRequest
 */
export class ListSupportAccountsRequest extends Message<ListSupportAccountsRequest> {
  /**
   * The filter applied to search results. It only supports filtering a support
   * account list by a cloud_resource. For example, to filter results by support
   * accounts associated with an Organization, its value should be:
   * "cloud_resource:organizations/<organization_id>"
   *
   * @generated from field: string filter = 1;
   */
  filter = "";

  /**
   * Maximum number of accounts fetched with each request.
   *
   * @generated from field: int64 page_size = 2;
   */
  pageSize = protoInt64.zero;

  /**
   * A token identifying the page of results to return. If unspecified, the
   * first page is retrieved.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListSupportAccountsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.support.v1alpha1.ListSupportAccountsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page_size", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSupportAccountsRequest {
    return new ListSupportAccountsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSupportAccountsRequest {
    return new ListSupportAccountsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSupportAccountsRequest {
    return new ListSupportAccountsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListSupportAccountsRequest | PlainMessage<ListSupportAccountsRequest> | undefined, b: ListSupportAccountsRequest | PlainMessage<ListSupportAccountsRequest> | undefined): boolean {
    return proto3.util.equals(ListSupportAccountsRequest, a, b);
  }
}

/**
 * The response message for `ListSupportAccount`.
 *
 * @generated from message google.cloud.support.v1alpha1.ListSupportAccountsResponse
 */
export class ListSupportAccountsResponse extends Message<ListSupportAccountsResponse> {
  /**
   * A list of support accounts.
   *
   * @generated from field: repeated google.cloud.support.common.SupportAccount accounts = 1;
   */
  accounts: SupportAccount[] = [];

  /**
   * A token to retrieve the next page of results. This should be passed on in
   * `page_token` field of `ListSupportAccountRequest` for next request. If
   * unspecified, there are no more results to retrieve.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListSupportAccountsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.support.v1alpha1.ListSupportAccountsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "accounts", kind: "message", T: SupportAccount, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSupportAccountsResponse {
    return new ListSupportAccountsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSupportAccountsResponse {
    return new ListSupportAccountsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSupportAccountsResponse {
    return new ListSupportAccountsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListSupportAccountsResponse | PlainMessage<ListSupportAccountsResponse> | undefined, b: ListSupportAccountsResponse | PlainMessage<ListSupportAccountsResponse> | undefined): boolean {
    return proto3.util.equals(ListSupportAccountsResponse, a, b);
  }
}

/**
 * The request message for `GetCase` method.
 *
 * @generated from message google.cloud.support.v1alpha1.GetCaseRequest
 */
export class GetCaseRequest extends Message<GetCaseRequest> {
  /**
   * Name of case resource requested.
   * For example: "supportAccounts/accountA/cases/123"
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetCaseRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.support.v1alpha1.GetCaseRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCaseRequest {
    return new GetCaseRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCaseRequest {
    return new GetCaseRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCaseRequest {
    return new GetCaseRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetCaseRequest | PlainMessage<GetCaseRequest> | undefined, b: GetCaseRequest | PlainMessage<GetCaseRequest> | undefined): boolean {
    return proto3.util.equals(GetCaseRequest, a, b);
  }
}

/**
 * The request message for `ListCase` method.
 *
 * @generated from message google.cloud.support.v1alpha1.ListCasesRequest
 */
export class ListCasesRequest extends Message<ListCasesRequest> {
  /**
   * Name of the account resource for which cases are requested. For example:
   * "supportAccounts/accountA"
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The filter applied to the search results. Currently it only accepts "OPEN"
   * or "CLOSED" strings, filtering out cases that are open or resolved.
   *
   * @generated from field: string filter = 2;
   */
  filter = "";

  /**
   * Maximum number of cases fetched with each request.
   *
   * @generated from field: int64 page_size = 3;
   */
  pageSize = protoInt64.zero;

  /**
   * A token identifying the page of results to return. If unspecified, the
   * first page is retrieved.
   *
   * @generated from field: string page_token = 4;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListCasesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.support.v1alpha1.ListCasesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "page_size", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListCasesRequest {
    return new ListCasesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListCasesRequest {
    return new ListCasesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListCasesRequest {
    return new ListCasesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListCasesRequest | PlainMessage<ListCasesRequest> | undefined, b: ListCasesRequest | PlainMessage<ListCasesRequest> | undefined): boolean {
    return proto3.util.equals(ListCasesRequest, a, b);
  }
}

/**
 * The response message for `ListCase` method.
 *
 * @generated from message google.cloud.support.v1alpha1.ListCasesResponse
 */
export class ListCasesResponse extends Message<ListCasesResponse> {
  /**
   * A list of cases.
   *
   * @generated from field: repeated google.cloud.support.common.Case cases = 1;
   */
  cases: Case[] = [];

  /**
   * A token to retrieve the next page of results. This should be passed on in
   * `page_token` field of `ListCaseRequest` for next request. If unspecified,
   * there are no more results to retrieve.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListCasesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.support.v1alpha1.ListCasesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "cases", kind: "message", T: Case, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListCasesResponse {
    return new ListCasesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListCasesResponse {
    return new ListCasesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListCasesResponse {
    return new ListCasesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListCasesResponse | PlainMessage<ListCasesResponse> | undefined, b: ListCasesResponse | PlainMessage<ListCasesResponse> | undefined): boolean {
    return proto3.util.equals(ListCasesResponse, a, b);
  }
}

/**
 * The request message for `ListComments` method.
 *
 * @generated from message google.cloud.support.v1alpha1.ListCommentsRequest
 */
export class ListCommentsRequest extends Message<ListCommentsRequest> {
  /**
   * The resource name of case for which comments should be listed.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<ListCommentsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.support.v1alpha1.ListCommentsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListCommentsRequest {
    return new ListCommentsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListCommentsRequest {
    return new ListCommentsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListCommentsRequest {
    return new ListCommentsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListCommentsRequest | PlainMessage<ListCommentsRequest> | undefined, b: ListCommentsRequest | PlainMessage<ListCommentsRequest> | undefined): boolean {
    return proto3.util.equals(ListCommentsRequest, a, b);
  }
}

/**
 * The response message for `ListComments` method.
 *
 * @generated from message google.cloud.support.v1alpha1.ListCommentsResponse
 */
export class ListCommentsResponse extends Message<ListCommentsResponse> {
  /**
   * A list of comments.
   *
   * @generated from field: repeated google.cloud.support.common.Comment comments = 1;
   */
  comments: Comment[] = [];

  constructor(data?: PartialMessage<ListCommentsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.support.v1alpha1.ListCommentsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "comments", kind: "message", T: Comment, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListCommentsResponse {
    return new ListCommentsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListCommentsResponse {
    return new ListCommentsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListCommentsResponse {
    return new ListCommentsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListCommentsResponse | PlainMessage<ListCommentsResponse> | undefined, b: ListCommentsResponse | PlainMessage<ListCommentsResponse> | undefined): boolean {
    return proto3.util.equals(ListCommentsResponse, a, b);
  }
}

/**
 * The request message for `CreateCase` method.
 *
 * @generated from message google.cloud.support.v1alpha1.CreateCaseRequest
 */
export class CreateCaseRequest extends Message<CreateCaseRequest> {
  /**
   * The resource name for `SupportAccount` under which this case is created.
   *
   * @generated from field: string parent = 1;
   */
  parent = "";

  /**
   * The case resource to create.
   *
   * @generated from field: google.cloud.support.common.Case case = 2;
   */
  case?: Case;

  constructor(data?: PartialMessage<CreateCaseRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.support.v1alpha1.CreateCaseRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "parent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "case", kind: "message", T: Case },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateCaseRequest {
    return new CreateCaseRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateCaseRequest {
    return new CreateCaseRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateCaseRequest {
    return new CreateCaseRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateCaseRequest | PlainMessage<CreateCaseRequest> | undefined, b: CreateCaseRequest | PlainMessage<CreateCaseRequest> | undefined): boolean {
    return proto3.util.equals(CreateCaseRequest, a, b);
  }
}

/**
 * The request message for `UpdateCase` method.
 *
 * @generated from message google.cloud.support.v1alpha1.UpdateCaseRequest
 */
export class UpdateCaseRequest extends Message<UpdateCaseRequest> {
  /**
   * The case resource to update.
   *
   * @generated from field: google.cloud.support.common.Case case = 1;
   */
  case?: Case;

  /**
   * A field that represents attributes of a Case object that should be updated
   * as part of this request.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateCaseRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.support.v1alpha1.UpdateCaseRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "case", kind: "message", T: Case },
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateCaseRequest {
    return new UpdateCaseRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateCaseRequest {
    return new UpdateCaseRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateCaseRequest {
    return new UpdateCaseRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateCaseRequest | PlainMessage<UpdateCaseRequest> | undefined, b: UpdateCaseRequest | PlainMessage<UpdateCaseRequest> | undefined): boolean {
    return proto3.util.equals(UpdateCaseRequest, a, b);
  }
}

/**
 * The request message for `CreateComment` method.
 *
 * @generated from message google.cloud.support.v1alpha1.CreateCommentRequest
 */
export class CreateCommentRequest extends Message<CreateCommentRequest> {
  /**
   * The resource name of case to which this comment should be added.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The `Comment` to be added to this case.
   *
   * @generated from field: google.cloud.support.common.Comment comment = 2;
   */
  comment?: Comment;

  constructor(data?: PartialMessage<CreateCommentRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.support.v1alpha1.CreateCommentRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "comment", kind: "message", T: Comment },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateCommentRequest {
    return new CreateCommentRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateCommentRequest {
    return new CreateCommentRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateCommentRequest {
    return new CreateCommentRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateCommentRequest | PlainMessage<CreateCommentRequest> | undefined, b: CreateCommentRequest | PlainMessage<CreateCommentRequest> | undefined): boolean {
    return proto3.util.equals(CreateCommentRequest, a, b);
  }
}

/**
 * The request message for `GetIssueTaxonomy` method.
 *
 * @generated from message google.cloud.support.v1alpha1.GetIssueTaxonomyRequest
 */
export class GetIssueTaxonomyRequest extends Message<GetIssueTaxonomyRequest> {
  constructor(data?: PartialMessage<GetIssueTaxonomyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.support.v1alpha1.GetIssueTaxonomyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetIssueTaxonomyRequest {
    return new GetIssueTaxonomyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetIssueTaxonomyRequest {
    return new GetIssueTaxonomyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetIssueTaxonomyRequest {
    return new GetIssueTaxonomyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetIssueTaxonomyRequest | PlainMessage<GetIssueTaxonomyRequest> | undefined, b: GetIssueTaxonomyRequest | PlainMessage<GetIssueTaxonomyRequest> | undefined): boolean {
    return proto3.util.equals(GetIssueTaxonomyRequest, a, b);
  }
}

