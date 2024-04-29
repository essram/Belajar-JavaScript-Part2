const studentScore = {
    Rama:100,
    Indra:90,
    Rizki:80,
    Bambang:70,
    Ucup:60,
    Eko:50,
    Iwan:40,
    Kurniawan:30,
    Andhika:20,
    Budi:10
};

for(let student in studentScore){
    console.log(`${student} memiliki score ${studentScore[student]}`);
}