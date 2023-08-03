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
// @generated from file google/cloud/runtimeconfig/v1beta1/resources.proto (package google.cloud.runtimeconfig.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Status } from "../../../rpc/status_pb.js";

/**
 * The `VariableState` describes the last known state of the variable and is
 * used during a `variables().watch` call to distinguish the state of the
 * variable.
 *
 * @generated from enum google.cloud.runtimeconfig.v1beta1.VariableState
 */
export enum VariableState {
  /**
   * Default variable state.
   *
   * @generated from enum value: VARIABLE_STATE_UNSPECIFIED = 0;
   */
  VARIABLE_STATE_UNSPECIFIED = 0,

  /**
   * The variable was updated, while `variables().watch` was executing.
   *
   * @generated from enum value: UPDATED = 1;
   */
  UPDATED = 1,

  /**
   * The variable was deleted, while `variables().watch` was executing.
   *
   * @generated from enum value: DELETED = 2;
   */
  DELETED = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(VariableState)
proto3.util.setEnumType(VariableState, "google.cloud.runtimeconfig.v1beta1.VariableState", [
  { no: 0, name: "VARIABLE_STATE_UNSPECIFIED" },
  { no: 1, name: "UPDATED" },
  { no: 2, name: "DELETED" },
]);

/**
 * A RuntimeConfig resource is the primary resource in the Cloud RuntimeConfig
 * service. A RuntimeConfig resource consists of metadata and a hierarchy of
 * variables.
 *
 * @generated from message google.cloud.runtimeconfig.v1beta1.RuntimeConfig
 */
export class RuntimeConfig extends Message<RuntimeConfig> {
  /**
   * The resource name of a runtime config. The name must have the format:
   *
   *     projects/[PROJECT_ID]/configs/[CONFIG_NAME]
   *
   * The `[PROJECT_ID]` must be a valid project ID, and `[CONFIG_NAME]` is an
   * arbitrary name that matches RFC 1035 segment specification. The length of
   * `[CONFIG_NAME]` must be less than 64 bytes.
   *
   * You pick the RuntimeConfig resource name, but the server will validate that
   * the name adheres to this format. After you create the resource, you cannot
   * change the resource's name.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * An optional description of the RuntimeConfig object.
   *
   * @generated from field: string description = 2;
   */
  description = "";

  constructor(data?: PartialMessage<RuntimeConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.runtimeconfig.v1beta1.RuntimeConfig";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RuntimeConfig {
    return new RuntimeConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RuntimeConfig {
    return new RuntimeConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RuntimeConfig {
    return new RuntimeConfig().fromJsonString(jsonString, options);
  }

  static equals(a: RuntimeConfig | PlainMessage<RuntimeConfig> | undefined, b: RuntimeConfig | PlainMessage<RuntimeConfig> | undefined): boolean {
    return proto3.util.equals(RuntimeConfig, a, b);
  }
}

/**
 * Describes a single variable within a RuntimeConfig resource.
 * The name denotes the hierarchical variable name. For example,
 * `ports/serving_port` is a valid variable name. The variable value is an
 * opaque string and only leaf variables can have values (that is, variables
 * that do not have any child variables).
 *
 * @generated from message google.cloud.runtimeconfig.v1beta1.Variable
 */
export class Variable extends Message<Variable> {
  /**
   * The name of the variable resource, in the format:
   *
   *     projects/[PROJECT_ID]/configs/[CONFIG_NAME]/variables/[VARIABLE_NAME]
   *
   * The `[PROJECT_ID]` must be a valid project ID, `[CONFIG_NAME]` must be a
   * valid RuntimeConfig reource and `[VARIABLE_NAME]` follows Unix file system
   * file path naming.
   *
   * The `[VARIABLE_NAME]` can contain ASCII letters, numbers, slashes and
   * dashes. Slashes are used as path element separators and are not part of the
   * `[VARIABLE_NAME]` itself, so `[VARIABLE_NAME]` must contain at least one
   * non-slash character. Multiple slashes are coalesced into single slash
   * character. Each path segment should follow RFC 1035 segment specification.
   * The length of a `[VARIABLE_NAME]` must be less than 256 bytes.
   *
   * Once you create a variable, you cannot change the variable name.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The the value of the variable. It can be either a binary or a string
   * value. You must specify one of either `value` or `text`. Specifying both
   * will cause the server to return an error.
   *
   * @generated from oneof google.cloud.runtimeconfig.v1beta1.Variable.contents
   */
  contents: {
    /**
     * The binary value of the variable. The length of the value must be less
     * than 4096 bytes. Empty values are also accepted. The value must be
     * base64 encoded. Only one of `value` or `text` can be set.
     *
     * @generated from field: bytes value = 2;
     */
    value: Uint8Array;
    case: "value";
  } | {
    /**
     * The string value of the variable. The length of the value must be less
     * than 4096 bytes. Empty values are also accepted. For example,
     * `text: "my text value"`. The string must be valid UTF-8.
     *
     * @generated from field: string text = 5;
     */
    value: string;
    case: "text";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * [Output Only] The time of the last variable update.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 3;
   */
  updateTime?: Timestamp;

  /**
   * [Ouput only] The current state of the variable. The variable state indicates
   * the outcome of the `variables().watch` call and is visible through the
   * `get` and `list` calls.
   *
   * @generated from field: google.cloud.runtimeconfig.v1beta1.VariableState state = 4;
   */
  state = VariableState.VARIABLE_STATE_UNSPECIFIED;

  constructor(data?: PartialMessage<Variable>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.runtimeconfig.v1beta1.Variable";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "contents" },
    { no: 5, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "contents" },
    { no: 3, name: "update_time", kind: "message", T: Timestamp },
    { no: 4, name: "state", kind: "enum", T: proto3.getEnumType(VariableState) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Variable {
    return new Variable().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Variable {
    return new Variable().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Variable {
    return new Variable().fromJsonString(jsonString, options);
  }

  static equals(a: Variable | PlainMessage<Variable> | undefined, b: Variable | PlainMessage<Variable> | undefined): boolean {
    return proto3.util.equals(Variable, a, b);
  }
}

/**
 * The condition that a Waiter resource is waiting for.
 *
 * @generated from message google.cloud.runtimeconfig.v1beta1.EndCondition
 */
export class EndCondition extends Message<EndCondition> {
  /**
   * The condition oneof holds the available condition types for this
   * EndCondition. Currently, the only available type is Cardinality.
   *
   * @generated from oneof google.cloud.runtimeconfig.v1beta1.EndCondition.condition
   */
  condition: {
    /**
     * The cardinality of the `EndCondition`.
     *
     * @generated from field: google.cloud.runtimeconfig.v1beta1.EndCondition.Cardinality cardinality = 1;
     */
    value: EndCondition_Cardinality;
    case: "cardinality";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<EndCondition>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.runtimeconfig.v1beta1.EndCondition";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "cardinality", kind: "message", T: EndCondition_Cardinality, oneof: "condition" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EndCondition {
    return new EndCondition().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EndCondition {
    return new EndCondition().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EndCondition {
    return new EndCondition().fromJsonString(jsonString, options);
  }

  static equals(a: EndCondition | PlainMessage<EndCondition> | undefined, b: EndCondition | PlainMessage<EndCondition> | undefined): boolean {
    return proto3.util.equals(EndCondition, a, b);
  }
}

/**
 * A Cardinality condition for the Waiter resource. A cardinality condition is
 * met when the number of variables under a specified path prefix reaches a
 * predefined number. For example, if you set a Cardinality condition where
 * the `path` is set to `/foo` and the number of paths is set to 2, the
 * following variables would meet the condition in a RuntimeConfig resource:
 *
 * + `/foo/variable1 = "value1"`
 * + `/foo/variable2 = "value2"`
 * + `/bar/variable3 = "value3"`
 *
 * It would not would not satisify the same condition with the `number` set to
 * 3, however, because there is only 2 paths that start with `/foo`.
 * Cardinality conditions are recursive; all subtrees under the specific
 * path prefix are counted.
 *
 * @generated from message google.cloud.runtimeconfig.v1beta1.EndCondition.Cardinality
 */
export class EndCondition_Cardinality extends Message<EndCondition_Cardinality> {
  /**
   * The root of the variable subtree to monitor. For example, `/foo`.
   *
   * @generated from field: string path = 1;
   */
  path = "";

  /**
   * The number variables under the `path` that must exist to meet this
   * condition. Defaults to 1 if not specified.
   *
   * @generated from field: int32 number = 2;
   */
  number = 0;

  constructor(data?: PartialMessage<EndCondition_Cardinality>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.runtimeconfig.v1beta1.EndCondition.Cardinality";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "number", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EndCondition_Cardinality {
    return new EndCondition_Cardinality().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EndCondition_Cardinality {
    return new EndCondition_Cardinality().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EndCondition_Cardinality {
    return new EndCondition_Cardinality().fromJsonString(jsonString, options);
  }

  static equals(a: EndCondition_Cardinality | PlainMessage<EndCondition_Cardinality> | undefined, b: EndCondition_Cardinality | PlainMessage<EndCondition_Cardinality> | undefined): boolean {
    return proto3.util.equals(EndCondition_Cardinality, a, b);
  }
}

/**
 * A Waiter resource waits for some end condition within a RuntimeConfig resource
 * to be met before it returns. For example, assume you have a distributed
 * system where each node writes to a Variable resource indidicating the node's
 * readiness as part of the startup process.
 *
 * You then configure a Waiter resource with the success condition set to wait
 * until some number of nodes have checked in. Afterwards, your application
 * runs some arbitrary code after the condition has been met and the waiter
 * returns successfully.
 *
 * Once created, a Waiter resource is immutable.
 *
 * To learn more about using waiters, read the
 * [Creating a Waiter](/deployment-manager/runtime-configurator/creating-a-waiter)
 * documentation.
 *
 * @generated from message google.cloud.runtimeconfig.v1beta1.Waiter
 */
export class Waiter extends Message<Waiter> {
  /**
   * The name of the Waiter resource, in the format:
   *
   *     projects/[PROJECT_ID]/configs/[CONFIG_NAME]/waiters/[WAITER_NAME]
   *
   * The `[PROJECT_ID]` must be a valid Google Cloud project ID,
   * the `[CONFIG_NAME]` must be a valid RuntimeConfig resource, the
   * `[WAITER_NAME]` must match RFC 1035 segment specification, and the length
   * of `[WAITER_NAME]` must be less than 64 bytes.
   *
   * After you create a Waiter resource, you cannot change the resource name.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * [Required] Specifies the timeout of the waiter in seconds, beginning from
   * the instant that `waiters().create` method is called. If this time elapses
   * before the success or failure conditions are met, the waiter fails and sets
   * the `error` code to `DEADLINE_EXCEEDED`.
   *
   * @generated from field: google.protobuf.Duration timeout = 2;
   */
  timeout?: Duration;

  /**
   * [Optional] The failure condition of this waiter. If this condition is met,
   * `done` will be set to `true` and the `error` code will be set to `ABORTED`.
   * The failure condition takes precedence over the success condition. If both
   * conditions are met, a failure will be indicated. This value is optional; if
   * no failure condition is set, the only failure scenario will be a timeout.
   *
   * @generated from field: google.cloud.runtimeconfig.v1beta1.EndCondition failure = 3;
   */
  failure?: EndCondition;

  /**
   * [Required] The success condition. If this condition is met, `done` will be
   * set to `true` and the `error` value will remain unset. The failure condition
   * takes precedence over the success condition. If both conditions are met, a
   * failure will be indicated.
   *
   * @generated from field: google.cloud.runtimeconfig.v1beta1.EndCondition success = 4;
   */
  success?: EndCondition;

  /**
   * [Output Only] The instant at which this Waiter resource was created. Adding
   * the value of `timeout` to this instant yields the timeout deadline for the
   * waiter.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 5;
   */
  createTime?: Timestamp;

  /**
   * [Output Only] If the value is `false`, it means the waiter is still waiting
   * for one of its conditions to be met.
   *
   * If true, the waiter has finished. If the waiter finished due to a timeout
   * or failure, `error` will be set.
   *
   * @generated from field: bool done = 6;
   */
  done = false;

  /**
   * [Output Only] If the waiter ended due to a failure or timeout, this value
   * will be set.
   *
   * @generated from field: google.rpc.Status error = 7;
   */
  error?: Status;

  constructor(data?: PartialMessage<Waiter>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.runtimeconfig.v1beta1.Waiter";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "timeout", kind: "message", T: Duration },
    { no: 3, name: "failure", kind: "message", T: EndCondition },
    { no: 4, name: "success", kind: "message", T: EndCondition },
    { no: 5, name: "create_time", kind: "message", T: Timestamp },
    { no: 6, name: "done", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "error", kind: "message", T: Status },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Waiter {
    return new Waiter().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Waiter {
    return new Waiter().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Waiter {
    return new Waiter().fromJsonString(jsonString, options);
  }

  static equals(a: Waiter | PlainMessage<Waiter> | undefined, b: Waiter | PlainMessage<Waiter> | undefined): boolean {
    return proto3.util.equals(Waiter, a, b);
  }
}
