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
// @generated from file google/spanner/v1/query_plan.proto (package google.spanner.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Struct } from "@bufbuild/protobuf";

/**
 * Node information for nodes appearing in a [QueryPlan.plan_nodes][google.spanner.v1.QueryPlan.plan_nodes].
 *
 * @generated from message google.spanner.v1.PlanNode
 */
export class PlanNode extends Message<PlanNode> {
  /**
   * The `PlanNode`'s index in [node list][google.spanner.v1.QueryPlan.plan_nodes].
   *
   * @generated from field: int32 index = 1;
   */
  index = 0;

  /**
   * Used to determine the type of node. May be needed for visualizing
   * different kinds of nodes differently. For example, If the node is a
   * [SCALAR][google.spanner.v1.PlanNode.Kind.SCALAR] node, it will have a condensed representation
   * which can be used to directly embed a description of the node in its
   * parent.
   *
   * @generated from field: google.spanner.v1.PlanNode.Kind kind = 2;
   */
  kind = PlanNode_Kind.KIND_UNSPECIFIED;

  /**
   * The display name for the node.
   *
   * @generated from field: string display_name = 3;
   */
  displayName = "";

  /**
   * List of child node `index`es and their relationship to this parent.
   *
   * @generated from field: repeated google.spanner.v1.PlanNode.ChildLink child_links = 4;
   */
  childLinks: PlanNode_ChildLink[] = [];

  /**
   * Condensed representation for [SCALAR][google.spanner.v1.PlanNode.Kind.SCALAR] nodes.
   *
   * @generated from field: google.spanner.v1.PlanNode.ShortRepresentation short_representation = 5;
   */
  shortRepresentation?: PlanNode_ShortRepresentation;

  /**
   * Attributes relevant to the node contained in a group of key-value pairs.
   * For example, a Parameter Reference node could have the following
   * information in its metadata:
   *
   *     {
   *       "parameter_reference": "param1",
   *       "parameter_type": "array"
   *     }
   *
   * @generated from field: google.protobuf.Struct metadata = 6;
   */
  metadata?: Struct;

  /**
   * The execution statistics associated with the node, contained in a group of
   * key-value pairs. Only present if the plan was returned as a result of a
   * profile query. For example, number of executions, number of rows/time per
   * execution etc.
   *
   * @generated from field: google.protobuf.Struct execution_stats = 7;
   */
  executionStats?: Struct;

  constructor(data?: PartialMessage<PlanNode>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.spanner.v1.PlanNode";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "index", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "kind", kind: "enum", T: proto3.getEnumType(PlanNode_Kind) },
    { no: 3, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "child_links", kind: "message", T: PlanNode_ChildLink, repeated: true },
    { no: 5, name: "short_representation", kind: "message", T: PlanNode_ShortRepresentation },
    { no: 6, name: "metadata", kind: "message", T: Struct },
    { no: 7, name: "execution_stats", kind: "message", T: Struct },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PlanNode {
    return new PlanNode().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PlanNode {
    return new PlanNode().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PlanNode {
    return new PlanNode().fromJsonString(jsonString, options);
  }

  static equals(a: PlanNode | PlainMessage<PlanNode> | undefined, b: PlanNode | PlainMessage<PlanNode> | undefined): boolean {
    return proto3.util.equals(PlanNode, a, b);
  }
}

/**
 * The kind of [PlanNode][google.spanner.v1.PlanNode]. Distinguishes between the two different kinds of
 * nodes that can appear in a query plan.
 *
 * @generated from enum google.spanner.v1.PlanNode.Kind
 */
export enum PlanNode_Kind {
  /**
   * Not specified.
   *
   * @generated from enum value: KIND_UNSPECIFIED = 0;
   */
  KIND_UNSPECIFIED = 0,

  /**
   * Denotes a Relational operator node in the expression tree. Relational
   * operators represent iterative processing of rows during query execution.
   * For example, a `TableScan` operation that reads rows from a table.
   *
   * @generated from enum value: RELATIONAL = 1;
   */
  RELATIONAL = 1,

  /**
   * Denotes a Scalar node in the expression tree. Scalar nodes represent
   * non-iterable entities in the query plan. For example, constants or
   * arithmetic operators appearing inside predicate expressions or references
   * to column names.
   *
   * @generated from enum value: SCALAR = 2;
   */
  SCALAR = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(PlanNode_Kind)
proto3.util.setEnumType(PlanNode_Kind, "google.spanner.v1.PlanNode.Kind", [
  { no: 0, name: "KIND_UNSPECIFIED" },
  { no: 1, name: "RELATIONAL" },
  { no: 2, name: "SCALAR" },
]);

/**
 * Metadata associated with a parent-child relationship appearing in a
 * [PlanNode][google.spanner.v1.PlanNode].
 *
 * @generated from message google.spanner.v1.PlanNode.ChildLink
 */
export class PlanNode_ChildLink extends Message<PlanNode_ChildLink> {
  /**
   * The node to which the link points.
   *
   * @generated from field: int32 child_index = 1;
   */
  childIndex = 0;

  /**
   * The type of the link. For example, in Hash Joins this could be used to
   * distinguish between the build child and the probe child, or in the case
   * of the child being an output variable, to represent the tag associated
   * with the output variable.
   *
   * @generated from field: string type = 2;
   */
  type = "";

  /**
   * Only present if the child node is [SCALAR][google.spanner.v1.PlanNode.Kind.SCALAR] and corresponds
   * to an output variable of the parent node. The field carries the name of
   * the output variable.
   * For example, a `TableScan` operator that reads rows from a table will
   * have child links to the `SCALAR` nodes representing the output variables
   * created for each column that is read by the operator. The corresponding
   * `variable` fields will be set to the variable names assigned to the
   * columns.
   *
   * @generated from field: string variable = 3;
   */
  variable = "";

  constructor(data?: PartialMessage<PlanNode_ChildLink>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.spanner.v1.PlanNode.ChildLink";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "child_index", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "variable", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PlanNode_ChildLink {
    return new PlanNode_ChildLink().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PlanNode_ChildLink {
    return new PlanNode_ChildLink().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PlanNode_ChildLink {
    return new PlanNode_ChildLink().fromJsonString(jsonString, options);
  }

  static equals(a: PlanNode_ChildLink | PlainMessage<PlanNode_ChildLink> | undefined, b: PlanNode_ChildLink | PlainMessage<PlanNode_ChildLink> | undefined): boolean {
    return proto3.util.equals(PlanNode_ChildLink, a, b);
  }
}

/**
 * Condensed representation of a node and its subtree. Only present for
 * `SCALAR` [PlanNode(s)][google.spanner.v1.PlanNode].
 *
 * @generated from message google.spanner.v1.PlanNode.ShortRepresentation
 */
export class PlanNode_ShortRepresentation extends Message<PlanNode_ShortRepresentation> {
  /**
   * A string representation of the expression subtree rooted at this node.
   *
   * @generated from field: string description = 1;
   */
  description = "";

  /**
   * A mapping of (subquery variable name) -> (subquery node id) for cases
   * where the `description` string of this node references a `SCALAR`
   * subquery contained in the expression subtree rooted at this node. The
   * referenced `SCALAR` subquery may not necessarily be a direct child of
   * this node.
   *
   * @generated from field: map<string, int32> subqueries = 2;
   */
  subqueries: { [key: string]: number } = {};

  constructor(data?: PartialMessage<PlanNode_ShortRepresentation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.spanner.v1.PlanNode.ShortRepresentation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "subqueries", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 5 /* ScalarType.INT32 */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PlanNode_ShortRepresentation {
    return new PlanNode_ShortRepresentation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PlanNode_ShortRepresentation {
    return new PlanNode_ShortRepresentation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PlanNode_ShortRepresentation {
    return new PlanNode_ShortRepresentation().fromJsonString(jsonString, options);
  }

  static equals(a: PlanNode_ShortRepresentation | PlainMessage<PlanNode_ShortRepresentation> | undefined, b: PlanNode_ShortRepresentation | PlainMessage<PlanNode_ShortRepresentation> | undefined): boolean {
    return proto3.util.equals(PlanNode_ShortRepresentation, a, b);
  }
}

/**
 * Contains an ordered list of nodes appearing in the query plan.
 *
 * @generated from message google.spanner.v1.QueryPlan
 */
export class QueryPlan extends Message<QueryPlan> {
  /**
   * The nodes in the query plan. Plan nodes are returned in pre-order starting
   * with the plan root. Each [PlanNode][google.spanner.v1.PlanNode]'s `id` corresponds to its index in
   * `plan_nodes`.
   *
   * @generated from field: repeated google.spanner.v1.PlanNode plan_nodes = 1;
   */
  planNodes: PlanNode[] = [];

  constructor(data?: PartialMessage<QueryPlan>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.spanner.v1.QueryPlan";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "plan_nodes", kind: "message", T: PlanNode, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPlan {
    return new QueryPlan().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPlan {
    return new QueryPlan().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPlan {
    return new QueryPlan().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPlan | PlainMessage<QueryPlan> | undefined, b: QueryPlan | PlainMessage<QueryPlan> | undefined): boolean {
    return proto3.util.equals(QueryPlan, a, b);
  }
}

