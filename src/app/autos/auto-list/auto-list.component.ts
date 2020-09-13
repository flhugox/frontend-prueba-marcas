import { Component, OnInit } from '@angular/core';
import { AutoService } from 'src/app/shared/auto.service';
import { ToastrService } from 'ngx-toastr';
import { Auto } from 'src/app/shared/auto.model';

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.scss'],
})
export class AutoListComponent implements OnInit {
  constructor(public service: AutoService, private toastr: ToastrService) {}
  year: any[];
  ngOnInit() {
    this.service.refreshList();
    this.service.getMarcaList();
    this.year = [
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
    ];
  }

  populateForm(mcr: Auto) {
    this.service.formData = Object.assign({}, mcr);
  }
  onDelete(id: number) {
    if (confirm('¿Estas Seguro que deseas eliminar este registro?')) {
      this.service.deleteAuto(id).subscribe((res) => {
        this.service.refreshList();
        this.toastr.warning('Eliminado Correctamente', 'Marca');
      });
    }
  }
}
