import {parse} from 'acorn';

console.log(parse('let a = 1;', {
    ecmaVersion: 'latest'
}));
