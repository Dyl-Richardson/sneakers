create = () => {
    let main = document.createElement('main');
    let div = document.createElement('div');
    let section = document.createElement('section');

    for (const elt of sneaker) {

        let imgSection = document.createElement('section');
        
        for (let pic = 0; pic < elt.picture.length; pic++) {     
            let image = document.createElement('img');
            image.src = elt.picture[pic];
            imgSection.appendChild(image);
        }
    

        for (let thumb = 0; thumb < elt.thumbnail.length; thumb++) {   
            let thumbnail = document.createElement('img');
            thumbnail.src = elt.thumbnail[thumb];
            imgSection.appendChild(thumbnail);
        }
        section.appendChild(imgSection);

        let mark = document.createElement('p');
        mark.innerText = elt.mark;
        section.appendChild(mark);

        let name = document.createElement('p');
        name.innerText = elt.name;
        section.appendChild(name);

        let description = document.createElement('p');
        description.innerText = elt.description;
        section.appendChild(description);

        let price = document.createElement('p');
        price.innerText = elt.price;

    }
    div.appendChild(section);
    main.appendChild(div);
    console.log(main);
    document.body.appendChild(main);
}
create ();