
// src/App.tsx
import { OrderList } from './components/OrderList';

function App() {
    return (
        <div style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Управление на поръчки</h1>
            <OrderList />
        </div>
    );
}

export default App;
