const gallerydata = {
    paragraphp1: '',
    headingh1: '',
    headingh2: '',
    paragraphp2: '',
    headingh3: '',
    paragraphp3: '',

    numberOnep3: '',
    numberOnep4: '',
    numberOneh2: '',
    numberOnep5: '',
    numberOnep6: '',

}

// fetch the JSON data
fetch('gallery.json')
    .then(response => response.json())
    .then(data => {
        gallerydata.paragraphp1 = data.paragraphp1;
        gallerydata.headingh1 = data.headingh1;
        gallerydata.headingh2 = data.headingh2;
        gallerydata.paragraphp2 = data.paragraphp2;
        gallerydata.headingh3 = data.headingh3;
        gallerydata.paragraphp3 = data.paragraphp3;

        gallerydata.numberOnep3 = data.numberOnep3;
        gallerydata.numberOnep4 = data.numberOnep4;
        gallerydata.numberOneh2 = data.numberOneh2;
        gallerydata.numberOnep5 = data.numberOnep5;
        gallerydata.numberOnep6 = data.numberOnep6;


        localStorage.setItem("gallerydata", JSON.stringify(data));

    })
    .catch(error => console.error('Error fetching data:', error));
// end of the introduction section