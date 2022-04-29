let services = new Services();

console.log(services.fetchData());

const getEle = (id) => document.getElementById(id);

const getUser = () => {
    services.fetchData()
        .then(function (result) {
            console.log(result.data);
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
        if(data[i].loaiND === 'GV'){
            content += `
            <div class="col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
                <div class="box">
                    <img src="./img/${data[i].hinhAnh}" alt="">
                    <div class="info__content">
                        <p>${data[i].ngonNgu}</p>
                        <h3>${data[i].hoTen}</h3>
                        <p>${data[i].moTa}</p>
                    </div>
                </div>
            </div>
            `
        }    
    }
    getEle('danhSachUsers').innerHTML = content;
}
let menu1 = document.getElementById('header');
let img1 = document.getElementById('img')
window.onscroll = function(){
    let menuScroll = window.scrollY;
    console.log(menuScroll);
    if(menuScroll > 400){
        menu1.classList.add('header-hien');
        document.querySelector('.header-hien').style.transform =  'translateY(0)';
        document.querySelector('.img-fluid').style.display = 'none';
    }
    else{
        menu1.classList.remove('header-hien');
        document.querySelector('.img-fluid').style.display = 'block';

    }
}
