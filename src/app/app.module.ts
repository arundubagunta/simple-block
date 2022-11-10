import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockChainService } from './service/block-chain.service';
import { FarmerEntryComponent } from './farmer-entry/farmer-entry.component';
import { TransportEntryComponent } from './transport-entry/transport-entry.component';
import { WarehouseEntryComponent } from './warehouse-entry/warehouse-entry.component';
import { StoreEntryComponent } from './store-entry/store-entry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FarmerEntryComponent,
    TransportEntryComponent,
    WarehouseEntryComponent,
    StoreEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [    
    BlockChainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
