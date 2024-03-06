import * as React from 'react';

import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { ModuleCard } from '../components/Card';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

export function DetailsScreen() {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log('Details Screen');
    //fetch data from firestrore
    async function fetchData() {
      const docRef = doc(db, 'modules', 'YbFhN4vOkkiHYpZaa3V3');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data()?.modules);
        setModules(docSnap.data()?.modules);
        setLoading(false);
      } else {
        // docSnap.data() will be undefined in this case
        console.log('No such document!');
      }
    }
    fetchData();
  }, []);
  return (
    <View className="flex items-center bg-red-200 h-full">
      <Text className="text-red-400">Details Screen</Text>
      <View className="flex flex-col gap-12 flex-1">
        {loading ? (
          <ActivityIndicator animating={true} color={MD2Colors.red800} />
        ) : (
          modules.map((module, i) => (
            <ModuleCard
              key={i}
              title={module.moduleName}
              shortDescription={module.shortModuleDescription}
            />
          ))
        )}
      </View>
    </View>
  );
}
