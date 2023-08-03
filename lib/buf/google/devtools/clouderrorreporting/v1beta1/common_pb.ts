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
// @generated from file google/devtools/clouderrorreporting/v1beta1/common.proto (package google.devtools.clouderrorreporting.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * Description of a group of similar error events.
 *
 * @generated from message google.devtools.clouderrorreporting.v1beta1.ErrorGroup
 */
export class ErrorGroup extends Message<ErrorGroup> {
  /**
   * The group resource name.
   * Example: <code>projects/my-project-123/groups/my-groupid</code>
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * Group IDs are unique for a given project. If the same kind of error
   * occurs in different service contexts, it will receive the same group ID.
   *
   * @generated from field: string group_id = 2;
   */
  groupId = "";

  /**
   * Associated tracking issues.
   *
   * @generated from field: repeated google.devtools.clouderrorreporting.v1beta1.TrackingIssue tracking_issues = 3;
   */
  trackingIssues: TrackingIssue[] = [];

  constructor(data?: PartialMessage<ErrorGroup>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.clouderrorreporting.v1beta1.ErrorGroup";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "tracking_issues", kind: "message", T: TrackingIssue, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ErrorGroup {
    return new ErrorGroup().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ErrorGroup {
    return new ErrorGroup().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ErrorGroup {
    return new ErrorGroup().fromJsonString(jsonString, options);
  }

  static equals(a: ErrorGroup | PlainMessage<ErrorGroup> | undefined, b: ErrorGroup | PlainMessage<ErrorGroup> | undefined): boolean {
    return proto3.util.equals(ErrorGroup, a, b);
  }
}

/**
 * Information related to tracking the progress on resolving the error.
 *
 * @generated from message google.devtools.clouderrorreporting.v1beta1.TrackingIssue
 */
export class TrackingIssue extends Message<TrackingIssue> {
  /**
   * A URL pointing to a related entry in an issue tracking system.
   * Example: https://github.com/user/project/issues/4
   *
   * @generated from field: string url = 1;
   */
  url = "";

  constructor(data?: PartialMessage<TrackingIssue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.clouderrorreporting.v1beta1.TrackingIssue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TrackingIssue {
    return new TrackingIssue().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TrackingIssue {
    return new TrackingIssue().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TrackingIssue {
    return new TrackingIssue().fromJsonString(jsonString, options);
  }

  static equals(a: TrackingIssue | PlainMessage<TrackingIssue> | undefined, b: TrackingIssue | PlainMessage<TrackingIssue> | undefined): boolean {
    return proto3.util.equals(TrackingIssue, a, b);
  }
}

/**
 * An error event which is returned by the Error Reporting system.
 *
 * @generated from message google.devtools.clouderrorreporting.v1beta1.ErrorEvent
 */
export class ErrorEvent extends Message<ErrorEvent> {
  /**
   * Time when the event occurred as provided in the error report.
   * If the report did not contain a timestamp, the time the error was received
   * by the Error Reporting system is used.
   *
   * @generated from field: google.protobuf.Timestamp event_time = 1;
   */
  eventTime?: Timestamp;

  /**
   * The `ServiceContext` for which this error was reported.
   *
   * @generated from field: google.devtools.clouderrorreporting.v1beta1.ServiceContext service_context = 2;
   */
  serviceContext?: ServiceContext;

  /**
   * The stack trace that was reported or logged by the service.
   *
   * @generated from field: string message = 3;
   */
  message = "";

  /**
   * Data about the context in which the error occurred.
   *
   * @generated from field: google.devtools.clouderrorreporting.v1beta1.ErrorContext context = 5;
   */
  context?: ErrorContext;

  constructor(data?: PartialMessage<ErrorEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.clouderrorreporting.v1beta1.ErrorEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "event_time", kind: "message", T: Timestamp },
    { no: 2, name: "service_context", kind: "message", T: ServiceContext },
    { no: 3, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "context", kind: "message", T: ErrorContext },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ErrorEvent {
    return new ErrorEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ErrorEvent {
    return new ErrorEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ErrorEvent {
    return new ErrorEvent().fromJsonString(jsonString, options);
  }

  static equals(a: ErrorEvent | PlainMessage<ErrorEvent> | undefined, b: ErrorEvent | PlainMessage<ErrorEvent> | undefined): boolean {
    return proto3.util.equals(ErrorEvent, a, b);
  }
}

/**
 * Describes a running service that sends errors.
 * Its version changes over time and multiple versions can run in parallel.
 *
 * @generated from message google.devtools.clouderrorreporting.v1beta1.ServiceContext
 */
export class ServiceContext extends Message<ServiceContext> {
  /**
   * An identifier of the service, such as the name of the
   * executable, job, or Google App Engine service name. This field is expected
   * to have a low number of values that are relatively stable over time, as
   * opposed to `version`, which can be changed whenever new code is deployed.
   *
   * Contains the service name for error reports extracted from Google
   * App Engine logs or `default` if the App Engine default service is used.
   *
   * @generated from field: string service = 2;
   */
  service = "";

  /**
   * Represents the source code version that the developer provided,
   * which could represent a version label or a Git SHA-1 hash, for example.
   *
   * @generated from field: string version = 3;
   */
  version = "";

  /**
   * Type of the MonitoredResource. List of possible values:
   * https://cloud.google.com/monitoring/api/resources
   *
   * Value is set automatically for incoming errors and must not be set when
   * reporting errors.
   *
   * @generated from field: string resource_type = 4;
   */
  resourceType = "";

  constructor(data?: PartialMessage<ServiceContext>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.clouderrorreporting.v1beta1.ServiceContext";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "resource_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServiceContext {
    return new ServiceContext().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServiceContext {
    return new ServiceContext().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServiceContext {
    return new ServiceContext().fromJsonString(jsonString, options);
  }

  static equals(a: ServiceContext | PlainMessage<ServiceContext> | undefined, b: ServiceContext | PlainMessage<ServiceContext> | undefined): boolean {
    return proto3.util.equals(ServiceContext, a, b);
  }
}

/**
 * A description of the context in which an error occurred.
 * This data should be provided by the application when reporting an error,
 * unless the
 * error report has been generated automatically from Google App Engine logs.
 *
 * @generated from message google.devtools.clouderrorreporting.v1beta1.ErrorContext
 */
export class ErrorContext extends Message<ErrorContext> {
  /**
   * The HTTP request which was processed when the error was
   * triggered.
   *
   * @generated from field: google.devtools.clouderrorreporting.v1beta1.HttpRequestContext http_request = 1;
   */
  httpRequest?: HttpRequestContext;

  /**
   * The user who caused or was affected by the crash.
   * This can be a user ID, an email address, or an arbitrary token that
   * uniquely identifies the user.
   * When sending an error report, leave this field empty if the user was not
   * logged in. In this case the
   * Error Reporting system will use other data, such as remote IP address, to
   * distinguish affected users. See `affected_users_count` in
   * `ErrorGroupStats`.
   *
   * @generated from field: string user = 2;
   */
  user = "";

  /**
   * The location in the source code where the decision was made to
   * report the error, usually the place where it was logged.
   * For a logged exception this would be the source line where the
   * exception is logged, usually close to the place where it was
   * caught. This value is in contrast to `Exception.cause_location`,
   * which describes the source line where the exception was thrown.
   *
   * @generated from field: google.devtools.clouderrorreporting.v1beta1.SourceLocation report_location = 3;
   */
  reportLocation?: SourceLocation;

  constructor(data?: PartialMessage<ErrorContext>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.clouderrorreporting.v1beta1.ErrorContext";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "http_request", kind: "message", T: HttpRequestContext },
    { no: 2, name: "user", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "report_location", kind: "message", T: SourceLocation },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ErrorContext {
    return new ErrorContext().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ErrorContext {
    return new ErrorContext().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ErrorContext {
    return new ErrorContext().fromJsonString(jsonString, options);
  }

  static equals(a: ErrorContext | PlainMessage<ErrorContext> | undefined, b: ErrorContext | PlainMessage<ErrorContext> | undefined): boolean {
    return proto3.util.equals(ErrorContext, a, b);
  }
}

/**
 * HTTP request data that is related to a reported error.
 * This data should be provided by the application when reporting an error,
 * unless the
 * error report has been generated automatically from Google App Engine logs.
 *
 * @generated from message google.devtools.clouderrorreporting.v1beta1.HttpRequestContext
 */
export class HttpRequestContext extends Message<HttpRequestContext> {
  /**
   * The type of HTTP request, such as `GET`, `POST`, etc.
   *
   * @generated from field: string method = 1;
   */
  method = "";

  /**
   * The URL of the request.
   *
   * @generated from field: string url = 2;
   */
  url = "";

  /**
   * The user agent information that is provided with the request.
   *
   * @generated from field: string user_agent = 3;
   */
  userAgent = "";

  /**
   * The referrer information that is provided with the request.
   *
   * @generated from field: string referrer = 4;
   */
  referrer = "";

  /**
   * The HTTP response status code for the request.
   *
   * @generated from field: int32 response_status_code = 5;
   */
  responseStatusCode = 0;

  /**
   * The IP address from which the request originated.
   * This can be IPv4, IPv6, or a token which is derived from the
   * IP address, depending on the data that has been provided
   * in the error report.
   *
   * @generated from field: string remote_ip = 6;
   */
  remoteIp = "";

  constructor(data?: PartialMessage<HttpRequestContext>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.clouderrorreporting.v1beta1.HttpRequestContext";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "method", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_agent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "referrer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "response_status_code", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "remote_ip", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HttpRequestContext {
    return new HttpRequestContext().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HttpRequestContext {
    return new HttpRequestContext().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HttpRequestContext {
    return new HttpRequestContext().fromJsonString(jsonString, options);
  }

  static equals(a: HttpRequestContext | PlainMessage<HttpRequestContext> | undefined, b: HttpRequestContext | PlainMessage<HttpRequestContext> | undefined): boolean {
    return proto3.util.equals(HttpRequestContext, a, b);
  }
}

/**
 * Indicates a location in the source code of the service for which
 * errors are reported.
 * This data should be provided by the application when reporting an error,
 * unless the error report has been generated automatically from Google App
 * Engine logs. All fields are optional.
 *
 * @generated from message google.devtools.clouderrorreporting.v1beta1.SourceLocation
 */
export class SourceLocation extends Message<SourceLocation> {
  /**
   * The source code filename, which can include a truncated relative
   * path, or a full path from a production machine.
   *
   * @generated from field: string file_path = 1;
   */
  filePath = "";

  /**
   * 1-based. 0 indicates that the line number is unknown.
   *
   * @generated from field: int32 line_number = 2;
   */
  lineNumber = 0;

  /**
   * Human-readable name of a function or method.
   * The value can include optional context like the class or package name.
   * For example, `my.package.MyClass.method` in case of Java.
   *
   * @generated from field: string function_name = 4;
   */
  functionName = "";

  constructor(data?: PartialMessage<SourceLocation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.clouderrorreporting.v1beta1.SourceLocation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "file_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "line_number", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "function_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
