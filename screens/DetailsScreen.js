import * as React from 'react';

import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { ModuleCard } from '../components/Card';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';

export function DetailsScreen() {
  const [modules, setModules] = useState([
    {
      id: '1',
      moduleName: 'Lockout/Tag-out Procedure for Electrical Isolation',
      estimatedTime: '30',
      totalTopics: '2',
      shortModuleDescription:
        'Lockout/Tag-out (LOTO) procedure for electrical isolation in maintenance',
      ModuleContent: [
        {
          id: '1',
          content:
            'Lockout/Tag-out (LOTO) is a safety procedure used in maintenance to ensure that dangerous machines are properly shut off and unable to be started up again prior to the completion of maintenance or servicing work. Electrical isolation is a key part of LOTO procedures, involving disconnecting power sources to prevent accidental energizing of equipment during maintenance. The process typically includes attaching lockout devices like lockout pads or locks to the energy isolation points to secure them in a deactivated state. This prevents the equipment from being turned on inadvertently while work is being performed, safeguarding maintenance personnel from electrical hazards.',
        },
        {
          id: '2',
          content:
            'In a manufacturing plant, an electrician performing maintenance on a conveyor belt system would use LOTO procedures for electrical isolation. The electrician would follow protocols to cut off the power supply to the conveyor system and physically lock it in a safe, off position using a lockout device. This ensures that the conveyor cannot be powered back on until the maintenance work is completed and the lockout device is removed, preventing any accidental start-ups that could endanger the electrician working on the system.',
        },
      ],
    },
    {
      id: '2',
      moduleName: 'Verification Steps in Lockout/Tag-out Procedures',
      estimatedTime: '45',
      totalTopics: '2',
      shortModuleDescription:
        'Verification steps in Lockout/Tag-out procedures for equipment safety',
      ModuleContent: [
        {
          id: '1',
          content:
            'Verification is a critical step in Lockout/Tag-out procedures to confirm that the isolation and de-energization of equipment have been done correctly before maintenance work begins. During verification, the maintenance personnel test the relevant switches or breakers to ensure that they are in the off position and cannot be easily turned on. Additionally, visual checks may be performed to confirm that the energy sources have been effectively isolated and locked out. This step is crucial for the safety of maintenance workers as it confirms that the equipment is safe to work on without the risk of unexpected energization.',
        },
        {
          id: '2',
          content:
            'Imagine a scenario where a maintenance technician is tasked with servicing an industrial robotic arm. After isolating the power supply and attaching lockout devices as per the LOTO procedure, the technician proceeds with the verification step. By trying to activate the robotic arm using the control panel, they ensure that the de-energization was successful and that the machine remains inoperable. Visual inspection of the lockout mechanisms further confirms that the robotic arm is safely locked out and ready for maintenance work to commence.',
        },
      ],
    },
    {
      id: '3',
      moduleName: 'Releasing Lockout/Tag-out and Equipment Restoration',
      estimatedTime: '60',
      totalTopics: '2',
      shortModuleDescription:
        'Module covers the systematic process of reversing LOTO procedures to safely restore the equipment to service.',
      ModuleContent: [
        {
          id: '1',
          content:
            'After the completion of maintenance work, the Lockout/Tag-out (LOTO) procedures must be properly reversed to safely restore the equipment to service. This involves a systematic process that includes communication with all affected personnel, ensuring the safety of the work area, verifying that safety devices are in place, removing personal locks and tags, communicating the re-energization of the system, and finally re-energizing and testing the equipment. Each step is crucial to prevent accidents during the re-starting of machinery and to ensure that all personnel are aware of the equipment coming back online.',
        },
        {
          id: '2',
          content:
            'In a manufacturing facility, after maintenance work on a large stamping press is completed, the maintenance team follows the steps to release the lockout and restore the equipment. They communicate to all workers that the press is about to be re-energized, verify that the safety guards are in position, and remove their personal locks from the machinery. Once all safety measures are confirmed, the team communicates the re-energization, restarts the press, and tests its functioning to ensure that it operates correctly without any issues.',
        },
      ],
    },
    {
      id: '4',
      moduleName: 'Pneumatic Isolation Procedure in Lockout/Tag-out',
      estimatedTime: '45',
      totalTopics: '2',
      shortModuleDescription:
        'Module covers the essential aspects of pneumatic isolation in LOTO procedures, especially for equipment powered by compressed air systems.',
      ModuleContent: [
        {
          id: '1',
          content:
            'Pneumatic isolation is an essential aspect of Lockout/Tag-out (LOTO) procedures, especially for equipment powered by compressed air systems. The process involves shutting off the air supply to pneumatic devices and using lockout devices to secure the isolation points to prevent accidental activation. During pneumatic isolation, technicians must follow specific steps to deactivate the air supply, attach lockout devices like padlocks, and verify that the system cannot be energized. This ensures that maintenance work can be safely carried out without the risk of pneumatic equipment unexpectedly starting up.',
        },
        {
          id: '2',
          content:
            'Consider a situation in a woodworking workshop where a maintenance technician needs to service a pneumatic nail gun. Before starting any maintenance tasks, the technician performs pneumatic isolation by shutting off the air compressor supplying the nail gun. Lockout devices are then attached to the compressor controls to prevent its operation. Through verification tests, the technician confirms that the nail gun remains depressurized and inoperable, guaranteeing a safe environment for conducting maintenance activities on the tool.',
        },
      ],
    },
  ]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function fetchData() {
  //     const docRef = doc(db, 'modules', '65bBSCInH7Ls7wMYZsTM');
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       console.log('Document data:', docSnap.data()?.modules);
  //       setModules(docSnap.data()?.modules);
  //       setLoading(false);
  //     } else {
  //       setLoading(false);
  //       console.log('No such document!');
  //     }
  //   }
  //   fetchData();
  // }, []);

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
