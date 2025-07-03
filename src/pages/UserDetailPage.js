import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetailPage() {
    const { id } = useParams();

     // Déclaration des états
        const [user, setUser] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
    
        // Mise en place du UseEffect pour charger les données
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users/' + id).then(response => {
                if (!response.ok) {
                    throw new Error('Erreur survenue lors de la récupération des données');
                }
                return response.json();
            }).then(data => {
                // En cas de succès
                setUser(data);
            }).catch(error => {
                setError(error);
            }).finally(() => {
                setLoading(false);
            })
         });
    
        if (loading) {
             return (<p>Loading...</p>);
        }
        
        if (error) {
            return (<p>Erreur : { error.message }</p>);
        }
    
    return (<div>
        <h3>Detail de {user.name}</h3>
        <div>
            <p><strong>Pseudo</strong> : { user.username }</p>
            <p><strong>Email</strong> : { user.email}</p>
            <p><strong>Téléphone</strong> : {user.phone }</p>
            <p><strong>Site web</strong> : { user.website}</p>
            <p><strong>Adresse physique</strong> : {user.address.street} {user.address.suite} {user.address.city} <a href={`https://www.google.com/maps/search/${user.address.geo.lat},+${user.address.geo.lng}`} target="_blank" rel="noreferrer">Voir la localisation</a></p>
            <p><strong>Entreprise</strong> : { user.company.name}</p>
        </div>
        
    </div>);
}

export default UserDetailPage;