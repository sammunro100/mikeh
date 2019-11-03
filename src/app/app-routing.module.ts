import { ContainerOneComponent } from './container-one/container-one.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerTwoComponent } from './container-two/container-two.component';
import { ContainerThreeComponent } from './container-three/container-three.component';

const routes: Routes = [
{path: '', component: NavigationComponent},
{path: 'one', component: ContainerOneComponent},
{path: 'two', component: ContainerTwoComponent},
{path: 'three', component: ContainerThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
