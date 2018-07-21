import $ from 'jquery';
import '../scss/style.scss';
import '../css/normalize.css';

export class ServerService{

    static getMyPost()
    {
        console.log("123456");
        return fetch('http://127.0.0.1:6200')
        .then(data =>  data.json())
        // .then((res) => {
        //     localStorage.setItem("res", JSON.stringify(res));  
        //     console.log("hole hole hole hole");    
        // })
        .catch(function () {
            let values = JSON.parse(localStorage.getItem("res"));
            return values; 
            })
    }
}
