import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  accountService = inject(AccountService);
  private router = inject(Router);
  showNavbar = true;

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

  ngOnInit() {
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe((event: NavigationEnd) => {
    //   this.showNavbar = /^\/user\/(10|[1-9])$/.test(event.url) || event.url === '/matches';
    // });
  }

  logout () {
    this.accountService.logout();
    this.router.navigateByUrl('');
  }
}
