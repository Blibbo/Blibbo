import { untrack } from "svelte";
import { hydratePreset, type StyleConfig } from "./config";
import { computeRuntimeInfo, type StyleRuntimeInfo } from "./derived";
import type { StyleArguments, StyleArgumentsInit } from "./main";
import { nextTheme, setPreference, type StyleRuntime } from "./mutation";
import { loadStyle } from "./persist";
import { systemTheme } from "./system-theme.svelte";
import { computeAllVariables, computeIndependentVariables, type ColorVariables, type Primitives } from "./variables";
import { applyStyle } from "./effects";

export class StyleManager {
  defaultStyle: StyleConfig;
  #persistKey: string;
  readonly #root: HTMLElement;

  #runtime: StyleRuntime;

  computed: StyleRuntimeInfo;
  active: Primitives;
  variables: ColorVariables;

  constructor({root, persistKey, defaultStyle}: StyleArguments) {
    this.#root = root;
    this.#persistKey = persistKey;
    this.defaultStyle = defaultStyle;

    this.#runtime = $state(loadStyle(persistKey, defaultStyle));

    this.computed = $state(computeRuntimeInfo(this.#runtime, systemTheme.value));
    this.active = $state(computeIndependentVariables(this.#runtime, this.computed));
    this.variables = $state(computeAllVariables(this.active));

    $effect(()=>{
      // svelte-ignore state_snapshot_uncloneable
      $state.snapshot(this.#runtime);
      systemTheme.value;
      untrack(()=>{
        this.computed = computeRuntimeInfo(this.#runtime, systemTheme.value);
        this.active = computeIndependentVariables(this.#runtime, this.computed);
      });
    });

    $effect(()=>{
      // svelte-ignore state_snapshot_uncloneable
      $state.snapshot(this.active);
      untrack(()=>{
        this.variables = computeAllVariables(this.active);
      });
    })
  }

  get persistKey(): string {
    return this.#persistKey;
  }

  // if I use helpers like Readonly<> I don't want to recurse into HTMLElement's properties.
  root(): HTMLElement {
    return this.#root;
  }

  get runtime(): (StyleRuntime & {
    readonly preference: StyleRuntime["preference"];
  }) {
    return this.#runtime;
  }

  reset(): void {
    this.#runtime = hydratePreset(this.defaultStyle);
  }

  override(persistKey: string, defaultStyle: StyleConfig): StyleArgumentsInit {
    const oldPersistKey = this.#persistKey;
    const oldDefaultStyle = this.defaultStyle;
    this.#persistKey = persistKey;
    this.defaultStyle = defaultStyle;
    this.#runtime = loadStyle(persistKey, defaultStyle);

    return {
      persistKey: oldPersistKey,
      defaultStyle: oldDefaultStyle,
    };
  }

  load(presetStyle: StyleConfig): void {
    this.#runtime = hydratePreset(presetStyle);
  }

  set preference(preference: StyleRuntime["preference"]) {
    setPreference(preference, this.#runtime, systemTheme.value, this.computed);
  }

  get preference() {
    return this.#runtime.preference;
  }

  runEffects(
    computedOld?: StyleRuntimeInfo | undefined,
    variablesOld?: Readonly<ColorVariables> | undefined,
  ): void {
    applyStyle(
      this,
      computedOld,
      variablesOld,
    );
  }

  nextTheme(): void {
    nextTheme(this.#runtime, this.computed);
  }

}