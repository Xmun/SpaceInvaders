#pragma strict

static var username = "";
var checkname: boolean = false;
var style:GUISkin;

function Start ()
	{
	
	}

function Update ()
	{
	
	}

function OnGUI()
	{
		GUI.skin = style;
		GUI.Label(Rect((Screen.width/2)-100,Screen.height/2,100,30),"Enter Name:");
		username = GUI.TextField(Rect(Screen.width/2,Screen.height/2,200,25),username,40);
		
	
		if(checkname == true)
			{
				Application.LoadLevel(1);
				
			} else
			
				{
		
				if(GUI.Button(Rect(Screen.width/2,(Screen.height/2)+40,150,40),"Start Game"))
				
					{
						if(username == "")
							{
								checkname = false;				
							}
						
						else
							{
								checkname = true;
							}
					}
				}
	
	}
