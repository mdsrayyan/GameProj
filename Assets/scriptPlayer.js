#pragma strict
var playerSpeedHorizontal:float = 10.0f;  // Horizontal speed of the player
var playerSpeedVertical:float  = 0f;  
var horizMin:float=-6.1f;
var horizMax:float=6.1f;
var sceneManager:GameObject;
var tiltSensitivity:float= 0.1f;
var transV:float=0.0f;

function Start () {
//var viewPort=Screen.width;
gameObject.transform.position = new Vector2(0,-4.5f);
}

function Update () {
		var transH:float = Input.GetAxis("Horizontal") * playerSpeedHorizontal * Time.deltaTime;

		// Vertical translation amount		
		if (Mathf.Abs(Input.acceleration.y) > tiltSensitivity)	{
			transV = Mathf.Sign(Input.acceleration.y) * playerSpeedVertical * Time.deltaTime;
		}
		// Horizontal translation amounts
		if (Mathf.Abs(Input.acceleration.x) > tiltSensitivity)	{
			transH = Mathf.Sign(Input.acceleration.x) * playerSpeedHorizontal * Time.deltaTime;
		}
		
	
	// Restrict players range of motion in horizontal direction
		if(transform.position.x < horizMin)
			transH = horizMin - transform.position.x;
		if(transform.position.x > horizMax)
			transH = horizMax - transform.position.x;
	
	
	transform.Translate(transH,0,0);

}
// Function to detect collision between player and anstroid
	function OnTriggerEnter2D(other: Collider2D) 
	{
	sceneManager.GetComponent(scriptSceneManager).SubstractLife();	
	}