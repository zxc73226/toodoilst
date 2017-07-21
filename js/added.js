$(() => {
    console.log("_API_DOMAIN", _API_DOMAIN);
    let $added_input = $('.added-input');
    let $checkbox = $('.checkbox');
    let $radio = $('radio');
    let $createBtn = $('#btn');
    $createBtn.click(() => {
        let added_input = $added_input.val();
        let checkbox = $checkbox.val();
        let radio = $radio.val();
        console.log("新增", added_input, checkbox, radio);
        $.post(`${_API_DOMAIN}/createText`, { added_input, checkbox, radio }, (res) => {
            console.log(res);
        })
    })
})