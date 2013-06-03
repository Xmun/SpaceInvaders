#pragma strict


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
		
		GUILayout.BeginArea(Rect(Screen.width/2-100, Screen.height/2 + 250, 200, 200));
		
		
		if (GUILayout.Button("Back"))
			{
				Application.LoadLevel(0);
			}
		
		
		
		GUILayout.EndArea();
		
	}