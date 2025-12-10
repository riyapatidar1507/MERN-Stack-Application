import { useState, useEffect } from 'react';
import './Clients.css';

function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await fetch('/api/clients');
      const data = await response.json();
      setClients(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching clients:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading testimonials...</div>;
  }

  return (
    <section className="clients" id="testimonials">
      <div className="clients-container">
        <h2 className="clients-title">Happy Clients</h2>
        
        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client._id} className="client-card">
              <img 
                src={`http://localhost:5000${client.image}`} 
                alt={client.name}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200';
                }}
              />
              <p className="client-description">{client.description}</p>
              <h4 className="client-name">{client.name}</h4>
              <p className="client-designation">{client.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;