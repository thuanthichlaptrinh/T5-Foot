//do sidebar open and close
const menuIconButton = document.querySelector(".menu-icon-btn");
const sidebar = document.querySelector(".sidebar");
menuIconButton.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

// account list 
accounts = [{
    fullname: "Trần Nhật Sinh",
    phone: "0123456789",
    password: "123456",
    address: '',
    email: '',
    status: 1,
    join: new Date(),
    cart: [],
    userType: 1
},
{
    fullname: 'Vũ Khoa',
    phone: "0783374678",
    password: "123456",
    address: '',
    email: '',
    status: 1,
    join: new Date(),
    cart: [],
    userType: 0
},
{
    fullname: 'Trần Quốc',
    phone: "0901876721",
    password: "12531we2",
    address: '',
    email: '',
    status: 0,
    join: new Date(),
    cart: [],
    userType: 0
},
{
    fullname: 'Văn Minh',
    phone: "0906523491",
    password: "19284421",
    address: '',
    email: '',
    status: 1,
    join: new Date(),
    cart: [],
    userType: 0
},
{
    fullname: 'Thanh Tú',
    phone: "0901676781",
    password: "125215142",
    address: '',
    email: '',
    status: 1,
    join: new Date(),
    cart: [],
    userType: 0
},

];


// product list
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
    status: 0,
    title: 'Há cảo sò điệp (10 viên)',
    img: './assets/img/products/ha_cao.jpg',
    category: 'Món mặn',
    price: 140000,
    desc: 'Những miếng há cảo, sủi cảo, hoành thánh với phần nhân tôm, sò điệp, hải sản tươi ngon hay nhân thịt heo thơm ngậy chắc chắn sẽ khiến bất kỳ ai thưởng thức đều cảm thấy rất ngon miệng.'
},
]

// order list
let orders = [
    {
        "id": "VM1",
        "khachhang": "0783374678",
        "hinhthucgiao": "Giao tận nơi",
        "ngaygiaohang": "Thu Dec 08 2023 10:30:00 GMT+0700 (Indochina Time)",
        "thoigiangiao": "Giao ngay khi xong",
        "ghichu": "nothing",
        "tenguoinhan": "Van Minh",
        "sdtnhan": "0783374678",
        "diachinhan": "123124",
        "thoigiandat": "2023-12-07T03:29:37.206Z",
        "tongtien": 2703000,
        "trangthai": 1
    },
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
        "trangthai": 1
    }
];

let orderDetails = [
    { "id": 1, "price": 200000, "soluong": 1, "note": "Không có ghi chú", "madon": "DH1" },
    { "id": 2, "soluong": 2, "note": "Không có ghi chú", "madon": "DH2", "price": 180000 },
    { "id": 5, "soluong": 3, "note": "Không có ghi chú", "madon": "DH2", "price": 280000 },
    { "id": 6, "soluong": 3, "note": "Không có ghi chú", "madon": "DH2", "price": 540000 },
    { "id": 4, "soluong": 2, "note": "Không có ghi chú", "madon": "VM1", "price": 699000 },
    { "id": 10, "soluong": 5, "note": "Không có ghi chú", "madon": "VM1", "price": 25000 },
    { "id": 11, "soluong": 3, "note": "Không có ghi chú", "madon": "VM1", "price": 60000 },
    { "id": 1, "soluong": 5, "note": "Không có ghi chú", "madon": "VM1", "price": 200000 },
];


// tab for section
const sidebars = document.querySelectorAll(".sidebar-list-item.tab-content");
const sections = document.querySelectorAll(".section");

for (let i = 0; i < sidebars.length; i++) {
    sidebars[i].onclick = function () {
        document.querySelector(".sidebar-list-item.active").classList.remove("active");
        document.querySelector(".section.active").classList.remove("active");
        sidebars[i].classList.add("active");
        sections[i].classList.add("active");
    };
}

const closeBtn = document.querySelectorAll('.section');
console.log(closeBtn[0])
for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', (e) => {
        sidebar.classList.add("open");
    })
}

// Get amount product
function getAmoumtProduct() {
    return products.length;
}

// Get amount user
function getAmoumtUser() {
    return accounts.filter(item => item.userType == 0).length;
}

// Get amount user
function getMoney() {
    let tongtien = 0;
    orders.forEach(item => {
        tongtien += item.tongtien
    });
    return tongtien;
}

document.getElementById("amount-user").innerHTML = getAmoumtUser();
document.getElementById("amount-product").innerHTML = getAmoumtProduct();
document.getElementById("doanh-thu").innerHTML = vnd(getMoney());

// Doi sang dinh dang tien VND
function vnd(price) {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
// Phân trang 

function displayList() {
    showProductArr(products);
}


// Hiển thị danh sách sản phẩm 
function showProductArr(arr) {
    let productHtml = "";
    if (arr.length == 0) {
        productHtml = `<div class="no-result"><div class="no-result-i"><i class="fa-light fa-face-sad-cry"></i></div><div class="no-result-h">Không có sản phẩm để hiển thị</div></div>`;
    } else {
        arr.forEach(product => {
            let btnCtl = product.status == 1 ?
                `<button class="btn-delete" onclick="deleteProduct(${product.id})"><i class="fa-regular fa-trash"></i></button>` :
                `<button class="btn-delete" onclick="changeStatusProduct(${product.id})"><i class="fa-regular fa-eye"></i></button>`;
            productHtml += `
            <div class="list">
                    <div class="list-left">
                    <img src="${product.img}" alt="">
                    <div class="list-info">
                        <h4>${product.title}</h4>
                        <p class="list-note">${product.desc}</p>
                        <span class="list-category">${product.category}</span>
                    </div>
                </div>
                <div class="list-right">
                    <div class="list-price">
                    <span class="list-current-price">${vnd(product.price)}</span>                   
                    </div>
                    <div class="list-control">
                    <div class="list-tool">
                        <button class="btn-edit" onclick="editProduct(${product.id})"><i class="fa-light fa-pen-to-square"></i></button>
                        ${btnCtl}
                    </div>                       
                </div>
                </div> 
            </div>`;
        });
    }
    document.getElementById("show-product").innerHTML = productHtml;
}

function showProduct() {
    displayList();
}

function cancelSearchProduct() {
    document.getElementById('the-loai').value = "Tất cả";
    document.getElementById('form-search-product').value = "";
    displayList(products, perPage, currentPage);
    setupPagination(products, perPage, currentPage);
}

window.onload = showProduct();

function createId(arr) {
    let id = arr.length;
    let check = arr.find((item) => item.id == id);
    while (check != null) {
        id++;
        check = arr.find((item) => item.id == id);
    }
    return id;
}

// Xóa sản phẩm 
function deleteProduct() {
    if (confirm("Bạn có chắc muốn xóa?") == true) {
        toast({ title: 'Success', message: 'Xóa sản phẩm thành công !', type: 'success', duration: 3000 });
    }
    showProduct();
}

function changeStatusProduct() {
    if (confirm("Bạn có chắc chắn muốn hủy xóa?") == true) {
        toast({ title: 'Success', message: 'Khôi phục sản phẩm thành công !', type: 'success', duration: 3000 });
    }
    showProduct();
}

var indexCur;
function editProduct(id) {
    let index = products.findIndex(item => {
        return item.id == id;
    })
    indexCur = index;
    document.querySelectorAll(".add-product-e").forEach(item => {
        item.style.display = "none";
    })
    document.querySelectorAll(".edit-product-e").forEach(item => {
        item.style.display = "block";
    })
    document.querySelector(".add-product").classList.add("open");
    //
    document.querySelector(".upload-image-preview").src = products[index].img;
    document.getElementById("ten-mon").value = products[index].title;
    document.getElementById("gia-moi").value = products[index].price;
    document.getElementById("mo-ta").value = products[index].desc;
    document.getElementById("chon-mon").value = products[index].category;
}

function getPathImage(path) {
    let patharr = path.split("/");
    return "./assets/img/products/" + patharr[patharr.length - 1];
}

let btnUpdateProductIn = document.getElementById("update-product-button");

btnUpdateProductIn.addEventListener("click", (e) => {
    e.preventDefault();
    if (confirm("Bạn có chắc chắn muốn sửa thông tin sản phẩm ?") == true) {
        toast({ title: "Success", message: "Sửa sản phẩm thành công!", type: "success", duration: 3000, });
    }
    setDefaultValue();
    document.querySelector(".add-product").classList.remove("open");
    showProduct();
});

let btnAddProductIn = document.getElementById("add-product-button");

btnAddProductIn.addEventListener("click", (e) => {
    e.preventDefault();
    showProduct();
    document.querySelector(".add-product").classList.remove("open");
    toast({ title: "Success", message: "Thêm sản phẩm thành công!", type: "success", duration: 3000 });
    setDefaultValue();
});

document.querySelector(".modal-close.product-form").addEventListener("click", () => {
    setDefaultValue();
})

function setDefaultValue() {
    document.querySelector(".upload-image-preview").src = "./assets/img/blank-image.png";
    document.getElementById("ten-mon").value = "";
    document.getElementById("gia-moi").value = "";
    document.getElementById("mo-ta").value = "";
    document.getElementById("chon-mon").value = "Món chay";
}

// Open Popup Modal
let btnAddProduct = document.getElementById("btn-add-product");
btnAddProduct.addEventListener("click", () => {
    document.querySelectorAll(".add-product-e").forEach(item => {
        item.style.display = "block";
    })
    document.querySelectorAll(".edit-product-e").forEach(item => {
        item.style.display = "none";
    })
    document.querySelector(".add-product").classList.add("open");
});

// Close Popup Modal
let closePopup = document.querySelectorAll(".modal-close");
let modalPopup = document.querySelectorAll(".modal");

for (let i = 0; i < closePopup.length; i++) {
    closePopup[i].onclick = () => {
        modalPopup[i].classList.remove("open");
    };
}

// On change Image
function uploadImage(el) {
    let path = "./assets/img/products/" + el.value.split("\\")[2];
    document.querySelector(".upload-image-preview").setAttribute("src", path);
}

// Đổi trạng thái đơn hàng
function changeStatus(id, el) {
    let order = orders.find((item) => {
        return item.id == id;
    });
    order.trangthai = 1;
    el.classList.remove("btn-chuaxuly");
    el.classList.add("btn-daxuly");
    el.innerHTML = "Đã xử lý";
    findOrder(orders);
}

// Format Date
function formatDate(date) {
    let fm = new Date(date);
    let yyyy = fm.getFullYear();
    let mm = fm.getMonth() + 1;
    let dd = fm.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    return dd + "/" + mm + "/" + yyyy;
}

// Show order
function showOrder(arr) {
    let orderHtml = "";
    if (arr.length == 0) {
        orderHtml = `<td colspan="6">Không có dữ liệu</td>`
    } else {
        arr.forEach((item) => {
            let status = item.trangthai == 0 ? `<span class="status-no-complete">Chưa xử lý</span>` : `<span class="status-complete">Đã xử lý</span>`;
            let date = formatDate(item.thoigiandat);
            orderHtml += `
            <tr>
            <td>${item.id}</td>
            <td>${item.khachhang}</td>
            <td>${date}</td>
            <td>${vnd(item.tongtien)}</td>                               
            <td>${status}</td>
            <td class="control">
            <button class="btn-detail" id="" onclick="detailOrder('${item.id}')"><i class="fa-regular fa-eye"></i> Chi tiết</button>
            </td>
            </tr>      
            `;
        });
    }
    document.getElementById("showOrder").innerHTML = orderHtml;
}

window.onload = showOrder(orders);

// Get Order Details
function getOrderDetails(madon) {
    let ctDon = [];
    orderDetails.forEach((item) => {
        if (item.madon == madon) {
            ctDon.push(item);
        }
    });
    return ctDon;
}

// Show Order Detail
function detailOrder(id) {
    document.querySelector(".modal.detail-order").classList.add("open");
    // Lấy hóa đơn 
    let order = orders.find((item) => item.id == id);
    // Lấy chi tiết hóa đơn
    let ctDon = getOrderDetails(id);
    let spHtml = `<div class="modal-detail-left"><div class="order-item-group">`;

    ctDon.forEach((item) => {
        let detaiSP = products.find(product => product.id == item.id);
        spHtml += `<div class="order-product">
            <div class="order-product-left">
                <img src="${detaiSP.img}" alt="">
                <div class="order-product-info">
                    <h4>${detaiSP.title}</h4>
                    <p class="order-product-note"><i class="fa-light fa-pen"></i> ${item.note}</p>
                    <p class="order-product-quantity">SL: ${item.soluong}<p>
                </div>
            </div>
            <div class="order-product-right">
                <div class="order-product-price">
                    <span class="order-product-current-price">${vnd(item.price)}</span>
                </div>                         
            </div>
        </div>`;
    });
    spHtml += `</div></div>`;
    spHtml += `<div class="modal-detail-right">
        <ul class="detail-order-group">
            <li class="detail-order-item">
                <span class="detail-order-item-left"><i class="fa-light fa-calendar-days"></i> Ngày đặt hàng</span>
                <span class="detail-order-item-right">${formatDate(order.thoigiandat)}</span>
            </li>
            <li class="detail-order-item">
                <span class="detail-order-item-left"><i class="fa-light fa-truck"></i> Hình thức giao</span>
                <span class="detail-order-item-right">${order.hinhthucgiao}</span>
            </li>
            <li class="detail-order-item">
            <span class="detail-order-item-left"><i class="fa-thin fa-person"></i> Người nhận</span>
            <span class="detail-order-item-right">${order.tenguoinhan}</span>
            </li>
            <li class="detail-order-item">
            <span class="detail-order-item-left"><i class="fa-light fa-phone"></i> Số điện thoại</span>
            <span class="detail-order-item-right">${order.sdtnhan}</span>
            </li>
            <li class="detail-order-item tb">
                <span class="detail-order-item-left"><i class="fa-light fa-clock"></i> Thời gian giao</span>
                <p class="detail-order-item-b">${(order.thoigiangiao == "" ? "" : (order.thoigiangiao + " - ")) + formatDate(order.ngaygiaohang)}</p>
            </li>
            <li class="detail-order-item tb">
                <span class="detail-order-item-t"><i class="fa-light fa-location-dot"></i> Địa chỉ nhận</span>
                <p class="detail-order-item-b">${order.diachinhan}</p>
            </li>
            <li class="detail-order-item tb">
                <span class="detail-order-item-t"><i class="fa-light fa-note-sticky"></i> Ghi chú</span>
                <p class="detail-order-item-b">${order.ghichu}</p>
            </li>
        </ul>
    </div>`;
    document.querySelector(".modal-detail-order").innerHTML = spHtml;

    let classDetailBtn = order.trangthai == 0 ? "btn-chuaxuly" : "btn-daxuly";
    let textDetailBtn = order.trangthai == 0 ? "Chưa xử lý" : "Đã xử lý";
    document.querySelector(
        ".modal-detail-bottom"
    ).innerHTML = `<div class="modal-detail-bottom-left">
        <div class="price-total">
            <span class="thanhtien">Thành tiền</span>
            <span class="price">${vnd(order.tongtien)}</span>
        </div>
    </div>
    <div class="modal-detail-bottom-right">
        <button class="modal-detail-btn ${classDetailBtn}" onclick="changeStatus('${order.id}',this)">${textDetailBtn}</button>
    </div>`;
}

// Find Order
function findOrder() {
    showOrder(orders);
}

function cancelSearchOrder() {
    document.getElementById("tinh-trang").value = 2;
    document.getElementById("form-search-order").value = "";
    document.getElementById("time-start").value = "";
    document.getElementById("time-end").value = "";
    showOrder(orders);
}

// Create Object Thong ke
function createObj() {
    let result = [];
    orderDetails.forEach(item => {
        // Lấy thông tin sản phẩm
        let prod = products.find(product => { return product.id == item.id; });
        let obj = new Object();
        obj.id = item.id;
        obj.madon = item.madon;
        obj.price = item.price;
        obj.quantity = item.soluong;
        obj.category = prod.category;
        obj.title = prod.title;
        obj.img = prod.img;
        obj.time = (orders.find(order => order.id == item.madon)).thoigiandat;
        result.push(obj);
    });
    return result;
}

// Filter 
function thongKe(mode) {
    let arrDetail = createObj();
    showThongKe(arrDetail, mode);
}

// Show số lượng sp, số lượng đơn bán, doanh thu
function showOverview(arr) {
    document.getElementById("quantity-product").innerText = arr.length;
    document.getElementById("quantity-order").innerText = arr.reduce((sum, cur) => (sum + parseInt(cur.quantity)), 0);
    document.getElementById("quantity-sale").innerText = vnd(arr.reduce((sum, cur) => (sum + parseInt(cur.doanhthu)), 0));
}

function showThongKe(arr, mode) {
    let orderHtml = "";
    let mergeObj = mergeObjThongKe(arr);
    showOverview(mergeObj);

    switch (mode) {
        case 0:
            mergeObj = mergeObjThongKe(createObj());
            showOverview(mergeObj);
            document.getElementById("the-loai-tk").value = "Tất cả";
            document.getElementById("form-search-tk").value = "";
            document.getElementById("time-start-tk").value = "";
            document.getElementById("time-end-tk").value = "";
            break;
        case 1:
            mergeObj.sort((a, b) => parseInt(a.quantity) - parseInt(b.quantity))
            break;
        case 2:
            mergeObj.sort((a, b) => parseInt(b.quantity) - parseInt(a.quantity))
            break;
    }
    for (let i = 0; i < mergeObj.length; i++) {
        orderHtml += `
        <tr>
        <td>${i + 1}</td>
        <td><div class="prod-img-title"><img class="prd-img-tbl" src="${mergeObj[i].img}" alt=""><p>${mergeObj[i].title}</p></div></td>
        <td>${mergeObj[i].quantity}</td>
        <td>${vnd(mergeObj[i].doanhthu)}</td>
        <td><button class="btn-detail product-order-detail" data-id="${mergeObj[i].id}"><i class="fa-regular fa-eye"></i> Chi tiết</button></td>
        </tr>      
        `;
    }
    document.getElementById("showTk").innerHTML = orderHtml;
    document.querySelectorAll(".product-order-detail").forEach(item => {
        let idProduct = item.getAttribute("data-id");
        item.addEventListener("click", () => {
            detailOrderProduct(arr, idProduct);
        })
    })
}

showThongKe(createObj())

function mergeObjThongKe(arr) {
    let result = [];
    arr.forEach(item => {
        let check = result.find(i => i.id == item.id) // Không tìm thấy gì trả về undefined

        if (check) {
            check.quantity = parseInt(check.quantity) + parseInt(item.quantity);
            check.doanhthu += parseInt(item.price) * parseInt(item.quantity);
        } else {
            const newItem = { ...item }
            newItem.doanhthu = newItem.price * newItem.quantity;
            result.push(newItem);
        }

    });
    return result;
}

function detailOrderProduct(arr, id) {
    let orderHtml = "";
    arr.forEach(item => {
        if (item.id == id) {
            orderHtml += `<tr>
            <td>${item.madon}</td>
            <td>${item.quantity}</td>
            <td>${vnd(item.price)}</td>
            <td>${formatDate(item.time)}</td>
            </tr>      
            `;
        }
    });
    document.getElementById("show-product-order-detail").innerHTML = orderHtml
    document.querySelector(".modal.detail-order-product").classList.add("open")
}

// User
let addAccount = document.getElementById('signup-button');
let updateAccount = document.getElementById("btn-update-account")

document.querySelector(".modal.signup .modal-close").addEventListener("click", () => {
    signUpFormReset();
})

function openCreateAccount() {
    document.querySelector(".signup").classList.add("open");
    document.querySelectorAll(".edit-account-e").forEach(item => {
        item.style.display = "none"
    })
    document.querySelectorAll(".add-account-e").forEach(item => {
        item.style.display = "block"
    })
}

function signUpFormReset() {
    document.getElementById('fullname').value = ""
    document.getElementById('phone').value = ""
    document.getElementById('password').value = ""
    document.querySelector('.form-message-name').innerHTML = '';
    document.querySelector('.form-message-phone').innerHTML = '';
    document.querySelector('.form-message-password').innerHTML = '';
}

function showUserArr(arr) {
    let accountHtml = '';
    if (arr.length == 0) {
        accountHtml = `<td colspan="5">Không có dữ liệu</td>`
    } else {
        arr.forEach((account, index) => {
            let tinhtrang = account.status == 0 ? `<span class="status-no-complete">Bị khóa</span>` : `<span class="status-complete">Hoạt động</span>`;
            accountHtml += ` <tr>
            <td>${index + 1}</td>
            <td>${account.fullname}</td>
            <td>${account.phone}</td>
            <td>${formatDate(account.join)}</td>
            <td>${tinhtrang}</td>
            <td class="control control-table">
            <button class="btn-edit" id="edit-account" onclick='editAccount(${account.phone})' ><i class="fa-light fa-pen-to-square"></i></button>
            <button class="btn-delete" id="delete-account" onclick="deleteAcount(${index})"><i class="fa-regular fa-trash"></i></button>
            </td>
        </tr>`
        })
    }
    document.getElementById('show-user').innerHTML = accountHtml;
}

function showUser() {
    showUserArr(accounts);
}

function cancelSearchUser() {
    document.getElementById("tinh-trang-user").value = 2;
    document.getElementById("form-search-user").value = "";
    document.getElementById("time-start-user").value = "";
    document.getElementById("time-end-user").value = "";
}

window.onload = showUser();

function deleteAcount(phone) {
    let index = accounts.findIndex(item => item.phone == phone);
    if (confirm("Bạn có chắc muốn xóa?") == true) {
        accounts.splice(index, 1)
    }
    localStorage.setItem("accounts", JSON.stringify(accounts));
    showUser();
}

let indexFlag;
function editAccount(phone) {
    document.querySelector(".signup").classList.add("open");
    document.querySelectorAll(".add-account-e").forEach(item => {
        item.style.display = "none"
    })
    document.querySelectorAll(".edit-account-e").forEach(item => {
        item.style.display = "block"
    })
    let index = accounts.findIndex(item => {
        return item.phone == phone
    })
    indexFlag = index;
    document.getElementById("fullname").value = accounts[index].fullname;
    document.getElementById("phone").value = accounts[index].phone;
    document.getElementById("password").value = accounts[index].password;
    document.getElementById("user-status").checked = accounts[index].status == 1 ? true : false;
}

updateAccount.addEventListener("click", (e) => {
    e.preventDefault();
    if (confirm("Bạn có chắc chắn muốn thay đổi thông tin người dùng ?") == true) {
        toast({ title: 'Thành công', message: 'Thay đổi thông tin thành công !', type: 'success', duration: 3000 });
    }
    document.querySelector(".signup").classList.remove("open");
    signUpFormReset();
    showUser();
})

addAccount.addEventListener("click", (e) => {
    e.preventDefault();
    toast({ title: 'Thành công', message: 'Tạo thành công tài khoản !', type: 'success', duration: 3000 });
    document.querySelector(".signup").classList.remove("open");
    showUser();
    signUpFormReset();
})

document.getElementById("logout-acc").addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm("Bạn có chắc chắn đăng xuất khỏi hệ thống ?") == true) 
    {
        localStorage.removeItem("currentuser");
        window.location.replay('./index.html');
    }
    
})