import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/models/budget-item.model'

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Output() itemDeleted = new EventEmitter<BudgetItem>();
  @Input() budgetItems: BudgetItem[]
  
  constructor() { }

  ngOnInit(): void {
    
  }
  
  delete(item: BudgetItem) {
    this.itemDeleted.emit(item)
  }

}
