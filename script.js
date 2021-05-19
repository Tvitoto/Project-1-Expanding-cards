// const panels = document.querySelectorAll('.panel')
//
// panels.forEach((panel) => {
//     panel.addEventListener('click', () => {
//         removeActiveClasses()
//         panel.classList.add('active')
//     })
// })
//
// function removeActiveClasses(){
//     panels.forEach(panel => {
//         panel.classList.remove('active')
//     })
// }





//
//
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         const markBMI =  this.mass / this.height  ** 2;
//         return markBMI;
//     }
// }
//
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         const johnBMI =  this.mass / this.height  ** 2;
//         return johnBMI;
//     }
// }
//
// console.log(`Mark Millers BMI ${mark.calcBMI()} is highter, than John Smith's ${john.calcBMI()}`)
// console.log(mark.calcBMI())
// console.log(john.calcBMI())

//
//
//
// let dice = Math.trunc(Math.random() * 6)+1;
// console.log(dice)
//
//
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = []
// const totals = []
//
// const calcTip = function(bill) {
//     return  bill >= 50 && bill <= 300 ? bill * 0.15 : bill *0.2;
// }
//
// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(calcTip(bills[i]) + bills[i]);
// }
//
// console.log(tips, totals);
//
//
// const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
//
// const calcAverage = function(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum/array.length;
// }
// console.log(calcAverage(arr));




const testData1 = [17, 21, 23]
const testData2= [12, 5, -5, 0, 4]

const printForecast = function(array) {
    let string ="";
    for(let i=0; i < array.length; i++){
        string = string + `... ${array[i]}C in ${i+1} days`;
    }
    console.log(string);
}
printForecast(testData1);