import jQuery from 'jquery';
import _ from 'lodash';
import { a } from '@/script/app';
import '@/style/index.less';
import '@/index.css';

jQuery.ajax({
  url: '/api/abc',
});

jQuery.ajax({
  url: '/api1/abc1',
});

console.log(_);
console.log(a);
console.log(a);
console.log(a);
console.log(a);
console.log(a);
console.log('process.env.NODE_ENV:', process.env.NODE_ENV);

console.log("测试gitee --> github 同步功能");