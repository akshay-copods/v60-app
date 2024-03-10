import * as React from 'react';

import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { ModuleCard } from '../components/Card';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { useAppStore } from '../store';

export function DetailsScreen() {
  const [loading, setLoading] = useState(true);

  const modules = useAppStore((state) => state.moduleData);
  const setModules = useAppStore((state) => state.setModuleData);

  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, 'modules', '65bBSCInH7Ls7wMYZsTM');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data()?.modules);
        setModules(docSnap.data()?.modules);
        setLoading(false);
      } else {
        setLoading(false);
        console.log('No such document!');
      }
    }
    fetchData();
  }, []);

  return (
    <View className="items-center h-full overflow-scroll">
      <Header title={'Training'} />
      <View className="justify-center flex-1 w-full px-5 mt-8">
        <Text className="text-[32px] font-medium self-start text-[#3A4355] mb-8">
          Lets start with your First Training module..
        </Text>
        {false ? (
          <ActivityIndicator animating={true} color={MD2Colors.purple300} />
        ) : (
          <FlatList
            data={modules}
            renderItem={({ item }) => (
              <ModuleCard
                key={item.id}
                id={item.id}
                title={item.moduleName}
                shortDescription={item.shortModuleDescription}
                estimatedTime={item.estimatedTime}
                totalTopics={item.totalTopics}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
}
