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
// @generated from file google/genomics/v1/datasets.proto (package google.genomics.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { FieldMask, Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * A Dataset is a collection of genomic data.
 *
 * For more genomics resource definitions, see [Fundamentals of Google
 * Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
 *
 * @generated from message google.genomics.v1.Dataset
 */
export class Dataset extends Message<Dataset> {
  /**
   * The server-generated dataset ID, unique across all datasets.
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * The Google Cloud project ID that this dataset belongs to.
   *
   * @generated from field: string project_id = 2;
   */
  projectId = "";

  /**
   * The dataset name.
   *
   * @generated from field: string name = 3;
   */
  name = "";

  /**
   * The time this dataset was created, in seconds from the epoch.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 4;
   */
  createTime?: Timestamp;

  constructor(data?: PartialMessage<Dataset>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.genomics.v1.Dataset";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "create_time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Dataset {
    return new Dataset().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Dataset {
    return new Dataset().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Dataset {
    return new Dataset().fromJsonString(jsonString, options);
  }

  static equals(a: Dataset | PlainMessage<Dataset> | undefined, b: Dataset | PlainMessage<Dataset> | undefined): boolean {
    return proto3.util.equals(Dataset, a, b);
  }
}

/**
 * The dataset list request.
 *
 * @generated from message google.genomics.v1.ListDatasetsRequest
 */
export class ListDatasetsRequest extends Message<ListDatasetsRequest> {
  /**
   * Required. The Google Cloud project ID to list datasets for.
   *
   * @generated from field: string project_id = 1;
   */
  projectId = "";

  /**
   * The maximum number of results to return in a single page. If unspecified,
   * defaults to 50. The maximum value is 1024.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize = 0;

  /**
   * The continuation token, which is used to page through large result sets.
   * To get the next page of results, set this parameter to the value of
   * `nextPageToken` from the previous response.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListDatasetsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.genomics.v1.ListDatasetsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListDatasetsRequest {
    return new ListDatasetsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListDatasetsRequest {
    return new ListDatasetsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListDatasetsRequest {
    return new ListDatasetsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListDatasetsRequest | PlainMessage<ListDatasetsRequest> | undefined, b: ListDatasetsRequest | PlainMessage<ListDatasetsRequest> | undefined): boolean {
    return proto3.util.equals(ListDatasetsRequest, a, b);
  }
}

/**
 * The dataset list response.
 *
 * @generated from message google.genomics.v1.ListDatasetsResponse
 */
export class ListDatasetsResponse extends Message<ListDatasetsResponse> {
  /**
   * The list of matching Datasets.
   *
   * @generated from field: repeated google.genomics.v1.Dataset datasets = 1;
   */
  datasets: Dataset[] = [];

  /**
   * The continuation token, which is used to page through large result sets.
   * Provide this value in a subsequent request to return the next page of
   * results. This field will be empty if there aren't any additional results.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListDatasetsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.genomics.v1.ListDatasetsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "datasets", kind: "message", T: Dataset, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListDatasetsResponse {
    return new ListDatasetsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListDatasetsResponse {
    return new ListDatasetsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListDatasetsResponse {
    return new ListDatasetsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListDatasetsResponse | PlainMessage<ListDatasetsResponse> | undefined, b: ListDatasetsResponse | PlainMessage<ListDatasetsResponse> | undefined): boolean {
    return proto3.util.equals(ListDatasetsResponse, a, b);
  }
}

/**
 * @generated from message google.genomics.v1.CreateDatasetRequest
 */
export class CreateDatasetRequest extends Message<CreateDatasetRequest> {
  /**
   * The dataset to be created. Must contain projectId and name.
   *
   * @generated from field: google.genomics.v1.Dataset dataset = 1;
   */
  dataset?: Dataset;

  constructor(data?: PartialMessage<CreateDatasetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.genomics.v1.CreateDatasetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "dataset", kind: "message", T: Dataset },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDatasetRequest {
    return new CreateDatasetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDatasetRequest {
    return new CreateDatasetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDatasetRequest {
    return new CreateDatasetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateDatasetRequest | PlainMessage<CreateDatasetRequest> | undefined, b: CreateDatasetRequest | PlainMessage<CreateDatasetRequest> | undefined): boolean {
    return proto3.util.equals(CreateDatasetRequest, a, b);
  }
}

/**
 * @generated from message google.genomics.v1.UpdateDatasetRequest
 */
export class UpdateDatasetRequest extends Message<UpdateDatasetRequest> {
  /**
   * The ID of the dataset to be updated.
   *
   * @generated from field: string dataset_id = 1;
   */
  datasetId = "";

  /**
   * The new dataset data.
   *
   * @generated from field: google.genomics.v1.Dataset dataset = 2;
   */
  dataset?: Dataset;

  /**
   * An optional mask specifying which fields to update. At this time, the only
   * mutable field is [name][google.genomics.v1.Dataset.name]. The only
   * acceptable value is "name". If unspecified, all mutable fields will be
   * updated.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 3;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateDatasetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.genomics.v1.UpdateDatasetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "dataset_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "dataset", kind: "message", T: Dataset },
    { no: 3, name: "update_mask", kind: "message", T: FieldMask },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDatasetRequest {
    return new UpdateDatasetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDatasetRequest {
    return new UpdateDatasetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateDatasetRequest {
    return new UpdateDatasetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateDatasetRequest | PlainMessage<UpdateDatasetRequest> | undefined, b: UpdateDatasetRequest | PlainMessage<UpdateDatasetRequest> | undefined): boolean {
    return proto3.util.equals(UpdateDatasetRequest, a, b);
  }
}

/**
 * @generated from message google.genomics.v1.DeleteDatasetRequest
 */
export class DeleteDatasetRequest extends Message<DeleteDatasetRequest> {
  /**
   * The ID of the dataset to be deleted.
   *
   * @generated from field: string dataset_id = 1;
   */
  datasetId = "";

  constructor(data?: PartialMessage<DeleteDatasetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.genomics.v1.DeleteDatasetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "dataset_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteDatasetRequest {
    return new DeleteDatasetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteDatasetRequest {
    return new DeleteDatasetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteDatasetRequest {
    return new DeleteDatasetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteDatasetRequest | PlainMessage<DeleteDatasetRequest> | undefined, b: DeleteDatasetRequest | PlainMessage<DeleteDatasetRequest> | undefined): boolean {
    return proto3.util.equals(DeleteDatasetRequest, a, b);
  }
}

/**
 * @generated from message google.genomics.v1.UndeleteDatasetRequest
 */
export class UndeleteDatasetRequest extends Message<UndeleteDatasetRequest> {
  /**
   * The ID of the dataset to be undeleted.
   *
   * @generated from field: string dataset_id = 1;
   */
  datasetId = "";

  constructor(data?: PartialMessage<UndeleteDatasetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.genomics.v1.UndeleteDatasetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "dataset_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UndeleteDatasetRequest {
    return new UndeleteDatasetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UndeleteDatasetRequest {
    return new UndeleteDatasetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UndeleteDatasetRequest {
    return new UndeleteDatasetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UndeleteDatasetRequest | PlainMessage<UndeleteDatasetRequest> | undefined, b: UndeleteDatasetRequest | PlainMessage<UndeleteDatasetRequest> | undefined): boolean {
    return proto3.util.equals(UndeleteDatasetRequest, a, b);
  }
}

/**
 * @generated from message google.genomics.v1.GetDatasetRequest
 */
export class GetDatasetRequest extends Message<GetDatasetRequest> {
  /**
   * The ID of the dataset.
   *
   * @generated from field: string dataset_id = 1;
   */
  datasetId = "";

  constructor(data?: PartialMessage<GetDatasetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.genomics.v1.GetDatasetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "dataset_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDatasetRequest {
    return new GetDatasetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDatasetRequest {
    return new GetDatasetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDatasetRequest {
    return new GetDatasetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetDatasetRequest | PlainMessage<GetDatasetRequest> | undefined, b: GetDatasetRequest | PlainMessage<GetDatasetRequest> | undefined): boolean {
    return proto3.util.equals(GetDatasetRequest, a, b);
  }
}
