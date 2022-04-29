function Validation() {
    this.kiemTraRong = function (value, divId, mess) {
        if (value == "") {
            getEle(divId).innerHTML = mess;
            getEle(divId).style.display = 'block';
            return false;
        }
        else {
            getEle(divId).innerHTML = '';
            getEle(divId).style.display = 'none';
            return true;
        }
    };

    this.kiemTraTrungTaiKhoan = function (value, divId, mess, arr) {
        /**
         * 0. status = false;
         * 1. Duyệt arr
         * 2. Nếu sv.maSV trùng với value
         * => cập nhật status = true
         * => break;
         * 3. Check status
         */
        let status = false;
        for (let i = 0; i < arr.length; i++) {
            let users = arr[i];
            if (users.taiKhoan === value) {
                status = true;
                break;
            }
        }
        if (status) {
            //hợp lệ 
            getEle(divId).innerHTML = mess;
            getEle(divId).style.display = 'block';
            return false;
        }
        // không hợp lệ

        getEle(divId).innerHTML = '';
        getEle(divId).style.display = 'none';
        return true;
    }

    this.kiemTraChuoiKiTu = function (value, divId, mess) {
        let letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        //match() xem mạng
        if (value.match(letter)) {
            getEle(divId).innerHTML = '';
            getEle(divId).style.display = 'none';
            return true;
        }
        // không hợp lệ
        getEle(divId).innerHTML = mess;
        getEle(divId).style.display = 'block';
        return false;
    }
    this.kiemTraMatKhau = function (value, divId, mess) {
        let letter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        //match() xem mạng
        if (value.match(letter)) {
            getEle(divId).innerHTML = '';
            getEle(divId).style.display = 'none';
            return true;
        }
        // không hợp lệ
        getEle(divId).innerHTML = mess;
        getEle(divId).style.display = 'block';
        return false;
    }
    this.kiemTraEmail = function (value, divId, mess) {
        let letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //match() xem mạng
        if (value.match(letter)) {
            getEle(divId).innerHTML = '';
            getEle(divId).style.display = 'none';
            return true;
        }
        // không hợp lệ
        getEle(divId).innerHTML = mess;
        getEle(divId).style.display = 'block';
        return false;
    }

    this.kiemTraDoDaiKyTu = function (value, divId, mess, max) {
        //trim() kiểm tra kí tự trống thì cắt bỏ
        if (value.trim().length < max) {
            //hợp lệ
            getEle(divId).innerHTML = '';
            getEle(divId).style.display = 'none';
            return true;
        }
        // không hợp lệ
        getEle(divId).innerHTML = mess;
        getEle(divId).style.display = 'block';
        return false;
    }

    this.kiemTraLoaiGV = function (value, divId, mess) {
        if (value == 'Chọn loại người dùng') {
            // không hợp lệ
            getEle(divId).innerHTML = mess;
            getEle(divId).style.display = 'block';
            return false;
        }
        
            //hợp lệ
            getEle(divId).innerHTML = '';
            getEle(divId).style.display = 'none';
            return true;
    }
    this.kiemTraLoaiNgonNgu = function (value, divId, mess) {
        if (value == 'Chọn ngôn ngữ') {
            // không hợp lệ
            getEle(divId).innerHTML = mess;
            getEle(divId).style.display = 'block';
            return false;
        }
        //hợp lệ
            getEle(divId).innerHTML = '';
            getEle(divId).style.display = 'none';
            return true;  
    }
}