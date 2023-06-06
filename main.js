
var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_objects= "";
var block_image_object= "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
    player_objects = Img;
    
    player_objects.scaleToWidth(150);
    player_objects.scaleToHeight(140);
    player_objects.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_objects);
    });

}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
   block_image_object = Img;
    
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_image_object);});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{

keyPressedt = e.keyCode;
console.log(keyPressedt);

if(e.shiftKey == true && keyPressedt == "80")
{
console.log("Se presiona p y shift al mismo tiempo ");

    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
     document.getElementById("current_height").innerHTML = block_image_height;

}
if(e.shiftKey == true && keyPressedt == "77")
{
console.log("Se presiona m y shift al mismo tiempo ");

    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
     document.getElementById("current_height").innerHTML = block_image_height;
     
}

if(keyPressedt == "38")
{
    up();
}
if(keyPressedt == "40")
{
    down();
}
if(keyPressedt == "37")
{
    left();
}
if(keyPressedt == "39")
{
    right();
}
if(keyPressedt == "87")
{
    new_image("wall.jpg")
}
if(keyPressedt == "71")
{
    new_image("ground.png")
}
if(keyPressedt == "76")
{
    new_image("light_green.png")
}
if(keyPressedt == "84")
{
    new_image("trunk.jpg")
}
if(keyPressedt == "82")
{
    new_image("roof.jpg")
}
if(keyPressedt == "89")
{
    new_image("yellow_wall.png")
}
if(keyPressedt == "68")
{
    new_image("dark_green.png")
}
if(keyPressedt == "85")
{
    new_image("unique.png")
}
if(keyPressedt == "67")
{
    new_image("cloud.jpg")
}
if(keyPressedt == "65")
{
    new_image("blanco.png")
}
}

function up()
{
    if(player_y >=0)
    {
        player_y = player_y - block_image_height;

        canvas.remove(player_objects);
        player_update();
    }
    
}

function down()
{
    if(player_y <=500)
    {
        player_y = player_y + block_image_height;

        canvas.remove(player_objects);
        player_update();
    }
    
}

function left()
{
    if(player_x >=0)
    {
        player_x = player_x - block_image_width;

        canvas.remove(player_objects);
        player_update();
    }
    
}

function right()
{
    if(player_x <=850)
    {
        player_x = player_x + block_image_width;

        canvas.remove(player_objects);
        player_update();
    }
    
}