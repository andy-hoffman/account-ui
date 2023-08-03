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
// @generated from file google/appengine/v1/application.proto (package google.appengine.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";

/**
 * An Application resource contains the top-level configuration of an App
 * Engine application.
 *
 * @generated from message google.appengine.v1.Application
 */
export class Application extends Message<Application> {
  /**
   * Full path to the Application resource in the API.
   * Example: `apps/myapp`.
   *
   * @OutputOnly
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * Identifier of the Application resource. This identifier is equivalent
   * to the project ID of the Google Cloud Platform project where you want to
   * deploy your application.
   * Example: `myapp`.
   *
   * @generated from field: string id = 2;
   */
  id = "";

  /**
   * HTTP path dispatch rules for requests to the application that do not
   * explicitly target a service or version. Rules are order-dependent.
   *
   * @OutputOnly
   *
   * @generated from field: repeated google.appengine.v1.UrlDispatchRule dispatch_rules = 3;
   */
  dispatchRules: UrlDispatchRule[] = [];

  /**
   * Google Apps authentication domain that controls which users can access
   * this application.
   *
   * Defaults to open access for any Google Account.
   *
   * @generated from field: string auth_domain = 6;
   */
  authDomain = "";

  /**
   * Location from which this application will be run. Application instances
   * will run out of data centers in the chosen location, which is also where
   * all of the application's end user content is stored.
   *
   * Defaults to `us-central`.
   *
   * Options are:
   *
   * `us-central` - Central US
   *
   * `europe-west` - Western Europe
   *
   * `us-east1` - Eastern US
   *
   * @generated from field: string location_id = 7;
   */
  locationId = "";

  /**
   * Google Cloud Storage bucket that can be used for storing files
   * associated with this application. This bucket is associated with the
   * application and can be used by the gcloud deployment commands.
   *
   * @OutputOnly
   *
   * @generated from field: string code_bucket = 8;
   */
  codeBucket = "";

  /**
   * Cookie expiration policy for this application.
   *
   * @OutputOnly
   *
   * @generated from field: google.protobuf.Duration default_cookie_expiration = 9;
   */
  defaultCookieExpiration?: Duration;

  /**
   * Hostname used to reach this application, as resolved by App Engine.
   *
   * @OutputOnly
   *
   * @generated from field: string default_hostname = 11;
   */
  defaultHostname = "";

  /**
   * Google Cloud Storage bucket that can be used by this application to store
   * content.
   *
   * @OutputOnly
   *
   * @generated from field: string default_bucket = 12;
   */
  defaultBucket = "";

  constructor(data?: PartialMessage<Application>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.Application";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "dispatch_rules", kind: "message", T: UrlDispatchRule, repeated: true },
    { no: 6, name: "auth_domain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "location_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "code_bucket", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "default_cookie_expiration", kind: "message", T: Duration },
    { no: 11, name: "default_hostname", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "default_bucket", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Application {
    return new Application().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Application {
    return new Application().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Application {
    return new Application().fromJsonString(jsonString, options);
  }

  static equals(a: Application | PlainMessage<Application> | undefined, b: Application | PlainMessage<Application> | undefined): boolean {
    return proto3.util.equals(Application, a, b);
  }
}

/**
 * Rules to match an HTTP request and dispatch that request to a service.
 *
 * @generated from message google.appengine.v1.UrlDispatchRule
 */
export class UrlDispatchRule extends Message<UrlDispatchRule> {
  /**
   * Domain name to match against. The wildcard "`*`" is supported if
   * specified before a period: "`*.`".
   *
   * Defaults to matching all domains: "`*`".
   *
   * @generated from field: string domain = 1;
   */
  domain = "";

  /**
   * Pathname within the host. Must start with a "`/`". A
   * single "`*`" can be included at the end of the path. The sum
   * of the lengths of the domain and path may not exceed 100
   * characters.
   *
   * @generated from field: string path = 2;
   */
  path = "";

  /**
   * Resource ID of a service in this application that should
   * serve the matched request. The service must already
   * exist. Example: `default`.
   *
   * @generated from field: string service = 3;
   */
  service = "";

  constructor(data?: PartialMessage<UrlDispatchRule>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.appengine.v1.UrlDispatchRule";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "domain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UrlDispatchRule {
    return new UrlDispatchRule().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UrlDispatchRule {
    return new UrlDispatchRule().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UrlDispatchRule {
    return new UrlDispatchRule().fromJsonString(jsonString, options);
  }

  static equals(a: UrlDispatchRule | PlainMessage<UrlDispatchRule> | undefined, b: UrlDispatchRule | PlainMessage<UrlDispatchRule> | undefined): boolean {
    return proto3.util.equals(UrlDispatchRule, a, b);
  }
}

