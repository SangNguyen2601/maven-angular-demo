import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent implements OnInit {
  message: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/hello', { responseType: 'text' })
      .subscribe(data => this.message = data);
  }
}
