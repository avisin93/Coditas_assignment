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
  repoList: any;
  showLoader: Boolean = false;
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
  ];
  pageLastRecord: any = 0;
  constructor(private _userListService: UserService, ) { }

  ngOnInit() {
  }

  /**
   * Gets users list on search
   */
  getUserList() {
    this.showLoader = true;
    if (this.searchString) {
      this._userListService.getUserDetails(this.getSearchQueryParam()).subscribe((response: any) => {
        this.showLoader = false;
        if (response && response.items) {
          this.userList = response.items;
          this.totalItems = response.total_count;
          this.sortingChanged();

        } else {
          this.userList = [];
          this.totalItems = 0;
        }
      }, error => {
        this.showLoader = false;
        this.userList = [];
        this.totalItems = 0;
      });
    } else {
      this.showLoader = false;
      this.userList = [];
      this.totalItems = 0;
    }
  }
  /**
   * Sets query params
   */
  getSearchQueryParam() {
    let params: HttpParams = new HttpParams();
    if (this.searchString) {
      params = params.append('q', this.searchString);

    }

    params = params.append('page', this.currentPage.toString());
    params = params.append('per_page', '4');
    return params;
  }
  public pageChanged(event: any): void {
    this.currentPage = event.page;
    // this.pageLastRecord = 5 * (this.currentPage - 1);
    this.getUserList();
  }
/**
 * Gets repo details of specifies username
 * @param item as Object
 */
  getRepoList(item) {
    if (item.show) {
      item['spinnerFlag'] = true;
      let params: HttpParams = new HttpParams();
      params = params.append('per_page', '5');
      this._userListService.getRepoDetails(item.login, params).subscribe((response: any) => {
        item['spinnerFlag'] = false;
        if (response) {
          item['repoList'] = response;
        } else {
          item['repoList'] = [];
        }
      }, error => {
        item['spinnerFlag'] = false;
        item['repoList'] = [];
      });
    }
  }
  /**
   * Sorts record according to user selection
   */
  sortingChanged() {
    switch (this.sortType) {
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
