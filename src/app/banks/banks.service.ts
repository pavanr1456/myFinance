import { Injectable } from '@angular/core';
import { BankHeader } from './banks.mode';
@Injectable({
  providedIn: 'root',
})
export class BanksService {
  private banks: BankHeader[];
  constructor() {}

  addNewBank(header: BankHeader) {
    this.banks.push(header);
  }

  getAllBanks() {
    return this.banks;
  }
}
