var callback_form = document.forms.callback_form; 

var submit_callback = callback_form.elements.submit;

var tel = callback_form.elements.tel;

submit_callback.onclick = function(e) {
    
    var fio = callback_form.elements.fio;
    var agree = callback_form.elements.agree;
    var flag = true;
    var message = '';
    var messageBlock = document.getElementById('message');
    var phoneTemplate = /^((8|\+375)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    
    messageBlock.classList = '';
    
    if(fio.value.length < 3) {
        flag = false;
        message += 'ФИО должно содержать более трёх символов <br>';
        fio.classList.add('error');
    }
    if(!tel.value.match(phoneTemplate)) {
        flag = false;
        message += 'Неверно заполнен телефон <br>';
        tel.classList.add('error');
    }
    if(!agree.checked) {
        flag = false;
        message += 'Вы не приняли условия соглашения';
    }
    if(flag) {
        message = 'Ваша форма успешно отправлена! <br>';
        messageBlock.classList.add('success'); 
    } else {
        messageBlock.classList.add('fail');
    }
    messageBlock.innerHTML = message;
    e.preventDefault();
};

tel.onfocus = function(e) {
    if(this.value === '') {
       this.value = '+375';
     }
}

