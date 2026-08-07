import { validColor, type ValidColor } from "./color";
import type { StyleTypes } from "./main.svelte";
import type { AccentName, DynamicAccent2Value, DynamicAccentValue, DynamicAccentValueFor } from "./accent-variables";

export type Accent<
  Value extends StaticAccentValue = ValidColor,
> = AccentFor<"Accent", Value>;

export type Accent2<
  Value extends StaticAccentValue = ValidColor,
> = AccentFor<"Accent2", Value>;



type DynamicAccentFor<
  Name extends AccentName,
  Value extends DynamicAccentValueFor<Name> = DynamicAccentValueFor<Name>,
> = {
  readonly kind: "dynamic";
  readonly value: Value;
};

type DynamicAccent<
  Value extends DynamicAccentValue = DynamicAccentValue
> = DynamicAccentFor<"Accent", Value>;

type DynamicAccent2<
  Value extends DynamicAccent2Value = DynamicAccent2Value
> = DynamicAccentFor<"Accent2", Value>;

type StaticAccentValue = StyleTypes["staticAccentValue"];
type StaticAccent<
  Value extends StaticAccentValue = ValidColor
> = {
  readonly kind: "static";
  readonly value: Value;
};

export type AccentFor<
  Name extends AccentName,
  Value extends StaticAccentValue = ValidColor,
> = DynamicAccentFor<Name> | StaticAccent<Value>;

// config & runtime constructors

export function dryStaticAccent<T extends string>(value: T): StaticAccent<T> {
  return {
    kind: "static",
    value,
  };
}

export function staticAccent(value: string): StaticAccent<ValidColor> {
  return {
    kind: "static",
    value: validColor(value),
  };
}

function dynamicAccentFor<
  Name extends AccentName,
  Value extends DynamicAccentValueFor<Name>,
>(value: Value): DynamicAccentFor<Name, Value> {
  return {
    kind: "dynamic",
    value,
  };
}

export function dynamicAccent<
  Value extends DynamicAccentValue
>(value: Value): DynamicAccent<Value> {
  return dynamicAccentFor<"Accent", Value>(value);
}

export function dynamicAccent2<
  Value extends DynamicAccent2Value
>(value: Value): DynamicAccent2<Value> {
  return dynamicAccentFor<"Accent2", Value>(value);
}

// persist utilities

function hydrateAccentFor<
  Name extends AccentName,
>(accent: AccentFor<Name, string>): AccentFor<Name> {
  return accent.kind === "dynamic"
    ? accent
    : {
      ...accent,
      value: validColor(accent.value),
    };
}

export function hydrateAccent(accent: Accent<string>): Accent {
  return hydrateAccentFor<"Accent">(accent);
}

export function hydrateAccent2(accent: Accent2<string>): Accent2 {
  return hydrateAccentFor<"Accent2">(accent);
}

function dehydrateAccentFor<
  Name extends AccentName
>(accent: AccentFor<Name>): AccentFor<Name, string> {
  return accent.kind === "dynamic"
    ? accent
    : {
      ...accent,
      value: accent.value.raw,
    };
}

export function dehydrateAccent(accent: Accent): Accent<string> {
  return dehydrateAccentFor<"Accent">(accent);
}

export function dehydrateAccent2(accent: Accent2): Accent2<string> {
  return dehydrateAccentFor<"Accent2">(accent);
}
