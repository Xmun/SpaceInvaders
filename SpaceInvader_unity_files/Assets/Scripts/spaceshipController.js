#pragma strict
var style:GUISkin;
var laserSlot:Rigidbody;
var spaceshipSlot:Rigidbody;
static var score:int;
static var health:int;
static var shotsfired:int;
static var shotshit:int;

var boost:boolean;
var speed:int;
var level:int;
var n:int;




function Start ()
{
	health = 100;
	shotsfired = 0;
	shotshit = 0;
	score = 0;
	boost = false;

	DontDestroyOnLoad(this.gameObject);
}


function Update ()
{
	borderController.EnableBorders(this.transform);
	transform.Translate(Vector3.right * speed * Input.GetAxis("Horizontal") * Time.deltaTime);
	

	if(Input.GetKeyDown(KeyCode.Space))
		{	
			Instantiate(laserSlot,transform.position,transform.rotation);
			shotsfired++;
		}
	
	
	if (health <= 0)
		{
			Destroy(GameObject.FindGameObjectWithTag("spaceship"));
			Application.LoadLevel(8);
		}
	
	
	else 
		{
			if (health > 100)
				{
					health = 100;
				}
		}

	
	var myAlienGenerator:alienGenerator;
	myAlienGenerator=GameObject.FindGameObjectWithTag("swarm").GetComponent(alienGenerator);

	
	if(myAlienGenerator.aliencount==0)	
		{
			score = 0;
			level = Application.loadedLevel;
			n = level+1;
			Application.LoadLevel(n);
		}
	
	if(n == 7)
		{
			Destroy(GameObject.FindGameObjectWithTag("spaceship"));
		}
	
}

function OnGUI()
	{
		var shotsmissed:int;
		shotsmissed = shotsfired - shotshit;
		
		GUI.skin = style;
		GUI.color = Color.white;
		GUI.Label(Rect(10,0,150,25),"Score: "+score); 
		GUI.Label(Rect(200,0,150,25),"Health: "+health); 
		GUI.Label(Rect(375,0,180,25),"Shots Fired: "+shotsfired);
		GUI.Label(Rect(500,0,150,25),"Shots Hit: "+shotshit);
		GUI.Label(Rect(625,0,150,25),"Shots Missed: "+shotsmissed);
		
		GUI.Label(Rect(10,30,200,25),"Name: "+nameController.username);
	}

function OnTriggerEnter(other:Collider)
	{
		if(other.gameObject.tag=="enemylaser")
			{		
				health--;
			}
		
		if(other.gameObject.tag=="bosslaser")
			{
				health--;
			}
		
		if(other.gameObject.tag=="healthboost")
			{
				if (health < 100)
					{
						health = health + 5;
					}
				Destroy(GameObject.FindGameObjectWithTag("healthboost"));
			}
		
		if(other.gameObject.tag=="speedboost")
			{
				Destroy(GameObject.FindGameObjectWithTag("speedboost"));
				boost = true;
		
				speed = 300;
				yield WaitForSeconds (5);
				boost = false;
				speed = 15;
			}
		
	
	}


