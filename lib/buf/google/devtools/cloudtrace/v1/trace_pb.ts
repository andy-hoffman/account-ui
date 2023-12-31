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
// @generated from file google/devtools/cloudtrace/v1/trace.proto (package google.devtools.cloudtrace.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * A trace describes how long it takes for an application to perform an
 * operation. It consists of a set of spans, each of which represent a single
 * timed event within the operation.
 *
 * @generated from message google.devtools.cloudtrace.v1.Trace
 */
export class Trace extends Message<Trace> {
  /**
   * Project ID of the Cloud project where the trace data is stored.
   *
   * @generated from field: string project_id = 1;
   */
  projectId = "";

  /**
   * Globally unique identifier for the trace. This identifier is a 128-bit
   * numeric value formatted as a 32-byte hex string.
   *
   * @generated from field: string trace_id = 2;
   */
  traceId = "";

  /**
   * Collection of spans in the trace.
   *
   * @generated from field: repeated google.devtools.cloudtrace.v1.TraceSpan spans = 3;
   */
  spans: TraceSpan[] = [];

  constructor(data?: PartialMessage<Trace>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v1.Trace";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "trace_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "spans", kind: "message", T: TraceSpan, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Trace {
    return new Trace().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Trace {
    return new Trace().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Trace {
    return new Trace().fromJsonString(jsonString, options);
  }

  static equals(a: Trace | PlainMessage<Trace> | undefined, b: Trace | PlainMessage<Trace> | undefined): boolean {
    return proto3.util.equals(Trace, a, b);
  }
}

/**
 * List of new or updated traces.
 *
 * @generated from message google.devtools.cloudtrace.v1.Traces
 */
export class Traces extends Message<Traces> {
  /**
   * List of traces.
   *
   * @generated from field: repeated google.devtools.cloudtrace.v1.Trace traces = 1;
   */
  traces: Trace[] = [];

  constructor(data?: PartialMessage<Traces>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v1.Traces";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "traces", kind: "message", T: Trace, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Traces {
    return new Traces().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Traces {
    return new Traces().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Traces {
    return new Traces().fromJsonString(jsonString, options);
  }

  static equals(a: Traces | PlainMessage<Traces> | undefined, b: Traces | PlainMessage<Traces> | undefined): boolean {
    return proto3.util.equals(Traces, a, b);
  }
}

/**
 * A span represents a single timed event within a trace. Spans can be nested
 * and form a trace tree. Often, a trace contains a root span that describes the
 * end-to-end latency of an operation and, optionally, one or more subspans for
 * its suboperations. Spans do not need to be contiguous. There may be gaps
 * between spans in a trace.
 *
 * @generated from message google.devtools.cloudtrace.v1.TraceSpan
 */
export class TraceSpan extends Message<TraceSpan> {
  /**
   * Identifier for the span. Must be a 64-bit integer other than 0 and
   * unique within a trace.
   *
   * @generated from field: fixed64 span_id = 1;
   */
  spanId = protoInt64.zero;

  /**
   * Distinguishes between spans generated in a particular context. For example,
   * two spans with the same name may be distinguished using `RPC_CLIENT`
   * and `RPC_SERVER` to identify queueing latency associated with the span.
   *
   * @generated from field: google.devtools.cloudtrace.v1.TraceSpan.SpanKind kind = 2;
   */
  kind = TraceSpan_SpanKind.SPAN_KIND_UNSPECIFIED;

  /**
   * Name of the span. Must be less than 128 bytes. The span name is sanitized
   * and displayed in the Stackdriver Trace tool in the
   * {% dynamic print site_values.console_name %}.
   * The name may be a method name or some other per-call site name.
   * For the same executable and the same call point, a best practice is
   * to use a consistent name, which makes it easier to correlate
   * cross-trace spans.
   *
   * @generated from field: string name = 3;
   */
  name = "";

  /**
   * Start time of the span in nanoseconds from the UNIX epoch.
   *
   * @generated from field: google.protobuf.Timestamp start_time = 4;
   */
  startTime?: Timestamp;

  /**
   * End time of the span in nanoseconds from the UNIX epoch.
   *
   * @generated from field: google.protobuf.Timestamp end_time = 5;
   */
  endTime?: Timestamp;

  /**
   * ID of the parent span, if any. Optional.
   *
   * @generated from field: fixed64 parent_span_id = 6;
   */
  parentSpanId = protoInt64.zero;

  /**
   * Collection of labels associated with the span. Label keys must be less than
   * 128 bytes. Label values must be less than 16 kilobytes (10MB for
   * `/stacktrace` values).
   *
   * Some predefined label keys exist, or you may create your own. When creating
   * your own, we recommend the following formats:
   *
   * * `/category/product/key` for agents of well-known products (e.g.
   *   `/db/mongodb/read_size`).
   * * `short_host/path/key` for domain-specific keys (e.g.
   *   `foo.com/myproduct/bar`)
   *
   * Predefined labels include:
   *
   * *   `/agent`
   * *   `/component`
   * *   `/error/message`
   * *   `/error/name`
   * *   `/http/client_city`
   * *   `/http/client_country`
   * *   `/http/client_protocol`
   * *   `/http/client_region`
   * *   `/http/host`
   * *   `/http/method`
   * *   `/http/redirected_url`
   * *   `/http/request/size`
   * *   `/http/response/size`
   * *   `/http/status_code`
   * *   `/http/url`
   * *   `/http/user_agent`
   * *   `/pid`
   * *   `/stacktrace`
   * *   `/tid`
   *
   * @generated from field: map<string, string> labels = 7;
   */
  labels: { [key: string]: string } = {};

  constructor(data?: PartialMessage<TraceSpan>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v1.TraceSpan";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "span_id", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
    { no: 2, name: "kind", kind: "enum", T: proto3.getEnumType(TraceSpan_SpanKind) },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "start_time", kind: "message", T: Timestamp },
    { no: 5, name: "end_time", kind: "message", T: Timestamp },
    { no: 6, name: "parent_span_id", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
    { no: 7, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TraceSpan {
    return new TraceSpan().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TraceSpan {
    return new TraceSpan().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TraceSpan {
    return new TraceSpan().fromJsonString(jsonString, options);
  }

  static equals(a: TraceSpan | PlainMessage<TraceSpan> | undefined, b: TraceSpan | PlainMessage<TraceSpan> | undefined): boolean {
    return proto3.util.equals(TraceSpan, a, b);
  }
}

/**
 * Type of span. Can be used to specify additional relationships between spans
 * in addition to a parent/child relationship.
 *
 * @generated from enum google.devtools.cloudtrace.v1.TraceSpan.SpanKind
 */
export enum TraceSpan_SpanKind {
  /**
   * Unspecified.
   *
   * @generated from enum value: SPAN_KIND_UNSPECIFIED = 0;
   */
  SPAN_KIND_UNSPECIFIED = 0,

  /**
   * Indicates that the span covers server-side handling of an RPC or other
   * remote network request.
   *
   * @generated from enum value: RPC_SERVER = 1;
   */
  RPC_SERVER = 1,

  /**
   * Indicates that the span covers the client-side wrapper around an RPC or
   * other remote request.
   *
   * @generated from enum value: RPC_CLIENT = 2;
   */
  RPC_CLIENT = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(TraceSpan_SpanKind)
proto3.util.setEnumType(TraceSpan_SpanKind, "google.devtools.cloudtrace.v1.TraceSpan.SpanKind", [
  { no: 0, name: "SPAN_KIND_UNSPECIFIED" },
  { no: 1, name: "RPC_SERVER" },
  { no: 2, name: "RPC_CLIENT" },
]);

/**
 * The request message for the `ListTraces` method. All fields are required
 * unless specified.
 *
 * @generated from message google.devtools.cloudtrace.v1.ListTracesRequest
 */
export class ListTracesRequest extends Message<ListTracesRequest> {
  /**
   * ID of the Cloud project where the trace data is stored.
   *
   * @generated from field: string project_id = 1;
   */
  projectId = "";

  /**
   * Type of data returned for traces in the list. Optional. Default is
   * `MINIMAL`.
   *
   * @generated from field: google.devtools.cloudtrace.v1.ListTracesRequest.ViewType view = 2;
   */
  view = ListTracesRequest_ViewType.VIEW_TYPE_UNSPECIFIED;

  /**
   * Maximum number of traces to return. If not specified or <= 0, the
   * implementation selects a reasonable value.  The implementation may
   * return fewer traces than the requested page size. Optional.
   *
   * @generated from field: int32 page_size = 3;
   */
  pageSize = 0;

  /**
   * Token identifying the page of results to return. If provided, use the
   * value of the `next_page_token` field from a previous request. Optional.
   *
   * @generated from field: string page_token = 4;
   */
  pageToken = "";

  /**
   * Start of the time interval (inclusive) during which the trace data was
   * collected from the application.
   *
   * @generated from field: google.protobuf.Timestamp start_time = 5;
   */
  startTime?: Timestamp;

  /**
   * End of the time interval (inclusive) during which the trace data was
   * collected from the application.
   *
   * @generated from field: google.protobuf.Timestamp end_time = 6;
   */
  endTime?: Timestamp;

  /**
   * An optional filter against labels for the request.
   *
   * By default, searches use prefix matching. To specify exact match, prepend
   * a plus symbol (`+`) to the search term.
   * Multiple terms are ANDed. Syntax:
   *
   * *   `root:NAME_PREFIX` or `NAME_PREFIX`: Return traces where any root
   *     span starts with `NAME_PREFIX`.
   * *   `+root:NAME` or `+NAME`: Return traces where any root span's name is
   *     exactly `NAME`.
   * *   `span:NAME_PREFIX`: Return traces where any span starts with
   *     `NAME_PREFIX`.
   * *   `+span:NAME`: Return traces where any span's name is exactly
   *     `NAME`.
   * *   `latency:DURATION`: Return traces whose overall latency is
   *     greater or equal to than `DURATION`. Accepted units are nanoseconds
   *     (`ns`), milliseconds (`ms`), and seconds (`s`). Default is `ms`. For
   *     example, `latency:24ms` returns traces whose overall latency
   *     is greater than or equal to 24 milliseconds.
   * *   `label:LABEL_KEY`: Return all traces containing the specified
   *     label key (exact match, case-sensitive) regardless of the key:value
   *     pair's value (including empty values).
   * *   `LABEL_KEY:VALUE_PREFIX`: Return all traces containing the specified
   *     label key (exact match, case-sensitive) whose value starts with
   *     `VALUE_PREFIX`. Both a key and a value must be specified.
   * *   `+LABEL_KEY:VALUE`: Return all traces containing a key:value pair
   *     exactly matching the specified text. Both a key and a value must be
   *     specified.
   * *   `method:VALUE`: Equivalent to `/http/method:VALUE`.
   * *   `url:VALUE`: Equivalent to `/http/url:VALUE`.
   *
   * @generated from field: string filter = 7;
   */
  filter = "";

  /**
   * Field used to sort the returned traces. Optional.
   * Can be one of the following:
   *
   * *   `trace_id`
   * *   `name` (`name` field of root span in the trace)
   * *   `duration` (difference between `end_time` and `start_time` fields of
   *      the root span)
   * *   `start` (`start_time` field of the root span)
   *
   * Descending order can be specified by appending `desc` to the sort field
   * (for example, `name desc`).
   *
   * Only one sort field is permitted.
   *
   * @generated from field: string order_by = 8;
   */
  orderBy = "";

  constructor(data?: PartialMessage<ListTracesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v1.ListTracesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "view", kind: "enum", T: proto3.getEnumType(ListTracesRequest_ViewType) },
    { no: 3, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "start_time", kind: "message", T: Timestamp },
    { no: 6, name: "end_time", kind: "message", T: Timestamp },
    { no: 7, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "order_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTracesRequest {
    return new ListTracesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTracesRequest {
    return new ListTracesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTracesRequest {
    return new ListTracesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListTracesRequest | PlainMessage<ListTracesRequest> | undefined, b: ListTracesRequest | PlainMessage<ListTracesRequest> | undefined): boolean {
    return proto3.util.equals(ListTracesRequest, a, b);
  }
}

/**
 * Type of data returned for traces in the list.
 *
 * @generated from enum google.devtools.cloudtrace.v1.ListTracesRequest.ViewType
 */
export enum ListTracesRequest_ViewType {
  /**
   * Default is `MINIMAL` if unspecified.
   *
   * @generated from enum value: VIEW_TYPE_UNSPECIFIED = 0;
   */
  VIEW_TYPE_UNSPECIFIED = 0,

  /**
   * Minimal view of the trace record that contains only the project
   * and trace IDs.
   *
   * @generated from enum value: MINIMAL = 1;
   */
  MINIMAL = 1,

  /**
   * Root span view of the trace record that returns the root spans along
   * with the minimal trace data.
   *
   * @generated from enum value: ROOTSPAN = 2;
   */
  ROOTSPAN = 2,

  /**
   * Complete view of the trace record that contains the actual trace data.
   * This is equivalent to calling the REST `get` or RPC `GetTrace` method
   * using the ID of each listed trace.
   *
   * @generated from enum value: COMPLETE = 3;
   */
  COMPLETE = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(ListTracesRequest_ViewType)
proto3.util.setEnumType(ListTracesRequest_ViewType, "google.devtools.cloudtrace.v1.ListTracesRequest.ViewType", [
  { no: 0, name: "VIEW_TYPE_UNSPECIFIED" },
  { no: 1, name: "MINIMAL" },
  { no: 2, name: "ROOTSPAN" },
  { no: 3, name: "COMPLETE" },
]);

/**
 * The response message for the `ListTraces` method.
 *
 * @generated from message google.devtools.cloudtrace.v1.ListTracesResponse
 */
export class ListTracesResponse extends Message<ListTracesResponse> {
  /**
   * List of trace records returned.
   *
   * @generated from field: repeated google.devtools.cloudtrace.v1.Trace traces = 1;
   */
  traces: Trace[] = [];

  /**
   * If defined, indicates that there are more traces that match the request
   * and that this value should be passed to the next request to continue
   * retrieving additional traces.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListTracesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v1.ListTracesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "traces", kind: "message", T: Trace, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTracesResponse {
    return new ListTracesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTracesResponse {
    return new ListTracesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTracesResponse {
    return new ListTracesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListTracesResponse | PlainMessage<ListTracesResponse> | undefined, b: ListTracesResponse | PlainMessage<ListTracesResponse> | undefined): boolean {
    return proto3.util.equals(ListTracesResponse, a, b);
  }
}

/**
 * The request message for the `GetTrace` method.
 *
 * @generated from message google.devtools.cloudtrace.v1.GetTraceRequest
 */
export class GetTraceRequest extends Message<GetTraceRequest> {
  /**
   * ID of the Cloud project where the trace data is stored.
   *
   * @generated from field: string project_id = 1;
   */
  projectId = "";

  /**
   * ID of the trace to return.
   *
   * @generated from field: string trace_id = 2;
   */
  traceId = "";

  constructor(data?: PartialMessage<GetTraceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v1.GetTraceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "trace_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTraceRequest {
    return new GetTraceRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTraceRequest {
    return new GetTraceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTraceRequest {
    return new GetTraceRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetTraceRequest | PlainMessage<GetTraceRequest> | undefined, b: GetTraceRequest | PlainMessage<GetTraceRequest> | undefined): boolean {
    return proto3.util.equals(GetTraceRequest, a, b);
  }
}

/**
 * The request message for the `PatchTraces` method.
 *
 * @generated from message google.devtools.cloudtrace.v1.PatchTracesRequest
 */
export class PatchTracesRequest extends Message<PatchTracesRequest> {
  /**
   * ID of the Cloud project where the trace data is stored.
   *
   * @generated from field: string project_id = 1;
   */
  projectId = "";

  /**
   * The body of the message.
   *
   * @generated from field: google.devtools.cloudtrace.v1.Traces traces = 2;
   */
  traces?: Traces;

  constructor(data?: PartialMessage<PatchTracesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudtrace.v1.PatchTracesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "traces", kind: "message", T: Traces },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PatchTracesRequest {
    return new PatchTracesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PatchTracesRequest {
    return new PatchTracesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PatchTracesRequest {
    return new PatchTracesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PatchTracesRequest | PlainMessage<PatchTracesRequest> | undefined, b: PatchTracesRequest | PlainMessage<PatchTracesRequest> | undefined): boolean {
    return proto3.util.equals(PatchTracesRequest, a, b);
  }
}

