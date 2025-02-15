import '../../css/main.css'

import '../../css/components/block_master_info/block_master_info.css';

import '../../css/components/block_register/block_register.css'
// const master_record = document.getElementById('popup_detailed_record');
// const master_record_btn = document.getElementById('master_record_btn');

// const buttons_detailed = master_record.getElementsByClassName('popup_detailed_btn');
// const popupDetailed = document.getElementById('popup_detailed');
// const popupDetailedNext = document.getElementById('popup_cancel_next');
// const popupDetailedContent = document.getElementsByClassName('popup_detailed_record_content');
// const popupDetailedBackdrop = document.getElementById('popup_detailed_record_backdrop');
// const popupDetailedCloseModal = document.getElementsByClassName('popup_detailed_record_close_modal');
// let indexSelectPopupRecord =  0;
  

// master_record_btn.addEventListener('click', onClickButtonCancel)

// for (let index = 0; index < buttons_detailed.length; index++) {
//   buttons_detailed[index].addEventListener('click', onClickButtonCancel)
// }

// const stages_record = document.getElementsByClassName('stage_record');
// const buttons_next_stage_record = document.getElementsByClassName('button_next_stage_record');

// let indexStagerRegister = 0;


// buttons_next_stage_record[indexStagerRegister].addEventListener('click',onClickNextStageRegister)
// function onClickNextStageRegister() {
//     if(buttons_next_stage_record.length > indexStagerRegister + 1)
//     {
//         buttons_next_stage_record[indexStagerRegister].removeEventListener('click',onClickNextStageRegister)
//         stages_record[indexStagerRegister].classList.add('hidden');
//         indexStagerRegister += 1;

        
//             stages_record[indexStagerRegister].classList.remove('hidden');

        

//         if(buttons_next_stage_record[indexStagerRegister] !== undefined) {
            
//             buttons_next_stage_record[indexStagerRegister].addEventListener('click',onClickNextStageRegister)
//         }
//     }
// }



// function onClickButtonCancel() {
//   console.log('jdfkdfjk');
  
//     popupDetailed.classList.add('block__register_popup_active')

//     popupDetailedContent[indexSelectPopupRecord].classList.add('block__register_popup_content_active');

//     popupDetailedCloseModal[indexSelectPopupRecord].addEventListener('click',onClickButtonCloseCancel);
//     popupDetailedNext.addEventListener('click', onClickButtonCloseCancelNext);
//     popupDetailedBackdrop.addEventListener('click',onClickButtonCloseCancel);

// }

// function onClickButtonCloseCancelNext () {   
//     popupDetailedCloseModal[indexSelectPopupRecord].removeEventListener('click',onClickButtonCloseCancel);
//     popupDetailedContent[indexSelectPopupRecord].classList.remove('block__register_popup_content_active');
//     indexSelectPopupRecord += 1;
    
//     popupDetailedCloseModal[indexSelectPopupRecord].addEventListener('click', onClickButtonCloseCancelModal);
//     popupDetailedContent[indexSelectPopupRecord].classList.add('block__register_popup_content_active');
// }

// function onClickButtonCloseCancelModal () {
//     popupDetailed.classList.remove('block__register_popup_active')
    
//     popupDetailedContent[indexSelectPopupRecord].classList.remove('block__register_popup_content_active');
//     indexSelectPopupRecord = 0;
//     popupDetailedCloseModal[indexSelectPopupRecord].removeEventListener('click', onClickButtonCloseCancelModal);
// }

// function onClickButtonCloseCancel() {
//     popupDetailed.classList.remove('block__register_popup_active')

//     popupDetailedContent[indexSelectPopupRecord].classList.remove('block__register_popup_content_active');
// }

