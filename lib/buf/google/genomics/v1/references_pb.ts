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
// @generated from file google/genomics/v1/references.proto (package google.genomics.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * A reference is a canonical assembled DNA sequence, intended to act as a
 * reference coordinate space for other genomic annotations. A single reference
 * might represent the human chromosome 1 or mitochandrial DNA, for instance. A
 * reference belongs to one or more reference sets.
 *
 * For more genomics resource definitions, see [Fundamentals of Google
 * Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
 *
 * @generated from message google.genomics.v1.Reference
 */
export class Reference extends Message<Reference> {
  /**
   * The server-generated reference ID, unique across all references.
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * The length of this reference's sequence.
   *
   * @generated from field: int64 length = 2;
   */
  length = protoInt64.zero;

  /**
   * MD5 of the upper-case sequence excluding all whitespace characters (this
   * is equivalent to SQ:M5 in SAM). This value is represented in lower case
   * hexadecimal format.
   *
   * @generated from field: string md5checksum = 3;
   */
  md5checksum = "";

  /**
   * The name of this reference, for example `22`.
   *
   * @generated from field: string name = 4;
   */
  name = "";

  /**
   * The URI from which the sequence was obtained. Typically specifies a FASTA
   * format file.
   *
   * @generated from field: string source_uri = 5;
   */
  sourceUri = "";

  /**
   * All known corresponding accession IDs in INSDC (GenBank/ENA/DDBJ) ideally
   * with a version number, for example `GCF_000001405.26`.
   *
   * @generated from field: repeated string source_accessions = 6;
   */
  sourceAccessions: string[] = [];

  /**
   * ID from http://www.ncbi.nlm.nih.gov/taxonomy. For example, 9606 for human.
   *
   * @generated from field: int32 ncbi_taxon_id = 7;
   */
  ncbiTaxonId = 0;

  constructor(data?: PartialMessage<Reference>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.genomics.v1.Reference";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "length", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "md5checksum", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "source_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "source_accessions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "ncbi_taxon_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Reference {
    return new Reference().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Reference {
    return new Reference().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Reference {
    return new Reference().fromJsonString(jsonString, options);
  }

  static equals(a: Reference | PlainMessage<Reference> | undefined, b: Reference | PlainMessage<Reference> | undefined): boolean {
    return proto3.util.equals(Reference, a, b);
  }
}

/**
 * A reference set is a set of references which typically comprise a reference
 * assembly for a species, such as `GRCh38` which is representative
 * of the human genome. A reference set defines a common coordinate space for
 * comparing reference-aligned experimental data. A reference set contains 1 or
 * more references.
 *
 * For more genomics resource definitions, see [Fundamentals of Google
 * Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
 *
 * @generated from message google.genomics.v1.ReferenceSet
 */
export class ReferenceSet extends Message<ReferenceSet> {
  /**
   * The server-generated reference set ID, unique across all reference sets.
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * The IDs of the reference objects that are part of this set.
   * `Reference.md5checksum` must be unique within this set.
   *
   * @generated from field: repeated string reference_ids = 2;
   */
  referenceIds: string[] = [];

  /**
   * Order-independent MD5 checksum which identifies this reference set. The
   * checksum is computed by sorting all lower case hexidecimal string
   * `reference.md5checksum` (for all reference in this set) in
   * ascending lexicographic order, concatenating, and taking the MD5 of that
   * value. The resulting value is represented in lower case hexadecimal format.
   *
   * @generated from field: string md5checksum = 3;
   */
  md5checksum = "";

  /**
   * ID from http://www.ncbi.nlm.nih.gov/taxonomy (for example, 9606 for human)
   * indicating the species which this reference set is intended to model. Note
   * that contained references may specify a different `ncbiTaxonId`, as
   * assemblies may contain reference sequences which do not belong to the
   * modeled species, for example EBV in a human reference genome.
   *
   * @generated from field: int32 ncbi_taxon_id = 4;
   */
  ncbiTaxonId = 0;

  /**
   * Free text description of this reference set.
   *
   * @generated from field: string description = 5;
   */
  description = "";

  /**
   * Public id of this reference set, such as `GRCh37`.
   *
   * @generated from field: string assembly_id = 6;
   */
  assemblyId = "";

  /**
   * The URI from which the references were obtained.
   *
   * @generated from field: string source_uri = 7;
   */
  sourceUri = "";

  /**
   * All known corresponding accession IDs in INSDC (GenBank/ENA/DDBJ) ideally
   * with a version number, for example `NC_000001.11`.
   *
   * @generated from field: repeated string source_accessions = 8;
   */
  sourceAccessions: string[] = [];

  constructor(data?: PartialMessage<ReferenceSet>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.genomics.v1.ReferenceSet";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "reference_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "md5checksum", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "ncbi_taxon_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "assembly_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "source_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "source_accessions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReferenceSet {
    return new ReferenceSet().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReferenceSet {
    return new ReferenceSet().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReferenceSet {
    return new ReferenceSet().fromJsonString(jsonString, options);
  }

  static equals(a: ReferenceSet | PlainMessage<ReferenceSet> | undefined, b: ReferenceSet | PlainMessage<ReferenceSet> | undefined): boolean {
    return proto3.util.equals(ReferenceSet, a, b);
  }
}

/**
 * @generated from message google.genomics.v1.SearchReferenceSetsRequest
 */
export class SearchReferenceSetsRequest extends Message<SearchReferenceSetsRequest> {
  /**
   * If present, return reference sets for which the
   * [md5checksum][google.genomics.v1.ReferenceSet.md5checksum] matches exactly.
   *
   * @generated from field: repeated string md5checksums = 1;
   */
  md5checksums: string[] = [];

  /**
   * If present, return reference sets for which a prefix of any of
   * [sourceAccessions][google.genomics.v1.ReferenceSet.source_accessions]
   * match any of these strings. Accession numbers typically have a main number
   * and a version, for example `NC_000001.11`.
   *
   * @generated from field: repeated string accessions = 2;
   */
  accessions: string[] = [];

  /**
   * If present, return reference sets for which a substring of their
   * `assemblyId` matches this string (case insensitive).
   *
   * @generated from field: string assembly_id = 3;
   */
  assemblyId = "";

  /**
   * The continuation token, which is used to page through large result sets.
   * To get the next page of results, set this parameter to the value of
   * `nextPageToken` from the previous response.
   *
   * @generated from field: string page_token = 4;
   */
  pageToken = "";

  /**
   * The maximum number of results to return in a single page. If unspecified,
   * defaults to 1024. The maximum value is 4096.
   *
   * @generated from field: int32 page_size = 5;
   */
  pageSize = 0;

  constructor(data?: PartialMessage<SearchReferenceSetsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.genomics.v1.SearchReferenceSetsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "md5checksums", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "accessions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "assembly_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchReferenceSetsRequest {
    return new SearchReferenceSetsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchReferenceSetsRequest {
    return new SearchReferenceSetsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchReferenceSetsRequest {
    return new SearchReferenceSetsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SearchReferenceSetsRequest | PlainMessage<SearchReferenceSetsRequest> | undefined, b: SearchReferenceSetsRequest | PlainMessage<SearchReferenceSetsRequest> | undefined): boolean {
    return proto3.util.equals(SearchReferenceSetsRequest, a, b);
  }
}

/**
 * @generated from message google.genomics.v1.SearchReferenceSetsResponse
 */
export class SearchReferenceSetsResponse extends Message<SearchReferenceSetsResponse> {
  /**
   * The matching references sets.
   *
   * @generated from field: repeated google.genomics.v1.ReferenceSet reference_sets = 1;
   */
  referenceSets: ReferenceSet[] = [];

  /**
   * The continuation token, which is used to page through large result sets.
   * Provide this value in a subsequent request to return the next page of
   * results. This field will be empty if there aren't any additional results.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<SearchReferenceSetsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.genomics.v1.SearchReferenceSetsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "reference_sets", kind: "message", T: ReferenceSet, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchReferenceSetsResponse {
    return new SearchReferenceSetsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchReferenceSetsResponse {
    return new SearchReferenceSetsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchReferenceSetsResponse {
    return new SearchReferenceSetsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SearchReferenceSetsResponse | PlainMessage<SearchReferenceSetsResponse> | undefined, b: SearchReferenceSetsResponse | PlainMessage<SearchReferenceSetsResponse> | undefined): boolean {
    return proto3.util.equals(SearchReferenceSetsResponse, a, b);
  }
}

/**
 * @generated from message google.genomics.v1.GetReferenceSetRequest
 */
export class GetReferenceSetRequest extends Message<GetReferenceSetRequest> {
  /**
   * The ID of the reference set.
   *
   * @generated from field: string reference_set_id = 1;
   */
  referenceSetId = "";

  constructor(data?: PartialMessage<GetReferenceSetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.genomics.v1.GetReferenceSetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "reference_set_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetReferenceSetRequest {
    return new GetReferenceSetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetReferenceSetRequest {
    return new GetReferenceSetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetReferenceSetRequest {
    return new GetReferenceSetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetReferenceSetRequest | PlainMessage<GetReferenceSetRequest> | undefined, b: GetReferenceSetRequest | PlainMessage<GetReferenceSetRequest> | undefined): boolean {
    return proto3.util.equals(GetReferenceSetRequest, a, b);
  }
}

/**
 * @generated from message google.genomics.v1.SearchReferencesRequest
 */
export class SearchReferencesRequest extends Message<SearchReferencesRequest> {
  /**
   * If present, return references for which the
   * [md5checksum][google.genomics.v1.Reference.md5checksum] matches exactly.
   *
   * @generated from field: repeated string md5checksums = 1;
   */
  md5checksums: string[] = [];

  /**
   * If present, return references for which a prefix of any of
   * [sourceAccessions][google.genomics.v1.Reference.source_accessions] match
   * any of these strings. Accession numbers typically have a main number and a
   * version, for example `GCF_000001405.26`.
   *
   * @generated from field: repeated string accessions = 2;
   */
  accessions: string[] = [];

  /**
   * If present, return only references which belong to this reference set.
   *
   * @generated from field: string reference_set_id = 3;
   */
  referenceSetId = "";

  /**
   * The continuation token, which is used to page through large result sets.
   * To get the next page of results, set this parameter to the value of
   * `nextPageToken` from the previous response.
   *
   * @generated from field: string page_token = 4;
   */
  pageToken = "";

  /**
   * The maximum number of results to return in a single page. If unspecified,
   * defaults to 1024. The maximum value is 4096.
   *
   * @generated from field: int32 page_size = 5;
   */
  pageSize = 0;

  constructor(data?: PartialMessage<SearchReferencesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.genomics.v1.SearchReferencesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "md5checksums", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "accessions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "reference_set_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchReferencesRequest {
    return new SearchReferencesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchReferencesRequest {
    return new SearchReferencesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchReferencesRequest {
    return new SearchReferencesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SearchReferencesRequest | PlainMessage<SearchReferencesRequest> | undefined, b: SearchReferencesRequest | PlainMessage<SearchReferencesRequest> | undefined): boolean {
    return proto3.util.equals(SearchReferencesRequest, a, b);
  }
}

/**
 * @generated from message google.genomics.v1.SearchReferencesResponse
 */
export class SearchReferencesResponse extends Message<SearchReferencesResponse> {
  /**
   * The matching references.
   *
   * @generated from field: repeated google.genomics.v1.Reference references = 1;
   */
  references: Reference[] = [];

  /**
   * The continuation token, which is used to page through large result sets.
   * Provide this value in a subsequent request to return the next page of
   * results. This field will be empty if there aren't any additional results.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<SearchReferencesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.genomics.v1.SearchReferencesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "references", kind: "message", T: Reference, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchReferencesResponse {
    return new SearchReferencesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchReferencesResponse {
    return new SearchReferencesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchReferencesResponse {
    return new SearchReferencesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SearchReferencesResponse | PlainMessage<SearchReferencesResponse> | undefined, b: SearchReferencesResponse | PlainMessage<SearchReferencesResponse> | undefined): boolean {
    return proto3.util.equals(SearchReferencesResponse, a, b);
  }
}

/**
 * @generated from message google.genomics.v1.GetReferenceRequest
 */
export class GetReferenceRequest extends Message<GetReferenceRequest> {
  /**
   * The ID of the reference.
   *
   * @generated from field: string reference_id = 1;
   */
  referenceId = "";

  constructor(data?: PartialMessage<GetReferenceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.genomics.v1.GetReferenceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetReferenceRequest {
    return new GetReferenceRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetReferenceRequest {
    return new GetReferenceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetReferenceRequest {
    return new GetReferenceRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetReferenceRequest | PlainMessage<GetReferenceRequest> | undefined, b: GetReferenceRequest | PlainMessage<GetReferenceRequest> | undefined): boolean {
    return proto3.util.equals(GetReferenceRequest, a, b);
  }
}

/**
 * @generated from message google.genomics.v1.ListBasesRequest
 */
export class ListBasesRequest extends Message<ListBasesRequest> {
  /**
   * The ID of the reference.
   *
   * @generated from field: string reference_id = 1;
   */
  referenceId = "";

  /**
   * The start position (0-based) of this query. Defaults to 0.
   *
   * @generated from field: int64 start = 2;
   */
  start = protoInt64.zero;

  /**
   * The end position (0-based, exclusive) of this query. Defaults to the length
   * of this reference.
   *
   * @generated from field: int64 end = 3;
   */
  end = protoInt64.zero;

  /**
   * The continuation token, which is used to page through large result sets.
   * To get the next page of results, set this parameter to the value of
   * `nextPageToken` from the previous response.
   *
   * @generated from field: string page_token = 4;
   */
  pageToken = "";

  /**
   * The maximum number of bases to return in a single page. If unspecified,
   * defaults to 200Kbp (kilo base pairs). The maximum value is 10Mbp (mega base
   * pairs).
   *
   * @generated from field: int32 page_size = 5;
   */
  pageSize = 0;

  constructor(data?: PartialMessage<ListBasesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.genomics.v1.ListBasesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListBasesRequest {
    return new ListBasesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListBasesRequest {
    return new ListBasesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListBasesRequest {
    return new ListBasesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListBasesRequest | PlainMessage<ListBasesRequest> | undefined, b: ListBasesRequest | PlainMessage<ListBasesRequest> | undefined): boolean {
    return proto3.util.equals(ListBasesRequest, a, b);
  }
}

/**
 * @generated from message google.genomics.v1.ListBasesResponse
 */
export class ListBasesResponse extends Message<ListBasesResponse> {
  /**
   * The offset position (0-based) of the given `sequence` from the
   * start of this `Reference`. This value will differ for each page
   * in a paginated request.
   *
   * @generated from field: int64 offset = 1;
   */
  offset = protoInt64.zero;

  /**
   * A substring of the bases that make up this reference.
   *
   * @generated from field: string sequence = 2;
   */
  sequence = "";

  /**
   * The continuation token, which is used to page through large result sets.
   * Provide this value in a subsequent request to return the next page of
   * results. This field will be empty if there aren't any additional results.
   *
   * @generated from field: string next_page_token = 3;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListBasesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.genomics.v1.ListBasesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "sequence", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListBasesResponse {
    return new ListBasesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListBasesResponse {
    return new ListBasesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListBasesResponse {
    return new ListBasesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListBasesResponse | PlainMessage<ListBasesResponse> | undefined, b: ListBasesResponse | PlainMessage<ListBasesResponse> | undefined): boolean {
    return proto3.util.equals(ListBasesResponse, a, b);
  }
}

