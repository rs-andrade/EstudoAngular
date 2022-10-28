import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit, OnDestroy {
  private idModal = 'auth'
  constructor(public modal: ModalService) { }
  
  ngOnDestroy(): void {
    this.modal.unregister(this.idModal)
  }

  ngOnInit(): void {
    this.modal.register(this.idModal)
  }


}
