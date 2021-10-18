console.log("Merhaba Kodlama.io")
//JS typesafe değildir (typesafe demek baştaki tanımladığın veri tipiyle devam etmek zorundasın demek)
let dolarBugun = 9.30
let  dolarDun = 9.20

{
let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
// euroDun = 11 const tanımında sonradan değer değiştiremiyoruz o yüzden  bu yanlış
console.log(euroDun)
//camelCasing
//PascalCasing
// dizi = array birden fazla veriyi tutmamızı sağlar. her veri türünü tutabiliriz
let konutKredileri = ["konut kredisi","emlak konut kredisi","kamu konut kredisi","özel konut kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}

console.log("</ul>")

console.log(konutKredileri)
