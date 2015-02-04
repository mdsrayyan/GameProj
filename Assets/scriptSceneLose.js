#pragma strict

function Start () {

}

function Update () {

}
function OnGUI () 
{
GUI.BeginGroup(Rect(Screen.width/2-100,Screen.height/2-100,200,120));
GUI.Box(Rect(0,0,200,120),"YOU LOSE");

GUI.Label(Rect(10,30,100,50),"Score : "+ PlayerPrefs.GetInt("playerScore"));

if(GUI.Button(Rect(60,80,80,30),"Main Menu"))
{
Application.LoadLevel("sceneMainMenu");
}


GUI.EndGroup();

}