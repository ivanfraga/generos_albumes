import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { ForgotpasswordComponent } from "./forgotpassword.component"

describe('Reestablecer contraseña', () =>{
    let fixture: ComponentFixture<ForgotpasswordComponent>;
    let component: ForgotpasswordComponent;

    beforeEach(waitForAsync(() =>{
        TestBed.configureTestingModule({
            declarations: [ForgotpasswordComponent],
            imports :[AngularFireAuthModule]

        }).compileComponents()
    }))
    beforeEach(()=>{
        fixture = TestBed.createComponent(ForgotpasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it('envio de correo y reseteo de email', () =>{
       
        expect(component.email).toBe("");
    })
})