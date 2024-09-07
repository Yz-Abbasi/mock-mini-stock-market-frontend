import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Stock';

  showHeader : boolean = true;

  constructor(private router : Router) {
    this.router.events.subscribe((value) => {
      if (value instanceof NavigationEnd)
      {
        if (value.url == '/Login')
        {
          this.showHeader = false;
        }
        else
        {
          this.showHeader = true;
        }
      }
    });
  }
}
