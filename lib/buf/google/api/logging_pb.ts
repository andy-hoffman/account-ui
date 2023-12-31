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
// @generated from file google/api/logging.proto (package google.api, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Logging configuration of the service.
 *
 * The following example shows how to configure logs to be sent to the
 * producer and consumer projects. In the example, the `activity_history`
 * log is sent to both the producer and consumer projects, whereas the
 * `purchase_history` log is only sent to the producer project.
 *
 *     monitored_resources:
 *     - type: library.googleapis.com/branch
 *       labels:
 *       - key: /city
 *         description: The city where the library branch is located in.
 *       - key: /name
 *         description: The name of the branch.
 *     logs:
 *     - name: activity_history
 *       labels:
 *       - key: /customer_id
 *     - name: purchase_history
 *     logging:
 *       producer_destinations:
 *       - monitored_resource: library.googleapis.com/branch
 *         logs:
 *         - activity_history
 *         - purchase_history
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/branch
 *         logs:
 *         - activity_history
 *
 * @generated from message google.api.Logging
 */
export class Logging extends Message<Logging> {
  /**
   * Logging configurations for sending logs to the producer project.
   * There can be multiple producer destinations, each one must have a
   * different monitored resource type. A log can be used in at most
   * one producer destination.
   *
   * @generated from field: repeated google.api.Logging.LoggingDestination producer_destinations = 1;
   */
  producerDestinations: Logging_LoggingDestination[] = [];

  /**
   * Logging configurations for sending logs to the consumer project.
   * There can be multiple consumer destinations, each one must have a
   * different monitored resource type. A log can be used in at most
   * one consumer destination.
   *
   * @generated from field: repeated google.api.Logging.LoggingDestination consumer_destinations = 2;
   */
  consumerDestinations: Logging_LoggingDestination[] = [];

  constructor(data?: PartialMessage<Logging>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.Logging";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "producer_destinations", kind: "message", T: Logging_LoggingDestination, repeated: true },
    { no: 2, name: "consumer_destinations", kind: "message", T: Logging_LoggingDestination, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Logging {
    return new Logging().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Logging {
    return new Logging().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Logging {
    return new Logging().fromJsonString(jsonString, options);
  }

  static equals(a: Logging | PlainMessage<Logging> | undefined, b: Logging | PlainMessage<Logging> | undefined): boolean {
    return proto3.util.equals(Logging, a, b);
  }
}

/**
 * Configuration of a specific logging destination (the producer project
 * or the consumer project).
 *
 * @generated from message google.api.Logging.LoggingDestination
 */
export class Logging_LoggingDestination extends Message<Logging_LoggingDestination> {
  /**
   * The monitored resource type. The type must be defined in the
   * [Service.monitored_resources][google.api.Service.monitored_resources] section.
   *
   * @generated from field: string monitored_resource = 3;
   */
  monitoredResource = "";

  /**
   * Names of the logs to be sent to this destination. Each name must
   * be defined in the [Service.logs][google.api.Service.logs] section. If the log name is
   * not a domain scoped name, it will be automatically prefixed with
   * the service name followed by "/".
   *
   * @generated from field: repeated string logs = 1;
   */
  logs: string[] = [];

  constructor(data?: PartialMessage<Logging_LoggingDestination>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.Logging.LoggingDestination";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 3, name: "monitored_resource", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 1, name: "logs", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Logging_LoggingDestination {
    return new Logging_LoggingDestination().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Logging_LoggingDestination {
    return new Logging_LoggingDestination().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Logging_LoggingDestination {
    return new Logging_LoggingDestination().fromJsonString(jsonString, options);
  }

  static equals(a: Logging_LoggingDestination | PlainMessage<Logging_LoggingDestination> | undefined, b: Logging_LoggingDestination | PlainMessage<Logging_LoggingDestination> | undefined): boolean {
    return proto3.util.equals(Logging_LoggingDestination, a, b);
  }
}

