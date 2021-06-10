import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss']
})
export class TableCardComponent implements OnInit {

  @Input () typeView: string;
  @Input () characters: object[] = [];
  @Input () search: string = '';

  // typeView: string = 'table'
  // house: string = 'slytherin';
  // characters: object[] = [];
  displayedColumns: string[] = [
    'name',
    'patronus',
    'age',
    'image',
  ];
  // search: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
