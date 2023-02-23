import { transform } from '@babel/core';

const res = transform('<h1 ref={1} key="12"><div>div</div></h1>', {
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
  ],
});

console.log(res.code);
