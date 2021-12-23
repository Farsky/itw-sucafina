import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sucafina';

  activeTab = 1;

  menuCode: string;
  menuName: string;
  description: string;
  startDate: Date;
  endDate: Date;
}
