import {q} from './tool/fetch'
import {uri}  from './config/root'
import {a,links} from './config/path'

import low from 'lowdb'
const db = low('db.json')

db.defaults({
    posts:[]
}).value()



q({
    url: uri,
    method: 'get'
}).then(data => {
    links(data).then( _data => {
        console.log(_data);
    })
}).catch(err => {
    console.log(err);
})


