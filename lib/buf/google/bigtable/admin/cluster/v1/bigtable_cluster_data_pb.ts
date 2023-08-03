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
// @generated from file google/bigtable/admin/cluster/v1/bigtable_cluster_data.proto (package google.bigtable.admin.cluster.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Operation } from "../../../../longrunning/operations_pb.js";

/**
 * @generated from enum google.bigtable.admin.cluster.v1.StorageType
 */
export enum StorageType {
  /**
   * The storage type used is unspecified.
   *
   * @generated from enum value: STORAGE_UNSPECIFIED = 0;
   */
  STORAGE_UNSPECIFIED = 0,

  /**
   * Data will be stored in SSD, providing low and consistent latencies.
   *
   * @generated from enum value: STORAGE_SSD = 1;
   */
  STORAGE_SSD = 1,

  /**
   * Data will be stored in HDD, providing high and less predictable
   * latencies.
   *
   * @generated from enum value: STORAGE_HDD = 2;
   */
  STORAGE_HDD = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(StorageType)
proto3.util.setEnumType(StorageType, "google.bigtable.admin.cluster.v1.StorageType", [
  { no: 0, name: "STORAGE_UNSPECIFIED" },
  { no: 1, name: "STORAGE_SSD" },
  { no: 2, name: "STORAGE_HDD" },
]);

/**
 * A physical location in which a particular project can allocate Cloud BigTable
 * resources.
 *
 * @generated from message google.bigtable.admin.cluster.v1.Zone
 */
export class Zone extends Message<Zone> {
  /**
   * A permanent unique identifier for the zone.
   * Values are of the form projects/<project>/zones/[a-z][-a-z0-9]*
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The name of this zone as it appears in UIs.
   *
   * @generated from field: string display_name = 2;
   */
  displayName = "";

  /**
   * The current state of this zone.
   *
   * @generated from field: google.bigtable.admin.cluster.v1.Zone.Status status = 3;
   */
  status = Zone_Status.UNKNOWN;

  constructor(data?: PartialMessage<Zone>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.bigtable.admin.cluster.v1.Zone";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(Zone_Status) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Zone {
    return new Zone().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Zone {
    return new Zone().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Zone {
    return new Zone().fromJsonString(jsonString, options);
  }

  static equals(a: Zone | PlainMessage<Zone> | undefined, b: Zone | PlainMessage<Zone> | undefined): boolean {
    return proto3.util.equals(Zone, a, b);
  }
}

/**
 * Possible states of a zone.
 *
 * @generated from enum google.bigtable.admin.cluster.v1.Zone.Status
 */
export enum Zone_Status {
  /**
   * The state of the zone is unknown or unspecified.
   *
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * The zone is in a good state.
   *
   * @generated from enum value: OK = 1;
   */
  OK = 1,

  /**
   * The zone is down for planned maintenance.
   *
   * @generated from enum value: PLANNED_MAINTENANCE = 2;
   */
  PLANNED_MAINTENANCE = 2,

  /**
   * The zone is down for emergency or unplanned maintenance.
   *
   * @generated from enum value: EMERGENCY_MAINENANCE = 3;
   */
  EMERGENCY_MAINENANCE = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(Zone_Status)
proto3.util.setEnumType(Zone_Status, "google.bigtable.admin.cluster.v1.Zone.Status", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "OK" },
  { no: 2, name: "PLANNED_MAINTENANCE" },
  { no: 3, name: "EMERGENCY_MAINENANCE" },
]);

/**
 * An isolated set of Cloud BigTable resources on which tables can be hosted.
 *
 * @generated from message google.bigtable.admin.cluster.v1.Cluster
 */
export class Cluster extends Message<Cluster> {
  /**
   * A permanent unique identifier for the cluster. For technical reasons, the
   * zone in which the cluster resides is included here.
   * Values are of the form
   * projects/<project>/zones/<zone>/clusters/[a-z][-a-z0-9]*
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The operation currently running on the cluster, if any.
   * This cannot be set directly, only through CreateCluster, UpdateCluster,
   * or UndeleteCluster. Calls to these methods will be rejected if
   * "current_operation" is already set.
   *
   * @generated from field: google.longrunning.Operation current_operation = 3;
   */
  currentOperation?: Operation;

  /**
   * The descriptive name for this cluster as it appears in UIs.
   * Must be unique per zone.
   *
   * @generated from field: string display_name = 4;
   */
  displayName = "";

  /**
   * The number of serve nodes allocated to this cluster.
   *
   * @generated from field: int32 serve_nodes = 5;
   */
  serveNodes = 0;

  /**
   * What storage type to use for tables in this cluster. Only configurable at
   * cluster creation time. If unspecified, STORAGE_SSD will be used.
   *
   * @generated from field: google.bigtable.admin.cluster.v1.StorageType default_storage_type = 8;
   */
  defaultStorageType = StorageType.STORAGE_UNSPECIFIED;

  constructor(data?: PartialMessage<Cluster>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.bigtable.admin.cluster.v1.Cluster";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "current_operation", kind: "message", T: Operation },
    { no: 4, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "serve_nodes", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "default_storage_type", kind: "enum", T: proto3.getEnumType(StorageType) },
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

