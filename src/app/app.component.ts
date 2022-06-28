import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'genre_alb';
  public id: string;
  public name: string;
  public rol: string;
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
  getuserProperties(id:string, name: string, rol: string){
    this.id= id;
    this.name= name;
    this.rol= rol;
    console.log("rol usuario: ", this.rol)
  }
  print(){
    console.log("rol usuario 2: ", this.rol)
  }
}
