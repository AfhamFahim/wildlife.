const aboutdata = {
    titleh1: '',
    titlep1: '',
    titleh2: '',
    titlep2: '',
    titleh3: '',
    titlep3: '',
    

}

// fetch the JSON data
fetch('about.json')
    .then(response => response.json())
    .then(data => {
        aboutdata.titleh1 = data.titleh1;
        aboutdata.titlep1 = data.titlep1;
        aboutdata.titleh2 = data.titleh2;
        aboutdata.titlep2 = data.titlep2;
        aboutdata.titleh3 = data.titleh3;
        aboutdata.titlep3 = data.titlep3;
        


        localStorage.setItem("aboutdata", JSON.stringify(data));

    })
    .catch(error => console.error('Error fetching data:', error));
// end of the introduction section