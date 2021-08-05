import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumptionComponent } from './consumption.component';



const routes: Routes = [
    {
        path: '',
        component: ConsumptionComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class ConsumptionRoutingModule { }
