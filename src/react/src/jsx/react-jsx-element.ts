import { REACT_FILTER_PROPS } from './const';
import { REACT_ELEMENT_TYPE } from 'shared/react-symbol';
import { hasOwnProperty } from 'shared/has-own-property';

export function jsxDEV(type, config: Config, explicitKey?: string): JSXElement {
  const props = {} as AnyObj;
  let propName: string;
  for (propName in config) {
    if (hasOwnProperty(config, propName) && !hasOwnProperty(REACT_FILTER_PROPS, propName)) {
      props[propName] = config[propName];
    }
  }

  let key = null;
  let ref = null;
  if (explicitKey !== undefined) {
    key = explicitKey;
  }
  // 运行时key和编译时key的差别
  // <div {...restProps} key="123">  restProps has key. 那么 jsx->js: jsx('div', { ...restProps }, "123")
  if (hasLegalKey(config)) {
    key = config.key;
  }
  if (hasLegalRef(config)) {
    ref = config.ref;
  }

  return createReactElement(type, key, ref, props);
}

function hasLegalKey(config) {
  return config.key !== undefined;
}
function hasLegalRef(config) {
  return config.ref !== undefined;
}

function createReactElement(type: string, key: string | null, ref: any | null, props: AnyObj) {
  return {
    $$typeof: REACT_ELEMENT_TYPE, // 判断一个对象是否是ReactElement
    type,
    props,
    key,
    ref,
  };
}

/**================================== TYPE **/
interface Config {
  children?: any;
  [propName: string]: any;
}

interface JSXElement {
  type: string;
  key?: string;
  ref?: any;
  props: {
    children?: any;
    className?: string;
    style?: React.CSSProperties;
    [propName: string]: any;
  };
}
type AnyObj = Record<string | number | symbol, any>;
