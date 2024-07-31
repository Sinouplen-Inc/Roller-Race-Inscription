import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 26149,
  login: 'vUi',
};

export const sampleWithPartialData: IUser = {
  id: 21677,
  login: 'f|zrXk@KHX\\fNr\\1u6aHC3\\UE\\P9qXT\\yJ',
};

export const sampleWithFullData: IUser = {
  id: 26210,
  login: 'z5.@3uOvYb\\WHOf\\7w',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
