const intervalId = setInterval(tick, 1000 / 60);

let number = 0;
let numberIncrease = 1;
let numberPerSecond = 0;
let numberMultiplier = 1;

let upgradeCosts = {
    1: 10,
    2: 50,
    3: 100
};

let upgradeCostsScaling = {
    1: 1.25,
    2: 1.25,
    3: 1.25
};

function increaseValue() {
    number = number + (numberIncrease * numberMultiplier);
}

function buyUpgrade(upgradeId) {
    if (upgradeId === 1) {
        if (number >= upgradeCosts[1]) {
            number -= upgradeCosts[1];
            numberIncrease ++;
            upgradeCosts[1] = Math.round(upgradeCosts[1] * upgradeCostsScaling[1]);
        }
    }
    if (upgradeId === 2) {
        if (number >= upgradeCosts[2]) {
            number -= upgradeCosts[2];
            numberPerSecond += 1;
            upgradeCosts[2] = Math.round(upgradeCosts[2] * upgradeCostsScaling[2]);
        }
    }
    if (upgradeId === 3) {
        if (number >= upgradeCosts[3]) {
            number -= upgradeCosts[3];
            numberMultiplier += 0.1;
            upgradeCosts[3] = Math.round(upgradeCosts[3] * upgradeCostsScaling[2]);
        }
    }
}

function update() {
    document.getElementById("number").innerText = Math.round(number);
    document.getElementById("cost-1").innerText = upgradeCosts[1];
    document.getElementById("numberIncrease").innerText = numberIncrease;
    document.getElementById("cost-2").innerText = upgradeCosts[2];
    document.getElementById("numberPerSecond").innerText = numberPerSecond;
    document.getElementById("cost-3").innerText = upgradeCosts[3];
    document.getElementById("numberMultiplier").innerText = numberMultiplier.toFixed(1);
}

function tick() {
    number = number + (numberPerSecond * numberMultiplier) / 60;
    update();
}