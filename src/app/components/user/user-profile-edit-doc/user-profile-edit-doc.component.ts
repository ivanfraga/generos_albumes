import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile-edit-doc',
  templateUrl: './user-profile-edit-doc.component.html',
  styleUrls: ['./user-profile-edit-doc.component.css']
})
export class UserProfileEditDocComponent implements OnInit {

  constructor(public router:Router) { }
  public id=localStorage.getItem("idUser");
  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
  }
  implementation(){
    if(this.id == null){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'El usuario no esta autenticado, por favor inicie sesion',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/login']);
    }
    this.router.navigate(['/userEdit', this.id]);
    
  }

}
