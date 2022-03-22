let beforeTip = 200; 
function calculateTip(bill){
    return bill * 0.2
}
function getBillTotal(total){
    let afterTip = calculateTip(total) + beforeTip
    return afterTip.toFixed(2)
}

console.log(getBillTotal(beforeTip));