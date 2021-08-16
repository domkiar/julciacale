function postar() {
    var resposta = document.getElementById("resp").value
    let respostas = [
        "12042002",
        "04122002",
        "12/04/2002",
        "12-04-2002",
        "2002/04/12"

    ]
    if (resposta == "" ) {
        alert("Me esqueceu PeppaPig ? (:")
    }else{
       if(respostas.includes(resposta)){
           alert("PepaPig Acertou :) ")
           document.location.href = "start.html"
       }else{
           alert("d")
       }
   }

}


