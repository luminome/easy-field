import easyField from './easy-field'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `preview html`;
const easy = easyField(document.querySelector<HTMLDivElement>('#field')!).init();
easy.test();