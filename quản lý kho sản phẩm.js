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

var product = [new item('Sony', 'XperiaX', 100), new item('Asus', 'ROG_Phone_6', 9), new item('SamSung', 'ZFold4', 6)];
var stored
var storedproduct
function storedlc(){
    localStorage.setItem(stored, JSON.stringify(product));
    storedproduct = JSON.parse(localStorage.getItem(stored));
    console.log(storedproduct)
}
function hienthisp() {
    storedlc()
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
        product.push(a)
        storedproduct.push(a)
        storedlc()
        console.log(product)
        console.log('stored'+storedproduct)

        hienthisp()
    } else alert('Hãy nhập thông tin vật phẩm muốn thêm')
}

function suatensp(suaten) {
    for (let i = 0; i < product.length; i++) {
        let nhap;
        if (suaten === product[i].getname()) {
            nhap = prompt('Sửa số lượng sản phẩm: ');
            while (nhap == '') {
                nhap = prompt('Sửa số lượng sản phẩm: ');
            }
            product[i].setamount(nhap);

            hienthisp()
        }
    }
}

function xoasp(spxoa) {
    for (let i = 0; i < storedproduct.length; i++) {
        if (spxoa === storedproduct[i].name) {
            storedproduct.splice(i, 1);

            hienthisp()
        }
    }
}

function sortarrayaz() {
    product.sort(function (a, b) {
        if (a.getbrand() < b.getbrand()) {
            return -1;
        }
        if (a.getbrand() > b.getbrand()) {
            return 1;
        }
    })
    hienthisp()
}

function sortarrayza() {

    product.sort(function (a, b) {
        if (a.getbrand() < b.getbrand()) {
            return 1;
        }
        if (a.getbrand() > b.getbrand()) {
            return -1;
        }
    })
    hienthisp()
}

function sortmodelaz() {
    product.sort(function (a, b) {
        if (a.getname() < b.getname()) {
            return -1;
        }
        if (a.getname() > b.getname()) {
            return 1;
        }
    })
    hienthisp()
}

function sortmodelza() {

    product.sort(function (a, b) {
        if (a.getname() < b.getname()) {
            return 1;
        }
        if (a.getname() > b.getname()) {
            return -1;
        }
    })
    hienthisp()
}

function sortamountgl() {

    product.sort(function (a, b) {
        if (a.getamount() < b.getamount()) {
            return -1;
        }
        if (a.getamount() > b.getamount()) {
            return 1;
        }
    })
    hienthisp()
}

function sortamountlg() {

    product.sort(function (a, b) {
        if (a.getamount() < b.getamount()) {
            return 1;
        }
        if (a.getamount() > b.getamount()) {
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