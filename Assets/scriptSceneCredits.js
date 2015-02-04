#pragma strict

function Start () {

}

function Update () {

}
function OnGUI () 
{
GUI.BeginGroup(Rect(Screen.width/2-175,Screen.height/2-100,350,200));
GUI.Box(Rect(0,0,350,200),"Credits");

GUI.Label(Rect(10,30,400,40),"Designer				Mohammad");
GUI.Label(Rect(10,60,400,70),"Artist				Sirajuddin");
GUI.Label(Rect(10,90,400,100),"Level Designer			Rayyan");

if(GUI.Button(Rect(150,140,80,30),"Back"))
{
Application.LoadLevel("sceneMainMenu");
}


GUI.EndGroup();

}