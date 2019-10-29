import { Component, OnInit } from '@angular/core';
import { ProdutosModel } from '../../models/produto.model';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-pesquisar-produto',
  templateUrl: './pesquisar-produto.component.html',
  styleUrls: ['./pesquisar-produto.component.css']
})
export class PesquisarProdutoComponent implements OnInit {

  produtos: ProdutosModel[] = [];

  constructor(
    private produtosService: ProdutosService
  ) { }

  ngOnInit() {
    this.produtosService.getProdutos().subscribe(listaProdutos => this.produtos = listaProdutos)
  }

  addCarrinho(produto: ProdutosModel){
    this.produtosService.getProdutoById(produto.id)
  }
}
