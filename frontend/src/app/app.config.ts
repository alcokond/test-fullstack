import { provideHttpClient } from '@angular/common/http'
import { provideRouter } from '@angular/router'
import { importProvidersFrom } from '@angular/core'
import { provideAnimations } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'

import { ClienteListComponent } from './components/cliente-list/cliente-list'
import { ClienteFormComponent } from './components/cliente-form/cliente-form'

export const appConfig = {
  providers: [
    provideRouter([
      { path: '', component: ClienteListComponent },
      { path: 'crear', component: ClienteFormComponent },
      { path: 'editar/:id', component: ClienteFormComponent }
    ]),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(FormsModule)
  ]
}
