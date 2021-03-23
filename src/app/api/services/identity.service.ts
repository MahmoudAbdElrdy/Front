/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ClientTokenDto } from '../models/client-token-dto';
import { ForgetPasswordEmail } from '../models/forget-password-email';
import { IResponseDto } from '../models/i-response-dto';
import { ResponseDto } from '../models/response-dto';
import { UpdateUser } from '../models/update-user';
import { UserLoginRequest } from '../models/user-login-request';
import { UserRegisteration } from '../models/user-registeration';
import { UserVerfayResetPasswordCode } from '../models/user-verfay-reset-password-code';

@Injectable({
  providedIn: 'root',
})
export class IdentityService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiRegisterPost
   */
  static readonly ApiRegisterPostPath = '/api/Register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRegisterPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRegisterPost$Plain$Response(params?: {
      body?: UserRegisteration
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.ApiRegisterPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiRegisterPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRegisterPost$Plain(params?: {
      body?: UserRegisteration
  }): Observable<IResponseDto> {

    return this.apiRegisterPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRegisterPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRegisterPost$Json$Response(params?: {
      body?: UserRegisteration
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.ApiRegisterPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiRegisterPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRegisterPost$Json(params?: {
      body?: UserRegisteration
  }): Observable<IResponseDto> {

    return this.apiRegisterPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation apiGetRolesPost
   */
  static readonly ApiGetRolesPostPath = '/api/GetRoles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGetRolesPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGetRolesPost$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<ResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.ApiGetRolesPostPath, 'post');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGetRolesPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGetRolesPost$Plain(params?: {

  }): Observable<ResponseDto> {

    return this.apiGetRolesPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ResponseDto>) => r.body as ResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGetRolesPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGetRolesPost$Json$Response(params?: {

  }): Observable<StrictHttpResponse<ResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.ApiGetRolesPostPath, 'post');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGetRolesPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGetRolesPost$Json(params?: {

  }): Observable<ResponseDto> {

    return this.apiGetRolesPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ResponseDto>) => r.body as ResponseDto)
    );
  }

  /**
   * Path part for operation apiLoginPost
   */
  static readonly ApiLoginPostPath = '/api/Login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLoginPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLoginPost$Plain$Response(params?: {
      body?: UserLoginRequest
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.ApiLoginPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiLoginPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLoginPost$Plain(params?: {
      body?: UserLoginRequest
  }): Observable<IResponseDto> {

    return this.apiLoginPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLoginPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLoginPost$Json$Response(params?: {
      body?: UserLoginRequest
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.ApiLoginPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiLoginPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLoginPost$Json(params?: {
      body?: UserLoginRequest
  }): Observable<IResponseDto> {

    return this.apiLoginPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation foregetPasswordPost
   */
  static readonly ForegetPasswordPostPath = '/ForegetPassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foregetPasswordPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  foregetPasswordPost$Plain$Response(params?: {
      body?: ForgetPasswordEmail
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.ForegetPasswordPostPath, 'post');
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
   * To access the full response (for headers, for example), `foregetPasswordPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  foregetPasswordPost$Plain(params?: {
      body?: ForgetPasswordEmail
  }): Observable<IResponseDto> {

    return this.foregetPasswordPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foregetPasswordPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  foregetPasswordPost$Json$Response(params?: {
      body?: ForgetPasswordEmail
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.ForegetPasswordPostPath, 'post');
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
   * To access the full response (for headers, for example), `foregetPasswordPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  foregetPasswordPost$Json(params?: {
      body?: ForgetPasswordEmail
  }): Observable<IResponseDto> {

    return this.foregetPasswordPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation resetPasswordVerfayCodePost
   */
  static readonly ResetPasswordVerfayCodePostPath = '/resetPasswordVerfayCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetPasswordVerfayCodePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  resetPasswordVerfayCodePost$Plain$Response(params?: {
      body?: UserVerfayResetPasswordCode
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.ResetPasswordVerfayCodePostPath, 'post');
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
   * To access the full response (for headers, for example), `resetPasswordVerfayCodePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  resetPasswordVerfayCodePost$Plain(params?: {
      body?: UserVerfayResetPasswordCode
  }): Observable<IResponseDto> {

    return this.resetPasswordVerfayCodePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetPasswordVerfayCodePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  resetPasswordVerfayCodePost$Json$Response(params?: {
      body?: UserVerfayResetPasswordCode
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.ResetPasswordVerfayCodePostPath, 'post');
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
   * To access the full response (for headers, for example), `resetPasswordVerfayCodePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  resetPasswordVerfayCodePost$Json(params?: {
      body?: UserVerfayResetPasswordCode
  }): Observable<IResponseDto> {

    return this.resetPasswordVerfayCodePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation resetPasswordPost
   */
  static readonly ResetPasswordPostPath = '/ResetPassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetPasswordPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetPasswordPost$Plain$Response(params?: {
    Email?: null | string;
    Password?: null | string;
    ConfirmPassword?: null | string;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.ResetPasswordPostPath, 'post');
    if (params) {

      rb.query('Email', params.Email, {});
      rb.query('Password', params.Password, {});
      rb.query('ConfirmPassword', params.ConfirmPassword, {});

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
   * To access the full response (for headers, for example), `resetPasswordPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetPasswordPost$Plain(params?: {
    Email?: null | string;
    Password?: null | string;
    ConfirmPassword?: null | string;

  }): Observable<IResponseDto> {

    return this.resetPasswordPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetPasswordPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetPasswordPost$Json$Response(params?: {
    Email?: null | string;
    Password?: null | string;
    ConfirmPassword?: null | string;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.ResetPasswordPostPath, 'post');
    if (params) {

      rb.query('Email', params.Email, {});
      rb.query('Password', params.Password, {});
      rb.query('ConfirmPassword', params.ConfirmPassword, {});

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
   * To access the full response (for headers, for example), `resetPasswordPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetPasswordPost$Json(params?: {
    Email?: null | string;
    Password?: null | string;
    ConfirmPassword?: null | string;

  }): Observable<IResponseDto> {

    return this.resetPasswordPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation resetPasswordMobilePost
   */
  static readonly ResetPasswordMobilePostPath = '/ResetPasswordMobile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetPasswordMobilePost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetPasswordMobilePost$Plain$Response(params?: {
    PhoneNmber?: null | string;
    Password?: null | string;
    ConfirmPassword?: null | string;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.ResetPasswordMobilePostPath, 'post');
    if (params) {

      rb.query('PhoneNmber', params.PhoneNmber, {});
      rb.query('Password', params.Password, {});
      rb.query('ConfirmPassword', params.ConfirmPassword, {});

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
   * To access the full response (for headers, for example), `resetPasswordMobilePost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetPasswordMobilePost$Plain(params?: {
    PhoneNmber?: null | string;
    Password?: null | string;
    ConfirmPassword?: null | string;

  }): Observable<IResponseDto> {

    return this.resetPasswordMobilePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetPasswordMobilePost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetPasswordMobilePost$Json$Response(params?: {
    PhoneNmber?: null | string;
    Password?: null | string;
    ConfirmPassword?: null | string;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.ResetPasswordMobilePostPath, 'post');
    if (params) {

      rb.query('PhoneNmber', params.PhoneNmber, {});
      rb.query('Password', params.Password, {});
      rb.query('ConfirmPassword', params.ConfirmPassword, {});

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
   * To access the full response (for headers, for example), `resetPasswordMobilePost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetPasswordMobilePost$Json(params?: {
    PhoneNmber?: null | string;
    Password?: null | string;
    ConfirmPassword?: null | string;

  }): Observable<IResponseDto> {

    return this.resetPasswordMobilePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation checkPhonePost
   */
  static readonly CheckPhonePostPath = '/checkPhone';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `checkPhonePost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  checkPhonePost$Plain$Response(params?: {
    Phone?: null | string;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.CheckPhonePostPath, 'post');
    if (params) {

      rb.query('Phone', params.Phone, {});

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
   * To access the full response (for headers, for example), `checkPhonePost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  checkPhonePost$Plain(params?: {
    Phone?: null | string;

  }): Observable<IResponseDto> {

    return this.checkPhonePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `checkPhonePost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  checkPhonePost$Json$Response(params?: {
    Phone?: null | string;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.CheckPhonePostPath, 'post');
    if (params) {

      rb.query('Phone', params.Phone, {});

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
   * To access the full response (for headers, for example), `checkPhonePost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  checkPhonePost$Json(params?: {
    Phone?: null | string;

  }): Observable<IResponseDto> {

    return this.checkPhonePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation verifyAccountPost
   */
  static readonly VerifyAccountPostPath = '/verifyAccount';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `verifyAccountPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  verifyAccountPost$Plain$Response(params?: {
    Phone?: null | string;
    resetPasswordCode?: null | string;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.VerifyAccountPostPath, 'post');
    if (params) {

      rb.query('Phone', params.Phone, {});
      rb.query('resetPasswordCode', params.resetPasswordCode, {});

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
   * To access the full response (for headers, for example), `verifyAccountPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  verifyAccountPost$Plain(params?: {
    Phone?: null | string;
    resetPasswordCode?: null | string;

  }): Observable<IResponseDto> {

    return this.verifyAccountPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `verifyAccountPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  verifyAccountPost$Json$Response(params?: {
    Phone?: null | string;
    resetPasswordCode?: null | string;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.VerifyAccountPostPath, 'post');
    if (params) {

      rb.query('Phone', params.Phone, {});
      rb.query('resetPasswordCode', params.resetPasswordCode, {});

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
   * To access the full response (for headers, for example), `verifyAccountPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  verifyAccountPost$Json(params?: {
    Phone?: null | string;
    resetPasswordCode?: null | string;

  }): Observable<IResponseDto> {

    return this.verifyAccountPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation getProfileGet
   */
  static readonly GetProfileGetPath = '/GetProfile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProfileGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfileGet$Plain$Response(params?: {
    UserId?: null | string;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.GetProfileGetPath, 'get');
    if (params) {

      rb.query('UserId', params.UserId, {});

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
   * To access the full response (for headers, for example), `getProfileGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfileGet$Plain(params?: {
    UserId?: null | string;

  }): Observable<IResponseDto> {

    return this.getProfileGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProfileGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfileGet$Json$Response(params?: {
    UserId?: null | string;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.GetProfileGetPath, 'get');
    if (params) {

      rb.query('UserId', params.UserId, {});

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
   * To access the full response (for headers, for example), `getProfileGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfileGet$Json(params?: {
    UserId?: null | string;

  }): Observable<IResponseDto> {

    return this.getProfileGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation updateUserPost
   */
  static readonly UpdateUserPostPath = '/UpdateUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateUserPost$Plain$Response(params?: {
      body?: UpdateUser
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.UpdateUserPostPath, 'post');
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
   * To access the full response (for headers, for example), `updateUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateUserPost$Plain(params?: {
      body?: UpdateUser
  }): Observable<IResponseDto> {

    return this.updateUserPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateUserPost$Json$Response(params?: {
      body?: UpdateUser
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.UpdateUserPostPath, 'post');
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
   * To access the full response (for headers, for example), `updateUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateUserPost$Json(params?: {
      body?: UpdateUser
  }): Observable<IResponseDto> {

    return this.updateUserPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation uploadImagePost
   */
  static readonly UploadImagePostPath = '/UploadImage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadImagePost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  uploadImagePost$Plain$Response(params?: {
    ApplicationUserId?: null | string;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.UploadImagePostPath, 'post');
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
   * To access the full response (for headers, for example), `uploadImagePost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uploadImagePost$Plain(params?: {
    ApplicationUserId?: null | string;

  }): Observable<IResponseDto> {

    return this.uploadImagePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadImagePost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  uploadImagePost$Json$Response(params?: {
    ApplicationUserId?: null | string;

  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.UploadImagePostPath, 'post');
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
   * To access the full response (for headers, for example), `uploadImagePost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uploadImagePost$Json(params?: {
    ApplicationUserId?: null | string;

  }): Observable<IResponseDto> {

    return this.uploadImagePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * Path part for operation updatePost
   */
  static readonly UpdatePostPath = '/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updatePost$Plain$Response(params?: {
      body?: ClientTokenDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.UpdatePostPath, 'post');
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
   * To access the full response (for headers, for example), `updatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updatePost$Plain(params?: {
      body?: ClientTokenDto
  }): Observable<IResponseDto> {

    return this.updatePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updatePost$Json$Response(params?: {
      body?: ClientTokenDto
  }): Observable<StrictHttpResponse<IResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.UpdatePostPath, 'post');
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
   * To access the full response (for headers, for example), `updatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updatePost$Json(params?: {
      body?: ClientTokenDto
  }): Observable<IResponseDto> {

    return this.updatePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IResponseDto>) => r.body as IResponseDto)
    );
  }

}
