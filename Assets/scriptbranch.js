#pragma strict
var astroidSpeed:float=6.0;
var yMax:float=6.0f;
var yMin:float=-6.0f;
var xMax:float=5.5f;
var xMin:float=-5.5f;
function Start () {
var randValue:float=Random.Range(xMin,xMax);
if(randValue<=0)
{
transform.position.x=xMin;
renderer.material.mainTextureScale = Vector2 (-1,-1);
}
else
{
transform.position.x=xMax;
renderer.material.mainTextureScale = Vector2 (1,-1);
}
}
// Function to reset enemy to random position
function resetAstroid()	
{
var randValue:float=Random.Range(xMin,xMax);
if(randValue<=0)
{
transform.position = (new Vector2(xMin,yMax)); // transforming eney to random posiiton
renderer.material.mainTextureScale = Vector2 (-1,-1);
Debug.Log(renderer.material.mainTextureScale);
}
else
{
transform.position = (new Vector2(xMax,yMax));
renderer.material.mainTextureScale = Vector2 (1,-1);
Debug.Log(renderer.material.mainTextureScale);
}
}
function Update () {
// moving astroid in -ve y direction
		transform.Translate(0,-astroidSpeed * Time.deltaTime,0f);
		if (transform.position.y <= yMin)	
		{
			// Creating random posiiton for next astroid along the x axis
			resetAstroid();
		}
		
	
}