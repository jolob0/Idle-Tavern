var gameData = {
    beer: 0,
    beerPerClick: 1,
    beerPerAuto: 1,
    profitPerClick: 2,
    casesize: 12,
    casecost: 12,
    money: 0,
    inventory: 12,
    Barb: 0, 
    Bart: 0, 
    beerPerClickCost: 10
}

function sellBeer() {
    if (gameData.inventory > 0){
        gameData.beer += gameData.beerPerClick
        gameData.money += gameData.profitPerClick
        gameData.inventory -= gameData.beerPerClick
        document.getElementById("beerSold").innerHTML = gameData.beer + " Beer Sold"
        document.getElementById("inventory").innerHTML = "Inventory: " +  gameData.inventory + " Beers"
        document.getElementById("bankAccount").innerHTML = "Account Ballance: $" + gameData.money
        document.getElementById("warning").innerHTML = ""
    }
    else{
        document.getElementById("warning").innerHTML = "Not Enough Inventory"
    }
}

function buyInventory() {
    if (gameData.money >= 12){
        gameData.inventory += gameData.casesize
        gameData.money -= gameData.casecost
        document.getElementById("inventory").innerHTML = "Inventory: " + gameData.inventory + " Beers"
        document.getElementById("bankAccount").innerHTML = "Account Ballance: $" + gameData.money
        document.getElementById("warning").innerHTML = ""
    }
    else{
        document.getElementById("warning").innerHTML = "Not Enough Money to Buy more Inventory"
    }
}

function hireBarB() {
    if (gameData.money > 15){
        gameData.Barb += 1
        gameData.money -= 15
        document.getElementById("bankAccount").innerHTML = "Account Ballance: $" + gameData.money
        document.getElementById("staff").innerHTML = "Staff - Bar Backs: " + gameData.Barb + " Bartenders: " + gameData.Bart
        document.getElementById("warning").innerHTML = ""
    }
    else{
        document.getElementById("warning").innerHTML = "Not Enough Money to Hire Staff"
    }
}

function hireBarT() {
    if (gameData.money > 10){
        gameData.Bart += 1
        gameData.money -= 10
        document.getElementById("bankAccount").innerHTML = "Account Ballance: $" + gameData.money
        document.getElementById("staff").innerHTML = "Staff - Bar Backs: " + gameData.Barb + " Bartenders: " + gameData.Bart
        document.getElementById("warning").innerHTML = ""
    }
    else{
        document.getElementById("warning").innerHTML = "Not Enough Money to Hire Staff"
    }
}

function buybeerPerClick() {
    if (gameData.beer >= gameData.beerPerClickCost) {
      gameData.beer -= gameData.beerPerClickCost
      gameData.beerPerClick += 1
      gameData.beerPerClickCost *= 2
      document.getElementById("beerSold").innerHTML = gameData.beer + " Beer Sold"
      document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.beerPerClick + ") Cost: " + gameData.beerPerClickCost + " Gold"
    }
  }

function autosellbeer() {
    if (gameData.Bart > 0){
        if (gameData.inventory > gameData.beerPerAuto * gameData.Bart ){
            gameData.beer += gameData.beerPerAuto * gameData.Bart
            gameData.money += gameData.profitPerClick * gameData.beerPerAuto * gameData.Bart
            gameData.inventory -= gameData.beerPerAuto * gameData.Bart
            document.getElementById("beerSold").innerHTML = gameData.beer + " Beer Sold"
            document.getElementById("inventory").innerHTML = "Inventory: " + gameData.inventory + " Beers"
            document.getElementById("bankAccount").innerHTML = "Account Ballance: $" + gameData.money
            document.getElementById("warning").innerHTML = ""
        }
        else{
            document.getElementById("warning").innerHTML = "Not Enough Inventory"
        }
    }
}
function autobuybeer() {
    if (gameData.Barb > 0){
        if (gameData.money > gameData.casecost * gameData.Barb){
            gameData.inventory += gameData.casesize * gameData.Barb
            gameData.money -= gameData.casecost * gameData.Barb
            document.getElementById("inventory").innerHTML = "Inventory: " + gameData.inventory + " Beers"
            document.getElementById("bankAccount").innerHTML = "Account Ballance: $" + gameData.money
            document.getElementById("warning").innerHTML = ""
        }
        else{
            document.getElementById("warning").innerHTML = "Not Enough Money to Buy more Inventory"
        }
    }
  }

  function upbart() {
    if (gameData.Bart > 0){
        if (gameData.money >= 100){
            gameData.beerPerAuto += 1
            gameData.money += -100
            document.getElementById("warning").innerHTML = "Bartenders Upgraded"
            document.getElementById("bankAccount").innerHTML = "Account Ballance: $" + gameData.money
        }
        else{
            document.getElementById("warning").innerHTML = "Not Enough Money to Upgrade Bartenders"
        }
    }
    else{
        document.getElementById("warning").innerHTML = "No Bartenders to Upgrade"
    }
  }

  function upbeer() {
        if (gameData.money >= 500){
            gameData.profitPerClick +=  0.5
            gameData.money += -500
            document.getElementById("warning").innerHTML = "Profits Upgraded"
            document.getElementById("bankAccount").innerHTML = "Account Ballance: $" + gameData.money
            document.getElementById("sellb").innerHTML = "Sell Beer for $" + gameData.profitPerClick 
        }
        else{
            document.getElementById("warning").innerHTML = "Not Enough Money to Upgrade Profits"
        }

  }

  function upcase() {
    if (gameData.money >= 150){
        gameData.casesize +=  6
        gameData.money += -150
        document.getElementById("warning").innerHTML = "Profits Upgraded"
        document.getElementById("bankAccount").innerHTML = "Account Ballance: $" + gameData.money
        document.getElementById("cases").innerHTML = "Buy Case of " + gameData.casesize + "(Cost $12)"
    }
    else{
        document.getElementById("warning").innerHTML = "Not Enough Money to Upgrade Case Size"
    }

}

  function unlocker() {
    if(gameData.beer <= 20) { 
        document.getElementById("barbt").style.display = "none"  
    }
    else{document.getElementById("barbt").style.display = "inline-block" }
    if(gameData.beer <= 50) { 
        document.getElementById("barbb").style.display = "none" 
    }
    else{document.getElementById("barbb").style.display = "inline-block"}
  }

var mainGameLoop = window.setInterval(function() {
        unlocker()
        autobuybeer()
        autosellbeer()
}, 1000)

