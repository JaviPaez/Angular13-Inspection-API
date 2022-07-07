import { Component, OnInit, Input } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service';

@Component({
  selector: 'app-add-edit-inspection',
  templateUrl: './add-edit-inspection.component.html',
  styleUrls: ['./add-edit-inspection.component.css']
})
export class AddEditInspectionComponent implements OnInit {

  inspectionList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;

  constructor(private service: InspectionApiService) { }

  @Input() inspection: any;
  id: number = 0;
  status: string = '';
  comment: string = '';
  inspectionTypeId!: number;

  ngOnInit(): void {
    this.id = this.inspection.id;
    this.status = this.inspection.status;
    this.comment = this.inspection.comment;
    this.inspectionTypeId = this.inspection.inspectionTypeId;
    this.statusList$ = this.service.getStatusList();
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionTypesList$ = this.service.getInspectionTypesList();
  }

  addInspection() {
    var inspection = {
      status: this.status,
      comment: this.comment,
      inspectionTypeId: this.inspectionTypeId,
    }
    this.service.addInspection(inspection).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) closeModalBtn.click();

      var showAddSuccess = document.getElementById('add-success-alert');
      if (showAddSuccess) showAddSuccess.style.display = "block";
      setTimeout(() => {
        if (showAddSuccess) showAddSuccess.style.display = "none";
      }, 2000);
    })

    console.log(inspection);
  }

  updateInspection() {
    var inspection = {
      status: this.status,
      comment: this.comment,
      inspectionTypeId: this.inspectionTypeId,
    }
    this.service.addInspection(inspection).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) closeModalBtn.click();

      var showAddSuccess = document.getElementById('add-success-alert');
      if (showAddSuccess) showAddSuccess.style.display = "block";
      setTimeout(() => {
        if (showAddSuccess) showAddSuccess.style.display = "none";
      }, 3000);
    })
  }
}