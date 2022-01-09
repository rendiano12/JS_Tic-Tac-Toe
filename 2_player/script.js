const kotak = document.querySelectorAll('.kotak');
const tampilSkorX = document.querySelector('.skor-x span');
const tampilSkorO = document.querySelector('.skor-o span');
const turn = document.querySelector('.turn');
const container = document.querySelector('.container');
const skor = document.querySelector('.skor');
const masukanNama = document.querySelector('.masukan-nama');
const inpNama = document.querySelectorAll('input[type="text"]');
const submit = document.querySelector('button');

// variable
let bs = false;
let skorX = 0;
let skorO = 0;
let valNama1;
let valNama2;

// array
let arr = [];

// function
function pilih() {
    container.style.display = 'none';
    turn.style.display = 'none';
    skor.style.display = 'none';
    submit.addEventListener('click', function() {
        valNama1 = inpNama[0].value;
        valNama2 = inpNama[1].value;
        if (valNama1 == '' || valNama2 == '') {
            alert('Kedua nama harus diisi');           
        } else if (valNama1.length > 10 || valNama2.length > 10) {
            alert('Panjang nama tidak boleh lebih dari 10 huruf');
        } else {
            masukanNama.style.display = 'none';
            container.style.display = 'grid';
            turn.style.display = 'inherit';
            turn.innerText = `${valNama1} = X`;
            skor.style.display = 'flex';
            tampilSkorX.insertAdjacentText('afterbegin', `${valNama1} = `);
            tampilSkorO.insertAdjacentText('afterbegin', `${valNama2} = `);
        } 
    });
}
pilih();

function tulisKotak() {
    if (bs == false) {
        this.innerText = 'X';
        this.style.color = 'red';
        this.removeEventListener('click', tulisKotak);
        bs = true;
    } else {
        this.innerText = 'O';
        this.style.color = 'green';
        this.removeEventListener('click', tulisKotak);
        bs = false;
    }

    arr.push('i');
    gameHasil(kotak);
    tampilTurn(turn);
}

function tampilTurn(turn) {
    if (bs == false) {
        turn.innerText = `${valNama1} = X`;
        turn.style.color = 'red'; 
    } else {
        turn.innerText = `${valNama2} = O`;
        turn.style.color = 'green'; 
    }
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
        setTimeout(function() {
            skorX++;
            tampilSkorX.innerText = `${valNama1} = ${skorX}`; 
            alert(`${valNama1} Menang`);
            for (let i = 0; i < num1.length; i++) {
                num1[i].innerText = '';
                num1[i].addEventListener('click', tulisKotak);
            }
            arr = [];
            bs = false;
            turn.innerText = `${valNama1} = X`;
            turn.style.color = 'red'; 
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
        setTimeout(function() {
            skorO++;
            tampilSkorO.innerText = `${valNama2} = ${skorO}`; 
            alert(`${valNama2} Menang`);
            for (let i = 0; i < num1.length; i++) {
                num1[i].innerText = '';
                num1[i].addEventListener('click', tulisKotak);
            }
            arr = [];
            bs = true;
            turn.innerText = `${valNama2} = O`;
            turn.style.color = 'green';  
        }, 100); 
    } else {
        if (arr.length == 9) {
            setTimeout(function() { 
                alert('TIE');
                for (let i = 0; i < num1.length; i++) {
                    num1[i].innerText = '';
                    num1[i].addEventListener('click', tulisKotak);
                }
                arr = [];
                if (bs == true) {
                    bs = false;
                    turn.innerText = `${valNama1} = X`;
                    turn.style.color = 'red'; 
                } else {
                    bs = true;
                    turn.innerText = `${valNama2} = O`;
                    turn.style.color = 'green'; 
                }
            }, 100); 
        }
    }
}

kotak.forEach(tKotak);
function tKotak(valKotak) {
    valKotak.addEventListener('click', tulisKotak);
}