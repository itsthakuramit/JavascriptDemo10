
console.log("After Spliting through space :")
var inputString="select * from ipl.csv where team1=rcb and team2=csk";
var stringArray=inputString.split(" ");
console.log(stringArray);


console.log("\nCondition Array :")
var afterWhere=inputString.split("where");
var conditionPart=afterWhere[1];
var condtionSplit=conditionPart.split("and");
var field, operator, fieldvalue;
var conditionArray=[];

for(let i=0; i<condtionSplit.length; i++){
    if(condtionSplit[i].includes(">") && condtionSplit[i].includes("=")) {
        condition=condtionSplit[i].split(">=");
        x=condition[0].replace(/\s+/g,'');
        y=condition[1];
        z=">=";
        var tempObject={
            field : x,
            fieldvalue : y,
            operator : z
        }
        conditionArray.push(tempObject);
    }
    else if(condtionSplit[i].includes("<") && condtionSplit[i].includes("=")) {
        condition=condtionSplit[i].split("<=");
        x=condition[0].replace(/\s+/g,'');
        y=condition[1];
        z="<=";
        var tempObject={
            field : x,
            fieldvalue : y,
            operator : z
        }
        conditionArray.push(tempObject);
    }
    else if(condtionSplit[i].includes("!") && condtionSplit[i].includes("=")) {
        condition=condtionSplit[i].split("!=");
        x=condition[0].replace(/\s+/g,'');
        y=condition[1];
        z="!=";
        var tempObject={
            field : x,
            fieldvalue : y,
            operator : z
        }
        conditionArray.push(tempObject);
    }
    else if(condtionSplit[i].includes("=")){
        condition=condtionSplit[i].split("=");
        x=condition[0].replace(/\s+/g,'');
        y=condition[1];
        z="=";
        var tempObject={
            field : x,
            fieldvalue : y,
            operator : z
        }
        conditionArray.push(tempObject);
    }
    else if(condtionSplit[i].includes(">")) {
        condition=condtionSplit[i].split(">");
        x=condition[0].replace(/\s+/g,'');
        y=condition[1];
        z=">";
        var tempObject={
            field : x,
            fieldvalue : y,
            operator : z
        }
        conditionArray.push(tempObject);
    }
    else {
        condition=condtionSplit[i].split("<");
        x=condition[0].replace(/\s+/g,'');
        y=condition[1];
        z="<";
        var tempObject={
            field : x,
            fieldvalue : y,
            operator : z
        }
        conditionArray.push(tempObject);
    }
}
console.log(conditionArray)