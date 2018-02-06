import ReactDOM from 'react-dom';
import './style.css';
import Layout from './Layout';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
< div className="container">
<Layout/></div>
    
    , document.getElementById('root'));
registerServiceWorker();

