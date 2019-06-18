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
  searchString: any;
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
  pageLastRecord: any = 0;
  constructor(private _userListService: UserService, ) { }

  ngOnInit() {
  }

  getUserList() {
    this._userListService.getUserDetails(this.getSearchQueryParam()).subscribe((response: any) => {
      this.userList = response.items;
      this.totalItems = response.total_count;
    });
  }
  getSearchQueryParam() {
    let params: HttpParams = new HttpParams();
    params = params.append('q', this.searchString);
    params = params.append('since', this.pageLastRecord.toString());
    params = params.append('page', this.currentPage.toString());
    params = params.append('per_page', '5');
    return params;
  }
  public pageChanged(event: any): void {
    this.currentPage = event.page;
    this.pageLastRecord = 5 * (this.currentPage - 1);
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
