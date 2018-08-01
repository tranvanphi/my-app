import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';


@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public static subcribeChangeHead = new Subject();
}
