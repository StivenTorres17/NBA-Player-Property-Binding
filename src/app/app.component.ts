import { InputModalityDetector } from '@angular/cdk/a11y';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() players=[
    {
      name: 'Michael Jordan',
      awards: '6-time NBA champion, 5-time NBA Most Valuable Player (MVP), 14-time NBA All-Star, 10-time NBA scoring champion',
      equipment: 'Chicago Bulls, Washington Wizards',
      position: 'Shooting Guard',
      height:'1.98 m'
    },
    {
      name: 'LeBron James',
      awards: '4-time NBA champion, 4-time NBA Most Valuable Player (MVP), 17-time NBA All-Star, 4-time NBA scoring champion',
      equipment: 'Cleveland Cavaliers, Miami Heat, Los Angeles Lakers',
      position: 'Power Forward',
      height:'2.03 m'
    },
    {
      name: 'Kareem Abdul-Jabbar',
      awards: '6-time NBA champion	Milwaukee Bucks, 6-time NBA Most Valuable Player (MVP), 19-time NBA All-Star,  NBA all-time leading scorer',
      equipment: 'Milwaukee Bucks, Los Angeles Lakers',
      position: 'Center',
      height:'2.18 m'
    },
    {
      name: 'Magic Johnson',
      awards: '5-time NBA champion, 3-time NBA Most Valuable Player (MVP), 12-time NBA All-Star, 3-time NBA assists leader',
      equipment: 'Los Angeles Lakers	',
      position: 'Point Guard',
      height:'2.06 m'
    },
    {
      name: 'Larry Bird',
      awards: '3-time NBA champion, 3-time NBA Most Valuable Player (MVP), 12-time NBA All-Star, 2-time NBA scoring champion',
      equipment: 'Boston Celtics',
      position: 'Small Forward',
      height:'2.06 m'
    },
    {
      name: 'Shaquille O`Neal',
      awards: '4-time NBA champion, 3-time NBA Most Valuable Player (MVP), 15-time NBA All-Star, Dominant force in the paint',
      equipment: 'Orlando Magic, Los Angeles Lakers, Miami Heat, Phoenix Suns, Cleveland Cavaliers',
      position: 'Center',
      height:'2.16 m'
    },
    {
      name: 'Wilt Chamberlain',
      awards: '2-time NBA champion, 4-time NBA Most Valuable Player (MVP), 13-time NBA All-Star, NBA single-game scoring record holder (100 pts)',
      equipment: 'hiladelphia/San Francisco Warriors, Philadelphia 76ers, Los Angeles Lakers',
      position: 'Center',
      height:'2.16 m'
    },
    {
      name: 'Kobe Bryant',
      awards: '5-time NBA champion, 1-time NBA Most Valuable Player (MVP),  18-time NBA All-Star, 2-time NBA scoring champion',
      equipment: 'Los Angeles Lakers',
      position: 'Shooting Guard',
      height:'1.98 m'
    },
    {
      name: 'Tim Duncan',
      awards: '5-time NBA champion, 2-time NBA Most Valuable Player (MVP), 15-time NBA All-Star',
      equipment: 'San Antonio Spurs',
      position: '	Power Forward',
      height:'2.11 m'
    },
    {
      name: 'Hakeem Olajuwon',
      awards: '2-time NBA champion, 2-time NBA Most Valuable Player (MVP), 12-time NBA All-Star, 2-time NBA Defensive Player of the Year',
      equipment: '	Houston Rockets, Toronto Raptors',
      position: 'Center',
      height:'2.13 m'
    }    
  ];
}
