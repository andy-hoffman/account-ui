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
// @generated from file google/api/documentation.proto (package google.api, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * `Documentation` provides the information for describing a service.
 *
 * Example:
 * <pre><code>documentation:
 *   summary: >
 *     The Google Calendar API gives access
 *     to most calendar features.
 *   pages:
 *   - name: Overview
 *     content: &#40;== include google/foo/overview.md ==&#41;
 *   - name: Tutorial
 *     content: &#40;== include google/foo/tutorial.md ==&#41;
 *     subpages;
 *     - name: Java
 *       content: &#40;== include google/foo/tutorial_java.md ==&#41;
 *   rules:
 *   - selector: google.calendar.Calendar.Get
 *     description: >
 *       ...
 *   - selector: google.calendar.Calendar.Put
 *     description: >
 *       ...
 * </code></pre>
 * Documentation is provided in markdown syntax. In addition to
 * standard markdown features, definition lists, tables and fenced
 * code blocks are supported. Section headers can be provided and are
 * interpreted relative to the section nesting of the context where
 * a documentation fragment is embedded.
 *
 * Documentation from the IDL is merged with documentation defined
 * via the config at normalization time, where documentation provided
 * by config rules overrides IDL provided.
 *
 * A number of constructs specific to the API platform are supported
 * in documentation text.
 *
 * In order to reference a proto element, the following
 * notation can be used:
 * <pre><code>&#91;fully.qualified.proto.name]&#91;]</code></pre>
 * To override the display text used for the link, this can be used:
 * <pre><code>&#91;display text]&#91;fully.qualified.proto.name]</code></pre>
 * Text can be excluded from doc using the following notation:
 * <pre><code>&#40;-- internal comment --&#41;</code></pre>
 * Comments can be made conditional using a visibility label. The below
 * text will be only rendered if the `BETA` label is available:
 * <pre><code>&#40;--BETA: comment for BETA users --&#41;</code></pre>
 * A few directives are available in documentation. Note that
 * directives must appear on a single line to be properly
 * identified. The `include` directive includes a markdown file from
 * an external source:
 * <pre><code>&#40;== include path/to/file ==&#41;</code></pre>
 * The `resource_for` directive marks a message to be the resource of
 * a collection in REST view. If it is not specified, tools attempt
 * to infer the resource from the operations in a collection:
 * <pre><code>&#40;== resource_for v1.shelves.books ==&#41;</code></pre>
 * The directive `suppress_warning` does not directly affect documentation
 * and is documented together with service config validation.
 *
 * @generated from message google.api.Documentation
 */
export class Documentation extends Message<Documentation> {
  /**
   * A short summary of what the service does. Can only be provided by
   * plain text.
   *
   * @generated from field: string summary = 1;
   */
  summary = "";

  /**
   * The top level pages for the documentation set.
   *
   * @generated from field: repeated google.api.Page pages = 5;
   */
  pages: Page[] = [];

  /**
   * A list of documentation rules that apply to individual API elements.
   *
   * **NOTE:** All service configuration rules follow "last one wins" order.
   *
   * @generated from field: repeated google.api.DocumentationRule rules = 3;
   */
  rules: DocumentationRule[] = [];

  /**
   * The URL to the root of documentation.
   *
   * @generated from field: string documentation_root_url = 4;
   */
  documentationRootUrl = "";

  /**
   * Declares a single overview page. For example:
   * <pre><code>documentation:
   *   summary: ...
   *   overview: &#40;== include overview.md ==&#41;
   * </code></pre>
   * This is a shortcut for the following declaration (using pages style):
   * <pre><code>documentation:
   *   summary: ...
   *   pages:
   *   - name: Overview
   *     content: &#40;== include overview.md ==&#41;
   * </code></pre>
   * Note: you cannot specify both `overview` field and `pages` field.
   *
   * @generated from field: string overview = 2;
   */
  overview = "";

  constructor(data?: PartialMessage<Documentation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.Documentation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "summary", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "pages", kind: "message", T: Page, repeated: true },
    { no: 3, name: "rules", kind: "message", T: DocumentationRule, repeated: true },
    { no: 4, name: "documentation_root_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "overview", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Documentation {
    return new Documentation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Documentation {
    return new Documentation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Documentation {
    return new Documentation().fromJsonString(jsonString, options);
  }

  static equals(a: Documentation | PlainMessage<Documentation> | undefined, b: Documentation | PlainMessage<Documentation> | undefined): boolean {
    return proto3.util.equals(Documentation, a, b);
  }
}

/**
 * A documentation rule provides information about individual API elements.
 *
 * @generated from message google.api.DocumentationRule
 */
export class DocumentationRule extends Message<DocumentationRule> {
  /**
   * The selector is a comma-separated list of patterns. Each pattern is a
   * qualified name of the element which may end in "*", indicating a wildcard.
   * Wildcards are only allowed at the end and for a whole component of the
   * qualified name, i.e. "foo.*" is ok, but not "foo.b*" or "foo.*.bar". To
   * specify a default for all applicable elements, the whole pattern "*"
   * is used.
   *
   * @generated from field: string selector = 1;
   */
  selector = "";

  /**
   * Description of the selected API(s).
   *
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * Deprecation description of the selected element(s). It can be provided if an
   * element is marked as `deprecated`.
   *
   * @generated from field: string deprecation_description = 3;
   */
  deprecationDescription = "";

  constructor(data?: PartialMessage<DocumentationRule>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.DocumentationRule";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "selector", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "deprecation_description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DocumentationRule {
    return new DocumentationRule().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DocumentationRule {
    return new DocumentationRule().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DocumentationRule {
    return new DocumentationRule().fromJsonString(jsonString, options);
  }

  static equals(a: DocumentationRule | PlainMessage<DocumentationRule> | undefined, b: DocumentationRule | PlainMessage<DocumentationRule> | undefined): boolean {
    return proto3.util.equals(DocumentationRule, a, b);
  }
}

/**
 * Represents a documentation page. A page can contain subpages to represent
 * nested documentation set structure.
 *
 * @generated from message google.api.Page
 */
export class Page extends Message<Page> {
  /**
   * The name of the page. It will be used as an identity of the page to
   * generate URI of the page, text of the link to this page in navigation,
   * etc. The full page name (start from the root page name to this page
   * concatenated with `.`) can be used as reference to the page in your
   * documentation. For example:
   * <pre><code>pages:
   * - name: Tutorial
   *   content: &#40;== include tutorial.md ==&#41;
   *   subpages:
   *   - name: Java
   *     content: &#40;== include tutorial_java.md ==&#41;
   * </code></pre>
   * You can reference `Java` page using Markdown reference link syntax:
   * `[Java][Tutorial.Java]`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The Markdown content of the page. You can use <code>&#40;== include {path} ==&#41;</code>
   * to include content from a Markdown file.
   *
   * @generated from field: string content = 2;
   */
  content = "";

  /**
   * Subpages of this page. The order of subpages specified here will be
   * honored in the generated docset.
   *
   * @generated from field: repeated google.api.Page subpages = 3;
   */
  subpages: Page[] = [];

  constructor(data?: PartialMessage<Page>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.Page";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "subpages", kind: "message", T: Page, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Page {
    return new Page().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Page {
    return new Page().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Page {
    return new Page().fromJsonString(jsonString, options);
  }

  static equals(a: Page | PlainMessage<Page> | undefined, b: Page | PlainMessage<Page> | undefined): boolean {
    return proto3.util.equals(Page, a, b);
  }
}

