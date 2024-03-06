import * as React from 'react';

import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
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
      const docRef = doc(db, 'modules', '65bBSCInH7Ls7wMYZsTM');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data()?.modules);
        setModules(docSnap.data()?.modules);
        setLoading(false);
      } else {
        console.log('No such document!');
      }
    }
    fetchData();
  }, []);
  return (
    <View className="flex flex-col gap-3 items-center bg-red-200 h-full overflow-scroll">
      <Text className="text-red-400">Details Screen</Text>
      <View className="flex flex-col gap-2 flex-1 max-w-4xl">
        {loading ? (
          <ActivityIndicator animating={true} color={MD2Colors.red800} />
        ) : (
          <FlatList
            data={modules}
            renderItem={({ item }) => (
              <ModuleCard
                key={item.id}
                title={item.moduleName}
                shortDescription={item.shortModuleDescription}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
}
