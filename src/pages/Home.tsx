import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Location from '../components/Location';
import Weather from '../components/Weather';

const Home: React.FC = () => {
  return (
    <IonPage className='ion-background'>
      <IonHeader className='ion-header'>
        <IonToolbar className='ion-toolbar'>
          <IonTitle>
            <Location />
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='home-content'>
        <Weather />
      </IonContent>
    </IonPage>
  );
};

export default Home;
