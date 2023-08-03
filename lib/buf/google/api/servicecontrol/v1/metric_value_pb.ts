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
// @generated from file google/api/servicecontrol/v1/metric_value.proto (package google.api.servicecontrol.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Distribution } from "./distribution_pb.js";

/**
 * Represents a single metric value.
 *
 * @generated from message google.api.servicecontrol.v1.MetricValue
 */
export class MetricValue extends Message<MetricValue> {
  /**
   * The labels describing the metric value.
   * See comments on [google.api.servicecontrol.v1.Operation.labels][google.api.servicecontrol.v1.Operation.labels] for
   * the overriding relationship.
   *
   * @generated from field: map<string, string> labels = 1;
   */
  labels: { [key: string]: string } = {};

  /**
   * The start of the time period over which this metric value's measurement
   * applies. The time period has different semantics for different metric
   * types (cumulative, delta, and gauge). See the metric definition
   * documentation in the service configuration for details.
   *
   * @generated from field: google.protobuf.Timestamp start_time = 2;
   */
  startTime?: Timestamp;

  /**
   * The end of the time period over which this metric value's measurement
   * applies.
   *
   * @generated from field: google.protobuf.Timestamp end_time = 3;
   */
  endTime?: Timestamp;

  /**
   * The value. The type of value used in the request must
   * agree with the metric definition in the service configuration, otherwise
   * the MetricValue is rejected.
   *
   * @generated from oneof google.api.servicecontrol.v1.MetricValue.value
   */
  value: {
    /**
     * A boolean value.
     *
     * @generated from field: bool bool_value = 4;
     */
    value: boolean;
    case: "boolValue";
  } | {
    /**
     * A signed 64-bit integer value.
     *
     * @generated from field: int64 int64_value = 5;
     */
    value: bigint;
    case: "int64Value";
  } | {
    /**
     * A double precision floating point value.
     *
     * @generated from field: double double_value = 6;
     */
    value: number;
    case: "doubleValue";
  } | {
    /**
     * A text string value.
     *
     * @generated from field: string string_value = 7;
     */
    value: string;
    case: "stringValue";
  } | {
    /**
     * A distribution value.
     *
     * @generated from field: google.api.servicecontrol.v1.Distribution distribution_value = 8;
     */
    value: Distribution;
    case: "distributionValue";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<MetricValue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.servicecontrol.v1.MetricValue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 2, name: "start_time", kind: "message", T: Timestamp },
    { no: 3, name: "end_time", kind: "message", T: Timestamp },
    { no: 4, name: "bool_value", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "value" },
    { no: 5, name: "int64_value", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "value" },
    { no: 6, name: "double_value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "value" },
    { no: 7, name: "string_value", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "value" },
    { no: 8, name: "distribution_value", kind: "message", T: Distribution, oneof: "value" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MetricValue {
    return new MetricValue().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MetricValue {
    return new MetricValue().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MetricValue {
    return new MetricValue().fromJsonString(jsonString, options);
  }

  static equals(a: MetricValue | PlainMessage<MetricValue> | undefined, b: MetricValue | PlainMessage<MetricValue> | undefined): boolean {
    return proto3.util.equals(MetricValue, a, b);
  }
}

/**
 * Represents a set of metric values in the same metric.
 * Each metric value in the set should have a unique combination of start time,
 * end time, and label values.
 *
 * @generated from message google.api.servicecontrol.v1.MetricValueSet
 */
export class MetricValueSet extends Message<MetricValueSet> {
  /**
   * The metric name defined in the service configuration.
   *
   * @generated from field: string metric_name = 1;
   */
  metricName = "";

  /**
   * The values in this metric.
   *
   * @generated from field: repeated google.api.servicecontrol.v1.MetricValue metric_values = 2;
   */
  metricValues: MetricValue[] = [];

  constructor(data?: PartialMessage<MetricValueSet>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.servicecontrol.v1.MetricValueSet";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metric_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metric_values", kind: "message", T: MetricValue, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MetricValueSet {
    return new MetricValueSet().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MetricValueSet {
    return new MetricValueSet().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MetricValueSet {
    return new MetricValueSet().fromJsonString(jsonString, options);
  }

  static equals(a: MetricValueSet | PlainMessage<MetricValueSet> | undefined, b: MetricValueSet | PlainMessage<MetricValueSet> | undefined): boolean {
    return proto3.util.equals(MetricValueSet, a, b);
  }
}
