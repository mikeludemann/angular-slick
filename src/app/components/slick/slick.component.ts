import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'slick',
  templateUrl: './slick.component.html',
  styleUrls: ['./slick.component.css']
})
export class SlickComponent implements OnInit {

  @Input() element: string;
  @Input() options: string;

  @Input() ngStyle: { [key: string]: string; }

  @ViewChild('carousel') el: ElementRef;

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $(this.element).slick(this.options);
    });

  }

}
