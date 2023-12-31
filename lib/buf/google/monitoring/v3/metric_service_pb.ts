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
// @generated from file google/monitoring/v3/metric_service.proto (package google.monitoring.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { MonitoredResourceDescriptor } from "../../api/monitored_resource_pb.js";
import { MetricDescriptor } from "../../api/metric_pb.js";
import { Aggregation, TimeInterval } from "./common_pb.js";
import { TimeSeries } from "./metric_pb.js";
import { Status } from "../../rpc/status_pb.js";

/**
 * The `ListMonitoredResourceDescriptors` request.
 *
 * @generated from message google.monitoring.v3.ListMonitoredResourceDescriptorsRequest
 */
export class ListMonitoredResourceDescriptorsRequest extends Message<ListMonitoredResourceDescriptorsRequest> {
  /**
   * The project on which to execute the request. The format is
   * `"projects/{project_id_or_number}"`.
   *
   * @generated from field: string name = 5;
   */
  name = "";

  /**
   * An optional [filter](/monitoring/api/v3/filters) describing
   * the descriptors to be returned.  The filter can reference
   * the descriptor's type and labels. For example, the
   * following filter returns only Google Compute Engine descriptors
   * that have an `id` label:
   *
   *     resource.type = starts_with("gce_") AND resource.label:id
   *
   * @generated from field: string filter = 2;
   */
  filter = "";

  /**
   * A positive number that is the maximum number of results to return.
   *
   * @generated from field: int32 page_size = 3;
   */
  pageSize = 0;

  /**
   * If this field is not empty then it must contain the `nextPageToken` value
   * returned by a previous call to this method.  Using this field causes the
   * method to return additional results from the previous method call.
   *
   * @generated from field: string page_token = 4;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListMonitoredResourceDescriptorsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.ListMonitoredResourceDescriptorsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 5, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListMonitoredResourceDescriptorsRequest {
    return new ListMonitoredResourceDescriptorsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListMonitoredResourceDescriptorsRequest {
    return new ListMonitoredResourceDescriptorsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListMonitoredResourceDescriptorsRequest {
    return new ListMonitoredResourceDescriptorsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListMonitoredResourceDescriptorsRequest | PlainMessage<ListMonitoredResourceDescriptorsRequest> | undefined, b: ListMonitoredResourceDescriptorsRequest | PlainMessage<ListMonitoredResourceDescriptorsRequest> | undefined): boolean {
    return proto3.util.equals(ListMonitoredResourceDescriptorsRequest, a, b);
  }
}

/**
 * The `ListMonitoredResourcDescriptors` response.
 *
 * @generated from message google.monitoring.v3.ListMonitoredResourceDescriptorsResponse
 */
export class ListMonitoredResourceDescriptorsResponse extends Message<ListMonitoredResourceDescriptorsResponse> {
  /**
   * The monitored resource descriptors that are available to this project
   * and that match `filter`, if present.
   *
   * @generated from field: repeated google.api.MonitoredResourceDescriptor resource_descriptors = 1;
   */
  resourceDescriptors: MonitoredResourceDescriptor[] = [];

  /**
   * If there are more results than have been returned, then this field is set
   * to a non-empty value.  To see the additional results,
   * use that value as `pageToken` in the next call to this method.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListMonitoredResourceDescriptorsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.ListMonitoredResourceDescriptorsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "resource_descriptors", kind: "message", T: MonitoredResourceDescriptor, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListMonitoredResourceDescriptorsResponse {
    return new ListMonitoredResourceDescriptorsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListMonitoredResourceDescriptorsResponse {
    return new ListMonitoredResourceDescriptorsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListMonitoredResourceDescriptorsResponse {
    return new ListMonitoredResourceDescriptorsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListMonitoredResourceDescriptorsResponse | PlainMessage<ListMonitoredResourceDescriptorsResponse> | undefined, b: ListMonitoredResourceDescriptorsResponse | PlainMessage<ListMonitoredResourceDescriptorsResponse> | undefined): boolean {
    return proto3.util.equals(ListMonitoredResourceDescriptorsResponse, a, b);
  }
}

/**
 * The `GetMonitoredResourceDescriptor` request.
 *
 * @generated from message google.monitoring.v3.GetMonitoredResourceDescriptorRequest
 */
export class GetMonitoredResourceDescriptorRequest extends Message<GetMonitoredResourceDescriptorRequest> {
  /**
   * The monitored resource descriptor to get.  The format is
   * `"projects/{project_id_or_number}/monitoredResourceDescriptors/{resource_type}"`.
   * The `{resource_type}` is a predefined type, such as
   * `cloudsql_database`.
   *
   * @generated from field: string name = 3;
   */
  name = "";

  constructor(data?: PartialMessage<GetMonitoredResourceDescriptorRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.GetMonitoredResourceDescriptorRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMonitoredResourceDescriptorRequest {
    return new GetMonitoredResourceDescriptorRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMonitoredResourceDescriptorRequest {
    return new GetMonitoredResourceDescriptorRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMonitoredResourceDescriptorRequest {
    return new GetMonitoredResourceDescriptorRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetMonitoredResourceDescriptorRequest | PlainMessage<GetMonitoredResourceDescriptorRequest> | undefined, b: GetMonitoredResourceDescriptorRequest | PlainMessage<GetMonitoredResourceDescriptorRequest> | undefined): boolean {
    return proto3.util.equals(GetMonitoredResourceDescriptorRequest, a, b);
  }
}

/**
 * The `ListMetricDescriptors` request.
 *
 * @generated from message google.monitoring.v3.ListMetricDescriptorsRequest
 */
export class ListMetricDescriptorsRequest extends Message<ListMetricDescriptorsRequest> {
  /**
   * The project on which to execute the request. The format is
   * `"projects/{project_id_or_number}"`.
   *
   * @generated from field: string name = 5;
   */
  name = "";

  /**
   * If this field is empty, all custom and
   * system-defined metric descriptors are returned.
   * Otherwise, the [filter](/monitoring/api/v3/filters)
   * specifies which metric descriptors are to be
   * returned. For example, the following filter matches all
   * [custom metrics](/monitoring/custom-metrics):
   *
   *     metric.type = starts_with("custom.googleapis.com/")
   *
   * @generated from field: string filter = 2;
   */
  filter = "";

  /**
   * A positive number that is the maximum number of results to return.
   *
   * @generated from field: int32 page_size = 3;
   */
  pageSize = 0;

  /**
   * If this field is not empty then it must contain the `nextPageToken` value
   * returned by a previous call to this method.  Using this field causes the
   * method to return additional results from the previous method call.
   *
   * @generated from field: string page_token = 4;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListMetricDescriptorsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.ListMetricDescriptorsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 5, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListMetricDescriptorsRequest {
    return new ListMetricDescriptorsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListMetricDescriptorsRequest {
    return new ListMetricDescriptorsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListMetricDescriptorsRequest {
    return new ListMetricDescriptorsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListMetricDescriptorsRequest | PlainMessage<ListMetricDescriptorsRequest> | undefined, b: ListMetricDescriptorsRequest | PlainMessage<ListMetricDescriptorsRequest> | undefined): boolean {
    return proto3.util.equals(ListMetricDescriptorsRequest, a, b);
  }
}

/**
 * The `ListMetricDescriptors` response.
 *
 * @generated from message google.monitoring.v3.ListMetricDescriptorsResponse
 */
export class ListMetricDescriptorsResponse extends Message<ListMetricDescriptorsResponse> {
  /**
   * The metric descriptors that are available to the project
   * and that match the value of `filter`, if present.
   *
   * @generated from field: repeated google.api.MetricDescriptor metric_descriptors = 1;
   */
  metricDescriptors: MetricDescriptor[] = [];

  /**
   * If there are more results than have been returned, then this field is set
   * to a non-empty value.  To see the additional results,
   * use that value as `pageToken` in the next call to this method.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListMetricDescriptorsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.ListMetricDescriptorsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metric_descriptors", kind: "message", T: MetricDescriptor, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListMetricDescriptorsResponse {
    return new ListMetricDescriptorsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListMetricDescriptorsResponse {
    return new ListMetricDescriptorsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListMetricDescriptorsResponse {
    return new ListMetricDescriptorsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListMetricDescriptorsResponse | PlainMessage<ListMetricDescriptorsResponse> | undefined, b: ListMetricDescriptorsResponse | PlainMessage<ListMetricDescriptorsResponse> | undefined): boolean {
    return proto3.util.equals(ListMetricDescriptorsResponse, a, b);
  }
}

/**
 * The `GetMetricDescriptor` request.
 *
 * @generated from message google.monitoring.v3.GetMetricDescriptorRequest
 */
export class GetMetricDescriptorRequest extends Message<GetMetricDescriptorRequest> {
  /**
   * The metric descriptor on which to execute the request. The format is
   * `"projects/{project_id_or_number}/metricDescriptors/{metric_id}"`.
   * An example value of `{metric_id}` is
   * `"compute.googleapis.com/instance/disk/read_bytes_count"`.
   *
   * @generated from field: string name = 3;
   */
  name = "";

  constructor(data?: PartialMessage<GetMetricDescriptorRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.GetMetricDescriptorRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMetricDescriptorRequest {
    return new GetMetricDescriptorRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMetricDescriptorRequest {
    return new GetMetricDescriptorRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMetricDescriptorRequest {
    return new GetMetricDescriptorRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetMetricDescriptorRequest | PlainMessage<GetMetricDescriptorRequest> | undefined, b: GetMetricDescriptorRequest | PlainMessage<GetMetricDescriptorRequest> | undefined): boolean {
    return proto3.util.equals(GetMetricDescriptorRequest, a, b);
  }
}

/**
 * The `CreateMetricDescriptor` request.
 *
 * @generated from message google.monitoring.v3.CreateMetricDescriptorRequest
 */
export class CreateMetricDescriptorRequest extends Message<CreateMetricDescriptorRequest> {
  /**
   * The project on which to execute the request. The format is
   * `"projects/{project_id_or_number}"`.
   *
   * @generated from field: string name = 3;
   */
  name = "";

  /**
   * The new [custom metric](/monitoring/custom-metrics)
   * descriptor.
   *
   * @generated from field: google.api.MetricDescriptor metric_descriptor = 2;
   */
  metricDescriptor?: MetricDescriptor;

  constructor(data?: PartialMessage<CreateMetricDescriptorRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.CreateMetricDescriptorRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metric_descriptor", kind: "message", T: MetricDescriptor },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateMetricDescriptorRequest {
    return new CreateMetricDescriptorRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateMetricDescriptorRequest {
    return new CreateMetricDescriptorRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateMetricDescriptorRequest {
    return new CreateMetricDescriptorRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateMetricDescriptorRequest | PlainMessage<CreateMetricDescriptorRequest> | undefined, b: CreateMetricDescriptorRequest | PlainMessage<CreateMetricDescriptorRequest> | undefined): boolean {
    return proto3.util.equals(CreateMetricDescriptorRequest, a, b);
  }
}

/**
 * The `DeleteMetricDescriptor` request.
 *
 * @generated from message google.monitoring.v3.DeleteMetricDescriptorRequest
 */
export class DeleteMetricDescriptorRequest extends Message<DeleteMetricDescriptorRequest> {
  /**
   * The metric descriptor on which to execute the request. The format is
   * `"projects/{project_id_or_number}/metricDescriptors/{metric_id}"`.
   * An example of `{metric_id}` is:
   * `"custom.googleapis.com/my_test_metric"`.
   *
   * @generated from field: string name = 3;
   */
  name = "";

  constructor(data?: PartialMessage<DeleteMetricDescriptorRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.DeleteMetricDescriptorRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteMetricDescriptorRequest {
    return new DeleteMetricDescriptorRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteMetricDescriptorRequest {
    return new DeleteMetricDescriptorRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteMetricDescriptorRequest {
    return new DeleteMetricDescriptorRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteMetricDescriptorRequest | PlainMessage<DeleteMetricDescriptorRequest> | undefined, b: DeleteMetricDescriptorRequest | PlainMessage<DeleteMetricDescriptorRequest> | undefined): boolean {
    return proto3.util.equals(DeleteMetricDescriptorRequest, a, b);
  }
}

/**
 * The `ListTimeSeries` request.
 *
 * @generated from message google.monitoring.v3.ListTimeSeriesRequest
 */
export class ListTimeSeriesRequest extends Message<ListTimeSeriesRequest> {
  /**
   * The project on which to execute the request. The format is
   * "projects/{project_id_or_number}".
   *
   * @generated from field: string name = 10;
   */
  name = "";

  /**
   * A [monitoring filter](/monitoring/api/v3/filters) that specifies which time
   * series should be returned.  The filter must specify a single metric type,
   * and can additionally specify metric labels and other information. For
   * example:
   *
   *     metric.type = "compute.googleapis.com/instance/cpu/usage_time" AND
   *         metric.label.instance_name = "my-instance-name"
   *
   * @generated from field: string filter = 2;
   */
  filter = "";

  /**
   * The time interval for which results should be returned. Only time series
   * that contain data points in the specified interval are included
   * in the response.
   *
   * @generated from field: google.monitoring.v3.TimeInterval interval = 4;
   */
  interval?: TimeInterval;

  /**
   * By default, the raw time series data is returned.
   * Use this field to combine multiple time series for different
   * views of the data.
   *
   * @generated from field: google.monitoring.v3.Aggregation aggregation = 5;
   */
  aggregation?: Aggregation;

  /**
   * Specifies the order in which the points of the time series should
   * be returned.  By default, results are not ordered.  Currently,
   * this field must be left blank.
   *
   * @generated from field: string order_by = 6;
   */
  orderBy = "";

  /**
   * Specifies which information is returned about the time series.
   *
   * @generated from field: google.monitoring.v3.ListTimeSeriesRequest.TimeSeriesView view = 7;
   */
  view = ListTimeSeriesRequest_TimeSeriesView.FULL;

  /**
   * A positive number that is the maximum number of results to return.
   * When `view` field sets to `FULL`, it limits the number of `Points` server
   * will return; if `view` field is `HEADERS`, it limits the number of
   * `TimeSeries` server will return.
   *
   * @generated from field: int32 page_size = 8;
   */
  pageSize = 0;

  /**
   * If this field is not empty then it must contain the `nextPageToken` value
   * returned by a previous call to this method.  Using this field causes the
   * method to return additional results from the previous method call.
   *
   * @generated from field: string page_token = 9;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListTimeSeriesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.ListTimeSeriesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "interval", kind: "message", T: TimeInterval },
    { no: 5, name: "aggregation", kind: "message", T: Aggregation },
    { no: 6, name: "order_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "view", kind: "enum", T: proto3.getEnumType(ListTimeSeriesRequest_TimeSeriesView) },
    { no: 8, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 9, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTimeSeriesRequest {
    return new ListTimeSeriesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTimeSeriesRequest {
    return new ListTimeSeriesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTimeSeriesRequest {
    return new ListTimeSeriesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListTimeSeriesRequest | PlainMessage<ListTimeSeriesRequest> | undefined, b: ListTimeSeriesRequest | PlainMessage<ListTimeSeriesRequest> | undefined): boolean {
    return proto3.util.equals(ListTimeSeriesRequest, a, b);
  }
}

/**
 * Controls which fields are returned by `ListTimeSeries`.
 *
 * @generated from enum google.monitoring.v3.ListTimeSeriesRequest.TimeSeriesView
 */
export enum ListTimeSeriesRequest_TimeSeriesView {
  /**
   * Returns the identity of the metric(s), the time series,
   * and the time series data.
   *
   * @generated from enum value: FULL = 0;
   */
  FULL = 0,

  /**
   * Returns the identity of the metric and the time series resource,
   * but not the time series data.
   *
   * @generated from enum value: HEADERS = 1;
   */
  HEADERS = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(ListTimeSeriesRequest_TimeSeriesView)
proto3.util.setEnumType(ListTimeSeriesRequest_TimeSeriesView, "google.monitoring.v3.ListTimeSeriesRequest.TimeSeriesView", [
  { no: 0, name: "FULL" },
  { no: 1, name: "HEADERS" },
]);

/**
 * The `ListTimeSeries` response.
 *
 * @generated from message google.monitoring.v3.ListTimeSeriesResponse
 */
export class ListTimeSeriesResponse extends Message<ListTimeSeriesResponse> {
  /**
   * One or more time series that match the filter included in the request.
   *
   * @generated from field: repeated google.monitoring.v3.TimeSeries time_series = 1;
   */
  timeSeries: TimeSeries[] = [];

  /**
   * If there are more results than have been returned, then this field is set
   * to a non-empty value.  To see the additional results,
   * use that value as `pageToken` in the next call to this method.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListTimeSeriesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.ListTimeSeriesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "time_series", kind: "message", T: TimeSeries, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTimeSeriesResponse {
    return new ListTimeSeriesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTimeSeriesResponse {
    return new ListTimeSeriesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTimeSeriesResponse {
    return new ListTimeSeriesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListTimeSeriesResponse | PlainMessage<ListTimeSeriesResponse> | undefined, b: ListTimeSeriesResponse | PlainMessage<ListTimeSeriesResponse> | undefined): boolean {
    return proto3.util.equals(ListTimeSeriesResponse, a, b);
  }
}

/**
 * The `CreateTimeSeries` request.
 *
 * @generated from message google.monitoring.v3.CreateTimeSeriesRequest
 */
export class CreateTimeSeriesRequest extends Message<CreateTimeSeriesRequest> {
  /**
   * The project on which to execute the request. The format is
   * `"projects/{project_id_or_number}"`.
   *
   * @generated from field: string name = 3;
   */
  name = "";

  /**
   * The new data to be added to a list of time series.
   * Adds at most one data point to each of several time series.  The new data
   * point must be more recent than any other point in its time series.  Each
   * `TimeSeries` value must fully specify a unique time series by supplying
   * all label values for the metric and the monitored resource.
   *
   * @generated from field: repeated google.monitoring.v3.TimeSeries time_series = 2;
   */
  timeSeries: TimeSeries[] = [];

  constructor(data?: PartialMessage<CreateTimeSeriesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.CreateTimeSeriesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "time_series", kind: "message", T: TimeSeries, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateTimeSeriesRequest {
    return new CreateTimeSeriesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateTimeSeriesRequest {
    return new CreateTimeSeriesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateTimeSeriesRequest {
    return new CreateTimeSeriesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateTimeSeriesRequest | PlainMessage<CreateTimeSeriesRequest> | undefined, b: CreateTimeSeriesRequest | PlainMessage<CreateTimeSeriesRequest> | undefined): boolean {
    return proto3.util.equals(CreateTimeSeriesRequest, a, b);
  }
}

/**
 * Describes the result of a failed request to write data to a time series.
 *
 * @generated from message google.monitoring.v3.CreateTimeSeriesError
 */
export class CreateTimeSeriesError extends Message<CreateTimeSeriesError> {
  /**
   * The time series, including the `Metric`, `MonitoredResource`,
   * and `Point`s (including timestamp and value) that resulted
   * in the error. This field provides all of the context that
   * would be needed to retry the operation.
   *
   * @generated from field: google.monitoring.v3.TimeSeries time_series = 1;
   */
  timeSeries?: TimeSeries;

  /**
   * The status of the requested write operation.
   *
   * @generated from field: google.rpc.Status status = 2;
   */
  status?: Status;

  constructor(data?: PartialMessage<CreateTimeSeriesError>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.CreateTimeSeriesError";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "time_series", kind: "message", T: TimeSeries },
    { no: 2, name: "status", kind: "message", T: Status },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateTimeSeriesError {
    return new CreateTimeSeriesError().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateTimeSeriesError {
    return new CreateTimeSeriesError().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateTimeSeriesError {
    return new CreateTimeSeriesError().fromJsonString(jsonString, options);
  }

  static equals(a: CreateTimeSeriesError | PlainMessage<CreateTimeSeriesError> | undefined, b: CreateTimeSeriesError | PlainMessage<CreateTimeSeriesError> | undefined): boolean {
    return proto3.util.equals(CreateTimeSeriesError, a, b);
  }
}

