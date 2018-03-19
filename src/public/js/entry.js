import '../scss/main.scss';

setTimeout(() => {
    document.querySelector('#test').innerHTML = 'JS 运行成功！';
}, 2000);
console.log('success !');

$.ajax({
    type: 'GET',
    url: '/json/data.json',
    success: (data) => {
        console.log(data);
    },
});
