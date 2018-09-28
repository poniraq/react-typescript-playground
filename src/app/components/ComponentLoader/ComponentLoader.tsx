import * as Loadable from 'react-loadable';
import LoadingComponent from './LoadingComponent';
import { isFunction } from 'util';

type Loader<Props> = () => Promise<React.ComponentType<Props> | { default: React.ComponentType<Props> }>;
type Loading = React.ComponentType<Loadable.LoadingComponentProps> | (() => null);

export interface ComponentLoaderOptions<Props> {
  loading?: Loading;
  delay?: number | false | null;
  timeout?: number | false | null;
  modules?: string[];
  webpack?: () => number[];
  loader: Loader<Props>;
}

const isOptions = function<Props>(value: any): value is ComponentLoaderOptions<Props> {
  return value && value.loader && isFunction(value.loader);
};

export const ComponentLoader = function<Props, Export extends object>(options: ComponentLoaderOptions<Props> | Loader<Props>) {
  return Loadable<Props, Export>(
    isOptions(options) ? {
      loading: LoadingComponent,
      ...options
    } : {
      loader: options,
      loading: LoadingComponent
    }
  );
};

export default ComponentLoader;