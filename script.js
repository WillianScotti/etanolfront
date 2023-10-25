function calcular(){
    var valoRetanol =parseFloat(etanol.value);
    var valorGasolina =parseFloat(gasolina.value);
   
   var custo = (valoRetanol/valorGasolina)

   if (custo > 0.7){
     alert("Use Gasolina");
   }

   if (custo < 0.7){
    alert("Use Etanol");;
  }

  if (custo == 0.7){
    alert("Tanto faz");
  }
}