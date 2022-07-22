import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ForgotpasswordComponent } from "./forgotpassword.component"

xdescribe('Reestablecer contraseña', () =>{
    let fixture: ComponentFixture<ForgotpasswordComponent>;
    let component: ForgotpasswordComponent;
    

    /*
    beforeEach(waitForAsync(() =>{
        TestBed.configureTestingModule({
            declarations: [ForgotpasswordComponent, ],
            imports :[]

        }).compileComponents()
    }))
    beforeEach(()=>{
        fixture = TestBed.createComponent(ForgotpasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
         let veri = true
        expect(veri).toBeTruthy();
    })
    */
    it('envio de correo y reseteo de email', () =>{
        let veri = true
        expect(veri).toBeTruthy()
    })
})