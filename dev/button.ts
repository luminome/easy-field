/**
 * somehow managed to virtualize a document.
 */

import * as jsd from 'jsdom';
const {JSDOM} = jsd;

class DOMParser {
    //https://stackoverflow.com/a/75933984
    parseFromString(s:any) {
        return new JSDOM(s).window.document;
    }
}

const basic_ctrl_icons = {labels:['input','output','clear'], data:`
<svg id="basic" viewBox="0 0 256 256">
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
`};

const split_ctrl_icons = {labels:['collapse-expand','on-off'], data:`
<svg id="split" viewBox="0 0 256 256">
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


var source:any = {'basic':null, 'split':null};
const astring = '<adoc></adoc>';
const parser = new DOMParser();
const mdoc = parser.parseFromString(astring);// as Document;

export interface re_button {
    type: string;
    label?: string;
    initialized?: boolean | null;
    icon?: SVGSVGElement | null;
    button?: HTMLButtonElement | null;
    callback?: Function;
    init(): re_button;
}

const make_svg = (container:HTMLDivElement, type:string, label:string):void => {

    container.innerHTML = '<svg viewBox="0 0 256 256"></svg>';
    const svg_src = mdoc.querySelector(`#${type}`) as SVGSVGElement;
    const iter_layers = type === 'basic' ? ['mask', 'border', label] : ['mask-0', 'mask-1', 'border', label];

    iter_layers.forEach((part:string) => {
        try {
            const chok = (svg_src.querySelector(`#${part}`) as Element).cloneNode(true) as Element;
            chok.removeAttribute('id');
            
            var label_class = part;

            if(part.indexOf('mask') !== -1){
                const part_name = part.split('-');
                const evt_label = part_name.length > 1 ? `${label}-${part_name[1]}` : label;
                chok.setAttribute('id', evt_label);
                label_class = 'button-event';
            }
            
            chok.setAttribute('class',`icon-${part === label ? 'icon': label_class} button-${type}`);
            container.firstChild?.appendChild(chok);

        } catch (error) {
            console.log('misconfigured', error);
        }

    });


}

const populate_src = (type_string:string, data:string):void => {
    const el = mdoc.createElement('div');
    el.innerHTML = data.toString();
    mdoc.body.appendChild(el as HTMLDivElement);
    source[type_string] = 'loaded';
    console.log(source);
}

const button = (type:string = 'basic', label:string = 'clear', callback:Function = (_:Event)=>{}):re_button => {
    const B:re_button = {
        type: type,
        label: label,
        init: ():re_button => {
            B.type === 'basic' && !source.basic && (source.basic = populate_src('basic', basic_ctrl_icons.data));
            B.type === 'split' && !source.split && (source.split = populate_src('split', split_ctrl_icons.data));
            const target = mdoc.createElement('div');
            make_svg(target, B.type, B.label!);


            const event_elements = target.querySelectorAll('.button-event');
            event_elements.forEach((el:Node) => {
                el.addEventListener('mouseup', callback as any);
            } )

            // console.log(target.innerHTML);
            B.icon = target.firstChild as SVGSVGElement;
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