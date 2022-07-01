import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../../services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currencyJSON: any = [];
  usd: string = '';
  eur: string = '';

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    return this.currencyService.getCurrencyForHeader().subscribe(value => {
      this.currencyJSON = JSON.stringify(value);
      this.currencyJSON = JSON.parse(this.currencyJSON);
      this.usd = this.currencyJSON.rates.USD;
      this.eur = this.currencyJSON.rates.EUR;
    })
  }

}
