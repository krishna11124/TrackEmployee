import { StyleSheet } from "react-native";
import { Typography } from "../../../constant";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../../../constant/dimentions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  informationContainer: {
    marginBottom: hp(2),
    margin: hp(2),
  },

  screenTitleView: {
    alignItems: "center",
    justifyContent: "center",
  },
  screenTitleText: {
    ...Typography.H3Semibold24,
  },
  logOutButton: {
    width: wp(90),
    marginTop: hp(5),
  },
});

export default styles;
