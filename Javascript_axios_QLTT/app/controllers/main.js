let services = new Services();
let validation = new Validation();
let dsgv = new DanhSachGiaoVien();
const getEle = (id) => document.getElementById(id);
console.log(dsgv.arr);
    
const getUser = () => {
    services.fetchData()
        .then(function (result) {
            renderHTML(result.data);
        })
        .catch(function (error) {
            console.log(error);
        })
}
getUser();

const renderHTML = (data) => {
    let content = "";
    for (let i = 0; i < data.length; i++) {
        content += `
                    <tr>
                        <td>${i + 1}</td>
                        <td>${data[i].taiKhoan}</td>
                        <td>${data[i].matKhau}</td>
                        <td>${data[i].hoTen}</td>
                        <td>${data[i].email}</td>
                        <td>${data[i].ngonNgu}</td>
                        <td>${data[i].loaiND}</td>
                        <td>
                            <button class="btn btn-primary" onclick="xoaUser(${data[i].id})">Xóa</button>
                            <button class="btn btn-danger"data-toggle="modal"
                            data-target="#myModal"onclick = "suaUser(${data[i].id})">Sửa</button>
                        </td>
                    </tr>
        
        `
    }
    dsgv.themGV(data)
    getEle('tblDanhSachNguoiDung').innerHTML = content;
}

const suaUser = (id) => {
    document.querySelector('.modal-title').innerHTML = 'Sửa Thông Tin';
    let footer = `<button class="btn btn-danger" onclick = "update(${id})">Update</button>`;
    document.querySelector('.modal-footer').innerHTML = footer;
    getEle('TaiKhoan').disabled = true;
    services.suaThongTinUsers(id)
        .then(function (result) {
            getEle('TaiKhoan').value = result.data.taiKhoan;
            getEle('HoTen').value = result.data.hoTen;
            getEle('MatKhau').value = result.data.matKhau;
            getEle('Email').value = result.data.email;
            getEle('HinhAnh').value = result.data.hinhAnh;
            getEle('loaiNguoiDung').value = result.data.loaiND;
            getEle('loaiNgonNgu').value = result.data.ngonNgu;
            getEle('MoTa').value = result.data.moTa;
        })
        .catch(function (error) {
            console.log(error);
        })
}



const update = (id) => {
    let taiKhoan = getEle('TaiKhoan').value;
    let hoTen = getEle('HoTen').value;
    let matKhau = getEle('MatKhau').value;
    let Email = getEle('Email').value;
    let HinhAnh = getEle('HinhAnh').value;
    let loaiNguoiDung = getEle('loaiNguoiDung').value;
    let loaiNgonNgu = getEle('loaiNgonNgu').value;
    let MoTa = getEle('MoTa').value;

    let isValid = true;
    isValid &= validation.kiemTraRong(hoTen, 'errorHoTen', '(*)Vui lòng nhập họ tên') && validation.kiemTraChuoiKiTu(hoTen, 'errorHoTen', '(*)Vui lòng nhập chuỗi kí tự');
    isValid &= validation.kiemTraRong(matKhau, 'errorMatKhau', '(*)Vui lòng nhập mật khẩu') && validation.kiemTraMatKhau(matKhau, 'errorMatKhau', '(*)Mật khẩu yếu');
    isValid &= validation.kiemTraRong(Email, 'errorEmail', '(*)Vui lòng nhập email') && validation.kiemTraEmail(Email, 'errorEmail', '(*)Vui lòng nhập đúng định dạng');
    isValid &= validation.kiemTraRong(HinhAnh, 'errorHinhAnh', '(*)Vui lòng nhập hình ảnh');
    isValid &= validation.kiemTraLoaiNgonNgu(loaiNgonNgu, 'errorloaiNN', '(*)Vui lòng chọn ngôn ngữ');
    isValid &= validation.kiemTraLoaiGV(loaiNguoiDung, 'errorLoaiND', '(*)Vui lòng chọn loại người dùng');
    isValid &= validation.kiemTraRong(MoTa, 'errorMoTa', '(*)Vui lòng nhập mô tả') && validation.kiemTraDoDaiKyTu(MoTa, 'errorMoTa', '(*)Vui lòng nhập ít hơn 60 kí tự',60);
    if (isValid) {
    let users = new Users(id,taiKhoan,hoTen,matKhau,Email,HinhAnh,loaiNguoiDung,loaiNgonNgu,MoTa)

    services.updateThongTinUsers(users)
        .then(function () {
            dsgv.themGV(users);
            getUser();
            document.querySelector('.close').click();
        })
    }
}

getEle('btnThemNguoiDung').addEventListener('click', function () {
    document.querySelector('.modal-title').innerHTML = 'Thêm sản phẩm';
    let footer = `<button class="btn btn-primary" onclick="addUser()">Add</butoon>`
    document.querySelector('.modal-footer').innerHTML = footer;
})



const addUser = () => {
    let taiKhoan = getEle('TaiKhoan').value;
    let hoTen = getEle('HoTen').value;
    let matKhau = getEle('MatKhau').value;
    let Email = getEle('Email').value;
    let HinhAnh = getEle('HinhAnh').value;
    let loaiNguoiDung = getEle('loaiNguoiDung').value;
    let loaiNgonNgu = getEle('loaiNgonNgu').value;
    let MoTa = getEle('MoTa').value;


    let isValid = true;
    isValid &= validation.kiemTraRong(taiKhoan, 'errorTaiKhoan', '(*)Vui lòng nhập tài Khoản') && validation.kiemTraTrungTaiKhoan(taiKhoan, 'errorTaiKhoan', '(*)Tài khoản đã tồn tại',dsgv.arr[0]);
    isValid &= validation.kiemTraRong(hoTen, 'errorHoTen', '(*)Vui lòng nhập họ tên') && validation.kiemTraChuoiKiTu(hoTen, 'errorHoTen', '(*)Vui lòng nhập chuỗi kí tự');
    isValid &= validation.kiemTraRong(matKhau, 'errorMatKhau', '(*)Vui lòng nhập mật khẩu') && validation.kiemTraMatKhau(matKhau, 'errorMatKhau', '(*)Mật khẩu yếu');
    isValid &= validation.kiemTraRong(Email, 'errorEmail', '(*)Vui lòng nhập email') && validation.kiemTraEmail(Email, 'errorEmail', '(*)Vui lòng nhập đúng định dạng');
    isValid &= validation.kiemTraRong(HinhAnh, 'errorHinhAnh', '(*)Vui lòng nhập hình ảnh');
    isValid &= validation.kiemTraRong(MoTa, 'errorMoTa', '(*)Vui lòng nhập mô tả') && validation.kiemTraDoDaiKyTu(MoTa, 'errorMoTa', '(*)Vui lòng nhập ít hơn 60 kí tự',60);
    if (isValid) {
        let users = new Users("", taiKhoan, hoTen, matKhau, Email, HinhAnh, loaiNguoiDung, loaiNgonNgu, MoTa)
        services.addUserByUsers(users)
            .then(function () {
                dsgv.themGV(users);
                getUser();
                document.querySelector('.close').click();
            })
            .catch(function (erorr) {
                console.log(erorr);
            })
    }
}

const xoaUser = (id) => {
    services.deleteUserById(id)
        .then(function () {
            getUser();
        })
}

