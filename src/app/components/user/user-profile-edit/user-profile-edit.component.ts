import { Component, OnInit } from '@angular/core';
//importar servicio
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewChild } from "@angular/core";

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})
export class UserProfileEditComponent implements OnInit {
  public userEditForm: FormGroup;
  isChanged = false;
  @ViewChild("file") file;
  files: Set<File> = new Set();
  _file;
  user: any;
  id:any;
  public url: any;
  constructor(
    public authService: AuthService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    public router: Router
  ) {
    //declarar campos del formulario reactivo
    this.userEditForm= this.formBuilder.group({
      id: [''],
      name: [''],
      imageURL: [''],
      image_reference: [''],
    })
   }
   //función inicializadora
  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
    //obtener el id de la ruta
    this.id = localStorage.getItem("idUser");
    //obtener el usuario segun el id
    this.authService.getObject(this.id, "users").subscribe( res =>{
      //asignación del usuario
      this.user = res;
      //inicializar los campos del formulario reactivo
      this.userEditForm = this.formBuilder.group({
        id: [this.user.id],
        name: [this.user.name],
        imageURL: [this.user.imageURL],
        image_reference: [this.user.image_reference],
      })
      this.url= this.user.imageURL;

    })
  }
  onSubmit() {
    //obtener id de la ruta
    const id = localStorage.getItem("idUser");  
    //cargar los cambios realizados 
    this.authService.updateUserProcess(this.userEditForm.value, this._file, this.isChanged, id);
    //redireccionar a la vista del perfil
    this.router.navigate(['/userProfile', this.id]);
    console.log(this.userEditForm.value) //podemos ver los valores capturados
    this.isChanged = false;
    this.file.nativeElement.value = "";
  }
  //función para transformar la imagen subida a url local
  onFilesAdded(target: any) {
    this.isChanged = true;
    const reader = new FileReader();//lector de archivos
    //función para cargar imagen subida y presentarla al usuario
    reader.onload = () => {
      this.url = reader.result;
    };
    if (target.files.length > 0) {
      this._file = target.files[0];
      //asignación de url local a _file
      reader.readAsDataURL(this._file);
    }
  }
  addFiles() {
    this.file.nativeElement.click();
  }

  redirect(){
    this.router.navigate(['/userProfile', this.id]);
  }

  emptyFields(field: string){
    if (this.userEditForm.get(field)?.hasError('required')) {
      return 'El campo es obligatorio';
    }
   
    return this.userEditForm.get(field)? 'Algun exidente ocurrió' : '';
  }

  get emptyName(){
    return this.userEditForm.get('name')?.invalid && this.userEditForm.get('name')?.touched
  }

}
