/*Udacity balance quiz, assume this an ATM machine
variables: Balance(number),checkBalance(boolean) and
isActive(boolean).
1. Make the decision whether to check your account or not.
2. If not log 'thank you, have a nice day!'
3. If yes(wants to check):
        a.Check if the account is active and the balance > 0,
          if true log 'your balance is Balance'
        b...
*/


let balance = 1200000000.00;
let checkBalance = true;
let isActive = true;

if(checkBalance){
    if(isActive && balance > 0){
        console.log('Your balance is $'+balance.toFixed(2))
    }else if(!isActive){
        console.log('Your account is inactive, contact your bank.')
    }else if(balance<0){
        console.log('Your balance is negative, contact your bank')
    }else if(balance === 0)[
        console.log('Your account is empty')
    ]
}else{
    console.log('Thank you, have anice day!')
}