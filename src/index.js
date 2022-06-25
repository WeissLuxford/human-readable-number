module.exports = function toReadable (number) {
  
    let fromZeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let fromTenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let fromZeroToNinety = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = "hundred"
    let splitNumber
    let readableNumber
    let decimal
    
    
    function humanReadableNumber(g){
        if(g >= 0 && g <= 19 ){
            return fromOneToNineteen(g)
        } else if ( g >= 20 && g <= 99){
            fromTwelveToNinetynine(g)
        } else if ( g >= 100 && g <= 119){
            fromOneHundredToNineteen(g)
        } else if ( g >= 120 ){
            fromTwoHundredToNinetynine(g)
        }


        if(readableNumber.split(' ')[1] === fromZeroToNine[0] ){
            readableNumber = readableNumber.split(' ')[0]
        } else if (readableNumber.split(' ')[2] === fromZeroToNine[0] || readableNumber.split(' ')[2] === 'undefined'){
           readableNumber = `${readableNumber.split(' ')[0]} ${readableNumber.split(' ')[1]} ${readableNumber.split(' ')[3]}`;
    
           if(readableNumber.split(' ')[2] == 'undefined' || readableNumber.split(' ')[2] === fromZeroToNine[0] )
               {readableNumber = `${readableNumber.split(' ')[0]} ${readableNumber.split(' ')[1]}`}
        
            } else if (readableNumber.split(' ')[3] === fromZeroToNine[0] || readableNumber.split(' ')[3] === 'undefined'){
            readableNumber = `${readableNumber.split(' ')[0]} ${readableNumber.split(' ')[1]} ${readableNumber.split(' ')[2]}`
        }   
    
       
        return readableNumber
    }
    
    console.log(humanReadableNumber(900));
    
    
    function fromTwoHundredToNinetynine(g) {
        splitNumber = g.toString().split('');
        decimal = splitNumber[1] + splitNumber[2];
        if( decimal >= 0 && decimal <= 19){
            readableNumber = `${fromZeroToNine[splitNumber[0]]} ${hundred} ${fromOneToNineteen(decimal)}`;
        } else if ( decimal >= 20 && decimal <= 99 ) {
            readableNumber = `${fromZeroToNine[splitNumber[0]]} ${hundred} ${fromTwelveToNinetynine(decimal)}`;
        }
        return readableNumber
    }
    
    
    function fromOneHundredToNineteen(g){
        splitNumber = g.toString().split('');
        decimal = splitNumber[1] + splitNumber[2];
        if( g >= 100 && g <= 109) {
            readableNumber = `${fromZeroToNine[splitNumber[0]]} ${hundred} ${fromZeroToNine[splitNumber[2]]}`;
        } else if ( g >= 110 && g <= 119) {
            readableNumber = `${fromZeroToNine[splitNumber[0]]} ${hundred} ${fromTenToNineteen[decimal - 10]}`;
        }
        return readableNumber
    }
    
    
    function fromTwelveToNinetynine(g) {
            g.toString().split("")
            splitNumber = g.toString().split("")
            readableNumber = `${fromZeroToNinety[splitNumber[0]]} ${fromZeroToNine[splitNumber[1]]}`
        return readableNumber
    }
    
    
    function fromOneToNineteen(g) {
        if  ( g >= 0 && g <= 9 ){ 
            readableNumber = fromZeroToNine[+g]
        } else if ( g >= 10 && g <= 19){
            readableNumber = fromTenToNineteen[+g - 10]
        } 
        return readableNumber
    }

    return humanReadableNumber(number)
}
