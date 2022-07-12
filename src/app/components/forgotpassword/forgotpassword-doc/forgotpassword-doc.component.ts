import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword-doc',
  templateUrl: './forgotpassword-doc.component.html',
  styleUrls: ['./forgotpassword-doc.component.css']
})
export class ForgotpasswordDocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
  }

}
