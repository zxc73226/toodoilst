$(() => {
    console.log("_API_DOMAIN:", _API_DOMAIN);
    let $account = $("#account");
    let $password = $("#password");
    let $loginBtn = $("#btn");
    //請改改成on與ajax
    $loginBtn.click(() => {
        let account = $account.val();
        let password = $password.val();
        console.log("嘗試登入", account, password);
        $.get(`${_API_DOMAIN}/login`, { account, password }, (res) => {
            console.log(res);
        });

    })
})