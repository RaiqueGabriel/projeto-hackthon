import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FmProdutosRoutingModule } from './fm-produtos-routing.module';
import { PesquisarProdutoComponent } from './components/pesquisar-produto/pesquisar-produto.component';
import { AdicionarProdutoComponent } from './components/adicionar-produto/adicionar-produto.component';

@NgModule({
  declarations: [PesquisarProdutoComponent, AdicionarProdutoComponent],
  imports: [
    CommonModule,
    FmProdutosRoutingModule
  ]
})
export class FmProdutosModule { }
