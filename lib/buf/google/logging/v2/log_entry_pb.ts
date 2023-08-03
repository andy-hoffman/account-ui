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
// @generated from file google/logging/v2/log_entry.proto (package google.logging.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, protoInt64, Struct, Timestamp } from "@bufbuild/protobuf";
import { MonitoredResource } from "../../api/monitored_resource_pb.js";
import { LogSeverity } from "../type/log_severity_pb.js";
import { HttpRequest } from "../type/http_request_pb.js";

/**
 * An individual entry in a log.
 *
 * @generated from message google.logging.v2.LogEntry
 */
export class LogEntry extends Message<LogEntry> {
  /**
   * Required. The resource name of the log to which this log entry belongs:
   *
   *     "projects/[PROJECT_ID]/logs/[LOG_ID]"
   *     "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
   *     "folders/[FOLDER_ID]/logs/[LOG_ID]"
   *
   * `[LOG_ID]` must be URL-encoded within `log_name`. Example:
   * `"organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity"`.
   * `[LOG_ID]` must be less than 512 characters long and can only include the
   * following characters: upper and lower case alphanumeric characters,
   * forward-slash, underscore, hyphen, and period.
   *
   * For backward compatibility, if `log_name` begins with a forward-slash, such
   * as `/projects/...`, then the log entry is ingested as usual but the
   * forward-slash is removed. Listing the log entry will not show the leading
   * slash and filtering for a log name with a leading slash will never return
   * any results.
   *
   * @generated from field: string log_name = 12;
   */
  logName = "";

  /**
   * Required. The monitored resource associated with this log entry.
   * Example: a log entry that reports a database error would be
   * associated with the monitored resource designating the particular
   * database that reported the error.
   *
   * @generated from field: google.api.MonitoredResource resource = 8;
   */
  resource?: MonitoredResource;

  /**
   * Optional. The log entry payload, which can be one of multiple types.
   *
   * @generated from oneof google.logging.v2.LogEntry.payload
   */
  payload: {
    /**
     * The log entry payload, represented as a protocol buffer.  Some
     * Google Cloud Platform services use this field for their log
     * entry payloads.
     *
     * @generated from field: google.protobuf.Any proto_payload = 2;
     */
    value: Any;
    case: "protoPayload";
  } | {
    /**
     * The log entry payload, represented as a Unicode string (UTF-8).
     *
     * @generated from field: string text_payload = 3;
     */
    value: string;
    case: "textPayload";
  } | {
    /**
     * The log entry payload, represented as a structure that is
     * expressed as a JSON object.
     *
     * @generated from field: google.protobuf.Struct json_payload = 6;
     */
    value: Struct;
    case: "jsonPayload";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * Optional. The time the event described by the log entry occurred.
   * This time is used to compute the log entry's age and to enforce
   * the logs retention period. If this field is omitted in a new log
   * entry, then Stackdriver Logging assigns it the current time.
   *
   * Incoming log entries should have timestamps that are no more than
   * the [logs retention period](/logging/quota-policy) in the past,
   * and no more than 24 hours in the future.
   * See the `entries.write` API method for more information.
   *
   * @generated from field: google.protobuf.Timestamp timestamp = 9;
   */
  timestamp?: Timestamp;

  /**
   * Output only. The time the log entry was received by Stackdriver Logging.
   *
   * @generated from field: google.protobuf.Timestamp receive_timestamp = 24;
   */
  receiveTimestamp?: Timestamp;

  /**
   * Optional. The severity of the log entry. The default value is
   * `LogSeverity.DEFAULT`.
   *
   * @generated from field: google.logging.type.LogSeverity severity = 10;
   */
  severity = LogSeverity.DEFAULT;

  /**
   * Optional. A unique identifier for the log entry. If you provide a value,
   * then Stackdriver Logging considers other log entries in the same project,
   * with the same `timestamp`, and with the same `insert_id` to be duplicates
   * which can be removed.  If omitted in new log entries, then Stackdriver
   * Logging assigns its own unique identifier. The `insert_id` is also used
   * to order log entries that have the same `timestamp` value.
   *
   * @generated from field: string insert_id = 4;
   */
  insertId = "";

  /**
   * Optional. Information about the HTTP request associated with this
   * log entry, if applicable.
   *
   * @generated from field: google.logging.type.HttpRequest http_request = 7;
   */
  httpRequest?: HttpRequest;

  /**
   * Optional. A set of user-defined (key, value) data that provides additional
   * information about the log entry.
   *
   * @generated from field: map<string, string> labels = 11;
   */
  labels: { [key: string]: string } = {};

  /**
   * Optional. Information about an operation associated with the log entry, if
   * applicable.
   *
   * @generated from field: google.logging.v2.LogEntryOperation operation = 15;
   */
  operation?: LogEntryOperation;

  /**
   * Optional. Resource name of the trace associated with the log entry, if any.
   * If it contains a relative resource name, the name is assumed to be relative
   * to `//tracing.googleapis.com`. Example:
   * `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
   *
   * @generated from field: string trace = 22;
   */
  trace = "";

  /**
   * Optional. Source code location information associated with the log entry,
   * if any.
   *
   * @generated from field: google.logging.v2.LogEntrySourceLocation source_location = 23;
   */
  sourceLocation?: LogEntrySourceLocation;

  constructor(data?: PartialMessage<LogEntry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.logging.v2.LogEntry";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 12, name: "log_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "resource", kind: "message", T: MonitoredResource },
    { no: 2, name: "proto_payload", kind: "message", T: Any, oneof: "payload" },
    { no: 3, name: "text_payload", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "payload" },
    { no: 6, name: "json_payload", kind: "message", T: Struct, oneof: "payload" },
    { no: 9, name: "timestamp", kind: "message", T: Timestamp },
    { no: 24, name: "receive_timestamp", kind: "message", T: Timestamp },
    { no: 10, name: "severity", kind: "enum", T: proto3.getEnumType(LogSeverity) },
    { no: 4, name: "insert_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "http_request", kind: "message", T: HttpRequest },
    { no: 11, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 15, name: "operation", kind: "message", T: LogEntryOperation },
    { no: 22, name: "trace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 23, name: "source_location", kind: "message", T: LogEntrySourceLocation },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogEntry {
    return new LogEntry().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogEntry {
    return new LogEntry().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogEntry {
    return new LogEntry().fromJsonString(jsonString, options);
  }

  static equals(a: LogEntry | PlainMessage<LogEntry> | undefined, b: LogEntry | PlainMessage<LogEntry> | undefined): boolean {
    return proto3.util.equals(LogEntry, a, b);
  }
}

/**
 * Additional information about a potentially long-running operation with which
 * a log entry is associated.
 *
 * @generated from message google.logging.v2.LogEntryOperation
 */
export class LogEntryOperation extends Message<LogEntryOperation> {
  /**
   * Optional. An arbitrary operation identifier. Log entries with the
   * same identifier are assumed to be part of the same operation.
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * Optional. An arbitrary producer identifier. The combination of
   * `id` and `producer` must be globally unique.  Examples for `producer`:
   * `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`.
   *
   * @generated from field: string producer = 2;
   */
  producer = "";

  /**
   * Optional. Set this to True if this is the first log entry in the operation.
   *
   * @generated from field: bool first = 3;
   */
  first = false;

  /**
   * Optional. Set this to True if this is the last log entry in the operation.
   *
   * @generated from field: bool last = 4;
   */
  last = false;

  constructor(data?: PartialMessage<LogEntryOperation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.logging.v2.LogEntryOperation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "producer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "first", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "last", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogEntryOperation {
    return new LogEntryOperation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogEntryOperation {
    return new LogEntryOperation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogEntryOperation {
    return new LogEntryOperation().fromJsonString(jsonString, options);
  }

  static equals(a: LogEntryOperation | PlainMessage<LogEntryOperation> | undefined, b: LogEntryOperation | PlainMessage<LogEntryOperation> | undefined): boolean {
    return proto3.util.equals(LogEntryOperation, a, b);
  }
}

/**
 * Additional information about the source code location that produced the log
 * entry.
 *
 * @generated from message google.logging.v2.LogEntrySourceLocation
 */
export class LogEntrySourceLocation extends Message<LogEntrySourceLocation> {
  /**
   * Optional. Source file name. Depending on the runtime environment, this
   * might be a simple name or a fully-qualified name.
   *
   * @generated from field: string file = 1;
   */
  file = "";

  /**
   * Optional. Line within the source file. 1-based; 0 indicates no line number
   * available.
   *
   * @generated from field: int64 line = 2;
   */
  line = protoInt64.zero;

  /**
   * Optional. Human-readable name of the function or method being invoked, with
   * optional context such as the class or package name. This information may be
   * used in contexts such as the logs viewer, where a file and line number are
   * less meaningful. The format can vary by language. For example:
   * `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function`
   * (Python).
   *
   * @generated from field: string function = 3;
   */
  function = "";

  constructor(data?: PartialMessage<LogEntrySourceLocation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.logging.v2.LogEntrySourceLocation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "file", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "line", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "function", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogEntrySourceLocation {
    return new LogEntrySourceLocation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogEntrySourceLocation {
    return new LogEntrySourceLocation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogEntrySourceLocation {
    return new LogEntrySourceLocation().fromJsonString(jsonString, options);
  }

  static equals(a: LogEntrySourceLocation | PlainMessage<LogEntrySourceLocation> | undefined, b: LogEntrySourceLocation | PlainMessage<LogEntrySourceLocation> | undefined): boolean {
    return proto3.util.equals(LogEntrySourceLocation, a, b);
  }
}

