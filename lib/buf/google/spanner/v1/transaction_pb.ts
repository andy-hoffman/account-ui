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
// @generated from file google/spanner/v1/transaction.proto (package google.spanner.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * # Transactions
 *
 *
 * Each session can have at most one active transaction at a time. After the
 * active transaction is completed, the session can immediately be
 * re-used for the next transaction. It is not necessary to create a
 * new session for each transaction.
 *
 * # Transaction Modes
 *
 * Cloud Spanner supports two transaction modes:
 *
 *   1. Locking read-write. This type of transaction is the only way
 *      to write data into Cloud Spanner. These transactions rely on
 *      pessimistic locking and, if necessary, two-phase commit.
 *      Locking read-write transactions may abort, requiring the
 *      application to retry.
 *
 *   2. Snapshot read-only. This transaction type provides guaranteed
 *      consistency across several reads, but does not allow
 *      writes. Snapshot read-only transactions can be configured to
 *      read at timestamps in the past. Snapshot read-only
 *      transactions do not need to be committed.
 *
 * For transactions that only read, snapshot read-only transactions
 * provide simpler semantics and are almost always faster. In
 * particular, read-only transactions do not take locks, so they do
 * not conflict with read-write transactions. As a consequence of not
 * taking locks, they also do not abort, so retry loops are not needed.
 *
 * Transactions may only read/write data in a single database. They
 * may, however, read/write data in different tables within that
 * database.
 *
 * ## Locking Read-Write Transactions
 *
 * Locking transactions may be used to atomically read-modify-write
 * data anywhere in a database. This type of transaction is externally
 * consistent.
 *
 * Clients should attempt to minimize the amount of time a transaction
 * is active. Faster transactions commit with higher probability
 * and cause less contention. Cloud Spanner attempts to keep read locks
 * active as long as the transaction continues to do reads, and the
 * transaction has not been terminated by
 * [Commit][google.spanner.v1.Spanner.Commit] or
 * [Rollback][google.spanner.v1.Spanner.Rollback].  Long periods of
 * inactivity at the client may cause Cloud Spanner to release a
 * transaction's locks and abort it.
 *
 * Reads performed within a transaction acquire locks on the data
 * being read. Writes can only be done at commit time, after all reads
 * have been completed.
 * Conceptually, a read-write transaction consists of zero or more
 * reads or SQL queries followed by
 * [Commit][google.spanner.v1.Spanner.Commit]. At any time before
 * [Commit][google.spanner.v1.Spanner.Commit], the client can send a
 * [Rollback][google.spanner.v1.Spanner.Rollback] request to abort the
 * transaction.
 *
 * ### Semantics
 *
 * Cloud Spanner can commit the transaction if all read locks it acquired
 * are still valid at commit time, and it is able to acquire write
 * locks for all writes. Cloud Spanner can abort the transaction for any
 * reason. If a commit attempt returns `ABORTED`, Cloud Spanner guarantees
 * that the transaction has not modified any user data in Cloud Spanner.
 *
 * Unless the transaction commits, Cloud Spanner makes no guarantees about
 * how long the transaction's locks were held for. It is an error to
 * use Cloud Spanner locks for any sort of mutual exclusion other than
 * between Cloud Spanner transactions themselves.
 *
 * ### Retrying Aborted Transactions
 *
 * When a transaction aborts, the application can choose to retry the
 * whole transaction again. To maximize the chances of successfully
 * committing the retry, the client should execute the retry in the
 * same session as the original attempt. The original session's lock
 * priority increases with each consecutive abort, meaning that each
 * attempt has a slightly better chance of success than the previous.
 *
 * Under some circumstances (e.g., many transactions attempting to
 * modify the same row(s)), a transaction can abort many times in a
 * short period before successfully committing. Thus, it is not a good
 * idea to cap the number of retries a transaction can attempt;
 * instead, it is better to limit the total amount of wall time spent
 * retrying.
 *
 * ### Idle Transactions
 *
 * A transaction is considered idle if it has no outstanding reads or
 * SQL queries and has not started a read or SQL query within the last 10
 * seconds. Idle transactions can be aborted by Cloud Spanner so that they
 * don't hold on to locks indefinitely. In that case, the commit will
 * fail with error `ABORTED`.
 *
 * If this behavior is undesirable, periodically executing a simple
 * SQL query in the transaction (e.g., `SELECT 1`) prevents the
 * transaction from becoming idle.
 *
 * ## Snapshot Read-Only Transactions
 *
 * Snapshot read-only transactions provides a simpler method than
 * locking read-write transactions for doing several consistent
 * reads. However, this type of transaction does not support writes.
 *
 * Snapshot transactions do not take locks. Instead, they work by
 * choosing a Cloud Spanner timestamp, then executing all reads at that
 * timestamp. Since they do not acquire locks, they do not block
 * concurrent read-write transactions.
 *
 * Unlike locking read-write transactions, snapshot read-only
 * transactions never abort. They can fail if the chosen read
 * timestamp is garbage collected; however, the default garbage
 * collection policy is generous enough that most applications do not
 * need to worry about this in practice.
 *
 * Snapshot read-only transactions do not need to call
 * [Commit][google.spanner.v1.Spanner.Commit] or
 * [Rollback][google.spanner.v1.Spanner.Rollback] (and in fact are not
 * permitted to do so).
 *
 * To execute a snapshot transaction, the client specifies a timestamp
 * bound, which tells Cloud Spanner how to choose a read timestamp.
 *
 * The types of timestamp bound are:
 *
 *   - Strong (the default).
 *   - Bounded staleness.
 *   - Exact staleness.
 *
 * If the Cloud Spanner database to be read is geographically distributed,
 * stale read-only transactions can execute more quickly than strong
 * or read-write transaction, because they are able to execute far
 * from the leader replica.
 *
 * Each type of timestamp bound is discussed in detail below.
 *
 * ### Strong
 *
 * Strong reads are guaranteed to see the effects of all transactions
 * that have committed before the start of the read. Furthermore, all
 * rows yielded by a single read are consistent with each other -- if
 * any part of the read observes a transaction, all parts of the read
 * see the transaction.
 *
 * Strong reads are not repeatable: two consecutive strong read-only
 * transactions might return inconsistent results if there are
 * concurrent writes. If consistency across reads is required, the
 * reads should be executed within a transaction or at an exact read
 * timestamp.
 *
 * See [TransactionOptions.ReadOnly.strong][google.spanner.v1.TransactionOptions.ReadOnly.strong].
 *
 * ### Exact Staleness
 *
 * These timestamp bounds execute reads at a user-specified
 * timestamp. Reads at a timestamp are guaranteed to see a consistent
 * prefix of the global transaction history: they observe
 * modifications done by all transactions with a commit timestamp <=
 * the read timestamp, and observe none of the modifications done by
 * transactions with a larger commit timestamp. They will block until
 * all conflicting transactions that may be assigned commit timestamps
 * <= the read timestamp have finished.
 *
 * The timestamp can either be expressed as an absolute Cloud Spanner commit
 * timestamp or a staleness relative to the current time.
 *
 * These modes do not require a "negotiation phase" to pick a
 * timestamp. As a result, they execute slightly faster than the
 * equivalent boundedly stale concurrency modes. On the other hand,
 * boundedly stale reads usually return fresher results.
 *
 * See [TransactionOptions.ReadOnly.read_timestamp][google.spanner.v1.TransactionOptions.ReadOnly.read_timestamp] and
 * [TransactionOptions.ReadOnly.exact_staleness][google.spanner.v1.TransactionOptions.ReadOnly.exact_staleness].
 *
 * ### Bounded Staleness
 *
 * Bounded staleness modes allow Cloud Spanner to pick the read timestamp,
 * subject to a user-provided staleness bound. Cloud Spanner chooses the
 * newest timestamp within the staleness bound that allows execution
 * of the reads at the closest available replica without blocking.
 *
 * All rows yielded are consistent with each other -- if any part of
 * the read observes a transaction, all parts of the read see the
 * transaction. Boundedly stale reads are not repeatable: two stale
 * reads, even if they use the same staleness bound, can execute at
 * different timestamps and thus return inconsistent results.
 *
 * Boundedly stale reads execute in two phases: the first phase
 * negotiates a timestamp among all replicas needed to serve the
 * read. In the second phase, reads are executed at the negotiated
 * timestamp.
 *
 * As a result of the two phase execution, bounded staleness reads are
 * usually a little slower than comparable exact staleness
 * reads. However, they are typically able to return fresher
 * results, and are more likely to execute at the closest replica.
 *
 * Because the timestamp negotiation requires up-front knowledge of
 * which rows will be read, it can only be used with single-use
 * read-only transactions.
 *
 * See [TransactionOptions.ReadOnly.max_staleness][google.spanner.v1.TransactionOptions.ReadOnly.max_staleness] and
 * [TransactionOptions.ReadOnly.min_read_timestamp][google.spanner.v1.TransactionOptions.ReadOnly.min_read_timestamp].
 *
 * ### Old Read Timestamps and Garbage Collection
 *
 * Cloud Spanner continuously garbage collects deleted and overwritten data
 * in the background to reclaim storage space. This process is known
 * as "version GC". By default, version GC reclaims versions after they
 * are one hour old. Because of this, Cloud Spanner cannot perform reads
 * at read timestamps more than one hour in the past. This
 * restriction also applies to in-progress reads and/or SQL queries whose
 * timestamp become too old while executing. Reads and SQL queries with
 * too-old read timestamps fail with the error `FAILED_PRECONDITION`.
 *
 * @generated from message google.spanner.v1.TransactionOptions
 */
export class TransactionOptions extends Message<TransactionOptions> {
  /**
   * Required. The type of transaction.
   *
   * @generated from oneof google.spanner.v1.TransactionOptions.mode
   */
  mode: {
    /**
     * Transaction may write.
     *
     * Authorization to begin a read-write transaction requires
     * `spanner.databases.beginOrRollbackReadWriteTransaction` permission
     * on the `session` resource.
     *
     * @generated from field: google.spanner.v1.TransactionOptions.ReadWrite read_write = 1;
     */
    value: TransactionOptions_ReadWrite;
    case: "readWrite";
  } | {
    /**
     * Transaction will not write.
     *
     * Authorization to begin a read-only transaction requires
     * `spanner.databases.beginReadOnlyTransaction` permission
     * on the `session` resource.
     *
     * @generated from field: google.spanner.v1.TransactionOptions.ReadOnly read_only = 2;
     */
    value: TransactionOptions_ReadOnly;
    case: "readOnly";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<TransactionOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.spanner.v1.TransactionOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "read_write", kind: "message", T: TransactionOptions_ReadWrite, oneof: "mode" },
    { no: 2, name: "read_only", kind: "message", T: TransactionOptions_ReadOnly, oneof: "mode" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionOptions {
    return new TransactionOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionOptions {
    return new TransactionOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionOptions {
    return new TransactionOptions().fromJsonString(jsonString, options);
  }

  static equals(a: TransactionOptions | PlainMessage<TransactionOptions> | undefined, b: TransactionOptions | PlainMessage<TransactionOptions> | undefined): boolean {
    return proto3.util.equals(TransactionOptions, a, b);
  }
}

/**
 * Message type to initiate a read-write transaction. Currently this
 * transaction type has no options.
 *
 * @generated from message google.spanner.v1.TransactionOptions.ReadWrite
 */
export class TransactionOptions_ReadWrite extends Message<TransactionOptions_ReadWrite> {
  constructor(data?: PartialMessage<TransactionOptions_ReadWrite>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.spanner.v1.TransactionOptions.ReadWrite";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionOptions_ReadWrite {
    return new TransactionOptions_ReadWrite().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionOptions_ReadWrite {
    return new TransactionOptions_ReadWrite().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionOptions_ReadWrite {
    return new TransactionOptions_ReadWrite().fromJsonString(jsonString, options);
  }

  static equals(a: TransactionOptions_ReadWrite | PlainMessage<TransactionOptions_ReadWrite> | undefined, b: TransactionOptions_ReadWrite | PlainMessage<TransactionOptions_ReadWrite> | undefined): boolean {
    return proto3.util.equals(TransactionOptions_ReadWrite, a, b);
  }
}

/**
 * Message type to initiate a read-only transaction.
 *
 * @generated from message google.spanner.v1.TransactionOptions.ReadOnly
 */
export class TransactionOptions_ReadOnly extends Message<TransactionOptions_ReadOnly> {
  /**
   * How to choose the timestamp for the read-only transaction.
   *
   * @generated from oneof google.spanner.v1.TransactionOptions.ReadOnly.timestamp_bound
   */
  timestampBound: {
    /**
     * Read at a timestamp where all previously committed transactions
     * are visible.
     *
     * @generated from field: bool strong = 1;
     */
    value: boolean;
    case: "strong";
  } | {
    /**
     * Executes all reads at a timestamp >= `min_read_timestamp`.
     *
     * This is useful for requesting fresher data than some previous
     * read, or data that is fresh enough to observe the effects of some
     * previously committed transaction whose timestamp is known.
     *
     * Note that this option can only be used in single-use transactions.
     *
     * A timestamp in RFC3339 UTC \"Zulu\" format, accurate to nanoseconds.
     * Example: `"2014-10-02T15:01:23.045123456Z"`.
     *
     * @generated from field: google.protobuf.Timestamp min_read_timestamp = 2;
     */
    value: Timestamp;
    case: "minReadTimestamp";
  } | {
    /**
     * Read data at a timestamp >= `NOW - max_staleness`
     * seconds. Guarantees that all writes that have committed more
     * than the specified number of seconds ago are visible. Because
     * Cloud Spanner chooses the exact timestamp, this mode works even if
     * the client's local clock is substantially skewed from Cloud Spanner
     * commit timestamps.
     *
     * Useful for reading the freshest data available at a nearby
     * replica, while bounding the possible staleness if the local
     * replica has fallen behind.
     *
     * Note that this option can only be used in single-use
     * transactions.
     *
     * @generated from field: google.protobuf.Duration max_staleness = 3;
     */
    value: Duration;
    case: "maxStaleness";
  } | {
    /**
     * Executes all reads at the given timestamp. Unlike other modes,
     * reads at a specific timestamp are repeatable; the same read at
     * the same timestamp always returns the same data. If the
     * timestamp is in the future, the read will block until the
     * specified timestamp, modulo the read's deadline.
     *
     * Useful for large scale consistent reads such as mapreduces, or
     * for coordinating many reads against a consistent snapshot of the
     * data.
     *
     * A timestamp in RFC3339 UTC \"Zulu\" format, accurate to nanoseconds.
     * Example: `"2014-10-02T15:01:23.045123456Z"`.
     *
     * @generated from field: google.protobuf.Timestamp read_timestamp = 4;
     */
    value: Timestamp;
    case: "readTimestamp";
  } | {
    /**
     * Executes all reads at a timestamp that is `exact_staleness`
     * old. The timestamp is chosen soon after the read is started.
     *
     * Guarantees that all writes that have committed more than the
     * specified number of seconds ago are visible. Because Cloud Spanner
     * chooses the exact timestamp, this mode works even if the client's
     * local clock is substantially skewed from Cloud Spanner commit
     * timestamps.
     *
     * Useful for reading at nearby replicas without the distributed
     * timestamp negotiation overhead of `max_staleness`.
     *
     * @generated from field: google.protobuf.Duration exact_staleness = 5;
     */
    value: Duration;
    case: "exactStaleness";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * If true, the Cloud Spanner-selected read timestamp is included in
   * the [Transaction][google.spanner.v1.Transaction] message that describes the transaction.
   *
   * @generated from field: bool return_read_timestamp = 6;
   */
  returnReadTimestamp = false;

  constructor(data?: PartialMessage<TransactionOptions_ReadOnly>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.spanner.v1.TransactionOptions.ReadOnly";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "strong", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "timestamp_bound" },
    { no: 2, name: "min_read_timestamp", kind: "message", T: Timestamp, oneof: "timestamp_bound" },
    { no: 3, name: "max_staleness", kind: "message", T: Duration, oneof: "timestamp_bound" },
    { no: 4, name: "read_timestamp", kind: "message", T: Timestamp, oneof: "timestamp_bound" },
    { no: 5, name: "exact_staleness", kind: "message", T: Duration, oneof: "timestamp_bound" },
    { no: 6, name: "return_read_timestamp", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionOptions_ReadOnly {
    return new TransactionOptions_ReadOnly().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionOptions_ReadOnly {
    return new TransactionOptions_ReadOnly().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionOptions_ReadOnly {
    return new TransactionOptions_ReadOnly().fromJsonString(jsonString, options);
  }

  static equals(a: TransactionOptions_ReadOnly | PlainMessage<TransactionOptions_ReadOnly> | undefined, b: TransactionOptions_ReadOnly | PlainMessage<TransactionOptions_ReadOnly> | undefined): boolean {
    return proto3.util.equals(TransactionOptions_ReadOnly, a, b);
  }
}

/**
 * A transaction.
 *
 * @generated from message google.spanner.v1.Transaction
 */
export class Transaction extends Message<Transaction> {
  /**
   * `id` may be used to identify the transaction in subsequent
   * [Read][google.spanner.v1.Spanner.Read],
   * [ExecuteSql][google.spanner.v1.Spanner.ExecuteSql],
   * [Commit][google.spanner.v1.Spanner.Commit], or
   * [Rollback][google.spanner.v1.Spanner.Rollback] calls.
   *
   * Single-use read-only transactions do not have IDs, because
   * single-use transactions do not support multiple requests.
   *
   * @generated from field: bytes id = 1;
   */
  id = new Uint8Array(0);

  /**
   * For snapshot read-only transactions, the read timestamp chosen
   * for the transaction. Not returned by default: see
   * [TransactionOptions.ReadOnly.return_read_timestamp][google.spanner.v1.TransactionOptions.ReadOnly.return_read_timestamp].
   *
   * A timestamp in RFC3339 UTC \"Zulu\" format, accurate to nanoseconds.
   * Example: `"2014-10-02T15:01:23.045123456Z"`.
   *
   * @generated from field: google.protobuf.Timestamp read_timestamp = 2;
   */
  readTimestamp?: Timestamp;

  constructor(data?: PartialMessage<Transaction>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.spanner.v1.Transaction";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "read_timestamp", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Transaction {
    return new Transaction().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Transaction {
    return new Transaction().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Transaction {
    return new Transaction().fromJsonString(jsonString, options);
  }

  static equals(a: Transaction | PlainMessage<Transaction> | undefined, b: Transaction | PlainMessage<Transaction> | undefined): boolean {
    return proto3.util.equals(Transaction, a, b);
  }
}

/**
 * This message is used to select the transaction in which a
 * [Read][google.spanner.v1.Spanner.Read] or
 * [ExecuteSql][google.spanner.v1.Spanner.ExecuteSql] call runs.
 *
 * See [TransactionOptions][google.spanner.v1.TransactionOptions] for more information about transactions.
 *
 * @generated from message google.spanner.v1.TransactionSelector
 */
export class TransactionSelector extends Message<TransactionSelector> {
  /**
   * If no fields are set, the default is a single use transaction
   * with strong concurrency.
   *
   * @generated from oneof google.spanner.v1.TransactionSelector.selector
   */
  selector: {
    /**
     * Execute the read or SQL query in a temporary transaction.
     * This is the most efficient way to execute a transaction that
     * consists of a single SQL query.
     *
     * @generated from field: google.spanner.v1.TransactionOptions single_use = 1;
     */
    value: TransactionOptions;
    case: "singleUse";
  } | {
    /**
     * Execute the read or SQL query in a previously-started transaction.
     *
     * @generated from field: bytes id = 2;
     */
    value: Uint8Array;
    case: "id";
  } | {
    /**
     * Begin a new transaction and execute this read or SQL query in
     * it. The transaction ID of the new transaction is returned in
     * [ResultSetMetadata.transaction][google.spanner.v1.ResultSetMetadata.transaction], which is a [Transaction][google.spanner.v1.Transaction].
     *
     * @generated from field: google.spanner.v1.TransactionOptions begin = 3;
     */
    value: TransactionOptions;
    case: "begin";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<TransactionSelector>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.spanner.v1.TransactionSelector";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "single_use", kind: "message", T: TransactionOptions, oneof: "selector" },
    { no: 2, name: "id", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "selector" },
    { no: 3, name: "begin", kind: "message", T: TransactionOptions, oneof: "selector" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionSelector {
    return new TransactionSelector().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionSelector {
    return new TransactionSelector().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionSelector {
    return new TransactionSelector().fromJsonString(jsonString, options);
  }

  static equals(a: TransactionSelector | PlainMessage<TransactionSelector> | undefined, b: TransactionSelector | PlainMessage<TransactionSelector> | undefined): boolean {
    return proto3.util.equals(TransactionSelector, a, b);
  }
}
