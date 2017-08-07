/*
 * Title 「じゅうじづか」の卑怯な見本
 * Note これだと6手でできます^^;良い子は真似しないでね！
 *   あと、クリエイティブモードにして使って下さい。
 * Create by TGA
 * Date 6 Aug 2017
 * (8x9Craft:0.6.4 / Forge:1.11.2)
 */
crab.place(Items.Sand)
crab.back()
crab.back()
crab.place(Items.Sand)

var px = crab.position.x;
var py = crab.position.y;
var pz = crab.position.z;

switch (crab.facing.horizontalIndex){
    case 0: //South
        world.fireCommand("/fill " + (px-1) + " " + (py+1) + " " + (pz+1) + " " + (px+1) + " " + (py+1) + " " + (pz+3) +" minecraft:sand")
        world.fireCommand("/fill " + (px-1) + " " + (py+1) + " " + (pz+2) + " " + (px+1) + " " + (py+1) + " " + (pz+2) +" minecraft:sand")
        break;
    case 1: //West
        world.fireCommand("/fill " + (px-1) + " " + (py+1) + " " + (pz-1) + " " + (px-3) + " " + (py+1) + " " + (pz+1) +" minecraft:sand")
        world.fireCommand("/fill " + (px-2) + " " + (py+1) + " " + (pz-1) + " " + (px-2) + " " + (py+1) + " " + (pz+1) +" minecraft:sand")
        break;
    case 2: //North
        world.fireCommand("/fill " + (px-1) + " " + (py+1) + " " + (pz-3) + " " + (px+1) + " " + (py+1) + " " + (pz-1) +" minecraft:sand")
        world.fireCommand("/fill " + (px-1) + " " + (py+1) + " " + (pz-2) + " " + (px+1) + " " + (py+1) + " " + (pz-2) +" minecraft:sand")
        break;
    case 3: //Eeast
        world.fireCommand("/fill " + (px+1) + " " + (py+1) + " " + (pz-1) + " " + (px+3) + " " + (py+1) + " " + (pz+1) +" minecraft:sand")
        world.fireCommand("/fill " + (px+2) + " " + (py+1) + " " + (pz-1) + " " + (px+2) + " " + (py+1) + " " + (pz+1) +" minecraft:sand")
        break;
}
