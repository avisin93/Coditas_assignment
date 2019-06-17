import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from './users.services';
import { HttpParams } from '@angular/common/http';
import { CustomListConfig, SORT_TYPE } from './constants';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {
  userList: any;
  public page: any = 1;
  index: any = 1;
  totalItems: any;
  itemsPerPage: any = CustomListConfig.pageSize;
  currentPage: any = CustomListConfig.pageNumber;
  public maxSize: any = CustomListConfig.maxSize;
  sortType: any = 0;
  sortArr: any = [
    {
      'id': 1,
      'text': 'Name (A-Z)'
    },
    {
      'id': 2,
      'text': 'Name (Z-A)'
    },
    {
      'id': 3,
      'text': 'Rank ↓'
    },
    {
      'id': 4,
      'text': 'Rank ↑'
    },
  ]
  constructor(private _userListService: UserService, ) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this._userListService.getUserDetails(this.getSearchQueryParam()).subscribe((response: any) => {
      this.userList = response;
      this.totalItems = 200;
    });
  }
  getSearchQueryParam() {
    let params: HttpParams = new HttpParams();
    params = params.append('since', '0');
    params = params.append('page', this.currentPage.toString());
    params = params.append('per_page', '3');
    return params;
  }
  public pageChanged(event: any): void {
    this.currentPage = event.page;
    this.getUserList();
  }

  sortingChanged(sortTypeId) {
    switch (sortTypeId) {
      case SORT_TYPE.atoz:
        this.userList.sort((a, b) => a.login.localeCompare(b.login));
        break;
      case SORT_TYPE.ztoa:
        this.userList.sort((a, b) => b.login.localeCompare(a.login));
        break;
      case SORT_TYPE.rankAscending:
        this.userList.sort((a, b) => a.id - b.id);
        break;
      case SORT_TYPE.rankDescending:
        this.userList.sort((a, b) => b.id - a.id);
        break;
    }

  }
}
