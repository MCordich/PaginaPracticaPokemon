//ejemplo pokemon
let pokemon = {
    name : "mudkip",
    type : "water",
    hp :    "10",
    atk: "4",
    def: "6",
    spatk: "4",
    spdef: "4",
    spd: "3",

    nameAndTypesMudkip : function(){
        return this.name + ' ' + this.type;
    },
    mudkipFullStat : function(){
        return this.hp + ' ' + this.atk+ ' ' + this.def + ' ' + this.spatk + ' ' + this.spdef + ' ' + this.spd;
    }
}

console.log(pokemon.nameAndTypesMudkip())
console.log(pokemon.mudkipFullStat())