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
    function submit(obj) {
        $(obj).dialog({width: "555", buttons: {
            OK: function() {
                $(obj).dialog( "close" );
            },
            Cancel: function() {
                $(obj).dialog( "close" );
            }
        }});
    }

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
        } else {
            $check.style.borderColor = "red";
            error.innerHTML = "&nbsp&nbsp&nbsp&nbsp Доступны для ввода только латинские буквы.";
            $("#name").effect('bounce');
            submit(error);
        }

        if (/\+7\(\d{3}\)\d{3}-\d{4}$/.test($phone.value)) {
            $phone.style.borderColor = "green";
        } else {
            $phone.style.borderColor = "red";
            errorPhone.innerHTML = "&nbsp&nbsp&nbsp&nbsp Формат ввода - +7(000)000-0000";
            $("#phone").effect('bounce');
            submit(errorPhone);

        }
        if (/(\w{6}|\w{2}.\w{4}|\w{2}-\w{4})@mail.ru$/.test($email.value)) {
            $email.style.borderColor = "green";
        } else {
            $email.style.borderColor = "red";
            errorEmail.innerHTML = "&nbsp&nbsp&nbsp&nbsp Формат ввода email - mymail@mail.ru, my-mail@mail.ru, " +
                "my.mail@mail.ru";
            $("#email").effect('bounce');
            submit(errorEmail);
        }
        if (!/^\s*$/.test($message.value)) {
            $message.style.borderColor = "green";
        }else {
            $message.style.borderColor = "red";
            errorMessage.innerHTML = "&nbsp&nbsp&nbsp&nbspТекст для ввода";
        }

    }
};