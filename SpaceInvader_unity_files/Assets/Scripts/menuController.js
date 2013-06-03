#pragma strict


var style:GUISkin;

function Start ()
	{
	
	}

function Update ()
	{
	
		Destroy(GameObject.FindGameObjectWithTag("spaceship"));
	
	}

function OnGUI()
{
	GUI.skin = style;
	
	GUILayout.BeginArea(Rect(Screen.width/2-100, Screen.height/2 + 50, 200, 200));
	
	if (GUILayout.Button("New Game"))
		{
			Application.LoadLevel(8);
		}
	
	if (GUILayout.Button("Help"))
		{
			Application.LoadLevel(9);
		}
	
	if (GUILayout.Button("Exit"))
		{
			Application.Quit();
		}
	
	GUILayout.EndArea();
	
}