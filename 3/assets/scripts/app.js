const maxLife = 1000;
const monsterDamage = 440;
const playerDamage = 339;
const playerHeal = 405;
let isUsedExtraLife = false;
let logMessage = [];

adjustHealthBars(maxLife);

function writeLog(action) {
    let logObject = {
    'action': action,
    'monsterHealth': monsterHealthBar.value,
    'playerHealth': playerHealthBar.value
};
    logMessage.push(logObject);
}

function checkWinner() {
    if (playerHealthBar.value <= 0 && monsterHealthBar.value <= 0) {
    alert('0-0');
    resetGame(maxLife);
    isUsedExtraLife =false;
} else if (playerHealthBar.value <= 0) {
    if (isUsedExtraLife) {
    resetGame(maxLife);
    isUsedExtraLife = false;
    alert('What a pity,you lost!');
} else {
    removeBonusLife();
    setPlayerHealth(maxLife);
    isUsedExtraLife = true;
}
} else if (monsterHealthBar.value <= 0) {
    resetGame(maxLife);
    isUsedExtraLife = false;
    alert('you are the best!');
    }
}

function applyDamage() {
    applyMonsterDamage(playerDamage);
    applyPlayerDamage(monsterDamage);
    checkWinner();
    writeLog('ATTACK');
}
attackBtn.addEventListener('click', applyDamage);

function applyStrongDamage() {
    applyMonsterDamage(playerDamage *2);
    applyPlayerDamage(monsterDamage);
    checkWinner();
    writeLog('STRONG ATTACK');
}
strongAttackBtn.addEventListener('click', applyStrongDamage);

healBtn.addEventListener('click', function() {
    writeLog('HEAL');
    if (playerHealthBar.value < maxLife) {
    applyPlayerDamage(monsterDamage);
    increasePlayerHealth(playerHeal);
    }
}, false);

logBtn.addEventListener('click', function() {
    writeLog('SHOW LOG');
    console.log(logMessage);
}, false); 
