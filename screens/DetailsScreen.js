import * as React from 'react';

import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { ModuleCard } from '../components/Card';

export function DetailsScreen() {
  const [modules, setModules] = useState([]);
  useEffect(() => {
    console.log('Details Screen');
    //fetch data from firestrore
    async function fetchData() {
      const docRef = doc(db, 'modules', 'YbFhN4vOkkiHYpZaa3V3');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setModules(docSnap.data()?.modules);
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
        {modules.map((module) => (
          <ModuleCard
            title={module.moduleName}
            shortDescription={module.shortModuleDescription}
          />
        ))}
      </View>
    </View>
  );
}
