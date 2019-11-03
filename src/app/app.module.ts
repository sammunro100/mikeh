import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContainerOneComponent } from './container-one/container-one.component';
import { ContainerTwoComponent } from './container-two/container-two.component';
import { ContainerThreeComponent } from './container-three/container-three.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContainerOneComponent,
    ContainerTwoComponent,
    ContainerThreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
