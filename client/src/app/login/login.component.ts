import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  accountService = inject(AccountService);
  private router = inject(Router);
  model: any = {};

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        const id = response.id;
        this.router.navigateByUrl(`user/${id}`);
      },
      error: _ => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid credentials",
          timer: 2000
        });
      }
    });
    // this.router.navigateByUrl('user/1');
  }

  logout () {
    this.accountService.logout();
    this.router.navigateByUrl('');
  }
}
