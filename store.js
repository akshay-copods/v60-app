import { create } from 'zustand';

export const useAppStore = create((set) => ({
  isSignedIn: false,
  signIn: () => set({ isSignedIn: true }),
  moduleData: [
    {
      id: '1',
      moduleName: 'Lockout-Tagout Procedures',
      estimatedTime: '45',
      totalTopics: '2',
      shortModuleDescription:
        'LOTO procedures are essential in ensuring the safety of maintenance workers during repair and maintenance tasks on equipment and machinery.',
      ModuleContent: [
        {
          id: '1',
          title: 'Purpose of LOTO Procedures',
          titleDescription:
            'The purpose of LOTO is to prevent unexpected energization, start-up, or release of stored energy that could harm workers.',
          image: '',
          content:
            'The purpose of LOTO is to prevent unexpected energization, start-up, or release of stored energy that could harm workers. The procedure involves isolating energy sources and securing them with lockout devices.',
        },
        {
          id: '2',
          title: 'Verification Steps',
          titleDescription:
            'Verification steps, like testing the MCCB to ensure it cannot be turned on, are crucial to confirm the effectiveness of the lockout.',
          image: '',
          content:
            'Verification steps, like testing the MCCB to ensure it cannot be turned on, are crucial to confirm the effectiveness of the lockout. When a lock is applied, it restricts entry and ensures only authorized personnel can open the door.',
        },
      ],
    },
    {
      id: '2',
      moduleName: 'Electrical Isolation Process',
      estimatedTime: '30',
      totalTopics: '2',
      shortModuleDescription:
        'Electrical isolation is a critical step in LOTO procedures to safeguard maintenance personnel working on electrical equipment.',
      ModuleContent: [
        {
          id: '3',
          title: 'Importance of Electrical Isolation',
          titleDescription:
            'Electrical isolation is a critical step in LOTO procedures to safeguard maintenance personnel working on electrical equipment.',
          image: '',
          content:
            'Electrical isolation is a critical step in LOTO procedures to safeguard maintenance personnel working on electrical equipment. It involves disconnecting power sources to prevent electrical accidents.',
        },
        {
          id: '4',
          title: 'Testing and Verification',
          titleDescription:
            "Testing the MCCB to ensure it remains in the 'OFF' position is vital before proceeding with any work on the equipment.",
          image: '',
          content:
            "Testing the MCCB to ensure it remains in the 'OFF' position is vital before proceeding with any work on the equipment. By disconnecting the power source, you eliminate the risk of electric shock.",
        },
      ],
    },
    {
      id: '3',
      moduleName: 'Pneumatic Isolation Guidelines',
      estimatedTime: '30',
      totalTopics: '1',
      shortModuleDescription:
        'Pneumatic isolation guidelines for maintenance procedures involving pneumatic systems.',
      ModuleContent: [
        {
          id: '1',
          title: 'Pneumatic Isolation Guidelines',
          titleDescription:
            'Crucial aspect of maintenance procedures involving pneumatic systems.',
          image: 'image url related to the topic',
          content:
            'Pneumatic isolation is a crucial aspect of maintenance procedures that involve pneumatic systems. It is essential to follow specific steps to isolate and secure pneumatic energy sources effectively. The release of lockout/tag-out and restoring equipment to service in pneumatic systems requires clear communication with all affected employees, verification of the safety of the area, and ensuring safety devices and guards are in place. Removing the lock and tag only after these steps are completed and communicating system re-energization are key safety measures to prevent accidents.\n\nAnalogously, think of pneumatic isolation as parking a car before maintenance. Just as parking the car in a safe location away from traffic ensures safety during maintenance, isolating pneumatic energy sources in a secure manner protects workers from potential harm. Releasing the lockout/tag-out only after verifying safety measures and communicating the re-energization of the system is akin to ensuring all safety precautions are in place before resuming normal operations, emphasizing the importance of a systematic approach to safety.',
        },
      ],
    },
    {
      id: '4',
      moduleName: 'Importance of Maintenance Categories',
      estimatedTime: '25',
      totalTopics: '1',
      shortModuleDescription:
        'Understanding the importance of autonomous, preventive, and breakdown maintenance categories.',
      ModuleContent: [
        {
          id: '1',
          title: 'Importance of Maintenance Categories',
          titleDescription:
            'Categorized maintenance activities for equipment reliability and longevity.',
          image: 'image url related to the topic',
          content:
            'Maintenance activities are often categorized into autonomous maintenance, preventive maintenance, and breakdown maintenance, each serving a specific purpose in ensuring equipment reliability and longevity. Autonomous maintenance involves operators performing routine tasks to maintain equipment efficiency and cleanliness, contributing to overall equipment effectiveness. Preventive maintenance includes scheduled inspections and tasks to prevent equipment failures and extend its lifespan. Breakdown maintenance, on the other hand, focuses on repairing equipment after a failure occurs to minimize downtime.\n\nTo illustrate, think of maintenance categories as healthcare practices. Autonomous maintenance is like personal hygiene routines that individuals perform daily to stay healthy. Preventive maintenance is comparable to regular health check-ups and screenings to prevent illnesses, while breakdown maintenance is akin to seeking medical attention after experiencing symptoms. Just as a combination of these healthcare practices promotes well-being, a balance of autonomous, preventive, and breakdown maintenance ensures equipment reliability and operational efficiency, prolonging the lifespan of machinery and reducing unexpected downtime.',
        },
      ],
    },
    {
      id: '5',
      moduleName: 'Operator Isolation Procedures',
      estimatedTime: '20',
      totalTopics: '1',
      shortModuleDescription:
        'Critical procedures for ensuring the safety of operators and maintenance personnel during equipment maintenance.',
      ModuleContent: [
        {
          id: '1',
          title: 'Operator Isolation Procedures',
          titleDescription:
            'Critical for ensuring the safety of operators and maintenance personnel.',
          image: 'image url related to the topic',
          content:
            'Operator isolation procedures are critical for ensuring the safety of operators and maintenance personnel when working on equipment. In the context of a depositer panel, the operator must follow specific steps to isolate energy sources effectively. This includes moving the MCCB knob to disconnect the power supply, attaching lockout devices such as padlocks, and ensuring that the equipment cannot be activated during maintenance tasks.\n\nAnalogously, consider operator isolation procedures as setting up a barricade around a construction site. Just as a barricade restricts access to a hazardous area, operator isolation procedures restrict energy flow to equipment, safeguarding workers from potential dangers. The process of verifying the isolation measures and testing the equipment before maintenance is like inspecting the stability of a barricade before allowing construction work to proceed, emphasizing the importance of thorough safety checks in safeguarding personnel during maintenance activities.',
        },
      ],
    },
  ],
  setModuleData: (data) => set({ moduleData: data }),

  getModuleData: (id) => {
    return useAppStore.getState().moduleData.find((module) => module.id === id)
      .ModuleContent;
  },
}));
