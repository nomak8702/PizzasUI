import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {FormGroup} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export class Pizza {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public weight: string,
    public price: number,

  ) {
  }
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 pizzas: Pizza[];
 closeResult: string;
 editForm: FormGroup;
 private deleteId: number;


  constructor(
  private httpClient: HttpClient,
  private modalService: NgbModal,
  private fb: FormBuilder

  ) { }

  ngOnInit(): void {
  this.getPizzas();

  this.editForm =this.fb.group({
    id: [''],
    name: [''],
    description: [''],
    weight: [''],
    price: ['']
  });

  }

  getPizzas(){
    this.httpClient.get<any>('http://localhost:9001/pizzas').subscribe(
      response => {
        console.log(response);
        this.pizzas = response;
      }
    );
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(f: NgForm) {
    const url = 'http://localhost:9001/pizzas/addnew';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit();
      });
    this.modalService.dismissAll();
  }

  openEdit(targetModal, pizza: Pizza) {
     this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
      this.editForm.patchValue( {
        id: pizza.id,
        name: pizza.name,
        description: pizza.description,
        weight: pizza.weight,
        price: pizza.price
      });
  }

  onSave() {
    const editURL = 'http://localhost:9001/pizzas/' + this.editForm.value.id + '/edit';
    this.httpClient.put(editURL, this.editForm.value)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

  openDelete(targetModal, pizza: Pizza) {
    this.deleteId = pizza.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDelete() {
    const deleteURL = 'http://localhost:9001/pizzas/' + this.deleteId + '/delete';
    this.httpClient.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }
}
