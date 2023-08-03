/**
 * this is more basic. client-side.
 */
import './button-client.css';


const ctrl_icons_default_states:any = {
    basic: {},
    split:{
        "collapse-expand":0,
        "on-off":1,
    },
    multi:{
        "collapse-expand":1,
        "plus":0,
        "clear":0,
        "io":0,
    }
}

const basic_ctrl_icons = {labels:['input','output','clear','plus','minus'], data:`
<svg id="basic" viewBox="0 0 256 256">
    <g id="mask">
        <rect x="16" y="16" class="st0" width="224" height="224"/>
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
        <path d="M150.6,128l33.9-33.9c6.2-6.2,6.2-16.4,0-22.6c-6.2-6.2-16.4-6.2-22.6,0L128,105.4L94.1,71.4c-6.2-6.2-16.4-6.2-22.6,0
            c-6.2,6.2-6.2,16.4,0,22.6l33.9,33.9l-33.9,33.9c-6.2,6.2-6.2,16.4,0,22.6c6.2,6.2,16.4,6.2,22.6,0l33.9-33.9l33.9,33.9
            c6.2,6.2,16.4,6.2,22.6,0c6.2-6.2,6.2-16.4,0-22.6L150.6,128z"/>
    </g>
    <g id="plus">
        <path d="M192,112h-48V64c0-8.8-7.2-16-16-16s-16,7.2-16,16v48H64c-8.8,0-16,7.2-16,16s7.2,16,16,16h48v48c0,8.8,7.2,16,16,16
            s16-7.2,16-16v-48h48c8.8,0,16-7.2,16-16S200.8,112,192,112z"/>
    </g>
    <g id="minus">
        <path d="M192,112H64c-8.8,0-16,7.2-16,16s7.2,16,16,16h128c8.8,0,16-7.2,16-16S200.8,112,192,112z"/>
    </g>
</svg>
`};

const split_ctrl_icons = {labels:['collapse-expand','on-off','plus-minus'], data:`
<svg id="split" viewBox="0 0 256 512">
    <g id="mask-1">
    <rect x="16" y="256" class="st0" width="224" height="240"/>
    </g>
    <g id="mask-0">
    <rect x="16" y="16" class="st0" width="224" height="240"/>
    </g>
    <g id="border">
    <path d="M224,8H32C18.7,8,8,18.7,8,32v448c0,13.3,10.7,24,24,24h192c13.3,0,24-10.7,24-24V32C248,18.7,237.3,8,224,8z M32,24h192
        c4.4,0,8,3.6,8,8v216H24V32C24,27.6,27.6,24,32,24z M224,488H32c-4.4,0-8-3.6-8-8V264h208v216C232,484.4,228.4,488,224,488z"/>
    </g>
    <g id="collapse-expand">
    <path d="M182.6,196.9c-2.7,6-9.9,8.7-15.9,5.9L140,190.7V220c0,6.6-5.4,12-12,12s-12-5.4-12-12v-29.3l-26.7,12.2
        c-6,2.7-13.1,0.1-15.9-5.9c-2.7-6-0.1-13.1,5.9-15.9l43.5-19.8c1.6-0.7,3.3-1.2,5.1-1.2s3.6,0.4,5.1,1.2l43.5,19.8
        C182.7,183.7,185.4,190.8,182.6,196.9z M79.3,91l43.5,19.8c1.6,0.7,3.3,1.2,5.1,1.2s3.6-0.4,5.1-1.2L176.7,91
        c6-2.7,8.7-9.9,5.9-15.9c-2.7-6-9.9-8.7-15.9-5.9L140,81.3V52c0-6.6-5.4-12-12-12s-12,5.4-12,12v29.3L89.3,69.2
        c-6-2.7-13.1-0.1-15.9,5.9C70.6,81.2,73.3,88.3,79.3,91z M192,124H64c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12h128
        c6.6,0,12-5.4,12-12C204,129.4,198.6,124,192,124z M73.4,435.1c2.7-6,9.9-8.7,15.9-5.9l26.7,12.2V412c0-6.6,5.4-12,12-12
        s12,5.4,12,12v29.3l26.7-12.2c6-2.7,13.1-0.1,15.9,5.9c2.7,6,0.1,13.1-5.9,15.9l-43.5,19.8c-1.6,0.7-3.3,1.2-5.1,1.2
        s-3.6-0.4-5.1-1.2L79.3,451C73.3,448.3,70.6,441.2,73.4,435.1z M176.7,301l-43.5-19.8c-1.6-0.7-3.3-1.2-5.1-1.2
        c-1.8,0-3.6,0.4-5.1,1.2L79.3,301c-6,2.7-8.7,9.9-5.9,15.9c2.7,6,9.9,8.7,15.9,5.9l26.7-12.2l0,29.3c0,6.6,5.4,12,12,12
        s12-5.4,12-12l0-29.3l26.7,12.2c6,2.7,13.1,0.1,15.9-5.9C185.4,310.8,182.7,303.7,176.7,301z M192,364H64c-6.6,0-12,5.4-12,12
        c0,6.6,5.4,12,12,12h128c6.6,0,12-5.4,12-12C204,369.4,198.6,364,192,364z"/>
    </g>
    <g id="plus-minus" class="no-toggle">
    <path d="M192,120h-48V72c0-8.8-7.2-16-16-16s-16,7.2-16,16v48H64c-8.8,0-16,7.2-16,16s7.2,16,16,16h48v48c0,8.8,7.2,16,16,16
        s16-7.2,16-16v-48h48c8.8,0,16-7.2,16-16S200.8,120,192,120z"/>
    <path d="M192,360H64c-8.8,0-16,7.2-16,16s7.2,16,16,16h128c8.8,0,16-7.2,16-16S200.8,360,192,360z"/>
    </g>
    <g id="on-off">
    <path d="M70.9,153.5v-35c0-13.3,10.2-22.4,24.4-22.4c14,0,24.4,9.1,24.4,22.4v35c0,13.3-10.2,22.4-24.4,22.4
        C81.2,175.9,70.9,166.9,70.9,153.5z M109.7,153.5v-35c0-7.5-5.8-12.4-14.4-12.4c-8.2,0-14.4,4.3-14.4,12.4v35
        c0,7.8,5.9,12.4,14.4,12.4C103.5,165.9,109.7,161.6,109.7,153.5z M136.3,174.8V97.2h9.9l28.9,55.9V97.2h10v77.5h-10l-28.8-55.9
        v55.9H136.3z M43.6,393.5v-35c0-13.3,10.2-22.4,24.4-22.4c14,0,24.4,9.1,24.4,22.4v35c0,13.3-10.2,22.4-24.4,22.4
        C53.9,415.9,43.6,406.9,43.6,393.5z M82.4,393.5v-35c0-7.5-5.8-12.4-14.4-12.4c-8.2,0-14.4,4.3-14.4,12.4v35
        c0,7.8,5.9,12.4,14.4,12.4C76.2,405.9,82.4,401.6,82.4,393.5z M109,414.8v-77.5h44.9v10.1H119v24.8h28.1v10H119v32.7H109z
        M167.5,414.8v-77.5h44.9v10.1h-34.9v24.8h28.1v10h-28.1v32.7H167.5z"/>
    </g>
</svg>
`};


const multistate_ctrl_icons = {labels:['io','collapse-expand','clear','plus'], data:`
<svg id="multi" viewBox="0 0 256 512">
    <g id="mask">
    <rect x="16" y="16" class="st0" width="224" height="224"/>
    </g>
    <g id="border">
    <path d="M224,8H32C18.7,8,8,18.7,8,32v192c0,13.3,10.7,24,24,24h192c13.3,0,24-10.7,24-24V32C248,18.7,237.3,8,224,8z M224,232H32
        c-4.4,0-8-3.6-8-8V32c0-4.4,3.6-8,8-8h192c4.4,0,8,3.6,8,8v192C232,228.4,228.4,232,224,232z"/>
    </g>
    <g id="io-1">
    <g>
        <path d="M185,122.5l-49.7-24.7c-2.2-1.1-4.7-1.8-7.3-1.8s-5.1,0.6-7.3,1.8L71,122.5c-7.9,4-11,13.7-7,21.5c4,7.9,13.7,11,21.5,7
            l26.5-13.2V192c0,8.8,7.2,16,16,16s16-7.2,16-16v-54.2l26.5,13.2c7.9,4,17.5,0.9,21.5-7C196,136.1,192.9,126.5,185,122.5z"/>
        <path d="M192,48H64c-8.8,0-16,7.2-16,16s7.2,16,16,16h128c8.8,0,16-7.2,16-16S200.8,48,192,48z"/>
    </g>
    </g>
    <g id="io-0">
    <g>
        <path d="M71,133.5l49.7,24.7c2.2,1.1,4.7,1.8,7.3,1.8s5.1-0.6,7.3-1.8l49.7-24.7c7.9-4,11-13.7,7-21.5c-4-7.9-13.7-11-21.5-7
            L144,118.2V64c0-8.8-7.2-16-16-16s-16,7.2-16,16v54.2L85.5,105c-7.9-4-17.5-0.9-21.5,7C60,119.9,63.1,129.5,71,133.5z"/>
        <path d="M64,208h128c8.8,0,16-7.2,16-16s-7.2-16-16-16H64c-8.8,0-16,7.2-16,16S55.2,208,64,208z"/>
    </g>
    </g>
    <g id="collapse-expand-0">
    <path d="M182.6,188.9c-2.7,6-9.9,8.7-15.9,5.9L140,182.7V212c0,6.6-5.4,12-12,12s-12-5.4-12-12v-29.3l-26.7,12.2
        c-6,2.7-13.1,0.1-15.9-5.9c-2.7-6-0.1-13.1,5.9-15.9l43.5-19.8c1.6-0.7,3.3-1.2,5.1-1.2s3.6,0.4,5.1,1.2l43.5,19.8
        C182.7,175.7,185.4,182.8,182.6,188.9z M79.3,83l43.5,19.8c1.6,0.7,3.3,1.2,5.1,1.2s3.6-0.4,5.1-1.2L176.7,83
        c6-2.7,8.7-9.9,5.9-15.9c-2.7-6-9.9-8.7-15.9-5.9L140,73.3V44c0-6.6-5.4-12-12-12s-12,5.4-12,12v29.3L89.3,61.2
        c-6-2.7-13.1-0.1-15.9,5.9C70.6,73.2,73.3,80.3,79.3,83z M192,116H64c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12h128
        c6.6,0,12-5.4,12-12C204,121.4,198.6,116,192,116z"/>
    </g>
    <g id="collapse-expand-1">
    <path d="M73.4,187.1c2.7-6,9.9-8.7,15.9-5.9l26.7,12.2V164c0-6.6,5.4-12,12-12s12,5.4,12,12v29.3l26.7-12.2
        c6-2.7,13.1-0.1,15.9,5.9c2.7,6,0.1,13.1-5.9,15.9l-43.5,19.8c-1.6,0.7-3.3,1.2-5.1,1.2s-3.6-0.4-5.1-1.2L79.3,203
        C73.3,200.3,70.6,193.2,73.4,187.1z M176.7,53l-43.5-19.8c-1.6-0.7-3.3-1.2-5.1-1.2c-1.8,0-3.6,0.4-5.1,1.2L79.3,53
        c-6,2.7-8.7,9.9-5.9,15.9c2.7,6,9.9,8.7,15.9,5.9L116,62.7l0,29.3c0,6.6,5.4,12,12,12s12-5.4,12-12l0-29.3l26.7,12.2
        c6,2.7,13.1,0.1,15.9-5.9C185.4,62.8,182.7,55.7,176.7,53z M192,116H64c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12h128
        c6.6,0,12-5.4,12-12C204,121.4,198.6,116,192,116z"/>
    </g>
    <g id="clear-0"></g>
    <g id="clear-1">
    <path d="M150.6,128l33.9-33.9c6.2-6.2,6.2-16.4,0-22.6c-6.2-6.2-16.4-6.2-22.6,0L128,105.4L94.1,71.4c-6.2-6.2-16.4-6.2-22.6,0
        c-6.2,6.2-6.2,16.4,0,22.6l33.9,33.9l-33.9,33.9c-6.2,6.2-6.2,16.4,0,22.6c6.2,6.2,16.4,6.2,22.6,0l33.9-33.9l33.9,33.9
        c6.2,6.2,16.4,6.2,22.6,0c6.2-6.2,6.2-16.4,0-22.6L150.6,128z"/>
    </g>
    <g id="plus-1">
    <path d="M192,112h-48V64c0-8.8-7.2-16-16-16s-16,7.2-16,16v48H64c-8.8,0-16,7.2-16,16s7.2,16,16,16h48v48c0,8.8,7.2,16,16,16
        s16-7.2,16-16v-48h48c8.8,0,16-7.2,16-16S200.8,112,192,112z"/>
    </g>
    <g id="plus-0">
        <path d="M192,112H64c-8.8,0-16,7.2-16,16s7.2,16,16,16h128c8.8,0,16-7.2,16-16S200.8,112,192,112z"/>
    </g>
</svg>
`};

const source:any = {
    basic:{content:basic_ctrl_icons.data, dom_loded:false},
    split:{content:split_ctrl_icons.data, dom_loded:false},
    multi:{content:multistate_ctrl_icons.data, dom_loded:false}
};

const mdoc = document;

export interface re_button {
    type: string;
    label?: string;
    initialized?: boolean | null;
    icon?: SVGSVGElement | null;
    button?: HTMLButtonElement | null;
    callback?: Function;
    toggles?: boolean;
    toggle_state?: boolean;
    active_state?: boolean;
    visible_state?: boolean;
    preselect?: boolean;
    set_state(state:any | null): void;
    init(): re_button;
}

const make_svg = (container:HTMLDivElement, btn:re_button):void => {

    container.innerHTML = `<svg viewBox="0 0 256 ${btn.type === 'split' ? 512 : 256}"></svg>`;
    const svg_src = mdoc.querySelector(`#${btn.type}`) as SVGSVGElement;

    if(btn.type === 'split'){
        const by_part_id = svg_src.querySelector(`#${btn.label!}`) as Element;
        btn.toggles = !by_part_id.classList.contains('no-toggle');
    }

    

    const iter_layers:any = {
        'basic': ['mask', 'border', btn.label!],
        'split': [['mask','mask-0', 0], ['mask','mask-1', 1], 'border', btn.label!],
        'multi': ['mask', 'border', [btn.label!,`${btn.label!}-0`,0], [btn.label!,`${btn.label!}-1`,1]],
    }

    iter_layers[btn.type].forEach((part:string | string[]) => {
        try {
            const [part_name, part_path, part_state] = Array.isArray(part) ? part : [part, part, null];
            const def_state = ctrl_icons_default_states[btn.type][part_name] || null;
            const chok = (svg_src.querySelector(`#${part_path}`) as Element).cloneNode(true) as Element;


            chok.removeAttribute('id');

            const icon_class = part_name === btn.label! ? ['icon-icon',`button-${btn.type}`] : [`icon-${part_name}`,`button-${btn.type}`];

            if(part_name.indexOf('mask') !== -1){
                const evt_label = part_state !== null ? `${btn.label!}-${part_state}` : btn.label!;
                chok.setAttribute('id', evt_label);
                part_state !== null && part_state === def_state && btn.toggles! && icon_class.push('icon-active');
            }
            
            if(btn.type === 'multi' && part_name === btn.label!){
                chok.setAttribute('id', part_path);

                part_state !== null && part_state === def_state && btn.toggles! && icon_class.push('icon-active-state');
            }

            // chok.setAttribute('class',`icon-${part_name === btn.label! ? 'icon' : label_class} button-${btn.type}`);
            chok.setAttribute('class', icon_class.join(' '));
            container.firstChild?.appendChild(chok);

        } catch (error) {
            console.log('misconfigured', error);
        }

    });


}

const populate_src = (type_string:string, data:string):void => {
    console.log('button-client populate_src', type_string);
    const el = mdoc.createElement('div');
    el.innerHTML = data.toString();
    el.style.display = 'none';
    mdoc.body.appendChild(el as HTMLDivElement);
    source[type_string].dom_loded = true;
}

const button = (type:string = 'basic', label:string = 'clear', callback:EventListener = (_:Event)=>{}):re_button => {

    const set_state = (force:any = null):void => {
        const toggle = () => {
            B.toggle_state = force !== null ? (force as boolean) : !B.toggle_state;
            const cla = B.type === 'multi' ? 'icon-active-state' : 'icon-active';
            [0,1].map((n:number) => B.icon?.querySelector(`#${B.label}-${n}`)?.classList.toggle(cla));
        }
        B.icon && B.toggles && toggle();
    }

    const pre_select = (evt:Event) => {
        const p_el = evt.currentTarget as Element;
        const ref = p_el && (Number(p_el.id.split('-').pop()) === 0);
        B.preselect = ref;
        console.log(ref);
    }

    const some_other_func = (cb:Function, evt:Event):void => {
        set_state();
        console.log('from state', B.type, B.toggle_state, (evt.currentTarget as Element));
        cb(evt, B);
    }

    const B:re_button = {
        type: type,
        label: label,
        toggles: type === 'split' || type === 'multi',
        set_state: (state:any = null):void => {
            set_state(state);
        },
        init: ():re_button => {

            !source[B.type].dom_loded && populate_src(B.type, source[B.type].content);

            

            const icon = mdoc.createElement('div');
            make_svg(icon, B);

            B.icon = icon.firstChild as SVGSVGElement;

            const button = mdoc.createElement('button');
            button.appendChild(B.icon);
            button.classList.add('svg-btn-button');

            // button.diagonal = B;

            B.button = (button as HTMLButtonElement);//.cloneNode(true) as HTMLButtonElement;
            B.button.addEventListener('mouseup', some_other_func.bind(null, callback), false);
            if(B.type === 'split'){
                B.icon.querySelectorAll(`.icon-mask`)?.forEach((el:Node) => {
                    el.addEventListener('mouseenter', pre_select, false);
                })

            }

            set_state();
            B.initialized = true;
            return B
        }
    }


    return B
}




export {button as default}

// const re = button('basic', 'clear').init();
// console.log(re);


// const r = button('split', 'on-off').init();
// console.log(r);



//     init: () => {
//         const src = document.createElement('div');
//         src.innerHTML = ctrl_icons;
//     }

//     const B:any = {
//         // line_numbers: {list:[]},
//         // num_lines: null,
//         // max_lines: null,
//         // line_height: null,
//         // init: button.init,
//         // field: null,
//         // numbers: null,
//         // set_text,
//         // get_text,
//         // init,
//         // delta,
//         // check_key,
//         // resize
//     }

//     return B;
    

// }