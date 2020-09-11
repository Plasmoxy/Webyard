import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms'
import { BudgetItem } from 'src/models/budget-item.model';
 
@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('', null)
  @Output() formSubmit = new EventEmitter<BudgetItem>()
  
  constructor() { }

  ngOnInit(): void {
    
  }
  
  onSubmit(form: NgForm) {
    // emit the event of form being submitted
    this.formSubmit.emit(form.value)
    form.reset()
  }

}
