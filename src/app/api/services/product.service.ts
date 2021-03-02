/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { IResponseDto } from '../models/i-response-dto';
import { ProductDto } from '../models/product-dto';
import { ProductsFavouriteVm } from '../models/products-favourite-vm';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiProductGetPageGet
   */
  static readonly ApiProductGetPageGetPath = '/api/Product/GetPage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGetPageGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetPageGet$Plain$Response(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductGetPageGetPath, 'get');
    if (params) {

      rb.query('pageNumber', params.pageNumber, {});
      rb.query('pageSize', params.pageSize, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductGetPageGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetPageGet$Plain(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<IResponseDto> {

    return this.apiProductGetPageGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGetPageGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetPageGet$Json$Response(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductGetPageGetPath, 'get');
    if (params) {

      rb.query('pageNumber', params.pageNumber, {});
      rb.query('pageSize', params.pageSize, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductGetPageGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetPageGet$Json(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<IResponseDto> {

    return this.apiProductGetPageGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiProductGetAllArchiveGet
   */
  static readonly ApiProductGetAllArchiveGetPath = '/api/Product/GetAllArchive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGetAllArchiveGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetAllArchiveGet$Plain$Response(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductGetAllArchiveGetPath, 'get');
    if (params) {

      rb.query('pageNumber', params.pageNumber, {});
      rb.query('pageSize', params.pageSize, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductGetAllArchiveGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetAllArchiveGet$Plain(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<IResponseDto> {

    return this.apiProductGetAllArchiveGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGetAllArchiveGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetAllArchiveGet$Json$Response(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductGetAllArchiveGetPath, 'get');
    if (params) {

      rb.query('pageNumber', params.pageNumber, {});
      rb.query('pageSize', params.pageSize, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductGetAllArchiveGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetAllArchiveGet$Json(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<IResponseDto> {

    return this.apiProductGetAllArchiveGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiProductGetByIdGet
   */
  static readonly ApiProductGetByIdGetPath = '/api/Product/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetByIdGet$Plain$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductGetByIdGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetByIdGet$Plain(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiProductGetByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetByIdGet$Json$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductGetByIdGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetByIdGet$Json(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiProductGetByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiProductUpdatePost
   */
  static readonly ApiProductUpdatePostPath = '/api/Product/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductUpdatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductUpdatePost$Plain$Response(params?: {
      body?: ProductDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductUpdatePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductUpdatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductUpdatePost$Plain(params?: {
      body?: ProductDto
  }): Observable<IResponseDto> {

    return this.apiProductUpdatePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductUpdatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductUpdatePost$Json$Response(params?: {
      body?: ProductDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductUpdatePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductUpdatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductUpdatePost$Json(params?: {
      body?: ProductDto
  }): Observable<IResponseDto> {

    return this.apiProductUpdatePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiProductDeleteGet
   */
  static readonly ApiProductDeleteGetPath = '/api/Product/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductDeleteGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductDeleteGet$Plain$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductDeleteGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductDeleteGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductDeleteGet$Plain(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiProductDeleteGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductDeleteGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductDeleteGet$Json$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductDeleteGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductDeleteGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductDeleteGet$Json(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiProductDeleteGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiProductRemoveFromDbGet
   */
  static readonly ApiProductRemoveFromDbGetPath = '/api/Product/RemoveFromDB';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductRemoveFromDbGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductRemoveFromDbGet$Plain$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductRemoveFromDbGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductRemoveFromDbGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductRemoveFromDbGet$Plain(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiProductRemoveFromDbGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductRemoveFromDbGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductRemoveFromDbGet$Json$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductRemoveFromDbGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductRemoveFromDbGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductRemoveFromDbGet$Json(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiProductRemoveFromDbGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiProductSaveNewPost
   */
  static readonly ApiProductSaveNewPostPath = '/api/Product/SaveNew';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductSaveNewPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductSaveNewPost$Plain$Response(params?: {
      body?: ProductDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductSaveNewPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductSaveNewPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductSaveNewPost$Plain(params?: {
      body?: ProductDto
  }): Observable<IResponseDto> {

    return this.apiProductSaveNewPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductSaveNewPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductSaveNewPost$Json$Response(params?: {
      body?: ProductDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductSaveNewPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductSaveNewPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductSaveNewPost$Json(params?: {
      body?: ProductDto
  }): Observable<IResponseDto> {

    return this.apiProductSaveNewPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiProductAddfavouritePost
   */
  static readonly ApiProductAddfavouritePostPath = '/api/Product/Addfavourite';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductAddfavouritePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductAddfavouritePost$Plain$Response(params?: {
      body?: ProductsFavouriteVm
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductAddfavouritePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductAddfavouritePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductAddfavouritePost$Plain(params?: {
      body?: ProductsFavouriteVm
  }): Observable<IResponseDto> {

    return this.apiProductAddfavouritePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductAddfavouritePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductAddfavouritePost$Json$Response(params?: {
      body?: ProductsFavouriteVm
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductAddfavouritePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductAddfavouritePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductAddfavouritePost$Json(params?: {
      body?: ProductsFavouriteVm
  }): Observable<IResponseDto> {

    return this.apiProductAddfavouritePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiProductDeleteProductFavouriteGet
   */
  static readonly ApiProductDeleteProductFavouriteGetPath = '/api/Product/DeleteProductFavourite';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductDeleteProductFavouriteGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductDeleteProductFavouriteGet$Plain$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductDeleteProductFavouriteGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductDeleteProductFavouriteGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductDeleteProductFavouriteGet$Plain(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiProductDeleteProductFavouriteGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductDeleteProductFavouriteGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductDeleteProductFavouriteGet$Json$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductDeleteProductFavouriteGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductDeleteProductFavouriteGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductDeleteProductFavouriteGet$Json(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiProductDeleteProductFavouriteGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiProductGetAllFavouriteUserGet
   */
  static readonly ApiProductGetAllFavouriteUserGetPath = '/api/Product/GetAllFavouriteUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGetAllFavouriteUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetAllFavouriteUserGet$Plain$Response(params?: {
    pageNumber?: number;
    pageSize?: number;
    ApplicationUserId?: null | string;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductGetAllFavouriteUserGetPath, 'get');
    if (params) {

      rb.query('pageNumber', params.pageNumber, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('ApplicationUserId', params.ApplicationUserId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductGetAllFavouriteUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetAllFavouriteUserGet$Plain(params?: {
    pageNumber?: number;
    pageSize?: number;
    ApplicationUserId?: null | string;

  }): Observable<IResponseDto> {

    return this.apiProductGetAllFavouriteUserGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGetAllFavouriteUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetAllFavouriteUserGet$Json$Response(params?: {
    pageNumber?: number;
    pageSize?: number;
    ApplicationUserId?: null | string;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductGetAllFavouriteUserGetPath, 'get');
    if (params) {

      rb.query('pageNumber', params.pageNumber, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('ApplicationUserId', params.ApplicationUserId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductGetAllFavouriteUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetAllFavouriteUserGet$Json(params?: {
    pageNumber?: number;
    pageSize?: number;
    ApplicationUserId?: null | string;

  }): Observable<IResponseDto> {

    return this.apiProductGetAllFavouriteUserGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

}
