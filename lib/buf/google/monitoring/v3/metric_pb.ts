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
// @generated from file google/monitoring/v3/metric.proto (package google.monitoring.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { TimeInterval, TypedValue } from "./common_pb.js";
import { Metric, MetricDescriptor_MetricKind, MetricDescriptor_ValueType } from "../../api/metric_pb.js";
import { MonitoredResource } from "../../api/monitored_resource_pb.js";

/**
 * A single data point in a time series.
 *
 * @generated from message google.monitoring.v3.Point
 */
export class Point extends Message<Point> {
  /**
   * The time interval to which the data point applies.  For GAUGE metrics, only
   * the end time of the interval is used.  For DELTA metrics, the start and end
   * time should specify a non-zero interval, with subsequent points specifying
   * contiguous and non-overlapping intervals.  For CUMULATIVE metrics, the
   * start and end time should specify a non-zero interval, with subsequent
   * points specifying the same start time and increasing end times, until an
   * event resets the cumulative value to zero and sets a new start time for the
   * following points.
   *
   * @generated from field: google.monitoring.v3.TimeInterval interval = 1;
   */
  interval?: TimeInterval;

  /**
   * The value of the data point.
   *
   * @generated from field: google.monitoring.v3.TypedValue value = 2;
   */
  value?: TypedValue;

  constructor(data?: PartialMessage<Point>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.Point";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "interval", kind: "message", T: TimeInterval },
    { no: 2, name: "value", kind: "message", T: TypedValue },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Point {
    return new Point().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Point {
    return new Point().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Point {
    return new Point().fromJsonString(jsonString, options);
  }

  static equals(a: Point | PlainMessage<Point> | undefined, b: Point | PlainMessage<Point> | undefined): boolean {
    return proto3.util.equals(Point, a, b);
  }
}

/**
 * A collection of data points that describes the time-varying values
 * of a metric. A time series is identified by a combination of a
 * fully-specified monitored resource and a fully-specified metric.
 * This type is used for both listing and creating time series.
 *
 * @generated from message google.monitoring.v3.TimeSeries
 */
export class TimeSeries extends Message<TimeSeries> {
  /**
   * The associated metric. A fully-specified metric used to identify the time
   * series.
   *
   * @generated from field: google.api.Metric metric = 1;
   */
  metric?: Metric;

  /**
   * The associated resource. A fully-specified monitored resource used to
   * identify the time series.
   *
   * @generated from field: google.api.MonitoredResource resource = 2;
   */
  resource?: MonitoredResource;

  /**
   * The metric kind of the time series. When listing time series, this metric
   * kind might be different from the metric kind of the associated metric if
   * this time series is an alignment or reduction of other time series.
   *
   * When creating a time series, this field is optional. If present, it must be
   * the same as the metric kind of the associated metric. If the associated
   * metric's descriptor must be auto-created, then this field specifies the
   * metric kind of the new descriptor and must be either `GAUGE` (the default)
   * or `CUMULATIVE`.
   *
   * @generated from field: google.api.MetricDescriptor.MetricKind metric_kind = 3;
   */
  metricKind = MetricDescriptor_MetricKind.METRIC_KIND_UNSPECIFIED;

  /**
   * The value type of the time series. When listing time series, this value
   * type might be different from the value type of the associated metric if
   * this time series is an alignment or reduction of other time series.
   *
   * When creating a time series, this field is optional. If present, it must be
   * the same as the type of the data in the `points` field.
   *
   * @generated from field: google.api.MetricDescriptor.ValueType value_type = 4;
   */
  valueType = MetricDescriptor_ValueType.VALUE_TYPE_UNSPECIFIED;

  /**
   * The data points of this time series. When listing time series, the order of
   * the points is specified by the list method.
   *
   * When creating a time series, this field must contain exactly one point and
   * the point's type must be the same as the value type of the associated
   * metric. If the associated metric's descriptor must be auto-created, then
   * the value type of the descriptor is determined by the point's type, which
   * must be `BOOL`, `INT64`, `DOUBLE`, or `DISTRIBUTION`.
   *
   * @generated from field: repeated google.monitoring.v3.Point points = 5;
   */
  points: Point[] = [];

  constructor(data?: PartialMessage<TimeSeries>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.TimeSeries";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metric", kind: "message", T: Metric },
    { no: 2, name: "resource", kind: "message", T: MonitoredResource },
    { no: 3, name: "metric_kind", kind: "enum", T: proto3.getEnumType(MetricDescriptor_MetricKind) },
    { no: 4, name: "value_type", kind: "enum", T: proto3.getEnumType(MetricDescriptor_ValueType) },
    { no: 5, name: "points", kind: "message", T: Point, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TimeSeries {
    return new TimeSeries().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TimeSeries {
    return new TimeSeries().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TimeSeries {
    return new TimeSeries().fromJsonString(jsonString, options);
  }

  static equals(a: TimeSeries | PlainMessage<TimeSeries> | undefined, b: TimeSeries | PlainMessage<TimeSeries> | undefined): boolean {
    return proto3.util.equals(TimeSeries, a, b);
  }
}
