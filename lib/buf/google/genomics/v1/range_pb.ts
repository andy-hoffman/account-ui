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
// @generated from file google/genomics/v1/range.proto (package google.genomics.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * A 0-based half-open genomic coordinate range for search requests.
 *
 * @generated from message google.genomics.v1.Range
 */
export class Range extends Message<Range> {
  /**
   * The reference sequence name, for example `chr1`,
   * `1`, or `chrX`.
   *
   * @generated from field: string reference_name = 1;
   */
  referenceName = "";

  /**
   * The start position of the range on the reference, 0-based inclusive.
   *
   * @generated from field: int64 start = 2;
   */
  start = protoInt64.zero;

  /**
   * The end position of the range on the reference, 0-based exclusive.
   *
   * @generated from field: int64 end = 3;
   */
  end = protoInt64.zero;

  constructor(data?: PartialMessage<Range>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.genomics.v1.Range";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "reference_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Range {
    return new Range().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Range {
    return new Range().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Range {
    return new Range().fromJsonString(jsonString, options);
  }

  static equals(a: Range | PlainMessage<Range> | undefined, b: Range | PlainMessage<Range> | undefined): boolean {
    return proto3.util.equals(Range, a, b);
  }
}
