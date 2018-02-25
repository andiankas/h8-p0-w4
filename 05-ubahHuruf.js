
function ubahHuruf(kata) {
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let tampung = '';
    let kataBaru = '';

    for (let i = 0; i < kata.length; i++) {
        tampung = alphabet.indexOf(kata[i]);
        kataBaru += alphabet[tampung + 1];
    }
    return kataBaru;

}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu