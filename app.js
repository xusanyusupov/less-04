    // forga misollar
{ 
    // k sonini n marta chiqarish 
// {
//     let k = 5;  
//     let n = 8;  
//     let i = 0
// for (i = 0; i < n; i++) {
//   console.log(k);
// }
// }



////// a va b sonlarni orasidagi va a va bni ham chiqaradigan dastur 
// {

//     let a = 3;  
//     let b = 55; 

//     if (a < b) {
//       let count = 0;

//       for (let i = a; i <= b; i++) {
//         console.log(i);
//         count++;
//       }

//     } else {
//       console.log("a soni b sonidan kichik bo'lishi kerak!");
//     }

// }


////// a va b sonlarni orasidagi va a va bni ham chiqaradigan dastur kamayish tartbda
// {
//     let a = 3;  
//     let b = 55; 

//     if (a < b) {
//       let count = 0;

//       for (let i = a; i <= b; i++) {
//         console.log(i);
//         count++;
//       }

//     } else {
//       console.log("a soni b sonidan kichik bo'lishi kerak!");
//     }

// }


////// 1, 2, ..., 10 kg konfetni narxini chiqaruvchi kanfetning narxi berilganda
// {
//     //pastdagi kiritiladigan sonni a va b o'zgaruvchi sifatida qabul qilingan a = 3 b = 11
// function sonQabul(a, b) {
//     if (a >= b) {
//         console.log("a soni b sonidan kichik bo'lishi kerak.");
//         return;
//     }
//     let count = 0;
//     for (let i = b + 1; i > a; i--) {
//         console.log(i-1);
//         count++;
//     }
// }

// sonQabul(1, 11); //kiritiladigan son

// }




//////0.1, 0.2, ..., 0.9, 1 kg konfetni narxini chiqaruvchi programma tuzilsin.
// {
//     // bu yerda pastdagi 10000 qiymatni kg so'zida  saqladik
//     function kanfet(kg) {
//         for(let i = 1; i <= 10; i++ ){
//             let all = i * kg
//             console.log(`${i}kg ${all} so'm`);
//         }
//     }

//     kanfet(10000) //// kanfetni pulidi bu yerdan kiriting

// }



//////1.2, 1.4, ..., 2 kg konfetni narxini chiqaruvchi programma tuzilsin.
// {
// let narxKg = 10_000 //// konfetning narxi

// for (let i = 1.2; i <= 2; i += 0.2) {
//     let narx = i * narxKg;
//     console.log(i.toFixed(1) + " kg konfetning narxi: " + narx.toFixed(0) + " so'm");
// }

// }




////// a dan b gacha bo'lgan barcha butun sonlar yig'indisini chiqaruvchi programma tuzilsin.
// {
//     let a = 10
//     let b = 20
//     let c = 0
//     if (a <= b) {
//         for(let i = a; i <= b; i++){
//             c += i
//             console.log(`${a} dan ${b} gacha bo'lgan barcha butun sonlar ${i}`);
//         }
//         console.log(`A dan B gacha sonlar yig'indisi ${c}`);
//     } else {
//         console.log('XATO!');
//     }
// }




//////a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini chiqaruvchi programma tuzilsin.
// {
//        // 10 dan 20 gacha bo'lgan sonlar ko'paytmasi
//     let product = 1;
//     let i 
//     for ( i = 10; i <= 20; i++) {
//         product *= i; 
//     }

//     console.log("10 dan 20 gacha bo'lgan sonlar ko'paytmasi: " + product);

// }


}

// while haqida misollar 

{
   

    // {
    //     //////1-masala
    //     function whileone(A, B) {
    //         let remainder = A; 
        
    //         while (remainder >= B) { 
    //             remainder -= B; 
    //         }
        
    //         return remainder; 
    //     }
        
    //     let A = 23;
    //     let B = 5;
    //     console.log(whileone(A, B)); 
        
    // }




    //{
         ////// 5 - MASALA
    // {
        ////1-masala
    // let n = 32
    // let k = 0
    // while (n >= 2) {
    //     k++
    //     n /= 2
    // }
    // console.log(k);
    // }
    //}

    // {
    //     ////// 7-masala
    //     function all(n) {
    //         let k = 1; 
    //         while (k * k <= n) { 
    //             k++; 
    //         }
    //         return k; 
    //     }
    //     let n = 15;
    //     console.log(all(n)); 
    // }

    // {
    //     /////// 10-masala
    //     function calc(n) {
    //         let k = 0; 
    //         let power = 1;
    //         while (power * 3 <= n) { 
    //             k++; 
    //             power *= 3;
    //         }
    //         return k; 
    //     }
    //     let n = 28;
    //     console.log(calc(n)); 
        
    // }


}

// li lar 
let li = document.querySelectorAll('.links ul li')
// rasm 
let imgData = document.querySelector('.wrapper__img .d__img')
// rasm tagidagi title 
let imgTitle = document.querySelector('.img__title')
let parentLi = document.querySelector('.liparent')

parentLi.onmouseleave = () => {
    imgData.setAttribute('src','./img/najot talim.png')
    imgTitle.textContent = ""
    document.querySelector('.img__text').textContent = ""    
    imgData.style.background = '#f0ece2'
}

li.forEach((item) => {
    item.addEventListener('mouseenter',()=>{
        imgData.setAttribute('src',item.getAttribute('data-img'))
        imgData.style.background = '#ffff'
        imgTitle.textContent = item.textContent
        document.querySelector('.img__text').textContent = item.getAttribute('data-text')
    })

})

let tit = document.querySelector('.tit')

setTimeout(() => {
    tit.style.top = '10%'
}, 2000);

let wrapper = document.querySelector('.wrapper')
setTimeout(() => {
    wrapper.style.background = '#f0ece2'
}, 2200);

let all__title = document.querySelector('.all__title')
setTimeout(() => {
    all__title.style.background = '#f0ece2'
}, 2200);

let c = document.querySelectorAll('.li')
c.forEach((a) =>{
    setTimeout(() => {
        all__title.style.color = '#BD9057'
        a.style.color = '#BD9057'
    }, 2200);
})