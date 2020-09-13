import { Component, OnInit } from '@angular/core';
import { MarcaService } from 'src/app/shared/marca.service';
import { Marca } from 'src/app/shared/marca.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.scss'],
})
export class MarcaListComponent implements OnInit {
  constructor(public service: MarcaService, private toastr: ToastrService) {}

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(mcr: Marca) {
    this.service.formData = Object.assign({}, mcr);
  }
  onDelete(id: number) {
    if (confirm('¿Estas Seguro que deseas eliminar este registro?')) {
      this.service.deleteMarca(id).subscribe((res) => {
        this.service.refreshList();
        this.toastr.warning('Eliminado Correctamente', 'Marca');
      });
    }
  }
}
