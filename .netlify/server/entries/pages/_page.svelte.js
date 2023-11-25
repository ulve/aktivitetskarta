import { c as create_ssr_component, v as validate_component, d as each, f as add_attribute, e as escape } from "../../chunks/ssr.js";
const aktiviteter = [
  {
    "img": "valle.png",
    "title": "Valle"
  },
  {
    "img": "baka.png",
    "title": "Baka"
  },
  {
    "img": "bil.png",
    "title": "Åka Bil"
  },
  {
    "img": "duscha.png",
    "title": "Duscha"
  },
  {
    "img": "fotboll.png",
    "title": "Fotboll"
  },
  {
    "img": "lekplats.png",
    "title": "Lekplats"
  },
  {
    "img": "lera.png",
    "title": "Lera"
  },
  {
    "img": "pappa.png",
    "title": "Pappa"
  },
  {
    "img": "promenera.png",
    "title": "Promenera"
  },
  {
    "img": "pussel.png",
    "title": "Lägga pussel"
  },
  {
    "img": "rita.png",
    "title": "Rita"
  },
  {
    "img": "skrana.png",
    "title": "Åka skrana"
  },
  {
    "img": "spela.png",
    "title": "Spela"
  },
  {
    "img": "tv.png",
    "title": "Titta på TV"
  }
];
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".header.svelte-1h0bvhf.svelte-1h0bvhf{padding:4rem 4rem 0;background:#866aea}.tabs.svelte-1h0bvhf a.svelte-1h0bvhf{text-decoration:none;background:#c2b4f4;display:inline-block;padding:0.5rem 1rem;border-radius:0.5em 0.5em 0 0;color:black;margin:0 2px;position:relative}.tabs.svelte-1h0bvhf a.svelte-1h0bvhf::after,.tabs.svelte-1h0bvhf a.svelte-1h0bvhf::before{content:'';position:absolute;bottom:0;height:10px;width:10px;z-index:1}.tabs.svelte-1h0bvhf a.svelte-1h0bvhf::after{left:100%;background-image:radial-gradient(\n			circle at top right,\n			transparent,\n			transparent 10px,\n			#c2b4f4 10px,\n			#c2b4f4 50px\n		)}.tabs.svelte-1h0bvhf a.svelte-1h0bvhf::before{right:100%;background-image:radial-gradient(\n			circle at top left,\n			transparent,\n			transparent 10px,\n			#c2b4f4 10px,\n			#c2b4f4 50px\n		)}.tabs.svelte-1h0bvhf .active.svelte-1h0bvhf{background:#f0f0f0;z-index:10;pointer-events:none}.tabs.svelte-1h0bvhf .active.svelte-1h0bvhf::after{background-image:radial-gradient(\n			circle at top right,\n			transparent,\n			transparent 10px,\n			#f0f0f0 10px,\n			#f0f0f0 50px\n		)}.tabs.svelte-1h0bvhf .active.svelte-1h0bvhf::before{background-image:radial-gradient(\n			circle at top left,\n			transparent,\n			transparent 10px,\n			#f0f0f0 10px,\n			#f0f0f0 50px\n		)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="header svelte-1h0bvhf" data-svelte-h="svelte-dcix9b"><div class="tabs svelte-1h0bvhf"><a data-tab="allt" class="active svelte-1h0bvhf" href="">Allt</a></div> </header>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-13xh2va{font-size:2.4em;line-height:1.1;text-align:center}.container.svelte-13xh2va{font-family:Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;background-color:white;margin:auto;display:flex;flex-wrap:wrap;gap:2rem;padding:4rem;justify-content:center}img.svelte-13xh2va{max-width:100%;height:auto}.aktivitet.svelte-13xh2va{display:flex;flex-direction:column;justify-content:space-between;flex-grow:1;max-width:20rem;border:2px solid #454545;border-radius:1rem;padding:1rem;box-shadow:0 0 1rem rgba(0, 0, 0, 0.2);background-color:white}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="container svelte-13xh2va" id="känslor">${each(aktiviteter, (aktivitet) => {
    return `<div class="aktivitet svelte-13xh2va"><img${add_attribute("src", aktivitet.img, 0)}${add_attribute("alt", aktivitet.title, 0)} class="svelte-13xh2va"> <h2 class="svelte-13xh2va">${escape(aktivitet.title)}</h2> </div>`;
  })} </div>`;
});
export {
  Page as default
};
