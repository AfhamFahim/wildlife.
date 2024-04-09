const homedata = {
    intro: '',
    introh3: '',
    introp1: '',
    introp1: '',
    titleh3: '',
    titleb1: '',
    title2h3: '',
    title2p1: '',
    titlep2: '',
    titlep3: '',
    numberOnep6: '',

}

// fetch the JSON data
fetch('index.json')
    .then(response => response.json())
    .then(data => {
        homedata.intro = data.intro;
        homedata.introh3 = data.introh3;
        homedata.intro2 = data.intro2;
        homedata.introp1 = data.introp1;
        homedata.titleh3 = data.titleh3;
        homedata.titleb1 = data.titleb1;
        homedata.title2h3 = data.title2h3;
        homedata.title2p1 = data.title2p1;
        homedata.titlep2 = data.titlep2;
        homedata.titlep3 = data.titlep3;
        homedata.numberOnep6 = data.numberOnep6;


        localStorage.setItem("homedata", JSON.stringify(data));

    })
    .catch(error => console.error('Error fetching data:', error));
// end of the introduction section