import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  vendorList: any;
  term: any;
  appliedFilters: any;
  caseInsensitive: Boolean = true;
  p: any = 1;
  order: any = 'firstname';
  reverse: Boolean = false;
  searchStr: any = {
    'firstname': '',
    'userName': '',
    'lastname': '',
    'city': '',
    'department': ''
  };
  constructor() { }

  ngOnInit() {
   
    // this.filteredEmployees = this.vendorList;
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  // search(filterFlag, searchString) {
  //   if (filterFlag = 1) {

  //   }
  // }

















  // searchFirstName() {
  //   this.filteredEmployees = this.vendorList.filter(data =>
  //     data.firstname.toLowerCase().indexOf(this.searchFnameterm.toLowerCase()) !== -1);

  // }
  // searchLastName() {
  //   this.filteredEmployees = this.vendorList.filter(data =>
  //     data.lastname.toLowerCase().indexOf(this.searchLnameterm.toLowerCase()) !== -1);
  // }
  // searchUserName() {
  //   this.filteredEmployees = this.vendorList.filter(data =>
  //     data.userName.toLowerCase().indexOf(this.searchUnameterm.toLowerCase()) !== -1);
  // }
  // searchCityName() {
  //   this.filteredEmployees = this.vendorList.filter(data =>
  //     data.city.toLowerCase().indexOf(this.searchCnameterm.toLowerCase()) !== -1);
  // }
  // searchDepartmentName() {
  //   this.filteredEmployees = this.vendorList.filter(data =>
  //     data.department.toLowerCase().indexOf(this.searchDeptterm.toLowerCase()) !== -1);
  // }
}
