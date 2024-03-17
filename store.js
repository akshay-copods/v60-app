import { create } from 'zustand';

const mockData = [
  {
    id: '1',
    moduleName: 'Ventilator Overview and Principles of Operation',
    estimatedTime: '60',
    totalTopics: '2',
    shortModuleDescription:
      'Understanding the Respironics V60 Ventilator and its operational principles',
    ModuleContent: [
      {
        id: '1',
        title: 'Definitions and General Information',
        titleDescription:
          'Overview of key definitions and modes of the Respironics V60 Ventilator',
        image: '',
        content:
          'The Respironics V60 Ventilator is a crucial medical device used to support patients with respiratory issues. Understanding key definitions is essential for its effective use. The ventilator incorporates various modes to provide optimal support, such as CPAP, PCV, S/T, and AVAPS. Each mode offers specific functionalities to adapt to diverse patient needs. For instance, CPAP mode delivers continuous positive airway pressure, maintaining airway patency during sleep apnea or respiratory distress. The PCV mode controls the pressure at the end of inhalation to support patients with compromised lung function. S/T mode combines spontaneous and timed breaths, ensuring adequate ventilation. Additionally, the AVAPS mode allows for automatic adjustment of pressure support levels to enhance comfort during therapy.',
      },
      {
        id: '2',
        title: 'Application and Example',
        titleDescription:
          'Illustrative example of how ventilator modes are applied in patient scenarios',
        image: '',
        content:
          'To illustrate, a patient with sleep apnea may benefit from the CPAP mode on the ventilator. By delivering continuous positive airway pressure, the device prevents airway collapse, promoting uninterrupted breathing during sleep. This application showcases how understanding the ventilator modes and their functions is vital for tailoring treatment to individual patient conditions.',
      },
    ],
  },
  {
    id: '2',
    moduleName: 'Preparing for Ventilation and Operation',
    estimatedTime: '45',
    totalTopics: '3',
    shortModuleDescription:
      'Preparation and operational knowledge for using the Respironics V60 Ventilator',
    ModuleContent: [
      {
        id: '1',
        title: 'Preparing for Ventilation',
        titleDescription:
          'Importance of proper setup and starting up the ventilator',
        image: '',
        content:
          'Before commencing ventilation with the Respironics V60 Ventilator, proper setup is crucial. This includes connecting external devices, such as oxygen sources, ensuring the patient circuit is correctly installed, and connecting to a stable power source. Adequate preparation guarantees smooth operation and patient safety. Starting up the ventilator involves navigating the graphical user interface efficiently and conducting a preoperational check to verify all settings and connections.',
      },
      {
        id: '2',
        title: 'Operation and Control Settings',
        titleDescription:
          'Understanding adjustable control settings and operational aspects',
        image: '',
        content:
          'During operation, users can change ventilation modes and control settings to adapt to patient requirements. This flexibility allows for personalized therapy adjustments. Additionally, features like the Ramp Time function enable gradual pressure adjustments for patient comfort. Changing alarm settings is essential to respond effectively to critical situations and ensure patient safety. Understanding these operational aspects ensures optimal use of the ventilator for patient care and comfort.',
      },
      {
        id: '3',
        title: 'Example of Operation',
        titleDescription:
          'Illustrative example of operational knowledge in clinical settings',
        image: '',
        content: `For instance, in a clinical setting, a respiratory therapist may need to adjust the ventilation mode from CPAP to S/T mode for a patient who requires a combination of spontaneous and timed breaths. By efficiently changing control settings and monitoring the patient's response, the therapist can provide tailored respiratory support using the ventilator. This example highlights the importance of operational knowledge in delivering precise and effective patient care.`,
      },
    ],
  },
  {
    id: '3',
    moduleName: 'Patient Monitoring and Alarms',
    estimatedTime: '45',
    totalTopics: '3',
    shortModuleDescription:
      'Understanding patient monitoring and alarm response',
    ModuleContent: [
      {
        id: '1',
        title: 'Patient Monitoring',
        titleDescription:
          'Effective patient monitoring and interpreting parameters',
        image: '',
        content:
          'Understanding display conventions, scaling waveform axes, and freezing/unfreezing waveforms to visualize and analyze patient data effectively.',
      },
      {
        id: '2',
        title: 'Alarms and Responses',
        titleDescription:
          'Understanding ventilator alarms and prompt responses',
        image: '',
        content:
          'Responding promptly to alarms, setting alarm loudness, and silencing alarms when necessary. Manual reset or clearing autoreset alarms for efficient addressing of alarm situations.',
      },
      {
        id: '3',
        title: 'Application in Clinical Practice',
        titleDescription: 'Clinical scenario and nurse response to alarms',
        image: '',
        content:
          "Nurse's role in addressing high inspiratory pressure alarm, assessing potential causes, and ensuring patient safety and well-being.",
      },
    ],
  },
  {
    id: '4',
    moduleName: 'Care and Maintenance of the Ventilator',
    estimatedTime: '60',
    totalTopics: '3',
    shortModuleDescription:
      'Proper care, maintenance, and storage of the ventilator',
    ModuleContent: [
      {
        id: '1',
        title: 'Decontamination and Preventive Maintenance',
        titleDescription: 'Proper cleaning and maintenance procedures',
        image: '',
        content:
          'Regular decontamination procedures and implementing preventive maintenance for optimal functionality and reduced risk of malfunctions.',
      },
      {
        id: '2',
        title: 'Repairs and Storage',
        titleDescription:
          'Understanding repair protocols and storage practices',
        image: '',
        content:
          "Understanding protocols for repairs, disposal, and storage. Proper storage practices to maintain the ventilator's readiness for patient use.",
      },
      {
        id: '3',
        title: 'Practical Example',
        titleDescription: "A technician's adherence to maintenance protocols",
        image: '',
        content:
          'Following prescribed maintenance schedules and procedures to prevent equipment malfunctions and ensure optimal performance for patient care.',
      },
    ],
  },
  {
    id: '5',
    moduleName: 'Technical Specifications and Warranty Compliance',
    estimatedTime: '60',
    totalTopics: '3',
    shortModuleDescription:
      'Training Module 5: Technical Specifications and Warranty Compliance',
    ModuleContent: [
      {
        id: '1',
        title: 'Understanding Technical Specifications',
        titleDescription:
          'The Respironics V60 Ventilator comes with detailed technical specifications',
        image: '',
        content:
          "The Respironics V60 Ventilator comes with detailed technical specifications that define its operational parameters and capabilities. These specifications include control settings, patient data metrics, alarm configurations, menu window settings, and diagnostic mode functions accessible to operators. Understanding these technical details is crucial for healthcare professionals to optimize the ventilator's performance and tailor patient care according to specific parameters.",
      },
      {
        id: '2',
        title: 'Warranty and Regulatory Compliance',
        titleDescription:
          'Compliance with warranty guidelines and regulatory standards is essential',
        image: '',
        content:
          'Compliance with warranty guidelines and regulatory standards is essential for ensuring the safe and effective use of the ventilator. The user manual provides information on warranty coverage, limitations, and procedures for warranty claims. Additionally, adherence to regulatory requirements, such as electromagnetic compatibility standards, WEEE recycling directives, and safety regulations, is necessary to maintain legal and operational compliance in healthcare settings.',
      },
      {
        id: '3',
        title: 'Practical Application',
        titleDescription:
          'A biomedical engineer conducting an equipment audit ensures',
        image: '',
        content:
          "A biomedical engineer conducting an equipment audit ensures that the Respironics V60 Ventilator meets all specified technical parameters outlined in the user manual. By verifying the ventilator's compliance with warranty terms and regulatory standards, the engineer mitigates risks associated with equipment malfunctions and non-compliance. This application underscores the significance of technical specifications, warranty adherence, and regulatory compliance in maintaining equipment quality and patient safety in healthcare settings.",
      },
    ],
  },
];

export const useAppStore = create((set) => ({
  isSignedIn: false,
  signedInUser: null,
  machineName: null,
  signIn: () => set({ isSignedIn: true }),
  moduleData: mockData,
  setModuleData: (data) => set({ moduleData: data }),
  setSignedInUser: (user) => set({ signedInUser: user }),
  setMachineName: (name) => set({ machineName: name }),

  getModuleData: (id) => {
    return useAppStore.getState().moduleData.find((module) => module.id === id)
      .ModuleContent;
  },

  completeModule: (id) => {
    let moduleDataCopy = useAppStore.getState().moduleData.map((module) => {
      if (module.id === id && module.status === 'PENDING') {
        return { ...module, status: 'COMPLETED' };
      } else if (
        Number(module.id) === Number(id) + 1 &&
        module.status === 'LOCKED'
      ) {
        return { ...module, status: 'PENDING' };
      }
      return module;
    });

    set({
      moduleData: moduleDataCopy,
    });
  },

  getModuleAssessment: (id) => {
    return useAppStore.getState().moduleData.find((module) => module.id === id)
      .assessment;
  },

  updateModuleAssessment: (id, assessment) => {
    let moduleDataCopy = useAppStore.getState().moduleData.map((module) => {
      if (module.id === id) {
        return { ...module, assessment };
      }
      return module;
    });

    set({
      moduleData: moduleDataCopy,
    });
  },
}));
