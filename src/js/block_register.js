import './../css/components/block_register/block_register.css'

import Picker   from 'pickerjs';
const aliasHour = []

const buttonRegister = document.getElementById('button_register');
const popupRegister = document.getElementById('popup_register');
const popupRegisterContent = document.getElementById('popup_register_content');
const popupRegisterCloseModal = document.getElementById('popup_register_close_modal');
const popupRegisterBackdrop = document.getElementById('popup_register_backdrop');


function onClickButtonRegister() {
    // popupRegister.classList.remove('z-[-100]')
    popupRegister.classList.add('block__register_popup_active')

    popupRegisterContent.classList.add('block__register_popup_content_active');

    popupRegisterCloseModal.addEventListener('click',onClickButtonCloseRegister);
    popupRegisterBackdrop.addEventListener('click',onClickButtonCloseRegister);

}


function onClickButtonCloseRegister() {
    // popupRegister.classList.remove('z-[-100]')
    popupRegister.classList.remove('block__register_popup_active')

    popupRegisterContent.classList.remove('block__register_popup_content_active');
}


buttonRegister.addEventListener('click',onClickButtonRegister);


// function createAliasesHour () {
    

//     for (let i = 0; i < 24; i++) {
//         for (let j = 0; j < 60; j++) {
//             aliasHour[i + j] = `${i}:${j}`

//             // console.log(aliasHour[i + j]);
            
//         }
//     }

    
    
// }



// createAliasesHour()
// const picker = new Picker(document.querySelector('.js-inline-picker'), {
//     // container: true,s

//     date: new Date('00:00','00:00'),
//     text: {
//     title: 'Pick a date and time',
//     cancel: 'Cancel',
//     confirm: 'OK',
//     year: 'dfdfd',
//     month: 'dfdf',
//     day: 'dfdf',
//     hour: 'dfdf',
//     minute: 'dfdfd',
//     second: 'dfdfd',
//     millisecond: 'dfdf',
//     },


    
//     // months: [],

//     // console.log(text);
//   });

// picker.formatDate(DateUtils.setSeconds(DateUtils.setMinutes(DateUtils.setHours(new Date(),0),0),0)  );


