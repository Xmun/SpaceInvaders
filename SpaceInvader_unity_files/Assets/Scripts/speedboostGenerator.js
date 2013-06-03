#pragma strict

var speedboost:Rigidbody;
 
function Start () 
	{
		InvokeRepeating("createSpeedboost",15.0,10.0);
	}
 
 
function Update ()
	{
 
	}

function createSpeedboost()
	{
		Instantiate(speedboost,Vector3(borderController.bottommost,0,1),Quaternion.identity);
	}

