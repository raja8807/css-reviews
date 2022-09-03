let roms = ["X","I","II","III","IV","V","VI","VII","VIII","IX","X"]

function con(num){
    let out;
    if(num<=10){
        out = roms[num]
    }else if(num>10 && num<=20){
        out = "X" + roms[(num%10)]
    }else if(num > 20 && num<=30){
        out = "XX" + roms[(num%10)]
    }else if(num>30 && num<=39){
        out = "XXX" + roms[(num%10)]
    }
    return out;
}

number = 18

console.log(number+" - "+con(number));