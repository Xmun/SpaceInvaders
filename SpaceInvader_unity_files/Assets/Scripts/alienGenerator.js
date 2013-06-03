#pragma strict

var alien:Rigidbody;
var rows:int;
var columns:int;
static var aliencount:int; 


function Start ()
	{
		aliencount = 0;
		
		generateAliens(rows,columns);
	}

function Update () 
{

}

function generateAliens(rows:int, columns:int)
	{
		var ypos = transform.position.y;
		
		transform.position.x = 0;
		
		for (var rowscounter=0; rowscounter<rows; rowscounter++)
			{
				var tempAlien:Rigidbody;
				
				for(var counter=0; counter<columns; counter++)
					{					
						tempAlien = Instantiate(alien,Vector3(counter*2,ypos - (rowscounter*1.5),1),Quaternion.identity); 
						tempAlien.transform.parent = this.transform;
						aliencount++; 
					}
			}
	}
