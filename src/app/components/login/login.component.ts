import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ServicoService } from '../../services/servico.service';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private servicoService: ServicoService){}
  onSubmit() {
    if (this.servicoService.login(this.username, this.password)) {
      alert('Login Successful');
    } else {
      alert('Invalid username or password');
    }
  }


}
