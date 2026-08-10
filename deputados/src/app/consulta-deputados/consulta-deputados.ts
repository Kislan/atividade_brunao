import { Component, inject, signal } from '@angular/core';
import { DeputadoService } from '../deputado-service';
import { Deputado } from '../deputado';
import et from '@angular/common/locales/extra/et';

@Component({
  selector: 'app-consulta-deputados',
  imports: [],
  templateUrl: './consulta-deputados.html',
  styleUrl: './consulta-deputados.scss',
})
export class ConsultaDeputados {
  readonly #deputadoService = inject(DeputadoService)
  protected deputados = signal<Deputado[] | undefined>(undefined);

  constructor() {
    this.#deputadoService.obterTodos().subscribe(res => {
      this.deputados.set(res.dados)
    });
  }
}
