import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { DeputadoService } from '../deputado-service';
import { Deputado } from '../deputado';

@Component({
  selector: 'app-consulta-deputados',
  imports: [ReactiveFormsModule],
  templateUrl: './consulta-deputados.html',
  styleUrl: './consulta-deputados.scss',
})
export class ConsultaDeputados {

  readonly #deputadoService = inject(DeputadoService)

  protected deputados = signal<Deputado[]>([])
  protected buscaRealizada = signal(false)

  protected formBusca = new FormGroup({
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ])
  })

  constructor() {
    this.#deputadoService.obterTodos().subscribe(
      res => {
        this.deputados.set(res.dados)
      }
    )
  }

  buscar() {
    if (this.formBusca.invalid) {
      this.formBusca.markAllAsTouched()
      return
    }

    const nome = this.formBusca.value.nome

    this.#deputadoService.obterDeputadosPorNome(nome!).subscribe(
      res => {
        this.deputados.set(res.dados)
        this.buscaRealizada.set(true)
      }
    )
  }
}