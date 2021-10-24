document.getElementById("boton").addEventListener("click",clik);

function clik()
{
  var entrada = document.getElementById("numero").value;
  var salidas=true;
  var reciduo=[];
  var cociente=0;
  var bool=false;
  var mayor=0;
 
  document.getElementById("base").innerHTML="Base: 0 Palindromo: 0";


  for(var i=2; i<entrada; i++)
  {
    cociente=entrada;
    while( (cociente%i==1||cociente%i==0) && cociente>0)
    {
      reciduo.push(cociente%i);
      cociente= Math.trunc(cociente/i);
      if(cociente<=i)
        bool=true;
    }

    for(var k = 0; k < reciduo.length; k++){
      if (reciduo[k] > mayor)
        mayor = reciduo[k];
    } 

    if(bool==true && reciduo.length>=2 && mayor>=1)
    {
      for(var j=0;j<=(reciduo.length/2);j++)
      {
        if(reciduo[j]!=reciduo[(reciduo.length-1)-j])
        {
          salidas=false;
        }
      }
      if(salidas==true)
      {
        document.getElementById("base").innerHTML="Base: "+i.toString()+" Palindromo: ";
        for(var n = 0; n < reciduo.length; n++)
        {
          document.getElementById("base").innerHTML+=reciduo[n].toString();
        }
        break;
      }
    }
    bool=false;
    salidas=true;
    reciduo=[];
    mayor=0;
  }
}