import { Component, OnInit } from '@angular/core';
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
    this.userEditForm= this.formBuilder.group({
      id: [''],
      name: [''],
      imageURL: [''],
      image_reference: [''],
    })
   }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id')
    this.authService.getObject(this.id, "users").subscribe( res =>{
      this.user = res;
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
    const id = this.activeRoute.snapshot.paramMap.get('id');   
    this.authService.updateUserProcess(this.userEditForm.value, this._file, this.isChanged, id);
    this.router.navigate(['/userProfile', this.id]);
    console.log(this.userEditForm.value) //podemos ver los valores capturados
    this.isChanged = false;
    this.file.nativeElement.value = "";
  }

  onFilesAdded(target: any) {
    this.isChanged = true;
    const reader = new FileReader();
    reader.onload = () => {
      this.url = reader.result;
    };
    if (target.files.length > 0) {
      this._file = target.files[0];
      reader.readAsDataURL(this._file);
    }
  }
  addFiles() {
    this.file.nativeElement.click();
  }

  redirect(){
    this.router.navigate(['/userProfile', this.id]);
  }

}
