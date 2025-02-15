const button_detailed = document.getElementById('button_detailed');
const popupDetailed = document.getElementById('popup_detailed');
const popupDetailedContent = document.getElementById('popup_detailed_content');
const popupDetailedCloseModal = document.getElementById('popup_detailed_close_modal');
const popupDetailedBackdrop = document.getElementById('popup_detailed_backdrop');


function onClickButtonDetailed() {
    popupDetailed.classList.add('block__register_popup_active')

    popupDetailedContent.classList.add('block__register_popup_content_active');

    popupDetailedCloseModal.addEventListener('click',onClickButtonCloseDetailed);
    popupDetailedBackdrop.addEventListener('click',onClickButtonCloseDetailed);

}


function onClickButtonCloseDetailed() {
    popupDetailed.classList.remove('block__register_popup_active')
    popupDetailedCloseModal.removeEventListener('click',onClickButtonCloseDetailed);
    popupDetailedBackdrop.removeEventListener('click',onClickButtonDetailed);
    popupDetailedContent.classList.remove('block__register_popup_content_active');
}


button_detailed.addEventListener('click',onClickButtonDetailed);
