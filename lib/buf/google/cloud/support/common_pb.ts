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
// @generated from file google/cloud/support/common.proto (package google.cloud.support.common, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * A Google Cloud Platform account that identifies support eligibility for a
 * Cloud resource. Currently the Cloud resource can only be an Organization
 * but this might change in future.
 *
 * @generated from message google.cloud.support.common.SupportAccount
 */
export class SupportAccount extends Message<SupportAccount> {
  /**
   * The resource name for a support account in format
   * `supportAccounts/{account_id}`.
   * Output only.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * Identifier for this entity that gets persisted in storage system. The
   * resource name is populated using this field in format
   * `supportAccounts/{account_id}`.
   *
   * @generated from field: string account_id = 2;
   */
  accountId = "";

  /**
   * The Cloud resource with which this support account is associated.
   *
   * @generated from field: string cloud_resource = 3;
   */
  cloudResource = "";

  /**
   * A user friendly display name assigned to this support account.
   *
   * @generated from field: string display_name = 4;
   */
  displayName = "";

  /**
   * Indicates the current state of an account.
   *
   * @generated from field: google.cloud.support.common.SupportAccount.State state = 5;
   */
  state = SupportAccount_State.STATE_UNSPECIFIED;

  /**
   * Time when this account was created.
   * Output only.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 6;
   */
  createTime?: Timestamp;

  /**
   * The resource name of a billing account associated with this support
   * account. For example, `billingAccounts/ABCDEF-012345-567890`.
   *
   * @generated from field: string billing_account_name = 7;
   */
  billingAccountName = "";

  /**
   * @generated from field: string unify_account_id = 8;
   */
  unifyAccountId = "";

  /**
   * The PricingModel applicable to this support account.
   *
   * @generated from field: google.cloud.support.common.SupportAccount.PricingModel pricing_model = 9;
   */
  pricingModel = SupportAccount_PricingModel.PRICING_MODEL_UNKNOWN;

  constructor(data?: PartialMessage<SupportAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.support.common.SupportAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "account_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "cloud_resource", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "state", kind: "enum", T: proto3.getEnumType(SupportAccount_State) },
    { no: 6, name: "create_time", kind: "message", T: Timestamp },
    { no: 7, name: "billing_account_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "unify_account_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "pricing_model", kind: "enum", T: proto3.getEnumType(SupportAccount_PricingModel) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupportAccount {
    return new SupportAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupportAccount {
    return new SupportAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupportAccount {
    return new SupportAccount().fromJsonString(jsonString, options);
  }

  static equals(a: SupportAccount | PlainMessage<SupportAccount> | undefined, b: SupportAccount | PlainMessage<SupportAccount> | undefined): boolean {
    return proto3.util.equals(SupportAccount, a, b);
  }
}

/**
 * The current state of this SupportAccount.
 *
 * @generated from enum google.cloud.support.common.SupportAccount.State
 */
export enum SupportAccount_State {
  /**
   * Account is in an unknown state.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * Account is in an active state.
   *
   * @generated from enum value: ACTIVE = 1;
   */
  ACTIVE = 1,

  /**
   * Account has been created but is being provisioned in support systems.
   *
   * @generated from enum value: PENDING = 2;
   */
  PENDING = 2,

  /**
   * Account deletion has been requested by the user.
   *
   * @generated from enum value: PENDING_DELETION = 3;
   */
  PENDING_DELETION = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(SupportAccount_State)
proto3.util.setEnumType(SupportAccount_State, "google.cloud.support.common.SupportAccount.State", [
  { no: 0, name: "STATE_UNSPECIFIED" },
  { no: 1, name: "ACTIVE" },
  { no: 2, name: "PENDING" },
  { no: 3, name: "PENDING_DELETION" },
]);

/**
 * Pricing model applicable to this support account.
 *
 * @generated from enum google.cloud.support.common.SupportAccount.PricingModel
 */
export enum SupportAccount_PricingModel {
  /**
   * This account is subscribed to an unknown pricing model.
   *
   * @generated from enum value: PRICING_MODEL_UNKNOWN = 0;
   */
  PRICING_MODEL_UNKNOWN = 0,

  /**
   * Package based pricing (Platinum, Gold, Silver, Bronze).
   *
   * @generated from enum value: PACKAGES = 1;
   */
  PACKAGES = 1,

  /**
   * Support charges are calculated based on user seats a.k.a,
   * "Pick Your Team" model.
   *
   * @generated from enum value: USER_ROLES = 2;
   */
  USER_ROLES = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(SupportAccount_PricingModel)
proto3.util.setEnumType(SupportAccount_PricingModel, "google.cloud.support.common.SupportAccount.PricingModel", [
  { no: 0, name: "PRICING_MODEL_UNKNOWN" },
  { no: 1, name: "PACKAGES" },
  { no: 2, name: "USER_ROLES" },
]);

/**
 * A support case created by the user.
 *
 * @generated from message google.cloud.support.common.Case
 */
export class Case extends Message<Case> {
  /**
   * The resource name for the Case in format
   * `supportAccounts/{account_id}/cases/{case_id}`
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The short summary of the issue reported in this case.
   *
   * @generated from field: string display_name = 2;
   */
  displayName = "";

  /**
   * The board description of issue provided with initial summary.
   *
   * @generated from field: string description = 3;
   */
  description = "";

  /**
   * The product component for which this Case is reported.
   *
   * @generated from field: string component = 4;
   */
  component = "";

  /**
   * The product subcomponent for which this Case is reported.
   *
   * @generated from field: string subcomponent = 5;
   */
  subcomponent = "";

  /**
   * Timezone the client sending this request is in.
   * It should be in a format IANA recognizes: https://www.iana.org/time-zone
   * There is no additional validation done by the API.
   *
   * @generated from field: string client_timezone = 6;
   */
  clientTimezone = "";

  /**
   * The email addresses that can be copied to receive updates on this case.
   * Users can specify a maximum of 10 email addresses.
   *
   * @generated from field: repeated string cc_addresses = 7;
   */
  ccAddresses: string[] = [];

  /**
   * The Google Cloud Platform project ID for which this case is created.
   *
   * @generated from field: string project_id = 8;
   */
  projectId = "";

  /**
   * List of customer issues associated with this case.
   *
   * @generated from field: repeated google.cloud.support.common.CustomerIssue issues = 10;
   */
  issues: CustomerIssue[] = [];

  /**
   * The current priority of this case.
   *
   * @generated from field: google.cloud.support.common.Case.Priority priority = 11;
   */
  priority = Case_Priority.PRIORITY_UNSPECIFIED;

  /**
   * The current state of this case.
   *
   * @generated from field: google.cloud.support.common.Case.State state = 12;
   */
  state = Case_State.STATE_UNSPECIFIED;

  /**
   * Time when this case was created.
   * Output only.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 13;
   */
  createTime?: Timestamp;

  /**
   * Time when this case was last updated.
   * Output only.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 14;
   */
  updateTime?: Timestamp;

  /**
   * Email address of user who created this case.
   * Output only. It is inferred from credentials supplied during case creation.
   *
   * @generated from field: string creator_email = 15;
   */
  creatorEmail = "";

  /**
   * The issue category applicable to this case.
   *
   * @generated from field: string category = 16;
   */
  category = "";

  constructor(data?: PartialMessage<Case>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.support.common.Case";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "component", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "subcomponent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "client_timezone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "cc_addresses", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 8, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "issues", kind: "message", T: CustomerIssue, repeated: true },
    { no: 11, name: "priority", kind: "enum", T: proto3.getEnumType(Case_Priority) },
    { no: 12, name: "state", kind: "enum", T: proto3.getEnumType(Case_State) },
    { no: 13, name: "create_time", kind: "message", T: Timestamp },
    { no: 14, name: "update_time", kind: "message", T: Timestamp },
    { no: 15, name: "creator_email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "category", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Case {
    return new Case().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Case {
    return new Case().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Case {
    return new Case().fromJsonString(jsonString, options);
  }

  static equals(a: Case | PlainMessage<Case> | undefined, b: Case | PlainMessage<Case> | undefined): boolean {
    return proto3.util.equals(Case, a, b);
  }
}

/**
 * The case priority with P0 being the most urgent and P4 the least.
 *
 * @generated from enum google.cloud.support.common.Case.Priority
 */
export enum Case_Priority {
  /**
   * Priority is undefined or has not been set yet.
   *
   * @generated from enum value: PRIORITY_UNSPECIFIED = 0;
   */
  PRIORITY_UNSPECIFIED = 0,

  /**
   * Extreme impact on a production service - Service is hard down.
   *
   * @generated from enum value: P0 = 1;
   */
  P0 = 1,

  /**
   * Critical impact on a production service - Service is currently unusable.
   *
   * @generated from enum value: P1 = 2;
   */
  P1 = 2,

  /**
   * Severe impact on a production service - Service is usable but greatly
   * impaired.
   *
   * @generated from enum value: P2 = 3;
   */
  P2 = 3,

  /**
   * Medium impact on a production service - Service is available, but
   * moderately impaired.
   *
   * @generated from enum value: P3 = 4;
   */
  P3 = 4,

  /**
   * General questions or minor issues - Production service is fully
   * available.
   *
   * @generated from enum value: P4 = 5;
   */
  P4 = 5,
}
// Retrieve enum metadata with: proto3.getEnumType(Case_Priority)
proto3.util.setEnumType(Case_Priority, "google.cloud.support.common.Case.Priority", [
  { no: 0, name: "PRIORITY_UNSPECIFIED" },
  { no: 1, name: "P0" },
  { no: 2, name: "P1" },
  { no: 3, name: "P2" },
  { no: 4, name: "P3" },
  { no: 5, name: "P4" },
]);

/**
 * The state of a case.
 *
 * @generated from enum google.cloud.support.common.Case.State
 */
export enum Case_State {
  /**
   * Case is in an unknown state.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * Case has been created but no one is assigned to work on it yet.
   *
   * @generated from enum value: NEW = 1;
   */
  NEW = 1,

  /**
   * Case has been assigned to a support agent.
   *
   * @generated from enum value: ASSIGNED = 2;
   */
  ASSIGNED = 2,

  /**
   * A support agent is currently investigating the case.
   *
   * @generated from enum value: IN_PROGRESS_GOOGLE_SUPPORT = 3;
   */
  IN_PROGRESS_GOOGLE_SUPPORT = 3,

  /**
   * Case has been forwarded to product team for further investigation.
   *
   * @generated from enum value: IN_PROGRESS_GOOGLE_ENG = 4;
   */
  IN_PROGRESS_GOOGLE_ENG = 4,

  /**
   * Case is under investigation and relates to a known issue.
   *
   * @generated from enum value: IN_PROGRESS_KNOWN_ISSUE = 5;
   */
  IN_PROGRESS_KNOWN_ISSUE = 5,

  /**
   * Case is waiting for a response from the customer.
   *
   * @generated from enum value: WAITING_FOR_CUSTOMER_RESPONSE = 6;
   */
  WAITING_FOR_CUSTOMER_RESPONSE = 6,

  /**
   * A solution has been offered for the case but it isn't closed yet.
   *
   * @generated from enum value: SOLUTION_OFFERED = 7;
   */
  SOLUTION_OFFERED = 7,

  /**
   * Cases has been fully resolved and is in a closed state.
   *
   * @generated from enum value: CLOSED = 8;
   */
  CLOSED = 8,
}
// Retrieve enum metadata with: proto3.getEnumType(Case_State)
proto3.util.setEnumType(Case_State, "google.cloud.support.common.Case.State", [
  { no: 0, name: "STATE_UNSPECIFIED" },
  { no: 1, name: "NEW" },
  { no: 2, name: "ASSIGNED" },
  { no: 3, name: "IN_PROGRESS_GOOGLE_SUPPORT" },
  { no: 4, name: "IN_PROGRESS_GOOGLE_ENG" },
  { no: 5, name: "IN_PROGRESS_KNOWN_ISSUE" },
  { no: 6, name: "WAITING_FOR_CUSTOMER_RESPONSE" },
  { no: 7, name: "SOLUTION_OFFERED" },
  { no: 8, name: "CLOSED" },
]);

/**
 * Reference to a Google internal ticket used for investigating a support case.
 * Not every support case will have an internal ticket associated with it.
 * A support case can have multiple tickets linked to it.
 *
 * @generated from message google.cloud.support.common.CustomerIssue
 */
export class CustomerIssue extends Message<CustomerIssue> {
  /**
   * Unique identifier for the internal issue.
   * Output only.
   *
   * @generated from field: string issue_id = 1;
   */
  issueId = "";

  /**
   * Represents current status of the internal ticket.
   * Output only.
   *
   * @generated from field: google.cloud.support.common.CustomerIssue.IssueState state = 2;
   */
  state = CustomerIssue_IssueState.ISSUE_STATE_UNSPECIFIED;

  /**
   * Time when the internal issue was created.
   * Output only.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 3;
   */
  createTime?: Timestamp;

  /**
   * Time when the internal issue was marked as resolved.
   * Output only.
   *
   * @generated from field: google.protobuf.Timestamp resolve_time = 4;
   */
  resolveTime?: Timestamp;

  /**
   * Time when the internal issue was last updated.
   * Output only.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 5;
   */
  updateTime?: Timestamp;

  constructor(data?: PartialMessage<CustomerIssue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.support.common.CustomerIssue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "issue_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "state", kind: "enum", T: proto3.getEnumType(CustomerIssue_IssueState) },
    { no: 3, name: "create_time", kind: "message", T: Timestamp },
    { no: 4, name: "resolve_time", kind: "message", T: Timestamp },
    { no: 5, name: "update_time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CustomerIssue {
    return new CustomerIssue().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CustomerIssue {
    return new CustomerIssue().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CustomerIssue {
    return new CustomerIssue().fromJsonString(jsonString, options);
  }

  static equals(a: CustomerIssue | PlainMessage<CustomerIssue> | undefined, b: CustomerIssue | PlainMessage<CustomerIssue> | undefined): boolean {
    return proto3.util.equals(CustomerIssue, a, b);
  }
}

/**
 * The status of a customer issue.
 *
 * @generated from enum google.cloud.support.common.CustomerIssue.IssueState
 */
export enum CustomerIssue_IssueState {
  /**
   * Issue in an unknown state.
   *
   * @generated from enum value: ISSUE_STATE_UNSPECIFIED = 0;
   */
  ISSUE_STATE_UNSPECIFIED = 0,

  /**
   * Issue is currently open but the work on it has not been started.
   *
   * @generated from enum value: OPEN = 1;
   */
  OPEN = 1,

  /**
   * Issue is currently being worked on.
   *
   * @generated from enum value: IN_PROGRESS = 2;
   */
  IN_PROGRESS = 2,

  /**
   * Issue is fixed.
   *
   * @generated from enum value: FIXED = 3;
   */
  FIXED = 3,

  /**
   * Issue has been marked as invalid.
   *
   * @generated from enum value: WONT_FIX = 4;
   */
  WONT_FIX = 4,

  /**
   * Issue verified and in production.
   *
   * @generated from enum value: VERIFIED = 5;
   */
  VERIFIED = 5,
}
// Retrieve enum metadata with: proto3.getEnumType(CustomerIssue_IssueState)
proto3.util.setEnumType(CustomerIssue_IssueState, "google.cloud.support.common.CustomerIssue.IssueState", [
  { no: 0, name: "ISSUE_STATE_UNSPECIFIED" },
  { no: 1, name: "OPEN" },
  { no: 2, name: "IN_PROGRESS" },
  { no: 3, name: "FIXED" },
  { no: 4, name: "WONT_FIX" },
  { no: 5, name: "VERIFIED" },
]);

/**
 * A message that contains mapping of a user and their role under a support
 * account.
 *
 * @generated from message google.cloud.support.common.SupportRole
 */
export class SupportRole extends Message<SupportRole> {
  /**
   * Email address of user being added through this Role.
   *
   * @generated from field: string email = 1;
   */
  email = "";

  /**
   * The type of role assigned to user.
   *
   * @generated from field: google.cloud.support.common.SupportRole.Role role = 2;
   */
  role = SupportRole_Role.ROLE_UNSPECIFIED;

  constructor(data?: PartialMessage<SupportRole>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.support.common.SupportRole";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "role", kind: "enum", T: proto3.getEnumType(SupportRole_Role) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupportRole {
    return new SupportRole().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupportRole {
    return new SupportRole().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupportRole {
    return new SupportRole().fromJsonString(jsonString, options);
  }

  static equals(a: SupportRole | PlainMessage<SupportRole> | undefined, b: SupportRole | PlainMessage<SupportRole> | undefined): boolean {
    return proto3.util.equals(SupportRole, a, b);
  }
}

/**
 * A role which determines the support resources and features a user might
 * get access to.
 *
 * @generated from enum google.cloud.support.common.SupportRole.Role
 */
export enum SupportRole_Role {
  /**
   * An unknown role.
   *
   * @generated from enum value: ROLE_UNSPECIFIED = 0;
   */
  ROLE_UNSPECIFIED = 0,

  /**
   * The basic support role.
   *
   * @generated from enum value: BASIC = 1;
   */
  BASIC = 1,

  /**
   * The developer role.
   *
   * @generated from enum value: DEVELOPER = 2;
   */
  DEVELOPER = 2,

  /**
   * The operation role.
   *
   * @generated from enum value: OPERATION = 3;
   */
  OPERATION = 3,

  /**
   * The site reliability role.
   *
   * @generated from enum value: SITE_RELIABILITY = 4;
   */
  SITE_RELIABILITY = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(SupportRole_Role)
proto3.util.setEnumType(SupportRole_Role, "google.cloud.support.common.SupportRole.Role", [
  { no: 0, name: "ROLE_UNSPECIFIED" },
  { no: 1, name: "BASIC" },
  { no: 2, name: "DEVELOPER" },
  { no: 3, name: "OPERATION" },
  { no: 4, name: "SITE_RELIABILITY" },
]);

/**
 * The comment text associated with a `Case`.
 *
 * @generated from message google.cloud.support.common.Comment
 */
export class Comment extends Message<Comment> {
  /**
   * Text containing a maximum of 3000 characters.
   *
   * @generated from field: string text = 1;
   */
  text = "";

  /**
   * Time when this update was created.
   * Output only.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 2;
   */
  createTime?: Timestamp;

  /**
   * The email address/name of user who created this comment.
   * Output only.
   *
   * @generated from field: string author = 3;
   */
  author = "";

  /**
   * The resource name for this comment in format
   * `supportAccounts/{account_id}/cases/{case_id}/{comment_id}`.
   * Output only.
   *
   * @generated from field: string name = 4;
   */
  name = "";

  constructor(data?: PartialMessage<Comment>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.support.common.Comment";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "create_time", kind: "message", T: Timestamp },
    { no: 3, name: "author", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Comment {
    return new Comment().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Comment {
    return new Comment().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Comment {
    return new Comment().fromJsonString(jsonString, options);
  }

  static equals(a: Comment | PlainMessage<Comment> | undefined, b: Comment | PlainMessage<Comment> | undefined): boolean {
    return proto3.util.equals(Comment, a, b);
  }
}

/**
 * Represents the product component taxonomy that is to be used while creating
 * or updating a `Case`. A client should obtain the list of issue categories,
 * component/subcomponent from this object and specify it in `Case.category`,
 * `Case.component` and `Case.subcomponent` fields respectively.
 *
 * @generated from message google.cloud.support.common.IssueTaxonomy
 */
export class IssueTaxonomy extends Message<IssueTaxonomy> {
  /**
   * Map of available categories.
   *
   * @generated from field: map<string, google.cloud.support.common.IssueTaxonomy.Category> categories = 1;
   */
  categories: { [key: string]: IssueTaxonomy_Category } = {};

  constructor(data?: PartialMessage<IssueTaxonomy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.support.common.IssueTaxonomy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "categories", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: IssueTaxonomy_Category} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IssueTaxonomy {
    return new IssueTaxonomy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IssueTaxonomy {
    return new IssueTaxonomy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IssueTaxonomy {
    return new IssueTaxonomy().fromJsonString(jsonString, options);
  }

  static equals(a: IssueTaxonomy | PlainMessage<IssueTaxonomy> | undefined, b: IssueTaxonomy | PlainMessage<IssueTaxonomy> | undefined): boolean {
    return proto3.util.equals(IssueTaxonomy, a, b);
  }
}

/**
 * The representation of a product component. It is composed of a canonical
 * name for the product (e.g., Google App Engine), languages in which a
 * support ticket can be created under this component, a template that
 * provides hints on important details to be filled out before submitting a
 * case. It also contains an embedded list of product subcomponents that have
 * similar attributes as top-level components.
 * (e.g., Google App Engine > Memcache).
 *
 * @generated from message google.cloud.support.common.IssueTaxonomy.Component
 */
export class IssueTaxonomy_Component extends Message<IssueTaxonomy_Component> {
  /**
   * User friendly name of this component.
   *
   * @generated from field: string display_name = 1;
   */
  displayName = "";

  /**
   * List of languages in which a support case can be created under this
   * component. Represented by language codes in ISO_639-1 standard.
   *
   * @generated from field: repeated string languages = 2;
   */
  languages: string[] = [];

  /**
   * Template to be used while filling the description of a support case.
   *
   * @generated from field: string template = 3;
   */
  template = "";

  /**
   * List of subcomponents under this component.
   *
   * @generated from field: repeated google.cloud.support.common.IssueTaxonomy.Component subcomponents = 4;
   */
  subcomponents: IssueTaxonomy_Component[] = [];

  constructor(data?: PartialMessage<IssueTaxonomy_Component>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.support.common.IssueTaxonomy.Component";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "languages", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "template", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "subcomponents", kind: "message", T: IssueTaxonomy_Component, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IssueTaxonomy_Component {
    return new IssueTaxonomy_Component().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IssueTaxonomy_Component {
    return new IssueTaxonomy_Component().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IssueTaxonomy_Component {
    return new IssueTaxonomy_Component().fromJsonString(jsonString, options);
  }

  static equals(a: IssueTaxonomy_Component | PlainMessage<IssueTaxonomy_Component> | undefined, b: IssueTaxonomy_Component | PlainMessage<IssueTaxonomy_Component> | undefined): boolean {
    return proto3.util.equals(IssueTaxonomy_Component, a, b);
  }
}

/**
 * Represents the category of issue (Technical or Non-Technical)
 * reported through a support case.
 *
 * @generated from message google.cloud.support.common.IssueTaxonomy.Category
 */
export class IssueTaxonomy_Category extends Message<IssueTaxonomy_Category> {
  /**
   * User friendly name of this category.
   *
   * @generated from field: string display_name = 1;
   */
  displayName = "";

  /**
   * Map of product components under this category.
   *
   * @generated from field: map<string, google.cloud.support.common.IssueTaxonomy.Component> components = 2;
   */
  components: { [key: string]: IssueTaxonomy_Component } = {};

  constructor(data?: PartialMessage<IssueTaxonomy_Category>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.support.common.IssueTaxonomy.Category";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "components", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: IssueTaxonomy_Component} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IssueTaxonomy_Category {
    return new IssueTaxonomy_Category().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IssueTaxonomy_Category {
    return new IssueTaxonomy_Category().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IssueTaxonomy_Category {
    return new IssueTaxonomy_Category().fromJsonString(jsonString, options);
  }

  static equals(a: IssueTaxonomy_Category | PlainMessage<IssueTaxonomy_Category> | undefined, b: IssueTaxonomy_Category | PlainMessage<IssueTaxonomy_Category> | undefined): boolean {
    return proto3.util.equals(IssueTaxonomy_Category, a, b);
  }
}

