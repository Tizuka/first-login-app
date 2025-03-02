import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  private validUser = { username: 'username', password: '123' };
  
  login(username: string, password: string): boolean {
    return username === this.validUser.username && password === this.validUser.password;
  }
}
