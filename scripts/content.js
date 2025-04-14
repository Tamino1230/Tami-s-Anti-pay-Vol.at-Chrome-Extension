if (window.location.href.startsWith("https://www.vol.at/")) {
    console.log("%cURL matches: vol.at/", "color: green; font-weight: bold;");
} else {
    console.log("%cURL does not match.", "color: red; font-weight: bold;");
}

console.log("%cContent script loaded.", "color: blue; font-style: italic;");

const classesToRemove = ['vodl-paywall', 'vodl-interaction-bar__wrapper', 'vodl-region-article__interaction-bar'];

function removeElements() {
    let found = false;
    classesToRemove.forEach(className => {
        const elements = document.querySelectorAll(`.${className}`);
        if (elements.length > 0) {
            found = true;
            elements.forEach(element => element.remove());
            console.log(`%cRemoved elements with class: ${className}`, "color: orange; font-weight: bold;");
        }
    });
    return found;
}

const premiumClass = 'vodl-region-article__premium-content';
const contentClass = 'vodl-region-article__content-text';

function updateClass() {
    const elements = document.querySelectorAll(`.${premiumClass}`);
    if (elements.length > 0) {
        elements.forEach(element => {
            element.classList.replace(premiumClass, contentClass);
            console.log(`%cUpdated class: ${premiumClass} to ${contentClass}`, "color: purple; font-weight: bold;");
        });
        return true;
    }
    return false;
}

function addCustomText(targetClass, text) {
    const targetElements = document.querySelectorAll(`.${targetClass}`);
    if (targetElements.length > 0) {
        targetElements.forEach(targetElement => {
            const textNode = document.createElement('div');
            textNode.textContent = text;
            Object.assign(textNode.style, {
                color: 'red',
                fontSize: '20px',
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: '10px',
                padding: '10px',
                borderRadius: '5px'
            });
            targetElement.appendChild(textNode);
            console.log(`%cAdded custom text to elements with class: ${targetClass}`, "color: blue; font-weight: bold;");
        });
        return true;
    }
    return false;
}

function removeCommentBox() {
    const classList = [
        'absolute', 
        'inset-0', 
        'top-12', 
        'md:top-10', 
        'z-10', 
        'flex', 
        'justify-center', 
        'backdrop-blur-[3px]', 
        'bg-forum-background', 
        'bg-white/50', 
        'rounded-lg'
    ];
    let found = false;
    document.querySelectorAll('div').forEach(element => {
        if (classList.every(cls => element.classList.contains(cls))) {
            found = true;
            element.remove();
            console.log(`%cRemoved specific div with classes: ${classList.join(' ')}`, "color: red; font-weight: bold;");
        }
    });
    return found;
}

console.log("%cStarting modifications...", "color: green; font-weight: bold;");
if (updateClass()) {
    addCustomText('vodl-region-article__title-wrapper', "Paid version removed - Tami's Free Read (Vol.at) Extension");
    addCustomText('vodl-region-article__excerpt', "This Article is free to read! (Now at least 😏)");
} else {
    addCustomText('vodl-region-article__title-wrapper', "There was nothing to Edit - Tami's Free Read (Vol.at) Extension");
    addCustomText('vodl-region-article__excerpt', "This Article was alread free to read");
}
removeElements();

addCustomText("vodl-forum", "Comments now Visible without login (If not reload the Page. Could take multiple tries.)");


console.log("%cTry Comment box remove nr.1.", "color: orange; font-weight: bold;");
setTimeout(() => {
    removeCommentBox();
}, 3000);


console.log("%cModifications completed.", "color: green; font-weight: bold;");
