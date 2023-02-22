// https://regex101.com/

function onPageLoad() {
    textAreaEventListener();
}

function textAreaEventListener() {
    const element = document.querySelector('textarea');
    element.addEventListener('keyup', handleOnKeyDown)
}

function handleOnKeyDown() {

    const censorInput = getCensoredText();
    const showCensorText = document.querySelector('.showCensorText');
    
    showCensorText.textContent = censorInput;
}

function getCensoredText() {
    const element = document.querySelector('textarea');
    const userInput = element.value;
    const censoredMessage = userInput.replaceAll(/v[o0]ld[e3]m[o0]rt/ig, "he who must not be named");
    return censoredMessage;
}

window.onload = onPageLoad;