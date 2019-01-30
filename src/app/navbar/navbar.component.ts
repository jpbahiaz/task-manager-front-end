import { Component } from '@angular/core';

import { AuthService } from 'app/shared/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent{

  constructor(private authService: AuthService){}
  
}