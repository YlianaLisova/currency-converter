import {Component} from '@angular/core';
import {CurrencyService} from "../../services";

@Component({
  selector: 'app-rates',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {

  currencyJSON: any = [];
  first = 'USD';
  second = 'USD';
  result: number;

  currency1: number;
  currency2: number;

  constructor(private currencyService: CurrencyService) {
  }

  changeFirst(a: string) {
    this.first = a;
    this.currency1 = 0;
    this.currency2 = 0;
  }

  changeSecond(b: string) {
    this.second = b;
    this.currency2 = 0;
    this.currency1 = 0;
  }

  convert() {
    this.currencyService.getCurrency(this.first).subscribe(value => {
      this.currencyJSON = JSON.stringify(value);
      this.currencyJSON = JSON.parse(this.currencyJSON);
      if (this.second === 'USD') {
        this.result = this.currencyJSON.rates.USD
        this.result.toFixed(2)
      }

      if (this.second === 'UAH') {
        this.result = this.currencyJSON.rates.UAH
        this.result.toFixed(2)
      }

      if (this.second === 'EUR') {
        this.result = this.currencyJSON.rates.EUR
        this.result.toFixed(2)
      }

    })
  }
}
