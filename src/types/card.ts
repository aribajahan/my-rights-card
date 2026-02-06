export type ImmigrationStatus = 
  | 'citizen'
  | 'greenCard'
  | 'visa'
  | 'dacaTps'
  | 'asylum'
  | 'undocumented'
  | 'preferNot'
  | null;

export type DocumentType = 
  | 'greenCard'
  | 'workPermit'
  | 'visaI94'
  | 'dacaApproval'
  | 'tpsCard'
  | 'passportVisa'
  | 'other'
  | null;

export interface DocumentInfo {
  type: DocumentType;
  number: string;
}

export interface EmergencyContact {
  id: string;
  name: string;
  phone: string;
}

export interface CardData {
  status: ImmigrationStatus;
  document: DocumentInfo;
  contacts: EmergencyContact[];
}

export const statusLabels: Record<Exclude<ImmigrationStatus, null>, string> = {
  citizen: 'U.S. Citizen',
  greenCard: 'Green Card Holder',
  visa: 'Visa Holder',
  dacaTps: 'DACA / TPS',
  asylum: 'Asylum Seeker',
  undocumented: 'Undocumented',
  preferNot: 'Status not specified',
};

export const statusGuidance: Record<Exclude<ImmigrationStatus, null>, string> = {
  citizen: 'As a U.S. citizen, carry proof of citizenship if possible.',
  greenCard: 'Carry your green card. You have the right to an attorney.',
  visa: 'Carry your visa documents. Know your visa expiration date.',
  dacaTps: 'Carry your EAD card. Know your attorney\'s contact info.',
  asylum: 'Carry proof of pending case. Contact your attorney immediately if detained.',
  undocumented: 'You still have constitutional rights. Stay calm and exercise them.',
  preferNot: '',
};

export const documentLabels: Record<Exclude<DocumentType, null>, string> = {
  greenCard: 'Green Card',
  workPermit: 'Work Permit (EAD)',
  visaI94: 'Visa / I-94',
  dacaApproval: 'DACA Approval Notice',
  tpsCard: 'TPS Card',
  passportVisa: 'Passport (with visa)',
  other: 'Other',
};
