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
// @generated from file google/api/auth.proto (package google.api, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * `Authentication` defines the authentication configuration for an API.
 *
 * Example for an API targeted for external use:
 *
 *     name: calendar.googleapis.com
 *     authentication:
 *       providers:
 *       - id: google_calendar_auth
 *         jwks_uri: https://www.googleapis.com/oauth2/v1/certs
 *         issuer: https://securetoken.google.com
 *       rules:
 *       - selector: "*"
 *         requirements:
 *           provider_id: google_calendar_auth
 *
 * @generated from message google.api.Authentication
 */
export class Authentication extends Message<Authentication> {
  /**
   * A list of authentication rules that apply to individual API methods.
   *
   * **NOTE:** All service configuration rules follow "last one wins" order.
   *
   * @generated from field: repeated google.api.AuthenticationRule rules = 3;
   */
  rules: AuthenticationRule[] = [];

  /**
   * Defines a set of authentication providers that a service supports.
   *
   * @generated from field: repeated google.api.AuthProvider providers = 4;
   */
  providers: AuthProvider[] = [];

  constructor(data?: PartialMessage<Authentication>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.Authentication";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 3, name: "rules", kind: "message", T: AuthenticationRule, repeated: true },
    { no: 4, name: "providers", kind: "message", T: AuthProvider, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Authentication {
    return new Authentication().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Authentication {
    return new Authentication().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Authentication {
    return new Authentication().fromJsonString(jsonString, options);
  }

  static equals(a: Authentication | PlainMessage<Authentication> | undefined, b: Authentication | PlainMessage<Authentication> | undefined): boolean {
    return proto3.util.equals(Authentication, a, b);
  }
}

/**
 * Authentication rules for the service.
 *
 * By default, if a method has any authentication requirements, every request
 * must include a valid credential matching one of the requirements.
 * It's an error to include more than one kind of credential in a single
 * request.
 *
 * If a method doesn't have any auth requirements, request credentials will be
 * ignored.
 *
 * @generated from message google.api.AuthenticationRule
 */
export class AuthenticationRule extends Message<AuthenticationRule> {
  /**
   * Selects the methods to which this rule applies.
   *
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
   *
   * @generated from field: string selector = 1;
   */
  selector = "";

  /**
   * The requirements for OAuth credentials.
   *
   * @generated from field: google.api.OAuthRequirements oauth = 2;
   */
  oauth?: OAuthRequirements;

  /**
   * Whether to allow requests without a credential. The credential can be
   * an OAuth token, Google cookies (first-party auth) or EndUserCreds.
   *
   * For requests without credentials, if the service control environment is
   * specified, each incoming request **must** be associated with a service
   * consumer. This can be done by passing an API key that belongs to a consumer
   * project.
   *
   * @generated from field: bool allow_without_credential = 5;
   */
  allowWithoutCredential = false;

  /**
   * Requirements for additional authentication providers.
   *
   * @generated from field: repeated google.api.AuthRequirement requirements = 7;
   */
  requirements: AuthRequirement[] = [];

  constructor(data?: PartialMessage<AuthenticationRule>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.AuthenticationRule";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "selector", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "oauth", kind: "message", T: OAuthRequirements },
    { no: 5, name: "allow_without_credential", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "requirements", kind: "message", T: AuthRequirement, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthenticationRule {
    return new AuthenticationRule().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthenticationRule {
    return new AuthenticationRule().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthenticationRule {
    return new AuthenticationRule().fromJsonString(jsonString, options);
  }

  static equals(a: AuthenticationRule | PlainMessage<AuthenticationRule> | undefined, b: AuthenticationRule | PlainMessage<AuthenticationRule> | undefined): boolean {
    return proto3.util.equals(AuthenticationRule, a, b);
  }
}

/**
 * Configuration for an anthentication provider, including support for
 * [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
 *
 * @generated from message google.api.AuthProvider
 */
export class AuthProvider extends Message<AuthProvider> {
  /**
   * The unique identifier of the auth provider. It will be referred to by
   * `AuthRequirement.provider_id`.
   *
   * Example: "bookstore_auth".
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * Identifies the principal that issued the JWT. See
   * https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1
   * Usually a URL or an email address.
   *
   * Example: https://securetoken.google.com
   * Example: 1234567-compute@developer.gserviceaccount.com
   *
   * @generated from field: string issuer = 2;
   */
  issuer = "";

  /**
   * URL of the provider's public key set to validate signature of the JWT. See
   * [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   * Optional if the key set document:
   *  - can be retrieved from
   *    [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html
   *    of the issuer.
   *  - can be inferred from the email domain of the issuer (e.g. a Google service account).
   *
   * Example: https://www.googleapis.com/oauth2/v1/certs
   *
   * @generated from field: string jwks_uri = 3;
   */
  jwksUri = "";

  /**
   * The list of JWT
   * [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
   * that are allowed to access. A JWT containing any of these audiences will
   * be accepted. When this setting is absent, only JWTs with audience
   * "https://[Service_name][google.api.Service.name]/[API_name][google.protobuf.Api.name]"
   * will be accepted. For example, if no audiences are in the setting,
   * LibraryService API will only accept JWTs with the following audience
   * "https://library-example.googleapis.com/google.example.library.v1.LibraryService".
   *
   * Example:
   *
   *     audiences: bookstore_android.apps.googleusercontent.com,
   *                bookstore_web.apps.googleusercontent.com
   *
   * @generated from field: string audiences = 4;
   */
  audiences = "";

  /**
   * Redirect URL if JWT token is required but no present or is expired.
   * Implement authorizationUrl of securityDefinitions in OpenAPI spec.
   *
   * @generated from field: string authorization_url = 5;
   */
  authorizationUrl = "";

  constructor(data?: PartialMessage<AuthProvider>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.AuthProvider";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "issuer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "jwks_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "audiences", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "authorization_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthProvider {
    return new AuthProvider().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthProvider {
    return new AuthProvider().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthProvider {
    return new AuthProvider().fromJsonString(jsonString, options);
  }

  static equals(a: AuthProvider | PlainMessage<AuthProvider> | undefined, b: AuthProvider | PlainMessage<AuthProvider> | undefined): boolean {
    return proto3.util.equals(AuthProvider, a, b);
  }
}

/**
 * OAuth scopes are a way to define data and permissions on data. For example,
 * there are scopes defined for "Read-only access to Google Calendar" and
 * "Access to Cloud Platform". Users can consent to a scope for an application,
 * giving it permission to access that data on their behalf.
 *
 * OAuth scope specifications should be fairly coarse grained; a user will need
 * to see and understand the text description of what your scope means.
 *
 * In most cases: use one or at most two OAuth scopes for an entire family of
 * products. If your product has multiple APIs, you should probably be sharing
 * the OAuth scope across all of those APIs.
 *
 * When you need finer grained OAuth consent screens: talk with your product
 * management about how developers will use them in practice.
 *
 * Please note that even though each of the canonical scopes is enough for a
 * request to be accepted and passed to the backend, a request can still fail
 * due to the backend requiring additional scopes or permissions.
 *
 * @generated from message google.api.OAuthRequirements
 */
export class OAuthRequirements extends Message<OAuthRequirements> {
  /**
   * The list of publicly documented OAuth scopes that are allowed access. An
   * OAuth token containing any of these scopes will be accepted.
   *
   * Example:
   *
   *      canonical_scopes: https://www.googleapis.com/auth/calendar,
   *                        https://www.googleapis.com/auth/calendar.read
   *
   * @generated from field: string canonical_scopes = 1;
   */
  canonicalScopes = "";

  constructor(data?: PartialMessage<OAuthRequirements>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.OAuthRequirements";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "canonical_scopes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OAuthRequirements {
    return new OAuthRequirements().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OAuthRequirements {
    return new OAuthRequirements().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OAuthRequirements {
    return new OAuthRequirements().fromJsonString(jsonString, options);
  }

  static equals(a: OAuthRequirements | PlainMessage<OAuthRequirements> | undefined, b: OAuthRequirements | PlainMessage<OAuthRequirements> | undefined): boolean {
    return proto3.util.equals(OAuthRequirements, a, b);
  }
}

/**
 * User-defined authentication requirements, including support for
 * [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
 *
 * @generated from message google.api.AuthRequirement
 */
export class AuthRequirement extends Message<AuthRequirement> {
  /**
   * [id][google.api.AuthProvider.id] from authentication provider.
   *
   * Example:
   *
   *     provider_id: bookstore_auth
   *
   * @generated from field: string provider_id = 1;
   */
  providerId = "";

  /**
   * NOTE: This will be deprecated soon, once AuthProvider.audiences is
   * implemented and accepted in all the runtime components.
   *
   * The list of JWT
   * [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
   * that are allowed to access. A JWT containing any of these audiences will
   * be accepted. When this setting is absent, only JWTs with audience
   * "https://[Service_name][google.api.Service.name]/[API_name][google.protobuf.Api.name]"
   * will be accepted. For example, if no audiences are in the setting,
   * LibraryService API will only accept JWTs with the following audience
   * "https://library-example.googleapis.com/google.example.library.v1.LibraryService".
   *
   * Example:
   *
   *     audiences: bookstore_android.apps.googleusercontent.com,
   *                bookstore_web.apps.googleusercontent.com
   *
   * @generated from field: string audiences = 2;
   */
  audiences = "";

  constructor(data?: PartialMessage<AuthRequirement>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.AuthRequirement";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "provider_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "audiences", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthRequirement {
    return new AuthRequirement().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthRequirement {
    return new AuthRequirement().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthRequirement {
    return new AuthRequirement().fromJsonString(jsonString, options);
  }

  static equals(a: AuthRequirement | PlainMessage<AuthRequirement> | undefined, b: AuthRequirement | PlainMessage<AuthRequirement> | undefined): boolean {
    return proto3.util.equals(AuthRequirement, a, b);
  }
}

