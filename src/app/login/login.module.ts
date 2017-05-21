import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {LoginRoutingModule} from "./login-routing.module";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {EffectsModule} from "@ngrx/effects";
import {LoginService} from "./services/login.service";
import {StorageService} from "../shared/services/storage.service";
import {LoginEffectService} from "../store/effects/login-effect.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        EffectsModule.run(LoginEffectService),
        ReactiveFormsModule,
        LoginRoutingModule
    ],
    declarations: [LoginComponent],
    providers: [
        LoginService,
        StorageService
    ]
})
export class LoginModule {
}
