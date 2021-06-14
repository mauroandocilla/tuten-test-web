import {Component, OnInit} from '@angular/core';
import {TutenService} from "../../services/tuten.service";
import {Booking} from "../../models/Booking";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  error: any;
  bookings: Booking[] = [];

  filterId = '';
  filterPrice = '';

  constructor(
    private tutenService: TutenService) {
  }

  ngOnInit(): void {
    this.onGetBookings()
  }

  onGetBookings(): void {
    this.tutenService.getBookings("testapis@tuten.cl", "contacto@tuten.cl", "APP_BCK").subscribe(
      data => this.bookings = <Booking[]>data,
      error => {
        this.error = error;
      }
    )
  }
}
