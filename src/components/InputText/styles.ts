import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../../constant/dimentions";
import { Colors, Typography } from "../../constant";

const styles = StyleSheet.create({
  error: {
    marginTop: 4,
    marginLeft: 12,
    color: Colors.ERROR[300],
    maxWidth: wp(90),
    ...Typography.BodyRegular12,
  },
  secureBtn: {
    position: 'absolute',
    right: 15,
    top: 20,
},
eyeStyle: {
    height: wp(5),
    width: wp(5),
    resizeMode: 'contain',
}
});

export default styles;
