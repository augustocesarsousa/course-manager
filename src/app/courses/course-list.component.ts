import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '/assets/images/forms.png',
        price: 29.9,
        code: 'ABC-123',
        duration: 20,
        rating: 4.5,
        releaseDate: 'December, 2, 2021',
      },
      {
        id: 1,
        name: 'Angular: HTTP',
        imageUrl: '/assets/images/http.png',
        price: 29.9,
        code: 'DEF-456',
        duration: 45,
        rating: 4,
        releaseDate: 'December, 3, 2021',
      },
    ];
  }
}
