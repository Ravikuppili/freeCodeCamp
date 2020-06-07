const myArr = [ 
  { id: 'ONE HUNDRED', val: 100.00},
  { id: 'TWENTY', val: 20.00},
  { id: 'TEN', val: 10.00},
  { id: 'FIVE', val: 5.00},
  { id: 'ONE', val: 1.00},
  { id: 'HALF-DOLLAR', val:0.50},
  { id: 'QUARTER', val: 0.25},
  { id: 'DIME', val: 0.10},
  { id: 'NICKEL', val: 0.05},
  { id: 'PENNY', val: 0.01}
];
function checkCashRegister(price, cash, cid) {
  let regDrw = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, { total: 0 });
  let messageArr = { status: null, change: [] };
  let change = cash - price;
  if (regDrw.total === change) {
    messageArr.status = 'CLOSED';
    messageArr.change = cid;
    console.log(messageArr);
    return messageArr;
  };
  if (regDrw.total < change) {
    messageArr.status = 'INSUFFICIENT_FUNDS';
    console.log(messageArr)
    return messageArr;
  };
  var change_arr = myArr.reduce(function(acc, curr) {
    var value = 0;
    while (regDrw[curr.id] > 0 && change >= curr.val) {
      change -= curr.val;
      regDrw[curr.id] -= curr.val;
      value += curr.val;
      change = Math.round(change * 100) / 100;
    };
    if (value > 0) {
        acc.push([ curr.id, value ]);
    };
    return acc;
  }, []);
  if (change_arr.length < 1 || change > 0) {
    messageArr.status = 'INSUFFICIENT_FUNDS';
    console.log(messageArr);
    return messageArr;
  };
  messageArr.status = 'OPEN';
  messageArr.change = change_arr;
  console.log(messageArr);
  return messageArr;
};
checkCashRegister(19.25, 70.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", .25], ["HALF-DOLLAR", 4.00], ["ONE", 0.00], ["FIVE", 5.00], ["TEN", 20.00], ["TWENTY", 40.00], ["ONE HUNDRED", 100.00]]);
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);