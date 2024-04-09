const leporddata = {
    contenth1:'',
    contentp1:'',
    contenth2:'',
    contenth3:'',
    contentp2:'',
    contenth4:'',
    contentp3:'',
    contenth5:'',
    contentp4:'',
    contenth6:'',
    contentp5:'',
    contenth7:'',
    contentp6:'',
    contenth8:'',
    contentp7:'',
    contenth9:'',
    contentp8:'',
    contenth10:'',
    contentp9:'',
    contenth11:'',
    contentp10:'',
    contenth12:'',
    contentp11:'',
    contenth13:'',
    contentp12:'',
    contenth14:'',
    contentp13:'',



}

// fetch the JSON data
fetch('lepord.json')
    .then(response => response.json())
    .then(data => {
        leporddata.contenth1 = data.contenth1;
        leporddata.contentp1 = data.contentp1;
        leporddata.contenth2 = data.contenth2;
        leporddata.contenth3 = data.contenth3;
        leporddata.contentp2 = data.contentp2;
        leporddata.contenth4 = data.contenth4;
        leporddata.contentp3= data.contentp3;
        leporddata.contenth5 = data.contenth5;
        leporddata.contentp4= data.contentp4;
        leporddata.contenth6 = data.contenth6;
        leporddata.contentp5= data.contentp5;
        leporddata.contenth7 = data.contenth7;
        leporddata.contentp6= data.contentp6;
        leporddata.contenth8 = data.contenth8;
        leporddata.contentp7= data.contentp7;
        leporddata.contenth9 = data.contenth9;
        leporddata.contentp8= data.contentp8;
        leporddata.contenth10 = data.contenth10;
        leporddata.contentp9= data.contentp9;
        leporddata.contenth11 = data.contenth11;
        leporddata.contentp10= data.contentp10;
        leporddata.contenth12 = data.contenth12;
        leporddata.contentp11= data.contentp11;
        leporddata.contenth13 = data.contenth13;
        leporddata.contentp12= data.contentp12;
        leporddata.contenth14 = data.contenth14;
        leporddata.contentp13= data.contentp13;
        


        localStorage.setItem("leporddata", JSON.stringify(data));

    })
    .catch(error => console.error('Error fetching data:', error));
// end of the introduction section