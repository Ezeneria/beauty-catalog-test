import { Component } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
constructor(
  public activeModal: NgbActiveModal,
  private formBuilder: FormBuilder
  ){
  this.createForm();
}
  myForm: FormGroup;
  private createForm() {
    this.myForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required, Validators.minLength(4), ]),
      content: new FormControl('', [Validators.required, Validators.minLength(10), ]),
      imgUrl: new FormControl('', [Validators.required, ]),
    });
  }
  private submitForm() {
    this.activeModal.close(this.myForm.value);
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
