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
import { PurchasesDto } from '../models/purchases-dto';

@Injectable({
  providedIn: 'root',
})
export class PurchasesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPurchasesGetPurchasesByUserIdGet
   */
  static readonly ApiPurchasesGetPurchasesByUserIdGetPath = '/api/Purchases/GetPurchasesByUserId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPurchasesGetPurchasesByUserIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPurchasesGetPurchasesByUserIdGet$Plain$Response(params?: {
    pageNumber?: number;
    pageSize?: number;
    ApplicationUserId?: null | string;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, PurchasesService.ApiPurchasesGetPurchasesByUserIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiPurchasesGetPurchasesByUserIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPurchasesGetPurchasesByUserIdGet$Plain(params?: {
    pageNumber?: number;
    pageSize?: number;
    ApplicationUserId?: null | string;

  }): Observable<IResponseDto> {

    return this.apiPurchasesGetPurchasesByUserIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPurchasesGetPurchasesByUserIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPurchasesGetPurchasesByUserIdGet$Json$Response(params?: {
    pageNumber?: number;
    pageSize?: number;
    ApplicationUserId?: null | string;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, PurchasesService.ApiPurchasesGetPurchasesByUserIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiPurchasesGetPurchasesByUserIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPurchasesGetPurchasesByUserIdGet$Json(params?: {
    pageNumber?: number;
    pageSize?: number;
    ApplicationUserId?: null | string;

  }): Observable<IResponseDto> {

    return this.apiPurchasesGetPurchasesByUserIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiPurchasesGetAllClientGet
   */
  static readonly ApiPurchasesGetAllClientGetPath = '/api/Purchases/GetAllClient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPurchasesGetAllClientGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPurchasesGetAllClientGet$Plain$Response(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, PurchasesService.ApiPurchasesGetAllClientGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiPurchasesGetAllClientGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPurchasesGetAllClientGet$Plain(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<IResponseDto> {

    return this.apiPurchasesGetAllClientGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPurchasesGetAllClientGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPurchasesGetAllClientGet$Json$Response(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, PurchasesService.ApiPurchasesGetAllClientGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiPurchasesGetAllClientGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPurchasesGetAllClientGet$Json(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<IResponseDto> {

    return this.apiPurchasesGetAllClientGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiPurchasesRandomCodeGet
   */
  static readonly ApiPurchasesRandomCodeGetPath = '/api/Purchases/RandomCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPurchasesRandomCodeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPurchasesRandomCodeGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PurchasesService.ApiPurchasesRandomCodeGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPurchasesRandomCodeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPurchasesRandomCodeGet(params?: {

  }): Observable<void> {

    return this.apiPurchasesRandomCodeGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPurchasesSaveNewPost
   */
  static readonly ApiPurchasesSaveNewPostPath = '/api/Purchases/SaveNew';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPurchasesSaveNewPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPurchasesSaveNewPost$Plain$Response(params?: {
      body?: PurchasesDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, PurchasesService.ApiPurchasesSaveNewPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiPurchasesSaveNewPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPurchasesSaveNewPost$Plain(params?: {
      body?: PurchasesDto
  }): Observable<IResponseDto> {

    return this.apiPurchasesSaveNewPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPurchasesSaveNewPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPurchasesSaveNewPost$Json$Response(params?: {
      body?: PurchasesDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, PurchasesService.ApiPurchasesSaveNewPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiPurchasesSaveNewPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPurchasesSaveNewPost$Json(params?: {
      body?: PurchasesDto
  }): Observable<IResponseDto> {

    return this.apiPurchasesSaveNewPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

}
