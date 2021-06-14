import {User} from "./User";
import {Location} from "./Location";

export interface Booking {
  bookingId: string;
  tutenUserClient: User;
  bookingTime: string;
  locationId: Location;
  bookingPrice: string;
}
