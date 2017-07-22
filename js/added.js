$(() => {
    console.log("_API_DOMAIN", _API_DOMAIN);
    let $added_input = $('.added-input');
    let $checkbox = $('.checkbox');
    let $radio = $('radio');
    let $createBtn = $('#btn');

    // 在jquery優化有說道，盡量用on來做
    $createBtn.on('click', () => {
        let added_input = $added_input.val();
        let checkbox = $checkbox.val();
        let radio = $radio.val();
        console.log(`新增${added_input}, ${checkbox}, ${radio}`);
        // 優化有提到，post與get都由ajax這個方法來實現，效能會比較好

        $.ajax(
            {
                url: `${_API_DOMAIN}/createText`,
                data: { added_input, checkbox, radio },
                method: 'POST',
                success(res) {
                    console.log('success log', res);
                },
                error(err) {
                    console.log('error msg', err);
                }
            }
        )
    });

})