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
// @generated from file google/cloud/vision/v1p1beta1/web_detection.proto (package google.cloud.vision.v1p1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Relevant information for the image from the Internet.
 *
 * @generated from message google.cloud.vision.v1p1beta1.WebDetection
 */
export class WebDetection extends Message<WebDetection> {
  /**
   * Deduced entities from similar images on the Internet.
   *
   * @generated from field: repeated google.cloud.vision.v1p1beta1.WebDetection.WebEntity web_entities = 1;
   */
  webEntities: WebDetection_WebEntity[] = [];

  /**
   * Fully matching images from the Internet.
   * Can include resized copies of the query image.
   *
   * @generated from field: repeated google.cloud.vision.v1p1beta1.WebDetection.WebImage full_matching_images = 2;
   */
  fullMatchingImages: WebDetection_WebImage[] = [];

  /**
   * Partial matching images from the Internet.
   * Those images are similar enough to share some key-point features. For
   * example an original image will likely have partial matching for its crops.
   *
   * @generated from field: repeated google.cloud.vision.v1p1beta1.WebDetection.WebImage partial_matching_images = 3;
   */
  partialMatchingImages: WebDetection_WebImage[] = [];

  /**
   * Web pages containing the matching images from the Internet.
   *
   * @generated from field: repeated google.cloud.vision.v1p1beta1.WebDetection.WebPage pages_with_matching_images = 4;
   */
  pagesWithMatchingImages: WebDetection_WebPage[] = [];

  /**
   * The visually similar image results.
   *
   * @generated from field: repeated google.cloud.vision.v1p1beta1.WebDetection.WebImage visually_similar_images = 6;
   */
  visuallySimilarImages: WebDetection_WebImage[] = [];

  /**
   * Best guess text labels for the request image.
   *
   * @generated from field: repeated google.cloud.vision.v1p1beta1.WebDetection.WebLabel best_guess_labels = 8;
   */
  bestGuessLabels: WebDetection_WebLabel[] = [];

  constructor(data?: PartialMessage<WebDetection>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.vision.v1p1beta1.WebDetection";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "web_entities", kind: "message", T: WebDetection_WebEntity, repeated: true },
    { no: 2, name: "full_matching_images", kind: "message", T: WebDetection_WebImage, repeated: true },
    { no: 3, name: "partial_matching_images", kind: "message", T: WebDetection_WebImage, repeated: true },
    { no: 4, name: "pages_with_matching_images", kind: "message", T: WebDetection_WebPage, repeated: true },
    { no: 6, name: "visually_similar_images", kind: "message", T: WebDetection_WebImage, repeated: true },
    { no: 8, name: "best_guess_labels", kind: "message", T: WebDetection_WebLabel, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WebDetection {
    return new WebDetection().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WebDetection {
    return new WebDetection().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WebDetection {
    return new WebDetection().fromJsonString(jsonString, options);
  }

  static equals(a: WebDetection | PlainMessage<WebDetection> | undefined, b: WebDetection | PlainMessage<WebDetection> | undefined): boolean {
    return proto3.util.equals(WebDetection, a, b);
  }
}

/**
 * Entity deduced from similar images on the Internet.
 *
 * @generated from message google.cloud.vision.v1p1beta1.WebDetection.WebEntity
 */
export class WebDetection_WebEntity extends Message<WebDetection_WebEntity> {
  /**
   * Opaque entity ID.
   *
   * @generated from field: string entity_id = 1;
   */
  entityId = "";

  /**
   * Overall relevancy score for the entity.
   * Not normalized and not comparable across different image queries.
   *
   * @generated from field: float score = 2;
   */
  score = 0;

  /**
   * Canonical description of the entity, in English.
   *
   * @generated from field: string description = 3;
   */
  description = "";

  constructor(data?: PartialMessage<WebDetection_WebEntity>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.vision.v1p1beta1.WebDetection.WebEntity";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entity_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "score", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WebDetection_WebEntity {
    return new WebDetection_WebEntity().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WebDetection_WebEntity {
    return new WebDetection_WebEntity().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WebDetection_WebEntity {
    return new WebDetection_WebEntity().fromJsonString(jsonString, options);
  }

  static equals(a: WebDetection_WebEntity | PlainMessage<WebDetection_WebEntity> | undefined, b: WebDetection_WebEntity | PlainMessage<WebDetection_WebEntity> | undefined): boolean {
    return proto3.util.equals(WebDetection_WebEntity, a, b);
  }
}

/**
 * Metadata for online images.
 *
 * @generated from message google.cloud.vision.v1p1beta1.WebDetection.WebImage
 */
export class WebDetection_WebImage extends Message<WebDetection_WebImage> {
  /**
   * The result image URL.
   *
   * @generated from field: string url = 1;
   */
  url = "";

  /**
   * (Deprecated) Overall relevancy score for the image.
   *
   * @generated from field: float score = 2;
   */
  score = 0;

  constructor(data?: PartialMessage<WebDetection_WebImage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.vision.v1p1beta1.WebDetection.WebImage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "score", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WebDetection_WebImage {
    return new WebDetection_WebImage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WebDetection_WebImage {
    return new WebDetection_WebImage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WebDetection_WebImage {
    return new WebDetection_WebImage().fromJsonString(jsonString, options);
  }

  static equals(a: WebDetection_WebImage | PlainMessage<WebDetection_WebImage> | undefined, b: WebDetection_WebImage | PlainMessage<WebDetection_WebImage> | undefined): boolean {
    return proto3.util.equals(WebDetection_WebImage, a, b);
  }
}

/**
 * Metadata for web pages.
 *
 * @generated from message google.cloud.vision.v1p1beta1.WebDetection.WebPage
 */
export class WebDetection_WebPage extends Message<WebDetection_WebPage> {
  /**
   * The result web page URL.
   *
   * @generated from field: string url = 1;
   */
  url = "";

  /**
   * (Deprecated) Overall relevancy score for the web page.
   *
   * @generated from field: float score = 2;
   */
  score = 0;

  /**
   * Title for the web page, may contain HTML markups.
   *
   * @generated from field: string page_title = 3;
   */
  pageTitle = "";

  /**
   * Fully matching images on the page.
   * Can include resized copies of the query image.
   *
   * @generated from field: repeated google.cloud.vision.v1p1beta1.WebDetection.WebImage full_matching_images = 4;
   */
  fullMatchingImages: WebDetection_WebImage[] = [];

  /**
   * Partial matching images on the page.
   * Those images are similar enough to share some key-point features. For
   * example an original image will likely have partial matching for its
   * crops.
   *
   * @generated from field: repeated google.cloud.vision.v1p1beta1.WebDetection.WebImage partial_matching_images = 5;
   */
  partialMatchingImages: WebDetection_WebImage[] = [];

  constructor(data?: PartialMessage<WebDetection_WebPage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.vision.v1p1beta1.WebDetection.WebPage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "score", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "page_title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "full_matching_images", kind: "message", T: WebDetection_WebImage, repeated: true },
    { no: 5, name: "partial_matching_images", kind: "message", T: WebDetection_WebImage, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WebDetection_WebPage {
    return new WebDetection_WebPage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WebDetection_WebPage {
    return new WebDetection_WebPage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WebDetection_WebPage {
    return new WebDetection_WebPage().fromJsonString(jsonString, options);
  }

  static equals(a: WebDetection_WebPage | PlainMessage<WebDetection_WebPage> | undefined, b: WebDetection_WebPage | PlainMessage<WebDetection_WebPage> | undefined): boolean {
    return proto3.util.equals(WebDetection_WebPage, a, b);
  }
}

/**
 * Label to provide extra metadata for the web detection.
 *
 * @generated from message google.cloud.vision.v1p1beta1.WebDetection.WebLabel
 */
export class WebDetection_WebLabel extends Message<WebDetection_WebLabel> {
  /**
   * Label for extra metadata.
   *
   * @generated from field: string label = 1;
   */
  label = "";

  /**
   * The BCP-47 language code for `label`, such as "en-US" or "sr-Latn".
   * For more information, see
   * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
   *
   * @generated from field: string language_code = 2;
   */
  languageCode = "";

  constructor(data?: PartialMessage<WebDetection_WebLabel>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.cloud.vision.v1p1beta1.WebDetection.WebLabel";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "language_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WebDetection_WebLabel {
    return new WebDetection_WebLabel().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WebDetection_WebLabel {
    return new WebDetection_WebLabel().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WebDetection_WebLabel {
    return new WebDetection_WebLabel().fromJsonString(jsonString, options);
  }

  static equals(a: WebDetection_WebLabel | PlainMessage<WebDetection_WebLabel> | undefined, b: WebDetection_WebLabel | PlainMessage<WebDetection_WebLabel> | undefined): boolean {
    return proto3.util.equals(WebDetection_WebLabel, a, b);
  }
}

