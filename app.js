const _=require('lodash');

const user = {
    name: 'Imie',
    surname: 'Nazwisko',
    allGrades: [
        {
            subjectName: 'Name1',
            grades: [5,4,3,2],
            weight: 3
        },
        {
            subjectName: 'Name2',
            grades: [3,3.5,2],
            weight: 1
        },
        {
            subjectName: 'Name1',
            grades: [4,3,3.5],
            weight: 5
        }
    ]
}

function wmean(user){

    var swynik = 0;
    var wynik = 0;

    swynik=(_.sum(user.allGrades[0].grades))*user.allGrades[0].weight+(_.sum(user.allGrades[1].grades))*user.allGrades[1].weight
        +(_.sum(user.allGrades[2].grades))*user.allGrades[2].weight;
    wynik=swynik/((user.allGrades[0].grades.length*user.allGrades[0].weight)+(user.allGrades[1].grades.length*user.allGrades[1].weight)
        +(user.allGrades[2].grades.length*user.allGrades[2].weight));

    console.log(user.name+" "+user.surname+" "+wynik);
}

wmean(user);