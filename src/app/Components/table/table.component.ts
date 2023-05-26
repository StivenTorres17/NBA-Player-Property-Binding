import { AfterViewInit, Component, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  @Input() players!:any[];

  displayedColumns: string[] = ['name', 'awards', 'equipment', 'position', 'height'];
  dataSource: MatTableDataSource<PeriodicElement>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.dataSource = new MatTableDataSource<PeriodicElement>([]);
  }

  ngAfterViewInit() {
    this.dataSource.data = this.players;
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  awards: string;
  equipment: string;
  position: string;
  height: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Michael Jordan',
    awards: '6-time NBA champion, 5-time NBA Most Valuable Player (MVP), 14-time NBA All-Star, 10-time NBA scoring champion',
    equipment: 'Chicago Bulls, Washington Wizards',
    position: 'Shooting Guard',
    height: '1.98 m'
  },
  {
    name: 'LeBron James',
    awards: '4-time NBA champion, 4-time NBA Most Valuable Player (MVP), 17-time NBA All-Star, 4-time NBA scoring champion',
    equipment: 'Cleveland Cavaliers, Miami Heat, Los Angeles Lakers',
    position: 'Power Forward',
    height: '2.03 m'
  },
  {
    name: 'Kareem Abdul-Jabbar',
    awards: '6-time NBA champion Milwaukee Bucks, 6-time NBA Most Valuable Player (MVP), 19-time NBA All-Star, NBA all-time leading scorer',
    equipment: 'Milwaukee Bucks, Los Angeles Lakers',
    position: 'Center',
    height: '2.18 m'
  },
  {
    name: 'Magic Johnson',
    awards: '5-time NBA champion, 3-time NBA Most Valuable Player (MVP), 12-time NBA All-Star, 3-time NBA assists leader',
    equipment: 'Los Angeles Lakers',
    position: 'Point Guard',
    height: '2.06 m'
  },
  {
    name: 'Larry Bird',
    awards: '3-time NBA champion, 3-time NBA Most Valuable Player (MVP), 12-time NBA All-Star, 2-time NBA scoring champion',
    equipment: 'Boston Celtics',
    position: 'Small Forward',
    height: '2.06 m'
   }
];
