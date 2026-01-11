import CardPizza from './CardPizza.jsx';
import { useEffect, useState } from 'react';

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const Datos = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/pizzas");
                if (!res.ok) throw new Error(`Error ${res.status}`);
                const data = await res.json();
                console.log(data);
                setPizzas(data);
            } catch (err) {
                console.error(err);
                setError('No se pudieron cargar las pizzas');
            } finally {
                setLoading(false);
            }
        };
        Datos();
    }, []);

    if (loading) return <p style={{ textAlign: 'center', padding: '20px' }}>Cargando pizzas...</p>;
    if (error) return <p style={{ textAlign: 'center', color: 'red', padding: '20px' }}>{error}</p>;

    return(
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px', gap: '1rem' }}>
            {pizzas.map(pizza => (
                <CardPizza key={pizza.id} pizza={pizza} />
            ))}
        </div>
    )
}
export default Home