let inp = document.getElementById("in")

let alp = "abcdefghijklmnopqrstuvwxyz"

let obj = {}

for(let i=0; i<alp.length;i++){
    obj[alp[i]] = i+1;
}

console.log(obj);

inp.addEventListener("change", () => {
    let str = ""
    for (let i = 0; i < inp.value.length; i++){
        if(inp.value[i] != " "){
            str = str + obj[inp.value[i]]+" ";
            // if(str.length < inp.value.length){
            //     str = str + " "
            // }
        }else{
            str = str + "_"
        }
    }

    inp.value = str;
})