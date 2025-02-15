import '../../css/main.css'

import '../../css/components/block_master_info/block_master_info.css';

import '../../css/components/block_register/block_register.css'

import './detailed/detailed.js'

import { Calendar, Options } from 'vanilla-calendar-pro';


const popupCancel = document.getElementById('popup_cancel');
const popupCancelNext = document.getElementById('popup_cancel_next');
const popupCancelContent = document.getElementsByClassName('popup_cancel_content');
const popupCancelBackdrop = document.getElementById('popup_cancel_backdrop');
const popupCancelCloseModal = document.getElementsByClassName('popup_cancel_close_modal');

let indexSelectPopupCancel =  0;

const master_record = document.getElementById('master_record');

const buttons_cancel = master_record.getElementsByTagName('button');

const options = {
    layouts: {
        default: `
          <div class="vc-header" data-vc="header" role="toolbar" aria-label="Calendar Navigation">
            <div class="vc-header__content"  style="justify-content: start !important;" data-vc-header="content">
             <#Month />
            </div>
            <#ArrowPrev />
            <#ArrowNext />
          </div>
          <div class="vc-wrapper" data-vc="wrapper">
            <#WeekNumbers />
            <div class="vc-content" data-vc="content">
              <#Week />
              <#Dates />
              <#DateRangeTooltip />
            </div>
          </div>
          <#ControlTime />
        `,
      },
    locale: {
      months: {
        short: ['Vör', 'Thors', 'Skadi', 'Freya', 'Baldur', 'Njord', 'Tyr', 'Frigg', 'Odin', 'Loki', 'Hel', 'Idunn'],
        long: [
          'Январь',
          'Февраль',
          'Март',
          'Апрель',
          'Май',
          'Июнь',
          'Июль',
          'Frigmánuðr',
          'Odinmánuðr',
          'Lokimánuðr',
          'Helmánuðr',
          'Idunnmánuðr',
        ],
      },
      weekdays: {
        short: ['Sunna', 'Mani', 'Tiw', 'Woden', 'Thor', 'Frigg', 'Saturn'],
        long: ['Sunnandæg', 'Manadæg', 'Tiwesdæg', 'Wodensdæg', 'Thorsdæg', 'Friggsdæg', 'Saturnsdag'],
      },
    },
  };
  
//   const calendar = new Calendar('#calendar', options);
//   calendar.init();
  
for (let index = 0; index < buttons_cancel.length; index++) {
    buttons_cancel[index].addEventListener('click', onClickButtonCancel)
    
}

function onClickButtonCancel() {
    popupCancel.classList.add('block__register_popup_active')

    popupCancelContent[indexSelectPopupCancel].classList.add('block__register_popup_content_active');

    popupCancelCloseModal[indexSelectPopupCancel].addEventListener('click',onClickButtonCloseCancel);
    popupCancelNext.addEventListener('click', onClickButtonCloseCancelNext);
    popupCancelBackdrop.addEventListener('click',onClickButtonCloseCancel);

}

function onClickButtonCloseCancelNext () {   
    popupCancelCloseModal[indexSelectPopupCancel].removeEventListener('click',onClickButtonCloseCancel);
    popupCancelContent[indexSelectPopupCancel].classList.remove('block__register_popup_content_active');
    indexSelectPopupCancel += 1;
    
    popupCancelCloseModal[indexSelectPopupCancel].addEventListener('click', onClickButtonCloseCancelModal);
    popupCancelContent[indexSelectPopupCancel].classList.add('block__register_popup_content_active');
}

function onClickButtonCloseCancelModal () {
    popupCancel.classList.remove('block__register_popup_active')
    
    popupCancelContent[indexSelectPopupCancel].classList.remove('block__register_popup_content_active');
    indexSelectPopupCancel = 0;
    popupCancelCloseModal[indexSelectPopupCancel].removeEventListener('click', onClickButtonCloseCancelModal);
}

function onClickButtonCloseCancel() {
    popupCancel.classList.remove('block__register_popup_active')

    popupCancelContent[indexSelectPopupCancel].classList.remove('block__register_popup_content_active');
}

