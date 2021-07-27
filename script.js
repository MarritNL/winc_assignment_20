/*
const checkAge = function (age) {
    console.log ('entering checkAge  ');
    if (age >= 18) {
        return 'true';
    }
    else {
        return 'false';
    }
};
console.log (checkAge(10));

 const ageResponse = function (age) {
    console.log ('entering AgeResponse  ');
     const ageCheck = checkAge (age);
     console.log ('entering ageCheck  ');
     if (ageCheck == 'true') {
         return '  hello there  ';
     }
     if (ageCheck == 'false') {
        return '  hey kiddo  ';
    }
 };

 console.log (ageResponse (10));
 */
// VAT exercise 1
/* 
const vatAmount = function (basePrice) {
    return basePrice*0,21;
 }

 const totPrice = function (basePrice) {
     const vat = vatAmount (basePrice);
     return vat + basePrice;
 }

 console.log(totPrice(100));
 */
// VAT exercise 2

const basePrice2 = function (totPrice2) {
    console.log('entering basePrice2  ');
    return totPrice2/1.21;
};

 const vatPrice2 = function (totPrice2) {
    console.log('entering vat2  ');
    const base2 = basePrice2 (totPrice2);
    let base3 = Math.round(base2 * 100) / 100;
    const vat2 = totPrice2-base2;
    let vat3 = Math.round(vat2 * 100) / 100;
    return 'vat= ' + vat3 + ' base= ' + base3;
 };
 console.log (vatPrice2(3459));
