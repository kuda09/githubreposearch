import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from "@ngrx/effects";

import {LoginRoutingModule} from "./login-routing.module";

import {LoginService} from "./services/login.service";
import {LoginEffectService} from "../store/effects/login-effect.service";

import {LoginComponent} from './components/login/login.component';

@NgModule({
    imports: [
        CommonModule,
        EffectsModule.run(LoginEffectService),
        LoginRoutingModule
    ],
    declarations: [LoginComponent],
    providers: [
        LoginService,
    ]
})
export class LoginModule {
}
