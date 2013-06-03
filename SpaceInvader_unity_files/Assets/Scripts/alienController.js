#pragma strict

var enemyLaser:Rigidbody;


function Start () {
	var delay:float;

	delay = Random.Range(1.0, 3.0);

	InvokeRepeating("ShootLaser",delay,delay);
}


function Update ()
	{
	
	}
	
function ShootLaser ()
	{
		Instantiate(enemyLaser,transform.position,transform.rotation); 
	}
