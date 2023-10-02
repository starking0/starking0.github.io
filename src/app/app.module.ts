import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAutomationComponent } from './home-automation/home-automation.component';
import { IndustrialAutomationComponent } from './industrial-automation/industrial-automation.component';
import { CleanEnergyComponent } from './clean-energy/clean-energy.component';
import { IndustrialIotComponent } from './industrial-iot/industrial-iot.component';
import { VirtualRealityComponent } from './virtual-reality/virtual-reality.component';
import { ArtificialInteligenceComponent } from './artificial-inteligence/artificial-inteligence.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeAutomationComponent,
    IndustrialAutomationComponent,
    CleanEnergyComponent,
    IndustrialIotComponent,
    VirtualRealityComponent,
    ArtificialInteligenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
