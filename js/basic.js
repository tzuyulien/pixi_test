var w = window.innerWidth;
var h = window.innerHeight;

console.log(w,h);


var app = new PIXI.Application(w, h, {backgroundColor : 0x32d6ff});
document.body.appendChild(app.view);

// create a new Sprite from an image path
var sea = PIXI.Sprite.fromImage("img/sea.jpg")

// center the sprite's anchor point
sea.anchor.set(0.5);

// move the sprite to the center of the screen
sea.x = app.screen.width / 2;
sea.y = app.screen.height / 2;

app.stage.addChild(sea);

// Listen for animate update
app.ticker.add(function(delta) {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    sea.rotation += 0.1 * delta;
});
