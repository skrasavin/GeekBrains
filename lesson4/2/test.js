window.onload = function () {

    $("#city").click(function () {
        $.ajax({
            url: 'http://localhost:3000/cities',
            type: "GET",
            dataType : "json",
            success: function (cities) {
                let $ul = $('<ul />').addClass("helper");
                cities.forEach(function(city) {
                    let $li = $('<li />', {
                        text: city.name,
                    });
                    $li.click(function () {
                        $("#city").val($li.text());
                    });
                    $ul.append($li);
                });
                $("body").append($ul);
            },

        });
    });


    let $check = document.getElementById("name");
    let $phone = document.getElementById("phone");
    let $email = document.getElementById("email");
    let $message = document.getElementById("message");
    let error = document.getElementById("errorText");
    let errorPhone = document.getElementById("errorTextPhone");
    let errorEmail = document.getElementById("errorTextEmail");
    let errorMessage = document.getElementById("errorTextMessage");

    document.getElementById("button").onclick = checkForm;

    function checkForm() {
        if (/[a-z]$/.test($check.value)) {
            $check.style.borderColor = "green";
            error.innerHTML = "\u0026#9989";
        } else {
            $check.style.borderColor = "red";
            error.innerHTML = "&nbsp&nbsp&nbsp&nbsp Доступны для ввода только латинские буквы."
        }

        if (/\+7\(\d{3}\)\d{3}-\d{4}$/.test($phone.value)) {
            $phone.style.borderColor = "green";
            errorPhone.innerHTML = "\u0026#9989";
        } else {
            $phone.style.borderColor = "red";
            errorPhone.innerHTML = "&nbsp&nbsp&nbsp&nbsp Формат ввода - +7(000)000-0000"
        }
        if (/(\w{6}|\w{2}.\w{4}|\w{2}-\w{4})@mail.ru$/.test($email.value)) {
            $email.style.borderColor = "green";
            errorEmail.innerHTML = "\u0026#9989";
        } else {
            $email.style.borderColor = "red";
            errorEmail.innerHTML = "&nbsp&nbsp&nbsp&nbsp Формат ввода email - mymail@mail.ru, my-mail@mail.ru, " +
                "my.mail@mail.ru"
        }
        if (!/^\s*$/.test($message.value)) {
            $message.style.borderColor = "green";
            errorMessage.innerHTML = "\u0026#9989";
        }else {
            $message.style.borderColor = "red";
            errorMessage.innerHTML = "&nbsp&nbsp&nbsp&nbspТекст для ввода";
        }

    }
};