#pragma strict
static var gameTime:float=0.0;
static var score:float=0.0;
static var lives:float=3.0;
var largeFont:GUIStyle;

function Start () 
{
InvokeRepeating("CountDown",0.5,0.3);
}

function Update () 
{

}
function AddScore ()
{
score=score+1;
Debug.Log(score);
}
function SubstractLife()
{
lives -=1;
Debug.Log(gameTime);
if(lives<=0)
{
PlayerPrefs.SetInt("playerScore",gameTime);
lives=3;
Application.LoadLevel("sceneLose");
}
}
function CountDown()
{
gameTime += 1.0;
}
function OnGUI () 
{
largeFont = new GUIStyle();
largeFont.fontSize = 24;
GUI.color = Color.black;
GUI.Label (Rect (10, 5, 50, 50),gameTime.ToString(),largeFont);
GUI.Label (Rect (Screen.width - 70,5,100,20), "Lives : "+lives);
}