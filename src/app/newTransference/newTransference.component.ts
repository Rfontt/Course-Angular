import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Transfer } from "../models/transfer.model";
import { TransferService } from "../services/transfer.service";

@Component({
    selector: 'app-new-transference',
    templateUrl: './newTransference.component.html',
    styleUrls: ['./newTransfarence.component.scss']
})
export class NewTransferenceComponent {

    @Output() toHandleTranfer = new EventEmitter<any>();

    value!: number;
    destiny!: number;

    constructor(private service: TransferService, private router: Router ) {

    }

    transfer() {
        const valueEmit: Transfer = { value: this.value, destiny: this.destiny };
        
        this.service.addNewTransfer(valueEmit)
        .subscribe(result => {
            console.log(result);
            this.cleanFields();
            this.router.navigateByUrl('extract');

        },
        error => console.log(error)
        );
    }

    cleanFields() {
        this.value = 0;
        this.destiny = 0;
    }
}