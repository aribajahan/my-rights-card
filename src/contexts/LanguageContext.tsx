import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'bn' | 'zh' | 'ko' | 'hi';

export const languageNames: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  bn: 'বাংলা',
  zh: '中文',
  ko: '한국어',
  hi: 'हिन्दी',
};

type TranslationKey = 
  | 'appTitle'
  | 'tagline'
  | 'prepareCard'
  | 'reviewRights'
  | 'prepareCardDesc'
  | 'reviewRightsDesc'
  | 'selectLanguage'
  | 'next'
  | 'back'
  | 'skip'
  | 'selectStatus'
  | 'statusOptional'
  | 'usCitizen'
  | 'greenCard'
  | 'visaHolder'
  | 'dacaTps'
  | 'asylumSeeker'
  | 'undocumented'
  | 'preferNotToSay'
  | 'documentType'
  | 'documentOptional'
  | 'passport'
  | 'driversLicense'
  | 'stateId'
  | 'workPermit'
  | 'greenCardDoc'
  | 'visaI94'
  | 'dacaApproval'
  | 'tpsCard'
  | 'passportVisa'
  | 'otherDoc'
  | 'documentNumber'
  | 'documentNumberPlaceholder'
  | 'documentNumberNote'
  | 'emergencyContacts'
  | 'contactsOptional'
  | 'contactName'
  | 'contactPhone'
  | 'addContact'
  | 'removeContact'
  | 'previewRights'
  | 'generateCard'
  | 'saveCard'
  | 'shareCard'
  | 'downloadImage'
  | 'downloadSuccess'
  | 'shareFailed'
  | 'rightSilent'
  | 'rightSilentExplain'
  | 'rightDoor'
  | 'rightDoorExplain'
  | 'rightSearch'
  | 'rightSearchExplain'
  | 'rightLawyer'
  | 'rightLawyerExplain'
  | 'universalRights'
  | 'iceAtDoor'
  | 'stoppedCar'
  | 'stoppedStreet'
  | 'iceWorkplace'
  | 'warrantsDifference'
  | 'whatToCarry'
  | 'hotlinesResources'
  | 'startOver'
  | 'home';

type Translations = Record<TranslationKey, string>;

const translations: Record<Language, Translations> = {
  en: {
    appTitle: 'Know Your Rights',
    tagline: 'Be prepared. Stay calm. Know your rights.',
    prepareCard: 'Prepare My Card',
    reviewRights: 'Review My Rights',
    prepareCardDesc: 'Create a digital rights card to save on your phone',
    reviewRightsDesc: 'Learn what to do in different situations',
    selectLanguage: 'Select Your Language',
    next: 'Next',
    back: 'Back',
    skip: 'Skip',
    selectStatus: 'Select Your Status',
    statusOptional: 'This is optional and helps personalize your card',
    usCitizen: 'U.S. Citizen',
    greenCard: 'Green Card Holder',
    visaHolder: 'Visa Holder',
    dacaTps: 'DACA / TPS',
    asylumSeeker: 'Asylum Seeker',
    undocumented: 'Undocumented',
    preferNotToSay: 'Prefer not to say',
    documentType: 'Document Type',
    documentOptional: 'Select your ID type to include on your card',
    passport: 'Passport',
    driversLicense: "Driver's License",
    stateId: 'State ID',
    workPermit: 'Work Permit (EAD)',
    greenCardDoc: 'Green Card',
    visaI94: 'Visa / I-94',
    dacaApproval: 'DACA Approval Notice',
    tpsCard: 'TPS Card',
    passportVisa: 'Passport (with visa)',
    otherDoc: 'Other',
    documentNumber: 'Document Number (Optional)',
    documentNumberPlaceholder: 'Enter document number',
    documentNumberNote: 'This will be printed on your card for reference',
    emergencyContacts: 'Emergency Contacts',
    contactsOptional: 'Add up to 3 contacts who can help if needed',
    contactName: 'Name',
    contactPhone: 'Phone Number',
    addContact: 'Add Contact',
    removeContact: 'Remove',
    previewRights: 'Your Rights',
    generateCard: 'Generate My Card',
    saveCard: 'Save to Phone',
    shareCard: 'Share',
    downloadImage: 'Download Image',
    downloadSuccess: 'Card saved! Check your downloads.',
    shareFailed: 'Sharing not supported. Try saving instead.',
    rightSilent: 'You have the right to remain silent.',
    rightSilentExplain: 'You do not have to answer questions about where you were born, whether you are a U.S. citizen, or how you entered the country. You can say: "I am exercising my right to remain silent."',
    rightDoor: 'You do not have to open your door without a warrant signed by a judge.',
    rightDoorExplain: 'Ask officers to slip the warrant under the door or hold it to a window. A valid judicial warrant must be signed by a judge. ICE administrative warrants (Form I-200 or I-205) do not give officers the right to enter your home.',
    rightSearch: 'You do not have to consent to a search.',
    rightSearchExplain: 'You can say: "I do not consent to a search." If officers have a valid warrant or probable cause, they may search anyway, but you should not resist physically.',
    rightLawyer: 'You have the right to a lawyer.',
    rightLawyerExplain: 'If you are detained, you can say: "I want to speak to a lawyer." You have the right to make a phone call. Immigration officers cannot listen to calls with your lawyer.',
    universalRights: 'Your Universal Rights',
    iceAtDoor: 'ICE at Your Door',
    stoppedCar: 'Stopped in Your Car',
    stoppedStreet: 'Stopped on the Street',
    iceWorkplace: 'ICE at Your Workplace',
    warrantsDifference: 'Warrants: Know the Difference',
    whatToCarry: 'What to Carry',
    hotlinesResources: 'Hotlines & Resources',
    startOver: 'Start Over',
    home: 'Home',
  },
  es: {
    appTitle: 'Conoce Tus Derechos',
    tagline: '[TRANSLATE: Be prepared. Stay calm. Know your rights.]',
    prepareCard: '[TRANSLATE: Prepare My Card]',
    reviewRights: '[TRANSLATE: Review My Rights]',
    prepareCardDesc: '[TRANSLATE: Create a digital rights card to save on your phone]',
    reviewRightsDesc: '[TRANSLATE: Learn what to do in different situations]',
    selectLanguage: '[TRANSLATE: Select Your Language]',
    next: 'Siguiente',
    back: 'Atrás',
    skip: 'Omitir',
    selectStatus: '[TRANSLATE: Select Your Status]',
    statusOptional: '[TRANSLATE: This is optional and helps personalize your card]',
    usCitizen: '[TRANSLATE: U.S. Citizen]',
    greenCard: '[TRANSLATE: Green Card Holder]',
    visaHolder: '[TRANSLATE: Visa Holder]',
    dacaTps: 'DACA / TPS',
    asylumSeeker: '[TRANSLATE: Asylum Seeker]',
    undocumented: '[TRANSLATE: Undocumented]',
    preferNotToSay: '[TRANSLATE: Prefer not to say]',
    documentType: '[TRANSLATE: Document Type]',
    documentOptional: '[TRANSLATE: Select your ID type to include on your card]',
    passport: '[TRANSLATE: Passport]',
    driversLicense: "[TRANSLATE: Driver's License]",
    stateId: '[TRANSLATE: State ID]',
    workPermit: '[TRANSLATE: Work Permit (EAD)]',
    greenCardDoc: '[TRANSLATE: Green Card]',
    visaI94: '[TRANSLATE: Visa / I-94]',
    dacaApproval: '[TRANSLATE: DACA Approval Notice]',
    tpsCard: '[TRANSLATE: TPS Card]',
    passportVisa: '[TRANSLATE: Passport (with visa)]',
    otherDoc: '[TRANSLATE: Other]',
    documentNumber: '[TRANSLATE: Document Number (Optional)]',
    documentNumberPlaceholder: '[TRANSLATE: Enter document number]',
    documentNumberNote: '[TRANSLATE: This will be printed on your card for reference]',
    emergencyContacts: '[TRANSLATE: Emergency Contacts]',
    contactsOptional: '[TRANSLATE: Add up to 3 contacts who can help if needed]',
    contactName: 'Nombre',
    contactPhone: 'Teléfono',
    addContact: '[TRANSLATE: Add Contact]',
    removeContact: '[TRANSLATE: Remove]',
    previewRights: '[TRANSLATE: Your Rights]',
    generateCard: '[TRANSLATE: Generate My Card]',
    saveCard: '[TRANSLATE: Save to Phone]',
    shareCard: 'Compartir',
    downloadImage: '[TRANSLATE: Download Image]',
    downloadSuccess: '[TRANSLATE: Card saved! Check your downloads.]',
    shareFailed: '[TRANSLATE: Sharing not supported. Try saving instead.]',
    rightSilent: '[TRANSLATE: You have the right to remain silent.]',
    rightSilentExplain: '[TRANSLATE: You do not have to answer questions...]',
    rightDoor: '[TRANSLATE: You do not have to open your door without a warrant signed by a judge.]',
    rightDoorExplain: '[TRANSLATE: Ask officers to slip the warrant under the door...]',
    rightSearch: '[TRANSLATE: You do not have to consent to a search.]',
    rightSearchExplain: '[TRANSLATE: You can say: "I do not consent to a search."...]',
    rightLawyer: '[TRANSLATE: You have the right to a lawyer.]',
    rightLawyerExplain: '[TRANSLATE: If you are detained, you can say...]',
    universalRights: '[TRANSLATE: Your Universal Rights]',
    iceAtDoor: '[TRANSLATE: ICE at Your Door]',
    stoppedCar: '[TRANSLATE: Stopped in Your Car]',
    stoppedStreet: '[TRANSLATE: Stopped on the Street]',
    iceWorkplace: '[TRANSLATE: ICE at Your Workplace]',
    warrantsDifference: '[TRANSLATE: Warrants: Know the Difference]',
    whatToCarry: '[TRANSLATE: What to Carry]',
    hotlinesResources: '[TRANSLATE: Hotlines & Resources]',
    startOver: '[TRANSLATE: Start Over]',
    home: 'Inicio',
  },
  bn: {
    appTitle: '[TRANSLATE: Know Your Rights]',
    tagline: '[TRANSLATE: Be prepared. Stay calm. Know your rights.]',
    prepareCard: '[TRANSLATE: Prepare My Card]',
    reviewRights: '[TRANSLATE: Review My Rights]',
    prepareCardDesc: '[TRANSLATE: Create a digital rights card to save on your phone]',
    reviewRightsDesc: '[TRANSLATE: Learn what to do in different situations]',
    selectLanguage: '[TRANSLATE: Select Your Language]',
    next: '[TRANSLATE: Next]',
    back: '[TRANSLATE: Back]',
    skip: '[TRANSLATE: Skip]',
    selectStatus: '[TRANSLATE: Select Your Status]',
    statusOptional: '[TRANSLATE: This is optional and helps personalize your card]',
    usCitizen: '[TRANSLATE: U.S. Citizen]',
    greenCard: '[TRANSLATE: Green Card Holder]',
    visaHolder: '[TRANSLATE: Visa Holder]',
    dacaTps: 'DACA / TPS',
    asylumSeeker: '[TRANSLATE: Asylum Seeker]',
    undocumented: '[TRANSLATE: Undocumented]',
    preferNotToSay: '[TRANSLATE: Prefer not to say]',
    documentType: '[TRANSLATE: Document Type]',
    documentOptional: '[TRANSLATE: Select your ID type to include on your card]',
    passport: '[TRANSLATE: Passport]',
    driversLicense: "[TRANSLATE: Driver's License]",
    stateId: '[TRANSLATE: State ID]',
    workPermit: '[TRANSLATE: Work Permit (EAD)]',
    greenCardDoc: '[TRANSLATE: Green Card]',
    visaI94: '[TRANSLATE: Visa / I-94]',
    dacaApproval: '[TRANSLATE: DACA Approval Notice]',
    tpsCard: '[TRANSLATE: TPS Card]',
    passportVisa: '[TRANSLATE: Passport (with visa)]',
    otherDoc: '[TRANSLATE: Other]',
    documentNumber: '[TRANSLATE: Document Number (Optional)]',
    documentNumberPlaceholder: '[TRANSLATE: Enter document number]',
    documentNumberNote: '[TRANSLATE: This will be printed on your card for reference]',
    emergencyContacts: '[TRANSLATE: Emergency Contacts]',
    contactsOptional: '[TRANSLATE: Add up to 3 contacts who can help if needed]',
    contactName: '[TRANSLATE: Name]',
    contactPhone: '[TRANSLATE: Phone Number]',
    addContact: '[TRANSLATE: Add Contact]',
    removeContact: '[TRANSLATE: Remove]',
    previewRights: '[TRANSLATE: Your Rights]',
    generateCard: '[TRANSLATE: Generate My Card]',
    saveCard: '[TRANSLATE: Save to Phone]',
    shareCard: '[TRANSLATE: Share]',
    downloadImage: '[TRANSLATE: Download Image]',
    downloadSuccess: '[TRANSLATE: Card saved! Check your downloads.]',
    shareFailed: '[TRANSLATE: Sharing not supported. Try saving instead.]',
    rightSilent: '[TRANSLATE: You have the right to remain silent.]',
    rightSilentExplain: '[TRANSLATE: You do not have to answer questions...]',
    rightDoor: '[TRANSLATE: You do not have to open your door without a warrant signed by a judge.]',
    rightDoorExplain: '[TRANSLATE: Ask officers to slip the warrant under the door...]',
    rightSearch: '[TRANSLATE: You do not have to consent to a search.]',
    rightSearchExplain: '[TRANSLATE: You can say: "I do not consent to a search."...]',
    rightLawyer: '[TRANSLATE: You have the right to a lawyer.]',
    rightLawyerExplain: '[TRANSLATE: If you are detained, you can say...]',
    universalRights: '[TRANSLATE: Your Universal Rights]',
    iceAtDoor: '[TRANSLATE: ICE at Your Door]',
    stoppedCar: '[TRANSLATE: Stopped in Your Car]',
    stoppedStreet: '[TRANSLATE: Stopped on the Street]',
    iceWorkplace: '[TRANSLATE: ICE at Your Workplace]',
    warrantsDifference: '[TRANSLATE: Warrants: Know the Difference]',
    whatToCarry: '[TRANSLATE: What to Carry]',
    hotlinesResources: '[TRANSLATE: Hotlines & Resources]',
    startOver: '[TRANSLATE: Start Over]',
    home: '[TRANSLATE: Home]',
  },
  zh: {
    appTitle: '[TRANSLATE: Know Your Rights]',
    tagline: '[TRANSLATE: Be prepared. Stay calm. Know your rights.]',
    prepareCard: '[TRANSLATE: Prepare My Card]',
    reviewRights: '[TRANSLATE: Review My Rights]',
    prepareCardDesc: '[TRANSLATE: Create a digital rights card to save on your phone]',
    reviewRightsDesc: '[TRANSLATE: Learn what to do in different situations]',
    selectLanguage: '[TRANSLATE: Select Your Language]',
    next: '[TRANSLATE: Next]',
    back: '[TRANSLATE: Back]',
    skip: '[TRANSLATE: Skip]',
    selectStatus: '[TRANSLATE: Select Your Status]',
    statusOptional: '[TRANSLATE: This is optional and helps personalize your card]',
    usCitizen: '[TRANSLATE: U.S. Citizen]',
    greenCard: '[TRANSLATE: Green Card Holder]',
    visaHolder: '[TRANSLATE: Visa Holder]',
    dacaTps: 'DACA / TPS',
    asylumSeeker: '[TRANSLATE: Asylum Seeker]',
    undocumented: '[TRANSLATE: Undocumented]',
    preferNotToSay: '[TRANSLATE: Prefer not to say]',
    documentType: '[TRANSLATE: Document Type]',
    documentOptional: '[TRANSLATE: Select your ID type to include on your card]',
    passport: '[TRANSLATE: Passport]',
    driversLicense: "[TRANSLATE: Driver's License]",
    stateId: '[TRANSLATE: State ID]',
    workPermit: '[TRANSLATE: Work Permit (EAD)]',
    greenCardDoc: '[TRANSLATE: Green Card]',
    visaI94: '[TRANSLATE: Visa / I-94]',
    dacaApproval: '[TRANSLATE: DACA Approval Notice]',
    tpsCard: '[TRANSLATE: TPS Card]',
    passportVisa: '[TRANSLATE: Passport (with visa)]',
    otherDoc: '[TRANSLATE: Other]',
    documentNumber: '[TRANSLATE: Document Number (Optional)]',
    documentNumberPlaceholder: '[TRANSLATE: Enter document number]',
    documentNumberNote: '[TRANSLATE: This will be printed on your card for reference]',
    emergencyContacts: '[TRANSLATE: Emergency Contacts]',
    contactsOptional: '[TRANSLATE: Add up to 3 contacts who can help if needed]',
    contactName: '[TRANSLATE: Name]',
    contactPhone: '[TRANSLATE: Phone Number]',
    addContact: '[TRANSLATE: Add Contact]',
    removeContact: '[TRANSLATE: Remove]',
    previewRights: '[TRANSLATE: Your Rights]',
    generateCard: '[TRANSLATE: Generate My Card]',
    saveCard: '[TRANSLATE: Save to Phone]',
    shareCard: '[TRANSLATE: Share]',
    downloadImage: '[TRANSLATE: Download Image]',
    downloadSuccess: '[TRANSLATE: Card saved! Check your downloads.]',
    shareFailed: '[TRANSLATE: Sharing not supported. Try saving instead.]',
    rightSilent: '[TRANSLATE: You have the right to remain silent.]',
    rightSilentExplain: '[TRANSLATE: You do not have to answer questions...]',
    rightDoor: '[TRANSLATE: You do not have to open your door without a warrant signed by a judge.]',
    rightDoorExplain: '[TRANSLATE: Ask officers to slip the warrant under the door...]',
    rightSearch: '[TRANSLATE: You do not have to consent to a search.]',
    rightSearchExplain: '[TRANSLATE: You can say: "I do not consent to a search."...]',
    rightLawyer: '[TRANSLATE: You have the right to a lawyer.]',
    rightLawyerExplain: '[TRANSLATE: If you are detained, you can say...]',
    universalRights: '[TRANSLATE: Your Universal Rights]',
    iceAtDoor: '[TRANSLATE: ICE at Your Door]',
    stoppedCar: '[TRANSLATE: Stopped in Your Car]',
    stoppedStreet: '[TRANSLATE: Stopped on the Street]',
    iceWorkplace: '[TRANSLATE: ICE at Your Workplace]',
    warrantsDifference: '[TRANSLATE: Warrants: Know the Difference]',
    whatToCarry: '[TRANSLATE: What to Carry]',
    hotlinesResources: '[TRANSLATE: Hotlines & Resources]',
    startOver: '[TRANSLATE: Start Over]',
    home: '[TRANSLATE: Home]',
  },
  ko: {
    appTitle: '[TRANSLATE: Know Your Rights]',
    tagline: '[TRANSLATE: Be prepared. Stay calm. Know your rights.]',
    prepareCard: '[TRANSLATE: Prepare My Card]',
    reviewRights: '[TRANSLATE: Review My Rights]',
    prepareCardDesc: '[TRANSLATE: Create a digital rights card to save on your phone]',
    reviewRightsDesc: '[TRANSLATE: Learn what to do in different situations]',
    selectLanguage: '[TRANSLATE: Select Your Language]',
    next: '[TRANSLATE: Next]',
    back: '[TRANSLATE: Back]',
    skip: '[TRANSLATE: Skip]',
    selectStatus: '[TRANSLATE: Select Your Status]',
    statusOptional: '[TRANSLATE: This is optional and helps personalize your card]',
    usCitizen: '[TRANSLATE: U.S. Citizen]',
    greenCard: '[TRANSLATE: Green Card Holder]',
    visaHolder: '[TRANSLATE: Visa Holder]',
    dacaTps: 'DACA / TPS',
    asylumSeeker: '[TRANSLATE: Asylum Seeker]',
    undocumented: '[TRANSLATE: Undocumented]',
    preferNotToSay: '[TRANSLATE: Prefer not to say]',
    documentType: '[TRANSLATE: Document Type]',
    documentOptional: '[TRANSLATE: Select your ID type to include on your card]',
    passport: '[TRANSLATE: Passport]',
    driversLicense: "[TRANSLATE: Driver's License]",
    stateId: '[TRANSLATE: State ID]',
    workPermit: '[TRANSLATE: Work Permit (EAD)]',
    greenCardDoc: '[TRANSLATE: Green Card]',
    visaI94: '[TRANSLATE: Visa / I-94]',
    dacaApproval: '[TRANSLATE: DACA Approval Notice]',
    tpsCard: '[TRANSLATE: TPS Card]',
    passportVisa: '[TRANSLATE: Passport (with visa)]',
    otherDoc: '[TRANSLATE: Other]',
    documentNumber: '[TRANSLATE: Document Number (Optional)]',
    documentNumberPlaceholder: '[TRANSLATE: Enter document number]',
    documentNumberNote: '[TRANSLATE: This will be printed on your card for reference]',
    emergencyContacts: '[TRANSLATE: Emergency Contacts]',
    contactsOptional: '[TRANSLATE: Add up to 3 contacts who can help if needed]',
    contactName: '[TRANSLATE: Name]',
    contactPhone: '[TRANSLATE: Phone Number]',
    addContact: '[TRANSLATE: Add Contact]',
    removeContact: '[TRANSLATE: Remove]',
    previewRights: '[TRANSLATE: Your Rights]',
    generateCard: '[TRANSLATE: Generate My Card]',
    saveCard: '[TRANSLATE: Save to Phone]',
    shareCard: '[TRANSLATE: Share]',
    downloadImage: '[TRANSLATE: Download Image]',
    downloadSuccess: '[TRANSLATE: Card saved! Check your downloads.]',
    shareFailed: '[TRANSLATE: Sharing not supported. Try saving instead.]',
    rightSilent: '[TRANSLATE: You have the right to remain silent.]',
    rightSilentExplain: '[TRANSLATE: You do not have to answer questions...]',
    rightDoor: '[TRANSLATE: You do not have to open your door without a warrant signed by a judge.]',
    rightDoorExplain: '[TRANSLATE: Ask officers to slip the warrant under the door...]',
    rightSearch: '[TRANSLATE: You do not have to consent to a search.]',
    rightSearchExplain: '[TRANSLATE: You can say: "I do not consent to a search."...]',
    rightLawyer: '[TRANSLATE: You have the right to a lawyer.]',
    rightLawyerExplain: '[TRANSLATE: If you are detained, you can say...]',
    universalRights: '[TRANSLATE: Your Universal Rights]',
    iceAtDoor: '[TRANSLATE: ICE at Your Door]',
    stoppedCar: '[TRANSLATE: Stopped in Your Car]',
    stoppedStreet: '[TRANSLATE: Stopped on the Street]',
    iceWorkplace: '[TRANSLATE: ICE at Your Workplace]',
    warrantsDifference: '[TRANSLATE: Warrants: Know the Difference]',
    whatToCarry: '[TRANSLATE: What to Carry]',
    hotlinesResources: '[TRANSLATE: Hotlines & Resources]',
    startOver: '[TRANSLATE: Start Over]',
    home: '[TRANSLATE: Home]',
  },
  hi: {
    appTitle: '[TRANSLATE: Know Your Rights]',
    tagline: '[TRANSLATE: Be prepared. Stay calm. Know your rights.]',
    prepareCard: '[TRANSLATE: Prepare My Card]',
    reviewRights: '[TRANSLATE: Review My Rights]',
    prepareCardDesc: '[TRANSLATE: Create a digital rights card to save on your phone]',
    reviewRightsDesc: '[TRANSLATE: Learn what to do in different situations]',
    selectLanguage: '[TRANSLATE: Select Your Language]',
    next: '[TRANSLATE: Next]',
    back: '[TRANSLATE: Back]',
    skip: '[TRANSLATE: Skip]',
    selectStatus: '[TRANSLATE: Select Your Status]',
    statusOptional: '[TRANSLATE: This is optional and helps personalize your card]',
    usCitizen: '[TRANSLATE: U.S. Citizen]',
    greenCard: '[TRANSLATE: Green Card Holder]',
    visaHolder: '[TRANSLATE: Visa Holder]',
    dacaTps: 'DACA / TPS',
    asylumSeeker: '[TRANSLATE: Asylum Seeker]',
    undocumented: '[TRANSLATE: Undocumented]',
    preferNotToSay: '[TRANSLATE: Prefer not to say]',
    documentType: '[TRANSLATE: Document Type]',
    documentOptional: '[TRANSLATE: Select your ID type to include on your card]',
    passport: '[TRANSLATE: Passport]',
    driversLicense: "[TRANSLATE: Driver's License]",
    stateId: '[TRANSLATE: State ID]',
    workPermit: '[TRANSLATE: Work Permit (EAD)]',
    greenCardDoc: '[TRANSLATE: Green Card]',
    visaI94: '[TRANSLATE: Visa / I-94]',
    dacaApproval: '[TRANSLATE: DACA Approval Notice]',
    tpsCard: '[TRANSLATE: TPS Card]',
    passportVisa: '[TRANSLATE: Passport (with visa)]',
    otherDoc: '[TRANSLATE: Other]',
    documentNumber: '[TRANSLATE: Document Number (Optional)]',
    documentNumberPlaceholder: '[TRANSLATE: Enter document number]',
    documentNumberNote: '[TRANSLATE: This will be printed on your card for reference]',
    emergencyContacts: '[TRANSLATE: Emergency Contacts]',
    contactsOptional: '[TRANSLATE: Add up to 3 contacts who can help if needed]',
    contactName: '[TRANSLATE: Name]',
    contactPhone: '[TRANSLATE: Phone Number]',
    addContact: '[TRANSLATE: Add Contact]',
    removeContact: '[TRANSLATE: Remove]',
    previewRights: '[TRANSLATE: Your Rights]',
    generateCard: '[TRANSLATE: Generate My Card]',
    saveCard: '[TRANSLATE: Save to Phone]',
    shareCard: '[TRANSLATE: Share]',
    downloadImage: '[TRANSLATE: Download Image]',
    downloadSuccess: '[TRANSLATE: Card saved! Check your downloads.]',
    shareFailed: '[TRANSLATE: Sharing not supported. Try saving instead.]',
    rightSilent: '[TRANSLATE: You have the right to remain silent.]',
    rightSilentExplain: '[TRANSLATE: You do not have to answer questions...]',
    rightDoor: '[TRANSLATE: You do not have to open your door without a warrant signed by a judge.]',
    rightDoorExplain: '[TRANSLATE: Ask officers to slip the warrant under the door...]',
    rightSearch: '[TRANSLATE: You do not have to consent to a search.]',
    rightSearchExplain: '[TRANSLATE: You can say: "I do not consent to a search."...]',
    rightLawyer: '[TRANSLATE: You have the right to a lawyer.]',
    rightLawyerExplain: '[TRANSLATE: If you are detained, you can say...]',
    universalRights: '[TRANSLATE: Your Universal Rights]',
    iceAtDoor: '[TRANSLATE: ICE at Your Door]',
    stoppedCar: '[TRANSLATE: Stopped in Your Car]',
    stoppedStreet: '[TRANSLATE: Stopped on the Street]',
    iceWorkplace: '[TRANSLATE: ICE at Your Workplace]',
    warrantsDifference: '[TRANSLATE: Warrants: Know the Difference]',
    whatToCarry: '[TRANSLATE: What to Carry]',
    hotlinesResources: '[TRANSLATE: Hotlines & Resources]',
    startOver: '[TRANSLATE: Start Over]',
    home: '[TRANSLATE: Home]',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
