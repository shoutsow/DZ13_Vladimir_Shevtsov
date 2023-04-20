document.write(`<p class="pz">` + 'Задание "Калькулятор"' + `&ensp;`);
document.write(`<br>` + `<p class="rs">` + 'Выполнено на confirm-ах и alert-ах' + `</p>`);
let Calc = function() {
    this.onoff = function() {
        this.conf = confirm('"OK" - включить калькулятор. "Отмена" - выключить калькулятор. Жми.');
        if (this.conf == true) {
            alert('Калькулятор включён. Идёт загрузка...');
            this.getexpforcalc();
        }
        else {
            alert('Хорошо. Значит сегодня считать больше не будем. Калькулятор отключается...');
            return;
        }
    }
    this.getexpforcalc = function() {
        this.a = +prompt('Введите число "a"');
        this.b = +prompt('Введите число "b"');
        this.operation = prompt('Введите желаемое действие', '+,  -,  *,  /,  **,  %');
        if (isNaN(this.b) == false && isNaN(this.a) == false && (this.operation == '+' 
        || this.operation == '-' || this.operation == '*' || this.operation == '/' 
        || this.operation == '**' || this.operation == '%')) {
            this.calculate();
        }
        else {
            alert('Вы ошиблись с вводом чисел или действия! Начнём с начала. На этот раз будьте внимательней.');
            this.getexpforcalc();
        }
    }
    this.calculate = function() {
        switch(this.operation) {
            case '+':
                this.res = this.a + this.b;
            break;
            case '-':
                this.res = this.a - this.b;
            break;
            case '*':
                this.res = this.a * this.b;
            break;
            case '/':
                this.res = this.a / this.b;
            break;
            case '**':
                this.res = this.a ** this.b;
            break;
            case '%':
                this.res = this.a % this.b;
            break;
            default:
                this.res = 'E';
        }
        if (this.res == Infinity || isNaN(this.res) == true) {
            alert('Похоже вы пытаетесь делить на "0" или оперировать астрономическими числами.' 
            + + `&ensp;` + 'Помните: это всего лишь бытовой калькулятор с кнопкой ВКЛ/ВЫКЛ');
            this.getexpforcalc();
        }
        this.showresult();
    }
    this.showresult = function() {
        this.showandcont = confirm(this.a + ' ' + this.operation + ' ' + this.b + ' = ' 
        + this.res + '  ' + 'Хотите ещё что-нибудь посчитать?');
        if (this.showandcont == true) {
            this.getexpforcalc();
        }
        else {
            this.onoff();
        }
    }
};
let calculator = new Calc();
calculator.onoff();
document.write(`</p>` + `<br>` + `<hr>`);
