let tg = window.Telegram.WebApp;

// Bu qatorda tg obyektining expand metodini chaqiriladi. Bu metod Telegram WebApp'ni 
// to'liq ekran yoki kattaroq o'lchamga kengaytirish uchun ishlatiladi.
tg.expand(); 


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    //Barcha maydondan ma'lumotlarni olish
    let fullName = document.getElementById('fullName').value;
    let date_birth = document.getElementById('date_birth').value;
    let email = document.getElementById('email').value;
    let pasword1 = document.getElementById('pasword1').value;
    let pasword2 = document.getElementById('pasword2').value;   


    //agar uchala ma'lumot to'ldirilgan bo'lsa ma'lumotni JSON 
    //formatda telegram botga yuboradi
    if(fullName && date_birth && email && pasword1 && pasword2) { 
        alert("Ma'lumot yuborildi");
        let data = {
            full_name : fullName,
            phone: phone,
            email:email,
            pasword1:pasword1,
            pasword2:pasword2
            
        }
        if (pasword1 == pasword2) {
            alert("Parol teng");
            tg.sendData(JSON.stringify(data)); //JSON holda telegramga ma'lumot yuborish
            tg.close(); //vazifa bajarilgach foydalanuvhiga web ilova yopiladi va 
        }
        //foydalanuvchi botga yuboriladi
    } else {
        alert("Iltimos barcha maydonni to'ldiring.");
    }
});
