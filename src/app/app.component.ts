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
      icon: 'contact_page'
    },
    {
      name: 'Estudiantes',
      url: '/students',
      icon: 'groups'
    },
    {
      name: 'Profesores',
      url: '/teachers',
      icon: 'contact_mail'
    }
  ];
}
