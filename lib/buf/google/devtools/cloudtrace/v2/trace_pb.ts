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
// @generated from file google/devtools/cloudtrace/v2/trace.proto (package google.devtools.cloudtrace.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { BoolValue, Int32Value, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Status } from "../../../rpc/status_pb.js";

/**
 * A span represents a single operation within a trace. Spans can be
 * nested to form a trace tree. Often, a trace contains a root span
 * that describes the end-to-end latency, and one or more subspans for
 * its sub-operations. A trace can also contain multiple root spans,
 * or none at all. Spans do not need to be contiguous&mdash;there may be
 * gaps or overlaps between spans in a trace.
 *
 * @generated from message google.devtools.cloudtrace.v2.Span
 */
export class Span extends Message<Span> {
  /**
   * The resource name of the span in the following format:
   *
   *     projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/[SPAN_ID]
   *
   * [TRACE_ID] is a unique identifier for a trace within a project.
   * [SPAN_ID] is a unique identifier for a span within a trace,
   * assigned when the span is created.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The [SPAN_ID] portion of the span's resource name.
   * The ID is a 16-character hexadecimal encoding of an 8-byte array.
   *
   * @generated from field: string span_id = 2;
   */
  spanId = "";

  /**
   * The [SPAN_ID] of this span's parent span. If this is a root span,
   * then this field must be empty.
   *
   * @generated from field: string parent_span_id = 3;
   */
  parentSpanId = "";

  /**
   * A description of the span's operation (up to 128 bytes).
   * Stackdriver Trace displays the description in the
   * {% dynamic print site_values.console_name %}.
   * For example, the display name can be a qualified method name or a file name
   * and a line number where the operation is called. A best practice is to use
   * the same display name within an application and at the same call point.
   * This makes it easier to correlate spans in different traces.
   *
   * @generated from field: google.devtools.cloudtrace.v2.TruncatableString display_name = 4;
   */
  displayName?: TruncatableString;

  /**
   * The start time of the span. On the client side, this is the time kept by
   * the local machine where the span execution starts. On the server side, this
   * is the time when the server's application handler starts running.
   *
   * @generated from field: google.protobuf.Timestamp start_time = 5;
   */
  startTime?: Timestamp;

  /**
   * The end time of the span. On the client side, this is the time kept by
   * the local machine where the span execution ends. On the server side, this
   * is the time when the server application handler stops running.
   *
   * @generated from field: google.protobuf.Timestamp end_time = 6;
   */
  endTime?: Timestamp;

  /**
   * A set of attributes on the span. There is a limit of 32 attributes per
   * span.
   *
   * @generated from field: google.devtools.cloudtrace.v2.Span.Attributes attributes = 7;
   */
  attributes?: Span_Attributes;

  /**
   * Stack trace captured at the start of the span.
   *
   * @generated from field: google.devtools.cloudtrace.v2.StackTrace stack_trace = 8;
   */
  stackTrace?: StackTrace;

  /**
   * The included time events. There can be up to 32 annotations and 128 message
   * events per span.
   *
   * @generated from field: google.devtools.cloudtrace.v2.Span.TimeEvents time_events = 9;
   */
  timeEvents?: Span_TimeEvents;

  /**
   * A maximum of 128 links are allowed per Span.
   *
   * @generated from field: google.devtools.cloudtrace.v2.Span.Links links = 10;
   */
  links?: Span_Links;

  /**
   * An optional final status for this span.
   *
   * @generated from field: google.rpc.Status status = 11;
   */
  status?: Status;

  /**
   * A highly recommended but not required flag that identifies when a trace
   * crosses a process boundary. True when the parent_span belongs to the
   * same process as the current span.
   *
   * @generated from field: google.protobuf.BoolValue same_process_as_parent_span = 12;
   */
  sameProcessAsParentSpan?: boolean;

  /**
   * An optional number of child spans that were generated while this span
   * was active. If set, allows implementation to detect missing child spans.
   *
   * @generated from field: google.protobuf.Int32Value child_span_count = 13;
   */
  childSpanCount?: number;

  constructor(data?: PartialMessage<Span>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v2.Span";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "span_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "parent_span_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "display_name", kind: "message", T: TruncatableString },
    { no: 5, name: "start_time", kind: "message", T: Timestamp },
    { no: 6, name: "end_time", kind: "message", T: Timestamp },
    { no: 7, name: "attributes", kind: "message", T: Span_Attributes },
    { no: 8, name: "stack_trace", kind: "message", T: StackTrace },
    { no: 9, name: "time_events", kind: "message", T: Span_TimeEvents },
    { no: 10, name: "links", kind: "message", T: Span_Links },
    { no: 11, name: "status", kind: "message", T: Status },
    { no: 12, name: "same_process_as_parent_span", kind: "message", T: BoolValue },
    { no: 13, name: "child_span_count", kind: "message", T: Int32Value },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Span {
    return new Span().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Span {
    return new Span().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Span {
    return new Span().fromJsonString(jsonString, options);
  }

  static equals(a: Span | PlainMessage<Span> | undefined, b: Span | PlainMessage<Span> | undefined): boolean {
    return proto3.util.equals(Span, a, b);
  }
}

/**
 * A set of attributes, each in the format `[KEY]:[VALUE]`.
 *
 * @generated from message google.devtools.cloudtrace.v2.Span.Attributes
 */
export class Span_Attributes extends Message<Span_Attributes> {
  /**
   * The set of attributes. Each attribute's key can be up to 128 bytes
   * long. The value can be a string up to 256 bytes, an integer, or the
   * Boolean values `true` and `false`. For example:
   *
   *     "/instance_id": "my-instance"
   *     "/http/user_agent": ""
   *     "/http/request_bytes": 300
   *     "abc.com/myattribute": true
   *
   * @generated from field: map<string, google.devtools.cloudtrace.v2.AttributeValue> attribute_map = 1;
   */
  attributeMap: { [key: string]: AttributeValue } = {};

  /**
   * The number of attributes that were discarded. Attributes can be discarded
   * because their keys are too long or because there are too many attributes.
   * If this value is 0 then all attributes are valid.
   *
   * @generated from field: int32 dropped_attributes_count = 2;
   */
  droppedAttributesCount = 0;

  constructor(data?: PartialMessage<Span_Attributes>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v2.Span.Attributes";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "attribute_map", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: AttributeValue} },
    { no: 2, name: "dropped_attributes_count", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Span_Attributes {
    return new Span_Attributes().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Span_Attributes {
    return new Span_Attributes().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Span_Attributes {
    return new Span_Attributes().fromJsonString(jsonString, options);
  }

  static equals(a: Span_Attributes | PlainMessage<Span_Attributes> | undefined, b: Span_Attributes | PlainMessage<Span_Attributes> | undefined): boolean {
    return proto3.util.equals(Span_Attributes, a, b);
  }
}

/**
 * A time-stamped annotation or message event in the Span.
 *
 * @generated from message google.devtools.cloudtrace.v2.Span.TimeEvent
 */
export class Span_TimeEvent extends Message<Span_TimeEvent> {
  /**
   * The timestamp indicating the time the event occurred.
   *
   * @generated from field: google.protobuf.Timestamp time = 1;
   */
  time?: Timestamp;

  /**
   * A `TimeEvent` can contain either an `Annotation` object or a
   * `MessageEvent` object, but not both.
   *
   * @generated from oneof google.devtools.cloudtrace.v2.Span.TimeEvent.value
   */
  value: {
    /**
     * Text annotation with a set of attributes.
     *
     * @generated from field: google.devtools.cloudtrace.v2.Span.TimeEvent.Annotation annotation = 2;
     */
    value: Span_TimeEvent_Annotation;
    case: "annotation";
  } | {
    /**
     * An event describing a message sent/received between Spans.
     *
     * @generated from field: google.devtools.cloudtrace.v2.Span.TimeEvent.MessageEvent message_event = 3;
     */
    value: Span_TimeEvent_MessageEvent;
    case: "messageEvent";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Span_TimeEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v2.Span.TimeEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "time", kind: "message", T: Timestamp },
    { no: 2, name: "annotation", kind: "message", T: Span_TimeEvent_Annotation, oneof: "value" },
    { no: 3, name: "message_event", kind: "message", T: Span_TimeEvent_MessageEvent, oneof: "value" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Span_TimeEvent {
    return new Span_TimeEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Span_TimeEvent {
    return new Span_TimeEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Span_TimeEvent {
    return new Span_TimeEvent().fromJsonString(jsonString, options);
  }

  static equals(a: Span_TimeEvent | PlainMessage<Span_TimeEvent> | undefined, b: Span_TimeEvent | PlainMessage<Span_TimeEvent> | undefined): boolean {
    return proto3.util.equals(Span_TimeEvent, a, b);
  }
}

/**
 * Text annotation with a set of attributes.
 *
 * @generated from message google.devtools.cloudtrace.v2.Span.TimeEvent.Annotation
 */
export class Span_TimeEvent_Annotation extends Message<Span_TimeEvent_Annotation> {
  /**
   * A user-supplied message describing the event. The maximum length for
   * the description is 256 bytes.
   *
   * @generated from field: google.devtools.cloudtrace.v2.TruncatableString description = 1;
   */
  description?: TruncatableString;

  /**
   * A set of attributes on the annotation. There is a limit of 4 attributes
   * per Annotation.
   *
   * @generated from field: google.devtools.cloudtrace.v2.Span.Attributes attributes = 2;
   */
  attributes?: Span_Attributes;

  constructor(data?: PartialMessage<Span_TimeEvent_Annotation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v2.Span.TimeEvent.Annotation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "description", kind: "message", T: TruncatableString },
    { no: 2, name: "attributes", kind: "message", T: Span_Attributes },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Span_TimeEvent_Annotation {
    return new Span_TimeEvent_Annotation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Span_TimeEvent_Annotation {
    return new Span_TimeEvent_Annotation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Span_TimeEvent_Annotation {
    return new Span_TimeEvent_Annotation().fromJsonString(jsonString, options);
  }

  static equals(a: Span_TimeEvent_Annotation | PlainMessage<Span_TimeEvent_Annotation> | undefined, b: Span_TimeEvent_Annotation | PlainMessage<Span_TimeEvent_Annotation> | undefined): boolean {
    return proto3.util.equals(Span_TimeEvent_Annotation, a, b);
  }
}

/**
 * An event describing a message sent/received between Spans.
 *
 * @generated from message google.devtools.cloudtrace.v2.Span.TimeEvent.MessageEvent
 */
export class Span_TimeEvent_MessageEvent extends Message<Span_TimeEvent_MessageEvent> {
  /**
   * Type of MessageEvent. Indicates whether the message was sent or
   * received.
   *
   * @generated from field: google.devtools.cloudtrace.v2.Span.TimeEvent.MessageEvent.Type type = 1;
   */
  type = Span_TimeEvent_MessageEvent_Type.TYPE_UNSPECIFIED;

  /**
   * An identifier for the MessageEvent's message that can be used to match
   * SENT and RECEIVED MessageEvents. It is recommended to be unique within
   * a Span.
   *
   * @generated from field: int64 id = 2;
   */
  id = protoInt64.zero;

  /**
   * The number of uncompressed bytes sent or received.
   *
   * @generated from field: int64 uncompressed_size_bytes = 3;
   */
  uncompressedSizeBytes = protoInt64.zero;

  /**
   * The number of compressed bytes sent or received. If missing assumed to
   * be the same size as uncompressed.
   *
   * @generated from field: int64 compressed_size_bytes = 4;
   */
  compressedSizeBytes = protoInt64.zero;

  constructor(data?: PartialMessage<Span_TimeEvent_MessageEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v2.Span.TimeEvent.MessageEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(Span_TimeEvent_MessageEvent_Type) },
    { no: 2, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "uncompressed_size_bytes", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "compressed_size_bytes", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Span_TimeEvent_MessageEvent {
    return new Span_TimeEvent_MessageEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Span_TimeEvent_MessageEvent {
    return new Span_TimeEvent_MessageEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Span_TimeEvent_MessageEvent {
    return new Span_TimeEvent_MessageEvent().fromJsonString(jsonString, options);
  }

  static equals(a: Span_TimeEvent_MessageEvent | PlainMessage<Span_TimeEvent_MessageEvent> | undefined, b: Span_TimeEvent_MessageEvent | PlainMessage<Span_TimeEvent_MessageEvent> | undefined): boolean {
    return proto3.util.equals(Span_TimeEvent_MessageEvent, a, b);
  }
}

/**
 * Indicates whether the message was sent or received.
 *
 * @generated from enum google.devtools.cloudtrace.v2.Span.TimeEvent.MessageEvent.Type
 */
export enum Span_TimeEvent_MessageEvent_Type {
  /**
   * Unknown event type.
   *
   * @generated from enum value: TYPE_UNSPECIFIED = 0;
   */
  TYPE_UNSPECIFIED = 0,

  /**
   * Indicates a sent message.
   *
   * @generated from enum value: SENT = 1;
   */
  SENT = 1,

  /**
   * Indicates a received message.
   *
   * @generated from enum value: RECEIVED = 2;
   */
  RECEIVED = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(Span_TimeEvent_MessageEvent_Type)
proto3.util.setEnumType(Span_TimeEvent_MessageEvent_Type, "google.devtools.cloudtrace.v2.Span.TimeEvent.MessageEvent.Type", [
  { no: 0, name: "TYPE_UNSPECIFIED" },
  { no: 1, name: "SENT" },
  { no: 2, name: "RECEIVED" },
]);

/**
 * A collection of `TimeEvent`s. A `TimeEvent` is a time-stamped annotation
 * on the span, consisting of either user-supplied key:value pairs, or
 * details of a message sent/received between Spans.
 *
 * @generated from message google.devtools.cloudtrace.v2.Span.TimeEvents
 */
export class Span_TimeEvents extends Message<Span_TimeEvents> {
  /**
   * A collection of `TimeEvent`s.
   *
   * @generated from field: repeated google.devtools.cloudtrace.v2.Span.TimeEvent time_event = 1;
   */
  timeEvent: Span_TimeEvent[] = [];

  /**
   * The number of dropped annotations in all the included time events.
   * If the value is 0, then no annotations were dropped.
   *
   * @generated from field: int32 dropped_annotations_count = 2;
   */
  droppedAnnotationsCount = 0;

  /**
   * The number of dropped message events in all the included time events.
   * If the value is 0, then no message events were dropped.
   *
   * @generated from field: int32 dropped_message_events_count = 3;
   */
  droppedMessageEventsCount = 0;

  constructor(data?: PartialMessage<Span_TimeEvents>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v2.Span.TimeEvents";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "time_event", kind: "message", T: Span_TimeEvent, repeated: true },
    { no: 2, name: "dropped_annotations_count", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "dropped_message_events_count", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Span_TimeEvents {
    return new Span_TimeEvents().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Span_TimeEvents {
    return new Span_TimeEvents().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Span_TimeEvents {
    return new Span_TimeEvents().fromJsonString(jsonString, options);
  }

  static equals(a: Span_TimeEvents | PlainMessage<Span_TimeEvents> | undefined, b: Span_TimeEvents | PlainMessage<Span_TimeEvents> | undefined): boolean {
    return proto3.util.equals(Span_TimeEvents, a, b);
  }
}

/**
 * A pointer from the current span to another span in the same trace or in a
 * different trace. For example, this can be used in batching operations,
 * where a single batch handler processes multiple requests from different
 * traces or when the handler receives a request from a different project.
 *
 * @generated from message google.devtools.cloudtrace.v2.Span.Link
 */
export class Span_Link extends Message<Span_Link> {
  /**
   * `TRACE_ID` identifies a trace within a project.
   *
   * @generated from field: string trace_id = 1;
   */
  traceId = "";

  /**
   * `SPAN_ID` identifies a span within a trace.
   *
   * @generated from field: string span_id = 2;
   */
  spanId = "";

  /**
   * The relationship of the current span relative to the linked span.
   *
   * @generated from field: google.devtools.cloudtrace.v2.Span.Link.Type type = 3;
   */
  type = Span_Link_Type.TYPE_UNSPECIFIED;

  /**
   * A set of attributes on the link. There is a limit of 32 attributes per
   * link.
   *
   * @generated from field: google.devtools.cloudtrace.v2.Span.Attributes attributes = 4;
   */
  attributes?: Span_Attributes;

  constructor(data?: PartialMessage<Span_Link>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v2.Span.Link";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "trace_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "span_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "type", kind: "enum", T: proto3.getEnumType(Span_Link_Type) },
    { no: 4, name: "attributes", kind: "message", T: Span_Attributes },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Span_Link {
    return new Span_Link().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Span_Link {
    return new Span_Link().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Span_Link {
    return new Span_Link().fromJsonString(jsonString, options);
  }

  static equals(a: Span_Link | PlainMessage<Span_Link> | undefined, b: Span_Link | PlainMessage<Span_Link> | undefined): boolean {
    return proto3.util.equals(Span_Link, a, b);
  }
}

/**
 * The relationship of the current span relative to the linked span: child,
 * parent, or unspecified.
 *
 * @generated from enum google.devtools.cloudtrace.v2.Span.Link.Type
 */
export enum Span_Link_Type {
  /**
   * The relationship of the two spans is unknown.
   *
   * @generated from enum value: TYPE_UNSPECIFIED = 0;
   */
  TYPE_UNSPECIFIED = 0,

  /**
   * The linked span is a child of the current span.
   *
   * @generated from enum value: CHILD_LINKED_SPAN = 1;
   */
  CHILD_LINKED_SPAN = 1,

  /**
   * The linked span is a parent of the current span.
   *
   * @generated from enum value: PARENT_LINKED_SPAN = 2;
   */
  PARENT_LINKED_SPAN = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(Span_Link_Type)
proto3.util.setEnumType(Span_Link_Type, "google.devtools.cloudtrace.v2.Span.Link.Type", [
  { no: 0, name: "TYPE_UNSPECIFIED" },
  { no: 1, name: "CHILD_LINKED_SPAN" },
  { no: 2, name: "PARENT_LINKED_SPAN" },
]);

/**
 * A collection of links, which are references from this span to a span
 * in the same or different trace.
 *
 * @generated from message google.devtools.cloudtrace.v2.Span.Links
 */
export class Span_Links extends Message<Span_Links> {
  /**
   * A collection of links.
   *
   * @generated from field: repeated google.devtools.cloudtrace.v2.Span.Link link = 1;
   */
  link: Span_Link[] = [];

  /**
   * The number of dropped links after the maximum size was enforced. If
   * this value is 0, then no links were dropped.
   *
   * @generated from field: int32 dropped_links_count = 2;
   */
  droppedLinksCount = 0;

  constructor(data?: PartialMessage<Span_Links>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v2.Span.Links";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "link", kind: "message", T: Span_Link, repeated: true },
    { no: 2, name: "dropped_links_count", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Span_Links {
    return new Span_Links().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Span_Links {
    return new Span_Links().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Span_Links {
    return new Span_Links().fromJsonString(jsonString, options);
  }

  static equals(a: Span_Links | PlainMessage<Span_Links> | undefined, b: Span_Links | PlainMessage<Span_Links> | undefined): boolean {
    return proto3.util.equals(Span_Links, a, b);
  }
}

/**
 * The allowed types for [VALUE] in a `[KEY]:[VALUE]` attribute.
 *
 * @generated from message google.devtools.cloudtrace.v2.AttributeValue
 */
export class AttributeValue extends Message<AttributeValue> {
  /**
   * The type of the value.
   *
   * @generated from oneof google.devtools.cloudtrace.v2.AttributeValue.value
   */
  value: {
    /**
     * A string up to 256 bytes long.
     *
     * @generated from field: google.devtools.cloudtrace.v2.TruncatableString string_value = 1;
     */
    value: TruncatableString;
    case: "stringValue";
  } | {
    /**
     * A 64-bit signed integer.
     *
     * @generated from field: int64 int_value = 2;
     */
    value: bigint;
    case: "intValue";
  } | {
    /**
     * A Boolean value represented by `true` or `false`.
     *
     * @generated from field: bool bool_value = 3;
     */
    value: boolean;
    case: "boolValue";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<AttributeValue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v2.AttributeValue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "string_value", kind: "message", T: TruncatableString, oneof: "value" },
    { no: 2, name: "int_value", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "value" },
    { no: 3, name: "bool_value", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "value" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AttributeValue {
    return new AttributeValue().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AttributeValue {
    return new AttributeValue().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AttributeValue {
    return new AttributeValue().fromJsonString(jsonString, options);
  }

  static equals(a: AttributeValue | PlainMessage<AttributeValue> | undefined, b: AttributeValue | PlainMessage<AttributeValue> | undefined): boolean {
    return proto3.util.equals(AttributeValue, a, b);
  }
}

/**
 * A call stack appearing in a trace.
 *
 * @generated from message google.devtools.cloudtrace.v2.StackTrace
 */
export class StackTrace extends Message<StackTrace> {
  /**
   * Stack frames in this stack trace. A maximum of 128 frames are allowed.
   *
   * @generated from field: google.devtools.cloudtrace.v2.StackTrace.StackFrames stack_frames = 1;
   */
  stackFrames?: StackTrace_StackFrames;

  /**
   * The hash ID is used to conserve network bandwidth for duplicate
   * stack traces within a single trace.
   *
   * Often multiple spans will have identical stack traces.
   * The first occurrence of a stack trace should contain both the
   * `stackFrame` content and a value in `stackTraceHashId`.
   *
   * Subsequent spans within the same request can refer
   * to that stack trace by only setting `stackTraceHashId`.
   *
   * @generated from field: int64 stack_trace_hash_id = 2;
   */
  stackTraceHashId = protoInt64.zero;

  constructor(data?: PartialMessage<StackTrace>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v2.StackTrace";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "stack_frames", kind: "message", T: StackTrace_StackFrames },
    { no: 2, name: "stack_trace_hash_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StackTrace {
    return new StackTrace().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StackTrace {
    return new StackTrace().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StackTrace {
    return new StackTrace().fromJsonString(jsonString, options);
  }

  static equals(a: StackTrace | PlainMessage<StackTrace> | undefined, b: StackTrace | PlainMessage<StackTrace> | undefined): boolean {
    return proto3.util.equals(StackTrace, a, b);
  }
}

/**
 * Represents a single stack frame in a stack trace.
 *
 * @generated from message google.devtools.cloudtrace.v2.StackTrace.StackFrame
 */
export class StackTrace_StackFrame extends Message<StackTrace_StackFrame> {
  /**
   * The fully-qualified name that uniquely identifies the function or
   * method that is active in this frame (up to 1024 bytes).
   *
   * @generated from field: google.devtools.cloudtrace.v2.TruncatableString function_name = 1;
   */
  functionName?: TruncatableString;

  /**
   * An un-mangled function name, if `function_name` is
   * [mangled](http://www.avabodh.com/cxxin/namemangling.html). The name can
   * be fully-qualified (up to 1024 bytes).
   *
   * @generated from field: google.devtools.cloudtrace.v2.TruncatableString original_function_name = 2;
   */
  originalFunctionName?: TruncatableString;

  /**
   * The name of the source file where the function call appears (up to 256
   * bytes).
   *
   * @generated from field: google.devtools.cloudtrace.v2.TruncatableString file_name = 3;
   */
  fileName?: TruncatableString;

  /**
   * The line number in `file_name` where the function call appears.
   *
   * @generated from field: int64 line_number = 4;
   */
  lineNumber = protoInt64.zero;

  /**
   * The column number where the function call appears, if available.
   * This is important in JavaScript because of its anonymous functions.
   *
   * @generated from field: int64 column_number = 5;
   */
  columnNumber = protoInt64.zero;

  /**
   * The binary module from where the code was loaded.
   *
   * @generated from field: google.devtools.cloudtrace.v2.Module load_module = 6;
   */
  loadModule?: Module;

  /**
   * The version of the deployed source code (up to 128 bytes).
   *
   * @generated from field: google.devtools.cloudtrace.v2.TruncatableString source_version = 7;
   */
  sourceVersion?: TruncatableString;

  constructor(data?: PartialMessage<StackTrace_StackFrame>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v2.StackTrace.StackFrame";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "function_name", kind: "message", T: TruncatableString },
    { no: 2, name: "original_function_name", kind: "message", T: TruncatableString },
    { no: 3, name: "file_name", kind: "message", T: TruncatableString },
    { no: 4, name: "line_number", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "column_number", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "load_module", kind: "message", T: Module },
    { no: 7, name: "source_version", kind: "message", T: TruncatableString },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StackTrace_StackFrame {
    return new StackTrace_StackFrame().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StackTrace_StackFrame {
    return new StackTrace_StackFrame().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StackTrace_StackFrame {
    return new StackTrace_StackFrame().fromJsonString(jsonString, options);
  }

  static equals(a: StackTrace_StackFrame | PlainMessage<StackTrace_StackFrame> | undefined, b: StackTrace_StackFrame | PlainMessage<StackTrace_StackFrame> | undefined): boolean {
    return proto3.util.equals(StackTrace_StackFrame, a, b);
  }
}

/**
 * A collection of stack frames, which can be truncated.
 *
 * @generated from message google.devtools.cloudtrace.v2.StackTrace.StackFrames
 */
export class StackTrace_StackFrames extends Message<StackTrace_StackFrames> {
  /**
   * Stack frames in this call stack.
   *
   * @generated from field: repeated google.devtools.cloudtrace.v2.StackTrace.StackFrame frame = 1;
   */
  frame: StackTrace_StackFrame[] = [];

  /**
   * The number of stack frames that were dropped because there
   * were too many stack frames.
   * If this value is 0, then no stack frames were dropped.
   *
   * @generated from field: int32 dropped_frames_count = 2;
   */
  droppedFramesCount = 0;

  constructor(data?: PartialMessage<StackTrace_StackFrames>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v2.StackTrace.StackFrames";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "frame", kind: "message", T: StackTrace_StackFrame, repeated: true },
    { no: 2, name: "dropped_frames_count", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StackTrace_StackFrames {
    return new StackTrace_StackFrames().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StackTrace_StackFrames {
    return new StackTrace_StackFrames().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StackTrace_StackFrames {
    return new StackTrace_StackFrames().fromJsonString(jsonString, options);
  }

  static equals(a: StackTrace_StackFrames | PlainMessage<StackTrace_StackFrames> | undefined, b: StackTrace_StackFrames | PlainMessage<StackTrace_StackFrames> | undefined): boolean {
    return proto3.util.equals(StackTrace_StackFrames, a, b);
  }
}

/**
 * Binary module.
 *
 * @generated from message google.devtools.cloudtrace.v2.Module
 */
export class Module extends Message<Module> {
  /**
   * For example: main binary, kernel modules, and dynamic libraries
   * such as libc.so, sharedlib.so (up to 256 bytes).
   *
   * @generated from field: google.devtools.cloudtrace.v2.TruncatableString module = 1;
   */
  module?: TruncatableString;

  /**
   * A unique identifier for the module, usually a hash of its
   * contents (up to 128 bytes).
   *
   * @generated from field: google.devtools.cloudtrace.v2.TruncatableString build_id = 2;
   */
  buildId?: TruncatableString;

  constructor(data?: PartialMessage<Module>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v2.Module";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "module", kind: "message", T: TruncatableString },
    { no: 2, name: "build_id", kind: "message", T: TruncatableString },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module {
    return new Module().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module {
    return new Module().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module {
    return new Module().fromJsonString(jsonString, options);
  }

  static equals(a: Module | PlainMessage<Module> | undefined, b: Module | PlainMessage<Module> | undefined): boolean {
    return proto3.util.equals(Module, a, b);
  }
}

/**
 * Represents a string that might be shortened to a specified length.
 *
 * @generated from message google.devtools.cloudtrace.v2.TruncatableString
 */
export class TruncatableString extends Message<TruncatableString> {
  /**
   * The shortened string. For example, if the original string was 500
   * bytes long and the limit of the string was 128 bytes, then this
   * value contains the first 128 bytes of the 500-byte string. Note that
   * truncation always happens on the character boundary, to ensure that
   * truncated string is still valid UTF8. In case of multi-byte characters,
   * size of truncated string can be less than truncation limit.
   *
   * @generated from field: string value = 1;
   */
  value = "";

  /**
   * The number of bytes removed from the original string. If this
   * value is 0, then the string was not shortened.
   *
   * @generated from field: int32 truncated_byte_count = 2;
   */
  truncatedByteCount = 0;

  constructor(data?: PartialMessage<TruncatableString>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v2.TruncatableString";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "truncated_byte_count", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TruncatableString {
    return new TruncatableString().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TruncatableString {
    return new TruncatableString().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TruncatableString {
    return new TruncatableString().fromJsonString(jsonString, options);
  }

  static equals(a: TruncatableString | PlainMessage<TruncatableString> | undefined, b: TruncatableString | PlainMessage<TruncatableString> | undefined): boolean {
    return proto3.util.equals(TruncatableString, a, b);
  }
}

