import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-rota',
  templateUrl: './rota.page.html',
  styleUrls: ['./rota.page.scss'],
})
export class RotaPage implements OnInit {

  constructor(private router:Router) {}

  rota_home(){
  	console.log('rapido');
  	this.router.navigate(['/tab1']);
  }


  ngOnInit() {
  }

}
