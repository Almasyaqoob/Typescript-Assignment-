import { features } from "process";

function storeCarInfo(manufacturer: string, modelName: string,...extraOption: { [key : string]: any } [] ): object{
    const carinfo = {
        manufacturer,
        modelName,
        ...Object.assign({},...extraOption)
    }
    return carinfo;
};
 let answare = storeCarInfo("Honda", "Civic", {color: "black"}, {features:["Navigation", "Power window"]})
 console.log(answare);


