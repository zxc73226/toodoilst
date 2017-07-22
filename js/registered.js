$(() => {
    console.log("_API_DOMAIN:", _API_DOMAIN);
    let $account = $('#account');
    let $password = $('#password');
    let $email = $('#e_mail');
    let $name = $('#name');
    let $gender = $('.gender');
    let $registeredBtn = $('#btn');
    //請改改成on與ajax
    $registeredBtn.click(() => {
        let account = $account.val();
        let password = $password.val();
        let email = $email.val();
        let name = $name.val();
        let gender = $gender.val();
        console.log("註冊", account, password, email, name, gender);
        $.post(`${_API_DOMAIN}/createUser`, { account, password, email, name, gender }, (res) => {
            console.log(res);
        })
    })
})


