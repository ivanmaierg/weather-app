import { units } from "@/types/units.types";
import { cToF } from "./cTof";


export const changeBaseOnUnit = (arr,unit) => {
    if (units.F === unit) {
        arr = arr.map(el => {
            el = Number(el.slice(0, 2));
            return `${Math.floor(cToF(el))} F°`;
        });
        return arr;
    }
    else {
        return arr.map(el => `${el.slice(0, 2)} C°`);
    }
};