(() => {
  const parts = [
    './app-parts/part00.txt',
    './app-parts/part01.txt',
    './app-parts/part02.txt',
    './app-parts/part03.txt',
    './app-parts/part04.txt',
    './app-parts/part05.txt',
    './app-parts/part06.txt',
    './app-parts/part07.txt',
    './app-parts/part08.txt'
  ];

  Promise.all(parts.map(path => fetch(path, { cache: 'no-store' }).then(response => {
    if (!response.ok) throw new Error(`Could not load ${path}`);
    return response.text();
  })))
    .then(chunks => {
      const source = chunks.join('');
      (0, eval)(source);
    })
    .catch(error => {
      console.error(error);
      const panel = document.getElementById('content-panel');
      if (panel) {
        panel.innerHTML = '<h2>Revision site could not load</h2><p>Please refresh the page. If the problem continues, tell your teacher.</p>';
      }
    });
})();
