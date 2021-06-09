import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Administrador Howarts';
  routes: object[] = [
    {
      name: 'Personajes',
      url: '/characters',
      icon: 'dashboard'
    },
    {
      name: 'Estudiantes',
      url: '/students',
      icon: 'theaters'
    },
    {
      name: 'Profesores',
      url: '/teachers',
      icon: 'person'
    }
  ];
}
