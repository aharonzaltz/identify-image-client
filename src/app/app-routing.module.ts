import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IdentifyAnimalComponent} from "../components/identify-animal/identify-animal.component";

export enum Paths {
  identifyAnimals = "identify-animals"
}

const routes: Routes = [
  {path: Paths.identifyAnimals, component: IdentifyAnimalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
