// Copyright (c) 2015, Google Inc.
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
// @generated from file google/example/library/v1/library.proto (package google.example.library.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * A single book in the library.
 *
 * @generated from message google.example.library.v1.Book
 */
export class Book extends Message<Book> {
  /**
   * The resource name of the book.
   * Book names have the form `shelves/{shelf_id}/books/{book_id}`.
   * The name is ignored when creating a book.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The name of the book author.
   *
   * @generated from field: string author = 2;
   */
  author = "";

  /**
   * The title of the book.
   *
   * @generated from field: string title = 3;
   */
  title = "";

  /**
   * Value indicating whether the book has been read.
   *
   * @generated from field: bool read = 4;
   */
  read = false;

  constructor(data?: PartialMessage<Book>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.example.library.v1.Book";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "author", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "read", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Book {
    return new Book().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Book {
    return new Book().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Book {
    return new Book().fromJsonString(jsonString, options);
  }

  static equals(a: Book | PlainMessage<Book> | undefined, b: Book | PlainMessage<Book> | undefined): boolean {
    return proto3.util.equals(Book, a, b);
  }
}

/**
 * A Shelf contains a collection of books with a theme.
 *
 * @generated from message google.example.library.v1.Shelf
 */
export class Shelf extends Message<Shelf> {
  /**
   * The resource name of the shelf.
   * Shelf names have the form `shelves/{shelf_id}`.
   * The name is ignored when creating a shelf.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The theme of the shelf
   *
   * @generated from field: string theme = 2;
   */
  theme = "";

  constructor(data?: PartialMessage<Shelf>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.example.library.v1.Shelf";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "theme", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Shelf {
    return new Shelf().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Shelf {
    return new Shelf().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Shelf {
    return new Shelf().fromJsonString(jsonString, options);
  }

  static equals(a: Shelf | PlainMessage<Shelf> | undefined, b: Shelf | PlainMessage<Shelf> | undefined): boolean {
    return proto3.util.equals(Shelf, a, b);
  }
}

/**
 * Request message for LibraryService.CreateShelf.
 *
 * @generated from message google.example.library.v1.CreateShelfRequest
 */
export class CreateShelfRequest extends Message<CreateShelfRequest> {
  /**
   * The shelf to create.
   *
   * @generated from field: google.example.library.v1.Shelf shelf = 1;
   */
  shelf?: Shelf;

  constructor(data?: PartialMessage<CreateShelfRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.example.library.v1.CreateShelfRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "shelf", kind: "message", T: Shelf },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateShelfRequest {
    return new CreateShelfRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateShelfRequest {
    return new CreateShelfRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateShelfRequest {
    return new CreateShelfRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateShelfRequest | PlainMessage<CreateShelfRequest> | undefined, b: CreateShelfRequest | PlainMessage<CreateShelfRequest> | undefined): boolean {
    return proto3.util.equals(CreateShelfRequest, a, b);
  }
}

/**
 * Request message for LibraryService.GetShelf.
 *
 * @generated from message google.example.library.v1.GetShelfRequest
 */
export class GetShelfRequest extends Message<GetShelfRequest> {
  /**
   * The name of the shelf to retrieve.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetShelfRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.example.library.v1.GetShelfRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetShelfRequest {
    return new GetShelfRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetShelfRequest {
    return new GetShelfRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetShelfRequest {
    return new GetShelfRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetShelfRequest | PlainMessage<GetShelfRequest> | undefined, b: GetShelfRequest | PlainMessage<GetShelfRequest> | undefined): boolean {
    return proto3.util.equals(GetShelfRequest, a, b);
  }
}

/**
 * Request message for LibraryService.ListShelves.
 *
 * @generated from message google.example.library.v1.ListShelvesRequest
 */
export class ListShelvesRequest extends Message<ListShelvesRequest> {
  /**
   * Requested page size. Server may return fewer shelves than requested.
   * If unspecified, server will pick an appropriate default.
   *
   * @generated from field: int32 page_size = 1;
   */
  pageSize = 0;

  /**
   * A token identifying a page of results the server should return.
   * Typically, this is the value of
   * [ListShelvesResponse.next_page_token][google.example.library.v1.ListShelvesResponse.next_page_token]
   * returned from the previous call to `ListShelves` method.
   *
   * @generated from field: string page_token = 2;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListShelvesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.example.library.v1.ListShelvesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListShelvesRequest {
    return new ListShelvesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListShelvesRequest {
    return new ListShelvesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListShelvesRequest {
    return new ListShelvesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListShelvesRequest | PlainMessage<ListShelvesRequest> | undefined, b: ListShelvesRequest | PlainMessage<ListShelvesRequest> | undefined): boolean {
    return proto3.util.equals(ListShelvesRequest, a, b);
  }
}

/**
 * Response message for LibraryService.ListShelves.
 *
 * @generated from message google.example.library.v1.ListShelvesResponse
 */
export class ListShelvesResponse extends Message<ListShelvesResponse> {
  /**
   * The list of shelves.
   *
   * @generated from field: repeated google.example.library.v1.Shelf shelves = 1;
   */
  shelves: Shelf[] = [];

  /**
   * A token to retrieve next page of results.
   * Pass this value in the
   * [ListShelvesRequest.page_token][google.example.library.v1.ListShelvesRequest.page_token]
   * field in the subsequent call to `ListShelves` method to retrieve the next
   * page of results.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListShelvesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.example.library.v1.ListShelvesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "shelves", kind: "message", T: Shelf, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListShelvesResponse {
    return new ListShelvesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListShelvesResponse {
    return new ListShelvesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListShelvesResponse {
    return new ListShelvesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListShelvesResponse | PlainMessage<ListShelvesResponse> | undefined, b: ListShelvesResponse | PlainMessage<ListShelvesResponse> | undefined): boolean {
    return proto3.util.equals(ListShelvesResponse, a, b);
  }
}

/**
 * Request message for LibraryService.DeleteShelf.
 *
 * @generated from message google.example.library.v1.DeleteShelfRequest
 */
export class DeleteShelfRequest extends Message<DeleteShelfRequest> {
  /**
   * The name of the shelf to delete.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<DeleteShelfRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.example.library.v1.DeleteShelfRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteShelfRequest {
    return new DeleteShelfRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteShelfRequest {
    return new DeleteShelfRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteShelfRequest {
    return new DeleteShelfRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteShelfRequest | PlainMessage<DeleteShelfRequest> | undefined, b: DeleteShelfRequest | PlainMessage<DeleteShelfRequest> | undefined): boolean {
    return proto3.util.equals(DeleteShelfRequest, a, b);
  }
}

/**
 * Describes the shelf being removed (other_shelf_name) and updated
 * (name) in this merge.
 *
 * @generated from message google.example.library.v1.MergeShelvesRequest
 */
export class MergeShelvesRequest extends Message<MergeShelvesRequest> {
  /**
   * The name of the shelf we're adding books to.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The name of the shelf we're removing books from and deleting.
   *
   * @generated from field: string other_shelf_name = 2;
   */
  otherShelfName = "";

  constructor(data?: PartialMessage<MergeShelvesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.example.library.v1.MergeShelvesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "other_shelf_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MergeShelvesRequest {
    return new MergeShelvesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MergeShelvesRequest {
    return new MergeShelvesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MergeShelvesRequest {
    return new MergeShelvesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: MergeShelvesRequest | PlainMessage<MergeShelvesRequest> | undefined, b: MergeShelvesRequest | PlainMessage<MergeShelvesRequest> | undefined): boolean {
    return proto3.util.equals(MergeShelvesRequest, a, b);
  }
}

/**
 * Request message for LibraryService.CreateBook.
 *
 * @generated from message google.example.library.v1.CreateBookRequest
 */
export class CreateBookRequest extends Message<CreateBookRequest> {
  /**
   * The name of the shelf in which the book is created.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The book to create.
   *
   * @generated from field: google.example.library.v1.Book book = 2;
   */
  book?: Book;

  constructor(data?: PartialMessage<CreateBookRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.example.library.v1.CreateBookRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "book", kind: "message", T: Book },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateBookRequest {
    return new CreateBookRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateBookRequest {
    return new CreateBookRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateBookRequest {
    return new CreateBookRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateBookRequest | PlainMessage<CreateBookRequest> | undefined, b: CreateBookRequest | PlainMessage<CreateBookRequest> | undefined): boolean {
    return proto3.util.equals(CreateBookRequest, a, b);
  }
}

/**
 * Request message for LibraryService.GetBook.
 *
 * @generated from message google.example.library.v1.GetBookRequest
 */
export class GetBookRequest extends Message<GetBookRequest> {
  /**
   * The name of the book to retrieve.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetBookRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.example.library.v1.GetBookRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBookRequest {
    return new GetBookRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBookRequest {
    return new GetBookRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBookRequest {
    return new GetBookRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetBookRequest | PlainMessage<GetBookRequest> | undefined, b: GetBookRequest | PlainMessage<GetBookRequest> | undefined): boolean {
    return proto3.util.equals(GetBookRequest, a, b);
  }
}

/**
 * Request message for LibraryService.ListBooks.
 *
 * @generated from message google.example.library.v1.ListBooksRequest
 */
export class ListBooksRequest extends Message<ListBooksRequest> {
  /**
   * The name of the shelf whose books we'd like to list.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * Requested page size. Server may return fewer books than requested.
   * If unspecified, server will pick an appropriate default.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize = 0;

  /**
   * A token identifying a page of results the server should return.
   * Typically, this is the value of
   * [ListBooksResponse.next_page_token][google.example.library.v1.ListBooksResponse.next_page_token].
   * returned from the previous call to `ListBooks` method.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListBooksRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.example.library.v1.ListBooksRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListBooksRequest {
    return new ListBooksRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListBooksRequest {
    return new ListBooksRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListBooksRequest {
    return new ListBooksRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListBooksRequest | PlainMessage<ListBooksRequest> | undefined, b: ListBooksRequest | PlainMessage<ListBooksRequest> | undefined): boolean {
    return proto3.util.equals(ListBooksRequest, a, b);
  }
}

/**
 * Response message for LibraryService.ListBooks.
 *
 * @generated from message google.example.library.v1.ListBooksResponse
 */
export class ListBooksResponse extends Message<ListBooksResponse> {
  /**
   * The list of books.
   *
   * @generated from field: repeated google.example.library.v1.Book books = 1;
   */
  books: Book[] = [];

  /**
   * A token to retrieve next page of results.
   * Pass this value in the
   * [ListBooksRequest.page_token][google.example.library.v1.ListBooksRequest.page_token]
   * field in the subsequent call to `ListBooks` method to retrieve the next
   * page of results.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListBooksResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.example.library.v1.ListBooksResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "books", kind: "message", T: Book, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListBooksResponse {
    return new ListBooksResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListBooksResponse {
    return new ListBooksResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListBooksResponse {
    return new ListBooksResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListBooksResponse | PlainMessage<ListBooksResponse> | undefined, b: ListBooksResponse | PlainMessage<ListBooksResponse> | undefined): boolean {
    return proto3.util.equals(ListBooksResponse, a, b);
  }
}

/**
 * Request message for LibraryService.UpdateBook.
 *
 * @generated from message google.example.library.v1.UpdateBookRequest
 */
export class UpdateBookRequest extends Message<UpdateBookRequest> {
  /**
   * The name of the book to update.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The book to update with. The name must match or be empty.
   *
   * @generated from field: google.example.library.v1.Book book = 2;
   */
  book?: Book;

  constructor(data?: PartialMessage<UpdateBookRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.example.library.v1.UpdateBookRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "book", kind: "message", T: Book },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateBookRequest {
    return new UpdateBookRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateBookRequest {
    return new UpdateBookRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateBookRequest {
    return new UpdateBookRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateBookRequest | PlainMessage<UpdateBookRequest> | undefined, b: UpdateBookRequest | PlainMessage<UpdateBookRequest> | undefined): boolean {
    return proto3.util.equals(UpdateBookRequest, a, b);
  }
}

/**
 * Request message for LibraryService.DeleteBook.
 *
 * @generated from message google.example.library.v1.DeleteBookRequest
 */
export class DeleteBookRequest extends Message<DeleteBookRequest> {
  /**
   * The name of the book to delete.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<DeleteBookRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.example.library.v1.DeleteBookRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteBookRequest {
    return new DeleteBookRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteBookRequest {
    return new DeleteBookRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteBookRequest {
    return new DeleteBookRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteBookRequest | PlainMessage<DeleteBookRequest> | undefined, b: DeleteBookRequest | PlainMessage<DeleteBookRequest> | undefined): boolean {
    return proto3.util.equals(DeleteBookRequest, a, b);
  }
}

/**
 * Describes what book to move (name) and what shelf we're moving it
 * to (other_shelf_name).
 *
 * @generated from message google.example.library.v1.MoveBookRequest
 */
export class MoveBookRequest extends Message<MoveBookRequest> {
  /**
   * The name of the book to move.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The name of the destination shelf.
   *
   * @generated from field: string other_shelf_name = 2;
   */
  otherShelfName = "";

  constructor(data?: PartialMessage<MoveBookRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.example.library.v1.MoveBookRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "other_shelf_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MoveBookRequest {
    return new MoveBookRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MoveBookRequest {
    return new MoveBookRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MoveBookRequest {
    return new MoveBookRequest().fromJsonString(jsonString, options);
  }

  static equals(a: MoveBookRequest | PlainMessage<MoveBookRequest> | undefined, b: MoveBookRequest | PlainMessage<MoveBookRequest> | undefined): boolean {
    return proto3.util.equals(MoveBookRequest, a, b);
  }
}

