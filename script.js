import header from './components/Header/header.js';
import news from './components/News/news.js';
import sidebar from './components/Sidebar/sidebar.js'
import footer from './components/Footer/footer.js';

const root = document.querySelector('#root');

const contentWrapper = document.createElement('div');
contentWrapper.classList.add('content-wrapper');
contentWrapper.append(news({title:'Naujienos'}),sidebar());

root.append(header(), contentWrapper,footer());