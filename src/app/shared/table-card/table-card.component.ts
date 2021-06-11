import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss']
})
export class TableCardComponent implements OnInit {

  @Input () typeView: string;
  @Input () characters: object[] = [];
  @Input () actions: boolean = false;
  @Output() editEmit = new EventEmitter<any>();
  @Output() deleteEmit = new EventEmitter<any>();
  displayedColumns: string[] = [
    'name',
    'patronus',
    'age',
    'image',
  ];
  search: string = '';

  constructor() {

  }

  ngOnInit(): void {
    if (this.actions) {
      this.displayedColumns.push('actions');
    }
  }

  edit(item, index){
    item.index = index;
    this.editEmit.emit(item);
  }

  delete(item, index){
    item.index = index;
    this.deleteEmit.emit(item);
  }

}
