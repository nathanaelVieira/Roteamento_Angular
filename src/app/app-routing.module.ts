import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './componentes/pagina1/pagina1.component'; 
import { Pagina2Component } from './componentes/pagina2/pagina2.component';
import { Pagina3Component } from './componentes/pagina3/pagina3.component'; 
import { Pagina4Component } from './componentes/pagina4/pagina4.component';

const routes: Routes = [
    { path: '', component: Pagina1Component},
	{ path: 'pag1', component: Pagina1Component},
	{ path: 'pag2', component: Pagina2Component},
	{ path: 'pag3', component: Pagina3Component},
	{ path: 'pag4', component: Pagina4Component}
];

/* pag1 =  Apelido */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/* Para cada roteamento que façamos em (routes), os atributos são
(path = caminho) e (component = componente que você deseja colocar) 
 Importate!!

 Para cada roteamento façamos um import logo na parte superior.

 EXEMPLO:
 (import { Pagina }  from .../pasta)

*/