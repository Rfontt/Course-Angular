import { Component, Input, OnInit } from '@angular/core';
import { Transfer } from '../models/transfer.model';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  bankTransfer!: any[];

  constructor(private service: TransferService) { }

  ngOnInit(): void {
   this.service.all().subscribe((transfers: Transfer[]) => {
     console.table(transfers);
     this.bankTransfer = transfers;
   })
  }

}
