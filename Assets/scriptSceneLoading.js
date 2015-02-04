#pragma strict
var waitTime:float=3.0;
function Start () {

}

function Update () {
if(Input.GetKeyDown("space"))
{
Application.LoadLevel("level1");
}
else
{
WaitTime();
}
}
function OnGUI () 
{
GUI.BeginGroup(Rect(Screen.width/2-100,Screen.height/2-100,200,200));
GUI.Box(Rect(0,0,200,200),"Instructions");

GUI.Label(Rect(10,30,190,40),"1) Arrow keys for Move");
GUI.Label(Rect(10,60,190,70),"2) Protect Yourself from enimies");
GUI.Label(Rect(10,90,190,100),"3) Esc to Quit the game");
GUI.EndGroup();

}

function WaitTime()
{
yield WaitForSeconds(waitTime);
Application.LoadLevel("level1");
}