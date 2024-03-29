'use strict' //strict javascript

AFRAME.registerComponent('create-topping-component', {
    schema: {},
    init: function()  {
        const Context_AF = this; //this refers to "this" component, keep this context

        //count how layers of cheese this pizza currently has; other toppings will go on top
        window.cheeseCount = 0;

        //total number of toppings
        let count = 0;

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click', function(event) {

            //sauce event
            if(Context_AF.el.id=="sauce_button") {
                Context_AF.createSauce(window.cheeseCount);
            }

            //cheese event
            if(Context_AF.el.id=="cheese_button" && window.cheeseCount < 10) {
                window.cheeseCount++;

                Context_AF.createCheese(window.cheeseCount);
            }

            //pepperoni event
            if(Context_AF.el.id=="pepperoni_button") {
                Context_AF.createPepperoni(window.cheeseCount);
            }

            //green pepper event
            if(Context_AF.el.id=="gpepper_button") {
                Context_AF.createGPepper(window.cheeseCount);
            }

            //mushroom event
            if(Context_AF.el.id=="mushroom_button") {
                Context_AF.createMushroom(window.cheeseCount);
            }

            //olive event
            if(Context_AF.el.id=="olive_button") {
                Context_AF.createOlive(window.cheeseCount);
            }

            //new pizza
            if(Context_AF.el.id=="trash"){
                window.cheeseCount = 0;

                Context_AF.createNew();
            }

            count++
            //console.log("There are currently: " + count + " toppings.");
        });

        //make button larger on hover
        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(1.08, 1.08, 1.08);
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        })
    },

    //custom function for adding tomato sauce to the pizza
    createSauce: function(counter) {
        const Context_AF = this; //be careful of "this"!

        //create an html element that makes the sauce
        let sauceElem = document.createElement('a-entity'); //create element by code
        sauceElem.setAttribute('class', 'clickable topping sauce');
        sauceElem.setAttribute('geometry', 'primitive:cylinder; radius:0.6; height:0.01;');
        sauceElem.setAttribute('material', 'color:#b21807;'); //set material/texture

        //random position on cheese/pizza area
        sauceElem.setAttribute('position', {x:0, y: 0.027 + (counter * 0.011), z:0});

        //can be deleted
        sauceElem.setAttribute('delete-topping-component', "");

        //attach to scene
        let scene = document.querySelector('a-scene').querySelector('#pizza');;

        scene.appendChild(sauceElem);
    },

    //custom function for adding a layer of cheese on the pizza
    createCheese: function(counter ) {
        const Context_AF = this; //be careful of "this"!

        //create an html element that makes the cheese
        let cheeseElem = document.createElement('a-entity'); //create element by code
        cheeseElem.setAttribute('class', 'topping cheese');
        cheeseElem.setAttribute('position', {x:0, y: 0.027 + (counter * 0.01), z:0 });
        cheeseElem.setAttribute('geometry', 'primitive:cylinder; radius:0.6; height:0.01;');
        cheeseElem.setAttribute('material', 'color:#ffd867;'); //set material/texture

        //attach to scene
        let scene = document.querySelector('a-scene').querySelector('#pizza');
        scene.appendChild(cheeseElem);
    },

    //custom function for adding pepperonis onto the pizza
    createPepperoni: function(counter) {
        const Context_AF = this; //be careful of "this"!

        //create an html element that makes the pepperoni
        let pepperoniElem = document.createElement('a-entity'); //create element by code
        pepperoniElem.setAttribute('class', 'clickable topping pepperoni');
        pepperoniElem.setAttribute('geometry', 'primitive:cylinder; radius:0.1; height:0.02;');
        pepperoniElem.setAttribute('material', 'color:#ca2521;'); //set material/texture

        //random position on cheese/pizza area
        pepperoniElem.setAttribute('position', {x:Math.random() * (0.48 + 0.48) - 0.48, y: 0.027 + (counter * 0.011), z:Math.random() * (0.48 + 0.48) - 0.48});

        //random scale
        const randScale = 0.8 + (Math.random() * 0.3);
        pepperoniElem.setAttribute('scale', {x:randScale, y:randScale, z:randScale});

        //can be deleted and plays sound on click
        pepperoniElem.setAttribute('delete-topping-component', "");

        //attach to scene
        let scene = document.querySelector('a-scene').querySelector('#pizza');;
        scene.appendChild(pepperoniElem);
    },

    //custom function for adding green peppers onto the pizza
    createGPepper: function(counter) {
        const Context_AF = this; //be careful of "this"!

        //create an html element that makes the green pepper
        let gPepperElem = document.createElement('a-entity'); //create element by code
        gPepperElem.setAttribute('class', 'clickable topping gpepper');
        gPepperElem.setAttribute('geometry', 'primitive:box; width:0.05; height:0.05; depth:0.05;');
        gPepperElem.setAttribute('material', 'color:#456c3b;'); //set material/texture

        //random position on cheese/pizza area
        gPepperElem.setAttribute('position', {x:Math.random() * (0.48 + 0.48) - 0.48, y: 0.027 + (counter * 0.011), z:Math.random() * (0.48 + 0.48) - 0.48});

        //random scale
        const randScale = 0.8 + (Math.random() * 0.3);
        gPepperElem.setAttribute('scale', {x:randScale, y:randScale, z:randScale});

        //can be deleted and plays sound on click
        gPepperElem.setAttribute('delete-topping-component', "");

        //attach to scene
        let scene = document.querySelector('a-scene').querySelector('#pizza');;
        scene.appendChild(gPepperElem);
    },

    //custom function for adding mushrooms onto the pizza
    createMushroom: function(counter) {
        const Context_AF = this; //be careful of "this"!

        //create an html element that makes the green pepper
        let mushroomElem = document.createElement('a-entity'); //create element by code
        mushroomElem.setAttribute('class', 'clickable topping mushroom');
        mushroomElem.setAttribute('geometry', 'primitive:cylinder; radius:0.08; height:0.02;');
        mushroomElem.setAttribute('material', 'color:#dbccca;');

        //random position on cheese/pizza area
        mushroomElem.setAttribute('position', {x:Math.random() * (0.48 + 0.48) - 0.48, y: 0.027 + (counter * 0.011), z:Math.random() * (0.48 + 0.48) - 0.48});

        //random scale
        const randScale = 0.8 + (Math.random() * 0.3);
        mushroomElem.setAttribute('scale', {x:randScale, y:randScale, z:randScale});

        //can be deleted and plays sound on click
        mushroomElem.setAttribute('delete-topping-component', "");

        //mushroom end
        let mushroomEndElem = document.createElement('a-entity');
        mushroomEndElem.setAttribute('class', 'topping mushroom');
        mushroomEndElem.setAttribute('geometry', 'primitive:box; width:0.1; height:0.02; depth:0.05');
        mushroomEndElem.setAttribute('material', 'color:#dbccca;');
        mushroomEndElem.setAttribute('position', {x:0, y: 0, z: -0.08});

        //attach mushroom end to mushroom
        mushroomElem.append(mushroomEndElem);

        //rotate the full mushroom randomly
        mushroomElem.setAttribute('rotation', {x:0, y: Math.random() * 360.0, z:0});

        //attach to scene
        let scene = document.querySelector('a-scene').querySelector('#pizza');;
        scene.appendChild(mushroomElem);
    },

    //custom function for adding black olives onto the pizza
    createOlive: function(counter) {
        const Context_AF = this; //be careful of "this"!

        //create an html element that makes the green pepper
        let oliveElem = document.createElement('a-entity'); //create element by code
        oliveElem.setAttribute('class', 'clickable topping olive');
        oliveElem.setAttribute('geometry', 'primitive:sphere; radius:0.035;');
        oliveElem.setAttribute('material', 'color:#3b3c36;'); //set material/texture

        //random position on cheese/pizza area
        oliveElem.setAttribute('position', {x:Math.random() * (0.48 + 0.48) - 0.48, y: 0.027 + (counter * 0.011), z:Math.random() * (0.48 + 0.48) - 0.48});

        //random scale
        const randScale = 0.8 + (Math.random() * 0.3);
        oliveElem.setAttribute('scale', {x:randScale, y:randScale, z:randScale});

        //can be deleted and plays sound on click
        oliveElem.setAttribute('delete-topping-component', "");

        //attach to scene
        let scene = document.querySelector('a-scene').querySelector('#pizza');;
        scene.appendChild(oliveElem);
    },

   //reset and create a new pizza by removing all the previous toppings
   createNew: function() {
        const Context_AF = this;
        const pizza = document.getElementById("pizza");

        //delete all the elements with class "topping"
        Context_AF.el.parentNode.querySelectorAll(".topping").forEach(function(a){
            a.remove()
        });

        pizza.setAttribute('material', 'color: #bf8d3c; roughness:0.8');
    }
});
