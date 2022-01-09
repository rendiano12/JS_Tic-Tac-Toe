const kotak = document.querySelectorAll('.kotak');
const tampilSkorX = document.querySelector('.skor-x span');
const tampilSkorO = document.querySelector('.skor-o span');
const container = document.querySelector('.container');
const pilihStep = document.querySelector('.pilih-step');
const pilihXO = document.querySelectorAll('.pilih-xo');

// variable
let randomBot = kotak[Math.floor(Math.random() * kotak.length)];
let sudahMenang;
let bs;
let skorX = 0;
let skorO = 0;

// array
let arrPertama = [];
let arrKedua = ['i'];

// function
function pilih(kotak) {
    container.style.display = 'none';
    pilihStep.style.display = 'flex';
    pilihXO[0].addEventListener('click', function() {
        container.style.display = 'grid';
        pilihStep.style.display = 'none';
        bs = true;
        sudahMenang = undefined;
    });
    pilihXO[1].addEventListener('click', function() {
        container.style.display = 'grid';
        pilihStep.style.display = 'none';
        bs = false;
        sudahMenang = undefined;
        kotak.forEach(value => {
            value.innerText = '';
        });      
        randomBot.innerText = 'X';
        randomBot.style.color = 'red';
        randomBot.removeEventListener('click', tulisKotak);
    });
}
pilih(kotak);

function komputer(kotak) {
    let komp = kotak[Math.floor(Math.random() * kotak.length)];
    if (komp.innerText === '') {
        if (bs == true) {
            setTimeout(function() {
                komp.innerText = 'O';
                komp.style.color = 'green';
                komp.removeEventListener('click', tulisKotak);   
                arrPertama.push('i');  
                gameHasil(kotak);  
            }, 150);
        } else {
            setTimeout(function() {
                komp.innerText = 'X';
                komp.style.color = 'red';
                komp.removeEventListener('click', tulisKotak);   
                arrKedua.push('i');  
                gameHasil2(kotak);  
            }, 150);
        }        
    } else {
        if (arrPertama.length == 9 || arrKedua.length == 9) {
            if (bs == true) {
                gameHasil(kotak);
            } else {
                gameHasil2(kotak);
            }
        } else {
            komputer(kotak);
        }
    }
}

function tulisKotak() {
    if (bs == true) {
        this.innerText = 'X';
        this.style.color = 'red';
        gameHasil(kotak);
        arrPertama.push('i');
        if (sudahMenang != 'Ya') {
            komputer(kotak);
        } 
    } else {
        this.innerText = 'O';
        this.style.color = 'green'; 
        gameHasil2(kotak);
        arrKedua.push('i');
        if (sudahMenang != 'Ya') {
            komputer(kotak);
        }      
    }

    this.removeEventListener('click', tulisKotak);  
}

function gameHasil(num1) {
    if (
        (num1[0].innerText == 'X' && num1[1].innerText == 'X' && num1[2].innerText == 'X') ||
        (num1[3].innerText == 'X' && num1[4].innerText == 'X' && num1[5].innerText == 'X') ||
        (num1[6].innerText == 'X' && num1[7].innerText == 'X' && num1[8].innerText == 'X') ||
        (num1[0].innerText == 'X' && num1[3].innerText == 'X' && num1[6].innerText == 'X') ||
        (num1[1].innerText == 'X' && num1[4].innerText == 'X' && num1[7].innerText == 'X') ||
        (num1[2].innerText == 'X' && num1[5].innerText == 'X' && num1[8].innerText == 'X') ||
        (num1[0].innerText == 'X' && num1[4].innerText == 'X' && num1[8].innerText == 'X') ||
        (num1[2].innerText == 'X' && num1[4].innerText == 'X' && num1[6].innerText == 'X')
    ) {
        sudahMenang = 'Ya';
        setTimeout(function() {        
            skorX++;
            tampilSkorX.innerText = skorX; 
            alert('Player Menang');
            for (let i = 0; i < num1.length; i++) {
                num1[i].innerText = '';
                num1[i].addEventListener('click', tulisKotak);
            }
            arrPertama = [];
            arrKedua = ['i'];
            setTimeout(function() {
                pilih(kotak);
            }, 200);
        }, 100);        
    } else if (
        (num1[0].innerText == 'O' && num1[1].innerText == 'O' && num1[2].innerText == 'O') ||
        (num1[3].innerText == 'O' && num1[4].innerText == 'O' && num1[5].innerText == 'O') ||
        (num1[6].innerText == 'O' && num1[7].innerText == 'O' && num1[8].innerText == 'O') ||
        (num1[0].innerText == 'O' && num1[3].innerText == 'O' && num1[6].innerText == 'O') ||
        (num1[1].innerText == 'O' && num1[4].innerText == 'O' && num1[7].innerText == 'O') ||
        (num1[2].innerText == 'O' && num1[5].innerText == 'O' && num1[8].innerText == 'O') ||
        (num1[0].innerText == 'O' && num1[4].innerText == 'O' && num1[8].innerText == 'O') ||
        (num1[2].innerText == 'O' && num1[4].innerText == 'O' && num1[6].innerText == 'O')
    ) {
        sudahMenang = 'Ya';
        setTimeout(function() {
            skorO++;
            tampilSkorO.innerText = skorO; 
            alert('Computer Menang');
            for (let i = 0; i < num1.length; i++) {
                num1[i].innerText = '';
                num1[i].addEventListener('click', tulisKotak);
            }
            arrPertama = [];
            arrKedua = ['i'];
            setTimeout(function() {
                pilih(kotak);
            }, 200);
        }, 100); 
    } else {
        if (arrPertama.length == 9 || arrKedua.length == 9) {
            sudahMenang = 'Ya';
            setTimeout(function() {               
                alert('TIE');
                for (let i = 0; i < num1.length; i++) {
                    num1[i].innerText = '';
                    num1[i].addEventListener('click', tulisKotak);
                }
                arrPertama = [];
                arrKedua = ['i'];
                setTimeout(function() {
                    pilih(kotak);
                }, 200);
            }, 100); 
        }
    }
}

function gameHasil2(num1) {
    if (
        (num1[0].innerText == 'X' && num1[1].innerText == 'X' && num1[2].innerText == 'X') ||
        (num1[3].innerText == 'X' && num1[4].innerText == 'X' && num1[5].innerText == 'X') ||
        (num1[6].innerText == 'X' && num1[7].innerText == 'X' && num1[8].innerText == 'X') ||
        (num1[0].innerText == 'X' && num1[3].innerText == 'X' && num1[6].innerText == 'X') ||
        (num1[1].innerText == 'X' && num1[4].innerText == 'X' && num1[7].innerText == 'X') ||
        (num1[2].innerText == 'X' && num1[5].innerText == 'X' && num1[8].innerText == 'X') ||
        (num1[0].innerText == 'X' && num1[4].innerText == 'X' && num1[8].innerText == 'X') ||
        (num1[2].innerText == 'X' && num1[4].innerText == 'X' && num1[6].innerText == 'X')
    ) {
        sudahMenang = 'Ya';
        setTimeout(function() {        
            skorO++;
            tampilSkorO.innerText = skorO; 
            alert('Computer Menang');
            for (let i = 0; i < num1.length; i++) {
                num1[i].innerText = '';
                num1[i].addEventListener('click', tulisKotak);
            }
            arrPertama = [];
            arrKedua = ['i'];
            setTimeout(function() {
                pilih(kotak);
            }, 200);
        }, 100);        
    } else if (
        (num1[0].innerText == 'O' && num1[1].innerText == 'O' && num1[2].innerText == 'O') ||
        (num1[3].innerText == 'O' && num1[4].innerText == 'O' && num1[5].innerText == 'O') ||
        (num1[6].innerText == 'O' && num1[7].innerText == 'O' && num1[8].innerText == 'O') ||
        (num1[0].innerText == 'O' && num1[3].innerText == 'O' && num1[6].innerText == 'O') ||
        (num1[1].innerText == 'O' && num1[4].innerText == 'O' && num1[7].innerText == 'O') ||
        (num1[2].innerText == 'O' && num1[5].innerText == 'O' && num1[8].innerText == 'O') ||
        (num1[0].innerText == 'O' && num1[4].innerText == 'O' && num1[8].innerText == 'O') ||
        (num1[2].innerText == 'O' && num1[4].innerText == 'O' && num1[6].innerText == 'O')
    ) {
        sudahMenang = 'Ya';
        setTimeout(function() {
            skorX++;
            tampilSkorX.innerText = skorX; 
            alert('Player Menang');
            for (let i = 0; i < num1.length; i++) {
                num1[i].innerText = '';
                num1[i].addEventListener('click', tulisKotak);
            }
            arrPertama = [];
            arrKedua = ['i'];
            setTimeout(function() {
                pilih(kotak);
            }, 200);
        }, 100); 
    } else {
        if (arrPertama.length == 9 || arrKedua.length == 9) {
            sudahMenang = 'Ya';
            setTimeout(function() {               
                alert('TIE');
                for (let i = 0; i < num1.length; i++) {
                    num1[i].innerText = '';
                    num1[i].addEventListener('click', tulisKotak);
                }
                arrPertama = [];
                arrKedua = ['i'];
                setTimeout(function() {
                    pilih(kotak);
                }, 200);
            }, 100); 
        }
    }
}

kotak.forEach(tKotak);
function tKotak(valKotak) {
    valKotak.addEventListener('click', tulisKotak);
}