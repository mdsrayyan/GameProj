#pragma strict

function Start () {

}

function Update () {

}
function OnGUI () 
{
GUI.BeginGroup(Rect(Screen.width/2-70,Screen.height/2-80,160,180));
GUI.Box(Rect(0,0,160,180),"Main Menu");
if(GUI.Button(Rect(30,30,100,30),"Start Game"))
{
Application.LoadLevel("sceneLoading");
}
if(GUI.Button(Rect(30,65,100,30),"Credits"))
{
Application.LoadLevel("sceneCredits");
}
if(GUI.Button(Rect(30,100,100,30),"Exit"))
{
Application.Quit();
}
if(GUI.Button(Rect(30,135,100,30),"Homepage"))
{
Application.OpenURL("http://www.google.com");
}
GUI.EndGroup();
}