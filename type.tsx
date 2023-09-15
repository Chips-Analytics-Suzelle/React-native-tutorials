import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StackParamList = {
  taApp:{
    name: string,
    surname: string,
    profession: string,
    } | undefined;
  home: undefined;
  patient: undefined;
  
  
  //dossier: undefined;
  doctorProfile:{
    name: string,
    surname: string,
    profession: string,
  };
  doctor: undefined;
};
export type BottomParamList = {
  dossier:  undefined;
  medicalRecord: undefined;
  guidepatient: {
    name: string,
    surname: string,
  } | undefined;
  
}

export type ScreenProp = NativeStackScreenProps<StackParamList>;
//export type ScreenProp2 = NativeStackScreenProps<StackParamList, 'guidepatient'>;
export type ScreenProp3 = NativeStackScreenProps<StackParamList, 'doctorProfile'>;
