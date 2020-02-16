var p1 = Math.floor(Math.random()*6 +1);
var p2 = p1
while (p1===p2) {
    var p2 = Math.floor(Math.random()*6 +1);
}
document.querySelector(".img1").setAttribute("src","images/dice"+String(p1)+".png")
document.querySelector(".img2").setAttribute("src","images/dice"+String(p2)+".png")
if (p1>p2) {
    document.querySelector("h1").textContent = "🏆Player 1 Wins!!!"
}
else {
    document.querySelector("h1").textContent = "Player 2 Wins!!! 🏆"
}
