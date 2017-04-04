import { Injectable } from '@angular/core';
import { Moive } from '../classes/moive';
import { MOIVES } from '../classes/data-moives';


@Injectable()
export class MoivesService {

  constructor() { }

  getMoives(): Promise<Moive[]>{
    return Promise.resolve(MOIVES);
  }

}
