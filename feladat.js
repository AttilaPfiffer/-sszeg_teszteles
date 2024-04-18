export function fuggvenyem(szam) {
    let osszeg = 0;
    while (szam > 0) {
        let maradekosan = szam % 10;
        osszeg += maradekosan
        szam = Math.floor(szam / 10)
    }
    return osszeg
}

export function tesztSzamJegyekOsszege() {
    const tesztEsetek = [
    { 
        n: 312,
        vart: 6
    },
    {
        n: 3122,
        vart: 8
    },
    {
        n: 4,
        vart: 0
    },
    {
        n: "szamalk",
        vart: "HIBA"
    },
    {
        n: 5.13,
        vart: 5
    },
    {
        n: -6,
        vart: -6
    },
    {
        n: 1234567890,
        vart: 45
    },
    {
        
    }
    ]
    tesztEsetek.forEach(function(teszt) {
        console.assert(teszt.vart === fuggvenyem(teszt.n), `n: ${teszt.n} vart: ${teszt.vart} kapott: ${fuggvenyem(teszt.n)}, HIBA!`)
    })
    
    
}