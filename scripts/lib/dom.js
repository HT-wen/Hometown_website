// Tiny DOM helpers
export const qs  = (sel, el = document) => el.querySelector(sel);
export const qsa = (sel, el = document) => [...el.querySelectorAll(sel)];
export const on  = (el, type, handler, opts) => el?.addEventListener(type, handler, opts);
export const $id = (id) => document.getElementById(id);
