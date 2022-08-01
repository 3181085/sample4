'use strict'


function csvToArr(str) {
    let retArray = [];
    let index = 0;
    let pos = str.indexOf(",", index);
    let tmp;

    while (0 < pos) {
        tmp = str.substr(index, pos - index);
        retArray.push(tmp.trim());
        index = pos + 1;
        pos = str.indexOf(",", index);
   }

   if (index < str.length) {
        tmp = str.substr(index, str.length)
        retArray.push(tmp.trim());
        index = pos;
   }

    return retArray;
}