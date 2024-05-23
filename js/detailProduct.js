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

window.onload = showDetail();
// find this product
function showDetail() {
    let detail = document.querySelector('.detail');
    let productID = new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter(value => {
        return value.id == productID;
    })[0];
    // if there is no product has id = productID
    // => return to home page
    if(!thisProduct) {
        window.location.href = '/';
    }

    detail.querySelector('.image img').src = thisProduct.img;
    detail.querySelector('.name').innerText = thisProduct.title;
    detail.querySelector('.price').innerText = thisProduct.price + " ₫";
    detail.querySelector('.description').innerText = thisProduct.desc;

    
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
