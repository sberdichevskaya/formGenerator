

class Form {
    #name;
    //#label

    constructor(name) {
        this.#name = name;
    }

    async asd() {
        try {
            const result = await
                fetch(`./data/form-${this.#name}.json`).then(res => (res.json()))
            console.log(result)
            //result.fields.map((item) => {
              //  console.log(item)
           // })

           // const header = document.querySelector('header');
            const label = document.querySelector('section');

            const myH1 = document.createElement('h1');
            myH1.textContent = result.title;
            label.appendChild(myH1);

            if (result.description)
            {
                const myDescription = document.createElement('h3');
                myDescription.textContent = result.description;
                label.appendChild(myDescription);
            }

            for (let i = 0; i < result.fields.length; i++) {
                const myLabel = document.createElement('article');
                myLabel.textContent = result.fields[i]['label']//result['tields'];
                label.appendChild(myLabel);
            }

            for (let i = 0; i < result.fields.length; i++) {
                const myInput = document.createElement('input');
                if (result.fields[i]['attrs'].type == 'text') {
                    myInput.textContent = result.fields[i]['attrs']
                    label.appendChild(myInput);
                    //console.log(result.fields[i]['attrs'].type)
                }
                //console.log(result.fields[i]['attrs'].type)
                if (result.fields[i]['attrs'].type == 'radio') {
                    //console.log(result.fields[i]['attrs'].type)
                    for (let j = 0; j < result.fields[i]['attrs']['variants'].length; j++) {
                        //console.log('1')
                        const myRadioLabel = document.createElement('article');
                        const myRadio = document.createElement('input');
                        myRadio.setAttribute('type', 'radio')
                        myRadioLabel.textContent = result.fields[i]['attrs']['variants'][j].label
                        label.appendChild(myRadioLabel);
                        label.appendChild(myRadio);
                    }
                }

                if (result.fields[i]['attrs'].type == 'textarea') {
                    const myTextArea = document.createElement('textarea');
                    //myTextArea.innerHTML = "Ответ введите сюда"
                    label.appendChild(myTextArea);
                }

                if (result.fields[i]['attrs'].type == 'select') {
                    const mySelect = document.createElement('select');
                    const options = ['Мужской', 'Женский'];
                    mySelect.textContent = result.fields[i]['attrs']
                    options.forEach((element, key) => {
                        mySelect[key] = new Option(element, key)
                    })
                    label.appendChild(mySelect);
                    //console.log(result.fields[i]['attrs'].type)
                }

                if (result.fields[i]['attrs'].type == 'checkbox') {
                    for (let x = 0; x < result.fields[i]['attrs']['variants'].length; x++) {
                        //console.log('1')
                        const myCheckBoxLabel = document.createElement('article');
                        const myCheckBox = document.createElement('input');
                        myCheckBox.setAttribute('type', 'checkbox')
                        myCheckBoxLabel.textContent = result.fields[i]['attrs']['variants'][x].label
                        label.appendChild(myCheckBoxLabel);
                        label.appendChild(myCheckBox);
                    }
                }
            }
            for (let k = 0; k < result.buttons.length; k++) {
                const myButton1 = document.createElement('button');
                myButton1.textContent = result.buttons[k];
                label.appendChild(myButton1);
            }
        } catch (e) {
            throw new Error("asd")
        }
    }
}


let test1 = 'test-1';
let test2 = 'test-2';
let test3 = 'test-3';
let Form1 = new Form(test1)
let Form2 = new Form(test2)
let Form3 = new Form(test3)

console.log(Form1.asd())
console.log(Form2.asd())
console.log(Form3.asd())

//console.log('2')
//console.log(populateHeader())


   /* async function populate() { // функция возвращает промис

        const requestURL = './data/form-test-1.json';
        const request = new Request(requestURL);

        const response = await fetch(request); // выполнение запроса. Первый параметр URL-адрес запроса на объект
        // fetch выполняет запрос и возвращает промис, который буудет ждать, когда завпрос завершится
        // после выполняется запрос сервера
        const text = await response.text(); // возвращает промис, который резолвится в обычный текст;
        // возможно мне стоит использовать await response.FormData()

        // Интерфейс FormData() предоставляет способ создания объекта набора пар ключ/значение, представляющих поля формы и их значения
        // эти значения можно отправить с помощью метода fetch()или XMLHttpRequest.send()

        const elements = JSON.parse(text); // статический метод анализирует строку JSON, создавая значение JS или объект прописаный строкой

        console.log(text)
        console.log(elements)

        populateHeader(elements);
      //  populateHeroes(superHeroes);
        console.log(populateHeader(elements))
    }

    function populateHeader(obj) {
        const header = document.querySelector('header');
        const myH1 = document.createElement('h1'); // создает элемент
        myH1.textContent = obj.title; //textContent позволяет считывать или задавать текстовое содержимое элемента
        // Обращение к свойству вернет строку, которая будет состоять из текстового содержимого всех вложенных элементов
        // аналогичная функций - innerText
        header.appendChild(myH1); // для вставки в конец какой-либо другой элемент

       // const myPara = document.createElement('p');
      //  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
     //   header.appendChild(myPara);
    }

   // function populateHeroes(obj) {
      //  const section = document.querySelector('section');
      //  const heroes = obj.members; // members - массив объектов

      //  for (const hero of heroes) {
         //   const myArticle = document.createElement('article');
         //   const myH2 = document.createElement('h2');
          //  const myPara1 = document.createElement('p');
          //  const myPara2 = document.createElement('p');
           // const myPara3 = document.createElement('p');
           // const myList = document.createElement('ul');

           // myH2.textContent = hero.name;
          //  myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
          //  myPara2.textContent = `Age: ${hero.age}`;
          //  myPara3.textContent = 'Superpowers:';

          //  const superPowers = hero.powers;
           // for (const power of superPowers) {
            //    const listItem = document.createElement('li');
             //   listItem.textContent = power;
              //  myList.appendChild(listItem);
          //  }

           // myArticle.appendChild(myH2);
          //  myArticle.appendChild(myPara1);
          //  myArticle.appendChild(myPara2);
         //   myArticle.appendChild(myPara3);
          //  myArticle.appendChild(myList);

           // section.appendChild(myArticle);
        //}
  //  }

    populate();*/






