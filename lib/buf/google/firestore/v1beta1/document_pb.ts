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
// @generated from file google/firestore/v1beta1/document.proto (package google.firestore.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, NullValue, proto3, Timestamp } from "@bufbuild/protobuf";
import { LatLng } from "../../type/latlng_pb.js";

/**
 * A Firestore document.
 *
 * Must not exceed 1 MiB - 4 bytes.
 *
 * @generated from message google.firestore.v1beta1.Document
 */
export class Document extends Message<Document> {
  /**
   * The resource name of the document, for example
   * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The document's fields.
   *
   * The map keys represent field names.
   *
   * A simple field name contains only characters `a` to `z`, `A` to `Z`,
   * `0` to `9`, or `_`, and must not start with `0` to `9` or `_`. For example,
   * `foo_bar_17`.
   *
   * Field names matching the regular expression `__.*__` are reserved. Reserved
   * field names are forbidden except in certain documented contexts. The map
   * keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be
   * empty.
   *
   * Field paths may be used in other contexts to refer to structured fields
   * defined here. For `map_value`, the field path is represented by the simple
   * or quoted field names of the containing fields, delimited by `.`. For
   * example, the structured field
   * `"foo" : { map_value: { "x&y" : { string_value: "hello" }}}` would be
   * represented by the field path `foo.x&y`.
   *
   * Within a field path, a quoted field name starts and ends with `` ` `` and
   * may contain any character. Some characters, including `` ` ``, must be
   * escaped using a `\`. For example, `` `x&y` `` represents `x&y` and
   * `` `bak\`tik` `` represents `` bak`tik ``.
   *
   * @generated from field: map<string, google.firestore.v1beta1.Value> fields = 2;
   */
  fields: { [key: string]: Value } = {};

  /**
   * Output only. The time at which the document was created.
   *
   * This value increases monotonically when a document is deleted then
   * recreated. It can also be compared to values from other documents and
   * the `read_time` of a query.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 3;
   */
  createTime?: Timestamp;

  /**
   * Output only. The time at which the document was last changed.
   *
   * This value is initally set to the `create_time` then increases
   * monotonically with each change to the document. It can also be
   * compared to values from other documents and the `read_time` of a query.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 4;
   */
  updateTime?: Timestamp;

  constructor(data?: PartialMessage<Document>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.firestore.v1beta1.Document";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "fields", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 3, name: "create_time", kind: "message", T: Timestamp },
    { no: 4, name: "update_time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Document {
    return new Document().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Document {
    return new Document().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Document {
    return new Document().fromJsonString(jsonString, options);
  }

  static equals(a: Document | PlainMessage<Document> | undefined, b: Document | PlainMessage<Document> | undefined): boolean {
    return proto3.util.equals(Document, a, b);
  }
}

/**
 * A message that can hold any of the supported value types.
 *
 * @generated from message google.firestore.v1beta1.Value
 */
export class Value extends Message<Value> {
  /**
   * Must have a value set.
   *
   * @generated from oneof google.firestore.v1beta1.Value.value_type
   */
  valueType: {
    /**
     * A null value.
     *
     * @generated from field: google.protobuf.NullValue null_value = 11;
     */
    value: NullValue;
    case: "nullValue";
  } | {
    /**
     * A boolean value.
     *
     * @generated from field: bool boolean_value = 1;
     */
    value: boolean;
    case: "booleanValue";
  } | {
    /**
     * An integer value.
     *
     * @generated from field: int64 integer_value = 2;
     */
    value: bigint;
    case: "integerValue";
  } | {
    /**
     * A double value.
     *
     * @generated from field: double double_value = 3;
     */
    value: number;
    case: "doubleValue";
  } | {
    /**
     * A timestamp value.
     *
     * Precise only to microseconds. When stored, any additional precision is
     * rounded down.
     *
     * @generated from field: google.protobuf.Timestamp timestamp_value = 10;
     */
    value: Timestamp;
    case: "timestampValue";
  } | {
    /**
     * A string value.
     *
     * The string, represented as UTF-8, must not exceed 1 MiB - 89 bytes.
     * Only the first 1,500 bytes of the UTF-8 representation are considered by
     * queries.
     *
     * @generated from field: string string_value = 17;
     */
    value: string;
    case: "stringValue";
  } | {
    /**
     * A bytes value.
     *
     * Must not exceed 1 MiB - 89 bytes.
     * Only the first 1,500 bytes are considered by queries.
     *
     * @generated from field: bytes bytes_value = 18;
     */
    value: Uint8Array;
    case: "bytesValue";
  } | {
    /**
     * A reference to a document. For example:
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     *
     * @generated from field: string reference_value = 5;
     */
    value: string;
    case: "referenceValue";
  } | {
    /**
     * A geo point value representing a point on the surface of Earth.
     *
     * @generated from field: google.type.LatLng geo_point_value = 8;
     */
    value: LatLng;
    case: "geoPointValue";
  } | {
    /**
     * An array value.
     *
     * Cannot contain another array value.
     *
     * @generated from field: google.firestore.v1beta1.ArrayValue array_value = 9;
     */
    value: ArrayValue;
    case: "arrayValue";
  } | {
    /**
     * A map value.
     *
     * @generated from field: google.firestore.v1beta1.MapValue map_value = 6;
     */
    value: MapValue;
    case: "mapValue";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Value>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.firestore.v1beta1.Value";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 11, name: "null_value", kind: "enum", T: proto3.getEnumType(NullValue), oneof: "value_type" },
    { no: 1, name: "boolean_value", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "value_type" },
    { no: 2, name: "integer_value", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "value_type" },
    { no: 3, name: "double_value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "value_type" },
    { no: 10, name: "timestamp_value", kind: "message", T: Timestamp, oneof: "value_type" },
    { no: 17, name: "string_value", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "value_type" },
    { no: 18, name: "bytes_value", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "value_type" },
    { no: 5, name: "reference_value", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "value_type" },
    { no: 8, name: "geo_point_value", kind: "message", T: LatLng, oneof: "value_type" },
    { no: 9, name: "array_value", kind: "message", T: ArrayValue, oneof: "value_type" },
    { no: 6, name: "map_value", kind: "message", T: MapValue, oneof: "value_type" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Value {
    return new Value().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Value {
    return new Value().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Value {
    return new Value().fromJsonString(jsonString, options);
  }

  static equals(a: Value | PlainMessage<Value> | undefined, b: Value | PlainMessage<Value> | undefined): boolean {
    return proto3.util.equals(Value, a, b);
  }
}

/**
 * An array value.
 *
 * @generated from message google.firestore.v1beta1.ArrayValue
 */
export class ArrayValue extends Message<ArrayValue> {
  /**
   * Values in the array.
   *
   * @generated from field: repeated google.firestore.v1beta1.Value values = 1;
   */
  values: Value[] = [];

  constructor(data?: PartialMessage<ArrayValue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.firestore.v1beta1.ArrayValue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "values", kind: "message", T: Value, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ArrayValue {
    return new ArrayValue().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ArrayValue {
    return new ArrayValue().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ArrayValue {
    return new ArrayValue().fromJsonString(jsonString, options);
  }

  static equals(a: ArrayValue | PlainMessage<ArrayValue> | undefined, b: ArrayValue | PlainMessage<ArrayValue> | undefined): boolean {
    return proto3.util.equals(ArrayValue, a, b);
  }
}

/**
 * A map value.
 *
 * @generated from message google.firestore.v1beta1.MapValue
 */
export class MapValue extends Message<MapValue> {
  /**
   * The map's fields.
   *
   * The map keys represent field names. Field names matching the regular
   * expression `__.*__` are reserved. Reserved field names are forbidden except
   * in certain documented contexts. The map keys, represented as UTF-8, must
   * not exceed 1,500 bytes and cannot be empty.
   *
   * @generated from field: map<string, google.firestore.v1beta1.Value> fields = 1;
   */
  fields: { [key: string]: Value } = {};

  constructor(data?: PartialMessage<MapValue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.firestore.v1beta1.MapValue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "fields", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MapValue {
    return new MapValue().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MapValue {
    return new MapValue().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MapValue {
    return new MapValue().fromJsonString(jsonString, options);
  }

  static equals(a: MapValue | PlainMessage<MapValue> | undefined, b: MapValue | PlainMessage<MapValue> | undefined): boolean {
    return proto3.util.equals(MapValue, a, b);
  }
}

