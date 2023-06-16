import jQuery from "jquery";
import _ from 'lodash';
import {a} from '@/script/add'
import './styles/index.css'

jQuery(function(){
    console.log(12345)
})

// jQuery.ajax({
//     url:"http://127.0.0.1:3000/api/abc"
// })

// jQuery.ajax({
//     url:"http://127.0.0.1:3000/api1/abc1"
// })
console.log(_);
console.log(a);
console.log(process.env.NODE_ENV)
const b = process.env.NODE_ENV;
console.log(b)