import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/models/budget-item.model'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = []
  
  constructor() { }

  ngOnInit(): void {
  }
  
  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem) 
  }

}
