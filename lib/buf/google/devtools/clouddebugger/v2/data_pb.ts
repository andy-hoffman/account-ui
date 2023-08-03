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
// @generated from file google/devtools/clouddebugger/v2/data.proto (package google.devtools.clouddebugger.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Int32Value, Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { ExtendedSourceContext, SourceContext } from "../../source/v1/source_context_pb.js";

/**
 * Represents a message with parameters.
 *
 * @generated from message google.devtools.clouddebugger.v2.FormatMessage
 */
export class FormatMessage extends Message<FormatMessage> {
  /**
   * Format template for the message. The `format` uses placeholders `$0`,
   * `$1`, etc. to reference parameters. `$$` can be used to denote the `$`
   * character.
   *
   * Examples:
   *
   * *   `Failed to load '$0' which helps debug $1 the first time it
   *     is loaded.  Again, $0 is very important.`
   * *   `Please pay $$10 to use $0 instead of $1.`
   *
   * @generated from field: string format = 1;
   */
  format = "";

  /**
   * Optional parameters to be embedded into the message.
   *
   * @generated from field: repeated string parameters = 2;
   */
  parameters: string[] = [];

  constructor(data?: PartialMessage<FormatMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.clouddebugger.v2.FormatMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "format", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "parameters", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormatMessage {
    return new FormatMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormatMessage {
    return new FormatMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormatMessage {
    return new FormatMessage().fromJsonString(jsonString, options);
  }

  static equals(a: FormatMessage | PlainMessage<FormatMessage> | undefined, b: FormatMessage | PlainMessage<FormatMessage> | undefined): boolean {
    return proto3.util.equals(FormatMessage, a, b);
  }
}

/**
 * Represents a contextual status message.
 * The message can indicate an error or informational status, and refer to
 * specific parts of the containing object.
 * For example, the `Breakpoint.status` field can indicate an error referring
 * to the `BREAKPOINT_SOURCE_LOCATION` with the message `Location not found`.
 *
 * @generated from message google.devtools.clouddebugger.v2.StatusMessage
 */
export class StatusMessage extends Message<StatusMessage> {
  /**
   * Distinguishes errors from informational messages.
   *
   * @generated from field: bool is_error = 1;
   */
  isError = false;

  /**
   * Reference to which the message applies.
   *
   * @generated from field: google.devtools.clouddebugger.v2.StatusMessage.Reference refers_to = 2;
   */
  refersTo = StatusMessage_Reference.UNSPECIFIED;

  /**
   * Status message text.
   *
   * @generated from field: google.devtools.clouddebugger.v2.FormatMessage description = 3;
   */
  description?: FormatMessage;

  constructor(data?: PartialMessage<StatusMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.clouddebugger.v2.StatusMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "is_error", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "refers_to", kind: "enum", T: proto3.getEnumType(StatusMessage_Reference) },
    { no: 3, name: "description", kind: "message", T: FormatMessage },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StatusMessage {
    return new StatusMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StatusMessage {
    return new StatusMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StatusMessage {
    return new StatusMessage().fromJsonString(jsonString, options);
  }

  static equals(a: StatusMessage | PlainMessage<StatusMessage> | undefined, b: StatusMessage | PlainMessage<StatusMessage> | undefined): boolean {
    return proto3.util.equals(StatusMessage, a, b);
  }
}

/**
 * Enumerates references to which the message applies.
 *
 * @generated from enum google.devtools.clouddebugger.v2.StatusMessage.Reference
 */
export enum StatusMessage_Reference {
  /**
   * Status doesn't refer to any particular input.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Status applies to the breakpoint and is related to its location.
   *
   * @generated from enum value: BREAKPOINT_SOURCE_LOCATION = 3;
   */
  BREAKPOINT_SOURCE_LOCATION = 3,

  /**
   * Status applies to the breakpoint and is related to its condition.
   *
   * @generated from enum value: BREAKPOINT_CONDITION = 4;
   */
  BREAKPOINT_CONDITION = 4,

  /**
   * Status applies to the breakpoint and is related to its expressions.
   *
   * @generated from enum value: BREAKPOINT_EXPRESSION = 7;
   */
  BREAKPOINT_EXPRESSION = 7,

  /**
   * Status applies to the breakpoint and is related to its age.
   *
   * @generated from enum value: BREAKPOINT_AGE = 8;
   */
  BREAKPOINT_AGE = 8,

  /**
   * Status applies to the entire variable.
   *
   * @generated from enum value: VARIABLE_NAME = 5;
   */
  VARIABLE_NAME = 5,

  /**
   * Status applies to variable value (variable name is valid).
   *
   * @generated from enum value: VARIABLE_VALUE = 6;
   */
  VARIABLE_VALUE = 6,
}
// Retrieve enum metadata with: proto3.getEnumType(StatusMessage_Reference)
proto3.util.setEnumType(StatusMessage_Reference, "google.devtools.clouddebugger.v2.StatusMessage.Reference", [
  { no: 0, name: "UNSPECIFIED" },
  { no: 3, name: "BREAKPOINT_SOURCE_LOCATION" },
  { no: 4, name: "BREAKPOINT_CONDITION" },
  { no: 7, name: "BREAKPOINT_EXPRESSION" },
  { no: 8, name: "BREAKPOINT_AGE" },
  { no: 5, name: "VARIABLE_NAME" },
  { no: 6, name: "VARIABLE_VALUE" },
]);

/**
 * Represents a location in the source code.
 *
 * @generated from message google.devtools.clouddebugger.v2.SourceLocation
 */
export class SourceLocation extends Message<SourceLocation> {
  /**
   * Path to the source file within the source context of the target binary.
   *
   * @generated from field: string path = 1;
   */
  path = "";

  /**
   * Line inside the file. The first line in the file has the value `1`.
   *
   * @generated from field: int32 line = 2;
   */
  line = 0;

  constructor(data?: PartialMessage<SourceLocation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.clouddebugger.v2.SourceLocation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "line", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SourceLocation {
    return new SourceLocation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SourceLocation {
    return new SourceLocation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SourceLocation {
    return new SourceLocation().fromJsonString(jsonString, options);
  }

  static equals(a: SourceLocation | PlainMessage<SourceLocation> | undefined, b: SourceLocation | PlainMessage<SourceLocation> | undefined): boolean {
    return proto3.util.equals(SourceLocation, a, b);
  }
}

/**
 * Represents a variable or an argument possibly of a compound object type.
 * Note how the following variables are represented:
 *
 * 1) A simple variable:
 *
 *     int x = 5
 *
 *     { name: "x", value: "5", type: "int" }  // Captured variable
 *
 * 2) A compound object:
 *
 *     struct T {
 *         int m1;
 *         int m2;
 *     };
 *     T x = { 3, 7 };
 *
 *     {  // Captured variable
 *         name: "x",
 *         type: "T",
 *         members { name: "m1", value: "3", type: "int" },
 *         members { name: "m2", value: "7", type: "int" }
 *     }
 *
 * 3) A pointer where the pointee was captured:
 *
 *     T x = { 3, 7 };
 *     T* p = &x;
 *
 *     {   // Captured variable
 *         name: "p",
 *         type: "T*",
 *         value: "0x00500500",
 *         members { name: "m1", value: "3", type: "int" },
 *         members { name: "m2", value: "7", type: "int" }
 *     }
 *
 * 4) A pointer where the pointee was not captured:
 *
 *     T* p = new T;
 *
 *     {   // Captured variable
 *         name: "p",
 *         type: "T*",
 *         value: "0x00400400"
 *         status { is_error: true, description { format: "unavailable" } }
 *     }
 *
 * The status should describe the reason for the missing value,
 * such as `<optimized out>`, `<inaccessible>`, `<pointers limit reached>`.
 *
 * Note that a null pointer should not have members.
 *
 * 5) An unnamed value:
 *
 *     int* p = new int(7);
 *
 *     {   // Captured variable
 *         name: "p",
 *         value: "0x00500500",
 *         type: "int*",
 *         members { value: "7", type: "int" } }
 *
 * 6) An unnamed pointer where the pointee was not captured:
 *
 *     int* p = new int(7);
 *     int** pp = &p;
 *
 *     {  // Captured variable
 *         name: "pp",
 *         value: "0x00500500",
 *         type: "int**",
 *         members {
 *             value: "0x00400400",
 *             type: "int*"
 *             status {
 *                 is_error: true,
 *                 description: { format: "unavailable" } }
 *             }
 *         }
 *     }
 *
 * To optimize computation, memory and network traffic, variables that
 * repeat in the output multiple times can be stored once in a shared
 * variable table and be referenced using the `var_table_index` field.  The
 * variables stored in the shared table are nameless and are essentially
 * a partition of the complete variable. To reconstruct the complete
 * variable, merge the referencing variable with the referenced variable.
 *
 * When using the shared variable table, the following variables:
 *
 *     T x = { 3, 7 };
 *     T* p = &x;
 *     T& r = x;
 *
 *     { name: "x", var_table_index: 3, type: "T" }  // Captured variables
 *     { name: "p", value "0x00500500", type="T*", var_table_index: 3 }
 *     { name: "r", type="T&", var_table_index: 3 }
 *
 *     {  // Shared variable table entry #3:
 *         members { name: "m1", value: "3", type: "int" },
 *         members { name: "m2", value: "7", type: "int" }
 *     }
 *
 * Note that the pointer address is stored with the referencing variable
 * and not with the referenced variable. This allows the referenced variable
 * to be shared between pointers and references.
 *
 * The type field is optional. The debugger agent may or may not support it.
 *
 * @generated from message google.devtools.clouddebugger.v2.Variable
 */
export class Variable extends Message<Variable> {
  /**
   * Name of the variable, if any.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * Simple value of the variable.
   *
   * @generated from field: string value = 2;
   */
  value = "";

  /**
   * Variable type (e.g. `MyClass`). If the variable is split with
   * `var_table_index`, `type` goes next to `value`. The interpretation of
   * a type is agent specific. It is recommended to include the dynamic type
   * rather than a static type of an object.
   *
   * @generated from field: string type = 6;
   */
  type = "";

  /**
   * Members contained or pointed to by the variable.
   *
   * @generated from field: repeated google.devtools.clouddebugger.v2.Variable members = 3;
   */
  members: Variable[] = [];

  /**
   * Reference to a variable in the shared variable table. More than
   * one variable can reference the same variable in the table. The
   * `var_table_index` field is an index into `variable_table` in Breakpoint.
   *
   * @generated from field: google.protobuf.Int32Value var_table_index = 4;
   */
  varTableIndex?: number;

  /**
   * Status associated with the variable. This field will usually stay
   * unset. A status of a single variable only applies to that variable or
   * expression. The rest of breakpoint data still remains valid. Variables
   * might be reported in error state even when breakpoint is not in final
   * state.
   *
   * The message may refer to variable name with `refers_to` set to
   * `VARIABLE_NAME`. Alternatively `refers_to` will be set to `VARIABLE_VALUE`.
   * In either case variable value and members will be unset.
   *
   * Example of error message applied to name: `Invalid expression syntax`.
   *
   * Example of information message applied to value: `Not captured`.
   *
   * Examples of error message applied to value:
   *
   * *   `Malformed string`,
   * *   `Field f not found in class C`
   * *   `Null pointer dereference`
   *
   * @generated from field: google.devtools.clouddebugger.v2.StatusMessage status = 5;
   */
  status?: StatusMessage;

  constructor(data?: PartialMessage<Variable>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.clouddebugger.v2.Variable";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "members", kind: "message", T: Variable, repeated: true },
    { no: 4, name: "var_table_index", kind: "message", T: Int32Value },
    { no: 5, name: "status", kind: "message", T: StatusMessage },
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
 * Represents a stack frame context.
 *
 * @generated from message google.devtools.clouddebugger.v2.StackFrame
 */
export class StackFrame extends Message<StackFrame> {
  /**
   * Demangled function name at the call site.
   *
   * @generated from field: string function = 1;
   */
  function = "";

  /**
   * Source location of the call site.
   *
   * @generated from field: google.devtools.clouddebugger.v2.SourceLocation location = 2;
   */
  location?: SourceLocation;

  /**
   * Set of arguments passed to this function.
   * Note that this might not be populated for all stack frames.
   *
   * @generated from field: repeated google.devtools.clouddebugger.v2.Variable arguments = 3;
   */
  arguments: Variable[] = [];

  /**
   * Set of local variables at the stack frame location.
   * Note that this might not be populated for all stack frames.
   *
   * @generated from field: repeated google.devtools.clouddebugger.v2.Variable locals = 4;
   */
  locals: Variable[] = [];

  constructor(data?: PartialMessage<StackFrame>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.clouddebugger.v2.StackFrame";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "function", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "location", kind: "message", T: SourceLocation },
    { no: 3, name: "arguments", kind: "message", T: Variable, repeated: true },
    { no: 4, name: "locals", kind: "message", T: Variable, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StackFrame {
    return new StackFrame().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StackFrame {
    return new StackFrame().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StackFrame {
    return new StackFrame().fromJsonString(jsonString, options);
  }

  static equals(a: StackFrame | PlainMessage<StackFrame> | undefined, b: StackFrame | PlainMessage<StackFrame> | undefined): boolean {
    return proto3.util.equals(StackFrame, a, b);
  }
}

/**
 * Represents the breakpoint specification, status and results.
 *
 * @generated from message google.devtools.clouddebugger.v2.Breakpoint
 */
export class Breakpoint extends Message<Breakpoint> {
  /**
   * Breakpoint identifier, unique in the scope of the debuggee.
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * Action that the agent should perform when the code at the
   * breakpoint location is hit.
   *
   * @generated from field: google.devtools.clouddebugger.v2.Breakpoint.Action action = 13;
   */
  action = Breakpoint_Action.CAPTURE;

  /**
   * Breakpoint source location.
   *
   * @generated from field: google.devtools.clouddebugger.v2.SourceLocation location = 2;
   */
  location?: SourceLocation;

  /**
   * Condition that triggers the breakpoint.
   * The condition is a compound boolean expression composed using expressions
   * in a programming language at the source location.
   *
   * @generated from field: string condition = 3;
   */
  condition = "";

  /**
   * List of read-only expressions to evaluate at the breakpoint location.
   * The expressions are composed using expressions in the programming language
   * at the source location. If the breakpoint action is `LOG`, the evaluated
   * expressions are included in log statements.
   *
   * @generated from field: repeated string expressions = 4;
   */
  expressions: string[] = [];

  /**
   * Only relevant when action is `LOG`. Defines the message to log when
   * the breakpoint hits. The message may include parameter placeholders `$0`,
   * `$1`, etc. These placeholders are replaced with the evaluated value
   * of the appropriate expression. Expressions not referenced in
   * `log_message_format` are not logged.
   *
   * Example: `Message received, id = $0, count = $1` with
   * `expressions` = `[ message.id, message.count ]`.
   *
   * @generated from field: string log_message_format = 14;
   */
  logMessageFormat = "";

  /**
   * Indicates the severity of the log. Only relevant when action is `LOG`.
   *
   * @generated from field: google.devtools.clouddebugger.v2.Breakpoint.LogLevel log_level = 15;
   */
  logLevel = Breakpoint_LogLevel.INFO;

  /**
   * When true, indicates that this is a final result and the
   * breakpoint state will not change from here on.
   *
   * @generated from field: bool is_final_state = 5;
   */
  isFinalState = false;

  /**
   * Time this breakpoint was created by the server in seconds resolution.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 11;
   */
  createTime?: Timestamp;

  /**
   * Time this breakpoint was finalized as seen by the server in seconds
   * resolution.
   *
   * @generated from field: google.protobuf.Timestamp final_time = 12;
   */
  finalTime?: Timestamp;

  /**
   * E-mail address of the user that created this breakpoint
   *
   * @generated from field: string user_email = 16;
   */
  userEmail = "";

  /**
   * Breakpoint status.
   *
   * The status includes an error flag and a human readable message.
   * This field is usually unset. The message can be either
   * informational or an error message. Regardless, clients should always
   * display the text message back to the user.
   *
   * Error status indicates complete failure of the breakpoint.
   *
   * Example (non-final state): `Still loading symbols...`
   *
   * Examples (final state):
   *
   * *   `Invalid line number` referring to location
   * *   `Field f not found in class C` referring to condition
   *
   * @generated from field: google.devtools.clouddebugger.v2.StatusMessage status = 10;
   */
  status?: StatusMessage;

  /**
   * The stack at breakpoint time.
   *
   * @generated from field: repeated google.devtools.clouddebugger.v2.StackFrame stack_frames = 7;
   */
  stackFrames: StackFrame[] = [];

  /**
   * Values of evaluated expressions at breakpoint time.
   * The evaluated expressions appear in exactly the same order they
   * are listed in the `expressions` field.
   * The `name` field holds the original expression text, the `value` or
   * `members` field holds the result of the evaluated expression.
   * If the expression cannot be evaluated, the `status` inside the `Variable`
   * will indicate an error and contain the error text.
   *
   * @generated from field: repeated google.devtools.clouddebugger.v2.Variable evaluated_expressions = 8;
   */
  evaluatedExpressions: Variable[] = [];

  /**
   * The `variable_table` exists to aid with computation, memory and network
   * traffic optimization.  It enables storing a variable once and reference
   * it from multiple variables, including variables stored in the
   * `variable_table` itself.
   * For example, the same `this` object, which may appear at many levels of
   * the stack, can have all of its data stored once in this table.  The
   * stack frame variables then would hold only a reference to it.
   *
   * The variable `var_table_index` field is an index into this repeated field.
   * The stored objects are nameless and get their name from the referencing
   * variable. The effective variable is a merge of the referencing variable
   * and the referenced variable.
   *
   * @generated from field: repeated google.devtools.clouddebugger.v2.Variable variable_table = 9;
   */
  variableTable: Variable[] = [];

  /**
   * A set of custom breakpoint properties, populated by the agent, to be
   * displayed to the user.
   *
   * @generated from field: map<string, string> labels = 17;
   */
  labels: { [key: string]: string } = {};

  constructor(data?: PartialMessage<Breakpoint>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.clouddebugger.v2.Breakpoint";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "action", kind: "enum", T: proto3.getEnumType(Breakpoint_Action) },
    { no: 2, name: "location", kind: "message", T: SourceLocation },
    { no: 3, name: "condition", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "expressions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 14, name: "log_message_format", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "log_level", kind: "enum", T: proto3.getEnumType(Breakpoint_LogLevel) },
    { no: 5, name: "is_final_state", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "create_time", kind: "message", T: Timestamp },
    { no: 12, name: "final_time", kind: "message", T: Timestamp },
    { no: 16, name: "user_email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "status", kind: "message", T: StatusMessage },
    { no: 7, name: "stack_frames", kind: "message", T: StackFrame, repeated: true },
    { no: 8, name: "evaluated_expressions", kind: "message", T: Variable, repeated: true },
    { no: 9, name: "variable_table", kind: "message", T: Variable, repeated: true },
    { no: 17, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Breakpoint {
    return new Breakpoint().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Breakpoint {
    return new Breakpoint().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Breakpoint {
    return new Breakpoint().fromJsonString(jsonString, options);
  }

  static equals(a: Breakpoint | PlainMessage<Breakpoint> | undefined, b: Breakpoint | PlainMessage<Breakpoint> | undefined): boolean {
    return proto3.util.equals(Breakpoint, a, b);
  }
}

/**
 * Actions that can be taken when a breakpoint hits.
 * Agents should reject breakpoints with unsupported or unknown action values.
 *
 * @generated from enum google.devtools.clouddebugger.v2.Breakpoint.Action
 */
export enum Breakpoint_Action {
  /**
   * Capture stack frame and variables and update the breakpoint.
   * The data is only captured once. After that the breakpoint is set
   * in a final state.
   *
   * @generated from enum value: CAPTURE = 0;
   */
  CAPTURE = 0,

  /**
   * Log each breakpoint hit. The breakpoint remains active until
   * deleted or expired.
   *
   * @generated from enum value: LOG = 1;
   */
  LOG = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(Breakpoint_Action)
proto3.util.setEnumType(Breakpoint_Action, "google.devtools.clouddebugger.v2.Breakpoint.Action", [
  { no: 0, name: "CAPTURE" },
  { no: 1, name: "LOG" },
]);

/**
 * Log severity levels.
 *
 * @generated from enum google.devtools.clouddebugger.v2.Breakpoint.LogLevel
 */
export enum Breakpoint_LogLevel {
  /**
   * Information log message.
   *
   * @generated from enum value: INFO = 0;
   */
  INFO = 0,

  /**
   * Warning log message.
   *
   * @generated from enum value: WARNING = 1;
   */
  WARNING = 1,

  /**
   * Error log message.
   *
   * @generated from enum value: ERROR = 2;
   */
  ERROR = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(Breakpoint_LogLevel)
proto3.util.setEnumType(Breakpoint_LogLevel, "google.devtools.clouddebugger.v2.Breakpoint.LogLevel", [
  { no: 0, name: "INFO" },
  { no: 1, name: "WARNING" },
  { no: 2, name: "ERROR" },
]);

/**
 * Represents the debugged application. The application may include one or more
 * replicated processes executing the same code. Each of these processes is
 * attached with a debugger agent, carrying out the debugging commands.
 * Agents attached to the same debuggee identify themselves as such by using
 * exactly the same Debuggee message value when registering.
 *
 * @generated from message google.devtools.clouddebugger.v2.Debuggee
 */
export class Debuggee extends Message<Debuggee> {
  /**
   * Unique identifier for the debuggee generated by the controller service.
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * Project the debuggee is associated with.
   * Use project number or id when registering a Google Cloud Platform project.
   *
   * @generated from field: string project = 2;
   */
  project = "";

  /**
   * Uniquifier to further distiguish the application.
   * It is possible that different applications might have identical values in
   * the debuggee message, thus, incorrectly identified as a single application
   * by the Controller service. This field adds salt to further distiguish the
   * application. Agents should consider seeding this field with value that
   * identifies the code, binary, configuration and environment.
   *
   * @generated from field: string uniquifier = 3;
   */
  uniquifier = "";

  /**
   * Human readable description of the debuggee.
   * Including a human-readable project name, environment name and version
   * information is recommended.
   *
   * @generated from field: string description = 4;
   */
  description = "";

  /**
   * If set to `true`, indicates that Controller service does not detect any
   * activity from the debuggee agents and the application is possibly stopped.
   *
   * @generated from field: bool is_inactive = 5;
   */
  isInactive = false;

  /**
   * Version ID of the agent.
   * Schema: `domain/language-platform/vmajor.minor` (for example
   * `google.com/java-gcp/v1.1`).
   *
   * @generated from field: string agent_version = 6;
   */
  agentVersion = "";

  /**
   * If set to `true`, indicates that the agent should disable itself and
   * detach from the debuggee.
   *
   * @generated from field: bool is_disabled = 7;
   */
  isDisabled = false;

  /**
   * Human readable message to be displayed to the user about this debuggee.
   * Absence of this field indicates no status. The message can be either
   * informational or an error status.
   *
   * @generated from field: google.devtools.clouddebugger.v2.StatusMessage status = 8;
   */
  status?: StatusMessage;

  /**
   * References to the locations and revisions of the source code used in the
   * deployed application.
   *
   * @generated from field: repeated google.devtools.source.v1.SourceContext source_contexts = 9;
   */
  sourceContexts: SourceContext[] = [];

  /**
   * References to the locations and revisions of the source code used in the
   * deployed application.
   *
   * NOTE: this field is experimental and can be ignored.
   *
   * @generated from field: repeated google.devtools.source.v1.ExtendedSourceContext ext_source_contexts = 13;
   */
  extSourceContexts: ExtendedSourceContext[] = [];

  /**
   * A set of custom debuggee properties, populated by the agent, to be
   * displayed to the user.
   *
   * @generated from field: map<string, string> labels = 11;
   */
  labels: { [key: string]: string } = {};

  constructor(data?: PartialMessage<Debuggee>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.clouddebugger.v2.Debuggee";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "uniquifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "is_inactive", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "agent_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "is_disabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "status", kind: "message", T: StatusMessage },
    { no: 9, name: "source_contexts", kind: "message", T: SourceContext, repeated: true },
    { no: 13, name: "ext_source_contexts", kind: "message", T: ExtendedSourceContext, repeated: true },
    { no: 11, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Debuggee {
    return new Debuggee().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Debuggee {
    return new Debuggee().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Debuggee {
    return new Debuggee().fromJsonString(jsonString, options);
  }

  static equals(a: Debuggee | PlainMessage<Debuggee> | undefined, b: Debuggee | PlainMessage<Debuggee> | undefined): boolean {
    return proto3.util.equals(Debuggee, a, b);
  }
}
