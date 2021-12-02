import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  articles: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.get().subscribe((data: any) => {
      console.log(data);
      this.articles = data['articles'];
    });
  }

}
