function readName(){
    const firstName = "김이나박최전홍고문양손배조허유남심노정하곽성차주우구신엄"
    const lastName = "가강진나종영주영덕소정민여보하울효우대주미서연시새윤세은다현휴원기규병별동근만명운태환한수아재석"
    let text = ""

    let aIndex = Math.floor(Math.random() * firstName.length)
    let first = firstName[aIndex]

    let lastLen = Math.floor(Math.random() * 3) + 1
    for (var i = 0; i < lastLen; i++){
        let bIndex = Math.floor(Math.random() * lastName.length)
        text = text + lastName[bIndex]
    }
    return first + text
}

let koreanName = readName()
console.log(koreanName)