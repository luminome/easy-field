import easyField from './easy-field'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `preview html`;
easyField(document.querySelector<HTMLDivElement>('#field')!);