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
// @generated from file google/api/experimental/authorization_config.proto (package google.api, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Configuration of authorization.
 *
 * This section determines the authorization provider, if unspecified, then no
 * authorization check will be done.
 *
 * Example:
 *
 *     experimental:
 *       authorization:
 *         provider: firebaserules.googleapis.com
 *
 * @generated from message google.api.AuthorizationConfig
 */
export class AuthorizationConfig extends Message<AuthorizationConfig> {
  /**
   * The name of the authorization provider, such as
   * firebaserules.googleapis.com.
   *
   * @generated from field: string provider = 1;
   */
  provider = "";

  constructor(data?: PartialMessage<AuthorizationConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.AuthorizationConfig";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "provider", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthorizationConfig {
    return new AuthorizationConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthorizationConfig {
    return new AuthorizationConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthorizationConfig {
    return new AuthorizationConfig().fromJsonString(jsonString, options);
  }

  static equals(a: AuthorizationConfig | PlainMessage<AuthorizationConfig> | undefined, b: AuthorizationConfig | PlainMessage<AuthorizationConfig> | undefined): boolean {
    return proto3.util.equals(AuthorizationConfig, a, b);
  }
}

