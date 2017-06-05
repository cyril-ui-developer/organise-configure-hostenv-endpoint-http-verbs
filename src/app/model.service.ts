import { Injectable } from '@angular/core';

@Injectable()
export class AppModel{
name: string;
gender: string;

constructor( name: string, gender: string ) { this.name = name; this.gender = gender; }
}
