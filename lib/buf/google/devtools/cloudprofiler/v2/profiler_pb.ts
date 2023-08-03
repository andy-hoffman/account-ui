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
// @generated from file google/devtools/cloudprofiler/v2/profiler.proto (package google.devtools.cloudprofiler.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";

/**
 * ProfileType is type of profiling data.
 * NOTE: the enumeration member names are used (in lowercase) as unique string
 * identifiers of profile types, so they must not be renamed.
 *
 * @generated from enum google.devtools.cloudprofiler.v2.ProfileType
 */
export enum ProfileType {
  /**
   * Unspecified profile type.
   *
   * @generated from enum value: PROFILE_TYPE_UNSPECIFIED = 0;
   */
  PROFILE_TYPE_UNSPECIFIED = 0,

  /**
   * Thread CPU time sampling.
   *
   * @generated from enum value: CPU = 1;
   */
  CPU = 1,

  /**
   * Wallclock time sampling. More expensive as stops all threads.
   *
   * @generated from enum value: WALL = 2;
   */
  WALL = 2,

  /**
   * Heap allocation sampling.
   *
   * @generated from enum value: HEAP = 3;
   */
  HEAP = 3,

  /**
   * Single-shot collection of all thread stacks.
   *
   * @generated from enum value: THREADS = 4;
   */
  THREADS = 4,

  /**
   * Synchronization contention profile.
   *
   * @generated from enum value: CONTENTION = 5;
   */
  CONTENTION = 5,
}
// Retrieve enum metadata with: proto3.getEnumType(ProfileType)
proto3.util.setEnumType(ProfileType, "google.devtools.cloudprofiler.v2.ProfileType", [
  { no: 0, name: "PROFILE_TYPE_UNSPECIFIED" },
  { no: 1, name: "CPU" },
  { no: 2, name: "WALL" },
  { no: 3, name: "HEAP" },
  { no: 4, name: "THREADS" },
  { no: 5, name: "CONTENTION" },
]);

/**
 * CreateProfileRequest describes a profile resource creation request.
 * Deployment field must be populated for both online and offline modes.
 * For the online mode, profile field is not set and the profile_type specifies
 * the list of profile types supported by the agent. The creation call will hang
 * until a profile of one of these types needs to be collected. For offline
 * mode, profile field must be set, profile_type must be empty, and deployment
 * field must be identical to the deployment in the profile.
 *
 * @generated from message google.devtools.cloudprofiler.v2.CreateProfileRequest
 */
export class CreateProfileRequest extends Message<CreateProfileRequest> {
  /**
   * Deployment details.
   *
   * @generated from field: google.devtools.cloudprofiler.v2.Deployment deployment = 1;
   */
  deployment?: Deployment;

  /**
   * Online mode: One or more profile types that the agent is capable of
   * providing.
   *
   * @generated from field: repeated google.devtools.cloudprofiler.v2.ProfileType profile_type = 2;
   */
  profileType: ProfileType[] = [];

  /**
   * Offline mode: Contents of the profile to create.
   *
   * @generated from field: google.devtools.cloudprofiler.v2.Profile profile = 3;
   */
  profile?: Profile;

  constructor(data?: PartialMessage<CreateProfileRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudprofiler.v2.CreateProfileRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "deployment", kind: "message", T: Deployment },
    { no: 2, name: "profile_type", kind: "enum", T: proto3.getEnumType(ProfileType), repeated: true },
    { no: 3, name: "profile", kind: "message", T: Profile },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateProfileRequest {
    return new CreateProfileRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateProfileRequest {
    return new CreateProfileRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateProfileRequest {
    return new CreateProfileRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateProfileRequest | PlainMessage<CreateProfileRequest> | undefined, b: CreateProfileRequest | PlainMessage<CreateProfileRequest> | undefined): boolean {
    return proto3.util.equals(CreateProfileRequest, a, b);
  }
}

/**
 * UpdateProfileRequest contains the profile to update.
 *
 * @generated from message google.devtools.cloudprofiler.v2.UpdateProfileRequest
 */
export class UpdateProfileRequest extends Message<UpdateProfileRequest> {
  /**
   * Profile to update
   *
   * @generated from field: google.devtools.cloudprofiler.v2.Profile profile = 1;
   */
  profile?: Profile;

  constructor(data?: PartialMessage<UpdateProfileRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudprofiler.v2.UpdateProfileRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "profile", kind: "message", T: Profile },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateProfileRequest {
    return new UpdateProfileRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateProfileRequest {
    return new UpdateProfileRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateProfileRequest {
    return new UpdateProfileRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateProfileRequest | PlainMessage<UpdateProfileRequest> | undefined, b: UpdateProfileRequest | PlainMessage<UpdateProfileRequest> | undefined): boolean {
    return proto3.util.equals(UpdateProfileRequest, a, b);
  }
}

/**
 * Profile resource.
 *
 * @generated from message google.devtools.cloudprofiler.v2.Profile
 */
export class Profile extends Message<Profile> {
  /**
   * Opaque, server-assigned, unique ID for this profile.
   * Output only.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * Type of profile.
   * Input (for the offline mode) or output (for the online mode).
   *
   * @generated from field: google.devtools.cloudprofiler.v2.ProfileType profile_type = 2;
   */
  profileType = ProfileType.PROFILE_TYPE_UNSPECIFIED;

  /**
   * Deployment this profile corresponds to.
   *
   * @generated from field: google.devtools.cloudprofiler.v2.Deployment deployment = 3;
   */
  deployment?: Deployment;

  /**
   * Duration of the profiling session.
   * Input (for the offline mode) or output (for the online mode).
   * The field represents requested profiling duration. It may slightly differ
   * from the effective profiling duration, which is recorded in the profile
   * data, in case the profiling can't be stopped immediately (e.g. in case
   * stopping the profiling is handled asynchronously).
   *
   * @generated from field: google.protobuf.Duration duration = 4;
   */
  duration?: Duration;

  /**
   * Profile bytes, as a gzip compressed serialized proto, the format is
   * https://github.com/google/pprof/blob/master/proto/profile.proto.
   *
   * @generated from field: bytes profile_bytes = 5;
   */
  profileBytes = new Uint8Array(0);

  /**
   * Labels associated to this specific profile. These labels will get merged
   * with the deployment labels for the final data set.
   * See documentation on deployment labels for validation rules and limits.
   * Input only, will not be populated on responses.
   *
   * @generated from field: map<string, string> labels = 6;
   */
  labels: { [key: string]: string } = {};

  constructor(data?: PartialMessage<Profile>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudprofiler.v2.Profile";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "profile_type", kind: "enum", T: proto3.getEnumType(ProfileType) },
    { no: 3, name: "deployment", kind: "message", T: Deployment },
    { no: 4, name: "duration", kind: "message", T: Duration },
    { no: 5, name: "profile_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Profile {
    return new Profile().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Profile {
    return new Profile().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Profile {
    return new Profile().fromJsonString(jsonString, options);
  }

  static equals(a: Profile | PlainMessage<Profile> | undefined, b: Profile | PlainMessage<Profile> | undefined): boolean {
    return proto3.util.equals(Profile, a, b);
  }
}

/**
 * Deployment contains the deployment identification information.
 *
 * @generated from message google.devtools.cloudprofiler.v2.Deployment
 */
export class Deployment extends Message<Deployment> {
  /**
   * Project ID is the ID of a cloud project.
   * Validation regex: `^[a-z][-a-z0-9:.]{4,61}[a-z0-9]$`.
   *
   * @generated from field: string project_id = 1;
   */
  projectId = "";

  /**
   * Target is the service name used to group related deployments:
   * * Service name for GAE Flex / Standard.
   * * Cluster and container name for GKE.
   * * User-specified string for direct GCE profiling (e.g. Java).
   * * Job name for Dataflow.
   * Validation regex: `^[a-z]([-a-z0-9_.]{0,253}[a-z0-9])?$`.
   *
   * @generated from field: string target = 2;
   */
  target = "";

  /**
   * Labels identify the deployment within the user universe and same target.
   * Validation regex for label names: `^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$`.
   * Value for an individual label must be <= 512 bytes, the total
   * size of all label names and values must be <= 1024 bytes.
   *
   * Label named "language" can be used to record the programming language of
   * the profiled deployment. The standard choices for the value include "java",
   * "go", "python", "ruby", "nodejs", "php", "dotnet".
   *
   * For deployments running on Google Cloud Platform, "zone" or "region" label
   * should be present describing the deployment location. An example of a zone
   * is "us-central1-a", an example of a region is "us-central1" or
   * "us-central".
   *
   * @generated from field: map<string, string> labels = 3;
   */
  labels: { [key: string]: string } = {};

  constructor(data?: PartialMessage<Deployment>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.devtools.cloudprofiler.v2.Deployment";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "target", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Deployment {
    return new Deployment().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Deployment {
    return new Deployment().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Deployment {
    return new Deployment().fromJsonString(jsonString, options);
  }

  static equals(a: Deployment | PlainMessage<Deployment> | undefined, b: Deployment | PlainMessage<Deployment> | undefined): boolean {
    return proto3.util.equals(Deployment, a, b);
  }
}

