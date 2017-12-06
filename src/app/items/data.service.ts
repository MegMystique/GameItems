import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {DataStreamService} from './data-stream.service'
@Injectable()
export class DataService {

  constructor(private http: HttpClient,private stream:DataStreamService) {
  }

  getDataFromServer() {
    // return this.http.get('https://ru.api.riotgames.com/lol/static-data/v3/items?locale=en_US&api_key=INSERT YOUR API KEY !') //riot give only 20 request :(
    return this.http.get('assets/res.json')
      .subscribe(res => {this.stream.setData(res);console.log(res)}, err => console.error(err),)


  }
}
