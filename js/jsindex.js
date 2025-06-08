
function abrirClassif(){
    const classif = document.getElementById("modalClassif");
    classif.showModal();
}

function fecharClassif(){
    const classif = document.getElementById("modalClassif");
    classif.close();
}

function abrirQual(){
    const qual = document.getElementById("modalQual");
    qual.showModal();
}

function fecharQual(){
    const qual = document.getElementById("modalQual");
    qual.close();
}

function abrirEx(){
    const ex = document.getElementById("modalEx");
    ex.showModal();
}

function fecharEx(){
    const ex = document.getElementById("modalEx");
    ex.close();
}

function calcularSistema(){
    var R = document.getElementById("R").value;
    var N = document.getElementById("N").value;
    var F = document.getElementById("F").value;
    var Ep = document.getElementById("Ep").value;

    var EmTotal = Number(R) + Number(N) + Number(F);
    var UEV = Number(EmTotal) / Number(Ep);
    var EYR = Number(EmTotal) / Number(F);
    var ELR = (Number(N) + Number(F)) / Number(R);
    var EIR = Number(F) / (Number(R) + Number(N));
    var Ren = Number(R) / Number(EmTotal);
    var ESI = Number(EYR) / Number(ELR);

    document.getElementById("EmergiaTotal").innerHTML ="A emergia total do sistema é "+ EmTotal +";";
    document.getElementById("UEV").innerHTML ="O sistema tem um valor unitário de emergia (UEV) de "+ UEV +";";
    document.getElementById("EYR").innerHTML ="A razão de rendimento em emergia (EYR) do sistema é de "+ EYR +";";
    document.getElementById("ELR").innerHTML ="A razão da carga ambiental (ELR) do sistema é de "+ ELR +";";
    if(EIR < 1){
        document.getElementById("EIR").innerHTML ="A razão de investimento em energia (EIR) do sistema é de "+ EIR +", o meio ambiente provê mais recursos para o sistema do que a economia";
    }else{
        document.getElementById("EIR").innerHTML ="A razão de investimento em energia (EIR) do sistema é de "+ EIR +", o meio ambiente provê menos recursos para o sistema do que a economia";
    }
    document.getElementById("%R").innerHTML ="A renovabilidade do sistema é de "+ Ren +";";
    if(ESI < 1){
        document.getElementById("ESI").innerHTML ="O índice de sustentabilidade ambiental (ESI) do sistema é "+ ESI +", o sistema não é sustentável a longo prazo";
    }else if(ESI >= 1 && ESI <= 5){
        document.getElementById("ESI").innerHTML ="O índice de sustentabilidade ambiental (ESI) do sistema é "+ ESI +", o sistema é razoalmente sustentável a longo prazo";
    }else{
        document.getElementById("ESI").innerHTML ="O índice de sustentabilidade ambiental (ESI) do sistema é "+ ESI +", o sistema é sustentável a longo prazo";
    }
}
