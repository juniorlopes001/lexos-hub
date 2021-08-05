import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumptionComponent } from './consumption.component';
import { SharedModule } from '../../shared/shared.module';
import { ConsumptionRoutingModule } from './consumption-routing.module';



@NgModule({
  declarations: [ConsumptionComponent],
  imports: [
    SharedModule,
    CommonModule,
    ConsumptionRoutingModule
  ]
})
export class ConsumptionModule { }
