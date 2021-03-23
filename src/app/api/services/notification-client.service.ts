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
import { NotificationDto } from '../models/notification-dto';

@Injectable({
  providedIn: 'root',
})
export class NotificationClientService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiNotificationClientGetAllGet
   */
  static readonly ApiNotificationClientGetAllGetPath = '/api/NotificationClient/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationClientGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationClientGetAllGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationClientService.ApiNotificationClientGetAllGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `apiNotificationClientGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationClientGetAllGet$Plain(params?: {

  }): Observable<IResponseDto> {

    return this.apiNotificationClientGetAllGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationClientGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationClientGetAllGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationClientService.ApiNotificationClientGetAllGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `apiNotificationClientGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationClientGetAllGet$Json(params?: {

  }): Observable<IResponseDto> {

    return this.apiNotificationClientGetAllGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiNotificationClientGetByClientGet
   */
  static readonly ApiNotificationClientGetByClientGetPath = '/api/NotificationClient/GetByClient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationClientGetByClientGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationClientGetByClientGet$Plain$Response(params?: {
    ApplicationUserId?: null | string;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationClientService.ApiNotificationClientGetByClientGetPath, 'get');
    if (params) {

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
   * To access the full response (for headers, for example), `apiNotificationClientGetByClientGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationClientGetByClientGet$Plain(params?: {
    ApplicationUserId?: null | string;

  }): Observable<IResponseDto> {

    return this.apiNotificationClientGetByClientGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationClientGetByClientGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationClientGetByClientGet$Json$Response(params?: {
    ApplicationUserId?: null | string;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationClientService.ApiNotificationClientGetByClientGetPath, 'get');
    if (params) {

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
   * To access the full response (for headers, for example), `apiNotificationClientGetByClientGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationClientGetByClientGet$Json(params?: {
    ApplicationUserId?: null | string;

  }): Observable<IResponseDto> {

    return this.apiNotificationClientGetByClientGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiNotificationClientDeleteNotificationPost
   */
  static readonly ApiNotificationClientDeleteNotificationPostPath = '/api/NotificationClient/DeleteNotification';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationClientDeleteNotificationPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationClientDeleteNotificationPost$Plain$Response(params?: {
      body?: NotificationDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationClientService.ApiNotificationClientDeleteNotificationPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiNotificationClientDeleteNotificationPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationClientDeleteNotificationPost$Plain(params?: {
      body?: NotificationDto
  }): Observable<IResponseDto> {

    return this.apiNotificationClientDeleteNotificationPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationClientDeleteNotificationPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationClientDeleteNotificationPost$Json$Response(params?: {
      body?: NotificationDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationClientService.ApiNotificationClientDeleteNotificationPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiNotificationClientDeleteNotificationPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationClientDeleteNotificationPost$Json(params?: {
      body?: NotificationDto
  }): Observable<IResponseDto> {

    return this.apiNotificationClientDeleteNotificationPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiNotificationClientRemoveGet
   */
  static readonly ApiNotificationClientRemoveGetPath = '/api/NotificationClient/Remove';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationClientRemoveGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationClientRemoveGet$Plain$Response(params?: {
    NotificationCid?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationClientService.ApiNotificationClientRemoveGetPath, 'get');
    if (params) {

      rb.query('NotificationCid', params.NotificationCid, {});

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
   * To access the full response (for headers, for example), `apiNotificationClientRemoveGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationClientRemoveGet$Plain(params?: {
    NotificationCid?: number;

  }): Observable<IResponseDto> {

    return this.apiNotificationClientRemoveGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationClientRemoveGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationClientRemoveGet$Json$Response(params?: {
    NotificationCid?: number;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationClientService.ApiNotificationClientRemoveGetPath, 'get');
    if (params) {

      rb.query('NotificationCid', params.NotificationCid, {});

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
   * To access the full response (for headers, for example), `apiNotificationClientRemoveGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationClientRemoveGet$Json(params?: {
    NotificationCid?: number;

  }): Observable<IResponseDto> {

    return this.apiNotificationClientRemoveGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiNotificationClientSaveNewAdminPost
   */
  static readonly ApiNotificationClientSaveNewAdminPostPath = '/api/NotificationClient/SaveNewAdmin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationClientSaveNewAdminPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationClientSaveNewAdminPost$Plain$Response(params?: {
      body?: NotificationDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationClientService.ApiNotificationClientSaveNewAdminPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiNotificationClientSaveNewAdminPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationClientSaveNewAdminPost$Plain(params?: {
      body?: NotificationDto
  }): Observable<IResponseDto> {

    return this.apiNotificationClientSaveNewAdminPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationClientSaveNewAdminPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationClientSaveNewAdminPost$Json$Response(params?: {
      body?: NotificationDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationClientService.ApiNotificationClientSaveNewAdminPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiNotificationClientSaveNewAdminPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationClientSaveNewAdminPost$Json(params?: {
      body?: NotificationDto
  }): Observable<IResponseDto> {

    return this.apiNotificationClientSaveNewAdminPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

}
