function meeting(s) {
    let alphabet = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 };
    let letter = '',
        number = 0,
        string = ''
        for(let i = 0; i < s.length; i++) {
            letter = s.charAt(i)
            number = alphabet[letter.toLocaleLowerCase()]
            if(number) string += number + " "
        }
    console.log(typeof string)
}


let s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
meeting(s)