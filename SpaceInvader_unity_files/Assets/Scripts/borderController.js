#pragma strict

static var leftmost:float;
static var rightmost:float;
static var topmost:float;
static var bottommost:float;




function Start ()
{

}




function Update ()
{
	leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
}




static function EnableBorders(object:Transform)
{

	if (object.position.x < leftmost +1)
		{
			object.position.x = leftmost +1;
		}
	

	if (object.position.x > rightmost -1)
		{
			object.position.x = rightmost -1;
		}
}