var w = window.innerWidth;
var h = window.innerHeight;

console.log(w,h);


var app = new PIXI.Application(w, h, {backgroundColor : 0x32d6ff});
document.body.appendChild(app.view);

var container = new PIXI.Container();

app.stage.addChild(container);

var texture = PIXI.Texture.fromImage('img/xue.jpg');

// Create a 5x5 grid of bunnies
for (var i = 0; i < 5; i++) {
    var sea = new PIXI.Sprite(texture);
    sea.anchor.set(0.8);
    sea.x = (i % 10) * 100;
    sea.y = Math.floor(i / 100) * 400;
    container.addChild(sea);
}

// Center on the screen
container.x = (app.screen.width - container.width) / 2;
container.y = (app.screen.height - container.height) / 2;

// Center bunny sprite in local container coordinates
container.pivot.x = container.width / 6;
container.pivot.y = container.height / 2;

// Listen for animate update
app.ticker.add(function(delta) {
    // rotate the container!
    // use delta to create frame-independent transform
    container.rotation -= 0.01 * delta;
});
