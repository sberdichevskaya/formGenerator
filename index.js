

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
