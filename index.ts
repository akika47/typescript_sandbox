// function giveBack(par:number){
//     console.log("valami valami");
//     return par;
// }

// function giveBackString(par:string){
//     console.log("valami valami");
//     return par;
// }

type Ship = {
    length: number,
    captainName: string
}

function giveBack<T extends {'length' : number}>(par: T) : T {
        console.log("valami hossza: " + par.length);
        return par;
}

let titanic: Ship = {
    length: 269,
    captainName: "Jack Sparrow"
}

giveBack<number[]>([10]);
giveBack<string>("alma");
giveBack<Ship>(titanic)