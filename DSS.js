document.getElementById("myButton").onclick = function(){
    var age = document.getElementById("age").value;
    var anaemia = document.getElementById("anaemia").value;
    var  cr_phos = document.getElementById("cr_phos").value;
    var diabetes = document.getElementById("diabetes").value;
    var ej_fr = document.getElementById("ej_fr").value;
    var hi_bl = document.getElementById("hi_bl").value;
    var platelets = document.getElementById("platelets").value;
    var ser_cre = document.getElementById("ser_cre").value;
    var ser_sod = document.getElementById("ser_sod").value;
    var sex = document.getElementById("sex").value;
    var smoking = document.getElementById("smoking").value;
    console.log(age,anaemia,cr_phos,diabetes,ej_fr,hi_bl,platelets,ser_cre,ser_sod,sex,smoking);


    if(ej_fr<27.5 && cr_phos<67 && cr_phos<49.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr<27.5 && cr_phos<67 && cr_phos>=49.5 && ej_fr<22.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr<27.5 && cr_phos<67 && cr_phos>=49.5 && ej_fr>=22.5){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr<27.5 && cr_phos>=67 && smoking>=0.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr<27.5 && cr_phos>=67 && smoking <0.5 && cr_phos<114){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr<27.5 && cr_phos>=67 && smoking <0.5 && cr_phos>=114 &&platelets<272500&&cr_phos<148.5&&sex<0.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr<27.5 && cr_phos>=67 && smoking <0.5 && cr_phos>=114 &&platelets<272500&&cr_phos<148.5&&sex>=0.5){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr<27.5 && cr_phos>=67 && smoking <0.5 && cr_phos>=114 &&platelets<272500&&cr_phos>=148.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr<27.5 && cr_phos>=67 && smoking <0.5 && cr_phos>=114 &&platelets>=272500&&ser_sod>=137.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr<27.5 && cr_phos>=67 && smoking <0.5 && cr_phos>=114 &&platelets>=272500&&ser_sod<137.5&&age<62.5){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr<27.5 && cr_phos>=67 && smoking <0.5 && cr_phos>=114 &&platelets>=272500&&ser_sod<137.5&&age>=62.5&&diabetes<0.5){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr<27.5 && cr_phos>=67 && smoking <0.5 && cr_phos>=114 &&platelets>=272500&&ser_sod<137.5&&age>=62.5&&diabetes>=0.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos<26.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr<32.5&&ser_cre<1.05&&platelets<34900){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr<32.5&&ser_cre<1.05&&platelets>=34900&&age<53){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr<32.5&&ser_cre<1.05&&platelets>=34900&&age>=53){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr<32.5&&ser_cre>=1.05&&ser_cre>=2.15){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr<32.5&&ser_cre>=1.05&&ser_cre<2.15&&smoking<0.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr<32.5&&ser_cre>=1.05&&ser_cre<2.15&&smoking>=0.5&&hi_bl>=0.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr<32.5&&ser_cre>=1.05&&ser_cre<2.15&&smoking>=0.5&&hi_bl<0.5&&platelets<224500){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr<32.5&&ser_cre>=1.05&&ser_cre<2.15&&smoking>=0.5&&hi_bl<0.5&&platelets>=224500){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets<226500&&age<74&&ser_cre>=3.2){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets<226500&&age<74&&ser_cre<3.2&&ser_cre<0.65){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets<226500&&age<74&&ser_cre<3.2&&ser_cre>=0.65&&age<50.5&&anaemia>=0.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets<226500&&age<74&&ser_cre<3.2&&ser_cre>=0.65&&age<50.5&&anaemia<0.5&&ser_cre<1.85){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets<226500&&age<74&&ser_cre<3.2&&ser_cre>=0.65&&age<50.5&&anaemia<0.5&&ser_cre>=1.85){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets<226500&&age>=74&&diabetes>=0.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets<226500&&age>=74&&diabetes<0.5&&ser_cre<0.95){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets<226500&&age>=74&&diabetes<0.5&&ser_cre>=0.95&&hi_bl<0.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets<226500&&age>=74&&diabetes<0.5&&ser_cre>=0.95&&hi_bl>=0.5&&platalets<184000){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets<226500&&age>=74&&diabetes<0.5&&ser_cre>=0.95&&hi_bl>=0.5&&platalets>=184000){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age>=79&&ser_sod<135.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age>=79&&ser_sod>=135.5&&diabetes>=0.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age>=79&&ser_sod>=135.5&&diabetes<0.5&&ser_cre<1.04){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age>=79&&ser_sod>=135.5&&diabetes<0.5&&ser_cre>=1.04){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age<79&&cr_phos>=3329.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age<79&&cr_phos<3329.5&&ser_sod<135.5&&cr_phos>=618.5){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age<79&&cr_phos<3329.5&&ser_sod<135.5&&cr_phos<618.5&&ser_sod<131.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age<79&&cr_phos<3329.5&&ser_sod<135.5&&cr_phos<618.5&&ser_sod>=131.5&&platelets>=309500){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age<79&&cr_phos<3329.5&&ser_sod<135.5&&cr_phos<618.5&&ser_sod>=131.5&&platelets<309500&&cr_phos<184){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age<79&&cr_phos<3329.5&&ser_sod<135.5&&cr_phos<618.5&&ser_sod>=131.5&&platelets<309500&&cr_phos>=184&&ser_cre<2){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age<79&&cr_phos<3329.5&&ser_sod<135.5&&cr_phos<618.5&&ser_sod>=131.5&&platelets<309500&&cr_phos>=184&&ser_cre>=2){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age<79&&cr_phos<3329.5&&ser_sod>=135.5&&ser_cre>=1.24&&platelets>=401000){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age<79&&cr_phos<3329.5&&ser_sod>=135.5&&ser_cre>=1.24&&platelets<401000&&anaemia<0.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age<79&&cr_phos<3329.5&&ser_sod>=135.5&&ser_cre>=1.24&&platelets<401000&&anaemia>=0.5&&platelets<340500){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age<79&&cr_phos<3329.5&&ser_sod>=135.5&&ser_cre>=1.24&&platelets<401000&&anaemia>=0.5&&platelets>=340500){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age<79&&cr_phos<3329.5&&ser_sod>=135.5&&ser_cre<1.24&&ej_fr>=39){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age<79&&cr_phos<3329.5&&ser_sod>=135.5&&ser_cre<1.24&&ej_fr<39&&ser_sod>=143.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age<79&&cr_phos<3329.5&&ser_sod>=135.5&&ser_cre<1.24&&ej_fr<39&&ser_sod<143.5&&sex<0.5){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age<79&&cr_phos<3329.5&&ser_sod>=135.5&&ser_cre<1.24&&ej_fr<39&&ser_sod<143.5&&sex>=0.5&&smoking<0.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age<79&&cr_phos<3329.5&&ser_sod>=135.5&&ser_cre<1.24&&ej_fr<39&&ser_sod<143.5&&sex>=0.5&&smoking>=0.5&&age<57.5){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age<79&&cr_phos<3329.5&&ser_sod>=135.5&&ser_cre<1.24&&ej_fr<39&&ser_sod<143.5&&sex>=0.5&&smoking>=0.5&&age>=57.5&&ser_sod<137.5){
        console.log("Patient is fine")
        document.getElementById("result").innerHTML = "Patient is fine"
    }else if(ej_fr>=27.5&&cr_phos>=26.5&&ej_fr>=32.5&&platelets>=226500&&age<79&&cr_phos<3329.5&&ser_sod>=135.5&&ser_cre<1.24&&ej_fr<39&&ser_sod<143.5&&sex>=0.5&&smoking>=0.5&&age>=57.5&&ser_sod>=137.5){
        console.log("There is a high risk of death")
        document.getElementById("result").innerHTML = "There is a high risk of death"
    }


      
            

    

}
