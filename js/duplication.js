var num=[8,6,5,7,3,4,8,5,6,9,4,1,1,1,1];
var arr=[];
for(i=0;i<num.length;i++)
{
	if(arr.indexOf(num[i])===-1)
	{
		arr.push(num[i]);
	}
}
document.write(arr+"<br>");

var ar=[8,6,5,7,3,4,8,5,6,9,4,1,1,1,1];
b=[];
for(i=0;i<ar.length;i++)
{
	for(j=-1;j<b.length;j++)
	{	
		if(b.length==-1)
		{
			b.push(ar[i])
			j=-1;
		}
		else
		{
			if(ar[i]!=b[j])
			{
				if(j==b.length-1)
				{
					b.push(ar[i])
				}
			}
			else if(ar[i]==b[j])
			{
				i=i+1;
			}
		}
	}		
}
document.write(b);