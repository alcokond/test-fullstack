import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { saveAs } from 'file-saver'
import * as XLSX from 'xlsx'
import jsPDF from 'jspdf'

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private http = inject(HttpClient)
  private baseUrl = 'http://localhost:3000/api/clientes'

  getClientes(filtros: { search?: string, estado?: string, page?: number, size?: number }): Observable<{ data: any[], total: number }> {
    const params = new URLSearchParams()
    if (filtros.search) params.append('search', filtros.search)
    if (filtros.estado) params.append('estado', filtros.estado)
    if (filtros.page) params.append('page', filtros.page.toString())
    if (filtros.size) params.append('size', filtros.size.toString())
    const query = params.toString() ? `?${params.toString()}` : ''
    return this.http.get<{ data: any[], total: number }>(`${this.baseUrl}${query}`)
  }

  getCliente(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }

  crearCliente(data: FormData): Observable<any> {
    return this.http.post<any>(this.baseUrl, data)
  }

  editarCliente(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, data)
  }

  eliminarCliente(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`)
  }

  exportarExcel(clientes: any[]): void {
    const worksheet = XLSX.utils.json_to_sheet(clientes)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Clientes')
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' })
    saveAs(blob, 'clientes.xlsx')
  }

  exportarPDF(clientes: any[]): void {
    const doc = new jsPDF()
    doc.setFontSize(14)
    doc.text('Lista de Clientes', 20, 20)

    let y = 30
    clientes.forEach((c, i) => {
      doc.setFontSize(10)
      doc.text(`${i + 1}. ${c.nombre} - ${c.email} - ${c.telefono}`, 20, y)
      y += 8
    })

    doc.save('clientes.pdf')
  }
}
