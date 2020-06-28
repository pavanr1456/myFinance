import { BanksService } from './banks.service';
import { Component, OnInit } from '@angular/core';
import { BankHeader } from './banks.mode';
@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css'],
})
export class BanksComponent implements OnInit {
  public banks: BankHeader[];
  constructor(public banksService: BanksService) {}

  ngOnInit(): void {
    this.getAllBanks();
  }
  getAllBanks() {
    this.banks = this.banksService.getAllBanks();
  }
}
