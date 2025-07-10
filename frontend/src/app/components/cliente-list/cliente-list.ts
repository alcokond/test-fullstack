import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClienteService } from '../../services/cliente'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-cliente-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cliente-list.html'
})
export class ClienteListComponent {
  private clienteService = inject(ClienteService)

  clientes: any[] = []

  search: string = ''
  estado: string = ''
  page: number = 1
  size: number = 10
  total: number = 0
  totalPages: number = 1

  constructor() {
    this.cargarClientes()
  }

  cargarClientes() {
    this.clienteService.getClientes({
      search: this.search,
      estado: this.estado,
      page: this.page,
      size: this.size
    }).subscribe(res => {
      this.clientes = res.data || res
      this.total = res.total || 0
      this.totalPages = Math.ceil(this.total / this.size)
    })
  }

  siguiente() {
    this.page++
    this.cargarClientes()
  }

  anterior() {
    if (this.page > 1) {
      this.page--
      this.cargarClientes()
    }
  }

  eliminar(id: string) {
    if (confirm('¿Estás seguro de eliminar este cliente?')) {
      this.clienteService.eliminarCliente(id).subscribe(() => this.cargarClientes())
    }
  }

  exportarExcel() {
    this.clienteService.exportarExcel(this.clientes)
  }

  exportarPDF() {
    this.clienteService.exportarPDF(this.clientes)
  }
}
