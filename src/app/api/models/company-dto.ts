/* tslint:disable */
import { UserRegisteration } from './user-registeration';
export class CompanyDto {
  CompanyDescription?: null | string;
  Id?: number;
  Latitude?: null | string;
  Longitude?: null | string;
  User?: UserRegisteration=new UserRegisteration();
}
