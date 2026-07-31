import { MathfieldElement } from "mathlive";
MathfieldElement.fontsDirectory = "/fonts/mathlive";
// MathfieldElement.soundsDirectory = "/sounds/mathlive";
MathfieldElement.soundsDirectory = null;

export { MathfieldElement };

export function ShowKeyboard(){
  window?.mathVirtualKeyboard.show();
}

export function HideKeyboard(){
  window?.mathVirtualKeyboard.hide();
}

export function ToggleKeyboard(){
  if(window?.mathVirtualKeyboard.visible){
    HideKeyboard();
  } else {
    ShowKeyboard();
  }

  // window.mathVirtualKeyboard.visible = !window.mathVirtualKeyboard.visible;
}

export function GetKeyboardElement(){
  return document.querySelector<HTMLDivElement>('.MLK__backdrop');
}

export function GetKeyboardPlateElement(){
  return document.querySelector<HTMLDivElement>('.MLK__plate');
}

export function showMenu(x: number, y: number, menuItems: MathfieldElement["menuItems"] | undefined, mf: MathfieldElement | undefined){
  if(!mf || !menuItems) return;

  mf.menuItems = menuItems;

  mf.showMenu({
    location: { x: x, y: y + 10 },
    modifiers: { alt: false, control: false, shift: false, meta: false }
  });
}

export function getMenuElements(mf?: MathfieldElement){
  return [...mf?.shadowRoot?.querySelectorAll('.ui-menu-container') ?? []];
}

export function menuIsShown(mf?: MathfieldElement){
  return getMenuElements(mf).length > 0;
}

export function hideMenu(mf: MathfieldElement | undefined) {
  if(!mf) return;
  
  mf.menuItems = [];
}