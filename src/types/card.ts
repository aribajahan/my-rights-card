export type ImmigrationStatus = 
  | 'citizen'
  | 'greenCard'
  | 'visa'
  | 'daca'
  | 'tps'
  | 'asylum'
  | 'preferNot'
  | null;

export type DocumentType = 
  | 'usPassport'
  | 'naturalizationCertificate'
  | 'greenCard'
  | 'visaI94'
  | 'dacaApproval'
  | 'workPermit'
  | 'tpsCard'
  | 'asylumReceipt'
  | 'none'
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
  daca: 'DACA Recipient',
  tps: 'TPS Holder',
  asylum: 'Asylum Seeker',
  preferNot: 'Prefer Not to Say',
};

export const statusGuidance: Record<Exclude<ImmigrationStatus, null>, string> = {
  citizen: 'As a U.S. citizen, carry proof of citizenship if possible.',
  greenCard: 'Carry your green card. You have the right to an attorney.',
  visa: 'Carry your visa documents. Know your visa expiration date.',
  daca: 'Carry your EAD card. Know your attorney\'s contact info.',
  tps: 'Carry your TPS card. Know your attorney\'s contact info.',
  asylum: 'Carry proof of pending case. Contact your attorney immediately if detained.',
  preferNot: '',
};

// Document options per status
export const documentOptionsByStatus: Record<Exclude<ImmigrationStatus, null | 'preferNot'>, { key: Exclude<DocumentType, null>; label: string }[]> = {
  citizen: [
    { key: 'usPassport', label: 'U.S. Passport' },
    { key: 'naturalizationCertificate', label: 'Naturalization Certificate' },
    { key: 'none', label: 'None / Prefer Not to Say' },
  ],
  greenCard: [
    { key: 'greenCard', label: 'Green Card' },
    { key: 'none', label: 'None / Prefer Not to Say' },
  ],
  visa: [
    { key: 'visaI94', label: 'Visa / I-94' },
    { key: 'none', label: 'None / Prefer Not to Say' },
  ],
  daca: [
    { key: 'dacaApproval', label: 'DACA Approval Notice' },
    { key: 'workPermit', label: 'Work Permit (EAD)' },
    { key: 'none', label: 'None / Prefer Not to Say' },
  ],
  tps: [
    { key: 'tpsCard', label: 'TPS Card' },
    { key: 'workPermit', label: 'Work Permit (EAD)' },
    { key: 'none', label: 'None / Prefer Not to Say' },
  ],
  asylum: [
    { key: 'asylumReceipt', label: 'Asylum Receipt Notice' },
    { key: 'workPermit', label: 'Work Permit (EAD)' },
    { key: 'none', label: 'None / Prefer Not to Say' },
  ],
};

export const documentLabels: Record<Exclude<DocumentType, null>, string> = {
  usPassport: 'U.S. Passport',
  naturalizationCertificate: 'Naturalization Certificate',
  greenCard: 'Green Card',
  visaI94: 'Visa / I-94',
  dacaApproval: 'DACA Approval Notice',
  workPermit: 'Work Permit (EAD)',
  tpsCard: 'TPS Card',
  asylumReceipt: 'Asylum Receipt Notice',
  none: 'None',
};
