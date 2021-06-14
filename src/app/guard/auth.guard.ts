import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {StorageService} from "../services/storage.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private storageService: StorageService) {
  }

  async canActivate() {
    if (this.storageService.getAuth()) {
      return true;
    }

    await this.router.navigate(['/login']);
    return false;
  }
}
