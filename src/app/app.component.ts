import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  providers: [HttpClient, TestServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'site';
  
  data: any
  
  constructor(private testService: TestServiceService){ }

  ngOnInit(){
    this.testService.fetchData().subscribe({
      next: res => this.data = res
  })}

}
