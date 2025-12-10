import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdminPanel.css';

function AdminPanel() {
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const [projectForm, setProjectForm] = useState({
    name:'',
    description:'',
    image: null
  });
  
  const [clientForm, setClientForm] = useState({
    name:'',
    description:'',
    designation:'',
    image: null
  });

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [projectsRes, clientsRes, contactsRes, newslettersRes] = await Promise.all([
        fetch('http://localhost:5000/api/projects'),
        fetch('http://localhost:5000/api/clients'),
        fetch('http://localhost:5000/api/contacts'),
        fetch('http://localhost:5000/api/newsletter')
      ]);
      
      const projectsData = await projectsRes.json();
      const clientsData = await clientsRes.json();
      const contactsData = await contactsRes.json();
      const newslettersData = await newslettersRes.json();
      
      setProjects(projectsData);
      setClients(clientsData);
      setContacts(contactsData);
      setNewsletters(newslettersData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData();
    formData.append('name', projectForm.name);
    formData.append('description', projectForm.description);
    if (projectForm.image) {
      formData.append('image', projectForm.image);
    }

    try {
      const response = await fetch('http://localhost:5000/api/projects', {
        method: 'POST',
        body: formData
      });
      
      
      if (response.ok) {
        alert('Project added successfully!');
        setProjectForm({ name: '', description: '', image: null });
        const fileInput = document.querySelector('#project-image-input');
        if (fileInput) fileInput.value = '';
        await fetchAllData();
      } else {
        const errorData = await response.json();
        alert('Failed to add project: ' + (errorData.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error adding project:', error);
      alert('Failed to add project: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClientSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData();
    formData.append('name', clientForm.name);
    formData.append('description', clientForm.description);
    formData.append('designation', clientForm.designation);
    if (clientForm.image) {
      formData.append('image', clientForm.image);
    }

    try {
      const response = await fetch('http://localhost:5000/api/clients', {
        method: 'POST',
        body: formData
      });
      
      
      if (response.ok) {
        alert('Client added successfully!');
        setClientForm({ name: '', description: '', designation: '', image: null });
        const fileInput = document.querySelector('#client-image-input');
        if (fileInput) fileInput.value = '';
        await fetchAllData();
      } else {
        const errorData = await response.json();
        alert('Failed to add client: ' + (errorData.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error adding client:', error);
      alert('Failed to add client: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>Admin Panel</h1>
        <Link to="/" className="back-btn">Back to Home</Link>
      </div>
      
      <div className="admin-tabs">
        <button 
          className={activeTab === 'projects' ? 'active' : ''} 
          onClick={() => setActiveTab('projects')}
        >
          Projects ({projects.length})
        </button>
        <button 
          className={activeTab === 'clients' ? 'active' : ''} 
          onClick={() => setActiveTab('clients')}
        >
          Clients ({clients.length})
        </button>
        <button 
          className={activeTab === 'contacts' ? 'active' : ''} 
          onClick={() => setActiveTab('contacts')}
        >
          Contact Forms ({contacts.length})
        </button>
        <button 
          className={activeTab === 'newsletters' ? 'active' : ''} 
          onClick={() => setActiveTab('newsletters')}
        >
          Newsletters ({newsletters.length})
        </button>
      </div>

      <div className="admin-content">
        {activeTab === 'projects' && (
          <div className="tab-content">
            <h2>Add New Project</h2>
            <form onSubmit={handleProjectSubmit} className="admin-form">
              <input
                type="text"
                placeholder="Project Name"
                value={projectForm.name}
                onChange={(e) => setProjectForm({...projectForm, name: e.target.value})}
                required
              />
              <textarea
                placeholder="Project Description"
                value={projectForm.description}
                onChange={(e) => setProjectForm({...projectForm, description: e.target.value})}
                required
                rows="4"
              />
              <input
                id="project-image-input"
                type="file"
                accept="image/*"
                onChange={(e) => setProjectForm({...projectForm, image: e.target.files[0]})}
                required
              />
              {projectForm.image && (
                <p className="file-name">Selected: {projectForm.image.name}</p>
              )}
              <button type="submit" disabled={loading}>
                {loading ? 'Adding...' : 'Add Project'}
              </button>
            </form>
            
            <h2>Existing Projects ({projects.length})</h2>
            {projects.length === 0 ? (
              <p className="no-data">No projects found. Add your first project above!</p>
            ) : (
              <div className="data-grid">
                {projects.map((project) => (
                  <div key={project._id} className="data-card">
                    <img 
                      src={`http://localhost:5000${project.image}`} 
                      alt={project.name}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                      }}
                    />
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'clients' && (
          <div className="tab-content">
            <h2>Add New Client</h2>
            <form onSubmit={handleClientSubmit} className="admin-form">
              <input
                type="text"
                placeholder="Client Name"
                value={clientForm.name}
                onChange={(e) => setClientForm({...clientForm, name: e.target.value})}
                required
              />
              <input
                type="text"
                placeholder="Designation (e.g., CEO, Designer)"
                value={clientForm.designation}
                onChange={(e) => setClientForm({...clientForm, designation: e.target.value})}
                required
              />
              <textarea
                placeholder="Client Testimonial/Description"
                value={clientForm.description}
                onChange={(e) => setClientForm({...clientForm, description: e.target.value})}
                required
                rows="4"
              />
              <input
                id="client-image-input"
                type="file"
                accept="image/*"
                onChange={(e) => setClientForm({...clientForm, image: e.target.files[0]})}
                required
              />
              {clientForm.image && (
                <p className="file-name">Selected: {clientForm.image.name}</p>
              )}
              <button type="submit" disabled={loading}>
                {loading ? 'Adding...' : 'Add Client'}
              </button>
            </form>
            
            <h2>Existing Clients ({clients.length})</h2>
            {clients.length === 0 ? (
              <p className="no-data">No clients found. Add your first client above!</p>
            ) : (
              <div className="data-grid">
                {clients.map((client) => (
                  <div key={client._id} className="data-card">
                    <img 
                      src={`http://localhost:5000${client.image}`} 
                      alt={client.name}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/150?text=No+Image';
                      }}
                    />
                    <h3>{client.name}</h3>
                    <p className="designation">{client.designation}</p>
                    <p>{client.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className="tab-content">
            <h2>Contact Form Submissions ({contacts.length})</h2>
            {contacts.length === 0 ? (
              <p className="no-data">No contact submissions yet.</p>
            ) : (
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>City</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr key={contact._id}>
                        <td>{contact.fullName}</td>
                        <td>{contact.email}</td>
                        <td>{contact.mobile}</td>
                        <td>{contact.city}</td>
                        <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === 'newsletters' && (
          <div className="tab-content">
            <h2>Newsletter Subscriptions ({newsletters.length})</h2>
            {newsletters.length === 0 ? (
              <p className="no-data">No newsletter subscriptions yet.</p>
            ) : (
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Email Address</th>
                      <th>Subscribed Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newsletters.map((newsletter) => (
                      <tr key={newsletter._id}>
                        <td>{newsletter.email}</td>
                        <td>{new Date(newsletter.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;