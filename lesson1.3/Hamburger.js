function Hamburger() {
    this.smallSize = 50;
    this.totalCost;

};
Hamburger.prototype.smallSizePrice = function () {
    this.setTotalCost(this.smallSize);
};

Hamburger.prototype.setTotalCost = function (newcost) {
    this.totalCost = newcost;
};
Hamburger.prototype.getTotalCost = function () {
    return this.totalCost;
};
Hamburger.prototype.callHello = function () {
    alert("Hello");
};

