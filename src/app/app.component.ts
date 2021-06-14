import {Component, OnInit} from '@angular/core';
import {StorageService} from "./services/storage.service";
import {Auth} from "./models/Auth";
import {User} from "./models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isUser: boolean;

  constructor(private storageService: StorageService) {
    this.storageService.currentUserChange.subscribe(value => this.isUser = !!value)
    this.isUser = !!this.storageService.getAuth();
  }

  async onLogout(): Promise<void> {
    await this.storageService.logout();
  }

}
