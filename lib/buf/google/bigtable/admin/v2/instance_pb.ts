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
// @generated from file google/bigtable/admin/v2/instance.proto (package google.bigtable.admin.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { StorageType } from "./common_pb.js";

/**
 * A collection of Bigtable [Tables][google.bigtable.admin.v2.Table] and
 * the resources that serve them.
 * All tables in an instance are served from a single
 * [Cluster][google.bigtable.admin.v2.Cluster].
 *
 * @generated from message google.bigtable.admin.v2.Instance
 */
export class Instance extends Message<Instance> {
  /**
   * (`OutputOnly`)
   * The unique name of the instance. Values are of the form
   * `projects/<project>/instances/[a-z][a-z0-9\\-]+[a-z0-9]`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The descriptive name for this instance as it appears in UIs.
   * Can be changed at any time, but should be kept globally unique
   * to avoid confusion.
   *
   * @generated from field: string display_name = 2;
   */
  displayName = "";

  /**
   * (`OutputOnly`)
   * The current state of the instance.
   *
   * @generated from field: google.bigtable.admin.v2.Instance.State state = 3;
   */
  state = Instance_State.STATE_NOT_KNOWN;

  /**
   * The type of the instance. Defaults to `PRODUCTION`.
   *
   * @generated from field: google.bigtable.admin.v2.Instance.Type type = 4;
   */
  type = Instance_Type.TYPE_UNSPECIFIED;

  constructor(data?: PartialMessage<Instance>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.bigtable.admin.v2.Instance";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "state", kind: "enum", T: proto3.getEnumType(Instance_State) },
    { no: 4, name: "type", kind: "enum", T: proto3.getEnumType(Instance_Type) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Instance {
    return new Instance().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Instance {
    return new Instance().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Instance {
    return new Instance().fromJsonString(jsonString, options);
  }

  static equals(a: Instance | PlainMessage<Instance> | undefined, b: Instance | PlainMessage<Instance> | undefined): boolean {
    return proto3.util.equals(Instance, a, b);
  }
}

/**
 * Possible states of an instance.
 *
 * @generated from enum google.bigtable.admin.v2.Instance.State
 */
export enum Instance_State {
  /**
   * The state of the instance could not be determined.
   *
   * @generated from enum value: STATE_NOT_KNOWN = 0;
   */
  STATE_NOT_KNOWN = 0,

  /**
   * The instance has been successfully created and can serve requests
   * to its tables.
   *
   * @generated from enum value: READY = 1;
   */
  READY = 1,

  /**
   * The instance is currently being created, and may be destroyed
   * if the creation process encounters an error.
   *
   * @generated from enum value: CREATING = 2;
   */
  CREATING = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(Instance_State)
proto3.util.setEnumType(Instance_State, "google.bigtable.admin.v2.Instance.State", [
  { no: 0, name: "STATE_NOT_KNOWN" },
  { no: 1, name: "READY" },
  { no: 2, name: "CREATING" },
]);

/**
 * The type of the instance.
 *
 * @generated from enum google.bigtable.admin.v2.Instance.Type
 */
export enum Instance_Type {
  /**
   * The type of the instance is unspecified. If set when creating an
   * instance, a `PRODUCTION` instance will be created. If set when updating
   * an instance, the type will be left unchanged.
   *
   * @generated from enum value: TYPE_UNSPECIFIED = 0;
   */
  TYPE_UNSPECIFIED = 0,

  /**
   * An instance meant for production use. `serve_nodes` must be set
   * on the cluster.
   *
   * @generated from enum value: PRODUCTION = 1;
   */
  PRODUCTION = 1,

  /**
   * The instance is meant for development and testing purposes only; it has
   * no performance or uptime guarantees and is not covered by SLA.
   * After a development instance is created, it can be upgraded by
   * updating the instance to type `PRODUCTION`. An instance created
   * as a production instance cannot be changed to a development instance.
   * When creating a development instance, `serve_nodes` on the cluster must
   * not be set.
   *
   * @generated from enum value: DEVELOPMENT = 2;
   */
  DEVELOPMENT = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(Instance_Type)
proto3.util.setEnumType(Instance_Type, "google.bigtable.admin.v2.Instance.Type", [
  { no: 0, name: "TYPE_UNSPECIFIED" },
  { no: 1, name: "PRODUCTION" },
  { no: 2, name: "DEVELOPMENT" },
]);

/**
 * A resizable group of nodes in a particular cloud location, capable
 * of serving all [Tables][google.bigtable.admin.v2.Table] in the parent
 * [Instance][google.bigtable.admin.v2.Instance].
 *
 * @generated from message google.bigtable.admin.v2.Cluster
 */
export class Cluster extends Message<Cluster> {
  /**
   * (`OutputOnly`)
   * The unique name of the cluster. Values are of the form
   * `projects/<project>/instances/<instance>/clusters/[a-z][-a-z0-9]*`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * (`CreationOnly`)
   * The location where this cluster's nodes and storage reside. For best
   * performance, clients should be located as close as possible to this cluster.
   * Currently only zones are supported, so values should be of the form
   * `projects/<project>/locations/<zone>`.
   *
   * @generated from field: string location = 2;
   */
  location = "";

  /**
   * (`OutputOnly`)
   * The current state of the cluster.
   *
   * @generated from field: google.bigtable.admin.v2.Cluster.State state = 3;
   */
  state = Cluster_State.STATE_NOT_KNOWN;

  /**
   * The number of nodes allocated to this cluster. More nodes enable higher
   * throughput and more consistent performance.
   *
   * @generated from field: int32 serve_nodes = 4;
   */
  serveNodes = 0;

  /**
   * (`CreationOnly`)
   * The type of storage used by this cluster to serve its
   * parent instance's tables, unless explicitly overridden.
   *
   * @generated from field: google.bigtable.admin.v2.StorageType default_storage_type = 5;
   */
  defaultStorageType = StorageType.STORAGE_TYPE_UNSPECIFIED;

  constructor(data?: PartialMessage<Cluster>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.bigtable.admin.v2.Cluster";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "location", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "state", kind: "enum", T: proto3.getEnumType(Cluster_State) },
    { no: 4, name: "serve_nodes", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "default_storage_type", kind: "enum", T: proto3.getEnumType(StorageType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Cluster {
    return new Cluster().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Cluster {
    return new Cluster().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Cluster {
    return new Cluster().fromJsonString(jsonString, options);
  }

  static equals(a: Cluster | PlainMessage<Cluster> | undefined, b: Cluster | PlainMessage<Cluster> | undefined): boolean {
    return proto3.util.equals(Cluster, a, b);
  }
}

/**
 * Possible states of a cluster.
 *
 * @generated from enum google.bigtable.admin.v2.Cluster.State
 */
export enum Cluster_State {
  /**
   * The state of the cluster could not be determined.
   *
   * @generated from enum value: STATE_NOT_KNOWN = 0;
   */
  STATE_NOT_KNOWN = 0,

  /**
   * The cluster has been successfully created and is ready to serve requests.
   *
   * @generated from enum value: READY = 1;
   */
  READY = 1,

  /**
   * The cluster is currently being created, and may be destroyed
   * if the creation process encounters an error.
   * A cluster may not be able to serve requests while being created.
   *
   * @generated from enum value: CREATING = 2;
   */
  CREATING = 2,

  /**
   * The cluster is currently being resized, and may revert to its previous
   * node count if the process encounters an error.
   * A cluster is still capable of serving requests while being resized,
   * but may exhibit performance as if its number of allocated nodes is
   * between the starting and requested states.
   *
   * @generated from enum value: RESIZING = 3;
   */
  RESIZING = 3,

  /**
   * The cluster has no backing nodes. The data (tables) still
   * exist, but no operations can be performed on the cluster.
   *
   * @generated from enum value: DISABLED = 4;
   */
  DISABLED = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(Cluster_State)
proto3.util.setEnumType(Cluster_State, "google.bigtable.admin.v2.Cluster.State", [
  { no: 0, name: "STATE_NOT_KNOWN" },
  { no: 1, name: "READY" },
  { no: 2, name: "CREATING" },
  { no: 3, name: "RESIZING" },
  { no: 4, name: "DISABLED" },
]);

