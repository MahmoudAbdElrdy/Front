/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CompanyDto } from '../models/company-dto';
import { IResponseDto } from '../models/i-response-dto';

@Injectable({
  providedIn: 'root',
})
export class CompanyService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCompanyGetPageGet
   */
  static readonly ApiCompanyGetPageGetPath = '/api/Company/GetPage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanyGetPageGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyGetPageGet$Plain$Response(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanyGetPageGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCompanyGetPageGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyGetPageGet$Plain(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<IResponseDto> {

    return this.apiCompanyGetPageGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanyGetPageGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyGetPageGet$Json$Response(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanyGetPageGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCompanyGetPageGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyGetPageGet$Json(params?: {
    pageNumber?: number;
    pageSize?: number;

  }): Observable<IResponseDto> {

    return this.apiCompanyGetPageGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiCompanyGetByIdGet
   */
  static readonly ApiCompanyGetByIdGetPath = '/api/Company/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanyGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyGetByIdGet$Plain$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanyGetByIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCompanyGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyGetByIdGet$Plain(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiCompanyGetByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanyGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyGetByIdGet$Json$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanyGetByIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCompanyGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyGetByIdGet$Json(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiCompanyGetByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiCompanyUpdatePost
   */
  static readonly ApiCompanyUpdatePostPath = '/api/Company/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanyUpdatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompanyUpdatePost$Plain$Response(params?: {
      body?: CompanyDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanyUpdatePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCompanyUpdatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompanyUpdatePost$Plain(params?: {
      body?: CompanyDto
  }): Observable<IResponseDto> {

    return this.apiCompanyUpdatePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanyUpdatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompanyUpdatePost$Json$Response(params?: {
      body?: CompanyDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanyUpdatePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCompanyUpdatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompanyUpdatePost$Json(params?: {
      body?: CompanyDto
  }): Observable<IResponseDto> {

    return this.apiCompanyUpdatePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiCompanyDeleteGet
   */
  static readonly ApiCompanyDeleteGetPath = '/api/Company/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanyDeleteGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyDeleteGet$Plain$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanyDeleteGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCompanyDeleteGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyDeleteGet$Plain(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiCompanyDeleteGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanyDeleteGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyDeleteGet$Json$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanyDeleteGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCompanyDeleteGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompanyDeleteGet$Json(params?: {
    id?: number;

  }): Observable<IResponseDto> {

    return this.apiCompanyDeleteGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiCompanySaveNewPost
   */
  static readonly ApiCompanySaveNewPostPath = '/api/Company/SaveNew';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanySaveNewPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompanySaveNewPost$Plain$Response(params?: {
      body?: CompanyDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanySaveNewPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCompanySaveNewPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompanySaveNewPost$Plain(params?: {
      body?: CompanyDto
  }): Observable<IResponseDto> {

    return this.apiCompanySaveNewPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompanySaveNewPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompanySaveNewPost$Json$Response(params?: {
      body?: CompanyDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.ApiCompanySaveNewPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCompanySaveNewPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompanySaveNewPost$Json(params?: {
      body?: CompanyDto
  }): Observable<IResponseDto> {

    return this.apiCompanySaveNewPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

}
