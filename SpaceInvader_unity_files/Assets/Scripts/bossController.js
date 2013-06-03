#pragma strict

var enemyLaser:Rigidbody;
static var bosshealth:int; 
var leftmargin:float=-13.0;
var rightmargin:float=7.0;

var touchedLeftWall:boolean;
var touchedRightWall:boolean;
var style:GUISkin;






function Start () 
	{
		touchedRightWall=true;
	
		bosshealth = 100;
		
		var delay:float;
	
		delay = Random.Range(0.50, 1.0);
	
		InvokeRepeating("ShootLaser",delay,delay);
	}




function Update () 
{

	if (bosshealth <= 0)
		{
			Destroy(GameObject.FindGameObjectWithTag("boss"));
	
			Application.LoadLevel(7);
		}
		
		else 
		{
			if (bosshealth > 100)
				{
					bosshealth = 100;
				}
		}
	
		if (transform.position.x < leftmargin)
		{
			touchedLeftWall = true;
			touchedRightWall = false;
		}
		
		if (transform.position.x > rightmargin)
			{
				touchedLeftWall = false;
				touchedRightWall = true;
			}
		
		if (touchedLeftWall == true)
			{
				goRight();
			}
			
		if (touchedRightWall == true)
			{
				goLeft();
			}
}




function OnGUI()
	{
		GUI.skin = style;
		GUI.Label(Rect(850,0,180,25),"Boss Health: "+bosshealth); 
	}
	
	
	
	
function OnTriggerEnter(other:Collider)
	{
		if(other.gameObject.tag=="playerlaser")
			{
				bosshealth--;
			}
	}




function goLeft()
	{
		transform.Translate(Vector3.left * 10 * Time.deltaTime);
	}




function goRight()
	{
		transform.Translate(Vector3.right * 10 * Time.deltaTime);
	}




function ShootLaser ()
	{
		Instantiate(enemyLaser,transform.position,transform.rotation); 
	}
