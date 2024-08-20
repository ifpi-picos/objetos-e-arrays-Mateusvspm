import convert from 'convert';

function diasParaMinutos(dias) {
    return convert(dias, 'days').to('minutes');
}

function gigabytesParaBytes(gigabytes) {
    return convert(gigabytes, 'gigabytes').to('bytes');
}

const dias = 3; // 3 dias
const gigabytes = 5; // 5 gigabytes

console.log(`${dias} dias são ${diasParaMinutos(dias)} minutos.`);
console.log(`${gigabytes} gigabytes são ${gigabytesParaBytes(gigabytes)} bytes.`);
