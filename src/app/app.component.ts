import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Personajes';
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
  path: string = '';

  ngOnInit(): void {
    this.path = window.location.pathname.split('/')[1];
    let route = this.routes.find(r => r['url'] == '/'+this.path)
    this.title = route['name'];
  }
}
