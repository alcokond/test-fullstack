import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute, RouterModule, Router } from '@angular/router'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { ClienteService } from '../../services/cliente'

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './cliente-form.html'
})
export class ClienteFormComponent {
  private fb = inject(FormBuilder)
  private route = inject(ActivatedRoute)
  private router = inject(Router)
  private clienteService = inject(ClienteService)

  form = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', Validators.required],
    activo: [true],
    imagen: [null]
  })

  isEdit = false
  id: string | null = null
  previewUrl: string | ArrayBuffer | null = null

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    if (this.id) {
      this.isEdit = true
      this.clienteService.getCliente(this.id).subscribe(cliente => {
        this.form.patchValue(cliente)
        this.previewUrl = cliente.imagen ? `http://localhost:3000${cliente.imagen}` : null
      })
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0]
    this.form.patchValue({ imagen: file })

    const reader = new FileReader()
    reader.onload = () => this.previewUrl = reader.result
    reader.readAsDataURL(file)
  }

  submit() {
    if (this.form.invalid) return

    const formData = new FormData()
    Object.entries(this.form.value).forEach(([key, value]) => {
      if (value !== null) formData.append(key, value as string | Blob)
    })

    const request = this.isEdit
      ? this.clienteService.editarCliente(this.id!, formData)
      : this.clienteService.crearCliente(formData)

    request.subscribe(() => this.router.navigate(['/']))
  }
}
