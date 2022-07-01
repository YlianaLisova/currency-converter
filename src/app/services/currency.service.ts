import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpClient: HttpClient) { }

  getCurrency(country1: string) {
    return this.httpClient.get(urls.latest+ "?base=" + country1)
  }
  getCurrencyForHeader() {
    return this.httpClient.get(`${urls.latest}?base=UAH`)
  }
}
