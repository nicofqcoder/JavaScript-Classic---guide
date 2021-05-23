// 01
var date = new Date(2016, 9, 20);

console.log(date);

date.setDate(25);

console.log(date)

// 02
Date.prototype.sumDays = function(days){
    this.setDate(this.getDate() + days);
    return this;
}

Date.prototype.sumYears = function(years){
    this.setFullYear(this.getFullYear() + years);
    return this;
}

console.log(date);
console.log(date.sumDays(5));
console.log(date.sumYears(5));