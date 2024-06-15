// Product list
let products = [{
    id: 1,
    status: 1,
    title: 'Nấm đùi gà xào cháy tỏi',
    img: './assets/img/products/nam-dui-ga-chay-toi.jpeg',
    category: 'Món mặn',
    price: 200000,
    desc: 'Một Món chay ngon miệng với nấm đùi gà thái chân hương, xào săn với lửa và thật nhiều tỏi băm, nêm nếm với mắm và nước tương chay, món ngon đưa cơm và rất dễ ăn cả cho người lớn và trẻ nhỏ.'
},
{
    id: 2,
    status: 1,
    title: 'Rau xào ngũ sắc',
    img: './assets/img/products/rau-xao-ngu-sac.png',
    category: 'Món mặn',
    price: 180000,
    desc: 'Rau củ quả theo mùa tươi mới xào với nước mắm chay, gia vị để giữ được hương vị ngọt tươi nguyên thủy của rau củ, một món nhiều vitamin và chất khoáng, rất dễ ăn.'
},
{
    id: 3,
    status: 1,
    title: 'Bánh lava phô mai nướng',
    img: './assets/img/products/banh_lava_pho_mai_nuong.jpeg',
    category: 'Món mặn',
    price: 180000,
    desc: 'Rau củ quả theo mùa tươi mới xào với nước mắm chay, gia vị để giữ được hương vị ngọt tươi nguyên thủy của rau củ, một món nhiều vitamin và chất khoáng, rất dễ ăn.'
},
{
    id: 4,
    status: 1,
    title: 'Set lẩu thái Tomyum',
    img: './assets/img/products/lau_thai.jpg',
    category: 'Món mặn',
    price: 699000,
    desc: 'Lẩu Thái là món ăn xuất phát từ món canh chua Tom yum nổi tiếng của Thái Lan. Nước lẩu có hương vị chua chua cay cay đặc trưng. Các món nhúng lẩu gồn thịt bò, hải sản, rau xanh và các loại nấm.'
},
{
    id: 5,
    status: 1,
    title: 'Cơm chiên cua',
    img: './assets/img/products/com_chien_cua.png',
    category: 'Món mặn',
    price: 280000,
    desc: 'Cơm nấu từ gạo ST25 dẻo, hạt cơm tơi ngon, thịt cua tươi chắc nịch, bếp đảo cho săn hạt cơm, rồi đổ cua đã xào thơm vào, xúc miếng cơm chiên cua đầy đặn có thêm hành phi giòn rụm, món ngon như vậy đảm bảo tranh nhau đến miếng cuối cùng.'
},

{
    id: 6,
    status: 1,
    title: 'Súp bào ngư hải sâm (1 phần)',
    img: './assets/img/products/sup-bao-ngu-hai-sam.jpeg',
    category: 'Món mặn',
    price: 540000,
    desc: 'Súp bào ngư Bếp Hoa có bào ngư kết hợp cùng sò điệp, tôm tươi... được hầm trong nhiều giờ với rau củ & nấm đông trùng tạo ra vị ngọt tự nhiên hiếm thấy. Một món ăn khiến cả người ốm cũng thấy ngon miệng đó ạ.'
},

{
    id: 7,
    status: 1,
    title: 'Tai cuộn lưỡi',
    category: 'Món mặn',
    img: './assets/img/products/tai-cuon-luoi.jpeg',
    price: 340000,
    desc: 'Tai heo được cuộn bên trong cùng phần thịt lưỡi heo. Phần tai bên ngoài giòn dai, phần thịt lưỡi bên trong vẫn mềm, có độ ngọt tự nhiên của thịt. Tai cuộn lưỡi được chấm với nước mắm và tiêu đen.'
},

{
    id: 8,
    status: 1,
    title: 'Xíu mại tôm thịt 10 viên',
    img: './assets/img/products/xiu_mai_tom_thit_10_vien.jpg',
    category: 'Món mặn',
    price: 140000,
    desc: 'Quý khách hấp chín trước khi ăn. Những miếng há cảo, sủi cảo, hoành thánh với phần nhân tôm, sò điệp, hải sản tươi ngon hay nhân thịt heo thơm ngậy chắc chắn sẽ khiến bất kỳ ai thưởng thức đều cảm thấy rất ngon miệng.'
},

{
    id: 9,
    status: 1,
    title: 'Trà phô mai kem sữa',
    category: "Nước uống",
    img: './assets/img/products/tra-pho-mai-kem-sua.jpg',
    price: 34000,
    desc: 'Món Nước uống vừa béo ngậy, chua ngọt đủ cả mà vẫn có vị thanh của trà.',
},
{
    id: 10,
    status: 1,
    title: 'Trà đào chanh sả',
    category: "Nước uống",
    img: './assets/img/products/tra-dao-chanh-sa.jpg',
    price: 25000,
    desc: 'Trà đào chanh sả có vị đậm ngọt thanh của đào, vị chua chua dịu nhẹ của chanh và hương thơm của sả.',
},
{
    id: 11,
    status: 1,
    title: 'Bánh chuối nướng',
    category: 'Món tráng miệng',
    img: './assets/img/products/banh-chuoi-nuong.jpeg',
    price: 60000,
    desc: 'Bánh chuối nướng béo ngậy mùi nước cốt dừa cùng miếng chuối mềm ngon sẽ là Món tráng miệng phù hợp với mọi người.'
},
{
    id: 12,
    status: 1,
    title: 'Há cảo sò điệp (10 viên)',
    img: './assets/img/products/ha_cao.jpg',
    category: 'Món mặn',
    price: 140000,
    desc: 'Những miếng há cảo, sủi cảo, hoành thánh với phần nhân tôm, sò điệp, hải sản tươi ngon hay nhân thịt heo thơm ngậy chắc chắn sẽ khiến bất kỳ ai thưởng thức đều cảm thấy rất ngon miệng.'
},
]



// Close popup 
const body = document.querySelector("body");

// Auto hide header on scroll
const headerNav = document.querySelector(".header-bottom");
const advancedSearch = document.querySelector(".advanced-search");
const mainMenu = document.querySelector(".main-menu");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        headerNav.classList.add("hide")

    } else {
        headerNav.classList.remove("hide")
        advancedSearch.classList.remove("hide");
    }
    lastScrollY = window.scrollY;
})

// close searchAdvanced
function closeSearchAdvanced() {
    toast({ title: 'Success', message: 'Kết thúc tìm kiếm nâng cao thành công !', type: 'success', duration: 1500 });
    document.querySelector('#trangchu .home-slider').classList.remove("hide");
    document.querySelector('#home-service').style.display = "flex";
    document.querySelector('#home-title .home-title').innerHTML = "KHÁM PHÁ THỰC ĐƠN CỦA CHÚNG TÔI";
    advancedSearch.classList.remove("open");
}

function changeSearchPage() {
    document.querySelector('#trangchu .home-slider').classList.add("hide");
    document.querySelector('#home-service').style.display = "none";
    document.querySelector('#home-title .home-title').innerHTML = "Kết quả tìm kiếm";
    advancedSearch.classList.add("open");
}


// Auto switch main-wrapper
lastPath = window.location.pathname.split('/').pop();

if (lastPath == 'index.html') {
    var counter = 1;
    let currentUrl = window.location.href;
    console.log(currentUrl);
    setInterval(function () {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }, 2500);
}

// get datas from products.json 
function uploadProduct(showProduct) {
    // add data products to HTML
    let productHtml = '';
    let listProducts = document.querySelector('.main-menu');
    if (showProduct.length == 0) {
        document.getElementById("home-title").style.display = "none";
        productHtml = `<div class="no-result"><div class="no-result-h">Tìm kiếm không có kết quả</div><div class="no-result-p">Xin lỗi, chúng tôi không thể tìm được kết quả hợp với tìm kiếm của bạn</div><div class="no-result-i"><i class="fa-light fa-face-sad-cry"></i></div></div>`;
    } else {
        let products = showProduct.map(function (product) {
            return `
            <div class="product-preview">
                <a href="productDetail.html?id=${product.id}" class="item">
                    <img class="thumbnail" src="${product.img}">
                </a>    
                <div class="product-info">
                    <p class="product-title">
                        ${product.title}
                    </p>
                    <p class="product-price">${product.price} &#8363;</p>
                    <div class="center">
                        <button class="order-button" onclick="datmon()">
                            <i class="bx bx-cart"></i>
                            <p>Đặt món</p>
                        </button>
                    </div>
                </div>
            </div>
            
            `;

        });
        document.getElementById("home-title").style.display = "";
        productHtml = `<section class="product-grid">${products.join('')}</section><section style`;
    }
    listProducts.innerHTML = productHtml;


}

window.onload = uploadProduct(products);


function showHomeProduct(products) {
    uploadProduct(products);
    list = document.querySelectorAll('.product-grid .product-preview');
    loadItem();
}

// Kiểm tra xem có tài khoản đăng nhập không ?
function kiemtradangnhap() {
    let currentUser = localStorage.getItem('currentuser');
    if (currentUser != null) {
        let user = JSON.parse(currentUser);
        document.querySelector('.auth-container').innerHTML = `<span class="text-tk">${user.fullname} <i class="fa-sharp fa-solid fa-caret-down"></span>`
        document.querySelector('.header-middle-right-menu').innerHTML = `<li><a href="javascript:;" onclick="myAccount()"><i class="fa-light fa-circle-user"></i> Tài khoản của tôi</a></li>
            <li><a href="javascript:;" onclick="orderHistory()"><i class="fa-regular fa-bags-shopping"></i> Đơn hàng đã mua</a></li>
            <li class="border"><a id="logout" href="javascript:;"><i class="fa-light fa-right-from-bracket"></i> Thoát tài khoản</a></li>`
        document.querySelector('#logout').addEventListener('click', logOut);
        document.querySelector('.user-icon').innerHTML = '<i class="fa-solid fa-user"></i>'
    }
}

window.onload = kiemtradangnhap();

function logOut() {
    if (confirm("Bạn có chắc chắn muốn đăng xuất ?") == true) {
        let accounts = JSON.parse(localStorage.getItem('accounts'));
        user = JSON.parse(localStorage.getItem('currentuser'));
        let vitri = accounts.findIndex(item => item.phone == user.phone)
        accounts[vitri].cart.length = 0;
        for (let i = 0; i < user.cart.length; i++) {
            accounts[vitri].cart[i] = user.cart[i];
        }
        localStorage.setItem('accounts', JSON.stringify(accounts));
        localStorage.removeItem('currentuser');
        window.location = "./index.html";
    }

}


// Chuyển đổi trang chủ và trang thông tin tài khoản
function myAccount() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('trangchu').classList.add('hide');
    document.getElementById('order-history').classList.remove('open');
    document.getElementById('account-user').classList.add('open');
    advancedSearch.style.display = 'none';
    document.querySelector('#account-user .main-account').style.height = '700px';
    mainMenu.style.display = 'none';
    document.querySelector('.listPage').style.display = 'none';
}

// Chuyển đổi trang chủ và trang xem lịch sử đặt hàng 
function orderHistory() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('account-user').classList.remove('open');
    document.getElementById('trangchu').classList.add('hide');
    document.getElementById('order-history').classList.add('open');
    advancedSearch.style.display = 'none';
    document.querySelector('#order-history .main-account').style.minHeight = '700px';
    mainMenu.style.display = 'none';
    document.querySelector('.listPage').style.display = 'none';
}

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Thay doi thong tin
function changeInformation() {
    if (confirm("Bạn có chắc chắn thay đổi thông tin này ?") == true) {
        toast({ title: 'Success', message: 'Cập nhật thông tin thành công !', type: 'success', duration: 3000 });
    }
}


// Đổi mật khẩu 
function changePassword() {
    if (confirm("Bạn có chắc chắn muốn thay đổi mật khẩu không ?") == true) {
        toast({ title: 'Success', message: 'Đổi mật khẩu thành công !', type: 'success', duration: 3000 });
    }

}



// Open & Close Cart
function openCart() {
    document.querySelector('.modal-cart').classList.add('open');
    body.style.overflow = "hidden";
}

function closeCart() {
    document.querySelector('.modal-cart').classList.remove('open');
    body.style.overflow = "auto";
}

// Xu ly ngay nhan hang
let today = new Date();
let ngaymai = new Date();
let ngaykia = new Date();
ngaymai.setDate(today.getDate() + 1);
ngaykia.setDate(today.getDate() + 2);
let dateorderhtml = `<a href="javascript:;" class="pick-date active" data-date="${today}">
    <span class="text">Hôm nay</span>
    <span class="date">${today.getDate()}/${today.getMonth() + 1}</span>
    </a>
    <a href="javascript:;" class="pick-date" data-date="${ngaymai}">
        <span class="text">Ngày mai</span>
        <span class="date">${ngaymai.getDate()}/${ngaymai.getMonth() + 1}</span>
    </a>

    <a href="javascript:;" class="pick-date" data-date="${ngaykia}">
        <span class="text">Ngày kia</span>
        <span class="date">${ngaykia.getDate()}/${ngaykia.getMonth() + 1}</span>
</a>`
document.querySelector('.date-order').innerHTML = dateorderhtml;
let pickdate = document.getElementsByClassName('pick-date')
for (let i = 0; i < pickdate.length; i++) {
    pickdate[i].onclick = function () {
        document.querySelector(".pick-date.active").classList.remove("active");
        this.classList.add('active');
    }
}

let priceFinal = document.getElementById("checkout-cart-price-final");

// Xu ly hinh thuc giao hang
let giaotannoi = document.querySelector('#giaotannoi');
let tudenlay = document.querySelector('#tudenlay');
let tudenlayGroup = document.querySelector('#tudenlay-group');
let chkShip = document.querySelectorAll(".chk-ship");

tudenlay.addEventListener('click', () => {
    giaotannoi.classList.remove("active");
    tudenlay.classList.add("active");
    chkShip.forEach(item => {
        item.style.display = "none";
    });
    tudenlayGroup.style.display = "block";
    priceFinal.innerText = '750.000 đ';

})

giaotannoi.addEventListener('click', () => {
    tudenlay.classList.remove("active");
    giaotannoi.classList.add("active");
    tudenlayGroup.style.display = "none";
    chkShip.forEach(item => {
        item.style.display = "flex";
    });

    priceFinal.innerText = '780.000 đ';

})

// Su kien khu nhan nut dat hang
document.querySelector(".complete-checkout-btn").onclick = () => {
    if (confirm("Bạn có chắc chắn với thông tin đơn hàng ?") == true) {
        closeCart();
        toast({ title: 'Thành công', message: 'Đặt hàng thành công !', type: 'success', duration: 1000 });
        setTimeout((e) => {
            window.location = "./index.html";
        }, 2000);
    }

}


//Open Page Checkout
let nutthanhtoan = document.querySelector('.thanh-toan')
let checkoutpage = document.querySelector('.checkout-page');
nutthanhtoan.addEventListener('click', () => {
    checkoutpage.classList.add('active');
    closeCart();
    body.style.overflow = "hidden"
})

// Close Page Checkout
function closecheckout() {
    checkoutpage.classList.remove('active');
    body.style.overflow = "auto"
}

// Format Date
function formatDate(date) {
    let fm = new Date(date);
    let yyyy = fm.getFullYear();
    let mm = fm.getMonth() + 1;
    let dd = fm.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return dd + '/' + mm + '/' + yyyy;
}

// Chi tiết đơn hàng
function detailOrder(id) {
    let order = [
        {
            "id": "DH2",
            "khachhang": "0783374678",
            "hinhthucgiao": "Tự đến lấy",
            "ngaygiaohang": "Thu Dec 07 2023 10:30:42 GMT+0700 (Indochina Time)",
            "thoigiangiao": "",
            "ghichu": "giao hang sau 5h chieu",
            "tenguoinhan": "Vu Khoa",
            "sdtnhan": "0783374678",
            "diachinhan": "273 An Dương Vương, Phường 3, Quận 5",
            "thoigiandat": "2023-12-07T03:31:18.143Z",
            "tongtien": 2820000,
            "trangthai": 0
        },
        {
            "id": "DH1",
            "khachhang": "0783374678",
            "hinhthucgiao": "Giao tận nơi",
            "ngaygiaohang": "Thu Dec 07 2023 10:29:06 GMT+0700 (Indochina Time)",
            "thoigiangiao": "Giao ngay khi xong",
            "ghichu": "nothing",
            "tenguoinhan": "Vu Khoa",
            "sdtnhan": "0783374678",
            "diachinhan": "123124",
            "thoigiandat": "2023-12-07T03:29:37.206Z",
            "tongtien": 200000,
            "trangthai": 0
        }
    ]
    let detail = order.find(item => {
        return item.id == id;
    })
    document.querySelector(".modal.detail-order").classList.add("open");
    let detailOrderHtml = `<ul class="detail-order-group">
        <li class="detail-order-item">
            <span class="detail-order-item-left"><i class="fa-light fa-calendar-days"></i> Ngày đặt hàng</span>
            <span class="detail-order-item-right">${formatDate(detail.thoigiandat)}</span>
        </li>
        <li class="detail-order-item">
            <span class="detail-order-item-left"><i class="fa-light fa-truck"></i> Hình thức giao</span>
            <span class="detail-order-item-right">${detail.hinhthucgiao}</span>
        </li>
        <li class="detail-order-item">
            <span class="detail-order-item-left"><i class="fa-light fa-clock"></i> Ngày nhận hàng</span>
            <span class="detail-order-item-right">${(detail.thoigiangiao == "" ? "" : (detail.thoigiangiao + " - ")) + formatDate(detail.ngaygiaohang)}</span>
        </li>
        <li class="detail-order-item">
            <span class="detail-order-item-left"><i class="fa-light fa-location-dot"></i> Địa điểm nhận</span>
            <span class="detail-order-item-right">${detail.diachinhan}</span>
        </li>
        <li class="detail-order-item">
            <span class="detail-order-item-left"><i class="fa-thin fa-person"></i> Người nhận</span>
            <span class="detail-order-item-right">${detail.tenguoinhan}</span>
        </li>
        <li class="detail-order-item">
            <span class="detail-order-item-left"><i class="fa-light fa-phone"></i> Số điện thoại nhận</span>
            <span class="detail-order-item-right">${detail.sdtnhan}</span>
        </li>
    </ul>`
    document.querySelector(".detail-order-content").innerHTML = detailOrderHtml;
}

// Close popup 
let modalContainer = document.querySelectorAll('.modal');
let modalBox = document.querySelectorAll('.mdl-cnt');
let formLogSign = document.querySelector('.forms');


// Click vùng ngoài sẽ tắt Popup
modalContainer.forEach(item => {
    item.addEventListener('click', closeModal);
});

modalBox.forEach(item => {
    item.addEventListener('click', function (event) {
        event.stopPropagation();
    })
});

function closeModal() {
    modalContainer.forEach(item => {
        item.classList.remove('open');
    });
    console.log(modalContainer)
    body.style.overflow = "auto";
}

function increasingNumber(e) {
    let qty = e.parentNode.querySelector('.input-qty');
    if (parseInt(qty.value) < qty.max) {
        qty.value = parseInt(qty.value) + 1;
    } else {
        qty.value = qty.max;
    }
}

function decreasingNumber(e) {
    let qty = e.parentNode.querySelector('.input-qty');
    if (qty.value > qty.min) {
        qty.value = parseInt(qty.value) - 1;
    } else {
        qty.value = qty.min;
    }
}

function datmon() {
    toast({ title: 'Thành công', message: 'Đặt món thành công !', type: 'success', duration: 3000 });
}
