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
import { RatingDto } from '../models/rating-dto';

@Injectable({
  providedIn: 'root',
})
export class RatingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiRatingGetPageGet
   */
  static readonly ApiRatingGetPageGetPath = '/api/Rating/GetPage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRatingGetPageGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRatingGetPageGet$Plain$Response(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, RatingService.ApiRatingGetPageGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiRatingGetPageGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRatingGetPageGet$Plain(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<IResponseDto> {

    return this.apiRatingGetPageGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRatingGetPageGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRatingGetPageGet$Json$Response(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, RatingService.ApiRatingGetPageGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiRatingGetPageGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRatingGetPageGet$Json(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<IResponseDto> {

    return this.apiRatingGetPageGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiRatingGetAllRatingByDiscountIdGet
   */
  static readonly ApiRatingGetAllRatingByDiscountIdGetPath = '/api/Rating/GetAllRatingByDiscountId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRatingGetAllRatingByDiscountIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRatingGetAllRatingByDiscountIdGet$Plain$Response(params?: {
    pageNumber?: number;
    pageSize?: number;
    Id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, RatingService.ApiRatingGetAllRatingByDiscountIdGetPath, 'get');
    if (params) {

      rb.query('pageNumber', params.pageNumber, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('Id', params.Id, {});

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
   * To access the full response (for headers, for example), `apiRatingGetAllRatingByDiscountIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRatingGetAllRatingByDiscountIdGet$Plain(params?: {
    pageNumber?: number;
    pageSize?: number;
    Id?: number;

  }): Observable<IResponseDto> {

    return this.apiRatingGetAllRatingByDiscountIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRatingGetAllRatingByDiscountIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRatingGetAllRatingByDiscountIdGet$Json$Response(params?: {
    pageNumber?: number;
    pageSize?: number;
    Id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, RatingService.ApiRatingGetAllRatingByDiscountIdGetPath, 'get');
    if (params) {

      rb.query('pageNumber', params.pageNumber, {});
      rb.query('pageSize', params.pageSize, {});
      rb.query('Id', params.Id, {});

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
   * To access the full response (for headers, for example), `apiRatingGetAllRatingByDiscountIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRatingGetAllRatingByDiscountIdGet$Json(params?: {
    pageNumber?: number;
    pageSize?: number;
    Id?: number;

  }): Observable<IResponseDto> {

    return this.apiRatingGetAllRatingByDiscountIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiRatingGetByIdGet
   */
  static readonly ApiRatingGetByIdGetPath = '/api/Rating/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRatingGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRatingGetByIdGet$Plain$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, RatingService.ApiRatingGetByIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiRatingGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRatingGetByIdGet$Plain(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiRatingGetByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRatingGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRatingGetByIdGet$Json$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, RatingService.ApiRatingGetByIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiRatingGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRatingGetByIdGet$Json(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiRatingGetByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiRatingUpdatePost
   */
  static readonly ApiRatingUpdatePostPath = '/api/Rating/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRatingUpdatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRatingUpdatePost$Plain$Response(params?: {
      body?: RatingDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, RatingService.ApiRatingUpdatePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiRatingUpdatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRatingUpdatePost$Plain(params?: {
      body?: RatingDto
  }): Observable<IResponseDto> {

    return this.apiRatingUpdatePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRatingUpdatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRatingUpdatePost$Json$Response(params?: {
      body?: RatingDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, RatingService.ApiRatingUpdatePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiRatingUpdatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRatingUpdatePost$Json(params?: {
      body?: RatingDto
  }): Observable<IResponseDto> {

    return this.apiRatingUpdatePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiRatingDeleteGet
   */
  static readonly ApiRatingDeleteGetPath = '/api/Rating/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRatingDeleteGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRatingDeleteGet$Plain$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, RatingService.ApiRatingDeleteGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiRatingDeleteGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRatingDeleteGet$Plain(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiRatingDeleteGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRatingDeleteGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRatingDeleteGet$Json$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, RatingService.ApiRatingDeleteGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiRatingDeleteGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRatingDeleteGet$Json(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiRatingDeleteGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiRatingSaveNewPost
   */
  static readonly ApiRatingSaveNewPostPath = '/api/Rating/SaveNew';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRatingSaveNewPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRatingSaveNewPost$Plain$Response(params?: {
      body?: RatingDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, RatingService.ApiRatingSaveNewPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiRatingSaveNewPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRatingSaveNewPost$Plain(params?: {
      body?: RatingDto
  }): Observable<IResponseDto> {

    return this.apiRatingSaveNewPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRatingSaveNewPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRatingSaveNewPost$Json$Response(params?: {
      body?: RatingDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, RatingService.ApiRatingSaveNewPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiRatingSaveNewPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRatingSaveNewPost$Json(params?: {
      body?: RatingDto
  }): Observable<IResponseDto> {

    return this.apiRatingSaveNewPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

}
