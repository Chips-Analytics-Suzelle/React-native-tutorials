import {open} from 'react-native-quick-sqlite';
const db = open('myDb.sqlite');
let { rows } = db.execute('SELECT somevalue FROM sometable');