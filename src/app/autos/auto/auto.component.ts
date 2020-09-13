import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AutoService } from 'src/app/shared/auto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss'],
})
export class AutoComponent implements OnInit {
  constructor(public service: AutoService, private toastr: ToastrService) {}

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
    this.service.putAuto(form.value).subscribe((res) => {
      this.toastr.info('Actualizado Correctamente', 'Auto');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      id: null,
      modelo: null,
      year: null,
      id_marca: null,
    };
  }

  insertRecord(form: NgForm) {
    this.service.postAuto(form.value).subscribe((res) => {
      this.toastr.success('Se Guardo Correctamente', 'Registrado');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
}
