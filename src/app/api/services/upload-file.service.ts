/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class UploadFileService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUploadFileUploadImagePost
   */
  static readonly ApiUploadFileUploadImagePostPath = '/api/UploadFile/UploadImage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUploadFileUploadImagePost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUploadFileUploadImagePost$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UploadFileService.ApiUploadFileUploadImagePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiUploadFileUploadImagePost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUploadFileUploadImagePost(params?: {

  }): Observable<void> {

    return this.apiUploadFileUploadImagePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiUploadFileFileUploadPost
   */
  static readonly ApiUploadFileFileUploadPostPath = '/api/UploadFile/FileUpload';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUploadFileFileUploadPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiUploadFileFileUploadPost$Response(params?: {
      body?: { 'files'?: Array<Blob> }
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UploadFileService.ApiUploadFileFileUploadPostPath, 'post');
    if (params) {


      rb.body(params.body, 'multipart/form-data');
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
   * To access the full response (for headers, for example), `apiUploadFileFileUploadPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiUploadFileFileUploadPost(params?: {
      body?: { 'files'?: Array<Blob> }
  }): Observable<void> {

    return this.apiUploadFileFileUploadPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiUploadFileBaseGet
   */
  static readonly ApiUploadFileBaseGetPath = '/api/UploadFile/Base';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUploadFileBaseGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUploadFileBaseGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UploadFileService.ApiUploadFileBaseGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUploadFileBaseGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUploadFileBaseGet$Plain(params?: {

  }): Observable<string> {

    return this.apiUploadFileBaseGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUploadFileBaseGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUploadFileBaseGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UploadFileService.ApiUploadFileBaseGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUploadFileBaseGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUploadFileBaseGet$Json(params?: {

  }): Observable<string> {

    return this.apiUploadFileBaseGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
