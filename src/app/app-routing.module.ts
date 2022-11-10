import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerEntryComponent } from './farmer-entry/farmer-entry.component';
import { StoreEntryComponent } from './store-entry/store-entry.component';
import { TransportEntryComponent } from './transport-entry/transport-entry.component';
import { WarehouseEntryComponent } from './warehouse-entry/warehouse-entry.component';

const routes: Routes = [
  {
    path: 'farmer',
    component: FarmerEntryComponent
  },
  {
    path: 'transport',
    component: TransportEntryComponent
  },
  {
    path: 'warehouse',
    component: WarehouseEntryComponent
  },
  {
    path: 'store',
    component: StoreEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
