
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMiapiComponent } from './pages/list-miapi/list-miapi.component';
import { JujutsuNuevoComponent } from './pages/jujutsu-nuevo/jujutsu-nuevo.component';
import { JujutsuEditarComponent } from './pages/jujutsu-editar/jujutsu-editar.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path:'list', component:ListMiapiComponent},
  {path:'new', component:JujutsuNuevoComponent},
  {path:'edit/:id', component:JujutsuEditarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiapiRoutingModule { }
