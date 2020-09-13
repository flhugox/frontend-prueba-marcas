import { Component, OnInit } from '@angular/core';
import { AutoService } from '../shared/auto.service';
import { ToastrService } from 'ngx-toastr';
import { Auto } from '../shared/auto.model';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss'],
})
export class AutosComponent implements OnInit {
  constructor(public service: AutoService, private toastr: ToastrService) {}

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(mcr: Auto) {
    this.service.formData = Object.assign({}, mcr);
  }
  onDelete(id: number) {
    if (confirm('¿Estas Seguro que deseas eliminar este registro?')) {
      this.service.deleteAuto(id).subscribe((res) => {
        this.service.refreshList();
        this.toastr.warning('Eliminado Correctamente', 'Auto');
      });
    }
  }
}
