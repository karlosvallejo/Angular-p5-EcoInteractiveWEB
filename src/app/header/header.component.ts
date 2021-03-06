import {Component, HostBinding, OnInit} from '@angular/core';
import {fadeInAnimation} from '../_animations/fade-in.animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [fadeInAnimation]
})
export class HeaderComponent implements OnInit {
  @HostBinding('@fadeInAnimation') fadeInAnimation = '';

  constructor() { }

  ngOnInit() {
  }

}
