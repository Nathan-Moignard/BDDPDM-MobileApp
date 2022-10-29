import {NavigationProp} from '@react-navigation/native';
import axios from 'axios';

export async function getDrugFromCIP(
  CIP13: string,
  navigation: NavigationProp<ReactNavigation.RootParamList>,
  isCIP13 = true,
) {
  try {
    const res = await axios.get(
      `https://api.drugs.nathanm.fr/cis-cip-bdpms?${
        isCIP13 ? 'CIP13' : 'CIP7'
      }=${CIP13}`,
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
