import { type IconName } from './icons';
interface Props {
    name: IconName;
    size?: number;
}
declare const Icon: import("svelte").Component<Props, {}, "">;
type Icon = ReturnType<typeof Icon>;
export default Icon;
