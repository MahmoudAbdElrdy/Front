/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
 rootUrl: string = 'http://localhost:50217';
  //rootUrl: string = 'http://webapi.topiata.com';
  //http://webapi.topiata.com/
}

/**
 * Parameters for `ApiModule.forRoot()`
 */
export interface ApiConfigurationParams {
  rootUrl?: string;
}
