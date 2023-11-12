const submit = document.querySelector('#submit');

submit.addEventListener('click', (e) => {
    var a = parseInt(document.getElementById('number_a').value);
    var b = parseInt(document.getElementById('number_b').value);

    if (Number.isNaN(a) === false && Number.isNaN(b) === false && a < b) {
        // c = a + b;
        d = a
        e = 0
        while (d <= b) {
            var c = true;
            if (d < 2){
                c = false;
            }
            else{
                for (var i = 2; i < d-1; i++)
                {
                    if (d % i == 0){
                        c = false;
                        break;
                    }
                }
            }
            if (c == true){
                e = e + d
            }
            d = d + 1
        }
        alert('Tổng các số nguyên tố trên khoảng a và b là: ' + e);
    }
    else {
        alert('Lỗi kĩ thuật, xin nhập lại 2 số a và b (a<b)')
    }
})