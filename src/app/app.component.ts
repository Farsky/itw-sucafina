import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sucafina';
  activeTabIndex = 0;
  activeElementSelector = '';

  menuCodeError = '';
  menuNameError = '';
  startDateError = '';
  endDateError = '';

  menuCode: string;
  menuName: string;
  description: string;
  startDate: Date;
  endDate: Date;

  ngDoCheck() {
    this.validateMenuCode();
    this.validateMenuName();
    this.validateStartDate();
    this.validateEndDate();
  }

  goToElement(selector: string) {
    this.activeElementSelector = selector;
  }

  selectTab(tabIndex: number) {
    this.activeTabIndex = tabIndex;
  }

  validateMenuCode() {
    this.menuCodeError = '';

    if (this.menuCode === undefined || this.menuCode === null || this.menuCode.trim() === '') {
      this.menuCodeError = 'Menu Code is required.';
    }
  }

  validateMenuName() {
    this.menuNameError = '';

    if (this.menuName === undefined || this.menuName === null || this.menuName.trim() === '') {
      this.menuNameError = 'Menu Name is required.';
    }
  }

  validateStartDate() {
    this.startDateError = '';

    if (this.startDate !== undefined && this.startDate !== null
      && this.endDate !== undefined && this.endDate !== null
      && this.startDate > this.endDate) {
      this.startDateError = 'Start Date cannot be greater than End Date.';
    }
  }

  validateEndDate() {
    this.endDateError = '';

    if (this.startDate !== undefined && this.startDate !== null
      && this.endDate !== undefined && this.endDate !== null
      && this.startDate > this.endDate) {
      this.endDateError = 'Start Date cannot be greater than End Date.';
    }
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    const sectionMenuItem = document.getElementById('section-menu-item');
    if (sectionMenuItem === null) {
      return;
    }

    const yOffset = sectionMenuItem.offsetTop;

    if (0 <= window.pageYOffset && window.pageYOffset < yOffset) {
      this.activeElementSelector = '#section-information';
    } else {
      this.activeElementSelector = '#section-menu-item';
    }
  }
}