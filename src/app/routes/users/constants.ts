export class CustomListConfig {
    public static sortBy: String = '';
    public static sortDirection: String = 'desc';
    public static pageSize: Number = 5;
    public static pageNumber: Number = 1;
    public static totalCount: Number = 0;
    public static maxSize: Number = 5;
}

export const SORT_TYPE = {
    'atoz': '1',
    'ztoa': '2',
    'rankAscending': '3',
    'rankDescending': '4'
}