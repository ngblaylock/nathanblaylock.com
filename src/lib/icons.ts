import {
  mdiArrowDown,
  mdiArrowLeft,
  mdiArrowRight,
  mdiArrowUp,
  mdiChevronDown,
  mdiChevronLeft,
  mdiChevronRight,
  mdiChevronUp,
  mdiClose,
  mdiContentCopy,
  mdiHome,
  mdiMenu,
} from '@mdi/js';

const icons = {
  arrowDown: mdiArrowDown,
  arrowLeft: mdiArrowLeft,
  arrowRight: mdiArrowRight,
  arrowUp: mdiArrowUp,
  chevronDown: mdiChevronDown,
  chevronLeft: mdiChevronLeft,
  chevronRight: mdiChevronRight,
  chevronUp: mdiChevronUp,
  close: mdiClose,
  copy: mdiContentCopy,
  home: mdiHome,
  menu: mdiMenu,
};

export default icons;
export type IconName = keyof typeof icons;
