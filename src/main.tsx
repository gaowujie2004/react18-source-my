const obj = { key: 'id-00' };

let el = (
  <main>
    hello —— <div style={{ color: 'red', fontSize: 40 }}>GWJ</div>
    <p key="id--111" ref={() => {}}>
      p1
    </p>
    {Math.random() < 0.5 && <p>动态的</p>}
  </main>
);

console.log(el);
