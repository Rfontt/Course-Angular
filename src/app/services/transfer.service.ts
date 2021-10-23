import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transfer } from '../models/transfer.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TransferService {
    private tranfersList!: any[];
    private url = 'http://localhost:3000/bankTransfer';

    constructor(private httpClient: HttpClient) {
        this.tranfersList = [];
    }

    get transfers() {
        return this.tranfersList;
    }

    all(): Observable<Transfer[]> {
        return this.httpClient.get<Transfer[]>(this.url);
    }

    addNewTransfer(transfer: Transfer): Observable<Transfer> {
        this.moisturize(transfer);
        
        return this.httpClient.post<Transfer>(this.url, transfer);
    }

    private moisturize(transfer: any) {
        transfer.date = new Date();
    }
}