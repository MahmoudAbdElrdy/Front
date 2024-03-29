/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { DiscountDto } from '../models/discount-dto';
import { IResponseDto } from '../models/i-response-dto';

@Injectable({
  providedIn: 'root',
})
export class DiscountService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiDiscountGetPageGet
   */
  static readonly ApiDiscountGetPageGetPath = '/api/Discount/GetPage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiscountGetPageGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountGetPageGet$Plain$Response(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiscountService.ApiDiscountGetPageGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDiscountGetPageGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountGetPageGet$Plain(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<IResponseDto> {

    return this.apiDiscountGetPageGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiscountGetPageGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountGetPageGet$Json$Response(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiscountService.ApiDiscountGetPageGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDiscountGetPageGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountGetPageGet$Json(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<IResponseDto> {

    return this.apiDiscountGetPageGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiDiscountGetAllProdcutGet
   */
  static readonly ApiDiscountGetAllProdcutGetPath = '/api/Discount/GetAllProdcut';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiscountGetAllProdcutGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountGetAllProdcutGet$Plain$Response(params?: {
    pageNumber?: number;
    pageSize?: number;
    CategoryId?: number;
    CityId?: number;
    ProdcutName?: null | string;
    ApplicationUserId?: null | string;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiscountService.ApiDiscountGetAllProdcutGetPath, 'get');
    if (params) {

      rb.query('pageNumber', params.pageNumber, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('CategoryId', params.CategoryId, {});
      rb.query('CityId', params.CityId, {});
      rb.query('ProdcutName', params.ProdcutName, {});
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
   * To access the full response (for headers, for example), `apiDiscountGetAllProdcutGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountGetAllProdcutGet$Plain(params?: {
    pageNumber?: number;
    pageSize?: number;
    CategoryId?: number;
    CityId?: number;
    ProdcutName?: null | string;
    ApplicationUserId?: null | string;

  }): Observable<IResponseDto> {

    return this.apiDiscountGetAllProdcutGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiscountGetAllProdcutGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountGetAllProdcutGet$Json$Response(params?: {
    pageNumber?: number;
    pageSize?: number;
    CategoryId?: number;
    CityId?: number;
    ProdcutName?: null | string;
    ApplicationUserId?: null | string;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiscountService.ApiDiscountGetAllProdcutGetPath, 'get');
    if (params) {

      rb.query('pageNumber', params.pageNumber, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('CategoryId', params.CategoryId, {});
      rb.query('CityId', params.CityId, {});
      rb.query('ProdcutName', params.ProdcutName, {});
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
   * To access the full response (for headers, for example), `apiDiscountGetAllProdcutGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountGetAllProdcutGet$Json(params?: {
    pageNumber?: number;
    pageSize?: number;
    CategoryId?: number;
    CityId?: number;
    ProdcutName?: null | string;
    ApplicationUserId?: null | string;

  }): Observable<IResponseDto> {

    return this.apiDiscountGetAllProdcutGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiDiscountGetByIdGet
   */
  static readonly ApiDiscountGetByIdGetPath = '/api/Discount/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiscountGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountGetByIdGet$Plain$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiscountService.ApiDiscountGetByIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDiscountGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountGetByIdGet$Plain(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiDiscountGetByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiscountGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountGetByIdGet$Json$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiscountService.ApiDiscountGetByIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDiscountGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountGetByIdGet$Json(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiDiscountGetByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiDiscountGetProdcutByIdGet
   */
  static readonly ApiDiscountGetProdcutByIdGetPath = '/api/Discount/GetProdcutById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiscountGetProdcutByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountGetProdcutByIdGet$Plain$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiscountService.ApiDiscountGetProdcutByIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDiscountGetProdcutByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountGetProdcutByIdGet$Plain(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiDiscountGetProdcutByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiscountGetProdcutByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountGetProdcutByIdGet$Json$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiscountService.ApiDiscountGetProdcutByIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDiscountGetProdcutByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountGetProdcutByIdGet$Json(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiDiscountGetProdcutByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiDiscountGetDiscountByProductGet
   */
  static readonly ApiDiscountGetDiscountByProductGetPath = '/api/Discount/GetDiscountByProduct';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiscountGetDiscountByProductGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountGetDiscountByProductGet$Plain$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiscountService.ApiDiscountGetDiscountByProductGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDiscountGetDiscountByProductGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountGetDiscountByProductGet$Plain(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiDiscountGetDiscountByProductGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiscountGetDiscountByProductGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountGetDiscountByProductGet$Json$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiscountService.ApiDiscountGetDiscountByProductGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDiscountGetDiscountByProductGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountGetDiscountByProductGet$Json(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiDiscountGetDiscountByProductGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiDiscountUpdatePost
   */
  static readonly ApiDiscountUpdatePostPath = '/api/Discount/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiscountUpdatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiscountUpdatePost$Plain$Response(params?: {
      body?: DiscountDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiscountService.ApiDiscountUpdatePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiscountUpdatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiscountUpdatePost$Plain(params?: {
      body?: DiscountDto
  }): Observable<IResponseDto> {

    return this.apiDiscountUpdatePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiscountUpdatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiscountUpdatePost$Json$Response(params?: {
      body?: DiscountDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiscountService.ApiDiscountUpdatePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiscountUpdatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiscountUpdatePost$Json(params?: {
      body?: DiscountDto
  }): Observable<IResponseDto> {

    return this.apiDiscountUpdatePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiDiscountDeleteGet
   */
  static readonly ApiDiscountDeleteGetPath = '/api/Discount/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiscountDeleteGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountDeleteGet$Plain$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiscountService.ApiDiscountDeleteGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDiscountDeleteGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountDeleteGet$Plain(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiDiscountDeleteGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiscountDeleteGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountDeleteGet$Json$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiscountService.ApiDiscountDeleteGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDiscountDeleteGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscountDeleteGet$Json(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiDiscountDeleteGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiDiscountSaveNewPost
   */
  static readonly ApiDiscountSaveNewPostPath = '/api/Discount/SaveNew';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiscountSaveNewPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiscountSaveNewPost$Plain$Response(params?: {
      body?: DiscountDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiscountService.ApiDiscountSaveNewPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiscountSaveNewPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiscountSaveNewPost$Plain(params?: {
      body?: DiscountDto
  }): Observable<IResponseDto> {

    return this.apiDiscountSaveNewPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiscountSaveNewPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiscountSaveNewPost$Json$Response(params?: {
      body?: DiscountDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiscountService.ApiDiscountSaveNewPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiscountSaveNewPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiscountSaveNewPost$Json(params?: {
      body?: DiscountDto
  }): Observable<IResponseDto> {

    return this.apiDiscountSaveNewPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

}
