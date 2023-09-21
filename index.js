function nricCheck(nric){
    const checkArr = {
        "s":["j","z","i","h","g","f","e","d","c","b","a"],
        "t":["x","w","u","t","r","q","p","n","m","l","k"]
    }
    if(!nric || nric.length!==9){
        return false;
    }
    if(nric.toLowerCase()[0]=="s" || nric.toLowerCase()[0]=="t"){
        const numbersArray = nric.split("").slice(1,8).map(Number);
        const checksumArray = [2,7,6,5,4,3,2];
        let sum = 0;

        for(let i=0;i<checksumArray.length;i++){
            const mult = checksumArray[i] * numbersArray[i];
            sum = sum + mult;
        }
        const modulo = sum % 11;
        let getChecksumChar = "";
        switch(nric.toLowerCase()[0]){
            case "s":
                getChecksumChar = checkArr["s"][modulo];
                break;
            case "t":
                getChecksumChar = checkArr["t"][modulo];
                break;
                default:
        }
        if(nric[8].toLowerCase() == getChecksumChar){
            return true;
        }
        return false;
    }
  }
