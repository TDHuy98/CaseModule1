class item {
    brand;
    name;
    amount;

    constructor(brand, name, amount) {
        this.brand = brand;
        this.name = name;
        this.amount = amount;
    }

    getbrand() {
        return this.brand;
    }

    getname() {
        return this.name;
    }

    getamount() {
        return this.amount;
    }

    setbrand(brand) {
        return this.brand = brand;
    }

    setname(name) {
        return this.name = name;
    }

    setamount(amount) {
        return this.amount = amount
    }
}

// var product = [new item('Sony', 'XperiaX', 100), new item('Asus', 'ROG_Phone_6', 9), new item('SamSung', 'ZFold4', 6)];

var stored
if (JSON.parse(localStorage.getItem(stored)) == null) {
    localStorage.setItem(stored, JSON.stringify([new item('', '', '')]));
}
var storedproduct = JSON.parse(localStorage.getItem(stored));
console.log(storedproduct)


function hienthisp() {
    let stt = 1;
    let chuoicaccaulenh = '';
    for (let i = 0; i < storedproduct.length; i++, stt++) {
        if (storedproduct[i] !== 'empty') {
            let caulenh = '<tr class="tablelist">' + '<td>' + stt + '</td>'
                + '<td class="tablelist">' + storedproduct[i].brand + '</td>'
                + '<td class="tablelist">' + storedproduct[i].name + '</td>'
                + '<td class="tablelist">' + storedproduct[i].amount + '</td>'
                + '<td class="tablelist">' + '<button onclick=' + 'suatensp("' + storedproduct[i].name + '")>' + 'Sửa' + '</button>'
                + '</td>'
                + '<td class="tablelist">' + '<button onclick=' + 'xoasp("' + storedproduct[i].name + '")>' + 'Xóa' + '</button>'
                + '</td>'
                + '</tr>';
            chuoicaccaulenh += caulenh
        }
    }
    document.getElementById('p1').innerHTML =

        '<table class="tablelist">'
        + '<tr class="tablelist">'
        + '<th class="trlist">STT</th>'
        + '<th class="tablelist">Hãng</th>'
        + '<th class="tablelist">Model</th>'
        + '<th class="tablelist">Số lượng</th>'
        + '<th class="tablelist" colspan="2">Tùy chỉnh</th>'
        + '</tr>' + chuoicaccaulenh
        + '</table>';
}

function themsp() {
    let brand = document.getElementById('spthem').value;
    let model = document.getElementById('nameinp').value;
    let amount = document.getElementById('amountinp').value;
    if (brand != '' && model != '' & amount != '') {
        let a = new item(brand, model, amount)
        if (storedproduct[0] == {brand: "", name: '', amount: ''}) {

            storedproduct.shift()
        } else {
            storedproduct.push(JSON.parse(JSON.stringify(a)))
            localStorage.setItem(stored, JSON.stringify(storedproduct));

            hienthisp()
        }
    } else alert('Hãy nhập thông tin vật phẩm muốn thêm')
}

function suatensp(suaten) {
    for (let i = 0; i < storedproduct.length; i++) {
        let nhap;
        if (suaten === storedproduct[i].name) {
            nhap = prompt('Sửa số lượng sản phẩm: ');
            while (nhap == '') {
                nhap = prompt('Sửa số lượng sản phẩm: ');
            }
            storedproduct[i].amount = nhap;

            hienthisp()
        }
    }
}

function xoasp(spxoa) {
    for (let i = 0; i < storedproduct.length; i++) {
        if (spxoa === storedproduct[i].name) {
            storedproduct.splice(i, 1);
            localStorage.setItem(stored, JSON.stringify(storedproduct));

            hienthisp()
        }
    }
}

function sortarrayaz() {
    storedproduct.sort(function (a, b) {
        if (a.brand < b.brand) {
            return -1;
        }
        if (a.brand > b.brand) {
            return 1;
        }
        localStorage.setItem(stored, JSON.stringify(storedproduct));
    })
    hienthisp()
}

function sortarrayza() {

    storedproduct.sort(function (a, b) {
        if (a.brand < b.brand) {
            return 1;
        }
        if (a.brand > b.brand) {
            return -1;
        }
    })
    hienthisp()
}

function sortmodelaz() {
    storedproduct.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
    })
    hienthisp()
}

function sortmodelza() {

    storedproduct.sort(function (a, b) {
        if (a.name < b.name) {
            return 1;
        }
        if (a.name > b.name) {
            return -1;
        }
    })
    hienthisp()
}

function sortamountgl() {

    storedproduct.sort(function (a, b) {
        if (a.amount < b.amount) {
            return -1;
        }
        if (a.amount > b.getamount) {
            return 1;
        }
    })
    hienthisp()
}

function sortamountlg() {

    storedproduct.sort(function (a, b) {
        if (a.amount < b.amount) {
            return 1;
        }
        if (a.amount > b.amount) {
            return -1;
        }
    })
    hienthisp()
}

function timkiem() {
    let tim = document.getElementById('search').value;
    for (let i = 0; i < product.length - 1; i++) {
        if (tim == product[i].getbrand() || tim == product[i].getname()) {

        }
    }
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// function selectsort(){
//     let type=document.getElementById('sortitem').value;
//     if (type == bybrandaz){
//         sortarrayaz()
//     }else if (type == bybrandza){
//         sortarrayza()
//     }else if (type==bymodelaz){
//         sortmodelaz()
//     }else if (type==bymodelza){
//         sortmodelza()
//     }else if (type==byamountgl){
//         sortamountgl()
//     }else sortamountlg()
// }