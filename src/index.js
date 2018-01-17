if (module.hot) {
    module.hot.accept();
}

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const root = document.body.querySelector('#root')
const Splash = require('../src/views/splash-page');

m.mount(root, Splash);