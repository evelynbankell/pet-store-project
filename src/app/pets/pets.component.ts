import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpsApiService } from '../services/https-api.service';

@Component({
  selector: 'pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  status: string = 'available';
  petsArray: any;
  petImg: string = 'assets/petshoppng.png';

  constructor(
    private httpsApiService: HttpsApiService,
    private changeDetector: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.callAPI(this.status);
  }

  callAPI(status: string) {
    this.httpsApiService.loadAPI(status).then(pets => {
      this.petsArray = Object.entries(pets).slice(0,5).map(entry => entry[1]);
      console.log(this.petsArray);
      this.changeDetector.detectChanges();

    })
  }

  onStatusClick(selectedStatus: string) {
    this.status = selectedStatus;
    this.callAPI(this.status);
  }
}
