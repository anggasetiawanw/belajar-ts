import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharCollection } from './CharCollection';
import { LinkedList } from './LinkedList';

//https://roadmap.sh / github : anggasetiawanw
const numberCollection = new NumberCollection([11, 1, -10, 2, 5, 6]);
const sorterNumber = new Sorter(numberCollection); //  U->[-5,0,3,10]
sorterNumber.bubleSort();
console.log(sorterNumber.collection);

const charCollection = new CharCollection('AJDBSH');
const sorter = new Sorter(charCollection);
sorter.bubleSort();
console.log(sorter.collection);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-10);
linkedList.add(50);
linkedList.add(60);
linkedList.add(5);
linkedList.add(17);
const sorterLinked = new Sorter(linkedList);
sorterLinked.bubleSort();
linkedList.print();
