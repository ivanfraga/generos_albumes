import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-doc',
  templateUrl: './user-profile-doc.component.html',
  styleUrls: ['./user-profile-doc.component.css']
})
export class UserProfileDocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
  }

}
