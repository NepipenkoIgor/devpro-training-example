import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  @Output()
  public searchByTerm = new EventEmitter();

  public search(s: string) {
    this.searchByTerm.emit(s);
  }

}
