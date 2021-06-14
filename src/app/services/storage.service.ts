import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../models/User";
import {Subject} from "rxjs";

const STORAGE_USR = 'usr'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private currentUser: User | null = null;

  currentUserChange: Subject<User | null> = new Subject<User | null>();

  constructor(private router: Router) {
    this.currentUser = this.loadAuth();
  }

  loadAuth(): User | null {
    const userStr = localStorage.getItem(STORAGE_USR);
    return (userStr) ? <User>JSON.parse(userStr) : null;
  }

  setAuth(user: User): void {
    this.currentUserChange.next(user);
    this.currentUser = user;
    localStorage.setItem(STORAGE_USR, JSON.stringify(user));
  }

  getAuth(): User | null {
    return this.currentUser;
  }

  removeAuth(): void {
    this.currentUserChange.next(null);
    localStorage.removeItem(STORAGE_USR);
    this.currentUser = null;
  }

  async logout(): Promise<void> {
    this.removeAuth();
    await this.router.navigate(['/login']);
  }
}
