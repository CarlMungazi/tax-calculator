if (module.hot) {
    module.hot.accept();
}

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const root = document.body.querySelector('#root')
import Splash from '../src/views/splash'

m.mount(root, Splash);