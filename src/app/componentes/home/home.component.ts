import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IpstackService } from 'src/app/services/ipstack.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  ubicacionLocal: any; // Información de ubicación
  localName: string = ''; // Nombre del local

  constructor(private router: Router, private ipstackService: IpstackService) {}

  login() {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    // Supongamos que tienes la dirección IP del local
    const localIPAddress = '134.201.250.15';

    this.localName = 'Ceramica Aguilar'; // Reemplaza con el nombre real del local

    this.ipstackService.getLocationByIP(localIPAddress)
      .subscribe((data: any) => {
        this.ubicacionLocal = data;
      },
      error => {
        console.error('Error:', error);
      });
  }
}
