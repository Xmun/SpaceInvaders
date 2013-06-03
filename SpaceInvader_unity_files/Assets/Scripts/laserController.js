#pragma strict

var laserSpeed:int;
var explosion: GameObject;

function Start ()
{

}

function Update () 
{
	transform.Translate(Vector3.up * laserSpeed * Time.deltaTime);
}


function OnTriggerEnter(other:Collider)
	{
		if(other.gameObject.tag=="alien")
			{
				spaceshipController.score++;
				
				Destroy(other.gameObject);
				
				Destroy(this.gameObject);
				
				spaceshipController.shotshit++;
				
				alienGenerator.aliencount--;
				
				Explode();
			}
		
		if(other.gameObject.tag=="boss")
			{
				spaceshipController.score++;
				
				Destroy(this.gameObject);
				
				spaceshipController.shotshit++;
				
				Explode();
			}
		
	}

function OnBecameInvisible() 
	{
		Destroy(this.gameObject);
	}

function Explode()
	{
		Instantiate(explosion, transform.position, Quaternion.identity);
	}