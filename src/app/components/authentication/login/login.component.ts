import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TutenService} from "../../../services/tuten.service";
import {Router} from "@angular/router";
import {StorageService} from "../../../services/storage.service";
import {Auth} from "../../../models/Auth";
import {User} from "../../../models/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: Boolean = false;
  error: any;

  constructor(private formBuilder: FormBuilder,
              private tutenService: TutenService,
              private storageService: StorageService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      pass: ['', Validators.required],
      app: ['APP_BCK', Validators.required],
    })
  }

  onLogin(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.tutenService.login(<Auth>(this.loginForm.value)).subscribe(
        data => this.setUser(<User>data),
        error => {
          this.error = error;
        }
      )
    }
  }

  private async setUser(user: User) {
    this.storageService.setAuth(user);
    await this.router.navigate(['/booking']);
  }

}
