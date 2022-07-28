import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-doc',
  templateUrl: './register-doc.component.html',
  styleUrls: ['./register-doc.component.css']
})
export class RegisterDocComponent implements OnInit {

  constructor(public router:Router) { }
  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
  }
  implementation(){
    
    this.router.navigate(['/register']);
    
  }

}
