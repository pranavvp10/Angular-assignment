import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.css']
})
export class EligibilityCalculatorComponent{

  ECForm = new FormGroup({
    monthlyIncome: new FormControl('100000'),
    monthlyExpense: new FormControl('10000'),
    emiLoan:new FormControl(''),
    getMoney: new FormGroup({
      loanAmount: new FormControl(''),
      monthlyEmi: new FormControl('')

    })
  });

}
