/*
**
** Title ちょっとした作業用のフィールドを作成する
** Create by TGA
** Date 6 Aug 2017
** (8x9Craft:0.6.4 / Forge:1.11.2)
**
*/

//ワールドの初期設定
//時刻と天候を固定、要らんMobを全Kill、爆破させない
function WorldSetting(){
    world.fireCommand("/gamerule doWeatherCycle false");
    world.fireCommand("/weather clear");
    world.fireCommand("/gamerule doDaylightCycle false");
    world.fireCommand("/time set 6000");
    world.fireCommand("/gamerule doMobSpawning false");
    world.fireCommand("/kill @e[type=!Player,r=512]");
    world.fireCommand("/gamerule mobGriefing false");
}

//デフォルトの環境構築（現在のハックンを中心として左右lenX、上方向lenY、奥行きlenZ分だけ確保。周囲を石で囲む）
function MakeField(lenX, lenY, lenZ){
    var px = crab.position.x;
    var py = crab.position.y;
    var pz = crab.position.z;

    if(lenX == null || lenX < 3){ crab.say("x,y,z軸の幅は3(ブロック)以上の値を指定して下さい。"); return;}
    if(lenY == null || lenY < 3){ lenY = 3; lenZ = lenX; }
    else if(lenZ == null || lenZ < 3){ lenZ = lenX; }
    lenX = Math.floor(lenX/2)*2;
    lenZ = Math.floor(lenZ/2)*2;

    for(var i=0;i<lenY;i++){
        if(crab.isBlockedUp()){ crab.digUp(); }
        crab.up();
    }

    world.fireCommand("/fill " + (px - lenX/2 -1) + " " + (py-1) + " " + (pz -lenZ/2 -1) + " " + (px + lenX/2 +1) + " " + (py + lenY -1) + " " + (pz + lenZ/2 +1) + " minecraft:stone");
    world.fireCommand("/fill " + (px - lenX/2) + " " + py + " " + (pz -lenZ/2) + " " + (px + lenX/2) + " " + (py + lenY -1) + " " + (pz + lenZ/2) + " minecraft:air");

    for(var i=0;i<lenY;i++){
        crab.down();
    }
}
