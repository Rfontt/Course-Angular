import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';
import { ExtractComponent } from "./extract/extract.component";
import { NewTransferenceComponent } from "./newTransference/newTransference.component";

export const routes: Routes = [
    { path: '', redirectTo: 'extract', pathMatch: 'full' },
    { path: 'extract', component: ExtractComponent },
    { path: 'new-transference', component: NewTransferenceComponent }
]

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)

export class AppRoutingModule {}