import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-doc',
  templateUrl: './login-doc.component.html',
  styleUrls: ['./login-doc.component.css']
})
export class LoginDocComponent implements OnInit {

  constructor(public router:Router) { }
  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
  }
  implementation(){
    
    this.router.navigate(['/login']);
    
  }

}
