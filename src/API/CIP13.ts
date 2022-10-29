import {NavigationProp} from '@react-navigation/native';
import axios from 'axios';

export async function getDrugFromCIP13(
  CIP13: string,
  navigation: NavigationProp<ReactNavigation.RootParamList>,
) {
  try {
    const res = await axios.get(
      `https://api.drugs.nathanm.fr/cis-cip-bdpms?CIP13=${CIP13}`,
    );
    navigation.navigate('HomePage', res.data[0]);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return undefined;
    }
  }
}
