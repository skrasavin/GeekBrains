function Hamburger() {
    this.smallSize = [50, 20];
    this.bigSize = [100, 40];
    this.cheese = [10, 20];
    this.salad = [20, 5];
    this.potato = [15, 10];
    this.spice = [15, 0];
    this.mayo = [20, 5];

    this.totalCalory = 0;
    this.totalCost = 0;

    // console.log(this.smallSize);

};
//Маленький бургер
Hamburger.prototype.smallSizePrice = function () {
    this.setTotalCost(this.smallSize[0]);
    this.setTotalCalory(this.smallSize[1]);
};
Hamburger.prototype.removeValueFromSmallSize = function () {
    this.removeValueFromTotalCost(this.smallSize[0]);
    this.removeValueFromTotalCalory(this.smallSize[1]);
};
//Большой бургер
Hamburger.prototype.bigSizePrice = function () {
    this.setTotalCost(this.bigSize[0]);
    this.setTotalCalory(this.bigSize[1]);
};
Hamburger.prototype.removeValueFromBigSize = function () {
    this.removeValueFromTotalCost(this.bigSize[0]);
    this.removeValueFromTotalCalory(this.bigSize[1]);
};
//Сырная добавка
Hamburger.prototype.addCheeseTopping = function () {
    this.setTotalCost(this.cheese[0]);
    this.setTotalCalory(this.cheese[1]);
};
Hamburger.prototype.removeValueFromCheeseTopping = function () {
    this.removeValueFromTotalCost(this.cheese[0]);
    this.removeValueFromTotalCalory(this.cheese[1]);
};
//Салат - добавка
Hamburger.prototype.addSaladTopping = function () {
    this.setTotalCost(this.salad[0]);
    this.setTotalCalory(this.salad[1]);
};

Hamburger.prototype.removeValueFromSaladTopping = function () {
    this.removeValueFromTotalCost(this.salad[0]);
    this.removeValueFromTotalCalory(this.salad[1]);
};
//Картофель - добавка
Hamburger.prototype.addPotatoTopping = function () {
    this.setTotalCost(this.potato[0]);
    this.setTotalCalory(this.potato[1]);
};
Hamburger.prototype.removeValueFromPotatoTopping = function () {
    this.removeValueFromTotalCost(this.potato[0]);
    this.removeValueFromTotalCalory(this.potato[1]);
};
//Приправа - добавка
Hamburger.prototype.addSpiceTopping = function () {
    this.setTotalCost(this.spice[0]);
    this.setTotalCalory(this.spice[1]);
};
Hamburger.prototype.removeValueFromSpiceTopping = function () {
    this.removeValueFromTotalCost(this.spice[0]);
    this.removeValueFromTotalCalory(this.spice[1]);
};
//Майонез - добавка
Hamburger.prototype.addMayoTopping = function () {
    this.setTotalCost(this.mayo[0]);
    this.setTotalCalory(this.mayo[1]);
};
Hamburger.prototype.removeValueFromMayoTopping = function () {
    this.removeValueFromTotalCost(this.mayo[0]);
    this.removeValueFromTotalCalory(this.mayo[1]);
};

//Задать общую сумму
Hamburger.prototype.setTotalCost = function (newcost) {
    this.totalCost += newcost;
};
Hamburger.prototype.removeValueFromTotalCost = function (newcost) {
    this.totalCost -= newcost;
};
//Задать общие калории
Hamburger.prototype.setTotalCalory = function (newcost) {
    this.totalCalory += newcost;
};
Hamburger.prototype.removeValueFromTotalCalory = function (newcost) {
    this.totalCalory -= newcost;
};


Hamburger.prototype.getTotalCost = function () {
    return this.totalCost;
};
Hamburger.prototype.getTotalCalory = function () {
    return this.totalCalory;
};