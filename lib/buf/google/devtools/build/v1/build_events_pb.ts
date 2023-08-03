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
// @generated from file google/devtools/build/v1/build_events.proto (package google.devtools.build.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Int32Value, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { BuildStatus } from "./build_status_pb.js";

/**
 * The type of console output stream.
 *
 * @generated from enum google.devtools.build.v1.ConsoleOutputStream
 */
export enum ConsoleOutputStream {
  /**
   * Unspecified or unknown.
   *
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * Normal output stream.
   *
   * @generated from enum value: STDOUT = 1;
   */
  STDOUT = 1,

  /**
   * Error output stream.
   *
   * @generated from enum value: STDERR = 2;
   */
  STDERR = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(ConsoleOutputStream)
proto3.util.setEnumType(ConsoleOutputStream, "google.devtools.build.v1.ConsoleOutputStream", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "STDOUT" },
  { no: 2, name: "STDERR" },
]);

/**
 * An event representing some state change that occured in the build. This
 * message does not include field for uniquely identifying an event.
 *
 * @generated from message google.devtools.build.v1.BuildEvent
 */
export class BuildEvent extends Message<BuildEvent> {
  /**
   * The timestamp of this event.
   *
   * @generated from field: google.protobuf.Timestamp event_time = 1;
   */
  eventTime?: Timestamp;

  /**
   * //////////////////////////////////////////////////////////////////////////
   * Events that indicate a state change of a build request in the build
   * queue.
   *
   * @generated from oneof google.devtools.build.v1.BuildEvent.event
   */
  event: {
    /**
     * An invocation attempt has started.
     *
     * @generated from field: google.devtools.build.v1.BuildEvent.InvocationAttemptStarted invocation_attempt_started = 51;
     */
    value: BuildEvent_InvocationAttemptStarted;
    case: "invocationAttemptStarted";
  } | {
    /**
     * An invocation attempt has finished.
     *
     * @generated from field: google.devtools.build.v1.BuildEvent.InvocationAttemptFinished invocation_attempt_finished = 52;
     */
    value: BuildEvent_InvocationAttemptFinished;
    case: "invocationAttemptFinished";
  } | {
    /**
     * The build is enqueued (just inserted to the build queue or put back
     * into the build queue due to a previous build failure).
     *
     * @generated from field: google.devtools.build.v1.BuildEvent.BuildEnqueued build_enqueued = 53;
     */
    value: BuildEvent_BuildEnqueued;
    case: "buildEnqueued";
  } | {
    /**
     * The build has finished. Set when the build is terminated.
     *
     * @generated from field: google.devtools.build.v1.BuildEvent.BuildFinished build_finished = 55;
     */
    value: BuildEvent_BuildFinished;
    case: "buildFinished";
  } | {
    /**
     * An event containing printed text.
     *
     * @generated from field: google.devtools.build.v1.BuildEvent.ConsoleOutput console_output = 56;
     */
    value: BuildEvent_ConsoleOutput;
    case: "consoleOutput";
  } | {
    /**
     * Indicates the end of a build event stream (with the same StreamId) from
     * a build component executing the requested build task.
     * *** This field does not indicate the WatchBuild RPC is finished. ***
     *
     * @generated from field: google.devtools.build.v1.BuildEvent.BuildComponentStreamFinished component_stream_finished = 59;
     */
    value: BuildEvent_BuildComponentStreamFinished;
    case: "componentStreamFinished";
  } | {
    /**
     * Structured build event generated by Bazel about its execution progress.
     *
     * @generated from field: google.protobuf.Any bazel_event = 60;
     */
    value: Any;
    case: "bazelEvent";
  } | {
    /**
     * An event that contains supplemental tool-specific information about
     * build execution.
     *
     * @generated from field: google.protobuf.Any build_execution_event = 61;
     */
    value: Any;
    case: "buildExecutionEvent";
  } | {
    /**
     * An event that contains supplemental tool-specific information about
     * source fetching.
     *
     * @generated from field: google.protobuf.Any source_fetch_event = 62;
     */
    value: Any;
    case: "sourceFetchEvent";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<BuildEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.build.v1.BuildEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "event_time", kind: "message", T: Timestamp },
    { no: 51, name: "invocation_attempt_started", kind: "message", T: BuildEvent_InvocationAttemptStarted, oneof: "event" },
    { no: 52, name: "invocation_attempt_finished", kind: "message", T: BuildEvent_InvocationAttemptFinished, oneof: "event" },
    { no: 53, name: "build_enqueued", kind: "message", T: BuildEvent_BuildEnqueued, oneof: "event" },
    { no: 55, name: "build_finished", kind: "message", T: BuildEvent_BuildFinished, oneof: "event" },
    { no: 56, name: "console_output", kind: "message", T: BuildEvent_ConsoleOutput, oneof: "event" },
    { no: 59, name: "component_stream_finished", kind: "message", T: BuildEvent_BuildComponentStreamFinished, oneof: "event" },
    { no: 60, name: "bazel_event", kind: "message", T: Any, oneof: "event" },
    { no: 61, name: "build_execution_event", kind: "message", T: Any, oneof: "event" },
    { no: 62, name: "source_fetch_event", kind: "message", T: Any, oneof: "event" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BuildEvent {
    return new BuildEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BuildEvent {
    return new BuildEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BuildEvent {
    return new BuildEvent().fromJsonString(jsonString, options);
  }

  static equals(a: BuildEvent | PlainMessage<BuildEvent> | undefined, b: BuildEvent | PlainMessage<BuildEvent> | undefined): boolean {
    return proto3.util.equals(BuildEvent, a, b);
  }
}

/**
 * Notification that the build system has attempted to run the build tool.
 *
 * @generated from message google.devtools.build.v1.BuildEvent.InvocationAttemptStarted
 */
export class BuildEvent_InvocationAttemptStarted extends Message<BuildEvent_InvocationAttemptStarted> {
  /**
   * The number of the invocation attempt, starting at 1 and increasing by 1
   * for each new attempt. Can be used to determine if there is a later
   * invocation attempt replacing the current one a client is processing.
   *
   * @generated from field: int64 attempt_number = 1;
   */
  attemptNumber = protoInt64.zero;

  constructor(data?: PartialMessage<BuildEvent_InvocationAttemptStarted>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.build.v1.BuildEvent.InvocationAttemptStarted";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "attempt_number", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BuildEvent_InvocationAttemptStarted {
    return new BuildEvent_InvocationAttemptStarted().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BuildEvent_InvocationAttemptStarted {
    return new BuildEvent_InvocationAttemptStarted().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BuildEvent_InvocationAttemptStarted {
    return new BuildEvent_InvocationAttemptStarted().fromJsonString(jsonString, options);
  }

  static equals(a: BuildEvent_InvocationAttemptStarted | PlainMessage<BuildEvent_InvocationAttemptStarted> | undefined, b: BuildEvent_InvocationAttemptStarted | PlainMessage<BuildEvent_InvocationAttemptStarted> | undefined): boolean {
    return proto3.util.equals(BuildEvent_InvocationAttemptStarted, a, b);
  }
}

/**
 * Notification that an invocation attempt has finished.
 *
 * @generated from message google.devtools.build.v1.BuildEvent.InvocationAttemptFinished
 */
export class BuildEvent_InvocationAttemptFinished extends Message<BuildEvent_InvocationAttemptFinished> {
  /**
   * The exit code of the build tool.
   *
   * @generated from field: google.protobuf.Int32Value exit_code = 2;
   */
  exitCode?: number;

  /**
   * Final status of the invocation.
   *
   * @generated from field: google.devtools.build.v1.BuildStatus invocation_status = 3;
   */
  invocationStatus?: BuildStatus;

  constructor(data?: PartialMessage<BuildEvent_InvocationAttemptFinished>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.build.v1.BuildEvent.InvocationAttemptFinished";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "exit_code", kind: "message", T: Int32Value },
    { no: 3, name: "invocation_status", kind: "message", T: BuildStatus },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BuildEvent_InvocationAttemptFinished {
    return new BuildEvent_InvocationAttemptFinished().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BuildEvent_InvocationAttemptFinished {
    return new BuildEvent_InvocationAttemptFinished().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BuildEvent_InvocationAttemptFinished {
    return new BuildEvent_InvocationAttemptFinished().fromJsonString(jsonString, options);
  }

  static equals(a: BuildEvent_InvocationAttemptFinished | PlainMessage<BuildEvent_InvocationAttemptFinished> | undefined, b: BuildEvent_InvocationAttemptFinished | PlainMessage<BuildEvent_InvocationAttemptFinished> | undefined): boolean {
    return proto3.util.equals(BuildEvent_InvocationAttemptFinished, a, b);
  }
}

/**
 * Notification that the build request is enqueued. It could happen when
 * a new build request is inserted into the build queue, or when a
 * build request is put back into the build queue due to a previous build
 * failure.
 *
 * @generated from message google.devtools.build.v1.BuildEvent.BuildEnqueued
 */
export class BuildEvent_BuildEnqueued extends Message<BuildEvent_BuildEnqueued> {
  constructor(data?: PartialMessage<BuildEvent_BuildEnqueued>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.build.v1.BuildEvent.BuildEnqueued";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BuildEvent_BuildEnqueued {
    return new BuildEvent_BuildEnqueued().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BuildEvent_BuildEnqueued {
    return new BuildEvent_BuildEnqueued().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BuildEvent_BuildEnqueued {
    return new BuildEvent_BuildEnqueued().fromJsonString(jsonString, options);
  }

  static equals(a: BuildEvent_BuildEnqueued | PlainMessage<BuildEvent_BuildEnqueued> | undefined, b: BuildEvent_BuildEnqueued | PlainMessage<BuildEvent_BuildEnqueued> | undefined): boolean {
    return proto3.util.equals(BuildEvent_BuildEnqueued, a, b);
  }
}

/**
 * Notification that the build request has finished, and no further
 * invocations will occur.  Note that this applies to the entire Build.
 * Individual invocations trigger InvocationFinished when they finish.
 *
 * @generated from message google.devtools.build.v1.BuildEvent.BuildFinished
 */
export class BuildEvent_BuildFinished extends Message<BuildEvent_BuildFinished> {
  /**
   * Final status of the build.
   *
   * @generated from field: google.devtools.build.v1.BuildStatus status = 1;
   */
  status?: BuildStatus;

  constructor(data?: PartialMessage<BuildEvent_BuildFinished>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.build.v1.BuildEvent.BuildFinished";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "status", kind: "message", T: BuildStatus },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BuildEvent_BuildFinished {
    return new BuildEvent_BuildFinished().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BuildEvent_BuildFinished {
    return new BuildEvent_BuildFinished().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BuildEvent_BuildFinished {
    return new BuildEvent_BuildFinished().fromJsonString(jsonString, options);
  }

  static equals(a: BuildEvent_BuildFinished | PlainMessage<BuildEvent_BuildFinished> | undefined, b: BuildEvent_BuildFinished | PlainMessage<BuildEvent_BuildFinished> | undefined): boolean {
    return proto3.util.equals(BuildEvent_BuildFinished, a, b);
  }
}

/**
 * Textual output written to standard output or standard error.
 *
 * @generated from message google.devtools.build.v1.BuildEvent.ConsoleOutput
 */
export class BuildEvent_ConsoleOutput extends Message<BuildEvent_ConsoleOutput> {
  /**
   * The output stream type.
   *
   * @generated from field: google.devtools.build.v1.ConsoleOutputStream type = 1;
   */
  type = ConsoleOutputStream.UNKNOWN;

  /**
   * The output stream content.
   *
   * @generated from oneof google.devtools.build.v1.BuildEvent.ConsoleOutput.output
   */
  output: {
    /**
     * Regular UTF-8 output; normal text.
     *
     * @generated from field: string text_output = 2;
     */
    value: string;
    case: "textOutput";
  } | {
    /**
     * Used if the output is not UTF-8 text (for example, a binary proto).
     *
     * @generated from field: bytes binary_output = 3;
     */
    value: Uint8Array;
    case: "binaryOutput";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<BuildEvent_ConsoleOutput>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.build.v1.BuildEvent.ConsoleOutput";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(ConsoleOutputStream) },
    { no: 2, name: "text_output", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "output" },
    { no: 3, name: "binary_output", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "output" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BuildEvent_ConsoleOutput {
    return new BuildEvent_ConsoleOutput().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BuildEvent_ConsoleOutput {
    return new BuildEvent_ConsoleOutput().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BuildEvent_ConsoleOutput {
    return new BuildEvent_ConsoleOutput().fromJsonString(jsonString, options);
  }

  static equals(a: BuildEvent_ConsoleOutput | PlainMessage<BuildEvent_ConsoleOutput> | undefined, b: BuildEvent_ConsoleOutput | PlainMessage<BuildEvent_ConsoleOutput> | undefined): boolean {
    return proto3.util.equals(BuildEvent_ConsoleOutput, a, b);
  }
}

/**
 * Notification of the end of a build event stream published by a build
 * component other than CONTROLLER (See StreamId.BuildComponents).
 *
 * @generated from message google.devtools.build.v1.BuildEvent.BuildComponentStreamFinished
 */
export class BuildEvent_BuildComponentStreamFinished extends Message<BuildEvent_BuildComponentStreamFinished> {
  /**
   * How the event stream finished.
   *
   * @generated from field: google.devtools.build.v1.BuildEvent.BuildComponentStreamFinished.FinishType type = 1;
   */
  type = BuildEvent_BuildComponentStreamFinished_FinishType.FINISH_TYPE_UNSPECIFIED;

  constructor(data?: PartialMessage<BuildEvent_BuildComponentStreamFinished>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.build.v1.BuildEvent.BuildComponentStreamFinished";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(BuildEvent_BuildComponentStreamFinished_FinishType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BuildEvent_BuildComponentStreamFinished {
    return new BuildEvent_BuildComponentStreamFinished().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BuildEvent_BuildComponentStreamFinished {
    return new BuildEvent_BuildComponentStreamFinished().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BuildEvent_BuildComponentStreamFinished {
    return new BuildEvent_BuildComponentStreamFinished().fromJsonString(jsonString, options);
  }

  static equals(a: BuildEvent_BuildComponentStreamFinished | PlainMessage<BuildEvent_BuildComponentStreamFinished> | undefined, b: BuildEvent_BuildComponentStreamFinished | PlainMessage<BuildEvent_BuildComponentStreamFinished> | undefined): boolean {
    return proto3.util.equals(BuildEvent_BuildComponentStreamFinished, a, b);
  }
}

/**
 * How did the event stream finish.
 *
 * @generated from enum google.devtools.build.v1.BuildEvent.BuildComponentStreamFinished.FinishType
 */
export enum BuildEvent_BuildComponentStreamFinished_FinishType {
  /**
   * Unknown or unspecified; callers should never set this value.
   *
   * @generated from enum value: FINISH_TYPE_UNSPECIFIED = 0;
   */
  FINISH_TYPE_UNSPECIFIED = 0,

  /**
   * Set by the event publisher to indicate a build event stream is
   * finished.
   *
   * @generated from enum value: FINISHED = 1;
   */
  FINISHED = 1,

  /**
   * Set by the WatchBuild RPC server when the publisher of a build event
   * stream stops publishing events without publishing a
   * BuildComponentStreamFinished event whose type equals FINISHED.
   *
   * @generated from enum value: EXPIRED = 2;
   */
  EXPIRED = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(BuildEvent_BuildComponentStreamFinished_FinishType)
proto3.util.setEnumType(BuildEvent_BuildComponentStreamFinished_FinishType, "google.devtools.build.v1.BuildEvent.BuildComponentStreamFinished.FinishType", [
  { no: 0, name: "FINISH_TYPE_UNSPECIFIED" },
  { no: 1, name: "FINISHED" },
  { no: 2, name: "EXPIRED" },
]);

/**
 * Unique identifier for a build event stream.
 *
 * @generated from message google.devtools.build.v1.StreamId
 */
export class StreamId extends Message<StreamId> {
  /**
   * The id of a Build message.
   *
   * @generated from field: string build_id = 1;
   */
  buildId = "";

  /**
   * The unique invocation ID within this build.
   * It should be the same as {invocation} (below) during the migration.
   *
   * @generated from field: string invocation_id = 6;
   */
  invocationId = "";

  /**
   * The component that emitted this event.
   *
   * @generated from field: google.devtools.build.v1.StreamId.BuildComponent component = 3;
   */
  component = StreamId_BuildComponent.UNKNOWN_COMPONENT;

  constructor(data?: PartialMessage<StreamId>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.build.v1.StreamId";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "build_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "invocation_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "component", kind: "enum", T: proto3.getEnumType(StreamId_BuildComponent) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamId {
    return new StreamId().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamId {
    return new StreamId().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamId {
    return new StreamId().fromJsonString(jsonString, options);
  }

  static equals(a: StreamId | PlainMessage<StreamId> | undefined, b: StreamId | PlainMessage<StreamId> | undefined): boolean {
    return proto3.util.equals(StreamId, a, b);
  }
}

/**
 * Which build component generates this event stream. Each build component
 * may generate one event stream.
 *
 * @generated from enum google.devtools.build.v1.StreamId.BuildComponent
 */
export enum StreamId_BuildComponent {
  /**
   * Unknown or unspecified; callers should never set this value.
   *
   * @generated from enum value: UNKNOWN_COMPONENT = 0;
   */
  UNKNOWN_COMPONENT = 0,

  /**
   * A component that coordinates builds.
   *
   * @generated from enum value: CONTROLLER = 1;
   */
  CONTROLLER = 1,

  /**
   * A component that runs executables needed to complete a build.
   *
   * @generated from enum value: WORKER = 2;
   */
  WORKER = 2,

  /**
   * A component that builds something.
   *
   * @generated from enum value: TOOL = 3;
   */
  TOOL = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(StreamId_BuildComponent)
proto3.util.setEnumType(StreamId_BuildComponent, "google.devtools.build.v1.StreamId.BuildComponent", [
  { no: 0, name: "UNKNOWN_COMPONENT" },
  { no: 1, name: "CONTROLLER" },
  { no: 2, name: "WORKER" },
  { no: 3, name: "TOOL" },
]);
