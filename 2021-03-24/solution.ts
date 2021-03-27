const fn = (s: string): string => {
    if (isNaN(Number(s))) {
        return "a non-number";
    } else {
        let a: string = s;
        let type: string = "a";
        //test positive/negative
        if (a.match(/\-/g)) {
            type += " negative";
        } else {
            type += " positive";
        }
        //test real / or non-real
        if (a.match(/\./g)) {
            type += " real";
        }
        //test scientific notation
        if (a.match(/\e/g)) {
            type += " number in scientific notation";
        } else {
            type += " number";
        }
        return type;
    }
}

console.log(fn("10")+"\n", 
fn("-10")+"\n", 
fn("10.")+"\n", 
fn("-10.1")+"\n", 
fn("1e5")+"\n", 
fn("a")+"\n", 
fn("x 1")+"\n", 
fn("a -2")+"\n", 
fn("-"));