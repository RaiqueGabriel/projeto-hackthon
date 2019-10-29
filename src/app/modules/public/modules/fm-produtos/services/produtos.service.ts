import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProdutosModel } from '../models/produto.model';
import { Observable } from 'rxjs';

@Injectable()
export class ProdutosService {

  constructor(
    private http: HttpClient
  ) { }

  getProdutos() : Observable<ProdutosModel[]>{
    return this.http.get<ProdutosModel[]>('http://localhost:3000/produtos');
  }

  deleteProdutos(modelo:ProdutosModel, id:number) : Observable<ProdutosModel[]>{
    return this.http.delete<ProdutosModel[]>('http://localhost:3000/produtos' + id)
  }

  updateProdutos(modelo:ProdutosModel, id:number): Observable<ProdutosModel[]>{
    return this.http.put<ProdutosModel[]>('http://localhost:3000/produtos' + id, modelo)
  }

  addProduto(produto){
    return this.http.post('http://localhost:3000/produtos',produto)
  }

  getProdutoById(id:number): Observable<ProdutosModel[]>{
    return this.http.get<ProdutosModel[]>('http://localhost:3000/produtos' + id)
  }
}
