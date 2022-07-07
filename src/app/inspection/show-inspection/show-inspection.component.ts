import { Component, OnInit } from '@angular/core';
import { map, Observable, observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit {

  inspectionList$!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;
  inspectionTypesList: any = [];

  // Map to associate with foreign key
  inspectionTypesMap: Map<number, string> = new Map();

  constructor(private service: InspectionApiService) { }

  ngOnInit(): void {
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionTypesList$ = this.service.getInspectionTypesList();
  }

}
