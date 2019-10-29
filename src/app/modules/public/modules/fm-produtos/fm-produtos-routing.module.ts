import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisarProdutoComponent } from './components/pesquisar-produto/pesquisar-produto.component';
import { AdicionarProdutoComponent } from './components/adicionar-produto/adicionar-produto.component';

const routes: Routes = [
  {
    path : '',
    component: PesquisarProdutoComponent
  },
  {
    path : 'adicionar',
    component: AdicionarProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmProdutosRoutingModule { }
