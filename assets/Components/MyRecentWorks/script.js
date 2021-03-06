import CardEvents from './CardEvents.js';
import PopupWork from './JobViewer/script.js';

CardEvents.elementWorks.forEach(elementWork => {

    const triggersBoxPosition = elementWork.children.length - 1;
    const triggerPopUpCard = elementWork
                                .children[triggersBoxPosition]
                                .children[1]
                                .children[0];

    
    triggerPopUpCard.addEventListener('click', PopupWork);
});

window.addEventListener('load', CardEvents.handleCardSize);
window.addEventListener('resize', CardEvents.handleCardSize);

