import{Injectable} from "@angular/core";
import { CanActivate} from "@angular/router";
import { Observable } from "rxjs";
import { Constants } from "./constants";

@Injectable({
    providedIn:'root'

})
export class AuthGuard implements CanActivate {

    canActivate(): boolean {
        return Constants.isLogin;
    }
}
