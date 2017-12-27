import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../services/app.service';
@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  resolvedData: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.resolvedData = this.route.snapshot.data['tokenValue'];
    console.log(this.resolvedData);
  }

}
