import './easy-field.css';
import './button-client.css';

import easyField from './easy-field'
import button, {re_button} from './button-client';

const easy = easyField(document.querySelector<HTMLDivElement>('#field')!).init();
easy.test();



const test_field_bkgnd = document.querySelector<HTMLDivElement>('#test');
// test_field_bkgnd?.classList.add('invert');


[test_field_bkgnd, document.body].map((src:any) => {
    ['collapse-expand','on-off','plus-minus'].map((b:string) => {
        const btn = button('split', b, {toggles:true, rotate:true}).init();
        src.id === 'test' && btn.button?.classList.add('invert');
        // btn.icon?.setAttribute('transform', "rotate(-90 0 0)");
        src?.appendChild(btn.button as HTMLButtonElement);
    });
    
    ['io','collapse-expand','clear','plus'].map((b:string) => {
        const btn = button('multi', b, {}).init();
        src.id === 'test' && btn.button?.classList.add('invert');
        // btn.button?.classList.add('rotate');
        // btn.icon?.setAttribute('transform', "rotate(-90 0 0)");
        src?.appendChild(btn.button as HTMLButtonElement);
    });
    
    ['input','output','clear','plus','minus'].map((b:string) => {
        const btn = button('basic', b).init();
        src.id === 'test' && btn.button?.classList.add('invert');
        // btn.button?.classList.add('rotate');
        // btn.icon?.setAttribute('transform', "rotate(-90 0 0)");
        src?.appendChild(btn.button as HTMLButtonElement);
    });
})







    // re.set_state(n.data.children.length);