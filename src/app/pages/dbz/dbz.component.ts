import { Component, OnInit } from '@angular/core';
import { Dbz, Item, Links } from './interfaces/dbz';
import { DbzService } from './services/dbz.service';
import { SearchComponent } from './search/search.component';
import { Console } from 'console';

@Component({
  selector: 'app-dbz',
  standalone: true,
  imports: [],
  templateUrl: './dbz.component.html',
  styleUrl: './dbz.component.css'
})
export class DbzComponent implements OnInit{
  dbz: Dbz|undefined;

  constructor(
    private srvDbz:DbzService
  ){ }

  ngOnInit(): void {
    this.srvDbz.getDbz().subscribe((dbzAll)=>{
      dbzAll.items.forEach((dbz)=>{
        this.srvDbz.getdbz(dbz.id).subscribe((dbzData)=>{
          return dbzData;
        });
      });
      this.dbz = dbzAll;
      console.log(this.dbz);
    });
    this.srvDbz.nextUrl = null;
    this.srvDbz.previousUrl = null;
  }

}
