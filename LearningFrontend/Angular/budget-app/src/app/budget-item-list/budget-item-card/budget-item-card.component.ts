import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/models/budget-item.model'

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {
  
  @Output() xButtonClick = new EventEmitter<void>();
  @Input() item: BudgetItem;
  
  constructor() { }

  ngOnInit(): void {
    
  }
  
  onXClick() {
    this.xButtonClick.emit()
  }

}
