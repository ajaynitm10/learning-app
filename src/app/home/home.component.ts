import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resolvedData: any;

  constructor(private router: Router, private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
  }

  OnClick() {
    console.log('hi');
    this.router.navigate(['../','property'], {relativeTo: this.route});
  }

  getToken() {
    this.appService.getToken().subscribe((data) => {
      console.log(data)
    })
  }


}
