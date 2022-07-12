import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-edit-doc',
  templateUrl: './user-profile-edit-doc.component.html',
  styleUrls: ['./user-profile-edit-doc.component.css']
})
export class UserProfileEditDocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
  }

}
