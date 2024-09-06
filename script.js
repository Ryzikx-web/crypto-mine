let logsGenerated = 0;
let bitcoinFound = false;
let blockReward = 0.011;
let maxNonce = 1000000000000;
let prefixZeros = 50;
let transactions = [
    "Player1->Player2->200",
    "Player3->Player4->450"
];
let previousHash = "0000000xa036944e29568d0cff17edbe038f81208fecf9a66be9a2b8321c6ec7";
let blockNumber = 5;

document.getElementById("start-mining").addEventListener("click", startMining);

function startMining() {
    document.getElementById("message").innerHTML = "La minería empezará en:";
    countdown(5);
}

function countdown(seconds) {
    let countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = seconds;
    if (seconds > 0) {
        setTimeout(() => {
            countdown(seconds - 1);
        }, 1000);
    } else {
        mineBitcoin();
    }
}

function mineBitcoin() {
    let startTime = new Date().getTime();
    let nonce = 0;
    let prefixStr = "0".repeat(prefixZeros);

    while (nonce < maxNonce) {
        let text = `${blockNumber}${transactions.join("\n")}${previousHash}${nonce}`;
        let newHash = sha256(text);

        if (Math.random() < 0.001) {
            logsGenerated++;
            let elapsedTime = (new Date().getTime() - startTime) / 1000;
            document.getElementById("logs").innerHTML += `<p>[${elapsedTime.toFixed(2)}s] Intentando nonce: ${nonce} => Hash: ${newHash}</p>`;
        }

        if (logsGenerated >= 10000 && !bitcoinFound) {
            document.getElementById("logs").innerHTML += `<p>Se han encontrado ${logsGenerated} carteras. Volviendo a minar...</p>`;
        }

        if (Math.random() < 0.00001 || newHash.startsWith(prefixStr)) {
            let bitcoinValue = Math.floor(Math.random() * (300 - 200 + 1)) + 200;
            document.getElementById("logs").innerHTML += `<p>¡Minado con éxito un bloque de Bitcoin!</p>`;
            document.getElementById("logs").innerHTML += `<p>Hash de bloque: ${newHash}</p>`;
            document.getElementById("logs").innerHTML += `<p>Nonce usado: ${nonce}</p>`;
            let elapsedTime = (new Date().getTime() - startTime) / 1000;
            document.getElementById("logs").innerHTML += `<p>Tiempo tardado: ${elapsedTime.toFixed(2)} seconds</p>`;
            document.getElementById("logs").innerHTML += `<p>Bitcoin conseguido: ${blockReward} BTC</p>`;
            document.getElementById("logs").innerHTML += `<p>Total de carteras usadas para buscar bitcoin: ${logsGenerated}</p>`;
            bitcoinFound = true;
            break;
        }

        nonce++;
    }

    if (bitcoinFound) {
