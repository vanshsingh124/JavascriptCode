console.log('We are going to start classes')
//Classes
class car {
    constructor(name, speed, model, month) {
        this.name = name
        this.speed = speed
        this.model = model
        this.month = month
    }
    getmonth() {
        return this.month
    }
    speedOfCar() {
        return `${this.name} runs about ${this.speed}km per hour`
    }
    modelOfCar() {
        if (this.model <= 15) {
            return `${this.name} car have very old model`
        }
        else {
            return `${this.name} car have very new model`
        }
    }
}
let fy = new car('Bugati', 120, 12, 'january')
console.log(fy.speedOfCar())
console.log(fy.modelOfCar())
console.log(fy.getmonth())

//inheritence
class moreCar extends car {
    constructor(name, speed, model, month,quality,country,founder,year){
        super(name, speed, model, month)
        this.quality=quality
        this.country=country
        this.founder=founder
        this.year=year
    }
    fromWhichCountryExported(){
        return`${this.name} car export from the country of ${this.country}`
    }
    qualityNo(){
        if(this.quality<=15){
            return `Quality of  ${this.name} car is very low`
        }
        else if(this.quality<=20){
            return `Quality of  ${this.name} car is very decent`
        }
        else{
            return`Quality of  ${this.name} car is very good`
        }
    }
    yearExported(){
        return `${this.name} car exported in the year of ${this.year}`
    }
}

let inheri = new moreCar('lamborgini',678,32,'march',21,'america','elon musk','2019')
console.log(inheri)
console.log(inheri.qualityNo())
console.log(inheri.yearExported())
console.log(inheri.fromWhichCountryExported())
console.log(inheri.modelOfCar())
console.log(inheri.speedOfCar())

