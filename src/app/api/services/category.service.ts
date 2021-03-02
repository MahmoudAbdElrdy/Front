/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CategoryDto } from '../models/category-dto';
import { IResponseDto } from '../models/i-response-dto';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCategoryGetPageGet
   */
  static readonly ApiCategoryGetPageGetPath = '/api/Category/GetPage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGetPageGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGetPageGet$Plain$Response(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryGetPageGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCategoryGetPageGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGetPageGet$Plain(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<IResponseDto> {

    return this.apiCategoryGetPageGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGetPageGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGetPageGet$Json$Response(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryGetPageGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCategoryGetPageGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGetPageGet$Json(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<IResponseDto> {

    return this.apiCategoryGetPageGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiCategoryGetAllCitiesGet
   */
  static readonly ApiCategoryGetAllCitiesGetPath = '/api/Category/GetAllCities';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGetAllCitiesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGetAllCitiesGet$Plain$Response(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryGetAllCitiesGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCategoryGetAllCitiesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGetAllCitiesGet$Plain(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<IResponseDto> {

    return this.apiCategoryGetAllCitiesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGetAllCitiesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGetAllCitiesGet$Json$Response(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryGetAllCitiesGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCategoryGetAllCitiesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGetAllCitiesGet$Json(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<IResponseDto> {

    return this.apiCategoryGetAllCitiesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiCategoryGetByIdGet
   */
  static readonly ApiCategoryGetByIdGetPath = '/api/Category/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGetByIdGet$Plain$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryGetByIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCategoryGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGetByIdGet$Plain(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiCategoryGetByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGetByIdGet$Json$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryGetByIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCategoryGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGetByIdGet$Json(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiCategoryGetByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiCategoryUpdatePost
   */
  static readonly ApiCategoryUpdatePostPath = '/api/Category/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryUpdatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryUpdatePost$Plain$Response(params?: {
      body?: CategoryDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryUpdatePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCategoryUpdatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryUpdatePost$Plain(params?: {
      body?: CategoryDto
  }): Observable<IResponseDto> {

    return this.apiCategoryUpdatePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryUpdatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryUpdatePost$Json$Response(params?: {
      body?: CategoryDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryUpdatePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCategoryUpdatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryUpdatePost$Json(params?: {
      body?: CategoryDto
  }): Observable<IResponseDto> {

    return this.apiCategoryUpdatePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiCategoryDeleteGet
   */
  static readonly ApiCategoryDeleteGetPath = '/api/Category/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryDeleteGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryDeleteGet$Plain$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryDeleteGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCategoryDeleteGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryDeleteGet$Plain(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiCategoryDeleteGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryDeleteGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryDeleteGet$Json$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryDeleteGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCategoryDeleteGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryDeleteGet$Json(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiCategoryDeleteGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiCategorySaveNewPost
   */
  static readonly ApiCategorySaveNewPostPath = '/api/Category/SaveNew';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategorySaveNewPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategorySaveNewPost$Plain$Response(params?: {
      body?: CategoryDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategorySaveNewPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCategorySaveNewPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategorySaveNewPost$Plain(params?: {
      body?: CategoryDto
  }): Observable<IResponseDto> {

    return this.apiCategorySaveNewPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategorySaveNewPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategorySaveNewPost$Json$Response(params?: {
      body?: CategoryDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategorySaveNewPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCategorySaveNewPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategorySaveNewPost$Json(params?: {
      body?: CategoryDto
  }): Observable<IResponseDto> {

    return this.apiCategorySaveNewPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

}
