document.write(`<p class="pz">` + 'Задание "Контакты"' + `&ensp;`);
document.write(`<br>` + `<p class="rs">` + 'Выполнено на confirm-ах, prompt-ах и alert-ах' + `</p>`);
let Cont = function() {
    this.contact1 = {
        lname: 'Петров',
        fname: 'Василий',
        tname: 'Эдуардович',
        age: 15,
        tel: '+375255556677',
        email: 'vas9@google.com'
    }
    this.contact2 = {
        lname: 'Лесная',
        fname: 'Марфа',
        tname: 'Васильевна',
        age: 32,
        tel: '+375257776677',
        email: 'marfa@yahoo.com'
    }
    this.contact3 = {
        lname: 'Полевая',
        fname: 'Зинаида',
        tname: 'Сигизмундовна',
        age: 44,
        tel: '+375259996677',
        email: 'zina@yandex.ru'
    }
    this.contact4 = {
        lname: 'Лопатин',
        fname: 'Онуфрий',
        tname: 'Казбекович',
        age: 47,
        tel: '+375251116677',
        email: 'kazbon@google.com'
    }
    this.contact5 = {
        lname: 'Соловей',
        fname: 'Пётр',
        tname: 'Вениаминович',
        age: 29,
        tel: '+375254446677',
        email: 'solopet@outlook.com'
    }
    this.choosesome = function() {
        this.chs = confirm('Желаете просмотреть контакт(ы) или добавить? "OK" - просмотреть, "Отмена" - добавить.');
        if (this.chs == true) {
            this.chs2 = confirm('Просмотреть один контакт или сразу все? "OK" - один, "Отмена" - все.');
            if (this.chs2 == true) {
                this.getcont();
            } else {
                this.getallcont();
            }
        }
        else {
            this.addnewcont();
        }
    }
    this.addnewcont = function() {
        this.contact6 = {};
        this.contact6.lname = prompt('Введите фамилию');
        this.contact6.fname = prompt('Введите имя');
        this.contact6.tname = prompt('Введите отчество');
        this.contact6.age = +prompt('Введите возраст');
        this.contact6.tel = prompt('Введите телефон');
        this.contact6.email = prompt('Введите эл. почту');
        alert('Контакт ' + '\n' + 'Фамилия: ' + this.contact6.lname + '\n' + 'Имя: ' + this.contact6.fname 
        + '\n' + 'Отчество: ' + this.contact6.tname + '\n' + 'Возраст: ' + this.contact6.age 
        + '\n' + 'Телефон: ' + this.contact6.tel + '\n' + 'Эл. почта: ' + this.contact6.email + '\n' + 'добавлен.');
        this.chkage();
    }
    this.chkage = function() {
        if (this.contact6.age < 18 && isNaN(this.contact6.age) !== true) {
            alert('Контакт ещё не дорос до тех вещей, которые здесь творятся!');
        }
        else if (isNaN(this.contact6.age) == true || Number.isInteger(this.contact6.age) !== true) {
            alert('Отнеситесь к заполнению графы "возраст" серьёзнее!');
        }
        else {
            alert('Возраст вполне подходящий.');
        }
        this.next = confirm('Как на счёт просмотреть конакты? "OK" - просмотреть один, "Отмена" - просмотреть ВСЕ.');
        if (this.next == true) {
            this.getcont();
        }
        else {
            this.getallcont();
        }
    }
    this.getcont = function() {
        this.gc = +prompt('Сейчас в базе 5 контактов. Введите номер контакта, который хотите просмотреть', '1');
        switch(this.gc) {
            case 1:
                alert('Контакт №1: ' + '\n' + 'Фамилия: ' + this.contact1.lname + '\n' + 'Имя: ' + this.contact1.fname 
                + '\n' + 'Отчество: ' + this.contact1.tname + '\n' + 'Возраст: ' + this.contact1.age 
                + '\n' + 'Телефон: ' + this.contact1.tel + '\n' + 'Эл. почта: ' + this.contact1.email);
            break;
            case 2:
                alert('Контакт №2: ' + '\n' + 'Фамилия: ' + this.contact2.lname + '\n' + 'Имя: ' + this.contact2.fname 
                + '\n' + 'Отчество: ' + this.contact2.tname + '\n' + 'Возраст: ' + this.contact2.age 
                + '\n' + 'Телефон: ' + this.contact2.tel + '\n' + 'Эл. почта: ' + this.contact2.email);
            break;
            case 3:
                alert('Контакт №3: ' + '\n' + 'Фамилия: ' + this.contact3.lname + '\n' + 'Имя: ' + this.contact3.fname 
                + '\n' + 'Отчество: ' + this.contact3.tname + '\n' + 'Возраст: ' + this.contact3.age 
                + '\n' + 'Телефон: ' + this.contact3.tel + '\n' + 'Эл. почта: ' + this.contact3.email);
            break;
            case 4:
                alert('Контакт №4: ' + '\n' + 'Фамилия: ' + this.contact4.lname + '\n' + 'Имя: ' + this.contact4.fname 
                + '\n' + 'Отчество: ' + this.contact4.tname + '\n' + 'Возраст: ' + this.contact4.age 
                + '\n' + 'Телефон: ' + this.contact4.tel + '\n' + 'Эл. почта: ' + this.contact4.email);
            break;
            case 5:
                alert('Контакт №5: ' + '\n' + 'Фамилия: ' + this.contact5.lname + '\n' + 'Имя: ' + this.contact5.fname 
                + '\n' + 'Отчество: ' + this.contact5.tname + '\n' + 'Возраст: ' + this.contact5.age 
                + '\n' + 'Телефон: ' + this.contact5.tel + '\n' + 'Эл. почта: ' + this.contact5.email);
            break;
            case 6:
                alert('Контакт №6: ' + '\n' + 'Фамилия: ' + this.contact6.lname + '\n' + 'Имя: ' + this.contact6.fname 
                + '\n' + 'Отчество: ' + this.contact6.tname + '\n' + 'Возраст: ' + this.contact6.age 
                + '\n' + 'Телефон: ' + this.contact6.tel + '\n' + 'Эл. почта: ' + this.contact6.email);
            break;
            default:
                alert('Предполагалось, что вы введёте число от 1 до 5! Попробуйте-ка ещё раз.');
                this.getcont();
        }
    }
    this.getallcont = function() {
        alert('Контакт №1: ' + '\n' + 'Фамилия: ' + this.contact1.lname + '\n' + 'Имя: ' + this.contact1.fname 
                + '\n' + 'Отчество: ' + this.contact1.tname + '\n' + 'Возраст: ' + this.contact1.age 
                + '\n' + 'Телефон: ' + this.contact1.tel + '\n' + 'Эл. почта: ' + this.contact1.email 
                + 'Контакт №2: ' + '\n' + 'Фамилия: ' + this.contact2.lname + '\n' + 'Имя: ' + this.contact2.fname 
                + '\n' + 'Отчество: ' + this.contact2.tname + '\n' + 'Возраст: ' + this.contact2.age 
                + '\n' + 'Телефон: ' + this.contact2.tel + '\n' + 'Эл. почта: ' + this.contact2.email 
                + 'Контакт №3: ' + '\n' + 'Фамилия: ' + this.contact3.lname + '\n' + 'Имя: ' + this.contact3.fname 
                + '\n' + 'Отчество: ' + this.contact3.tname + '\n' + 'Возраст: ' + this.contact3.age 
                + '\n' + 'Телефон: ' + this.contact3.tel + '\n' + 'Эл. почта: ' + this.contact3.email 
                + 'Контакт №4: ' + '\n' + 'Фамилия: ' + this.contact4.lname + '\n' + 'Имя: ' + this.contact4.fname 
                + '\n' + 'Отчество: ' + this.contact4.tname + '\n' + 'Возраст: ' + this.contact4.age 
                + '\n' + 'Телефон: ' + this.contact4.tel + '\n' + 'Эл. почта: ' + this.contact4.email 
                + 'Контакт №5: ' + '\n' + 'Фамилия: ' + this.contact5.lname + '\n' + 'Имя: ' + this.contact5.fname 
                + '\n' + 'Отчество: ' + this.contact5.tname + '\n' + 'Возраст: ' + this.contact5.age 
                + '\n' + 'Телефон: ' + this.contact5.tel + '\n' + 'Эл. почта: ' + this.contact5.email);
        this.offorcon2 = confirm('Хотите продолжить работу с объектом "Контакты"?');
        if (this.offorcon2 == true) {
            this.choosesome();
        }
        else {
            alert('Закрываем "Контакты" и прячем ящик стола...');
            return;
        }
    }
}
let contacts = new Cont();
contacts.choosesome();
document.write(`</p>` + `<br>` + `<hr>`);