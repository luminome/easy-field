import './easy-field.css'
import button, { re_button } from './button-client'

const default_options = {
    initial_lines: 10,
    min_lines: 2,
    num_lines: 10,
    max_lines: 20,
    lines_showing: 10,
    line_height: 16,
    maximized: true,
    drawer_open: false
}

type easyField = {
    line_numbers: {list:number[]};
    num_lines?: number | null;
    max_lines?: number | null;
    line_height?: number | null;
    selected_text?: string | null;
    dom_node: HTMLDivElement;
    dom_control?: HTMLDivElement;
    dom_numbers?: HTMLDivElement;
    dom_field?: HTMLTextAreaElement;
    options: any;
    init: Function;
    test: Function;
    log: Function;
    input_callback?: Function;
}

const check_line = (ez:easyField) => Math.min(ez.max_lines!, ez.num_lines!);



/*
export function eztext(dom_node){

    
var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  alert("The value of --blue is: " + rs.getPropertyValue('--blue'));



    function set_text(txt){
        const n = `${txt}`.split('\n').length;
        ez.field.value = txt;
        ez.num_lines = n;
        ez.resize();
    }

    function get_text(){
        return ez.field.value;
    }

    function delta(evt){ //keyup
        evt.preventDefault(); // prevent usual browser behaviour
        const n = `${evt.target.value}`.split('\n').length;
        if(n !== ez.num_lines){
            ez.num_lines = n;
            ez.resize();
        }
    }

    function check_key(evt) { //keydown
        //# delete is 8
        //# return is 13
        //# tab is 9
        //#// this is black magic https://stackoverflow.com/questions/6637341/use-tab-to-indent-in-textarea
        if (evt.keyCode === 9) {
            evt.preventDefault(); // prevent usual browser behaviour
            let { value, selectionStart, selectionEnd } = ez.field;
            ez.field.value = value.slice(0, selectionStart) + "\t" + value.slice(selectionEnd);
            ez.field.setSelectionRange(selectionStart+2, selectionStart+2)
            console.log('tabbed');
        }

        if (evt.keyCode === 13) { // if the key code is 13 (ENTER)
            ez.num_lines ++;
            ez.resize();
        }
    }

    const l_n = (i) => {
        return {
            i:i,
            dom: document.createElement('div')
        }
    }

    function resize(){
        const ht = check_line(ez.num_lines) * ez.line_height + 'px';
        ez.numbers.style.height = ht;
        ez.field.style.height = ht;
        ez.dom_node.style.height = ht;

        for(let i = 0; i < ez.num_lines; i++){
            if(ez.line_numbers.list[i] === undefined){
                const l = l_n(i);
                const pre_text = `${i}`.padStart(2, '0')
                l.i = i;
                l.dom.textContent = pre_text;
                ez.line_numbers.list.push(i);
                ez.numbers.appendChild(l.dom);
            }
        }

        ez.line_numbers.list = ez.line_numbers.list.slice(0, ez.num_lines);
    }

    function init(){

        document.head.innerHTML += '<link rel="stylesheet" href="./css/eztext.css" type="text/css"/>';
        ez.dom_node.classList.add('ez_dom');

        ez.numbers = document.createElement('div');
        ez.numbers.classList.add('ez_numbers');
        ez.numbers.style.lineHeight = `${ez.line_height}px`;

        ez.field = document.createElement('textarea');
        ez.field.classList.add('ez_field');
        ez.field.setAttribute('placeholder','eztext');
        ez.field.setAttribute('rows','2');
        ez.field.style.lineHeight = `${ez.line_height}px`;

        ez.field.addEventListener('keyup', ez.delta);
        ez.field.addEventListener('keydown', ez.check_key);
        ez.field.addEventListener('scroll', function(){
            ez.numbers.scrollTo(0, this.scrollTop);
        });

        ez.dom_node.appendChild(ez.numbers);
        ez.dom_node.appendChild(ez.field);
        ez.resize();
        return ez;
    }

    const ez = {
        line_numbers: {list:[]},
        num_lines: 1,
        max_lines: 20,
        line_height: 16,
        dom_node: dom_node,
        field: null,
        numbers: null,
        set_text,
        get_text,
        init,
        delta,
        check_key,
        resize
    }

    return ez;
}
*/

/**
 * ez-field reprise edition.
 * @param element is the target div.
 */



const easyFieldObject = (element: HTMLDivElement, callback:Function = (el:string)=>{console.log(el)}) => {

    const ctrl = {
        globalCss: document.querySelector(":root") as HTMLElement,
        openstate: false,
        widths: ['10px','48px'],
        
        icon_click: (evt:Event, b:any = null) => {
            evt.preventDefault();
            evt.stopPropagation();
            b && b.label === 'clear' && clear_text();
            b && b.label === 'collapse-expand' && min_or_max(b.states.toggle);
            b && b.label === 'input' && input_selection();
            b && b.label === 'plus-minus' && line_count_set(b.preselect);
        },

        set: () => {
            const buttons = E.dom_control?.querySelector('.buttons');

            const rec:re_button = button('multi', 'collapse-expand', {}, ctrl.icon_click).init();
            const btn_rec = (rec.button as HTMLButtonElement);
            rec.set_state(!ctrl.openstate);

            btn_rec.classList.add('invert');
            buttons && buttons.appendChild(btn_rec);

            ['clear','input'].map((label:string) => {
                const re:re_button = button('basic', label, {}, ctrl.icon_click).init();
                const btn = (re.button as HTMLButtonElement);
                btn.classList.add('invert');
                buttons && buttons.appendChild(btn);
            });

            const re:re_button = button('split', 'plus-minus', {incremental:true}, ctrl.icon_click).init();
            const btn = (re.button as HTMLButtonElement);
            btn.classList.add('invert');
            buttons && buttons.appendChild(btn);

            var rs = getComputedStyle(ctrl.globalCss);
            const icon_size = rs.getPropertyValue('--btn-size');
            const icon_marg = rs.getPropertyValue('--btn-marg');
            ctrl.widths[1] = (parseInt(ctrl.widths[0])+parseInt(icon_size)+(2*parseInt(icon_marg)))+'px';

        },

        toggle: () => {
            ctrl.openstate = !ctrl.openstate;
            console.log('ctrl.openstate', ctrl.openstate);
            ctrl.globalCss.style.setProperty('--ctrl-width', ctrl.widths[+ctrl.openstate]);
        }
    }

    const clear_text = () => {
        E.dom_field && (E.dom_field.value = '');
        E.num_lines = 0;//default_options.initial_lines;
        log.log_total_lines = 0;
        // resize();
    }

    const input_selection = ():void => {
        if(E.selected_text){
            log.log(`"${E.selected_text}" has been input.`);
            E.input_callback && E.input_callback(E.selected_text);
        }else{
            E.log(`input undefined, please make a selection.`);
        }
    }

    const min_or_max = (v:boolean) => {
        const ht = v ? E.options.min_lines : E.options.initial_lines;
        resize(ht);
    }

    const line_count_set = (v:boolean) => {
        const new_line_count = E.options.lines_showing + [-1,1][+v];
        if(new_line_count >= E.options.min_lines && new_line_count <= E.options.max_lines){
            // E.num_lines! = new_line_count;
            E.options.lines_showing = new_line_count;
            E.options.initial_lines = new_line_count;
            update_lines();
            resize(new_line_count);
        }
    }

    const check_clear_select = (_:Event) => {
        E.selected_text = null;
    }

    const check_select = (_:Event) => { //keydown
        let { value, selectionStart, selectionEnd } = E.dom_field!;
        E.selected_text = value.slice(selectionStart, selectionEnd);
    }

    const check_key = (evt:KeyboardEvent) => { //keydown
        // console.log(evt.code);
        //# delete is 8
        //# return is 13
        //# tab is 9
        //#// this is black magic https://stackoverflow.com/questions/6637341/use-tab-to-indent-in-textarea
        if (evt.code === 'Tab') {
            evt.preventDefault(); // prevent usual browser behaviour
            let { value, selectionStart, selectionEnd } = E.dom_field!;
            E.dom_field && (E.dom_field.value = value.slice(0, selectionStart) + "\t" + value.slice(selectionEnd));
        }

        if (evt.code === 'Enter') { // if the key code is 13 (ENTER)
            E.num_lines! ++;
            // resize();
            update_lines();
        }
    }

    const l_n = (i:number) => {
        return {
            i:i,
            dom: document.createElement('div')
        }
    }

    const resize = (val:number):void => {
        const ht = val * E.options.line_height! + 'px';
        [E.dom_control, E.dom_numbers, E.dom_field, E.dom_node].map((el:any) => el && (el.style.height = ht));
    }

    const update_lines = ():void => {
        const lct = Math.max(E.num_lines!,E.options.lines_showing);

        for(let i = 0; i < lct; i++){
            if(E.line_numbers.list[i] === undefined){
                const l = l_n(i);
                const pre_text = `${i}`.padStart(2, '0')
                l.i = i;
                l.dom.textContent = pre_text;
                E.line_numbers.list.push(i);
                E.dom_numbers?.appendChild(l.dom);
            }
        }

        // E.line_numbers.list = E.line_numbers.list.slice(0, lct);
    }

    const log = {
        log_total_lines: 0,
        log:(...content: string[]) => {
            log.log_total_lines += content.length;

            if(E.dom_field){
               E.dom_field.value = content.join('\n') + '\n' + E.dom_field.value;
               E.num_lines! = log.log_total_lines;

               E.num_lines > E.options.initial_lines && update_lines();
            }
            
        }
    }

    const test = () => {
        const chk = check_line(E);
        console.log('test easyField', E, chk);
    }

    const init = (options:object = {}) => {

        Object.assign(E.options!, options);

        console.log(E.options);

        E.dom_field = document.createElement('textarea');
        E.dom_field.classList.add('ez_field');
        E.dom_field.style.lineHeight = `${E.options.line_height}px`;
        E.dom_field.setAttribute('placeholder','welcome to easy-field.');
        E.dom_field.setAttribute('rows','2');

        E.dom_control = document.createElement('div');
        E.dom_control.classList.add('ez_control');
        E.dom_control.addEventListener('mouseup', ctrl.toggle);
        E.dom_control.innerHTML = '<div class="handle"></div><div class="handle-break"></div><div class="buttons"></div>';

        E.dom_numbers = document.createElement('div');
        E.dom_numbers.classList.add('ez_numbers');
        E.dom_numbers.style.lineHeight = `${E.options.line_height}px`;

        E.dom_node?.appendChild(E.dom_numbers);
        E.dom_node?.appendChild(E.dom_field);
        E.dom_node?.appendChild(E.dom_control);
        
        E.dom_field.addEventListener('mouseup', check_clear_select);
        E.dom_field.addEventListener('select', check_select);
        E.dom_field.addEventListener('keydown', check_key);
        E.dom_field.addEventListener('scroll', () => {
            E.dom_numbers?.scrollTo(0, Number(E.dom_field?.scrollTop));
        });

        E.dom_node?.classList.add('ez_dom');
        E.dom_node && (E.dom_node.style.height = (E.options.line_height*E.num_lines!)+'px');

        resize(E.options.initial_lines);
        update_lines();
        min_or_max(!E.options.maximized);

        ctrl.openstate = !E.options.drawer_open;
        ctrl.set();
        ctrl.toggle();

        return E;
    }

    const E:easyField = {
        line_numbers: {list:[]},
        options: default_options,
        dom_node: element,
        num_lines: default_options.num_lines || 10,
        test: test,
        init: init,
        log: log.log,
        input_callback: callback
    }

    return E;

}

export {easyFieldObject as default};
