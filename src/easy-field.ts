import './easy-field.css'
// import path from 'path'

///<reference path="./custom.d.ts" />
// import n_svg from './site-icon.svg'


// const loadSvg = async (url: string) => {
//     return fetch(url)
//     .then(function (response) {
//     console.log(response);
//     return response.text();
//     })
//     .then(function (raw) {
//     return new window.DOMParser().parseFromString(raw, "image/svg+xml");
//     });
// };

//<svg viewBox="0 0 256 256"><?xml version="1.0" encoding="utf-8"?>


const ctrl_icons = `
<svg viewBox="0 0 256 256">
	<g id="mask">
		<rect class="st0" x="16" y="16" width="224" height="224"/>
	</g>
	<g id="border">
		<path d="M224,8H32C18.7,8,8,18.7,8,32v192c0,13.3,10.7,24,24,24h192c13.3,0,24-10.7,24-24V32C248,18.7,237.3,8,224,8z M224,232H32
			c-4.4,0-8-3.6-8-8V32c0-4.4,3.6-8,8-8h192c4.4,0,8,3.6,8,8v192C232,228.4,228.4,232,224,232z"/>
	</g>
	<g id="input">
		<g>
			<path d="M185,122.5l-49.7-24.7c-2.2-1.1-4.7-1.8-7.3-1.8s-5.1,0.6-7.3,1.8L71,122.5c-7.9,4-11,13.7-7,21.5c4,7.9,13.7,11,21.5,7
				l26.5-13.2V192c0,8.8,7.2,16,16,16s16-7.2,16-16v-54.2l26.5,13.2c7.9,4,17.5,0.9,21.5-7C196,136.1,192.9,126.5,185,122.5z"/>
			<path d="M192,48H64c-8.8,0-16,7.2-16,16s7.2,16,16,16h128c8.8,0,16-7.2,16-16S200.8,48,192,48z"/>
		</g>
	</g>
	<g id="output">
		<g>
			<path d="M71,133.5l49.7,24.7c2.2,1.1,4.7,1.8,7.3,1.8s5.1-0.6,7.3-1.8l49.7-24.7c7.9-4,11-13.7,7-21.5c-4-7.9-13.7-11-21.5-7
				L144,118.2V64c0-8.8-7.2-16-16-16s-16,7.2-16,16v54.2L85.5,105c-7.9-4-17.5-0.9-21.5,7C60,119.9,63.1,129.5,71,133.5z"/>
			<path d="M64,208h128c8.8,0,16-7.2,16-16s-7.2-16-16-16H64c-8.8,0-16,7.2-16,16S55.2,208,64,208z"/>
		</g>
	</g>
	<g id="clear">
		<path d="M184.6,161.9L94.1,71.4c-6.2-6.2-16.4-6.2-22.6,0s-6.2,16.4,0,22.6l90.5,90.5c6.2,6.2,16.4,6.2,22.6,0
			S190.8,168.2,184.6,161.9z"/>
		<path d="M94.1,184.6l90.5-90.5c6.2-6.2,6.2-16.4,0-22.6s-16.4-6.2-22.6,0l-90.5,90.5c-6.2,6.2-6.2,16.4,0,22.6
			S87.8,190.8,94.1,184.6z"/>
	</g>
</svg>
`;

const default_options = {
    num_lines: 10,
    max_lines: 20,
    line_height: 16,
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
    init: Function;
    test: Function;
}

const check_line = (ez:easyField) => Math.min(ez.max_lines!, ez.num_lines!);



/*
export function eztext(dom_node){

    

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

const easyFieldObject = (element: HTMLDivElement) => {

    const ctrl = {
        globalCss: document.querySelector(":root") as HTMLElement,
        openstate: false,
        widths: ['10px','48px'],
        
        icon_click: (evt:Event) => {
            evt.preventDefault();
            evt.stopPropagation();
            console.log((evt.currentTarget as HTMLElement).id);
        },

        make_icons: (source:Element) =>{
            // ['input','output','clear'].map()
            console.log(typeof source, source);


        },

        load_icons: () => {

            const src = document.createElement('div');
            src.innerHTML = ctrl_icons;
            // document.body.appendChild(src);
            

            src && ['input','output','clear'].map((label:string) => {
                const icon = document.createElement('div');
                icon.classList.add('svg-button');
                icon.innerHTML = `<svg viewBox="0 0 256 256"></svg>`;

                ['mask','border',label].forEach((part:string, i:number) => {
                    const chk = (src.querySelector(`#${part}`) as Element).cloneNode(true) as Element;
                    chk.removeAttribute('id');
                    part === 'mask' && (chk.setAttribute('id',label));
                    chk.setAttribute('class',`icon-${i === 2 ? 'icon': part}`);

                    chk.addEventListener('mouseup', ctrl.icon_click);
                    icon.firstChild?.appendChild(chk);

                    
                })

                document.body.appendChild(icon);
                E.dom_control?.appendChild(icon);
            })

            // console.log(typeof svg_source, svg_source);
        },

        set: () => {
            ctrl.load_icons();
            // make_icons();
            // const globalCss: HTMLElement | null = document.querySelector(":root") as HTMLElement;
            // globalCss.style.setProperty('--ctrl-width', '100px');

        },

        toggle: (_:Event) => {
            ctrl.openstate = !ctrl.openstate;
            console.log(ctrl.openstate);
            ctrl.globalCss.style.setProperty('--ctrl-width', ctrl.widths[+ctrl.openstate]);
        }
    }

    const check_clear_select = (_:Event) => {
        E.selected_text = null;
    }

    const check_select = (_:Event) => { //keydown
        let { value, selectionStart, selectionEnd } = E.dom_field!;
        E.selected_text = value.slice(selectionStart, selectionEnd);

        console.log(E.selected_text);
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
            resize();
        }
    }

    const l_n = (i:number) => {
        return {
            i:i,
            dom: document.createElement('div')
        }
    }

    const resize = ():void => {
        const ht = check_line(E) * E.line_height! + 'px';

        [E.dom_control, E.dom_numbers, E.dom_field, E.dom_node].map((el:any) => el && (el.style.height = ht))

        for(let i = 0; i < E.num_lines!; i++){
            if(E.line_numbers.list[i] === undefined){
                const l = l_n(i);
                const pre_text = `${i}`.padStart(2, '0')
                l.i = i;
                l.dom.textContent = pre_text;
                E.line_numbers.list.push(i);
                E.dom_numbers?.appendChild(l.dom);
            }
        }

        E.line_numbers.list = E.line_numbers.list.slice(0, E.num_lines!);
    }

    const test = () => {
        const chk = check_line(E);
        console.log('test easyField', E, chk);
    }

    const init = (options:object = {}) => {

        Object.assign(default_options, options);
        Object.assign(E, default_options);


        E.dom_field = document.createElement('textarea');
        E.dom_field.classList.add('ez_field');
        E.dom_field.style.lineHeight = `${E.line_height}px`;
        E.dom_field.setAttribute('placeholder','eztext\ntesting');
        E.dom_field.setAttribute('rows','2');

        E.dom_control = document.createElement('div');
        E.dom_control.classList.add('ez_control');
        E.dom_control.addEventListener('mouseup', ctrl.toggle);
        E.dom_control.innerHTML = '<div class="handle"></div><div class="handle-break"></div>';

        E.dom_numbers = document.createElement('div');
        E.dom_numbers.classList.add('ez_numbers');
        E.dom_numbers.style.lineHeight = `${E.line_height}px`;

        E.dom_node?.appendChild(E.dom_numbers);
        E.dom_node?.appendChild(E.dom_field);
        E.dom_node?.appendChild(E.dom_control);
        

        // E.dom_field.addEventListener('keyup', E.delta);
        E.dom_field.addEventListener('mouseup', check_clear_select);
        E.dom_field.addEventListener('select', check_select);
        E.dom_field.addEventListener('keydown', check_key);
        E.dom_field.addEventListener('scroll', () => {
            E.dom_numbers?.scrollTo(0, Number(E.dom_field?.scrollTop));
        });

        E.dom_node?.classList.add('ez_dom');
        E.dom_node && (E.dom_node.style.height = (E.line_height!*E.num_lines!)+'px');

        resize();

        ctrl.set();

        return E;
    }


    const E:easyField = {
        line_numbers: {list:[]},
        // num_lines: null,
        // max_lines: null,
        // line_height: null,

        dom_node: element,
        // dom_field: null,
        // dom_numbers: null,
        test: test,
        init: init,
        // field: null,
        // numbers: null,
        // set_text,
        // get_text,
        // init,
        // delta,
        // check_key,
        // resize
    }

    return E;

}

export {easyFieldObject as default};
