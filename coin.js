
function update() {
    $.ajax({
        url: 'https://bitpay.com/rates/BTC/USD',
        success: (data) => {
            console.log(data);
            //var j = JSON.parse(data);
            console.log(data.data.rate);
            jQuery('#bitcoin').text(data.data.rate);
        }
    });

    $.ajax({
        url: 'https://bitpay.com/rates/LTC/USD',
        success: (data) => {
            console.log(data);
            //var j = JSON.parse(data);
            console.log(data.data.rate);
            jQuery('#litecoin').text(data.data.rate);
        }
    });

    setTimeout(update, 5000);
}