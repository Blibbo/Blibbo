import type { MathfieldElementAttributes } from "mathlive";
import type { HTMLAttributes, HTMLTextareaAttributes } from 'svelte/elements';
import { type CodeMirrorProps } from "svelte-codemirror-editor";
import { EditorView } from "@codemirror/view";
import type MathField from "../mathlive/MathField.svelte";

type Language = {
  type: 'language'
}

type SubstitutionRule = {
  type: 'substitution'
  oneway: boolean
}

type Formula = {
  type: 'formula'
  assert: boolean
}

type DivProps = Omit<HTMLAttributes<HTMLDivElement>, 'value'>;

// sufficient information to interpret the field
export type BlibboFieldState = {
  value: string;
} & (Language | SubstitutionRule | Formula)

export type BlibboFieldProps = {
  field: BlibboFieldState;
  readOnly?: boolean;
  hideButtonsOnBlur?: boolean;
  noButtons?: boolean;
  onfocus?: (e:FocusEvent)=>void;
  onblur?: (e:FocusEvent)=>void;
  editorType?: 'math' | 'text' | 'code';
  mathEditorProperties?: Partial<MathfieldElementAttributes>;
  codeEditorProperties?: CodeMirrorProps;
  textEditorProperties?: Partial<HTMLTextareaAttributes>;
  onshiftenter?: () => void;
  onemptybackspace?: () => void;
} & DivProps;

export function newBlibboFieldState(): BlibboFieldState{
  return {
    value: '',
    type: 'formula',
    assert: false,
  };
}

export type FocusableEditorElement = MathField | EditorView | HTMLTextAreaElement;

export function editorHasFocus(){
  
}