/*
**
** Title ぶそうれんしゅう
** Create by TGA
** Date 7 Aug 2017
** (8x9Craft:0.6.4 / Forge:1.11.2)
**
*/

//左手に金の剣、右手にダイヤの剣を持たせる
function Grab2Sowrd(){
    if(crab.itemCount(Items.GoldenSword)>0){
        crab.grabRight(Items.GoldenSword);
        crab.say("きんの けんを そうびした！");
    }
    if(crab.itemCount(Items.DiamondSword)>0){
        crab.grabLeft(Items.DiamondSword);
        crab.say("ダイヤの けんを そうびした！");
    }
}

//武装を解く
function ResetGrab(){
    crab.grabLeft(0);
    crab.grabRight(0);
    crab.say("ぶそうを かいじょした。まるごしだよ!");
}
