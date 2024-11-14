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
});

export default styles;
