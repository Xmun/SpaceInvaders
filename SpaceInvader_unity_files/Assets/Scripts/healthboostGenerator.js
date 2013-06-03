#pragma strict

var healthboost:Rigidbody;
 
function Start () 
	{
		InvokeRepeating("createHealthboost",10.0,5.0);
	}
 

function Update ()
	{
	 
	}
	
function createHealthboost()
	{
	
		Instantiate(healthboost,Vector3(borderController.bottommost,0,1),Quaternion.identity);
	}
 
