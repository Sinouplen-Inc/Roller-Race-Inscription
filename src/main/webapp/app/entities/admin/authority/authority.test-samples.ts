import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '2c6a1ac9-4402-43cc-842c-3913f685273b',
};

export const sampleWithPartialData: IAuthority = {
  name: '53f09513-d291-48a4-907d-6c2bb8b99c5c',
};

export const sampleWithFullData: IAuthority = {
  name: 'e1b2102c-6c06-4a3f-92a7-efb1631f1fbe',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
