function canVote(age){
    if (age > 18){
        return true;
    }else{
        return false;
    }
}

let ans = canVote (120 );
console.log(ans);