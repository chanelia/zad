const _=require('lodash');

function srednia() {
    console.log(_.mean(arguments));
}

srednia(1, 2, 3, 4, 5);
srednia(2, 4, 6);
