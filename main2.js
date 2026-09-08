export function isVote(age) {
    if (age >= 18) {    
        return true;
        // or directly console.log("eligible")
    } else {
        return false;
        // or directly console.log("not eligible")
    }
}