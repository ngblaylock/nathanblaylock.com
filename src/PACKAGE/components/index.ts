// GENERAL COMPONENTS
export { default as GAvatar } from './GAvatar.svelte';
export { default as GBtn } from './GBtn.svelte';
export { default as GDebug } from './GDebug.svelte';
export { default as GDevNote } from './GDevNote.svelte';
export { default as GIcon } from './GIcon.svelte';
export { default as GIconBtn } from './GIconBtn.svelte';
export { default as GSortableCards } from './GSortableCards.svelte';
// LAYOUT COMPONENTS
export { default as GAppNav } from './GAppNav.svelte';
export { default as GSideNav } from './GSideNav.svelte';
// FORM COMPONENTS
export { default as GCheckbox } from './GCheckbox.svelte';
export { default as GCheckboxGroup } from './GCheckboxGroup.svelte';
export { default as GRadioGroup } from './GRadioGroup.svelte';
export { default as GRichTextInput } from './GRichTextInput.svelte';
export { default as GSegmentedControl } from './GSegmentedControl.svelte';
export { default as GTextInput } from './GTextInput.svelte';

// ----------------------------------------------------------------------
//
// Types
//
// ----------------------------------------------------------------------

import icons from './icons';
export type IconName = keyof typeof icons;

/** @type for the GAppNav navItems prop */
export type AppNavItems = {
  brand: {
    alt?: string;
    href?: string;
    label?: string;
    src: string;
  };
  links: {
    active?: boolean;
    href: string;
    icon?: IconName;
    label: string;
    src?: string;
  }[];
};

export type Variant =
  | 'primary'
  | 'secondary'
  | 'light'
  | 'dark'
  | 'gray'
  | 'base-1'
  | 'base-2'
  | 'base-3'
  | 'base-4'
  | 'base-i1'
  | 'base-i2'
  | 'base-i3'
  | 'base-i4';
