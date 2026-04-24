// #region *** DOM references                           ***********
const _principleCards = document.querySelectorAll('.c-card-principle');
// #endregion

// #region *** Callback-Visualisation - show___         ***********
const showPrincipleAlert = (id) => {
    const messages = {
        "1": "Houd de cliënt dichtbij! Hoe groter de afstand, hoe zwaarder de last voor je rug.",
        "3": "Lumbale vergrendeling: Span je buikspieren aan om je 'pneumatisch korset' te activeren.",
        "6": "Gebruik altijd een tillift of hoog-laag bed als dat beschikbaar is!"
    };
    
    if (messages[id]) {
        console.log(`Instructie voor principe ${id}: ${messages[id]}`);
    }
};
// #endregion

// #region *** Callback-No Visualisation - callback___  ***********
const callbackCardClick = (event) => {
    const card = event.currentTarget;
    const id = card.getAttribute('data-region') || card.dataset.principle;
    showPrincipleAlert(id);
};
// #endregion

// #region *** Data Access - get___                     ***********
// #endregion

// #region *** Event Listeners - listenTo___            ***********
const listenToInteractions = () => {
    _principleCards.forEach(card => {
        card.addEventListener('click', callbackCardClick);
    });
};
// #endregion

// #region *** Init / DOMContentLoaded                  ***********
const init = () => {
    console.log('HBT Applicatie succesvol geladen.');
    listenToInteractions();
};

document.addEventListener('DOMContentLoaded', init);
// #endregion