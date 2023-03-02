import './styles.css';
import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';

renderHome();

window.addEventListener('click', (e) => {
    if (e.target.id === 'menu') {
        renderMenu();
    } else if (e.target.id === 'contact' || e.target.id === 'placeOrderBtn') {
        renderContact();
    } else if (e.target.id === 'home') {
        renderHome();
    }
});
