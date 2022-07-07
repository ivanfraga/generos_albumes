import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-rol-denied',
  templateUrl: './rol-denied.component.html',
  styleUrls: ['./rol-denied.component.css']
})
export class RolDeniedComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
  }

}
