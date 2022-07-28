import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword-doc',
  templateUrl: './forgotpassword-doc.component.html',
  styleUrls: ['./forgotpassword-doc.component.css']
})
export class ForgotpasswordDocComponent implements OnInit {

  constructor(public router:Router) { }
  public id=localStorage.getItem("idUser");
  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
  }
  implementation(){
    
    this.router.navigate(['/forgotPassword']);
    
  }

}
