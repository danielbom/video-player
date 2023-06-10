import{R as u,r as Xe,j as M}from"./index-ced33342.js";import{u as Di}from"./useFullpage-70d201ae.js";const m={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_CAPTIONS_REQUEST:"mediashowcaptionsrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_CAPTIONS_REQUEST:"mediadisablecaptionsrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},Se={MEDIA_AIRPLAY_UNAVAILABLE:"mediaairplayunavailablechange",MEDIA_PIP_UNAVAILABLE:"mediapipunavailablechange",MEDIA_PAUSED:"mediapausedchange",MEDIA_HAS_PLAYED:"mediahasplayedchange",MEDIA_MUTED:"mediamutedchange",MEDIA_VOLUME_LEVEL:"mediavolumelevelchange",MEDIA_VOLUME:"mediavolumechange",MEDIA_VOLUME_UNAVAILABLE:"mediavolumeunavailablechange",MEDIA_IS_PIP:"mediaispipchange",MEDIA_IS_CASTING:"mediaiscastingchange",MEDIA_CAPTIONS_LIST:"mediacaptionslistchange",MEDIA_SUBTITLES_LIST:"mediasubtitleslistchange",MEDIA_CAPTIONS_SHOWING:"mediacaptionsshowingchange",MEDIA_SUBTITLES_SHOWING:"mediasubtitlesshowingchange",MEDIA_IS_FULLSCREEN:"mediaisfullscreenchange",MEDIA_PLAYBACK_RATE:"mediaplaybackratechange",MEDIA_CURRENT_TIME:"mediacurrenttimechange",MEDIA_DURATION:"mediadurationchange",MEDIA_SEEKABLE:"mediaseekablechange",MEDIA_PREVIEW_IMAGE:"mediapreviewimagechange",MEDIA_PREVIEW_COORDS:"mediapreviewcoordschange",MEDIA_LOADING:"medialoadingchange",USER_INACTIVE:"userinactivechange"},b={MEDIA_CHROME_ATTRIBUTES:"media-chrome-attributes",MEDIA_CONTROLLER:"media-controller"},n={MEDIA_AIRPLAY_UNAVAILABLE:"media-airplay-unavailable",MEDIA_FULLSCREEN_UNAVAILABLE:"media-fullscreen-unavailable",MEDIA_PIP_UNAVAILABLE:"media-pip-unavailable",MEDIA_CAST_UNAVAILABLE:"media-cast-unavailable",MEDIA_PAUSED:"media-paused",MEDIA_HAS_PLAYED:"media-has-played",MEDIA_MUTED:"media-muted",MEDIA_VOLUME_LEVEL:"media-volume-level",MEDIA_VOLUME:"media-volume",MEDIA_VOLUME_UNAVAILABLE:"media-volume-unavailable",MEDIA_IS_PIP:"media-is-pip",MEDIA_IS_CASTING:"media-is-casting",MEDIA_CAPTIONS_LIST:"media-captions-list",MEDIA_SUBTITLES_LIST:"media-subtitles-list",MEDIA_CAPTIONS_SHOWING:"media-captions-showing",MEDIA_SUBTITLES_SHOWING:"media-subtitles-showing",MEDIA_IS_FULLSCREEN:"media-is-fullscreen",MEDIA_PLAYBACK_RATE:"media-playback-rate",MEDIA_CURRENT_TIME:"media-current-time",MEDIA_DURATION:"media-duration",MEDIA_SEEKABLE:"media-seekable",MEDIA_PREVIEW_TIME:"media-preview-time",MEDIA_PREVIEW_IMAGE:"media-preview-image",MEDIA_PREVIEW_COORDS:"media-preview-coords",MEDIA_LOADING:"media-loading",MEDIA_BUFFERED:"media-buffered",MEDIA_STREAM_TYPE:"media-stream-type",MEDIA_TIME_IS_LIVE:"media-time-is-live"};Object.entries(Se).reduce((i,[e,t])=>{const a=n[e];return a&&(i[t]=a),i},{userinactivechange:"user-inactive"});const yi=Object.entries(n).reduce((i,[e,t])=>{const a=Se[e];return a&&(i[t]=a),i},{"user-inactive":"userinactivechange"}),oe={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},W={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},at={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},y={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},Le={LIVE:"live",ON_DEMAND:"on-demand"},x={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:i=1}={})=>`current playback rate ${i}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading"},S={PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",AIRPLAY:()=>"air play",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:i=30}={})=>`seek forward ${i} seconds`,SEEK_BACK_N_SECS:({seekOffset:i=30}={})=>`seek back ${i} seconds`};function Ue(i,e=!1){return i.split("_").map(function(t,a){return(a||e?t[0].toUpperCase():t[0].toLowerCase())+t.slice(1).toLowerCase()}).join("")}function ki(i){return typeof i=="number"&&!Number.isNaN(i)&&Number.isFinite(i)}const nt=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],Ri=(i,e)=>{const t=i===1?nt[e].singular:nt[e].plural;return`${i} ${t}`},te=i=>{if(!ki(i))return"";const e=Math.abs(i),t=e!==i,a=new Date(0,0,0,0,0,e,0);return`${[a.getHours(),a.getMinutes(),a.getSeconds()].map((d,E)=>d&&Ri(d,E)).filter(d=>d).join(", ")}${t?" remaining":""}`};function U(i,e){let t=!1;i<0&&(t=!0,i=0-i),i=i<0?0:i;let a=Math.floor(i%60),s=Math.floor(i/60%60),r=Math.floor(i/3600);const o=Math.floor(e/60%60),d=Math.floor(e/3600);return(isNaN(i)||i===1/0)&&(r=s=a="-"),r=r>0||d>0?r+":":"",s=((r||o>=10)&&s<10?"0"+s:s)+":",a=a<10?"0"+a:a,(t?"-":"")+r+s+a}class st{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}let wi=class{observe(){}};const yt={ResizeObserver:wi,HTMLElement:class extends st{},DocumentFragment:class extends st{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},CustomEvent:function(){}},Ui={createElement:function(){return new yt.HTMLElement}},kt=typeof window>"u"||typeof window.customElements>"u",l=kt?yt:window,c=kt?Ui:window.document;var xi=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)},P=(i,e,t)=>(xi(i,e,"read from private field"),t?t.call(i):e.get(i)),xe=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},be,H,Be;const Rt=c.createElement("template");Rt.innerHTML=`
<style>
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    box-sizing: border-box;
    background: var(--media-control-background, rgba(20,20,30, 0.7));

    padding: var(--media-control-padding, 10px);

    
    font-size: 14px;
    line-height: var(--media-text-content-height, var(--media-control-height, 24px));
    font-weight: bold;
    color: #fff;

    transition: background 0.15s linear;

    pointer-events: auto;
    cursor: pointer;
    font-family: Arial, sans-serif;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgba(27, 127, 204, 0.9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50,50,70, 0.7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, #eee);
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }
</style>
`;class wt extends l.HTMLElement{constructor(e={}){super(),xe(this,be,r=>{this.handleClick(r)}),xe(this,H,r=>{const{key:o}=r;if(!this.keysUsed.includes(o)){this.removeEventListener("keyup",P(this,H));return}this.handleClick(r)}),xe(this,Be,r=>{const{metaKey:o,altKey:d,key:E}=r;if(o||d||!this.keysUsed.includes(E)){this.removeEventListener("keyup",P(this,H));return}this.addEventListener("keyup",P(this,H),{once:!0})});const t=this.attachShadow({mode:"open"}),a=Rt.content.cloneNode(!0);this.nativeEl=a;let s=e.slotTemplate;s||(s=c.createElement("template"),s.innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(s.content.cloneNode(!0)),t.appendChild(a)}static get observedAttributes(){return["disabled",b.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",P(this,be)),this.addEventListener("keydown",P(this,Be)),this.setAttribute("tabindex","0")}disable(){this.removeEventListener("click",P(this,be)),this.removeEventListener("keyup",P(this,H)),this.removeAttribute("tabindex")}attributeChangedCallback(e,t,a){var s,r;if(e===b.MEDIA_CONTROLLER){if(t){const o=c.getElementById(t);(s=o==null?void 0:o.unassociateElement)==null||s.call(o,this)}if(a){const o=c.getElementById(a);(r=o==null?void 0:o.associateElement)==null||r.call(o,this)}}else e==="disabled"&&a!==t&&(a==null?this.enable():this.disable())}connectedCallback(){var e;this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");const t=this.getAttribute(b.MEDIA_CONTROLLER);if(t){const a=c.getElementById(t);(e=a==null?void 0:a.associateElement)==null||e.call(a,this)}}disconnectedCallback(){var e;this.disable();const t=this.getAttribute(b.MEDIA_CONTROLLER);if(t){const a=c.getElementById(t);(e=a==null?void 0:a.unassociateElement)==null||e.call(a,this)}}get keysUsed(){return["Enter"," "]}handleClick(e){}}be=new WeakMap;H=new WeakMap;Be=new WeakMap;l.customElements.get("media-chrome-button")||l.customElements.define("media-chrome-button",wt);var C=wt;const Pi=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,Ut=c.createElement("template");Ut.innerHTML=`
  <slot name="airplay">${Pi}</slot>
`;class Ni extends C{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(e={}){super({slotTemplate:Ut,...e})}connectedCallback(){this.setAttribute("aria-label",S.AIRPLAY()),super.connectedCallback()}handleClick(){const e=new l.CustomEvent(m.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}l.customElements.get("media-airplay-button")||l.customElements.define("media-airplay-button",Ni);const Oi='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',$i='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>',xt=c.createElement("template");xt.innerHTML=`
  <style>
  :host([${n.MEDIA_IS_CASTING}]) slot:not([name=exit]) > *,
  :host([${n.MEDIA_IS_CASTING}]) ::slotted(:not([slot=exit])) {
    display: none !important;
  }

  
  :host(:not([${n.MEDIA_IS_CASTING}])) slot:not([name=enter]) > *,
  :host(:not([${n.MEDIA_IS_CASTING}])) ::slotted(:not([slot=enter])) {
    display: none !important;
  }
  </style>

  <slot name="enter">${Oi}</slot>
  <slot name="exit">${$i}</slot>
`;const rt=i=>{const t=i.getAttribute(n.MEDIA_IS_CASTING)!=null?S.EXIT_CAST():S.ENTER_CAST();i.setAttribute("aria-label",t)};class Bi extends C{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_IS_CASTING,n.MEDIA_CAST_UNAVAILABLE]}constructor(e={}){super({slotTemplate:xt,...e})}connectedCallback(){rt(this),super.connectedCallback()}attributeChangedCallback(e,t,a){e===n.MEDIA_IS_CASTING&&rt(this),super.attributeChangedCallback(e,t,a)}handleClick(){const e=this.getAttribute(n.MEDIA_IS_CASTING)!=null?m.MEDIA_EXIT_CAST_REQUEST:m.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}}l.customElements.get("media-cast-button")||l.customElements.define("media-cast-button",Bi);const Pt=(i,e,t=".value")=>{const a=i.querySelector(t);a&&(a.textContent=e)},Hi=(i,e)=>{const t=`slot[name="${e}"]`,a=i.shadowRoot.querySelector(t);return a?a.children:[]},Nt=(i,e)=>Hi(i,e)[0],ve=(i,e)=>!i||!e?!1:i.contains(e)?!0:ve(i,e.getRootNode().host),je=(i,e)=>{if(!i)return null;const t=i.closest(e);return t||je(i.getRootNode().host,e)};function K(i,e){var t;let a;for(a of i.querySelectorAll("style")){let s;try{s=(t=a.sheet)==null?void 0:t.cssRules}catch{continue}for(let r of s??[])if(r.selectorText===e)return r}return a!=null&&a.sheet?(a.sheet.insertRule(`${e}{}`,a.sheet.cssRules.length),a.sheet.cssRules[a.sheet.cssRules.length-1]):{style:{setProperty:()=>{}}}}const Ot=c.createElement("template");Ot.innerHTML=`
<style>
  :host {
    display: inline-block;
    box-sizing: border-box;
  }
</style>
`;class Vi extends l.HTMLElement{static get observedAttributes(){return[b.MEDIA_CONTROLLER,n.MEDIA_PAUSED]}constructor(e={}){super();const t=this.attachShadow({mode:"open"}),a=Ot.content.cloneNode(!0);this.nativeEl=a;let s=e.slotTemplate;s||(s=c.createElement("template"),s.innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(s.content.cloneNode(!0)),t.appendChild(a)}attributeChangedCallback(e,t,a){var s,r;if(e===b.MEDIA_CONTROLLER){if(t){const o=c.getElementById(t);(s=o==null?void 0:o.unassociateElement)==null||s.call(o,this)}if(a){const o=c.getElementById(a);(r=o==null?void 0:o.associateElement)==null||r.call(o,this)}}}connectedCallback(){var e;this.setAttribute("tabindex",-1),this.setAttribute("aria-hidden",!0);const t=ot(this);this.getAttribute(b.MEDIA_CONTROLLER)&&((e=t==null?void 0:t.associateElement)==null||e.call(t,this)),t==null||t.addEventListener("pointerdown",this),t==null||t.addEventListener("click",this)}disconnectedCallback(){var e;const t=ot(this);this.getAttribute(b.MEDIA_CONTROLLER)&&((e=t==null?void 0:t.unassociateElement)==null||e.call(t,this)),t==null||t.removeEventListener("pointerdown",this),t==null||t.removeEventListener("click",this)}handleEvent(e){var t;const a=(t=e.composedPath())==null?void 0:t[0];if(["video","media-controller"].includes(a==null?void 0:a.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:r,clientY:o}=e,{left:d,top:E,width:h,height:p}=this.getBoundingClientRect(),A=r-d,D=o-E;if(A<0||D<0||A>h||D>p||h===0&&p===0)return;const{pointerType:L=this._pointerType}=e;if(this._pointerType=void 0,L===at.TOUCH){this.handleTap(e);return}else if(L===at.MOUSE){this.handleMouseClick(e);return}}}}handleTap(e){}handleMouseClick(e){const t=this.getAttribute(n.MEDIA_PAUSED)!=null?m.MEDIA_PLAY_REQUEST:m.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new l.CustomEvent(t,{composed:!0,bubbles:!0}))}}function ot(i){const e=i.getAttribute(b.MEDIA_CONTROLLER);return e?c.getElementById(e):je(i,"media-controller")}l.customElements.get("media-gesture-receiver")||l.customElements.define("media-gesture-receiver",Vi);const $t=c.createElement("template");$t.innerHTML=`
  <style>
    
    :host([media-is-fullscreen])  ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([audio])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    
    :host([audio]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([audio])[gestures-disabled]) ::slotted([slot=gestures-chrome]),
    :host(:not([audio])[gestures-disabled]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator)) {
      pointer-events: auto;
    }

    :host(:not([audio])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([audio])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([audio])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([audio])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([no-auto-hide])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    
    :host([user-inactive]:not([${n.MEDIA_PAUSED}]):not([${n.MEDIA_IS_CASTING}]):not([audio])) ::slotted(:not([slot=media]):not([no-auto-hide])) {
      opacity: 0;
      transition: opacity 1s;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    :host([${n.MEDIA_HAS_PLAYED}]) ::slotted([slot=poster]) {
      display: none;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
`;const Fi=Object.values(n),Wi="sm:384 md:576 lg:768 xl:960",Qi=i=>{var e;for(const t of i){const a=t.target;if(!a.isConnected)continue;const s=(e=a.getAttribute("breakpoints"))!=null?e:Wi,r=Gi(s),o=Ki(r,t.contentRect);Object.keys(r).forEach(d=>{if(o.includes(d)){a.hasAttribute(`breakpoint-${d}`)||a.setAttribute(`breakpoint-${d}`,"");return}a.removeAttribute(`breakpoint-${d}`)})}};function Gi(i){const e=i.split(/\s+/);return Object.fromEntries(e.map(t=>t.split(":")))}function Ki(i,e){return Object.keys(i).filter(t=>e.width>=i[t])}let Bt=class extends l.HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild($t.content.cloneNode(!0));const e=o=>{const d=this.media;for(let E of o)E.type==="childList"&&(E.removedNodes.forEach(h=>{if(h.slot=="media"&&E.target==this){let p=E.previousSibling&&E.previousSibling.previousElementSibling;if(!p||!d)this.mediaUnsetCallback(h);else{let A=p.slot!=="media";for(;(p=p.previousSibling)!==null;)p.slot=="media"&&(A=!1);A&&this.mediaUnsetCallback(h)}}}),d&&E.addedNodes.forEach(h=>{h==d&&this.handleMediaUpdated(d).then(p=>this.mediaSetCallback(p))}))};new MutationObserver(e).observe(this,{childList:!0,subtree:!0}),new ResizeObserver(Qi).observe(this);let s=this.media,r=this.querySelector(":scope > slot[slot=media]");r&&r.addEventListener("slotchange",()=>{if(!r.assignedElements({flatten:!0}).length){this.mediaUnsetCallback(s);return}this.media&&(s=this.media,this.handleMediaUpdated(this.media).then(d=>this.mediaSetCallback(d)))})}static get observedAttributes(){return["autohide","gestures-disabled"].concat(Fi)}attributeChangedCallback(e,t,a){e.toLowerCase()=="autohide"&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return(e==null?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}mediaSetCallback(e){this._mediaClickPlayToggle=()=>{const t=e.paused?m.MEDIA_PLAY_REQUEST:m.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new l.CustomEvent(t,{composed:!0,bubbles:!0}))}}handleMediaUpdated(e){const t=r=>Promise.resolve(r),a=r=>(console.error('<media-chrome>: Media element set with slot="media" does not appear to be compatible.',r),Promise.reject(r));if(!e)return a(e);const s=e.nodeName.toLowerCase();return s.includes("-")?l.customElements.whenDefined(s).then(()=>t(e)):t(e)}mediaUnsetCallback(e){}connectedCallback(){const t=this.getAttribute("audio")!=null?x.AUDIO_PLAYER():x.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.media&&this.handleMediaUpdated(this.media).then(o=>this.mediaSetCallback(o)),this.setAttribute("user-inactive","user-inactive");const a=()=>{if(this.autohide<0)return;this.setAttribute("user-inactive","user-inactive");const o=new l.CustomEvent(Se.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(o)},s=()=>{this.removeAttribute("user-inactive");const o=new l.CustomEvent(Se.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(o)},r=()=>{s(),l.clearTimeout(this._inactiveTimeout),!(this.autohide<0)&&(this._inactiveTimeout=l.setTimeout(()=>{a()},this.autohide*1e3))};this.addEventListener("keyup",()=>{r()}),this.addEventListener("pointerup",o=>{o.pointerType==="touch"?[this,this.media].includes(o.target)&&!this.hasAttribute("user-inactive")?a():r():o.composedPath().some(d=>{var E;return["media-play-button","media-fullscreen-button"].includes((E=d==null?void 0:d.nodeName)==null?void 0:E.toLowerCase())})&&r()}),this.addEventListener("pointermove",o=>{o.pointerType==="mouse"&&o.target!==this&&(s(),l.clearTimeout(this._inactiveTimeout),[this,this.media].includes(o.target)&&r())}),this.addEventListener("mouseleave",()=>{a()}),this.addEventListener("keyup",()=>{this.setAttribute("media-keyboard-control","")}),this.addEventListener("mouseup",()=>{this.removeAttribute("media-keyboard-control")})}set autohide(e){e=Number(e),this._autohide=isNaN(e)?0:e}get autohide(){return this._autohide===void 0?2:this._autohide}};l.customElements.get("media-container-temp")||l.customElements.define("media-container-temp",Bt);var Yi=Bt,Ht=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)},f=(i,e,t)=>(Ht(i,e,"read from private field"),t?t.call(i):e.get(i)),Pe=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},Ne=(i,e,t,a)=>(Ht(i,e,"write to private field"),a?a.call(i,t):e.set(i,t),t),V,F,T;class qi{constructor(e,t){Pe(this,V,void 0),Pe(this,F,void 0),Pe(this,T,new Set),Ne(this,V,e),Ne(this,F,t)}[Symbol.iterator](){return f(this,T).values()}get length(){return f(this,T).size}get value(){var e;return(e=[...f(this,T)].join(" "))!=null?e:""}set value(e){var t;e!==this.value&&(Ne(this,T,new Set),this.add(...(t=e==null?void 0:e.split(" "))!=null?t:[]))}toString(){return this.value}item(e){return[...f(this,T)][e]}values(){return f(this,T).values()}keys(){return f(this,T).keys()}forEach(e){f(this,T).forEach(e)}add(...e){var t,a;e.forEach(s=>f(this,T).add(s)),!(this.value===""&&!((t=f(this,V))!=null&&t.hasAttribute(`${f(this,F)}`)))&&((a=f(this,V))==null||a.setAttribute(`${f(this,F)}`,`${this.value}`))}remove(...e){var t;e.forEach(a=>f(this,T).delete(a)),(t=f(this,V))==null||t.setAttribute(`${f(this,F)}`,`${this.value}`)}contains(e){return f(this,T).has(e)}toggle(e,t){return typeof t<"u"?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}}V=new WeakMap;F=new WeakMap;T=new WeakMap;const g={enter:"requestFullscreen",exit:"exitFullscreen",event:"fullscreenchange",element:"fullscreenElement",error:"fullscreenerror",enabled:"fullscreenEnabled"};c.fullscreenElement===void 0&&(g.enter="webkitRequestFullScreen",g.exit=c.webkitExitFullscreen!=null?"webkitExitFullscreen":"webkitCancelFullScreen",g.event="webkitfullscreenchange",g.element="webkitFullscreenElement",g.error="webkitfullscreenerror",g.enabled="webkitFullscreenEnabled");const He=(i="")=>i.split(/\s+/),Vt=(i="")=>{const[e,t]=i.split(":"),a=t?decodeURIComponent(t):void 0;return{language:e,label:a}},Zi=(i="",e={})=>He(i).map(t=>{const a=Vt(t);return{...e,...a}}),zi=i=>Array.isArray(i)?i.map(e=>typeof e=="string"?Vt(e):e):typeof i=="string"?Zi(i):[i],Xi=({label:i,language:e}={})=>i?`${e}:${encodeURIComponent(i)}`:e,k=(i=[])=>Array.prototype.map.call(i,Xi).join(" "),ji=(i,e)=>t=>t[i]===e,Ft=i=>{const e=Object.entries(i).map(([t,a])=>ji(t,a));return t=>e.every(a=>a(t))},Ee=(i,e=[],t=[])=>{const a=zi(t).map(Ft),s=r=>a.some(o=>o(r));Array.from(e).filter(s).forEach(r=>{r.mode=i})},le=(i,e=()=>!0)=>{if(!(i!=null&&i.textTracks))return[];const t=typeof e=="function"?e:Ft(e);return Array.from(i.textTracks).filter(t)},Wt=i=>{const e=!!i.getAttribute(n.MEDIA_CAPTIONS_SHOWING),t=!i.hasAttribute("no-subtitles-fallback")&&!!i.getAttribute(n.MEDIA_SUBTITLES_SHOWING);return e||t},Qt=i=>{var e,t,a,s;if(Wt(i)){const o=i.getAttribute(n.MEDIA_CAPTIONS_SHOWING);if(o){const E=new window.CustomEvent(m.MEDIA_DISABLE_CAPTIONS_REQUEST,{composed:!0,bubbles:!0,detail:o});i.dispatchEvent(E)}const d=i.getAttribute(n.MEDIA_SUBTITLES_SHOWING);if(d&&!i.hasAttribute("no-subtitles-fallback")){const E=new window.CustomEvent(m.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:d});i.dispatchEvent(E)}}else{const[o]=(t=He((e=i.getAttribute(n.MEDIA_CAPTIONS_LIST))!=null?e:""))!=null?t:[];if(o){const d=new window.CustomEvent(m.MEDIA_SHOW_CAPTIONS_REQUEST,{composed:!0,bubbles:!0,detail:o});i.dispatchEvent(d)}else if(i.hasAttribute("no-subtitles-fallback"))console.error("Attempting to enable closed captions but none are available! Please verify your media content if this is unexpected.");else{const[d]=(s=He((a=i.getAttribute(n.MEDIA_SUBTITLES_LIST))!=null?a:""))!=null?s:[];if(d){const E=new window.CustomEvent(m.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:d});i.dispatchEvent(E)}}}};var Je=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)},O=(i,e,t)=>(Je(i,e,"read from private field"),t?t.call(i):e.get(i)),me=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},lt=(i,e,t,a)=>(Je(i,e,"write to private field"),a?a.call(i,t):e.set(i,t),t),G=(i,e,t)=>(Je(i,e,"access private method"),t),w,X,Y,re,Ae,Ve;const Ji=Object.values(Le),Gt=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],ea=10,dt=0;let Kt=class extends Yi{constructor(){super(),me(this,Y),me(this,Ae),me(this,w,new qi(this,"hotkeys")),me(this,X,void 0),da||(this._airplayUnavailable=y.UNSUPPORTED),ut||(this._fullscreenUnavailable=y.UNAVAILABLE),ca||(this._castUnavailable=y.UNSUPPORTED),oa||(this._pipUnavailable=y.UNSUPPORTED),ae!==void 0?ae||(this._volumeUnavailable=y.UNSUPPORTED):la.then(()=>{ae||(this._volumeUnavailable=y.UNSUPPORTED,this.propagateMediaState(n.MEDIA_VOLUME_UNAVAILABLE,this._volumeUnavailable))}),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,this.associateElement(this);const e={MEDIA_PLAY_REQUEST:(t,a)=>{const s=Z[n.MEDIA_STREAM_TYPE](this),r=this.getAttribute("noautoseektolive")===null;s==Le.LIVE&&r&&e.MEDIA_SEEK_TO_LIVE_REQUEST(t,a),this.media.play()},MEDIA_PAUSE_REQUEST:()=>this.media.pause(),MEDIA_MUTE_REQUEST:()=>this.media.muted=!0,MEDIA_UNMUTE_REQUEST:()=>{const t=this.media;t.muted=!1,t.volume===0&&(t.volume=.25)},MEDIA_VOLUME_REQUEST:t=>{const a=this.media,s=t.detail;a.volume=s,s>0&&a.muted&&(a.muted=!1);try{l.localStorage.setItem("media-chrome-pref-volume",s.toString())}catch{}},MEDIA_ENTER_FULLSCREEN_REQUEST:()=>{if(!ut){console.warn("Fullscreen support is unavailable; not entering fullscreen");return}const t=this.media;c.pictureInPictureElement&&c.exitPictureInPicture(),super[g.enter]?this.fullscreenElement[g.enter]():t.webkitEnterFullscreen?t.webkitEnterFullscreen():t.requestFullscreen?t.requestFullscreen():console.warn("MediaChrome: Fullscreen not supported")},MEDIA_EXIT_FULLSCREEN_REQUEST:()=>{c[g.exit]()},MEDIA_ENTER_PIP_REQUEST:()=>{const t=this.media;if(!c.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!t.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}c[g.element]&&c[g.exit]();const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};t.requestPictureInPicture().catch(s=>{if(s.code===11)if(t.readyState===0&&t.preload==="none"){const r=()=>{t.removeEventListener("loadedmetadata",o),t.preload="none"},o=()=>{t.requestPictureInPicture().catch(a),r()};t.addEventListener("loadedmetadata",o),t.preload="metadata",setTimeout(()=>{t.readyState===0&&a(),r()},1e3)}else throw s;else throw s})},MEDIA_EXIT_PIP_REQUEST:()=>{c.pictureInPictureElement&&c.exitPictureInPicture()},MEDIA_ENTER_CAST_REQUEST:()=>{var t;const a=this.media;(t=globalThis.CastableVideoElement)!=null&&t.castEnabled&&(c[g.element]&&c[g.exit](),a.requestCast())},MEDIA_EXIT_CAST_REQUEST:async()=>{var t;(t=globalThis.CastableVideoElement)!=null&&t.castElement&&globalThis.CastableVideoElement.exitCast()},MEDIA_SEEK_REQUEST:t=>{const a=this.media,s=t.detail;(a.readyState>0||a.readyState===void 0)&&(a.currentTime=s)},MEDIA_PLAYBACK_RATE_REQUEST:t=>{this.media.playbackRate=t.detail},MEDIA_PREVIEW_REQUEST:t=>{var a;const s=this.media;if(!s)return;const r=t.detail;r===null&&this.propagateMediaState(n.MEDIA_PREVIEW_TIME,void 0),this.propagateMediaState(n.MEDIA_PREVIEW_TIME,r);const[o]=le(s,{kind:oe.METADATA,label:"thumbnails"});if(!(o&&o.cues))return;if(r===null){this.propagateMediaState(n.MEDIA_PREVIEW_IMAGE,void 0),this.propagateMediaState(n.MEDIA_PREVIEW_COORDS,void 0);return}const d=Array.prototype.find.call(o.cues,A=>A.startTime>=r);if(!d)return;const E=/'^(?:[a-z]+:)?\/\//i.test(d.text)||(a=s.querySelector('track[label="thumbnails"]'))==null?void 0:a.src,h=new URL(d.text,E),p=new URLSearchParams(h.hash).get("#xywh");this.propagateMediaState(n.MEDIA_PREVIEW_IMAGE,h.href),this.propagateMediaState(n.MEDIA_PREVIEW_COORDS,p.split(",").join(" "))},MEDIA_SHOW_CAPTIONS_REQUEST:t=>{const a=_e(this),{detail:s=[]}=t;Ee(W.SHOWING,a,s)},MEDIA_DISABLE_CAPTIONS_REQUEST:t=>{const a=_e(this),{detail:s=[]}=t;Ee(W.DISABLED,a,s)},MEDIA_SHOW_SUBTITLES_REQUEST:t=>{const a=ie(this),{detail:s=[]}=t;Ee(W.SHOWING,a,s)},MEDIA_DISABLE_SUBTITLES_REQUEST:t=>{const a=ie(this),{detail:s=[]}=t;Ee(W.DISABLED,a,s)},MEDIA_AIRPLAY_REQUEST:()=>{const{media:t}=this;if(t){if(!(t.webkitShowPlaybackTargetPicker&&l.WebKitPlaybackTargetAvailabilityEvent)){console.warn("received a request to select AirPlay but AirPlay is not supported in this environment");return}t.webkitShowPlaybackTargetPicker()}},MEDIA_SEEK_TO_LIVE_REQUEST:(t,a)=>{const s=a.seekable;if(!s){console.warn("MediaController: Media element does not support seeking to live.");return}if(!s.length){console.warn("MediaController: Media is unable to seek to live.");return}a.currentTime=s.end(s.length-1)}};if(Object.keys(e).forEach(t=>{const a=`_handle${Ue(t,!0)}`;this[a]=s=>{if(s.stopPropagation(),!this.media){console.warn("MediaController: No media available.");return}e[t](s,this.media)},this.addEventListener(m[t],this[a])}),this._mediaStatePropagators={"play,pause,emptied":()=>{this.propagateMediaState(n.MEDIA_PAUSED,Yt(this))},"playing,emptied":()=>{var t;this.propagateMediaState(n.MEDIA_HAS_PLAYED,!((t=this.media)!=null&&t.paused))},volumechange:()=>{this.propagateMediaState(n.MEDIA_MUTED,qt(this)),this.propagateMediaState(n.MEDIA_VOLUME,Zt(this)),this.propagateMediaState(n.MEDIA_VOLUME_LEVEL,zt(this))},[g.event]:t=>{const s=!!c[g.element]&&(t==null?void 0:t.target),r=ve(this.fullscreenElement,s);this.propagateMediaState(n.MEDIA_IS_FULLSCREEN,r)},"enterpictureinpicture,leavepictureinpicture":t=>{var a;let s;if(t)s=t.type=="enterpictureinpicture";else{const r=(a=this.getRootNode().pictureInPictureElement)!=null?a:c.pictureInPictureElement;s=this.media&&ve(this.media,r)}this.propagateMediaState(n.MEDIA_IS_PIP,s)},"entercast,leavecast,castchange":t=>{var a;const s=(a=globalThis.CastableVideoElement)==null?void 0:a.castElement;let r=this.media&&ve(this.media,s);(t==null?void 0:t.type)==="castchange"&&(t==null?void 0:t.detail)==="CONNECTING"&&(r="connecting"),this.propagateMediaState(n.MEDIA_IS_CASTING,r)},"timeupdate,loadedmetadata":()=>{this.propagateMediaState(n.MEDIA_CURRENT_TIME,Xt(this))},"durationchange,loadedmetadata,emptied":()=>{this.propagateMediaState(n.MEDIA_DURATION,jt(this)),this.propagateMediaState(n.MEDIA_STREAM_TYPE)},"loadedmetadata,emptied,progress":()=>{var t;this.propagateMediaState(n.MEDIA_SEEKABLE,(t=Jt(this))==null?void 0:t.join(":"))},"progress,emptied":()=>{var t;this.propagateMediaState(n.MEDIA_BUFFERED,ma((t=this.media)==null?void 0:t.buffered))},"ratechange,loadstart":()=>{this.propagateMediaState(n.MEDIA_PLAYBACK_RATE,ei(this))},"waiting,playing,emptied":()=>{var t;const a=((t=this.media)==null?void 0:t.readyState)<3;this.propagateMediaState(n.MEDIA_LOADING,a)},"playing,timeupdate,progress,waiting,emptied":()=>{this.propagateMediaState(n.MEDIA_TIME_IS_LIVE)}},this._airplayUnavailable!==y.UNSUPPORTED){const t=a=>{(a==null?void 0:a.availability)==="available"?this._airplayUnavailable=void 0:(a==null?void 0:a.availability)==="not-available"&&(this._airplayUnavailable=y.UNAVAILABLE),this.propagateMediaState(n.MEDIA_AIRPLAY_UNAVAILABLE,this._airplayUnavailable)};this._mediaStatePropagators.webkitplaybacktargetavailabilitychanged=t}if(this._castUnavailable!==y.UNSUPPORTED){const t=()=>{var a;const s=(a=globalThis.CastableVideoElement)==null?void 0:a.castState;s!=null&&s.includes("CONNECT")?this._castUnavailable=void 0:this._castUnavailable=y.UNAVAILABLE,this.propagateMediaState(n.MEDIA_CAST_UNAVAILABLE,this._castUnavailable)};this._mediaStatePropagators.castchange=t}this._textTrackMediaStatePropagators={"addtrack,removetrack,loadstart":()=>{this.propagateMediaState(n.MEDIA_CAPTIONS_LIST,k(_e(this))||void 0),this.propagateMediaState(n.MEDIA_SUBTITLES_LIST,k(ie(this))||void 0),this.propagateMediaState(n.MEDIA_CAPTIONS_SHOWING,k(Fe(this))||void 0),this.propagateMediaState(n.MEDIA_SUBTITLES_SHOWING,k(ct(this))||void 0)},change:()=>{this.propagateMediaState(n.MEDIA_CAPTIONS_SHOWING,k(Fe(this))||void 0),this.propagateMediaState(n.MEDIA_SUBTITLES_SHOWING,k(ct(this))||void 0)}},this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat("nohotkeys","hotkeys","default-stream-type")}get fullscreenElement(){var e;return(e=O(this,X))!=null?e:this}set fullscreenElement(e){this.hasAttribute("fullscreen-element")&&this.removeAttribute("fullscreen-element"),lt(this,X,e)}attributeChangedCallback(e,t,a){var s;if(e==="nohotkeys")a!==t&&a===""?(this.hasAttribute("hotkeys")&&console.warn("Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==t&&a===null&&this.enableHotkeys();else if(e==="hotkeys")O(this,w).value=a;else if(e==="default-stream-type")this.propagateMediaState(n.MEDIA_STREAM_TYPE);else if(e==="fullscreen-element"){const r=a?(s=this.getRootNode())==null?void 0:s.getElementById(a):void 0;lt(this,X,r)}super.attributeChangedCallback(e,t,a)}mediaSetCallback(e){super.mediaSetCallback(e),e.hasAttribute("tabindex")||e.setAttribute("tabindex",-1),Object.keys(this._mediaStatePropagators).forEach(t=>{const a=t.split(","),s=this._mediaStatePropagators[t];a.forEach(r=>{(r==g.event?this.getRootNode():e).addEventListener(r,s)}),s()}),Object.entries(this._textTrackMediaStatePropagators).forEach(([t,a])=>{t.split(",").forEach(r=>{e.textTracks&&e.textTracks.addEventListener(r,a)}),a()});try{const t=l.localStorage.getItem("media-chrome-pref-volume");t!==null&&(e.volume=t)}catch(t){console.debug("Error getting volume pref",t)}}mediaUnsetCallback(e){super.mediaUnsetCallback(e),Object.keys(this._mediaStatePropagators).forEach(t=>{const a=t.split(","),s=this._mediaStatePropagators[t];a.forEach(r=>{(r==g.event?this.getRootNode():e).removeEventListener(r,s)})}),Object.entries(this._textTrackMediaStatePropagators).forEach(([t,a])=>{t.split(",").forEach(r=>{e.textTracks&&e.textTracks.removeEventListener(r,a)}),a()}),this.propagateMediaState(n.MEDIA_PAUSED,!0)}propagateMediaState(e,t){arguments.length===1&&(t=Z[e](this)),N(this.mediaStateReceivers,e,t);const a=new l.CustomEvent(yi[e],{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(a)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:t}=this;if(t.has(e))return;const a=this.registerMediaStateReceiver.bind(this),s=this.unregisterMediaStateReceiver.bind(this),r=na(e,a,s);Object.keys(m).forEach(o=>{e.addEventListener(m[o],this[`_handle${Ue(o,!0)}`])}),t.set(e,r)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:t}=this;if(!t.has(e))return;t.get(e)(),t.delete(e),Object.keys(m).forEach(s=>{e.removeEventListener(m[s],this[`_handle${Ue(s,!0)}`])})}registerMediaStateReceiver(e){if(!e)return;const t=this.mediaStateReceivers;t.indexOf(e)>-1||(t.push(e),N([e],n.MEDIA_VOLUME_UNAVAILABLE,this._volumeUnavailable),N([e],n.MEDIA_AIRPLAY_UNAVAILABLE,this._airplayUnavailable),N([e],n.MEDIA_FULLSCREEN_UNAVAILABLE,this._fullscreenUnavailable),N([e],n.MEDIA_CAST_UNAVAILABLE,this._castUnavailable),N([e],n.MEDIA_PIP_UNAVAILABLE,this._pipUnavailable),this.media&&Object.keys(n).forEach(s=>{s.includes("UNAVAILABLE")||N([e],n[s],Z[n[s]]?Z[n[s]](this):Z.default(this,n[s]))}))}unregisterMediaStateReceiver(e){const t=this.mediaStateReceivers,a=t.indexOf(e);a<0||t.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",G(this,Ae,Ve))}disableHotkeys(){this.removeEventListener("keydown",G(this,Ae,Ve)),this.removeEventListener("keyup",G(this,Y,re))}get hotkeys(){return O(this,w)}keyboardShortcutHandler(e){var t,a,s,r;if(((r=(s=(t=e.target.getAttribute("keysused"))==null?void 0:t.split(" "))!=null?s:(a=e.target)==null?void 0:a.keysUsed)!=null?r:[]).map(L=>L==="Space"?" ":L).filter(Boolean).includes(e.key))return;let d,E,h,p,A;const D=ea;if(!O(this,w).contains(`no${e.key.toLowerCase()}`)&&!(e.key===" "&&O(this,w).contains("nospace")))switch(e.key){case" ":case"k":d=this.getAttribute(n.MEDIA_PAUSED)!=null?m.MEDIA_PLAY_REQUEST:m.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new l.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"m":d=this.getAttribute(n.MEDIA_VOLUME_LEVEL)==="off"?m.MEDIA_UNMUTE_REQUEST:m.MEDIA_MUTE_REQUEST,this.dispatchEvent(new l.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"f":d=this.getAttribute(n.MEDIA_IS_FULLSCREEN)!=null?m.MEDIA_EXIT_FULLSCREEN_REQUEST:m.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new l.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"c":Qt(this);break;case"ArrowLeft":E=this.getAttribute(n.MEDIA_CURRENT_TIME),h=E&&!Number.isNaN(+E)?+E:dt,p=Math.max(h-D,0),A=new l.CustomEvent(m.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:p}),this.dispatchEvent(A);break;case"ArrowRight":E=this.getAttribute(n.MEDIA_CURRENT_TIME),h=E&&!Number.isNaN(+E)?+E:dt,p=Math.max(h+D,0),A=new l.CustomEvent(m.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:p}),this.dispatchEvent(A);break}}};w=new WeakMap;X=new WeakMap;Y=new WeakSet;re=function(i){const{key:e}=i;if(!Gt.includes(e)){this.removeEventListener("keyup",G(this,Y,re));return}this.keyboardShortcutHandler(i)};Ae=new WeakSet;Ve=function(i){const{metaKey:e,altKey:t,key:a}=i;if(e||t||!Gt.includes(a)){this.removeEventListener("keyup",G(this,Y,re));return}[" ","ArrowLeft","ArrowRight"].includes(a)&&!(O(this,w).contains(`no${a.toLowerCase()}`)||a===" "&&O(this,w).contains("nospace"))&&i.preventDefault(),this.addEventListener("keyup",G(this,Y,re),{once:!0})};const Z={default(i,e){return i.getAttribute(e)},[n.MEDIA_CAPTIONS_LIST](i){return k(_e(i))||void 0},[n.MEDIA_SUBTITLES_LIST](i){return k(ie(i))||void 0},[n.MEDIA_SUBTITLES_LIST](i){return k(ie(i))||void 0},[n.MEDIA_CAPTIONS_SHOWING](i){return k(Fe(i))||void 0},[n.MEDIA_PAUSED](i){return Yt(i)},[n.MEDIA_MUTED](i){return qt(i)},[n.MEDIA_VOLUME](i){return Zt(i)},[n.MEDIA_VOLUME_LEVEL](i){return zt(i)},[n.MEDIA_CURRENT_TIME](i){return Xt(i)},[n.MEDIA_DURATION](i){return jt(i)},[n.MEDIA_SEEKABLE](i){var e;return(e=Jt(i))==null?void 0:e.join(":")},[n.MEDIA_PLAYBACK_RATE](i){return ei(i)},[n.MEDIA_STREAM_TYPE](i){const e=i.media;if(!e)return null;const t=e.duration;if(t===1/0)return Le.LIVE;if(Number.isFinite(t))return Le.ON_DEMAND;{const a=i.getAttribute("default-stream-type");if(Ji.includes(a))return a}return null},[n.MEDIA_TIME_IS_LIVE](i){const e=i.media;if(!e)return!1;const t=i.getAttribute(n.MEDIA_STREAM_TYPE)==="live",a=e.seekable;if(t&&!a)return!0;if(!(a!=null&&a.length))return!1;let s=10,r=i.getAttribute("livethreshold");r!==null&&(r=Number(r),Number.isNaN(r)||(s=r));const o=e.currentTime,d=a.end(a.length-1);return o>d-s}},Yt=i=>i.media?i.media.paused:!0,qt=i=>!!(i.media&&i.media.muted),Zt=i=>{const e=i.media;return e?e.volume:1},zt=i=>{let e="high";if(!i.media)return e;const{muted:t,volume:a}=i.media;return a===0||t?e="off":a<.5?e="low":a<.75&&(e="medium"),e},Xt=i=>{const e=i.media;return e?e.currentTime:0},jt=i=>{const e=i==null?void 0:i.media;return Number.isFinite(e==null?void 0:e.duration)?e.duration:NaN},Jt=i=>{var e;const t=i==null?void 0:i.media;if(!((e=t==null?void 0:t.seekable)!=null&&e.length))return;const a=t.seekable.start(0),s=t.seekable.end(t.seekable.length-1);if(!(!a&&!s))return[Number(a.toFixed(3)),Number(s.toFixed(3))]},ei=i=>{const e=i.media;return e?e.playbackRate:1},ie=i=>le(i.media,{kind:oe.SUBTITLES}),_e=i=>le(i.media,{kind:oe.CAPTIONS}),ct=i=>le(i.media,{kind:oe.SUBTITLES,mode:W.SHOWING}),Fe=i=>le(i.media,{kind:oe.CAPTIONS,mode:W.SHOWING}),ta=Object.values(n),ti=i=>{var e,t,a,s;let{observedAttributes:r}=i.constructor;!r&&((e=i.nodeName)!=null&&e.includes("-"))&&(l.customElements.upgrade(i),{observedAttributes:r}=i.constructor);const o=(s=(a=(t=i==null?void 0:i.getAttribute)==null?void 0:t.call(i,b.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:s.call(a,/\s+/);return Array.isArray(r||o)?(r||o).filter(d=>ta.includes(d)):[]},We=i=>!!ti(i).length,ia=async(i,e,t)=>(i.isConnected||await ii(0),t==null?i.removeAttribute(e):typeof t=="boolean"?t?i.setAttribute(e,""):i.removeAttribute(e):Number.isNaN(t)?i.removeAttribute(e):i.setAttribute(e,t)),aa=i=>{var e;return!!((e=i.closest)!=null&&e.call(i,'*[slot="media"]'))},j=(i,e)=>{if(aa(i))return;const t=(s,r)=>{var o,d;We(s)&&r(s);const{children:E=[]}=s??{},h=(d=(o=s==null?void 0:s.shadowRoot)==null?void 0:o.children)!=null?d:[];[...E,...h].forEach(A=>j(A,r))},a=i==null?void 0:i.nodeName.toLowerCase();if(a.includes("-")&&!We(i)){l.customElements.whenDefined(a).then(()=>{t(i,e)});return}t(i,e)},N=(i,e,t)=>{i.forEach(a=>{ti(a).includes(e)&&ia(a,e,t)})},na=(i,e,t)=>{j(i,e);const a=E=>{var h;const p=(h=E==null?void 0:E.composedPath()[0])!=null?h:E.target;e(p)},s=E=>{var h;const p=(h=E==null?void 0:E.composedPath()[0])!=null?h:E.target;t(p)};i.addEventListener(m.REGISTER_MEDIA_STATE_RECEIVER,a),i.addEventListener(m.UNREGISTER_MEDIA_STATE_RECEIVER,s);const r=E=>{E.forEach(h=>{const{addedNodes:p=[],removedNodes:A=[],type:D,target:L,attributeName:de}=h;D==="childList"?(Array.prototype.forEach.call(p,$=>j($,e)),Array.prototype.forEach.call(A,$=>j($,t))):D==="attributes"&&de===b.MEDIA_CHROME_ATTRIBUTES&&(We(L)?e(L):t(L))})},o=new MutationObserver(r);return o.observe(i,{childList:!0,attributes:!0,subtree:!0}),()=>{j(i,t),o.disconnect(),i.removeEventListener(m.REGISTER_MEDIA_STATE_RECEIVER,a),i.removeEventListener(m.UNREGISTER_MEDIA_STATE_RECEIVER,s)}};let he;const et=()=>{var i,e;return he||(he=(e=(i=c)==null?void 0:i.createElement)==null?void 0:e.call(i,"video"),he)},sa=async(i=et())=>{if(!i)return!1;const e=i.volume;return i.volume=e/2+.1,await ii(0),i.volume!==e},ii=i=>new Promise(e=>setTimeout(e,i)),ra=(i=et())=>typeof(i==null?void 0:i.requestPictureInPicture)=="function",oa=ra();let ae;const la=sa().then(i=>(ae=i,ae)),da=!!l.WebKitPlaybackTargetAvailabilityEvent,ca=!!l.chrome,ua=(i=et())=>{let e=c[g.enabled];return!e&&i&&(e="webkitSupportsFullscreen"in i),e},ut=ua(),Ea=Object.freeze({length:0,start(i){const e=i>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(i){const e=i>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});function ma(i=Ea){return Array.from(i).map((e,t)=>[Number(i.start(t).toFixed(3)),Number(i.end(t).toFixed(3))].join(":")).join(" ")}l.customElements.get("media-controller")||l.customElements.define("media-controller",Kt);var ai=Kt,ni=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)},ha=(i,e,t)=>(ni(i,e,"read from private field"),t?t.call(i):e.get(i)),pa=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},ba=(i,e,t,a)=>(ni(i,e,"write to private field"),a?a.call(i,t):e.set(i,t),t),ge;const si=c.createElement("template"),Et=`
  height: var(--thumb-height);
  width: var(--media-range-thumb-width, 10px);
  border: var(--media-range-thumb-border, none);
  border-radius: var(--media-range-thumb-border-radius, 10px);
  background: var(--media-range-thumb-background, #fff);
  box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
  cursor: pointer;
  transition: var(--media-range-thumb-transition, none);
  transform: var(--media-range-thumb-transform, none);
  opacity: var(--media-range-thumb-opacity, 1);
`,Oe=`
  width: var(--media-range-track-width, 100%);
  min-width: 40px;
  height: var(--track-height);
  border: var(--media-range-track-border, none);
  outline: var(--media-range-track-outline);
  outline-offset: var(--media-range-track-outline-offset);
  border-radius: var(--media-range-track-border-radius, 0);
  background: var(--media-range-track-progress-internal, var(--media-range-track-background, #eee));
  box-shadow: var(--media-range-track-box-shadow, none);
  transition: var(--media-range-track-transition, none);
  transform: translate(var(--media-range-track-translate-x, 0), var(--media-range-track-translate-y, 0));
  cursor: pointer;
`;si.innerHTML=`
  <style>
    :host {
      --thumb-height: var(--media-range-thumb-height, 10px);
      --track-height: var(--media-range-track-height, 4px);
      --media-range-padding: var(--media-control-padding, 10px);
      --_media-range-padding: var(--media-range-padding, 10px);

      vertical-align: middle;
      box-sizing: border-box;
      display: inline-block;
      position: relative;
      background: var(--media-control-background, rgba(20,20,30, 0.7));
      transition: background 0.15s linear;
      width: 100px;
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      pointer-events: auto;
      
      font-size: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgba(50,50,60, 0.7));
    }

    #container {
      position: relative;
      height: 100%;
    }

    input[type=range] {
      
      -webkit-appearance: none; 
      background: transparent; 

      
      min-height: 100%;
      width: var(--media-range-track-width, 100%); 

      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      ${Et}
      
      margin-top: calc(calc(0px - var(--thumb-height) + var(--track-height)) / 2);
    }

    
    input[type=range]::-moz-range-thumb {
      ${Et}
      translate: var(--media-range-track-translate-x, 0) var(--media-range-track-translate-y, 0);
    }

    input[type=range]::-webkit-slider-runnable-track { ${Oe} }
    input[type=range]::-moz-range-track { ${Oe} }
    input[type=range]::-ms-track {
      
      width: 100%;
      cursor: pointer;
      
      background: transparent;
      border-color: transparent;
      color: transparent;

      ${Oe}
    }

    #background,
    #pointer {
      min-width: 40px;
      width: var(--media-range-track-width, 100%);
      height: var(--track-height);
      border-radius: var(--media-range-track-border-radius, 0);
      position: absolute;
      top: 50%;
      transform: translate(var(--media-range-track-translate-x, 0px), calc(var(--media-range-track-translate-y, 0px) - 50%));
      background: var(--media-range-track-background, #333);
    }

    #pointer {
      min-width: auto;
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    :host(:hover) #pointer {
      transition: visibility .5s, opacity .5s;
      visibility: visible;
      opacity: 1;
    }

    #hoverzone {
      
      z-index: 1;
      display: var(--media-time-range-hover-display, none);
      position: absolute;
      width: 100%;
      bottom: var(--media-time-range-hover-bottom, -5px);
      height: var(--media-time-range-hover-height, max(calc(100% + 5px), 20px));
    }

    #range {
      z-index: 2;
      position: relative;
      height: var(--media-range-track-height, 4px);
    }

    
    :host-context([media-keyboard-control]):host(:focus),
    :host-context([media-keyboard-control]):host(:focus-within) {
      box-shadow: inset 0 0 0 2px rgba(27, 127, 204, 0.9);
    }
    :host-context([media-keyboard-control]) input[type=range]:focus-visible {
      box-shadow: none;
    }
    input[type=range]:focus-visible {
      box-shadow: inset 0 0 0 2px rgba(27, 127, 204, 0.9);
    }
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    input[type=range]:disabled::-webkit-slider-thumb {
      background-color: #777;
    }

    input[type=range]:disabled::-webkit-slider-runnable-track {
      background-color: #777;
    }
  </style>
  <div id="container">
    <div id="background"></div>
    <div id="pointer"></div>
    <div id="hoverzone"></div>
    <input id="range" type="range" min="0" max="1000" step="any" value="0">
  </div>
`;class ri extends l.HTMLElement{constructor(){super(),pa(this,ge,void 0),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(si.content.cloneNode(!0)),this.container=this.shadowRoot.querySelector("#container"),this.range=this.shadowRoot.querySelector("#range"),this.range.addEventListener("input",this.updateBar.bind(this)),ba(this,ge,parseInt(getComputedStyle(this).getPropertyValue("--media-range-thumb-width")||"10",10))}static get observedAttributes(){return["disabled","aria-disabled",b.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,a){var s,r;if(e===b.MEDIA_CONTROLLER){if(t){const o=c.getElementById(t);(s=o==null?void 0:o.unassociateElement)==null||s.call(o,this)}if(a){const o=c.getElementById(a);(r=o==null?void 0:o.associateElement)==null||r.call(o,this)}}else(e==="disabled"||e==="aria-disabled"&&t!==a)&&(a==null?this.range.removeAttribute(e):this.range.setAttribute(e,a))}connectedCallback(){var e;const t=this.getAttribute(b.MEDIA_CONTROLLER);if(t){const a=c.getElementById(t);(e=a==null?void 0:a.associateElement)==null||e.call(a,this)}this.updateBar()}disconnectedCallback(){var e;const t=this.getAttribute(b.MEDIA_CONTROLLER);if(t){const a=c.getElementById(t);(e=a==null?void 0:a.unassociateElement)==null||e.call(a,this)}}updatePointerBar(e){const t=this.range.getBoundingClientRect();let a=(e.clientX-t.left)/t.width;a=Math.max(0,Math.min(1,a));const{style:s}=K(this.shadowRoot,"#pointer");s.setProperty("width",`${a*t.width}px`)}updateBar(){const e=this.getBarColors();let t="linear-gradient(to right, ",a=0;e.forEach(r=>{r[1]<a||(t=t+`${r[0]} ${a}%, ${r[0]} ${r[1]}%,`,a=r[1])}),t=t.slice(0,t.length-1)+")";const{style:s}=K(this.shadowRoot,"#range");s.setProperty("--media-range-track-progress-internal",t)}getBarColors(){const e=this.range,t=e.value-e.min,a=e.max-e.min,s=t/a*100;let r=0;return e.value>e.min&&e.value<e.max&&(r=ha(this,ge)*(.5-s/100)/e.offsetWidth*100),[["var(--media-range-bar-color, #fff)",s+r],["transparent",100]]}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}ge=new WeakMap;l.customElements.get("media-chrome-range")||l.customElements.define("media-chrome-range",ri);var oi=ri;const li=c.createElement("template");li.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: inline-flex;
      color: var(--media-icon-color, #eee);
      --media-loading-icon-width: 44px;
    }

    media-time-range,
    ::slotted(media-time-range),
    ::slotted(media-progress-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }
  </style>

  <slot></slot>
`;let va=class extends l.HTMLElement{static get observedAttributes(){return[b.MEDIA_CONTROLLER]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(li.content.cloneNode(!0))}attributeChangedCallback(e,t,a){var s,r;if(e===b.MEDIA_CONTROLLER){if(t){const o=c.getElementById(t);(s=o==null?void 0:o.unassociateElement)==null||s.call(o,this)}if(a){const o=c.getElementById(a);(r=o==null?void 0:o.associateElement)==null||r.call(o,this)}}}connectedCallback(){var e;const t=this.getAttribute(b.MEDIA_CONTROLLER);if(t){const a=c.getElementById(t);(e=a==null?void 0:a.associateElement)==null||e.call(a,this)}}disconnectedCallback(){var e;const t=this.getAttribute(b.MEDIA_CONTROLLER);if(t){const a=c.getElementById(t);(e=a==null?void 0:a.unassociateElement)==null||e.call(a,this)}}};l.customElements.get("media-control-bar")||l.customElements.define("media-control-bar",va);const di=c.createElement("template");di.innerHTML=`
  <style>
    :host {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      background: var(--media-control-background, rgba(20,20,30, 0.7));
  
      padding: var(--media-control-padding, 10px);

      font-size: 14px;
      line-height: var(--media-text-content-height, var(--media-control-height, 24px));
      font-family: Arial, sans-serif;
      text-align: center;
      color: #ffffff;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgba(27, 127, 204, 0.9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <span id="container">
  <slot></slot>
  </span>
`;class ci extends l.HTMLElement{static get observedAttributes(){return[b.MEDIA_CONTROLLER]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(di.content.cloneNode(!0)),this.container=this.shadowRoot.querySelector("#container")}attributeChangedCallback(e,t,a){var s,r;if(e===b.MEDIA_CONTROLLER){if(t){const o=c.getElementById(t);(s=o==null?void 0:o.unassociateElement)==null||s.call(o,this)}if(a){const o=c.getElementById(a);(r=o==null?void 0:o.associateElement)==null||r.call(o,this)}}}connectedCallback(){var e;const t=this.getAttribute(b.MEDIA_CONTROLLER);if(t){const a=c.getElementById(t);(e=a==null?void 0:a.associateElement)==null||e.call(a,this)}}disconnectedCallback(){var e;const t=this.getAttribute(b.MEDIA_CONTROLLER);if(t){const a=c.getElementById(t);(e=a==null?void 0:a.unassociateElement)==null||e.call(a,this)}}}l.customElements.get("media-text-display")||l.customElements.define("media-text-display",ci);var ke=ci;class Aa extends ke{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_CURRENT_TIME]}constructor(){super(),this.container.innerHTML=U(0)}attributeChangedCallback(e,t,a){e===n.MEDIA_CURRENT_TIME&&(this.container.innerHTML=U(a)),super.attributeChangedCallback(e,t,a)}}l.customElements.get("media-current-time-display")||l.customElements.define("media-current-time-display",Aa);class _a extends ke{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_DURATION]}constructor(){super(),this.container.innerHTML=U(0)}attributeChangedCallback(e,t,a){e===n.MEDIA_DURATION&&(this.container.innerHTML=U(a)),super.attributeChangedCallback(e,t,a)}}l.customElements.get("media-duration-display")||l.customElements.define("media-duration-display",_a);const ga="&nbsp;/&nbsp;",mt=(i,{timesSep:e=ga}={})=>{var t,a,s;const r=i.getAttribute("remaining")!=null,o=i.getAttribute("show-duration")!=null,d=(t=i.mediaCurrentTime)!=null?t:0,E=(s=(a=i.mediaDuration)!=null?a:i.mediaSeekableEnd)!=null?s:0,h=U(r?0-(E-d):d);return o?`${h}${e}${U(E)}`:h},fa="video not loaded, unknown time.",Ia=i=>{const e=i.mediaCurrentTime,t=i.mediaDuration||i.mediaSeekableEnd;if(e==null||t==null){i.setAttribute("aria-valuetext",fa);return}const a=i.hasAttribute("remaining"),s=i.hasAttribute("show-duration"),r=te(a?0-(t-e):e);if(!s){i.setAttribute("aria-valuetext",r);return}const o=te(t),d=`${r} of ${o}`;i.setAttribute("aria-valuetext",d)};let Ma=class extends ke{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_CURRENT_TIME,n.MEDIA_DURATION,n.MEDIA_SEEKABLE,"remaining","show-duration","disabled"]}constructor(){super(),this.container.innerHTML=mt(this)}connectedCallback(){this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",x.PLAYBACK_TIME()),super.connectedCallback()}disconnectedCallback(){this.disable()}attributeChangedCallback(e,t,a){if([n.MEDIA_CURRENT_TIME,n.MEDIA_DURATION,n.MEDIA_SEEKABLE,"remaining","show-duration"].includes(e)){const s=mt(this);Ia(this),this.container.innerHTML=s}else e==="disabled"&&a!==t&&(a==null?this.enable():this.disable());super.attributeChangedCallback(e,t,a)}enable(){this.setAttribute("tabindex",0)}disable(){this.removeAttribute("tabindex")}get mediaDuration(){const e=this.getAttribute(n.MEDIA_DURATION);return e!=null?+e:void 0}get mediaCurrentTime(){const e=this.getAttribute(n.MEDIA_CURRENT_TIME);return e!=null?+e:void 0}get mediaSeekable(){const e=this.getAttribute(n.MEDIA_SEEKABLE);if(e)return e.split(":").map(t=>+t)}get mediaSeekableEnd(){var e;const[,t]=(e=this.mediaSeekable)!=null?e:[];return t}get mediaSeekableStart(){var e;const[t]=(e=this.mediaSeekable)!=null?e:[];return t}};l.customElements.get("media-time-display")||l.customElements.define("media-time-display",Ma);const Ta=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,Sa=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,ui=c.createElement("template");ui.innerHTML=`
  <style>
  :host([aria-checked="true"]) slot:not([name=on]) > *,
  :host([aria-checked="true"]) ::slotted(:not([slot=on])) {
    display: none !important;
  }

  
  :host(:not([aria-checked="true"])) slot:not([name=off]) > *, 
  :host(:not([aria-checked="true"])) ::slotted(:not([slot=off])) {
    display: none !important;
  }
  </style>

  <slot name="on">${Ta}</slot>
  <slot name="off">${Sa}</slot>
`;const ht=i=>{i.setAttribute("aria-checked",Wt(i))};class La extends C{static get observedAttributes(){return[...super.observedAttributes,"no-subtitles-fallback","default-showing",n.MEDIA_CAPTIONS_LIST,n.MEDIA_CAPTIONS_SHOWING,n.MEDIA_SUBTITLES_LIST,n.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:ui,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",x.CLOSED_CAPTIONS()),ht(this)}attributeChangedCallback(e,t,a){if([n.MEDIA_CAPTIONS_SHOWING,n.MEDIA_SUBTITLES_SHOWING].includes(e)&&ht(this),this.hasAttribute("default-showing")&&this.getAttribute("aria-checked")!=="true"){const s=!this.hasAttribute("no-subtitles-fallback");if((s?[n.MEDIA_CAPTIONS_LIST,n.MEDIA_SUBTITLES_LIST]:[n.MEDIA_CAPTIONS_LIST]).includes(e)){const o=!!this.getAttribute(n.MEDIA_CAPTIONS_LIST)||!!(s&&this.getAttribute(n.MEDIA_SUBTITLES_LIST));this._captionsReady!==o&&(this._captionsReady=o,this._captionsReady&&this.handleClick())}}super.attributeChangedCallback(e,t,a)}handleClick(){Qt(this)}}l.customElements.get("media-captions-button")||l.customElements.define("media-captions-button",La);const Qe="30",Ca=`<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">${Qe}</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg>`,Ei=c.createElement("template");Ei.innerHTML=`  
  <slot name="forward">${Ca}</slot>
`;const Da=0,pt=i=>{const e=Math.abs(+i.getAttribute("seek-offset")),t=S.SEEK_FORWARD_N_SECS({seekOffset:e});i.setAttribute("aria-label",t)},bt=i=>{const e=Nt(i,"forward"),t=i.getAttribute("seek-offset");Pt(e,t)};let ya=class extends C{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_CURRENT_TIME,"seek-offset"]}constructor(e={}){super({slotTemplate:Ei,...e})}connectedCallback(){this.hasAttribute("seek-offset")||this.setAttribute("seek-offset",Qe),pt(this),bt(this),super.connectedCallback()}attributeChangedCallback(e,t,a){e==="seek-offset"&&(a==null&&this.setAttribute("seek-offset",Qe),bt(this),pt(this)),super.attributeChangedCallback(e,t,a)}handleClick(){const e=this.getAttribute(n.MEDIA_CURRENT_TIME),t=+this.getAttribute("seek-offset"),s=(e&&!Number.isNaN(+e)?+e:Da)+t,r=new l.CustomEvent(m.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:s});this.dispatchEvent(r)}};l.customElements.get("media-seek-forward-button")||l.customElements.define("media-seek-forward-button",ya);const ka=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,Ra=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,mi=c.createElement("template");mi.innerHTML=`
  <style>
  :host([${n.MEDIA_IS_FULLSCREEN}]) slot:not([name=exit]) > *,
  :host([${n.MEDIA_IS_FULLSCREEN}]) ::slotted(:not([slot=exit])) {
    display: none !important;
  }

  
  :host(:not([${n.MEDIA_IS_FULLSCREEN}])) slot:not([name=enter]) > *,
  :host(:not([${n.MEDIA_IS_FULLSCREEN}])) ::slotted(:not([slot=enter])) {
    display: none !important;
  }
  </style>

  <slot name="enter">${ka}</slot>
  <slot name="exit">${Ra}</slot>
`;const vt=i=>{const t=i.getAttribute(n.MEDIA_IS_FULLSCREEN)!=null?S.EXIT_FULLSCREEN():S.ENTER_FULLSCREEN();i.setAttribute("aria-label",t)};let wa=class extends C{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_IS_FULLSCREEN,n.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(e={}){super({slotTemplate:mi,...e})}connectedCallback(){vt(this),super.connectedCallback()}attributeChangedCallback(e,t,a){e===n.MEDIA_IS_FULLSCREEN&&vt(this),super.attributeChangedCallback(e,t,a)}handleClick(){const e=this.getAttribute(n.MEDIA_IS_FULLSCREEN)!=null?m.MEDIA_EXIT_FULLSCREEN_REQUEST:m.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}};l.customElements.get("media-fullscreen-button")||l.customElements.define("media-fullscreen-button",wa);const{MEDIA_TIME_IS_LIVE:ne,MEDIA_PAUSED:At}=n,{MEDIA_SEEK_TO_LIVE_REQUEST:Ua,MEDIA_PLAY_REQUEST:xa}=m,Pa='<svg viewBox="0 0 8 16"><circle cx="4" cy="8" r="2"></circle></svg>',hi=c.createElement("template");hi.innerHTML=`
  <style>

  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    /* Override styles for icon-only buttons */
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${ne}]) slot[name=indicator] > *,
  :host([${ne}]) ::slotted([slot=indicator]) {
    fill: var(--media-live-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-indicator-color, rgb(255, 0, 0));
  }

  :host([${ne}]) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator">${Pa}</slot>
  <!-- 
    A new line between spacer and text creates inconsistent spacing
    between slotted items and default slots.
  -->
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;class Na extends C{static get observedAttributes(){return[...super.observedAttributes,At,ne]}constructor(e={}){super({slotTemplate:hi,...e}),this.setAttribute("aria-label","Seek to Live")}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a)}handleClick(){this.getAttribute(ne)===null&&(this.dispatchEvent(new l.CustomEvent(Ua,{composed:!0,bubbles:!0})),this.getAttribute(At)!==null&&this.dispatchEvent(new l.CustomEvent(xa,{composed:!0,bubbles:!0})))}}l.customElements.get("media-live-button")||l.customElements.define("media-live-button",Na);const Oa=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,_t=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,$a=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,pi=c.createElement("template");pi.innerHTML=`
  <style>
  
  :host(:not([${n.MEDIA_VOLUME_LEVEL}])) slot:not([name=high]) > *, 
  :host(:not([${n.MEDIA_VOLUME_LEVEL}])) ::slotted(:not([slot=high])),
  :host([${n.MEDIA_VOLUME_LEVEL}=high]) slot:not([name=high]) > *, 
  :host([${n.MEDIA_VOLUME_LEVEL}=high]) ::slotted(:not([slot=high])) {
    display: none !important;
  }

  :host([${n.MEDIA_VOLUME_LEVEL}=off]) slot:not([name=off]) > *, 
  :host([${n.MEDIA_VOLUME_LEVEL}=off]) ::slotted(:not([slot=off])) {
    display: none !important;
  }

  :host([${n.MEDIA_VOLUME_LEVEL}=low]) slot:not([name=low]) > *, 
  :host([${n.MEDIA_VOLUME_LEVEL}=low]) ::slotted(:not([slot=low])) {
    display: none !important;
  }

  :host([${n.MEDIA_VOLUME_LEVEL}=medium]) slot:not([name=medium]) > *, 
  :host([${n.MEDIA_VOLUME_LEVEL}=medium]) ::slotted(:not([slot=medium])) {
    display: none !important;
  }
  </style>

  <slot name="off">${Oa}</slot>
  <slot name="low">${_t}</slot>
  <slot name="medium">${_t}</slot>
  <slot name="high">${$a}</slot>
`;const gt=i=>{const t=i.getAttribute(n.MEDIA_VOLUME_LEVEL)==="off"?S.UNMUTE():S.MUTE();i.setAttribute("aria-label",t)};let Ba=class extends C{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_VOLUME_LEVEL]}constructor(e={}){super({slotTemplate:pi,...e})}connectedCallback(){gt(this),super.connectedCallback()}attributeChangedCallback(e,t,a){e===n.MEDIA_VOLUME_LEVEL&&gt(this),super.attributeChangedCallback(e,t,a)}handleClick(){const e=this.getAttribute(n.MEDIA_VOLUME_LEVEL)==="off"?m.MEDIA_UNMUTE_REQUEST:m.MEDIA_MUTE_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}};l.customElements.get("media-mute-button")||l.customElements.define("media-mute-button",Ba);const ft=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,bi=c.createElement("template");bi.innerHTML=`
  <style>
  :host([${n.MEDIA_IS_PIP}]) slot:not([name=exit]) > *, 
  :host([${n.MEDIA_IS_PIP}]) ::slotted(:not([slot=exit])) {
    display: none !important;
  }

  
  :host(:not([${n.MEDIA_IS_PIP}])) slot:not([name=enter]) > *, 
  :host(:not([${n.MEDIA_IS_PIP}])) ::slotted(:not([slot=enter])) {
    display: none !important;
  }
  </style>

  <slot name="enter">${ft}</slot>
  <slot name="exit">${ft}</slot>
`;const It=i=>{const t=i.getAttribute(n.MEDIA_IS_PIP)!=null?S.EXIT_PIP():S.ENTER_PIP();i.setAttribute("aria-label",t)};class Ha extends C{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_IS_PIP,n.MEDIA_PIP_UNAVAILABLE]}constructor(e={}){super({slotTemplate:bi,...e})}connectedCallback(){It(this),super.connectedCallback()}attributeChangedCallback(e,t,a){e===n.MEDIA_IS_PIP&&It(this),super.attributeChangedCallback(e,t,a)}handleClick(){const e=this.getAttribute(n.MEDIA_IS_PIP)!=null?m.MEDIA_EXIT_PIP_REQUEST:m.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}}l.customElements.get("media-pip-button")||l.customElements.define("media-pip-button",Ha);const Va=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,Fa=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,vi=c.createElement("template");vi.innerHTML=`
  <style>
  :host([${n.MEDIA_PAUSED}]) slot[name=pause] > *, 
  :host([${n.MEDIA_PAUSED}]) ::slotted([slot=pause]) {
    display: none !important;
  }

  :host(:not([${n.MEDIA_PAUSED}])) slot[name=play] > *, 
  :host(:not([${n.MEDIA_PAUSED}])) ::slotted([slot=play]) {
    display: none !important;
  }
  </style>

  <slot name="play">${Va}</slot>
  <slot name="pause">${Fa}</slot>
`;const Mt=i=>{const t=i.getAttribute(n.MEDIA_PAUSED)!=null?S.PLAY():S.PAUSE();i.setAttribute("aria-label",t)};let Wa=class extends C{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_PAUSED]}constructor(e={}){super({slotTemplate:vi,...e})}connectedCallback(){Mt(this),super.connectedCallback()}attributeChangedCallback(e,t,a){e===n.MEDIA_PAUSED&&Mt(this),super.attributeChangedCallback(e,t,a)}handleClick(){const e=this.getAttribute(n.MEDIA_PAUSED)!=null?m.MEDIA_PLAY_REQUEST:m.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}};l.customElements.get("media-play-button")||l.customElements.define("media-play-button",Wa);const Tt=[1,1.25,1.5,1.75,2],pe=1,Ai=c.createElement("template");Ai.innerHTML=`
  <span id="container"></span>
`;let Qa=class extends C{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_PLAYBACK_RATE,"rates"]}constructor(e={}){super({slotTemplate:Ai,...e}),this._rates=Tt,this.container=this.shadowRoot.querySelector("#container"),this.container.innerHTML=`${pe}x`}attributeChangedCallback(e,t,a){if(e==="rates"){const s=(a??"").trim().split(/\s*,?\s+/).map(r=>Number(r)).filter(r=>!Number.isNaN(r)).sort((r,o)=>r-o);this._rates=s.length?s:Tt;return}if(e===n.MEDIA_PLAYBACK_RATE){const s=a?+a:Number.NaN,r=Number.isNaN(s)?pe:s;this.container.innerHTML=`${r}x`,this.setAttribute("aria-label",x.PLAYBACK_RATE({playbackRate:r}));return}super.attributeChangedCallback(e,t,a)}handleClick(){var e,t;const a=+this.getAttribute(n.MEDIA_PLAYBACK_RATE)||pe,s=(t=(e=this._rates.find(o=>o>a))!=null?e:this._rates[0])!=null?t:pe,r=new l.CustomEvent(m.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:s});this.dispatchEvent(r)}};l.customElements.get("media-playback-rate-button")||l.customElements.define("media-playback-rate-button",Qa);const _i=c.createElement("template");_i.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: inline-block;
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-background-position, var(--media-object-position, center));
      background-size: var(--media-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img aria-hidden="true" id="image"/>
`;const Ga=i=>{i.style.removeProperty("background-image")},Ka=(i,e)=>{i.style["background-image"]=`url('${e}')`};class Ya extends l.HTMLElement{static get observedAttributes(){return["placeholder-src","src"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(_i.content.cloneNode(!0)),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,a){e==="src"&&(a==null?this.image.removeAttribute("src"):this.image.setAttribute("src",a)),e==="placeholder-src"&&(a==null?Ga(this.image):Ka(this.image,a))}}l.customElements.get("media-poster-image")||l.customElements.define("media-poster-image",Ya);var tt=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)},_=(i,e,t)=>(tt(i,e,"read from private field"),t?t.call(i):e.get(i)),I=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},R=(i,e,t,a)=>(tt(i,e,"write to private field"),a?a.call(i,t):e.set(i,t),t),z=(i,e,t)=>(tt(i,e,"access private method"),t),J,fe,ee,Ce,De,Ie,Ge,Me,Q,se,Ke,ye,Re,Te,Ye,qe,gi;const qa="video not loaded, unknown time.",$e=i=>{const e=i.range,t=te(+e.value),a=te(+e.max),s=t&&a?`${t} of ${a}`:qa;e.setAttribute("aria-valuetext",s)},fi=c.createElement("template");fi.innerHTML=`
  <style>
    :host {
      --media-preview-background-color: rgba(20,20,30, .5);
      --media-preview-background: var(--media-control-background,
        var(--media-preview-background-color));
      --media-preview-border-radius: 3px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
      color: #fff;
    }

    #preview-rail,
    #current-rail {
      
      width: 1%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
    }

    [part~="box"] {
      
      position: absolute;
      bottom: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="preview-box"] {
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      transition: visibility 0s .25s;
      background: var(--media-preview-time-background, var(--media-preview-background));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgba(0,0,0, .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${n.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
    :host([${n.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
      transition-delay: 0s;
      visibility: visible;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display) {
      color: unset;
      min-width: 0;
      
      transition: min-width 0s .25s, border-radius 0s .25s;
      background: var(--media-preview-time-background, var(--media-preview-background));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 1px 10px 0);
      margin: var(--media-preview-time-margin, 0 0 10px);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgba(0,0,0, .75));
    }

    :host([${n.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${n.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: 0s;
      min-width: 100%;
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
    }

    :host([${n.MEDIA_PREVIEW_IMAGE}]:hover) [part~="preview-box"],
    :host([${n.MEDIA_PREVIEW_TIME}]:hover) [part~="preview-box"] {
      transition: visibility .5s, opacity .5s;
      visibility: visible;
      opacity: 1;
    }

    :host([${n.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-time-display></media-preview-time-display>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;let Ii=class extends oi{constructor(){super(),I(this,Ie),I(this,Te),I(this,qe),I(this,J,void 0),I(this,fe,void 0),I(this,ee,void 0),I(this,Ce,void 0),I(this,De,void 0),I(this,Me,t=>{if([..._(this,J)].some(p=>t.composedPath().includes(p)))return;this.updatePointerBar(t);const a=+this.getAttribute(n.MEDIA_DURATION);if(!a)return;const s=this.range.getBoundingClientRect();let r=(t.clientX-s.left)/s.width;r=Math.max(0,Math.min(1,r));const o=z(this,Ie,Ge).call(this,_(this,fe),r),{style:d}=K(this.shadowRoot,"#preview-rail");d.transform=`translateX(${o})`;const E=r*a,h=new l.CustomEvent(m.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:E});this.dispatchEvent(h)}),I(this,Q,!1),I(this,se,t=>{(!t.composedPath().includes(this)||[..._(this,J)].some(a=>t.composedPath().includes(a)))&&(l.removeEventListener("pointermove",_(this,se)),R(this,Q,!1),_(this,ye).call(this))}),I(this,Ke,()=>{l.addEventListener("pointermove",_(this,Me),!1)}),I(this,ye,()=>{l.removeEventListener("pointermove",_(this,Me));const t=new l.CustomEvent(m.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:null});this.dispatchEvent(t)}),I(this,Re,()=>{const t=this.getAttribute(n.MEDIA_DURATION);!_(this,Q)&&t&&(R(this,Q,!0),_(this,Ke).call(this),l.addEventListener("pointermove",_(this,se),!1))}),this.container.appendChild(fi.content.cloneNode(!0)),this.range.addEventListener("input",()=>{cancelAnimationFrame(this._refreshId);const a=this.range.value,s=new l.CustomEvent(m.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(s)}),this._refreshBar=()=>{const t=(performance.now()-this._updateTimestamp)/1e3;this.range.value=this.mediaCurrentTime+t*this.mediaPlaybackRate,this.updateBar(),this.updateCurrentBox(),this._refreshId=requestAnimationFrame(this._refreshBar)},R(this,J,this.shadowRoot.querySelectorAll('[part~="box"]')),R(this,fe,this.shadowRoot.querySelector('[part~="preview-box"]')),R(this,ee,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);R(this,Ce,parseInt(e.getPropertyValue("--media-box-padding-left"))),R(this,De,parseInt(e.getPropertyValue("--media-box-padding-right"))),z(this,Te,Ye).call(this)}static get observedAttributes(){return[...super.observedAttributes,"thumbnails","disabled",n.MEDIA_PAUSED,n.MEDIA_DURATION,n.MEDIA_SEEKABLE,n.MEDIA_CURRENT_TIME,n.MEDIA_PREVIEW_IMAGE,n.MEDIA_PREVIEW_TIME,n.MEDIA_BUFFERED,n.MEDIA_PLAYBACK_RATE,n.MEDIA_LOADING]}connectedCallback(){this.range.setAttribute("aria-label",x.SEEK()),super.connectedCallback()}disconnectedCallback(){cancelAnimationFrame(this._refreshId),super.disconnectedCallback()}attributeChangedCallback(e,t,a){var s,r,o,d,E;(e===n.MEDIA_CURRENT_TIME||e===n.MEDIA_PAUSED||e===n.MEDIA_LOADING)&&(this._updateTimestamp=performance.now(),this.range.value=this.mediaCurrentTime,$e(this),this.updateBar(),this.updateCurrentBox(),cancelAnimationFrame(this._refreshId),!this.mediaPaused&&!this.mediaLoading&&(this._refreshId=requestAnimationFrame(this._refreshBar))),e===n.MEDIA_DURATION&&(this.range.max=(r=(s=this.mediaSeekableEnd)!=null?s:this.mediaDuration)!=null?r:1e3,$e(this),this.updateBar(),this.updateCurrentBox()),e===n.MEDIA_SEEKABLE&&(this.range.min=(o=this.mediaSeekableStart)!=null?o:0,this.range.max=(E=(d=this.mediaSeekableEnd)!=null?d:this.mediaDuration)!=null?E:1e3,$e(this),this.updateBar()),e===n.MEDIA_BUFFERED&&this.updateBar(),e==="disabled"&&(a==null?z(this,Te,Ye).call(this):z(this,qe,gi).call(this)),super.attributeChangedCallback(e,t,a)}get mediaPaused(){return this.hasAttribute(n.MEDIA_PAUSED)}get mediaLoading(){return this.hasAttribute(n.MEDIA_LOADING)}get mediaDuration(){const e=this.getAttribute(n.MEDIA_DURATION);return e!=null?+e:void 0}get mediaCurrentTime(){const e=this.getAttribute(n.MEDIA_CURRENT_TIME);return e!=null?+e:void 0}get mediaPlaybackRate(){const e=this.getAttribute(n.MEDIA_PLAYBACK_RATE);return e!=null?+e:1}get mediaBuffered(){const e=this.getAttribute(n.MEDIA_BUFFERED);return e?e.split(" ").map(t=>t.split(":").map(a=>+a)):[]}get mediaSeekable(){const e=this.getAttribute(n.MEDIA_SEEKABLE);if(e)return e.split(":").map(t=>+t)}get mediaSeekableEnd(){var e;const[,t]=(e=this.mediaSeekable)!=null?e:[];return t}get mediaSeekableStart(){var e;const[t]=(e=this.mediaSeekable)!=null?e:[];return t}getBarColors(){var e;let t=super.getBarColors();const{range:a}=this,s=a.max-a.min,r=this.mediaBuffered;if(!r.length||!Number.isFinite(s)||s<=0)return t;const o=this.mediaCurrentTime,[,d=a.min]=(e=r.find(([p,A])=>p<=o&&o<=A))!=null?e:[],h=(d-a.min)/s*100;return t.splice(1,0,["var(--media-time-buffered-color, rgba(255,255,255, .4))",h]),t}updateCurrentBox(){if(!_(this,ee).assignedElements().length)return;const e=this.range.value/(this.range.max-this.range.min),t=z(this,Ie,Ge).call(this,_(this,ee),e),{style:a}=K(this.shadowRoot,"#current-rail");a.transform=`translateX(${t})`}};J=new WeakMap;fe=new WeakMap;ee=new WeakMap;Ce=new WeakMap;De=new WeakMap;Ie=new WeakSet;Ge=function(i,e){var t;let a=`${e*100*100}%`;const s=i.offsetWidth;if(!s)return a;const r=(t=this.getAttribute("bounds")?je(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?t:this,o=this.range.getBoundingClientRect(),d=r.getBoundingClientRect(),E=(_(this,Ce)-(o.left-d.left-s/2))/o.width*100,h=(d.right-o.left-s/2-_(this,De))/o.width*100;return Number.isNaN(E)||(a=`max(${E*100}%, ${a})`),Number.isNaN(h)||(a=`min(${a}, ${h*100}%)`),a};Me=new WeakMap;Q=new WeakMap;se=new WeakMap;Ke=new WeakMap;ye=new WeakMap;Re=new WeakMap;Te=new WeakSet;Ye=function(){this.addEventListener("pointermove",_(this,Re),!1)};qe=new WeakSet;gi=function(){l.removeEventListener("pointermove",_(this,se)),this.removeEventListener("pointermove",_(this,Re)),R(this,Q,!1),_(this,ye).call(this)};l.customElements.get("media-time-range")||l.customElements.define("media-time-range",Ii);var Za=Ii;class za extends Za{constructor(){super(),console.warn("MediaChrome: <media-progress-range> is deprecated. Use <media-time-range> instead.")}}l.customElements.get("media-progress-range")||l.customElements.define("media-progress-range",za);const Ze="30",Xa=`<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">${Ze}</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg>`,Mi=c.createElement("template");Mi.innerHTML=`  
  <slot name="backward">${Xa}</slot>
`;const ja=0,St=i=>{const e=Math.abs(+i.getAttribute("seek-offset")),t=S.SEEK_BACK_N_SECS({seekOffset:e});i.setAttribute("aria-label",t)},Lt=i=>{const e=Nt(i,"backward"),t=i.getAttribute("seek-offset");Pt(e,t)};let Ja=class extends C{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_CURRENT_TIME]}constructor(e={}){super({slotTemplate:Mi,...e})}connectedCallback(){this.hasAttribute("seek-offset")||this.setAttribute("seek-offset",Ze),St(this),Lt(this),super.connectedCallback()}attributeChangedCallback(e,t,a){e==="seek-offset"&&(a==null&&this.setAttribute("seek-offset",Ze),Lt(this),St(this)),super.attributeChangedCallback(e,t,a)}handleClick(){const e=this.getAttribute(n.MEDIA_CURRENT_TIME),t=+this.getAttribute("seek-offset"),a=e&&!Number.isNaN(+e)?+e:ja,s=Math.max(a-t,0),r=new l.CustomEvent(m.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:s});this.dispatchEvent(r)}};l.customElements.get("media-seek-backward-button")||l.customElements.define("media-seek-backward-button",Ja);class en extends ke{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,a){e===n.MEDIA_PREVIEW_TIME&&a!=null&&(this.container.textContent=U(a)),super.attributeChangedCallback(e,t,a)}}l.customElements.get("media-preview-time-display")||l.customElements.define("media-preview-time-display",en);const Ti=c.createElement("template");Ti.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: inline-block;
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async" />
`;class tn extends l.HTMLElement{static get observedAttributes(){return[b.MEDIA_CONTROLLER,"time",n.MEDIA_PREVIEW_IMAGE,n.MEDIA_PREVIEW_COORDS]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Ti.content.cloneNode(!0))}connectedCallback(){var e;const t=this.getAttribute(b.MEDIA_CONTROLLER);if(t){const a=c.getElementById(t);(e=a==null?void 0:a.associateElement)==null||e.call(a,this)}}disconnectedCallback(){var e;const t=this.getAttribute(b.MEDIA_CONTROLLER);if(t){const a=c.getElementById(t);(e=a==null?void 0:a.unassociateElement)==null||e.call(a,this)}}attributeChangedCallback(e,t,a){var s,r;if(["time",n.MEDIA_PREVIEW_IMAGE,n.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===b.MEDIA_CONTROLLER){if(t){const o=c.getElementById(t);(s=o==null?void 0:o.unassociateElement)==null||s.call(o,this)}if(a){const o=c.getElementById(a);(r=o==null?void 0:o.associateElement)==null||r.call(o,this)}}}update(){const e=this.getAttribute(n.MEDIA_PREVIEW_COORDS),t=this.getAttribute(n.MEDIA_PREVIEW_IMAGE);if(!(e&&t))return;const[a,s,r,o]=e.split(/\s+/).map(Ci=>+Ci),d=t.split("#")[0],E=getComputedStyle(this),{maxWidth:h,maxHeight:p,minWidth:A,minHeight:D}=E,L=Math.min(parseInt(h)/r,parseInt(p)/o),de=Math.max(parseInt(A)/r,parseInt(D)/o),$=L<1,B=$?L:de>1?de:1,{style:ce}=K(this.shadowRoot,":host"),ue=K(this.shadowRoot,"img").style,q=this.shadowRoot.querySelector("img"),it=$?"min":"max";ce.setProperty(`${it}-width`,"initial","important"),ce.setProperty(`${it}-height`,"initial","important"),ce.width=`${r*B}px`,ce.height=`${o*B}px`;const we=()=>{ue.width=`${this.imgWidth*B}px`,ue.height=`${this.imgHeight*B}px`,ue.display="block"};q.src!==d&&(q.onload=()=>{this.imgWidth=q.naturalWidth,this.imgHeight=q.naturalHeight,we()},q.src=d,we()),we(),ue.transform=`translate(-${a*B}px, -${s*B}px)`}}l.customElements.get("media-preview-thumbnail")||l.customElements.define("media-preview-thumbnail",tn);const Si=c.createElement("template"),an=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;Si.innerHTML=`
<style>
:host {
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=loading] > *,
:host ::slotted([slot=loading]) {
  opacity: 1;
  transition: opacity 0.15s;
}

:host(:not([is-loading])) slot[name=loading] > *, 
:host(:not([is-loading])) ::slotted([slot=loading]) {
  opacity: 0;
}

:host(:not([is-loading])) #status {
  display: none;
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-icon-width, 100px);
  height: var(--media-loading-icon-height);
  fill: var(--media-icon-color, #fff);
  vertical-align: middle;
}
</style>

<slot name="loading">${an}</slot>
<div id="status" role="status" aria-live="polite">${x.MEDIA_LOADING()}</div>
`;const nn=500;class sn extends l.HTMLElement{static get observedAttributes(){return[b.MEDIA_CONTROLLER,n.MEDIA_PAUSED,n.MEDIA_LOADING,"loading-delay"]}constructor(){super();const e=this.attachShadow({mode:"open"}),t=Si.content.cloneNode(!0);e.appendChild(t)}attributeChangedCallback(e,t,a){var s,r,o;if(e===n.MEDIA_LOADING||e===n.MEDIA_PAUSED){const d=this.getAttribute(n.MEDIA_PAUSED)!=null,E=this.getAttribute(n.MEDIA_LOADING)!=null,h=!d&&E;if(!h)this.loadingDelayHandle&&(clearTimeout(this.loadingDelayHandle),this.loadingDelayHandle=void 0),this.removeAttribute("is-loading");else if(!this.loadingDelayHandle&&h){const p=+((s=this.getAttribute("loading-delay"))!=null?s:nn);this.loadingDelayHandle=setTimeout(()=>{this.setAttribute("is-loading",""),this.loadingDelayHandle=void 0},p)}}else if(e===b.MEDIA_CONTROLLER){if(t){const d=c.getElementById(t);(r=d==null?void 0:d.unassociateElement)==null||r.call(d,this)}if(a){const d=c.getElementById(a);(o=d==null?void 0:d.associateElement)==null||o.call(d,this)}}}connectedCallback(){var e;const t=this.getAttribute(b.MEDIA_CONTROLLER);if(t){const a=c.getElementById(t);(e=a==null?void 0:a.associateElement)==null||e.call(a,this)}}disconnectedCallback(){var e;this.loadingDelayHandle&&(clearTimeout(this.loadingDelayHandle),this.loadingDelayHandle=void 0);const t=this.getAttribute(b.MEDIA_CONTROLLER);if(t){const a=c.getElementById(t);(e=a==null?void 0:a.unassociateElement)==null||e.call(a,this)}}}l.customElements.get("media-loading-indicator")||l.customElements.define("media-loading-indicator",sn);const Li=c.createElement("template");Li.innerHTML=`
  <style>
    :host {
    }
  </style>
  <slot></slot>
`;class rn extends l.HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Li.content.cloneNode(!0))}}l.customElements.get("media-title-bar")||l.customElements.define("media-title-bar",rn);const on=100,ln=i=>{var e;if(i.getAttribute(n.MEDIA_MUTED)!=null)return 0;const a=+((e=i.getAttribute(n.MEDIA_VOLUME))!=null?e:1);return Math.round(a*i.range.max)},dn=({value:i,max:e})=>`${Math.round(i/e*100)}%`;let cn=class extends oi{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_VOLUME,n.MEDIA_MUTED,n.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.max=on,this.range.addEventListener("input",()=>{const t=this.range.value/this.range.max,a=new l.CustomEvent(m.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(a)})}connectedCallback(){this.range.setAttribute("aria-label",x.VOLUME()),super.connectedCallback()}attributeChangedCallback(e,t,a){if(e===n.MEDIA_VOLUME||e===n.MEDIA_MUTED){const s=ln(this);this.range.value=s,this.range.setAttribute("aria-valuetext",dn(this.range)),this.updateBar()}super.attributeChangedCallback(e,t,a)}};l.customElements.get("media-volume-range")||l.customElements.define("media-volume-range",cn);class un extends ai{}l.customElements.get("media-chrome")||l.customElements.define("media-chrome",un);class En extends ai{constructor(){super(),console.warn("MediaChrome: <media-container> is deprecated. Use <media-controller>.")}}l.customElements.get("media-container")||l.customElements.define("media-container",En);const Ct={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox"},mn=i=>i.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),hn=(i,e)=>{if(Ct[i])return Ct[i];if(typeof e!=null&&!(typeof e=="boolean"&&!e))return/[A-Z]/.test(i)?mn(i):i},pn=(i,e)=>typeof i=="boolean"?"":i,v=(i={})=>Object.entries(i).reduce((e,[t,a])=>{const s=hn(t,a);if(!s)return e;const r=pn(a);return e[s]=r,e},{});u.forwardRef(({children:i,...e},t)=>u.createElement("media-chrome-button",v({...e,ref:t}),i));u.forwardRef(({children:i,...e},t)=>u.createElement("media-airplay-button",v({...e,ref:t}),i));u.forwardRef(({children:i,...e},t)=>u.createElement("media-cast-button",v({...e,ref:t}),i));u.forwardRef(({children:i,...e},t)=>u.createElement("media-gesture-receiver",v({...e,ref:t}),i));u.forwardRef(({children:i,...e},t)=>u.createElement("media-container-temp",v({...e,ref:t}),i));const bn=u.forwardRef(({children:i,...e},t)=>u.createElement("media-controller",v({...e,ref:t}),i));u.forwardRef(({children:i,...e},t)=>u.createElement("media-chrome-range",v({...e,ref:t}),i));const vn=u.forwardRef(({children:i,...e},t)=>u.createElement("media-control-bar",v({...e,ref:t}),i));u.forwardRef(({children:i,...e},t)=>u.createElement("media-text-display",v({...e,ref:t}),i));u.forwardRef(({children:i,...e},t)=>u.createElement("media-current-time-display",v({...e,ref:t}),i));u.forwardRef(({children:i,...e},t)=>u.createElement("media-duration-display",v({...e,ref:t}),i));const An=u.forwardRef(({children:i,...e},t)=>u.createElement("media-time-display",v({...e,ref:t}),i));u.forwardRef(({children:i,...e},t)=>u.createElement("media-captions-button",v({...e,ref:t}),i));const _n=u.forwardRef(({children:i,...e},t)=>u.createElement("media-seek-forward-button",v({...e,ref:t}),i)),gn=u.forwardRef(({children:i,...e},t)=>u.createElement("media-fullscreen-button",v({...e,ref:t}),i));u.forwardRef(({children:i,...e},t)=>u.createElement("media-live-button",v({...e,ref:t}),i));const fn=u.forwardRef(({children:i,...e},t)=>u.createElement("media-mute-button",v({...e,ref:t}),i));u.forwardRef(({children:i,...e},t)=>u.createElement("media-pip-button",v({...e,ref:t}),i));const In=u.forwardRef(({children:i,...e},t)=>u.createElement("media-play-button",v({...e,ref:t}),i)),Mn=u.forwardRef(({children:i,...e},t)=>u.createElement("media-playback-rate-button",v({...e,ref:t}),i));u.forwardRef(({children:i,...e},t)=>u.createElement("media-poster-image",v({...e,ref:t}),i));const Tn=u.forwardRef(({children:i,...e},t)=>u.createElement("media-time-range",v({...e,ref:t}),i));u.forwardRef(({children:i,...e},t)=>u.createElement("media-progress-range",v({...e,ref:t}),i));const Sn=u.forwardRef(({children:i,...e},t)=>u.createElement("media-seek-backward-button",v({...e,ref:t}),i));u.forwardRef(({children:i,...e},t)=>u.createElement("media-preview-time-display",v({...e,ref:t}),i));u.forwardRef(({children:i,...e},t)=>u.createElement("media-preview-thumbnail",v({...e,ref:t}),i));u.forwardRef(({children:i,...e},t)=>u.createElement("media-loading-indicator",v({...e,ref:t}),i));u.forwardRef(({children:i,...e},t)=>u.createElement("media-title-bar",v({...e,ref:t}),i));const Ln=u.forwardRef(({children:i,...e},t)=>u.createElement("media-volume-range",v({...e,ref:t}),i));u.forwardRef(({children:i,...e},t)=>u.createElement("media-chrome",v({...e,ref:t}),i));u.forwardRef(({children:i,...e},t)=>u.createElement("media-container",v({...e,ref:t}),i));const Zn=({src:i,fullPage:e})=>{const t=Xe.useRef(null);return Cn(t,i),Dn(t),Di(t,e),M.jsx("div",{className:e?"media-controller-container fullpage":"",children:M.jsxs(bn,{children:[M.jsx("video",{ref:t,slot:"media",src:i,preload:"auto",onDoubleClick:()=>yn(t.current),className:e?"fullscreen":""}),M.jsxs(vn,{children:[M.jsx(In,{}),M.jsx(An,{showDuration:!0}),M.jsx(Tn,{}),M.jsx(Mn,{}),M.jsx(fn,{}),M.jsx(Ln,{className:"display-on-hover"}),M.jsx(Sn,{}),M.jsx(_n,{}),M.jsx(gn,{})]})]})})},Dt="selectedEpisode",ze="currentTime";function Cn(i,e){Xe.useEffect(()=>{const t=setTimeout(()=>{if(localStorage.getItem(Dt)!==e){localStorage.setItem(Dt,e),localStorage.removeItem(ze);return}const s=localStorage.getItem(ze);s&&(i.current.currentTime=parseFloat(s))},500);return()=>clearTimeout(t)},[i,e])}function Dn(i){Xe.useEffect(()=>{function e(){i.current&&Rn(i.current)&&localStorage.setItem(ze,i.current.currentTime.toString())}const t=setInterval(e,1e3);return()=>clearInterval(t)},[i])}async function yn(i){try{!!kn()?await document.exitFullscreen():await i.requestFullscreen()}catch(e){console.error(e)}}function kn(){const i=document;if(typeof i.fullscreenElement<"u")return i.fullscreenElement;if(typeof i.mozFullScreenElement<"u")return i.mozFullScreenElement;if(typeof i.msFullscreenElement<"u")return i.msFullscreenElement;if(typeof i.webkitFullscreenElement<"u")return i.webkitFullscreenElement;throw new Error("fullscreenElement is not supported by this browser")}function Rn(i){return i.currentTime>0&&!i.paused&&!i.ended&&i.readyState>2}export{Zn as MediaChromePlayer};
