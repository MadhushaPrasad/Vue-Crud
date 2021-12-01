export default class Purchase {
    constructor(userID, deviceID, price, colour, purchaseTime, id) {
        this.userID = userID;
        this.deviceID = deviceID;
        this.price = price;
        this.colour = colour;
        this.purchaseTime = purchaseTime;
        this.id = id;
    }
}