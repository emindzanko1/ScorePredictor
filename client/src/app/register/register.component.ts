import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  accountService = inject(AccountService);
  private router = inject(Router);
  model: any = {};

  register() {
    this.accountService.register(this.model).subscribe({
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
    })
  }
}
