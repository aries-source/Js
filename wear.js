const shirtWidth = 40.99;
const shirtLength = 39.99;
const shirtSleeve = 10.42;

// your code goes here
if((shirtWidth>=18&&shirtWidth<20)&&(shirtLength>=28&&shirtLength<29)&&
    (shirtSleeve>=8.13&&shirtSleeve <8.38)){
  	console.log('S')
}else if((shirtWidth>=20&&shirtWidth<22)&&(shirtLength>=29&&shirtLength<30)&&
   (shirtSleeve>=8.38&&shirtSleeve <8.63)){
  	console.log('M')
}else if((shirtWidth>=22&&shirtWidth<24)&&(shirtLength>=30&&shirtLength<31)&&
    (shirtSleeve>=8.63&&shirtSleeve <8.88)){
         console.log('L')
 }else if((shirtWidth>=24&&shirtWidth<26)&&(shirtLength>=31&&shirtLength<33)&&
      (shirtSleeve>=8.88&&shirtSleeve <9.63)){
          console.log('XL')
 }else if((shirtWidth>=26&&shirtWidth<28)&&(shirtLength>=33&&shirtLength<34)&&
     (shirtSleeve>=9.63&&shirtSleeve <10.13)){
          consloe.log('2XL')
 }else if((shirtWidth>=28)&&(shirtLength>=34)&&(shirtSleeve>=10.1)){
          console.log('3XL')
 }else{
 	console.log('NA')
 }
