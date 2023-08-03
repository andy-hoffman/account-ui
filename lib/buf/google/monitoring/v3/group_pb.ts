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
// @generated from file google/monitoring/v3/group.proto (package google.monitoring.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * The description of a dynamic collection of monitored resources. Each group
 * has a filter that is matched against monitored resources and their associated
 * metadata. If a group's filter matches an available monitored resource, then
 * that resource is a member of that group.  Groups can contain any number of
 * monitored resources, and each monitored resource can be a member of any
 * number of groups.
 *
 * Groups can be nested in parent-child hierarchies. The `parentName` field
 * identifies an optional parent for each group.  If a group has a parent, then
 * the only monitored resources available to be matched by the group's filter
 * are the resources contained in the parent group.  In other words, a group
 * contains the monitored resources that match its filter and the filters of all
 * the group's ancestors.  A group without a parent can contain any monitored
 * resource.
 *
 * For example, consider an infrastructure running a set of instances with two
 * user-defined tags: `"environment"` and `"role"`. A parent group has a filter,
 * `environment="production"`.  A child of that parent group has a filter,
 * `role="transcoder"`.  The parent group contains all instances in the
 * production environment, regardless of their roles.  The child group contains
 * instances that have the transcoder role *and* are in the production
 * environment.
 *
 * The monitored resources contained in a group can change at any moment,
 * depending on what resources exist and what filters are associated with the
 * group and its ancestors.
 *
 * @generated from message google.monitoring.v3.Group
 */
export class Group extends Message<Group> {
  /**
   * Output only. The name of this group. The format is
   * `"projects/{project_id_or_number}/groups/{group_id}"`.
   * When creating a group, this field is ignored and a new name is created
   * consisting of the project specified in the call to `CreateGroup`
   * and a unique `{group_id}` that is generated automatically.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * A user-assigned name for this group, used only for display purposes.
   *
   * @generated from field: string display_name = 2;
   */
  displayName = "";

  /**
   * The name of the group's parent, if it has one.
   * The format is `"projects/{project_id_or_number}/groups/{group_id}"`.
   * For groups with no parent, `parentName` is the empty string, `""`.
   *
   * @generated from field: string parent_name = 3;
   */
  parentName = "";

  /**
   * The filter used to determine which monitored resources belong to this group.
   *
   * @generated from field: string filter = 5;
   */
  filter = "";

  /**
   * If true, the members of this group are considered to be a cluster.
   * The system can perform additional analysis on groups that are clusters.
   *
   * @generated from field: bool is_cluster = 6;
   */
  isCluster = false;

  constructor(data?: PartialMessage<Group>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.Group";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "parent_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "is_cluster", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Group {
    return new Group().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Group {
    return new Group().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Group {
    return new Group().fromJsonString(jsonString, options);
  }

  static equals(a: Group | PlainMessage<Group> | undefined, b: Group | PlainMessage<Group> | undefined): boolean {
    return proto3.util.equals(Group, a, b);
  }
}

