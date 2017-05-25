/*
**
 ** TITLE: ぐるぐる照明 - 犯人はあそこだ！！
 ** NOTE: ヘボい技術を駆使してくだらないことをやる
 **
 ** HOW TO USE:
 ** (1)これを壁に投影する
 ** (2)誰でも良いからできるだけ照明に当たらないようにキョロキョロしながら投影中の画面にそろ〜っと入り込む
 ** (3)照明に当たってしまったら「NO MORE 映画泥棒！」とか言いながらキャッキャする
 **
 ** UPDATE: MAY 25, 2017
 ** AUTOR: TGA
 **
 **/

float px, py, rScr, alph;
float pRad;
final color COL_LIGHT = color(255, 237, 96); 
final int LIGHT_R = 650;
final float ROTATE_CYCLE = PI/210;
final int CORNER_LU = 1;//左上
final int CORNER_LD = 2;//左下
final int CORNER_RU = 3;//右上
final int CORNER_RD = 4;//右下

/* スポットライトの表示 */
void Light(float x, float y, float r, float alph) {
  noStroke();
  fill(COL_LIGHT, alph);
  ellipse(x, y, r, r);
}

/* calucrate alpha-value */
float CalcAlpha(float rad, float min) {
  //2つの証明が重なる時にアルファ値がだいたい100に近くなるようにする
  rad = abs(rad - min);
  if (rad > PI) { 
    rad = TWO_PI - rad;
  }
  return 100 * (rad/PI);
}

/* 画面の四隅を中心としたスポットライト(照明)を表示する */
void SetLight(float rad, int pos) {
  switch(pos) {
  case CORNER_LU: //左上
    Light(rScr * cos(rad), rScr * sin(rad), LIGHT_R, CalcAlpha(rad, QUARTER_PI*5));
    break;
  case CORNER_LD: //左下
    Light(rScr * cos(rad), height + rScr * sin(rad), LIGHT_R, CalcAlpha(rad, QUARTER_PI*3));
    break;
  case CORNER_RU: //右上
    Light(width + rScr * cos(rad), rScr * sin(rad), LIGHT_R, CalcAlpha(rad, QUARTER_PI*7));
    break;
  case CORNER_RD: //右下
    Light(width + rScr * cos(rad), height + rScr * sin(rad), LIGHT_R, CalcAlpha(rad, QUARTER_PI*1));
    break;
  default:
    break;
  }
}

/* 画面の四隅を中心にスポットライト(照明)をぐるぐるまわす */
void LightMove(float rad) {
  //照明が画面に出現するタイミングは雰囲気
  SetLight(rad, CORNER_LU);//左上
  SetLight(rad+PI/2, CORNER_LD);//左下
  SetLight(rad-PI/2, CORNER_RU);//右上
  SetLight(rad+PI, CORNER_RD);//右下
}

/*-------------------*/
void setup() {
  fullScreen();
  px = width/2;
  py = height/2;
  pRad=0;

  //対角線の中央までの距離(それぞれのスポットライトは対角線の中央で重なるように回る)
  rScr = sqrt(width*width + height*height)/2;
}

void draw() {
  background(0);
  LightMove(pRad);

  if (pRad >= TWO_PI) {
    pRad -= TWO_PI;
  }

  pRad += ROTATE_CYCLE;
}