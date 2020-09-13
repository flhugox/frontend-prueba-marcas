import { Component, OnInit } from '@angular/core';
import { MarcaService } from 'src/app/shared/marca.service';
import { NgForm } from '@angular/forms';
import { ToastrIconClasses, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss'],
})
export class MarcaComponent implements OnInit {
  constructor(public service: MarcaService, private toastr: ToastrService) {}

  ngOnInit() {
    this.resetForm();
  }
  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }

    //else this.updateRecord(form);
  }

  updateRecord(form: NgForm) {
    this.service.putMarca(form.value).subscribe((res) => {
      this.toastr.info('Actualizado Correctamente', 'Marca');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      id: null,
      marca: null,
      representante: '',
    };
  }

  insertRecord(form: NgForm) {
    this.service.postMarca(form.value).subscribe((res) => {
      this.toastr.success('Se Guardo Correctamente', 'Registrado');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
}
